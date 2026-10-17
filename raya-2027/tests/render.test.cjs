const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const script = fs.readFileSync(path.join(root, 'app.js'), 'utf8');

class Element {
  constructor() { this.children = []; this.listeners = {}; this.dataset = {}; }
  append(...nodes) { this.children.push(...nodes); }
  replaceChildren(...nodes) { this.children = nodes; }
  set textContent(text) { this.children = [String(text)]; }
  get textContent() { return this.children.map(node => typeof node === 'string' ? node : node.textContent).join(''); }
  setAttribute(key, value) { this[key] = value; }
  addEventListener(event, handler) { this.listeners[event] = handler; }
}
function render(language, source = script) {
  const ids = Object.fromEntries([...html.matchAll(/\bid="([^"]+)"/g)].map(match => [match[1], new Element()]));
  const labels = [...html.matchAll(/data-i18n="([^"]+)"/g)].map(match => {
    const node = new Element();
    node.dataset.i18n = match[1];
    return node;
  });
  const future = new Element();
  future.dataset.i18n = 'futureLabel';
  future.textContent = 'Keep this HTML fallback';
  labels.push(future);
  const document = {
    documentElement: {}, getElementById: id => ids[id], querySelectorAll: () => labels,
    createElement: () => new Element(), createTextNode: text => {
      assert.equal(typeof text, 'string', 'Translations must not render undefined');
      return text;
    }
  };
  const context = vm.createContext({ document, URL,
    localStorage: { getItem: key => key === 'raya-2027-language' ? language : null },
    window: { setInterval() {} }
  });
  vm.runInContext(fs.readFileSync(path.join(root, 'trip.js'), 'utf8'), context);
  vm.runInContext(source, context);
  assert.equal(future.textContent, 'Keep this HTML fallback');
  for (const node of labels) assert.ok(node.textContent && !node.textContent.includes('undefined'), node.dataset.i18n);
  return { labels, ids };
}
for (const language of ['ms', 'en']) {
  const { labels, ids } = render(language);
  assert.equal(ids['summary-destination'].textContent, 'Ipoh, Perak');
  assert.match(labels.find(node => node.dataset.i18n === 'meetingDate').textContent, /21 (October|Oktober) 2026/);
  assert.match(labels.find(node => node.dataset.i18n === 'villaDescription').textContent, /private pool|kolam renang peribadi/);
}
const missingEnglish = script.replace("meetingTitle: 'Family meeting'", "unusedMeetingTitle: 'Family meeting'");
const fallback = render('en', missingEnglish);
assert.equal(fallback.labels.find(node => node.dataset.i18n === 'meetingTitle').textContent, 'Mesyuarat keluarga');
assert.match(html, /https:\/\/www.booking.com\/Share-tVBSp9/);
assert.match(html, /<th scope="row">LYL 108 Private Pool Villa<\/th>/);
for (const file of ['styles.css', 'trip.js', 'app.js']) {
  const hash = crypto.createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex').slice(0, 16);
  assert.ok(html.includes(`./${file}?v=${hash}"`), `Refresh the cache version for ${file}`);
}
console.log('PASS: both languages, translation fallbacks, meeting date, accommodation and asset cache versions.');
