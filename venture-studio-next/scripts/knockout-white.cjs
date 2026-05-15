/**
 * Makes near-white pixels transparent (RGBA). Tune threshold if edges look wrong.
 * Usage: node scripts/knockout-white.cjs <input.png> <output.png> [threshold 0-255]
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const input = process.argv[2];
const output = process.argv[3];
const threshold = Number(process.argv[4]) || 248;

if (!input || !output) {
  console.error("Usage: node scripts/knockout-white.cjs <input.png> <output.png> [threshold]");
  process.exit(1);
}

if (!fs.existsSync(input)) {
  console.error("Input not found:", input);
  process.exit(1);
}

(async () => {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const out = Buffer.from(data);
  for (let i = 0; i < out.length; i += 4) {
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];
    if (r >= threshold && g >= threshold && b >= threshold) {
      out[i + 3] = 0;
    }
  }
  await sharp(out, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toFile(output);
  console.log("Wrote", path.resolve(output), `(${info.width}x${info.height}, threshold=${threshold})`);
})();
