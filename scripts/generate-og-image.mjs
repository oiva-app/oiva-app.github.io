import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import sharp from "sharp";

const root = resolve(import.meta.dirname, "..");
const outputPath = resolve(root, "public/og-image.png");

const width = 1200;
const height = 630;
const brandGreen = "#31513c";
const tagline = "AI-assisted incident investigation";

const backgroundPath = resolve(
  root,
  "src/assets/backgrounds/home-hero-light-source.png",
);
const logoPath = resolve(root, "src/assets/logo/oiva_logo_green_02.svg");

const logoWidth = 360;
const logoHeight = 108;
const logoOverscan = 4;
const logoTop = 229;
const taglineTop = 386;

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

const centerVeil = Buffer.from(`
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="veil" cx="50%" cy="49%" r="36%">
        <stop offset="0%" stop-color="#f8f5eb" stop-opacity="0.56"/>
        <stop offset="64%" stop-color="#f8f5eb" stop-opacity="0.28"/>
        <stop offset="100%" stop-color="#f8f5eb" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="bottom" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="#f8f5eb" stop-opacity="0"/>
        <stop offset="100%" stop-color="#f8f5eb" stop-opacity="0.14"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#veil)"/>
    <rect width="1200" height="630" fill="url(#bottom)"/>
  </svg>
`);

const taglineOverlay = Buffer.from(`
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <text
      x="600"
      y="${taglineTop}"
      fill="${brandGreen}"
      font-family="Inter, Source Sans 3, DejaVu Sans, Arial, sans-serif"
      font-size="38"
      font-weight="700"
      text-anchor="middle"
      dominant-baseline="middle"
    >${escapeHtml(tagline)}</text>
  </svg>
`);

await mkdir(dirname(outputPath), { recursive: true });

const logo = await sharp(logoPath)
  .resize({
    width: logoWidth + logoOverscan * 2,
    height: logoHeight + logoOverscan,
    fit: "contain",
  })
  .extract({
    left: logoOverscan,
    top: Math.round(logoOverscan / 2),
    width: logoWidth,
    height: logoHeight,
  })
  .png()
  .toBuffer();

await sharp(backgroundPath)
  .resize(width, height, { fit: "cover", position: "center" })
  .blur(0.35)
  .modulate({ brightness: 1.08, saturation: 0.94 })
  .composite([
    { input: centerVeil, left: 0, top: 0 },
    { input: logo, left: Math.round((width - logoWidth) / 2), top: logoTop },
    { input: taglineOverlay, left: 0, top: 0 },
  ])
  .png({
    compressionLevel: 9,
    adaptiveFiltering: true,
    palette: false,
  })
  .toFile(outputPath);

const metadata = await sharp(outputPath).metadata();

if (metadata.width !== width || metadata.height !== height) {
  throw new Error(
    `Expected ${width}x${height}, got ${metadata.width}x${metadata.height}`,
  );
}

console.log(`Generated ${outputPath} (${metadata.width}x${metadata.height})`);
