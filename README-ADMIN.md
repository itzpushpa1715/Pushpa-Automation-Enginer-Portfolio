Admin API and panel — quick start

Overview
- A minimal file-backed API server is provided at `server/api.js`. It exposes:
  - GET /api/resume — returns `content/resume.json`
  - PUT /api/resume — updates `content/resume.json` and `public/resume.json` (requires `X-Admin-Token` header)
- A static admin UI is at `public/admin.html`. It calls the API to load/edit the resume JSON.

Run the API server (development)
1. From the project root, start the API server:

```powershell
# Windows PowerShell
$env:ADMIN_TOKEN = 'your-secret-token'
node server/api.js
```

or on Linux/macOS:

```bash
ADMIN_TOKEN=your-secret-token node server/api.js
```

2. By default the server listens on port 4000. If you run the Vite dev server on port 3000, the admin page will fetch the API using a relative path when opened at `http://localhost:3000/admin.html` (CORS is enabled).

Usage
- Open `http://localhost:3000/admin.html` in your browser.
- Provide the `Admin token` (the same value as `ADMIN_TOKEN`) then click Save to update the resume.
- The resume page at `/resume.html` will reflect changes immediately (it fetches `public/resume.json`).

Security notes
- This example uses a single static token. For production, secure with HTTPS, stronger auth (OAuth or user sessions), and do not keep tokens in client-side code.
- Consider storing content in a database if you need more robustness or multiple content types.
