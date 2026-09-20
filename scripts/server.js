const http = require('http');
const fs = require('fs');
const path = require('path');
const { importBarbofusSkin } = require('./import_barbofus');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = path.join(__dirname, '..');
const TRASH_FILE = path.join(ROOT_DIR, 'data', 'trash.json');
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

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

function getTrash() {
  try {
    if (fs.existsSync(TRASH_FILE)) {
      const content = fs.readFileSync(TRASH_FILE, 'utf8');
      const parsed = JSON.parse(content || '[]');
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {
    console.error('[Trash] Erreur lecture trash.json :', e);
  }
  return [];
}

function saveTrash(trashList) {
  try {
    const dir = path.dirname(TRASH_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(TRASH_FILE, JSON.stringify(trashList, null, 2), 'utf8');
  } catch (e) {
    console.error('[Trash] Erreur écriture trash.json :', e);
  }
}

function deleteSkinFiles(skinId) {
  const skinsDir = path.join(ROOT_DIR, 'assets', 'dofus', 'skins');
  if (fs.existsSync(skinsDir)) {
    const files = [`${skinId}.webp`, `${skinId}-hd.webp`, `${skinId}-head.webp`];
    files.forEach(f => {
      const p = path.join(skinsDir, f);
      if (fs.existsSync(p)) {
        try { fs.unlinkSync(p); } catch (e) {}
      }
    });
  }
}

function purgeExpiredTrash() {
  const trash = getTrash();
  const now = Date.now();
  const kept = [];
  let purgedCount = 0;

  trash.forEach(item => {
    const deletedAt = item.deletedAt ? new Date(item.deletedAt).getTime() : 0;
    if (now - deletedAt > SEVEN_DAYS_MS) {
      console.log(`[Trash] Purge définitive (+7 jours) du skin : ${item.skin ? item.skin.id : item.id}`);
      deleteSkinFiles(item.skin ? item.skin.id : item.id);
      purgedCount++;
    } else {
      kept.push(item);
    }
  });

  if (purgedCount > 0) {
    saveTrash(kept);
    console.log(`[Trash] Purge terminée : ${purgedCount} skin(s) supprimé(s) définitivement.`);
  }
}

function removeSkinFromDofusJs(content, skinId) {
  const idRegex = new RegExp(`['"]?id['"]?\\s*:\\s*['"]${skinId}['"]`);
  const idMatch = content.match(idRegex);
  if (!idMatch) return content;
  const idIndex = idMatch.index;
  let openBraceIndex = content.lastIndexOf('{', idIndex);
  let depth = 0;
  let closeBraceIndex = -1;
  for (let i = openBraceIndex; i < content.length; i++) {
    if (content[i] === '{') depth++;
    else if (content[i] === '}') {
      depth--;
      if (depth === 0) {
        closeBraceIndex = i;
        break;
      }
    }
  }
  if (closeBraceIndex === -1) return content;
  let start = openBraceIndex;
  while (start > 0 && (content[start - 1] === ' ' || content[start - 1] === '\t')) start--;
  if (start > 0 && content[start - 1] === '\n') start--;
  let end = closeBraceIndex + 1;
  if (end < content.length && content[end] === ',') end++;
  return content.slice(0, start) + content.slice(end);
}

function addSkinToDofusJs(skinObj) {
  const dofusJsPath = path.join(ROOT_DIR, 'data', 'dofus.js');
  if (!fs.existsSync(dofusJsPath)) return;
  let content = fs.readFileSync(dofusJsPath, 'utf8');
  content = removeSkinFromDofusJs(content, skinObj.id);
  const skinsArrayRegex = /const\s+SKINS\s*=\s*\[([\s\S]*?)\];/;
  const match = content.match(skinsArrayRegex);
  if (!match) return;
  const skinJsonString = JSON.stringify(skinObj, null, 4)
    .split('\n')
    .map(line => '    ' + line)
    .join('\n');
  const updatedSkinsArray = `const SKINS = [\n${skinJsonString},\n${match[1].trimStart()}`;
  content = content.replace(skinsArrayRegex, updatedSkinsArray + '\n  ];');
  fs.writeFileSync(dofusJsPath, content, 'utf8');
}

function findSkinInDofusJs(content, skinId) {
  const idRegex = new RegExp(`['"]?id['"]?\\s*:\\s*['"]${skinId}['"]`);
  const idMatch = content.match(idRegex);
  if (!idMatch) return null;
  const idIndex = idMatch.index;
  let openBraceIndex = content.lastIndexOf('{', idIndex);
  let depth = 0;
  let closeBraceIndex = -1;
  for (let i = openBraceIndex; i < content.length; i++) {
    if (content[i] === '{') depth++;
    else if (content[i] === '}') {
      depth--;
      if (depth === 0) {
        closeBraceIndex = i;
        break;
      }
    }
  }
  if (closeBraceIndex === -1) return null;
  const snippet = content.slice(openBraceIndex, closeBraceIndex + 1);
  try {
    return Function(`"use strict"; return (${snippet});`)();
  } catch (e) {
    return null;
  }
}

// Lancer la purge initiale au démarrage
purgeExpiredTrash();
setInterval(purgeExpiredTrash, 60 * 60 * 1000);

const server = http.createServer(async (req, res) => {
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

  // 2. API Trash Skins list (GET)
  if (pathname === '/api/trash-skins' && req.method === 'GET') {
    purgeExpiredTrash();
    const trash = getTrash();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true, trash }));
    return;
  }

  // 3. API Trash Skin (POST) - Déplacer vers la corbeille pour 7 jours
  if (pathname === '/api/trash-skin' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const data = JSON.parse(body || '{}');
        const skinId = data.id;
        if (!skinId) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: "ID manquant." }));
          return;
        }

        console.log(`[Trash] Déplacement vers la corbeille (7j) : ${skinId}`);
        const dofusJsPath = path.join(ROOT_DIR, 'data', 'dofus.js');
        let skinObj = data.skin;
        if (!skinObj && fs.existsSync(dofusJsPath)) {
          const content = fs.readFileSync(dofusJsPath, 'utf8');
          skinObj = findSkinInDofusJs(content, skinId);
        }

        if (fs.existsSync(dofusJsPath)) {
          let content = fs.readFileSync(dofusJsPath, 'utf8');
          content = removeSkinFromDofusJs(content, skinId);
          fs.writeFileSync(dofusJsPath, content, 'utf8');
        }

        const trash = getTrash().filter(t => (t.skin ? t.skin.id : t.id) !== skinId);
        const trashItem = {
          skin: skinObj || { id: skinId },
          deletedAt: data.deletedAt || Date.now()
        };
        trash.unshift(trashItem);
        saveTrash(trash);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, trashItem }));
      } catch (err) {
        console.error('[Trash] Erreur mise en corbeille :', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  // 4. API Restore Skin (POST) - Restaurer un skin depuis la corbeille
  if (pathname === '/api/restore-skin' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const data = JSON.parse(body || '{}');
        const skinId = data.id;
        if (!skinId) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: "ID manquant." }));
          return;
        }

        console.log(`[Trash] Restauration demandée pour le skin : ${skinId}`);
        const trash = getTrash();
        const item = trash.find(t => (t.skin ? t.skin.id : t.id) === skinId);
        const updatedTrash = trash.filter(t => (t.skin ? t.skin.id : t.id) !== skinId);
        saveTrash(updatedTrash);

        const restoredSkin = (item && item.skin) ? item.skin : data.skin;
        if (restoredSkin && restoredSkin.name) {
          addSkinToDofusJs(restoredSkin);
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, skin: restoredSkin }));
      } catch (err) {
        console.error('[Trash] Erreur restauration :', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  // 5. API Permanent Delete Skin (POST) - Suppression définitive immédiate
  if (pathname === '/api/delete-skin' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const data = JSON.parse(body || '{}');
        const skinId = data.id;
        if (!skinId) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: "ID manquant." }));
          return;
        }

        console.log(`[Server] Suppression définitive pour le skin : ${skinId}`);
        const dofusJsPath = path.join(ROOT_DIR, 'data', 'dofus.js');
        if (fs.existsSync(dofusJsPath)) {
          let content = fs.readFileSync(dofusJsPath, 'utf8');
          content = removeSkinFromDofusJs(content, skinId);
          fs.writeFileSync(dofusJsPath, content, 'utf8');
        }

        const trash = getTrash().filter(t => (t.skin ? t.skin.id : t.id) !== skinId);
        saveTrash(trash);

        deleteSkinFiles(skinId);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, id: skinId }));
      } catch (err) {
        console.error('[Server] Erreur lors de la suppression définitive :', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  // 6. API Import Barbofus endpoint
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

  // 7. Static Files Server
  let filePath = path.join(ROOT_DIR, pathname === '/' ? 'index.html' : pathname);
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
