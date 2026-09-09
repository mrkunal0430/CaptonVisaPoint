const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport:{width:375,height:812}, isMobile:true, hasTouch:true });
  await p.goto('http://localhost:4195/study-abroad/germany',{waitUntil:'networkidle'});
  await p.waitForTimeout(1800);
  const r = await p.evaluate(()=>{
    const sec=document.querySelector('section');
    const img=sec.querySelector('img');
    const wrap=img.parentElement;
    const g=e=>{const b=e.getBoundingClientRect();return {h:Math.round(b.height),w:Math.round(b.width),top:Math.round(b.top)};};
    const cs=getComputedStyle(img);
    return {section:g(sec), imgWrap:g(wrap), img:g(img),
      objectFit:cs.objectFit, imgH:cs.height, natural:{w:img.naturalWidth,h:img.naturalHeight},
      complete:img.complete, src:img.currentSrc.slice(0,70)};
  });
  console.log(JSON.stringify(r,null,2));
  await b.close();
})();
