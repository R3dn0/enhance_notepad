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
* Insert the data into the `data` object for the relevant creator, adhering to the existing JSON format:
  * `id`: build identifier (e.g., `ar57-budget`).
  * `label`: build title with movie emoji `🎬` and indicative price (e.g., `🎬 Budget AR-57 (~230k)`).
  * `filters`: available filters.
  * `categories`: structured build details.
  * Reuse the names and emojis for the Build category (for consistency with the graphic design guidelines). If a category has not been created yet, ask for my opinion.
  * Fill in the item fields: `cat`, `name`, `img`, `imgFull`, `weapon`, `ammo`, `helmet`, `headset`, `rig`, `armor`, `bag`, `total`, `note`.

### 4. Compilation and Verification
* Run `npm run build` to compile Tailwind and Sass files.
* Verify the return code and check for any errors.
