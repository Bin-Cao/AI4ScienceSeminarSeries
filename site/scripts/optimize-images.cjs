#!/usr/bin/env node
'use strict';
// Rebuild browser assets from originals; never recompress an optimized file.
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const crypto = require('node:crypto');
const { createRequire } = require('node:module');
let sharp;
try { sharp = require('sharp'); } catch {
  const runtime = path.join(os.homedir(), '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/package.json');
  sharp = createRequire(runtime)('sharp');
}
const args = process.argv.slice(2);
const option = (name, fallback) => args.includes(name) ? path.resolve(args[args.indexOf(name) + 1]) : fallback;
const root = option('--site-root', path.resolve(__dirname, '..'));
const outRoot = option('--output-root', root);
const assets = path.join(root, 'dist/assets');
const hash = data => crypto.createHash('sha256').update(data).digest('hex');
function files(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    if (entry.name === 'optimized') return [];
    const p = path.join(dir, entry.name);
    return entry.isDirectory() ? files(p) : [p];
  });
}
function compactSvg(text) {
  let result = text.replace(/<\?xml[\s\S]*?\?>/g, '').replace(/<!--[\s\S]*?-->/g, '').replace(/<!DOCTYPE[^>]*>/g, '');
  // Remove only unreferenced pattern definitions; all geometry stays exact.
  result = result.replace(/<pattern\b[^>]*\bid="([^"]+)"[^>]*>[\s\S]*?<\/pattern>/g, (whole, id) => {
    const outside = result.replace(whole, '');
    return outside.includes('#' + id) ? whole : '';
  });
  if (!/<(?:text|tspan)\b/.test(result)) result = result.replace(/>\s+</g, '><');
  result = result.replace(/\b(d|points)="([^"]*)"/g, (_, name, data) => `${name}="${data.replace(/\s+/g, ' ').trim()}"`);
  return result.trim() + '\n';
}
async function decoded(buffer, vector = false) {
  let image = sharp(buffer, vector ? { density: 288 } : {});
  return image.ensureAlpha().raw().toBuffer();
}
async function main() {
  const entries = [];
  for (const source of files(assets).filter(p => /\.(png|jpe?g|svg)$/i.test(p))) {
    const relative = path.relative(assets, source).split(path.sep).join('/');
    const original = fs.readFileSync(source);
    const meta = await sharp(original).metadata();
    const vector = /\.svg$/i.test(source);
    const lossless = vector || relative.startsWith('institutions/') || relative.startsWith('recaps/') || relative === 'scimindbin.jpg';
    let encoded;
    if (vector) {
      encoded = Buffer.from(compactSvg(original.toString('utf8')));
      const [before, after] = await Promise.all([decoded(original, true), decoded(encoded, true)]);
      if (!before.equals(after)) throw new Error(`SVG raster comparison failed: ${relative}`);
    } else {
      encoded = await sharp(original).rotate().webp(lossless ? { lossless: true, effort: 6 } : { quality: 94, effort: 6, smartSubsample: true }).toBuffer();
      if (lossless) {
        const [before, after] = await Promise.all([sharp(original).flatten({ background: '#ffffff' }).raw().toBuffer(), sharp(encoded).flatten({ background: '#ffffff' }).raw().toBuffer()]);
        if (!before.equals(after)) throw new Error(`Lossless pixel comparison failed: ${relative}`);
      }
    }
    const useful = encoded.length < original.length * 0.98;
    const target = useful ? 'assets/optimized/' + relative.replace(/\.(png|jpe?g)$/i, '.webp') : 'assets/' + relative;
    if (useful) {
      const dst = path.join(outRoot, 'dist', target);
      fs.mkdirSync(path.dirname(dst), { recursive: true });
      fs.writeFileSync(dst, encoded);
    }
    entries.push({ source: 'assets/' + relative, target, width: meta.width, height: meta.height, originalBytes: original.length, optimizedBytes: useful ? encoded.length : original.length, mode: useful ? (vector ? 'pixel-verified SVG minification' : lossless ? 'lossless WebP' : 'WebP quality 94, original dimensions') : 'original already compact', sourceSha256: hash(original), optimizedSha256: hash(useful ? encoded : original) });
    console.log(`${relative}: ${original.length} -> ${entries.at(-1).optimizedBytes}`);
  }
  const report = { policy: 'Preserve source assets, original resolution and aspect ratio. High-quality WebP for photos and posters; pixel-verified lossless encoding for logos and QR. Keep originals when encoding saves less than 2%.', entries };
  fs.mkdirSync(outRoot, { recursive: true });
  fs.writeFileSync(path.join(outRoot, 'image-optimization.json'), JSON.stringify(report, null, 2) + '\n');
}
main().catch(error => { console.error(error); process.exitCode = 1; });
