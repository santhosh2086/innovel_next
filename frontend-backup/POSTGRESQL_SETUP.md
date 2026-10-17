# PostgreSQL setup for INNOVEL

The backend now saves each enquiry to three places:

1. Local Excel backup: `backend/data/enquiries.xlsx`
2. PostgreSQL: `enquiries` table
3. Google Sheets: `Enquiries` tab

## 1. Install PostgreSQL dependency

From the `backend` folder:

```bash
npm install
```

This installs the `pg` package added to `package.json`.

## 2. Create the PostgreSQL database

For a local PostgreSQL installation:

```sql
CREATE DATABASE innovel;
```

The backend automatically creates the `enquiries` table when it starts.

## 3. Configure `backend/.env`

Set:

```env
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/innovel
DATABASE_SSL=false
```

If you use a cloud PostgreSQL provider that requires SSL, use:

```env
DATABASE_SSL=true
```

Keep the existing Google Sheets variables unchanged.

## 4. Start the backend

```bash
cd backend
npm run dev
```

Expected output:

```text
PostgreSQL connected and enquiries table is ready.
INNOVEL backend running on port 3001
```

When an enquiry is submitted, the backend logs the PostgreSQL save and the existing Google Sheets sync.

## Health check

Open:

`http://localhost:3001/api/health`

A configured PostgreSQL setup should return `postgres: true`.
