import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import XLSX from 'xlsx'
import pg from 'pg'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const { Pool } = pg

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = Number(process.env.PORT || 3001)

const DATA_DIR = path.join(__dirname, 'data')
const XLSX_FILE = path.join(DATA_DIR, 'enquiries.xlsx')

const ADMIN_USER = process.env.ADMIN_USER || ''
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || ''
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || 'http://localhost:5173'

const GOOGLE_SHEETS_WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL || ''
const GOOGLE_SHEETS_SECRET = process.env.GOOGLE_SHEETS_SECRET || ''

const DATABASE_URL = process.env.DATABASE_URL || ''
const DATABASE_SSL = process.env.DATABASE_SSL === 'true'

let dbPool = null

if (DATABASE_URL) {
  dbPool = new Pool({
    connectionString: DATABASE_URL,
    ssl: DATABASE_SSL ? { rejectUnauthorized: false } : false,
  })

  dbPool.on('error', (error) => {
    console.error('Unexpected PostgreSQL pool error:', error)
  })
}

app.use(cors({ origin: FRONTEND_ORIGIN }))
app.use(express.json({ limit: '100kb' }))

async function initializeDatabase() {
  if (!dbPool) {
    console.log('PostgreSQL is not configured. Add DATABASE_URL to backend/.env')
    return
  }

  await dbPool.query(`
    CREATE TABLE IF NOT EXISTS enquiries (
      id SERIAL PRIMARY KEY,
      submitted_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
      name VARCHAR(255) NOT NULL,
      phone VARCHAR(50) NOT NULL,
      email VARCHAR(255) NOT NULL,
      interested_course VARCHAR(255),
      message TEXT
    )
  `)

  console.log('PostgreSQL connected and enquiries table is ready.')
}

async function saveToPostgres(enquiry) {
  if (!dbPool) return

  await dbPool.query(
    `
      INSERT INTO enquiries (
        submitted_at,
        name,
        phone,
        email,
        interested_course,
        message
      )
      VALUES ($1, $2, $3, $4, $5, $6)
    `,
    [
      enquiry['Submitted At'],
      enquiry['Name'],
      enquiry['Phone'],
      enquiry['Email'],
      enquiry['Interested Course'],
      enquiry['Message'],
    ]
  )

  console.log('PostgreSQL save successful.')
}

function readRows() {
  if (!fs.existsSync(XLSX_FILE)) return []

  const workbook = XLSX.readFile(XLSX_FILE)
  const sheet = workbook.Sheets[workbook.SheetNames[0]]

  return XLSX.utils.sheet_to_json(sheet, { defval: '' })
}

function writeRows(rows) {
  fs.mkdirSync(DATA_DIR, { recursive: true })

  const workbook = XLSX.utils.book_new()
  const sheet = XLSX.utils.json_to_sheet(rows, {
    header: [
      'Submitted At',
      'Name',
      'Phone',
      'Email',
      'Interested Course',
      'Message',
    ],
  })

  XLSX.utils.book_append_sheet(workbook, sheet, 'Enquiries')
  XLSX.writeFile(workbook, XLSX_FILE)
}

app.get('/api/health', async (_req, res) => {
  let postgres = false

  if (dbPool) {
    try {
      await dbPool.query('SELECT 1')
      postgres = true
    } catch {
      postgres = false
    }
  }

  res.json({
    ok: true,
    postgres,
    googleSheets: Boolean(GOOGLE_SHEETS_WEBHOOK_URL),
  })
})

