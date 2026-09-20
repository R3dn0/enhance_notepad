# Instructions for Integrating ABI Builds

This rule applies as soon as the user provides a YouTube video, its transcript, and potentially a PNG image for Arena Breakout: Infinite (ABI).

## Mandatory Process to Follow

### 1. Input Analysis

* **Creator:** Find the creator's name or code in the transcript (e.g., "Shamy", "Mavity").
* **Video ID & Weapon:** Extract the YouTube video ID and the weapon name (e.g., `AR-57`).
* **Build Info:** Locate the weapon cost (~230k), the total kit cost, the ammo type (SS198 Tier 5, SS190 Tier 4), and the associated equipment (vest/rig, helmet, armor, bag) in the transcript.
* **Tactical Notes:** Summarize key advice (e.g., magazine loading technique, savings via traders, shop bundles).

### 2. Image Processing

If a PNG image is provided:

* Run the conversion script:
  `NODE_PATH=node_modules node scripts/convert_image.js <png_path> <creator_id> <video_id> <weapon_name>`
  * *Example:* `NODE_PATH=node_modules node scripts/convert_image.js assets/abi/AR-57.png shamy ar57-budget AR-57`
* This script automatically generates the standard (900px) and HD WebP formats, then deletes the original PNG.

### 3. Updating `data/abi.js`

* Ensure the creator is present in the `tabs` list at the beginning of the file. If not, add them in the format `{ id: 'creator_id', label: 'Creator Label' }`.
* **Systematic "per video" subcategory structure:** All creators in `data.<creator_id>` must structure their content inside a `videos` array (`videos: [...]`), even if there is currently only a single video for that creator. Subtabs in the UI will display for every creator.
* Each video object inside `videos` must follow the standard structure:
  * `id`: video slug / build identifier (e.g., `ar57-budget`).
  * `label`: subtab button label with emoji (e.g., `🎬 Budget AR-57 (~230k)`).
  * `filters`: available filter pills (e.g., `[{ id: 'all', label: 'All' }, { id: 'budget', label: 'Budget' }]`).
  * `categories`: array of category sections:
    * **Header / Recap category:** First category containing a subcat with the video description, creator credentials/context, and the YouTube link: `🎬 <a href='https://www.youtube.com/watch?v=...'>Watch the video — ...</a>`.
    * **Build categories:** (e.g., `id: 'budget'`, `label: '💋 Budget'`), containing `subcats` with a summary `recap` and the `items` array.
  * Fill in the item fields: `cat`, `name`, `img`, `imgFull`, `weapon`, `ammo`, `helmet`, `headset`, `rig`, `armor`, `bag`, `total`, `note`.
  * `legend`: category color indicators (e.g., `[{ label: 'Budget — ~230k weapon build', color: 'var(--color-accent)' }]`).
  * Reuse existing names and emojis for categories (for consistency with graphic design guidelines). If a new category is needed, ask for user opinion.

### 4. Compilation and Verification

* Run `npm run build` to compile Tailwind and Sass files.
* Verify the return code and check for any errors.

### 5. Commit and Push

* Stage all relevant changes (`git add .`).
* Commit with a descriptive conventional commit message (e.g., `feat(abi): add <creator> <weapon> build and assets`).
* Push to the remote repository (`git push origin main`).

---

# Instructions for Integrating Dofus Skins

This rule applies as soon as the user provides screenshots, a character class, and gender for Dofus skins.

## Mandatory Process to Follow

### 1. Screenshot Analysis
From the user screenshot(s), extract:
* **Character Visual:** The Dofus character model in its full outfit.
* **Chosen Head / Face:** The selected face preset visual (cropped thumbnail) and number/label (e.g., "Tête 1").
* **Hexadecimal Colors:**
  - `peau` (Peau)
  - `cheveux` (Cheveux)
  - `vetement1` (Vêtement 1)
  - `vetement2` (Vêtement 2)
  - `vetement3` (Vêtement 3)
  - `vetement4` (Vêtement 4)
* **Cosmetic Equipment (7 slots aligned with Barbofus):**
  1. `coiffe`: Coiffe
  2. `cape`: Cape
  3. `bouclier`: Bouclier
  4. `costume`: Costume
  5. `epaulieres`: Épaulière
  6. `misc`: Misc (Armes, Ailes, Lames, etc.)
  7. `familier`: Familiers - monture - montilier
* **Class & Gender:** Class identifier (e.g., `sram`, `cra`, `iop`) and gender (`f` for female / `m` for male).

### 2. Image Processing & File Naming
* Always name skin files according to the format: `[classe]-[f/m]-[nombre]` (e.g. `sram-f-001`, `cra-m-001`).
* **Manual Conversion:**
  `node scripts/convert_skin.js <path_to_image> <class_id> <gender: f|m> [head_image_path]`
* **Barbofus Automated Import:**
  - Standard import: `node scripts/import_barbofus.js <url_or_id> [classe] [sexe]` (or `npm run import:skin <url>`)
  - Import with automatic git push: `node scripts/import_barbofus.js <url_or_id> --push` (or `npm run import:skin:push <url>`)
* This automatically generates:
  - Standard vignette: `assets/dofus/skins/<class_id>-<gender>-<num>.webp` (600x750px)
  - High resolution: `assets/dofus/skins/<class_id>-<gender>-<num>-hd.webp` (max 1200px)
  - Head thumbnail (if provided): `assets/dofus/skins/<class_id>-<gender>-<num>-head.webp` (160x160px)

### 3. Updating `data/dofus.js`
* Add a new entry to the `SKINS` array in `data/dofus.js`:
```javascript
{
  id: '<class_id>-<gender>-<num>',
  name: 'Nom du Skin',
  class: '<class_id>', // 'sram', 'cra', 'iop', etc.
  gender: 'female', // 'male' or 'female'
  head: 'Tête 1', // Nom ou numéro de la tête
  headImage: 'assets/dofus/skins/<class_id>-<gender>-<num>-head.webp', // Visuel de la tête
  image: 'assets/dofus/skins/<class_id>-<gender>-<num>.webp',
  imageFull: 'assets/dofus/skins/<class_id>-<gender>-<num>-hd.webp',
  colors: {
    peau: '#...',
    cheveux: '#...',
    vetement1: '#...',
    vetement2: '#...',
    vetement3: '#...',
    vetement4: '#...'
  },
  items: {
    coiffe: '...',
    cape: '...',
    bouclier: '...',
    costume: '...',
    epaulieres: '...',
    misc: '...',
    familier: '...'
  }
}
```

### 4. Compilation and Verification
* Run `npm run build` to compile Tailwind and Sass files.
* Ensure exit code is 0 and no errors are reported.

### 5. Commit and Push
* Stage all relevant changes (`git add .`).
* Commit with a descriptive message (e.g., `feat(dofus): add <class> <gender> <skin_name> skin`).
* Push to the remote repository (`git push origin main`).

