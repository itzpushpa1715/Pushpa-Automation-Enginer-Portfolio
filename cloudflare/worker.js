addEventListener('fetch', event => {
  event.respondWith(handle(event.request));
});

// We use the KV namespace bound as `RESUME` to store multiple content keys.
// Keys can be e.g. 'resume', 'social', 'projects_en', 'projects_fi', etc.

async function handle(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // List available keys
  if (pathname === '/api/keys' && request.method === 'GET') {
    try {
      const list = await RESUME.list();
      const keys = list.keys.map(k => k.name);
      return new Response(JSON.stringify(keys), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Failed to list keys', details: String(err) }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
  }

  // Backwards-compatible shortcut for /api/resume
  if (pathname === '/api/resume') {
    return handleContentKey(request, 'resume');
  }

  // Generic content endpoint: /api/content/:key
  const contentMatch = pathname.match(/^\/api\/content\/(.+)$/);
  if (contentMatch) {
    const key = decodeURIComponent(contentMatch[1]);
    return handleContentKey(request, key);
  }

  return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
}

async function handleContentKey(request, key) {
  if (request.method === 'GET') {
    try {
      const data = await RESUME.get(key);
      if (!data) {
        return new Response(JSON.stringify({ error: 'Not found' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
      }
      return new Response(data, { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Read failed', details: String(err) }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
  }

  if (request.method === 'PUT') {
    const token = request.headers.get('x-admin-token');
    if (!ADMIN_TOKEN || token !== ADMIN_TOKEN) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
    }

    try {
      const text = await request.text();
      JSON.parse(text); // validate
      await RESUME.put(key, text);
      return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Invalid JSON or write failed', details: String(err) }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
  }

  return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
}
