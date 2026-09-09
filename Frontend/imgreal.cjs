const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport:{width:375,height:812}, isMobile:true, hasTouch:true });
  await p.goto('http://localhost:4198/study-abroad/germany',{waitUntil:'networkidle'});
  // force all lazy images to load + settle
  await p.evaluate(async ()=>{
    document.querySelectorAll('img[loading="lazy"]').forEach(i=>i.loading='eager');
    window.scrollTo(0,document.body.scrollHeight);
  });
  await p.waitForTimeout(2500);
  await p.evaluate(()=>window.scrollTo(0,0));
  await p.waitForTimeout(1500);
  const r = await p.evaluate(()=>{
    const hero=document.querySelector('section img');
    const hb=hero.getBoundingClientRect(), pb=hero.parentElement.getBoundingClientRect();
    const cs=getComputedStyle(hero);
    const bad=[];
    document.querySelectorAll('img.h-full').forEach(img=>{
      if(!img.complete||img.naturalWidth===0) return;
      const bb=img.getBoundingClientRect(), par=img.parentElement.getBoundingClientRect();
      if(par.height>2 && bb.height < par.height-2) bad.push({cls:(img.className||'').toString().slice(0,38),h:Math.round(bb.height),ph:Math.round(par.height)});
    });
    return {heroImgH:Math.round(hb.height), heroParentH:Math.round(pb.height),
      computedHeight:cs.height, loadedShortfall:bad.length, sample:bad.slice(0,3)};
  });
  console.log(JSON.stringify(r,null,2));
  await b.close();
})();
