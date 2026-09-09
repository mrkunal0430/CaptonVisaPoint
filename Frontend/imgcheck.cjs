const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const paths = ['/study-abroad/germany','/study-abroad/uae','/study-abroad/canada',
                 '/study-abroad/germany/tu-munich','/mbbs/russia','/','/mbbs','/about'];
  const p = await b.newPage({ viewport:{width:375,height:812}, isMobile:true, hasTouch:true });
  for (const path of paths) {
    try{
      await p.goto('http://localhost:4197'+path,{waitUntil:'networkidle',timeout:30000});
      await p.waitForTimeout(1500);
      const r = await p.evaluate(()=>{
        const bad=[];
        document.querySelectorAll('img').forEach(img=>{
          const cls=(img.className||'').toString();
          const bb=img.getBoundingClientRect();
          const par=img.parentElement.getBoundingClientRect();
          // images that should fill their parent but don't
          if(/h-full/.test(cls) && par.height>2 && bb.height < par.height-2){
            bad.push({cls:cls.slice(0,40), imgH:Math.round(bb.height), parentH:Math.round(par.height)});
          }
        });
        return {total:document.querySelectorAll('img').length, bad};
      });
      console.log(`${path.padEnd(34)} imgs:${String(r.total).padStart(3)} shortfall:${r.bad.length}`, r.bad.length?JSON.stringify(r.bad.slice(0,2)):'✓');
    }catch(e){console.log(path,'ERR',e.message.slice(0,50));}
  }
  await b.close();
})();
