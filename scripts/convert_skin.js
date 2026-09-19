const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Usage: node scripts/convert_skin.js <input_image> <class_id> <gender: f|m> [head_image_or_crop] [id_number]
const [,, inputPath, classId, genderInput, headInput, customId] = process.argv;

if (!inputPath || !classId || !genderInput) {
  console.log("Usage: node scripts/convert_skin.js <input_image> <class_id> <gender: f|m> [head_image_or_crop] [id_number]");
  console.log("Example: node scripts/convert_skin.js sram.png sram f");
  process.exit(1);
}

const cleanClass = classId.toLowerCase().replace(/[^a-z0-9]/g, '');
const cleanGender = (genderInput.toLowerCase().startsWith('f') || genderInput.toLowerCase() === 'female') ? 'f' : 'm';
const outputDir = path.join(__dirname, '..', 'assets', 'dofus', 'skins');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Format demandé : [classe]-[f/m]-[nombre]
function getNextIdNumber() {
  if (customId) return customId;
  const files = fs.readdirSync(outputDir);
  const regex = new RegExp(`^${cleanClass}-${cleanGender}-(\\d+)(?:-hd|-head)?\\.webp$`, 'i');
  let max = 0;
  files.forEach(f => {
    const match = f.match(regex);
    if (match) {
      const n = parseInt(match[1], 10);
      if (n > max) max = n;
    }
  });
  return String(max + 1).padStart(3, '0');
}

const idNum = getNextIdNumber();
const fileBase = `${cleanClass}-${cleanGender}-${idNum}`;

const hdPath = path.join(outputDir, `${fileBase}-hd.webp`);
const thumbPath = path.join(outputDir, `${fileBase}.webp`);
const headPath = path.join(outputDir, `${fileBase}-head.webp`);

async function convert() {
  try {
    // 1. Version HD (qualité 90, max 1200px)
    await sharp(inputPath)
      .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 90 })
      .toFile(hdPath);
    console.log(`✓ HD WebP créée : ${hdPath}`);

    // 2. Version Vignette (qualité 84, 600x750px)
    await sharp(inputPath)
      .resize({ width: 600, height: 750, fit: 'cover', position: 'center' })
      .webp({ quality: 84 })
      .toFile(thumbPath);
    console.log(`✓ Vignette WebP créée : ${thumbPath}`);

    // 3. Tête / Visage si fourni
    if (headInput && fs.existsSync(headInput)) {
      await sharp(headInput)
        .resize({ width: 160, height: 160, fit: 'cover' })
        .webp({ quality: 88 })
        .toFile(headPath);
      console.log(`✓ Tête WebP créée : ${headPath}`);
    }

    console.log(`\nIdentifiant généré pour le skin : ${fileBase}`);
    console.log(`Image vignette : assets/dofus/skins/${fileBase}.webp`);
    console.log(`Image HD : assets/dofus/skins/${fileBase}-hd.webp`);
    if (headInput && fs.existsSync(headInput)) {
      console.log(`Image Tête : assets/dofus/skins/${fileBase}-head.webp`);
    }

  } catch (err) {
    console.error("Erreur lors de la conversion :", err);
    process.exit(1);
  }
}

convert();
