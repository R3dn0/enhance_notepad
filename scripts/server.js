const http = require('http');
const fs = require('fs');
const path = require('path');
const { importBarbofusSkin } = require('./import_barbofus');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = path.join(__dirname, '..');

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer(async (req, res) => {
  // Enable CORS for local dev
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = parsedUrl.pathname;

  // 1. API Status endpoint
  if (pathname === '/api/status') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', server: 'enhance_notepad_dev' }));
    return;
  }

  // 2. API Import Barbofus endpoint
  if (pathname === '/api/import-barbofus') {
    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', async () => {
        try {
          const data = JSON.parse(body || '{}');
          if (!data.url) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, error: "L'URL est requise." }));
            return;
          }

          console.log(`[Server] Requête d'import pour : ${data.url}`);
          const skin = await importBarbofusSkin(data.url, data.classId, data.gender);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true, skin }));
        } catch (err) {
          console.error('[Server] Erreur lors de l\'import :', err);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: err.message }));
        }
      });
      return;
    } else if (req.method === 'GET') {
      const urlParam = parsedUrl.searchParams.get('url');
      const classParam = parsedUrl.searchParams.get('class');
      const genderParam = parsedUrl.searchParams.get('gender');
      if (!urlParam) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: "Paramètre 'url' manquant." }));
        return;
      }
      try {
        const skin = await importBarbofusSkin(urlParam, classParam, genderParam);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, skin }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
      return;
    }
  }

  // 3. Static Files Server
  let filePath = path.join(ROOT_DIR, pathname === '/' ? 'index.html' : pathname);
  // Prevent directory traversal
  if (!filePath.startsWith(ROOT_DIR)) {
    res.writeHead(403);
    res.end('Access denied');
    return;
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('500 Server Error');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`\n🚀 Serveur enhance_notepad démarré sur : http://localhost:${PORT}`);
  console.log(`📌 Page Dofus : http://localhost:${PORT}/dofus.html`);
  console.log(`⚡ API Import Barbofus prête : http://localhost:${PORT}/api/import-barbofus\n`);
});
