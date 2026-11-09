import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const publicDir = path.join(root, 'public');
const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#082f49" />
      <stop offset="100%" stop-color="#09090b" />
    </linearGradient>
    <linearGradient id="border" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#22d3ee" />
      <stop offset="100%" stop-color="#0891b2" />
    </linearGradient>
    <linearGradient id="text" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#67e8f9" />
      <stop offset="100%" stop-color="#22d3ee" />
    </linearGradient>
  </defs>
  <!-- Background Card -->
  <rect x="4" y="4" width="120" height="120" rx="28" fill="url(#bg)" stroke="url(#border)" stroke-width="5" />
  <!-- MF Monogram -->
  <text x="64" y="83" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', monospace, sans-serif" font-size="54" font-weight="900" fill="url(#text)" text-anchor="middle" letter-spacing="-1.5">MF</text>
</svg>`;

// Write public/favicon.svg
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent);
console.log('✓ Created public/favicon.svg');

// Render PNGs using headless Chrome
function createHtml(size) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body {
    width: ${size}px;
    height: ${size}px;
    overflow: hidden;
    background: transparent;
  }
</style>
</head>
<body>
  ${svgContent.replace('width="128"', `width="${size}"`).replace('height="128"', `height="${size}"`)}
</body>
</html>`;
}

const tempHtml = path.join(publicDir, '_temp_fav.html');

// 1. Generate 128x128 favicon.png
fs.writeFileSync(tempHtml, createHtml(128));
execSync(`"${chrome}" --headless=new --disable-gpu --default-background-color=00000000 --window-size=128,128 --screenshot="${path.join(publicDir, 'favicon.png')}" "file://${tempHtml.replace(/\\/g, '/')}"`, { stdio: 'ignore' });
console.log('✓ Created public/favicon.png (128x128)');

// 2. Generate 180x180 apple-touch-icon.png
fs.writeFileSync(tempHtml, createHtml(180));
execSync(`"${chrome}" --headless=new --disable-gpu --default-background-color=00000000 --window-size=180,180 --screenshot="${path.join(publicDir, 'apple-touch-icon.png')}" "file://${tempHtml.replace(/\\/g, '/')}"`, { stdio: 'ignore' });
console.log('✓ Created public/apple-touch-icon.png (180x180)');

// Clean up temp
if (fs.existsSync(tempHtml)) {
  fs.unlinkSync(tempHtml);
}
console.log('✓ Cleaned up temporary files');
