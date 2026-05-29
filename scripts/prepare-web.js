const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "www");
const files = [
  "index.html",
  "privacy-policy.html",
  "firebase-config.js",
  "manifest.webmanifest",
  "service-worker.js",
  "mobile-background01-logo-centered-small-up.png",
  "mobile-background01-logo-centered-small.png",
  "mobile-background01-logo-centered.png",
  "mobile-background01-logo-small.png",
  "mobile-background01.png",
  "watermark-logo-transparent.png",
  "watermark-logo.jpeg"
];

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const file of files) {
  fs.copyFileSync(path.join(root, file), path.join(outDir, file));
}

console.log(`Prepared ${files.length} web assets in ${outDir}`);