app.post('/api/enquiries', async (req, res) => {
  try {
    const {
      name = '',
      phone = '',
      email = '',
      course = '',
      description = '',
    } = req.body || {}

    if (!String(name).trim() || !String(phone).trim() || !String(email).trim()) {
      return res.status(400).json({
        ok: false,
        message: 'Name, phone and email are required.',
      })
    }

    const enquiry = {
      'Submitted At': new Date().toISOString(),
      'Name': String(name).trim(),
      'Phone': String(phone).trim(),
      'Email': String(email).trim(),
      'Interested Course': String(course).trim(),
      'Message': String(description).trim(),
    }

    // 1. Excel backup
    try {
      const rows = readRows()
      rows.push(enquiry)
      writeRows(rows)
      console.log('Excel backup save successful.')
    } catch (error) {
      console.error('Excel save failed:', error)
      return res.status(500).json({
        ok: false,
        message: 'Unable to save enquiry to Excel.',
      })
    }

    // 2. PostgreSQL
    if (dbPool) {
      try {
        await saveToPostgres(enquiry)
      } catch (error) {
        console.error('PostgreSQL save failed:', error)
        return res.status(500).json({
          ok: false,
          message: 'Saved to Excel, but PostgreSQL save failed.',
        })
      }
    }

    // 3. Google Sheets
    if (GOOGLE_SHEETS_WEBHOOK_URL) {
      if (!GOOGLE_SHEETS_SECRET) {
        return res.status(500).json({
          ok: false,
          message: 'Google Sheets secret is not configured.',
        })
      }

      const sheetsPayload = JSON.stringify({
        secret: GOOGLE_SHEETS_SECRET,
        name: enquiry['Name'],
        phone: enquiry['Phone'],
        email: enquiry['Email'],
        course: enquiry['Interested Course'],
        description: enquiry['Message'],
      })

      console.log('Sending enquiry to Google Sheets...')

      const sheetsResponse = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: sheetsPayload,
        redirect: 'manual',
      })

      console.log('Google Sheets response status:', sheetsResponse.status)

      if (
        sheetsResponse.status === 301 ||
        sheetsResponse.status === 302 ||
        sheetsResponse.status === 303
      ) {
        console.log(
          'Google Sheets request accepted. Apps Script returned a redirect.'
        )
      } else {
        const sheetsText = await sheetsResponse.text()

        let sheetsResult = null
        try {
          sheetsResult = JSON.parse(sheetsText)
        } catch {
          sheetsResult = null
        }

        if (!sheetsResponse.ok || !sheetsResult?.ok) {
          console.error('Google Sheets sync failed:', sheetsText)
          return res.status(502).json({
            ok: false,
            message:
              'Saved to Excel and PostgreSQL, but Google Sheets sync failed.',
          })
        }

        console.log('Google Sheets sync successful.')
      }
    }

    return res.json({
      ok: true,
      message: 'Enquiry saved successfully.',
    })
  } catch (error) {
    console.error('Failed to save enquiry:', error)

    return res.status(500).json({
      ok: false,
      message: 'Unable to save enquiry.',
    })
  }
})

app.get('/api/enquiries/download', (req, res) => {
  if (!ADMIN_USER || !ADMIN_PASSWORD) {
    return res
      .status(503)
      .send('Admin download is not configured. Set ADMIN_USER and ADMIN_PASSWORD.')
  }

  const auth = String(req.headers.authorization || '')

  if (!auth.startsWith('Basic ')) {
    res.setHeader('WWW-Authenticate', 'Basic realm="INNOVEL Admin"')
    return res.status(401).send('Admin authentication required.')
  }

  const encoded = auth.slice(6).trim()
  let decoded = ''

  try {
    decoded = Buffer.from(encoded, 'base64').toString('utf8')
  } catch {
    decoded = ''
  }

  const separator = decoded.indexOf(':')
  const user = separator >= 0 ? decoded.slice(0, separator) : ''
  const password = separator >= 0 ? decoded.slice(separator + 1) : ''

  if (user !== ADMIN_USER || password !== ADMIN_PASSWORD) {
    res.setHeader('WWW-Authenticate', 'Basic realm="INNOVEL Admin"')
    return res.status(401).send('Invalid admin credentials.')
  }

  if (!fs.existsSync(XLSX_FILE)) {
    return res.status(404).send('No enquiries have been submitted yet.')
  }

  return res.download(XLSX_FILE, 'innovel-enquiries.xlsx')
})

async function startServer() {
  try {
    await initializeDatabase()

    app.listen(PORT, () => {
      console.log(`INNOVEL backend running on port ${PORT}`)
    })
  } catch (error) {
    console.error('Failed to initialize PostgreSQL:', error)
    process.exit(1)
  }
}

startServer()
