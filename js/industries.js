(function(){
  "use strict";
  const INDUSTRIES=[
    {name:"Supermarkets & Grocery",tag:"Food & Grocery",text:"High-volume checkout, barcode scanning, thermal receipts and cash handling.",i:0},
    {name:"Department Stores",tag:"Retail",text:"Multi-category retail with structured product, billing and inventory workflows.",i:1},
    {name:"Apparel & Garments",tag:"Fashion",text:"Variants, barcode labels, billing and stock movement across fashion counters.",i:2},
    {name:"Footwear Retail",tag:"Retail",text:"Fast product identification, size variants, barcode billing and receipts.",i:5},
    {name:"Pharmacies",tag:"Healthcare Retail",text:"Quick product lookup, billing, barcode workflows and printed records.",i:3},
    {name:"Consumer Electronics",tag:"Electronics",text:"Product-rich counters that benefit from barcode, billing and inventory workflows.",i:6},
    {name:"Mobile & Smartphone Stores",tag:"Electronics",text:"Track models, accessories, prices and customer transactions cleanly.",i:7},
    {name:"Beauty & Cosmetics",tag:"Beauty",text:"SKU-heavy beauty retail with barcode, billing and stock workflows.",i:8},
    {name:"Jewellery Stores",tag:"Luxury Retail",text:"High-value product catalogues need precise billing, records and customer handling.",i:9},
    {name:"Furniture & Home Décor",tag:"Home & Kitchen",text:"Large catalogues, quotations, billing and organized product records.",i:10},
    {name:"Hardware & Electrical",tag:"Trade Retail",text:"Inventory-heavy counters with structured product and barcode workflows.",i:11},
    {name:"Bakeries",tag:"Food Service",text:"Fast-moving products, quick checkout and receipt printing.",i:12},
    {name:"Sweet Shops & Desserts",tag:"Food Service",text:"High-footfall counters with fast billing and printed receipts.",i:13},
    {name:"Cafés & Coffee Shops",tag:"Food Service",text:"Touch-first ordering and quick counter billing for busy service periods.",i:14},
    {name:"QSR & Takeaway",tag:"Food Service",text:"Rapid transactions, kitchen-to-counter flow and receipt printing.",i:15},
    {name:"Restaurants & Dining",tag:"Food Service",text:"Menu billing, receipt printing and customer-facing checkout workflows.",i:16},
    {name:"Cloud Kitchens",tag:"Food Service",text:"Technology-led order and billing workflows for delivery-first operations.",i:17},
    {name:"Bookstores & Stationery",tag:"Retail",text:"Large SKU counts make barcode, labels and fast billing especially useful.",i:18},
    {name:"Pet Stores & Supplies",tag:"Retail",text:"Track food, accessories and repeat purchases with organized billing.",i:19},
    {name:"Auto Parts & Accessories",tag:"Automotive",text:"Product identification, stock control, labels and counter billing.",i:20},
    {name:"Wholesale Distributors",tag:"Wholesale",text:"Large catalogues and repeat transactions need structured billing workflows.",i:21},
    {name:"Warehouses & Stockists",tag:"Supply Chain",text:"Barcode labels, desktop systems and stock-led workflows for operations teams.",i:22},
    {name:"Logistics & Fulfilment",tag:"Supply Chain",text:"Labels, desktop systems, scanning and transaction records across dispatch flows.",i:22},
    {name:"Salons & Spas",tag:"Services",text:"Customer-friendly service billing and clean counter workflows.",i:23},
    {name:"Clinics & Service Counters",tag:"Services",text:"Professional front-desk billing and structured customer transaction handling.",i:24}
  ];
  const TAGS=["All","Retail","Food Service","Electronics","Beauty","Healthcare Retail","Wholesale","Supply Chain","Automotive","Home & Kitchen","Services","Luxury Retail","Fashion","Trade Retail"];

  function esc(v){return String(v??"").replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[c]));}
  function card(item){
    return '<article class="industry-visual-card reveal" data-tag="'+esc(item.tag)+'" data-name="'+esc(item.name.toLowerCase())+'">'+
      '<div class="industry-visual-media" data-sprite="'+item.i+'"><span class="industry-visual-number">'+String(item.i+1).padStart(2,"0")+'</span><span class="industry-visual-badge">'+esc(item.tag)+'</span></div>'+
      '<div class="industry-visual-body"><h3>'+esc(item.name)+'</h3><p>'+esc(item.text)+'</p><a href="contact.html?industry='+encodeURIComponent(item.name)+'">Discuss your setup <span>↗</span></a></div></article>';
  }
  function renderTags(active){
    const el=document.getElementById("industryChips"); if(!el)return;
    el.innerHTML=TAGS.map(t=>'<button type="button" class="industry-chip'+(t===active?" active":"")+'" data-tag="'+esc(t)+'">'+esc(t)+'</button>').join("");
  }
  function spritePosition(i){
    const x=i%5, y=Math.floor(i/5);
    return {x:(x/4)*100,y:(y/4)*100};
  }
  function hydrateImages(root=document){
    const sprite=window.LEARTECH_INDUSTRY_SPRITE;
    root.querySelectorAll("[data-sprite]").forEach(el=>{
      const pos=spritePosition(Number(el.dataset.sprite||0));
      if(sprite){
        el.style.backgroundImage="url('"+sprite+"')";
        el.style.backgroundPosition=pos.x+"% "+pos.y+"%";
      }
    });
  }
  function applyFilter(){
    const q=(document.getElementById("industrySearch")?.value||"").trim().toLowerCase();
    const active=document.querySelector(".industry-chip.active")?.dataset.tag||"All";
    let visible=0;
    document.querySelectorAll("#industryCards .industry-visual-card").forEach((cardEl,index)=>{
      const tag=cardEl.dataset.tag||"";
      const name=cardEl.dataset.name||"";
      const matchTag=active==="All"||tag===active;
      const matchQ=!q||name.includes(q)||tag.toLowerCase().includes(q);
      const show=matchTag&&matchQ;
      cardEl.hidden=!show;
      if(show){visible++;cardEl.classList.remove("industry-show");void cardEl.offsetWidth;cardEl.classList.add("industry-show");}
    });
    const out=document.getElementById("industryResultCount"); if(out)out.textContent=visible+" categories";
  }
  function initMotion(){
    if(!window.gsap||!window.ScrollTrigger||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".industry-hero h1",{y:60,opacity:0,duration:1,ease:"power4.out",delay:.08});
    gsap.from(".industry-hero p,.industry-hero-actions",{y:22,opacity:0,duration:.72,stagger:.1,ease:"power3.out",delay:.28});
    gsap.from(".industry-hero-panel",{x:45,opacity:0,duration:1,ease:"power4.out",delay:.18});
    gsap.utils.toArray(".industry-visual-card").forEach((el,i)=>{
      gsap.from(el,{y:45,opacity:0,duration:.7,ease:"power3.out",delay:(i%5)*.04,scrollTrigger:{trigger:el,start:"top 88%",once:true}});
    });
    gsap.utils.toArray(".industry-signal").forEach((el,i)=>{
      gsap.from(el,{x:30,opacity:0,duration:.55,ease:"power3.out",delay:i*.08,scrollTrigger:{trigger:".industry-hero-panel",start:"top 70%",once:true}});
    });
  }
  document.addEventListener("DOMContentLoaded",()=>{
    const grid=document.getElementById("industryCards"); if(!grid)return;
    grid.innerHTML=INDUSTRIES.map(card).join("");
    renderTags("All");
    hydrateImages(grid);
    grid.querySelectorAll(".industry-visual-card").forEach(el=>{
      el.addEventListener("mousemove",e=>{
        if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
        const r=el.getBoundingClientRect(); el.style.setProperty("--rx",((e.clientY-r.top)/r.height-.5)*-2.4+"deg"); el.style.setProperty("--ry",((e.clientX-r.left)/r.width-.5)*2.4+"deg");
      });
      el.addEventListener("mouseleave",()=>{el.style.removeProperty("--rx");el.style.removeProperty("--ry");});
    });
    document.getElementById("industryChips")?.addEventListener("click",e=>{
      const chip=e.target.closest(".industry-chip"); if(!chip)return;
      document.querySelectorAll(".industry-chip").forEach(x=>x.classList.remove("active"));
      chip.classList.add("active"); applyFilter();
    });
    document.getElementById("industrySearch")?.addEventListener("input",applyFilter);
    initMotion();
  });
})();