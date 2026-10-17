# INNOVEL — Google Sheets automatic enquiry saving

The backend keeps the existing Excel backup and also sends every enquiry to the INNOVEL Google Sheet.

Target spreadsheet:
https://docs.google.com/spreadsheets/d/1EEYpTndZCIlHCw1nr3ChHMnyuxyy9IdG1C-HjEWv_KI/edit

## 1. Deploy the Apps Script

1. Open the spreadsheet.
2. Go to **Extensions → Apps Script**.
3. Copy the contents of `apps-script/Code.gs` into the Apps Script editor.
4. Keep the `SPREADSHEET_ID` as provided. If you change the secret, use the exact same value in `backend/.env`.
5. Click **Deploy → New deployment**.
6. Select **Web app**.
7. Set **Execute as: Me**.
8. Set **Who has access: Anyone**.
9. Deploy and authorize when Google asks.
10. Copy the Web app URL ending in `/exec`.

## 2. Put the Web App URL in backend/.env

Replace:

`GOOGLE_SHEETS_WEBHOOK_URL=PASTE_YOUR_APPS_SCRIPT_EXEC_URL_HERE`

with the `/exec` URL you copied.

The secret must match:

`GOOGLE_SHEETS_SECRET=INNOVEL_SHEETS_2026_CHANGE_ME`

For production, change the secret in **both** `apps-script/Code.gs` and `backend/.env` to a long random value.

## 3. Run the project

Frontend terminal:

```bash
npm install
npm run dev
```

Backend terminal:

```bash
cd backend
npm install
npm start
```

Open the Vite URL, usually `http://localhost:5173`.

## 4. Result

Every successful form submission is written to:

- `backend/data/enquiries.xlsx`
- Google Sheet tab `Enquiries`

The Google Sheet columns are:

`Submitted At | Name | Phone | Email | Interested Course | Message`
