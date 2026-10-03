(function(){
  "use strict";

  const INDUSTRIES=[
    ["Supermarkets & Grocery","Food & Grocery","High-volume checkout, barcode scanning, thermal receipts and cash handling.","retail"],
    ["Department Stores","Retail","Multi-category retail with structured product, billing and inventory workflows.","retail"],
    ["Apparel & Garments","Fashion","Variants, barcode labels, billing and stock movement across fashion counters.","retail"],
    ["Footwear Retail","Retail","Fast product identification, size variants, barcode billing and receipts.","retail"],
    ["Pharmacies","Healthcare Retail","Quick product lookup, billing, barcode workflows and printed records.","health"],
    ["Consumer Electronics","Electronics","Product-rich counters that benefit from barcode, billing and inventory workflows.","electronics"],
    ["Mobile & Smartphone Stores","Electronics","Track models, accessories, prices and customer transactions cleanly.","electronics"],
    ["Beauty & Cosmetics","Beauty","SKU-heavy beauty retail with barcode, billing and stock workflows.","beauty"],
    ["Jewellery Stores","Luxury Retail","High-value catalogues need precise billing, records and customer handling.","luxury"],
    ["Furniture & Home Décor","Home & Kitchen","Large catalogues, quotations, billing and organized product records.","home"],
    ["Hardware & Electrical","Trade Retail","Inventory-heavy counters with structured product and barcode workflows.","hardware"],
    ["Bakeries","Food Service","Fast-moving products, quick checkout and receipt printing.","bakery"],
    ["Sweet Shops & Dessert","Food Service","High-footfall counters with fast billing and printed receipts.","dessert"],
    ["Cafés & Coffee Shops","Food Service","Touch-first ordering and quick counter billing for busy service periods.","cafe"],
    ["QSR & Takeaway","Food Service","Rapid transactions, takeaway workflows and receipt printing.","qsr"],
    ["Restaurants & Dining","Food Service","Menu billing, receipt printing and customer-facing checkout workflows.","restaurant"],
    ["Cloud Kitchens","Food Service","Technology-led order and billing workflows for delivery-first operations.","cloud"],
    ["Bookstores & Stationery","Retail","Large SKU counts make barcode, labels and fast billing especially useful.","books"],
    ["Pet Stores & Supplies","Retail","Track food, accessories and repeat purchases with organized billing.","pet"],
    ["Auto Parts & Accessories","Automotive","Product identification, stock control, labels and counter billing.","auto"],
    ["Wholesale Distributors","Wholesale","Large catalogues and repeat transactions need structured billing workflows.","wholesale"],
    ["Warehouses & Stockists","Supply Chain","Barcode labels, desktop systems and stock-led workflows for operations.","warehouse"],
    ["Logistics & Fulfilment","Supply Chain","Labels, desktop systems, scanning and transaction records across dispatch flows.","logistics"],
    ["Salons & Spas","Services","Customer-friendly service billing and clean counter workflows.","salon"],
    ["Clinics & Service Counters","Services","Professional front-desk billing and structured customer transaction handling.","clinic"]
  ];
  const TAGS=["All","Retail","Food Service","Electronics","Healthcare Retail","Beauty","Wholesale","Supply Chain","Services","Fashion","Luxury Retail","Home & Kitchen","Trade Retail","Automotive"];

  const PALETTE=["#1675ed","#12a875","#e08a18","#7b61d8","#e0506d","#16a3a3","#f05d3f","#2d7dd2"];

  function esc(v){return String(v??"").replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[c]));}

  function sceneSvg(kind,accent,index){
    const a=accent;
    const common='<defs><linearGradient id="bg'+index+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="'+a+'" stop-opacity=".13"/></linearGradient></defs>'+
      '<rect width="100%" height="100%" rx="22" fill="url(#bg'+index+')"/>'+
      '<circle cx="315" cy="52" r="58" fill="'+a+'" opacity=".07"/>'+
      '<rect x="26" y="128" width="328" height="54" rx="12" fill="#f9fbfd" stroke="#dbe5ef"/>'+
      '<rect x="26" y="181" width="328" height="9" rx="4.5" fill="#1a2e45" opacity=".82"/>'+
      '<rect x="41" y="92" width="70" height="40" rx="8" fill="#fff" stroke="#dce6ef"/>'+
      '<rect x="50" y="99" width="52" height="24" rx="5" fill="'+a+'" opacity=".17"/>'+
      '<circle cx="84" cy="79" r="15" fill="#f2f6fa"/>'+
      '<path d="M76 77c5-9 14-9 18 0l-2 12H78z" fill="'+a+'" opacity=".85"/>'+
      '<path d="M79 70c2-8 10-10 14-3-3 7-9 9-14 3z" fill="#243b53"/>'+
      '<rect x="235" y="82" width="88" height="50" rx="10" fill="#fff" stroke="#dce6ef"/>'+
      '<rect x="247" y="92" width="42" height="22" rx="5" fill="'+a+'" opacity=".22"/>'+
      '<circle cx="303" cy="101" r="8" fill="'+a+'" opacity=".65"/>'+
      '<rect x="235" y="146" width="38" height="20" rx="5" fill="#e8eef4"/>'+
      '<rect x="279" y="146" width="44" height="20" rx="5" fill="'+a+'" opacity=".25"/>';
    let extra="";
    if(kind==="food"||kind==="bakery"||kind==="dessert"||kind==="cafe"||kind==="qsr"||kind==="restaurant"||kind==="cloud"){
      extra='<circle cx="136" cy="116" r="12" fill="#f5f1df"/><circle cx="164" cy="116" r="12" fill="#f3d1b3"/><rect x="126" y="96" width="12" height="20" rx="6" fill="#e8a04b"/><rect x="155" y="94" width="12" height="22" rx="6" fill="#d86b55"/>';
    }else if(kind==="health"||kind==="clinic"){
      extra='<rect x="133" y="91" width="38" height="36" rx="8" fill="#fff" stroke="#dbe5ef"/><path d="M152 98v22M141 109h22" stroke="'+a+'" stroke-width="6" stroke-linecap="round"/>';
    }else if(kind==="electronics"||kind==="books"){
      extra='<rect x="130" y="86" width="58" height="43" rx="7" fill="#fff" stroke="#dbe5ef"/><rect x="138" y="93" width="42" height="27" rx="4" fill="#263e58"/><circle cx="159" cy="106" r="7" fill="'+a+'"/>';
    }else if(kind==="beauty"||kind==="luxury"||kind==="home"){
      extra='<rect x="130" y="95" width="18" height="28" rx="6" fill="'+a+'" opacity=".78"/><rect x="154" y="87" width="22" height="36" rx="8" fill="#273c55"/><circle cx="165" cy="79" r="6" fill="#e7c07b"/>';
    }else if(kind==="auto"||kind==="hardware"){
      extra='<circle cx="154" cy="108" r="24" fill="#273c55"/><circle cx="154" cy="108" r="9" fill="#e7eef5"/><path d="M154 84v48M130 108h48" stroke="'+a+'" stroke-width="5" opacity=".8"/>';
    }else if(kind==="warehouse"||kind==="logistics"||kind==="wholesale"){
      extra='<rect x="132" y="83" width="58" height="42" rx="6" fill="#f4c66f"/><path d="M132 104h58M161 83v42" stroke="#bd8421" stroke-width="4"/><path d="M197 95h28v30h-28z" fill="#fff" stroke="#dbe5ef"/><path d="M203 101h16M203 108h16M203 115h11" stroke="'+a+'" stroke-width="3" stroke-linecap="round"/>';
    }else{
      extra='<rect x="133" y="91" width="43" height="36" rx="7" fill="#fff" stroke="#dbe5ef"/><rect x="140" y="98" width="28" height="22" rx="4" fill="'+a+'" opacity=".26"/>';
    }
    return '<svg viewBox="0 0 380 205" role="img" aria-label="Illustration for industry" xmlns="http://www.w3.org/2000/svg">'+common+extra+'</svg>';
  }

  function card(item,index){
    const [name,tag,text,kind]=item, accent=PALETTE[index%PALETTE.length];
    return '<article class="industry-visual-card reveal" data-tag="'+esc(tag)+'" data-name="'+esc(name.toLowerCase())+'">'+
      '<div class="industry-visual-media" style="--industry-accent:'+accent+'"><div class="industry-scene" aria-hidden="true">'+sceneSvg(kind,accent,index)+'</div><span class="industry-visual-number">'+String(index+1).padStart(2,"0")+'</span><span class="industry-visual-badge">'+esc(tag)+'</span></div>'+
      '<div class="industry-visual-body"><h3>'+esc(name)+'</h3><p>'+esc(text)+'</p><a href="contact.html?industry='+encodeURIComponent(name)+'">Discuss your setup <span>↗</span></a></div></article>';
  }

  function renderTags(active){
    const el=document.getElementById("industryChips"); if(!el)return;
    el.innerHTML=TAGS.map(t=>'<button type="button" class="industry-chip'+(t===active?" active":"")+'" data-tag="'+esc(t)+'">'+esc(t)+'</button>').join("");
  }

  function applyFilter(){
    const q=(document.getElementById("industrySearch")?.value||"").trim().toLowerCase();
    const active=document.querySelector(".industry-chip.active")?.dataset.tag||"All";
    let visible=0;
    document.querySelectorAll("#industryCards .industry-visual-card").forEach(cardEl=>{
      const matchTag=active==="All"||cardEl.dataset.tag===active;
      const matchQ=!q||cardEl.dataset.name.includes(q)||cardEl.dataset.tag.toLowerCase().includes(q);
      cardEl.hidden=!(matchTag&&matchQ); if(matchTag&&matchQ)visible++;
    });
    const out=document.getElementById("industryResultCount"); if(out)out.textContent=visible+" categories";
  }

  function initMotion(){
    if(!window.gsap||!window.ScrollTrigger||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".industry-hero h1",{y:48,opacity:0,duration:1,ease:"power4.out"});
    gsap.from(".industry-hero p,.industry-hero-actions",{y:18,opacity:0,duration:.75,stagger:.1,ease:"power3.out",delay:.18});
    gsap.from(".industry-hero-panel",{x:34,opacity:0,duration:.9,ease:"power4.out",delay:.12});
    gsap.utils.toArray(".industry-visual-card").forEach((el,i)=>{
      gsap.from(el,{y:38,opacity:0,duration:.7,ease:"power3.out",delay:(i%4)*.045,scrollTrigger:{trigger:el,start:"top 88%",once:true}});
    });
  }

  document.addEventListener("DOMContentLoaded",()=>{
    const grid=document.getElementById("industryCards"); if(!grid)return;
    grid.innerHTML=INDUSTRIES.map(card).join("");
    renderTags("All");
    document.getElementById("industryChips")?.addEventListener("click",e=>{
      const chip=e.target.closest(".industry-chip");if(!chip)return;
      document.querySelectorAll(".industry-chip").forEach(x=>x.classList.remove("active"));chip.classList.add("active");applyFilter();
    });
    document.getElementById("industrySearch")?.addEventListener("input",applyFilter);
    initMotion();
  });
})();