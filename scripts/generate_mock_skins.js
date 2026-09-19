const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const outputDir = path.join(__dirname, '..', 'assets', 'dofus', 'skins');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const mockSkins = [
  {
    id: 'cra-sentinelle-sylvestre',
    title: 'Sentinelle Sylvestre',
    className: 'Crâ',
    gender: 'Homme ♂',
    bgColor1: '#0d2319',
    bgColor2: '#08120d',
    accentColor: '#2ec486',
    goldColor: '#e5b22d',
    symbol: '🏹'
  },
  {
    id: 'cra-archere-boreale',
    title: 'Archère Boréale',
    className: 'Crâ',
    gender: 'Femme ♀',
    bgColor1: '#0e232e',
    bgColor2: '#07131a',
    accentColor: '#36c7c4',
    goldColor: '#8ad5e0',
    symbol: '❄️'
  },
  {
    id: 'iop-guerrier-solaire',
    title: 'Guerrier Solaire',
    className: 'Iop',
    gender: 'Homme ♂',
    bgColor1: '#2d140e',
    bgColor2: '#140805',
    accentColor: '#e04b4b',
    goldColor: '#e5b22d',
    symbol: '⚔️'
  },
  {
    id: 'iop-championne-amakna',
    title: 'Championne d\'Amakna',
    className: 'Iop',
    gender: 'Femme ♀',
    bgColor1: '#121f30',
    bgColor2: '#080d17',
    accentColor: '#3a8ee6',
    goldColor: '#ffd166',
    symbol: '🛡️'
  },
  {
    id: 'ecaflip-gentleman-joueur',
    title: 'Gentleman Joueur',
    className: 'Ecaflip',
    gender: 'Homme ♂',
    bgColor1: '#23122c',
    bgColor2: '#0e0614',
    accentColor: '#a45ee5',
    goldColor: '#ffd166',
    symbol: '🎲'
  }
];

