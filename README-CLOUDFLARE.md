Cloudflare Workers deployment — quick guide

This project includes a Cloudflare Worker that serves a small resume API backed by Workers KV.

Files added
- `cloudflare/worker.js` — the Worker script exposing `GET /api/resume` and `PUT /api/resume`.
- `cloudflare/wrangler.toml` — template for your Worker config.

Steps to deploy
1. Install Wrangler (Cloudflare CLI) — recommended globally:

```bash
npm install -g wrangler
```

2. Login to Cloudflare from your machine:

```bash
wrangler login
```

3. Create a KV namespace and note the binding name (example: `RESUME`):

```bash
wrangler kv:namespace create "RESUME" --preview"
```

The command prints an `id` and a `binding` name. Use that `binding` in your `wrangler.toml`.

4. Edit `cloudflare/wrangler.toml` to include KV bindings and account details. A minimal example:

```toml
name = "pushpa-resume-api"
main = "worker.js"
compatibility_date = "2026-01-01"

[[kv_namespaces]]
binding = "RESUME"
id = "<paste-kv-id-here>"
```

5. Set the admin token a Worker secret (do NOT commit this):

```bash
wrangler secret put ADMIN_TOKEN
# enter a strong token when prompted
```

6. Deploy the worker:

```bash
wrangler publish --env production
```

7. Initialize content (optional): PUT your `content/resume.json` so the Worker has initial data. Example using `curl`:

```bash
curl -X PUT "https://<your-worker-subdomain>/api/resume" \
  -H "Content-Type: application/json" \
  -H "X-Admin-Token: <your-token>" \
  --data-binary @content/resume.json
```

8. Update `public/admin.html` to point to the deployed Worker base URL (or open the admin on the same domain to use relative paths). The admin UI supports entering a full API base URL.

Security notes
- Use Cloudflare Access, authentication, or rotate tokens for production.
- Workers KV is low-cost and fast for small JSON objects. It's a good fit for this use case.

If you want, I can prepare a ready-to-publish `wrangler.toml` if you provide the Cloudflare `account_id` and KV namespace id (or I can guide you through creating them step-by-step).