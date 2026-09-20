const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { execSync } = require('child_process');

// Class name to ID mapping
const CLASS_MAP = {
  'cra': 'cra', 'crâ': 'cra',
  'ecaflip': 'ecaflip',
  'eliotrope': 'eliotrope', 'éliotrope': 'eliotrope',
  'eniripsa': 'eniripsa',
  'enutrof': 'enutrof',
  'feca': 'feca', 'féca': 'feca',
  'forgelance': 'forgelance',
  'huppermage': 'huppermage',
  'iop': 'iop',
  'osamodas': 'osamodas',
  'ouginak': 'ouginak',
  'pandawa': 'pandawa',
  'roublard': 'roublard',
  'sacrieur': 'sacrieur',
  'sadida': 'sadida',
  'sram': 'sram',
  'steamer': 'steamer',
  'xelor': 'xelor', 'xélor': 'xelor',
  'zobal': 'zobal'
};

const ORDER_MAP = {
  1: 'coiffe',
  2: 'epaulieres',
  3: 'armes',
  4: 'cape',
  5: 'bouclier',
  6: 'costume',
  7: 'familier'
};

function parseBarbofusHTML(html, classOverride, genderOverride) {
  // 1. Name / Title
  let name = 'Nouveau Skin';
  const titleMatch = html.match(/<h2[^>]*>\s*([^<&]+?)\s*(?:&nbsp;)?\s*<\/h2>\s*<h2[^>]*>\s*par\s*<span[^>]*>\s*([^<]+?)\s*<\/span>\s*<\/h2>/i);
  if (titleMatch) {
    const skinTitle = titleMatch[1].trim();
    const author = titleMatch[2].trim();
    name = author ? `${skinTitle} (${author})` : skinTitle;
  } else {
    const singleTitle = html.match(/<h2[^>]*>\s*([^<&]+?)\s*(?:&nbsp;)?\s*<\/h2>/i);
    if (singleTitle) name = singleTitle[1].trim();
  }

  // 2. Class
  let classId = (classOverride && CLASS_MAP[classOverride.toLowerCase()]) || null;
  if (!classId) {
    for (const [rawName, cid] of Object.entries(CLASS_MAP)) {
      const regex = new RegExp(`>\\s*${rawName}\\s*<`, 'i');
      if (regex.test(html)) {
        classId = cid;
        break;
      }
    }
  }
  if (!classId) classId = 'sram';

  // 3. Gender
  let gender = genderOverride ? (genderOverride.toLowerCase().startsWith('f') ? 'female' : 'male') : null;
  if (!gender) {
    const genderMatch = html.match(/>\s*(Homme|Femme)\s*</i);
    if (genderMatch) {
      gender = genderMatch[1].toLowerCase() === 'femme' ? 'female' : 'male';
    } else {
      gender = 'female';
    }
  }

  // 4. Head / Face
  let headImage = '';
  let headName = 'Tête 1';
  const faceMatch = html.match(/<img[^>]*src="([^"]*faces\/unity\/[^"]+)"/i) || html.match(/<img[^>]*src="([^"]*faces\/[^"]+)"/i);
  if (faceMatch) {
    headImage = faceMatch[1].trim();
    const numMatch = headImage.match(/_(\d+)\.png/i);
    if (numMatch) {
      headName = `Tête ${parseInt(numMatch[1], 10)}`;
    }
  }

  // 5. Main Image URL
  let image = '';
  const ogMatch = html.match(/<meta property="og:image" content="([^"]+)"/i);
  if (ogMatch) {
    image = ogMatch[1].trim();
  } else {
    const imgMatch = html.match(/<img[^>]*src="([^"]*\/storage\/images\/skins\/[^"]+)"/i);
    if (imgMatch) image = imgMatch[1].trim();
  }

  // 6. Colors (Peau, Cheveux, Vet1, Vet2, Vet3, Vet4)
  const colors = {
    peau: '#A16F4D',
    cheveux: '#26221A',
    vetement1: '#EFE8CC',
    vetement2: '#6B4134',
    vetement3: '#6D423A',
    vetement4: '#492C24'
  };
  const colorMatches = Array.from(html.matchAll(/color:\s*['"]([0-9a-fA-F]{6})['"]/gi));
  if (colorMatches.length >= 6) {
    colors.peau = '#' + colorMatches[0][1].toUpperCase();
    colors.cheveux = '#' + colorMatches[1][1].toUpperCase();
    colors.vetement1 = '#' + colorMatches[2][1].toUpperCase();
    colors.vetement2 = '#' + colorMatches[3][1].toUpperCase();
    colors.vetement3 = '#' + colorMatches[4][1].toUpperCase();
    colors.vetement4 = '#' + colorMatches[5][1].toUpperCase();
  }

  // 7. Items (8 slots : Coiffe, Cape, Bouclier, Costume, Ailes, Épaulière, Armes, Familiers)
  const items = {
    coiffe: 'Aucune',
    cape: 'Aucune',
    bouclier: 'Aucun',
    costume: 'Aucun',
    ailes: 'Aucune',
    epaulieres: 'Aucune',
    armes: 'Aucune',
    familier: 'Aucun'
  };

  for (let i = 1; i <= 7; i++) {
    const regex = new RegExp(`\\border-${i}\\b(?:(?!\\border-[1-7]\\b)[\\s\\S])*?<p class="[^"]*min-\\[750px\\]:text-lg">([^<]+)<\\/p>`, 'i');
    const m = html.match(regex);
    const noneVal = (i === 1 || i === 2 || i === 4) ? 'Aucune' : 'Aucun';
    items[ORDER_MAP[i]] = m ? m[1].trim().replace(/&#039;/g, "'").replace(/&quot;/g, '"') : noneVal;
  }

  // Détection automatique des Ailes si placées dans le costume
  if (items.costume && items.costume.toLowerCase().startsWith('ailes')) {
    items.ailes = items.costume;
    items.costume = 'Aucun';
  }

  return {
    name,
    class: classId,
    gender,
    head: headName,
    headImage,
    image,
    colors,
    items
  };
}

async function downloadBuffer(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
    }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} lors du téléchargement de ${url}`);
  const arrayBuf = await res.arrayBuffer();
  return Buffer.from(arrayBuf);
}

function getNextSkinId(classId, gender, skinsDir) {
  const cleanClass = classId.toLowerCase().replace(/[^a-z0-9]/g, '');
  const cleanGender = gender === 'female' ? 'f' : 'm';
  if (!fs.existsSync(skinsDir)) {
    fs.mkdirSync(skinsDir, { recursive: true });
  }
  const files = fs.readdirSync(skinsDir);
  const regex = new RegExp(`^${cleanClass}-${cleanGender}-(\\d+)(?:-hd|-head)?\\.webp$`, 'i');
  let max = 0;
  files.forEach(f => {
    const match = f.match(regex);
    if (match) {
      const n = parseInt(match[1], 10);
      if (n > max) max = n;
    }
  });
  const idNum = String(max + 1).padStart(3, '0');
  return `${cleanClass}-${cleanGender}-${idNum}`;
}

async function importBarbofusSkin(urlOrId, classOverride, genderOverride) {
  let targetUrl = urlOrId.trim();
  if (/^\d+$/.test(targetUrl)) {
    targetUrl = `https://barbofus.com/unity-skin/${targetUrl}`;
  } else if (!targetUrl.startsWith('http')) {
    targetUrl = `https://barbofus.com/unity-skin/${targetUrl.replace(/[^0-9]/g, '')}`;
  }

  console.log(`🌐 Récupération de la page Barbofus : ${targetUrl}`);
  const pageRes = await fetch(targetUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
    }
  });
  if (!pageRes.ok) {
    throw new Error(`Impossible d'accéder à ${targetUrl} (HTTP ${pageRes.status})`);
  }
  const html = await pageRes.text();

  const skinData = parseBarbofusHTML(html, classOverride, genderOverride);
  console.log(`✓ Données extraites : "${skinData.name}" | Classe : ${skinData.class} | Sexe : ${skinData.gender}`);

  if (!skinData.image) {
    throw new Error("Impossible de trouver l'image du skin sur la page Barbofus.");
  }

  const rootDir = path.join(__dirname, '..');
  const skinsDir = path.join(rootDir, 'assets', 'dofus', 'skins');
  const skinId = getNextSkinId(skinData.class, skinData.gender, skinsDir);

  const thumbPath = path.join(skinsDir, `${skinId}.webp`);
  const hdPath = path.join(skinsDir, `${skinId}-hd.webp`);
  const headPath = path.join(skinsDir, `${skinId}-head.webp`);

  console.log(`📥 Téléchargement de l'illustration : ${skinData.image}`);
  const skinImgBuf = await downloadBuffer(skinData.image);

  // 1. HD WebP (max 1200)
  await sharp(skinImgBuf)
    .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(hdPath);

  // 2. Vignette WebP (600x750)
  await sharp(skinImgBuf)
    .resize({ width: 600, height: 750, fit: 'cover', position: 'center' })
    .webp({ quality: 84 })
    .toFile(thumbPath);

  // 3. Tête / Visage
  let headRelPath = '';
  if (skinData.headImage) {
    try {
      console.log(`📥 Téléchargement du visage : ${skinData.headImage}`);
      const headImgBuf = await downloadBuffer(skinData.headImage);
      await sharp(headImgBuf)
        .resize({ width: 160, height: 160, fit: 'cover' })
        .webp({ quality: 88 })
        .toFile(headPath);
      headRelPath = `assets/dofus/skins/${skinId}-head.webp`;
    } catch (headErr) {
      console.warn("⚠️ Impossible de télécharger le visage :", headErr.message);
    }
  }

  const finalSkinObject = {
    id: skinId,
    name: skinData.name,
    class: skinData.class,
    gender: skinData.gender,
    head: skinData.head,
    headImage: headRelPath,
    image: `assets/dofus/skins/${skinId}.webp`,
    imageFull: `assets/dofus/skins/${skinId}-hd.webp`,
    colors: skinData.colors,
    items: skinData.items
  };

  // Add to data/dofus.js
  const dofusJsPath = path.join(rootDir, 'data', 'dofus.js');
  let dofusJsContent = fs.readFileSync(dofusJsPath, 'utf8');

  const skinsArrayRegex = /const\s+SKINS\s*=\s*\[([\s\S]*?)\];/;
  const match = dofusJsContent.match(skinsArrayRegex);
  if (!match) {
    throw new Error("Impossible de localiser 'const SKINS = [...]' dans data/dofus.js");
  }

  const skinJsonString = JSON.stringify(finalSkinObject, null, 4)
    .split('\n')
    .map(line => '    ' + line)
    .join('\n');

  const updatedSkinsArray = `const SKINS = [\n${skinJsonString},\n${match[1].trimStart()}`;
  dofusJsContent = dofusJsContent.replace(skinsArrayRegex, updatedSkinsArray + '\n  ];');

  fs.writeFileSync(dofusJsPath, dofusJsContent, 'utf8');
  console.log(`✓ Ajouté dans data/dofus.js sous l'identifiant ${skinId}`);

  console.log("⚡ Compilation des assets via npm run build...");
  try {
    execSync('npm run build', { cwd: rootDir, stdio: 'inherit' });
  } catch (buildErr) {
    console.warn("Avertissement lors du build :", buildErr.message);
  }

  console.log(`\n🎉 Skin "${finalSkinObject.name}" importé avec succès !`);
  return finalSkinObject;
}

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.log("Usage: node scripts/import_barbofus.js <url_ou_id_skin> [classe] [sexe]");
    console.log("Exemple : node scripts/import_barbofus.js https://barbofus.com/unity-skin/104749");
    console.log("Exemple avec override : node scripts/import_barbofus.js 104749 forgelance female");
    process.exit(1);
  }

  const [urlInput, classInput, genderInput] = args;
  importBarbofusSkin(urlInput, classInput, genderInput)
    .then(() => process.exit(0))
    .catch(err => {
      console.error("\n❌ Erreur lors de l'import :", err.message);
      process.exit(1);
    });
}

module.exports = {
  parseBarbofusHTML,
  importBarbofusSkin,
  CLASS_MAP,
  ORDER_MAP
};
