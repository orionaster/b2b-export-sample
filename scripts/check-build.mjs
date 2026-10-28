import { readFile, access, stat } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';

const routes = ['en/', 'zh/', 'en/products/pfa-tubing/', 'zh/products/pfa-tubing/'];
const report = [];
for (const route of routes) {
  const html = await readFile(`dist/${route}index.html`, 'utf8');
  assert(html.includes(`lang="${route.slice(0, 2)}"`), `${route}: document language`);
  assert(html.includes('Concept sample for discussion'), `${route}: concept boundary`);
  assert(html.includes('noindex, nofollow'), `${route}: fiction not indexed`);
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${route}: one primary heading`);
  assert(html.includes('hreflang="en"') && html.includes('hreflang="zh-Hans"'), `${route}: locale links`);
  assert(!html.includes('fetch(') && !html.includes('XMLHttpRequest'), `${route}: no inquiry transmission`);
  if (route.includes('products')) {
    assert(html.includes('<table ') && html.includes('<caption>'), `${route}: semantic table`);
    assert.equal((html.match(/<th scope="row"/g) || []).length, 6, `${route}: six dimension records`);
  }
  for (const match of html.matchAll(/(?:href|src)="(\/b2b-export-sample\/[^"#]*)/g)) {
    const target = match[1].replace('/b2b-export-sample/', '').split('#')[0];
    await access(path.join('dist', target.endsWith('/') ? `${target}index.html` : target));
  }
  report.push({ route, bytes: Buffer.byteLength(html), staticLinksExist: true });
}
assert((await stat('dist/images/polymer-concept.webp')).size < 60000, 'compressed image budget');
console.log(JSON.stringify({ checkedAt: new Date().toISOString(), checks: report, imageBytes: (await stat('dist/images/polymer-concept.webp')).size }, null, 2));
