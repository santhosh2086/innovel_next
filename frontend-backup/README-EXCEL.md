# INNOVEL — Excel enquiry storage

The frontend and backend are intentionally separated.

## 1. Frontend

From the project root:

```bash
npm install
npm run dev
```

Vite runs on `http://localhost:5173` and proxies `/api` to `http://localhost:3001`.

## 2. Backend

Open a second terminal:

```bash
cd backend
npm install
copy .env.example .env
npm start
```

On macOS/Linux, use `cp .env.example .env` instead of `copy`.

Edit `backend/.env`:

```env
PORT=3001
ADMIN_USER=admin
ADMIN_PASSWORD=your-strong-password
FRONTEND_ORIGIN=http://localhost:5173
```

## 3. Data location

Submitted enquiries are appended to:

`backend/data/enquiries.xlsx`

The `data` folder and Excel file are created automatically after the first successful submission.

## 4. Admin download

Use the existing **Admin · Download Excel** button in the website footer. It asks for the credentials configured in `backend/.env`.

## 5. Production

Run the backend from the `backend` folder and host the frontend separately or serve its built `dist` files with your chosen web server. If the frontend is hosted on another origin, set `VITE_ENQUIRY_ENDPOINT` to the public backend URL and set `FRONTEND_ORIGIN` to the frontend URL.
