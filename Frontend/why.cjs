const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport:{width:375,height:812}, isMobile:true, hasTouch:true });
  await p.goto('http://localhost:4198/study-abroad/germany',{waitUntil:'networkidle'});
  await p.waitForTimeout(1500);
  const cdp = await p.context().newCDPSession(p);
  await cdp.send('DOM.enable'); await cdp.send('CSS.enable');
  const {root} = await cdp.send('DOM.getDocument');
  const {nodeId} = await cdp.send('DOM.querySelector',{nodeId:root.nodeId,selector:'section img'});
  const m = await cdp.send('CSS.getMatchedStylesForNode',{nodeId});
  console.log('--- rules setting height, in cascade order ---');
  (m.matchedCSSRules||[]).forEach(r=>{
    const h=(r.rule.style.cssProperties||[]).find(x=>x.name==='height');
    if(h) console.log(' ', r.rule.selectorList.text, '=> height:', h.value, h.disabled?'(disabled)':'');
  });
  const inline = m.inlineStyle && (m.inlineStyle.cssProperties||[]).find(x=>x.name==='height');
  console.log('inline height:', inline?inline.value:'none');
  await b.close();
})();