function generateSvg(skin) {
  return `
  <svg width="600" height="750" viewBox="0 0 600 750" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bgGrad" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="${skin.bgColor1}" />
        <stop offset="100%" stop-color="${skin.bgColor2}" />
      </radialGradient>
      <radialGradient id="haloGrad" cx="50%" cy="45%" r="40%">
        <stop offset="0%" stop-color="${skin.accentColor}" stop-opacity="0.35" />
        <stop offset="100%" stop-color="${skin.accentColor}" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="pedestalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="${skin.goldColor}" stop-opacity="0.5" />
        <stop offset="100%" stop-color="${skin.goldColor}" stop-opacity="0.05" />
      </linearGradient>
      <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${skin.accentColor}" />
        <stop offset="50%" stop-color="${skin.goldColor}" />
        <stop offset="100%" stop-color="${skin.accentColor}" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <!-- Background -->
    <rect width="600" height="750" fill="url(#bgGrad)" />

    <!-- Ambient Aura -->
    <circle cx="300" cy="340" r="220" fill="url(#haloGrad)" />

    <!-- Stylized Dofus Pattern Grid Lines -->
    <line x1="60" y1="0" x2="60" y2="750" stroke="${skin.accentColor}" stroke-opacity="0.06" stroke-width="1" />
    <line x1="540" y1="0" x2="540" y2="750" stroke="${skin.accentColor}" stroke-opacity="0.06" stroke-width="1" />
    <line x1="0" y1="600" x2="600" y2="600" stroke="${skin.accentColor}" stroke-opacity="0.06" stroke-width="1" />

    <!-- Stylized Pedestal / Shadow -->
    <ellipse cx="300" cy="540" rx="160" ry="32" fill="#000000" opacity="0.6" />
    <ellipse cx="300" cy="535" rx="130" ry="20" fill="none" stroke="url(#pedestalGrad)" stroke-width="2" />

    <!-- Class Symbol Emblem -->
    <g transform="translate(300, 310)" text-anchor="middle" filter="url(#glow)">
      <circle cx="0" cy="-20" r="110" fill="${skin.accentColor}" fill-opacity="0.12" stroke="${skin.accentColor}" stroke-opacity="0.4" stroke-width="2" />
      <text y="28" font-family="'JetBrains Mono', 'Segoe UI Emoji', sans-serif" font-size="96" fill="${skin.goldColor}">${skin.symbol}</text>
    </g>

    <!-- Silhouette / Character Representation -->
    <g transform="translate(300, 360)">
      <!-- Head -->
      <circle cx="0" cy="-140" r="38" fill="#e8cbb0" stroke="${skin.accentColor}" stroke-width="3" />
      <!-- Hair / Hat -->
      <path d="M-42 -145 C-40 -195, 40 -195, 42 -145 C20 -165, -20 -165, -42 -145 Z" fill="${skin.goldColor}" />
      <!-- Torso / Armor -->
      <path d="M-55 -95 L55 -95 L40 50 L-40 50 Z" fill="${skin.accentColor}" stroke="${skin.goldColor}" stroke-width="2" />
      <!-- Shoulders -->
      <circle cx="-65" cy="-85" r="22" fill="${skin.goldColor}" opacity="0.9" />
      <circle cx="65" cy="-85" r="22" fill="${skin.goldColor}" opacity="0.9" />
      <!-- Cape flowing behind -->
      <path d="M-50 -70 Q-100 60 -70 140 Q0 120 70 140 Q100 60 50 -70 Z" fill="#050a08" stroke="${skin.accentColor}" stroke-width="1.5" opacity="0.65" />
      <!-- Legs / Boots -->
      <rect x="-35" y="50" width="28" height="110" rx="6" fill="#14201c" stroke="${skin.accentColor}" stroke-width="1.5" />
      <rect x="7" y="50" width="28" height="110" rx="6" fill="#14201c" stroke="${skin.accentColor}" stroke-width="1.5" />
    </g>

    <!-- Card Inner Framing Border -->
    <rect x="18" y="18" width="564" height="714" rx="8" fill="none" stroke="url(#borderGrad)" stroke-width="1.5" stroke-opacity="0.4" />
    <rect x="24" y="24" width="552" height="702" rx="6" fill="none" stroke="${skin.accentColor}" stroke-width="0.8" stroke-opacity="0.2" />

    <!-- Corner Ornaments -->
    <path d="M 28 48 L 48 48 L 48 28" fill="none" stroke="${skin.goldColor}" stroke-width="2" />
    <path d="M 572 48 L 552 48 L 552 28" fill="none" stroke="${skin.goldColor}" stroke-width="2" />
    <path d="M 28 702 L 48 702 L 48 722" fill="none" stroke="${skin.goldColor}" stroke-width="2" />
    <path d="M 572 702 L 552 702 L 552 722" fill="none" stroke="${skin.goldColor}" stroke-width="2" />

    <!-- Bottom Badge Bar -->
    <rect x="36" y="628" width="528" height="76" rx="6" fill="#0e1714" fill-opacity="0.9" stroke="${skin.accentColor}" stroke-width="1.2" />
    
    <text x="56" y="658" font-family="'Oswald', sans-serif" font-size="22" font-weight="700" fill="#e6f4ed" letter-spacing="1">
      ${skin.title.toUpperCase()}
    </text>
    <text x="56" y="684" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="600" fill="${skin.accentColor}">
      ${skin.className} • ${skin.gender}
    </text>

    <!-- Watermark / Brand -->
    <text x="544" y="674" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="600" fill="${skin.goldColor}" text-anchor="end" letter-spacing="1">
      DOFUS SKINS
    </text>
  </svg>
  `;
}

async function run() {
  for (const s of mockSkins) {
    const svg = Buffer.from(generateSvg(s));
    const thumbPath = path.join(outputDir, `${s.id}.webp`);
    const hdPath = path.join(outputDir, `${s.id}-hd.webp`);

    await sharp(svg).webp({ quality: 84 }).toFile(thumbPath);
    await sharp(svg).webp({ quality: 92 }).toFile(hdPath);
    console.log(`Generated mock: ${s.id}.webp & -hd.webp`);
  }
}

run().catch(console.error);
