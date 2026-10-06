#!/usr/bin/env node
// Simple file-backed API server for editing content/resume.json
// No external dependencies required.

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.API_PORT || 4000;
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'change-me';

const CONTENT_DIR = path.resolve(__dirname, '..', 'content');
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

function contentPathForKey(key) {
  return path.resolve(CONTENT_DIR, key + '.json');
}

function publicPathForKey(key) {
  return path.resolve(PUBLIC_DIR, key + '.json');
}

function sendJSON(res, status, obj) {
  const body = JSON.stringify(obj, null, 2);
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Token',
  });
  res.end(body);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => data += chunk);
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  const parsed = url.parse(req.url, true);
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, X-Admin-Token',
    });
    return res.end();
  }

  // List keys: reads content directory for .json files
  if (parsed.pathname === '/api/keys' && req.method === 'GET') {
    try {
      const files = fs.readdirSync(CONTENT_DIR);
      const keys = files.filter(f => f.endsWith('.json')).map(f => f.replace(/\.json$/, ''));
      sendJSON(res, 200, keys);
    } catch (err) {
      sendJSON(res, 500, { error: 'Failed to list keys', details: String(err) });
    }
    return;
  }

  // Generic content endpoint: /api/content/:key
  const contentMatch = parsed.pathname.match(/^\/api\/content\/(.+)$/);
  if (contentMatch) {
    const key = decodeURIComponent(contentMatch[1]);

    if (req.method === 'GET') {
      try {
        const p = contentPathForKey(key);
        if (!fs.existsSync(p)) return sendJSON(res, 404, { error: 'Not found' });
        const content = fs.readFileSync(p, 'utf8');
        sendJSON(res, 200, JSON.parse(content));
      } catch (err) {
        sendJSON(res, 500, { error: 'Failed to read content', details: String(err) });
      }
      return;
    }

    if (req.method === 'PUT') {
      const token = req.headers['x-admin-token'];
      if (!token || token !== ADMIN_TOKEN) {
        sendJSON(res, 401, { error: 'Unauthorized: invalid admin token' });
        return;
      }

      try {
        const body = await readBody(req);
        const parsedJson = JSON.parse(body);
        // Write to both content and public so site can serve updated JSON
        fs.writeFileSync(contentPathForKey(key), JSON.stringify(parsedJson, null, 2), 'utf8');
        fs.writeFileSync(publicPathForKey(key), JSON.stringify(parsedJson, null, 2), 'utf8');
        sendJSON(res, 200, { ok: true });
      } catch (err) {
        sendJSON(res, 400, { error: 'Invalid JSON or write error', details: String(err) });
      }
      return;
    }
    return sendJSON(res, 405, { error: 'Method not allowed' });
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, () => {
  console.log(`API server listening on http://localhost:${PORT}`);
  console.log('Endpoints: GET /api/keys, GET /api/content/:key, PUT /api/content/:key (X-Admin-Token header)');
});
