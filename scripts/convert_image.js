const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Arguments : node convert_image.js <chemin_png> <creator_id> <video_id> <weapon_name>
const [,, inputPng, creatorId, videoId, weaponName] = process.argv;

if (!inputPng || !creatorId || !videoId || !weaponName) {
  console.error("Usage: node scripts/convert_image.js <input_png> <creator_id> <video_id> <weapon_name>");
  process.exit(1);
}

const cleanWeaponName = weaponName.toUpperCase().replace(/[^A-Z0-9_-]/g, '');
const outputDir = path.join(__dirname, '..', 'assets', 'abi', creatorId, videoId);

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const hdPath = path.join(outputDir, `${cleanWeaponName}-hd.webp`);
const thumbPath = path.join(outputDir, `${cleanWeaponName}.webp`);

async function convert() {
  try {
    // 1. Version HD (qualité 85, résolution d'origine)
    await sharp(inputPng)
      .webp({ quality: 85 })
      .toFile(hdPath);
    console.log(`✓ HD WebP créée : ${hdPath}`);

    // 2. Version Vignette (qualité 80, largeur 900px, hauteur automatique)
    await sharp(inputPng)
      .resize(900)
      .webp({ quality: 80 })
      .toFile(thumbPath);
    console.log(`✓ Vignette WebP créée : ${thumbPath}`);

    // 3. Suppression du PNG d'origine
    if (fs.existsSync(inputPng)) {
      fs.unlinkSync(inputPng);
      console.log(`✓ PNG source supprimé : ${inputPng}`);
    }
  } catch (error) {
    console.error("Erreur lors de la conversion :", error);
    process.exit(1);
  }
}

convert();
