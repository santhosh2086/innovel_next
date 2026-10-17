# INNOVEL — Next.js Website + Express Backend

This repository contains the INNOVEL Next.js frontend and Express backend. Real `.env` files are intentionally excluded for security. Configure environment variables in your local environment and hosting dashboard using the `.env.example` files as a guide.

## Project structure

- `frontend/` — Next.js 14 app (deploy this directory as the Vercel Root Directory)
- `backend/` — Express API (deploy separately to a Node.js host such as Render if the site needs live APIs)

## Run locally on Windows

### 1. Frontend

```powershell
cd frontend
npm install
Copy-Item .env.example .env.local
```

Edit `frontend/.env.local` and set `BACKEND_URL` to the backend URL. For local development, use the port printed by the backend; the backend example defaults to port 3001. Then run:

```powershell
npm run dev
```

### 2. Backend

Open a second PowerShell window from the repository root:

```powershell
cd backend
npm install
Copy-Item .env.example .env
```

Edit `backend/.env` and provide the correct values. Keep credentials private. Start the API with:

```powershell
npm run dev
```

Use real values for required database, admin, and integration settings. Do not commit `.env` files.

## Publish to GitHub

1. Create a **private** empty repository at https://github.com/new
2. Open PowerShell in the folder containing this README.
3. Run:

```powershell
git init
git branch -M main
git add -A
git status --short
```

Review the staged files. Confirm that no `.env`, password, token, or other secret is staged. Then run:

```powershell
git commit -m "Prepare INNOVEL Next.js project"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Replace the GitHub URL with your repository URL. If `origin` already exists, inspect `git remote -v` instead of adding it again.

## Deploy frontend to Vercel

1. Import the GitHub repository at https://vercel.com/new
2. Set **Root Directory** to `frontend`.
3. Framework preset: Next.js. Build command: `npm run build`. Leave the output directory at its Next.js default.
4. Configure the production environment variables from `frontend/.env.example` in Vercel Project Settings. Set `BACKEND_URL` to the public URL of your deployed backend (no trailing slash is recommended).
5. Deploy and test the homepage, images/video, direct routes, forms, and API requests.

## Deploy backend separately

Deploy `backend/` to a Node.js hosting service. Set the start command to `npm start` and configure the variables listed in `backend/.env.example` using the host's environment settings. Set `FRONTEND_ORIGIN` to the deployed frontend URL and configure `DATABASE_URL` / SSL according to your database provider. Then update Vercel's `BACKEND_URL` and redeploy.

## Security notes

- Never upload real `.env` files, database URLs with credentials, admin passwords, webhook secrets, or API keys.
- If any secret was previously pushed to a public repository, rotate it; deleting the file alone is not sufficient.
- A successful build does not prove backend/database functionality. Test production APIs after both services are deployed.
