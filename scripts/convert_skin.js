const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Usage: node scripts/convert_skin.js <input_image> <class_id> <skin_slug>
const [,, inputPath, classId, skinSlug] = process.argv;

if (!inputPath || !classId || !skinSlug) {
  console.log("Usage: node scripts/convert_skin.js <input_image> <class_id> <skin_slug>");
  console.log("Example: node scripts/convert_skin.js screenshot.png cra sentinelle-sylvestre");
  process.exit(1);
}

const cleanSlug = `${classId.toLowerCase()}-${skinSlug.toLowerCase().replace(/[^a-z0-9_-]/g, '')}`;
const outputDir = path.join(__dirname, '..', 'assets', 'dofus', 'skins');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const hdPath = path.join(outputDir, `${cleanSlug}-hd.webp`);
const thumbPath = path.join(outputDir, `${cleanSlug}.webp`);

async function convert() {
  try {
    // 1. Version HD (qualité 88, max 1200px)
    await sharp(inputPath)
      .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 88 })
      .toFile(hdPath);
    console.log(`✓ HD WebP créée : ${hdPath}`);

    // 2. Version Vignette (qualité 82, 600px)
    await sharp(inputPath)
      .resize({ width: 600, height: 750, fit: 'cover', position: 'center' })
      .webp({ quality: 82 })
      .toFile(thumbPath);
    console.log(`✓ Vignette WebP créée : ${thumbPath}`);

    // 3. Si inputPath est un fichier temporaire .tmp.png
    if (inputPath.endsWith('.tmp.png') && fs.existsSync(inputPath)) {
      fs.unlinkSync(inputPath);
    }
  } catch (err) {
    console.error("Erreur lors de la conversion :", err);
    process.exit(1);
  }
}

convert();
