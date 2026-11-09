import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const buildDir = path.join(root, 'build');

if (fs.existsSync(distDir)) {
  if (fs.existsSync(buildDir)) {
    fs.rmSync(buildDir, { recursive: true, force: true });
  }
  fs.cpSync(distDir, buildDir, { recursive: true });
  console.log('✓ Successfully synced dist -> build directory for Vercel deployment');
}
