import { chromium } from './node_modules/.pnpm/playwright@1.62.1/node_modules/playwright/index.mjs';

const BASE = process.env.BASE || 'http://localhost:4173';
const routes = [
  '/', '/contact', '/mbbs', '/mbbs/abroad', '/mbbs/india',
  '/mbbs/russia', '/mbbs/russia/crimea-federal-university',
  '/medical-pg/india', '/medical-pg/germany',
  '/study-abroad', '/study-abroad/germany',
  '/ausbildung', '/coaching', '/blog', '/eligibility-check',
  '/partner', '/about', '/privacy-policy',
  '/jobs-abroad/after-12th', '/jobs-abroad/healthcare',
  '/jobs-abroad/technical', '/jobs-abroad/hospitality',
  '/nonexistent-page-404',
];
const viewports = [
  { name: '320', width: 320, height: 720 },
  { name: '375', width: 375, height: 812 },
  { name: '425', width: 425, height: 900 },
];

const detect = () => {
  const docW = document.documentElement.clientWidth;
  const out = [];
  const scrollW = document.documentElement.scrollWidth;
  for (const el of document.querySelectorAll('body *')) {
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) continue;
    const st = getComputedStyle(el);
    if (st.visibility === 'hidden' || st.display === 'none' || st.opacity === '0') continue;
    // ignore elements that are inside an intentional horizontal scroller
    let p = el.parentElement, inScroller = false;
    while (p && p !== document.body) {
      const ps = getComputedStyle(p);
      if (ps.overflowX === 'auto' || ps.overflowX === 'scroll' || ps.overflowX === 'hidden') { inScroller = true; break; }
      p = p.parentElement;
    }
    if (inScroller) continue;
    if (st.position === 'fixed') continue;
    const overRight = r.right - docW;
    const overLeft = -r.left;
    if (overRight > 1 || overLeft > 1) {
      out.push({
        tag: el.tagName.toLowerCase(),
        cls: (el.className && el.className.baseVal !== undefined ? el.className.baseVal : String(el.className || '')).slice(0, 160),
        text: (el.textContent || '').trim().slice(0, 60),
        right: Math.round(r.right), left: Math.round(r.left), width: Math.round(r.width),
        overRight: Math.round(overRight), overLeft: Math.round(overLeft),
      });
    }
  }
  return { docW, scrollW, hasPageOverflow: scrollW > docW + 1, offenders: out };
};

const browser = await chromium.launch();
const report = [];
for (const vp of viewports) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  const page = await ctx.newPage();
  for (const route of routes) {
    try {
      await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(900);
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(600);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(300);
      const res = await page.evaluate(detect);
      if (res.hasPageOverflow || res.offenders.length) {
        report.push({ vp: vp.name, route, ...res });
      }
    } catch (e) {
      report.push({ vp: vp.name, route, error: String(e).slice(0, 200) });
    }
  }
  await ctx.close();
}
await browser.close();
console.log(JSON.stringify(report, null, 1));
