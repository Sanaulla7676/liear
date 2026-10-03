function esc(v){return String(v).replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[c]))}
function card(p){return `<article class="card prod-card" data-product-id="${p.id}">
<div class="real-visual"><img src="${productImagePath(p,1)}" alt="${esc(p.name)}" loading="lazy"></div>
<div class="body"><span class="tag">${esc(p.category)}</span><h3 style="margin-top:8px">${esc(p.name)}</h3>
<div class="rating" aria-label="Product images">${"★★★★★"} <span style="color:#8292a7;font-size:12px">${p.views} view${p.views>1?"s":""}</span></div>
<div class="product-actions"><a class="btn outline" href="product.html?id=${p.id}">View Details</a><a class="btn primary" href="contact.html?product=${p.id}">Buy Now</a></div>
</div></article>`}
function render(){const g=document.getElementById("productsGrid"),c=document.getElementById("count");if(!g)return;
 const tab=document.querySelector(".tab[data-cat].active"),cat=tab?.dataset.cat||"All";
 const cats=[...document.querySelectorAll(".catfilter:checked")].map(x=>x.value),brands=[...document.querySelectorAll(".brandfilter:checked")].map(x=>x.value);
 let list=PRODUCTS.filter(p=>(cat==="All"||p.category===cat)&&(!cats.length||cats.includes(p.category)));
 if(brands.length)list=list.filter(p=>brands.includes("Leartech"));
 const sort=document.getElementById("sort")?.value;
 if(sort==="Name: A-Z")list.sort((a,b)=>a.name.localeCompare(b.name));
 if(sort==="Name: Z-A")list.sort((a,b)=>b.name.localeCompare(a.name));
 g.innerHTML=list.map(card).join("");if(c)c.textContent="("+list.length+")";
 document.querySelectorAll(".product-image-link").forEach(el=>el.onclick=()=>location.href="product.html?id="+encodeURIComponent(el.dataset.productId));
}
document.addEventListener("DOMContentLoaded",()=>{
 document.querySelectorAll(".tab[data-cat]").forEach(t=>t.addEventListener("click",()=>{document.querySelectorAll(".tab[data-cat]").forEach(x=>x.classList.remove("active"));t.classList.add("active");render()}));
 document.querySelectorAll(".catfilter,.brandfilter").forEach(x=>x.addEventListener("change",render));
 document.getElementById("sort")?.addEventListener("change",render);
 if(document.getElementById("productsGrid"))render();
 const home=document.getElementById("homeProducts");
 if(home)home.innerHTML=PRODUCTS.slice(0,4).map(card).join("");
 if(document.getElementById("page-product")){
  const p=PRODUCTS.find(x=>x.id===new URLSearchParams(location.search).get("id"))||PRODUCTS[0];
  const root=document.getElementById("page-product"), main=root.querySelector(".detail-photo"), thumbs=root.querySelector(".gallery-thumbs");
  const set=(s,v)=>{const el=root.querySelector(s);if(el)el.textContent=v};
  set(".breadcrumb","Home › Products › "+p.category+" › "+p.name);set(".detail-copy .tag","Leartech");set(".detail-copy h1",p.name);
  if(main){main.src=productImagePath(p,1);main.alt=p.name}
  const strip=thumbs||document.createElement("div"); strip.className="gallery-thumbs";
  strip.innerHTML=`<button class="gallery-thumb active" type="button" data-index="1" aria-label="View 1"><img src="${productImagePath(p,1)}" alt="${p.name} view 1" loading="lazy"></button>`;
  if(!thumbs)root.querySelector(".gallery")?.appendChild(strip);
  else thumbs.replaceWith(strip);
  strip.querySelectorAll(".gallery-thumb").forEach(btn=>btn.addEventListener("click",()=>{strip.querySelectorAll(".gallery-thumb").forEach(x=>x.classList.remove("active"));btn.classList.add("active");main.src=productImagePath(p,Number(btn.dataset.index))}));
  const quote=root.querySelector("[data-product-quote]");if(quote)quote.href="contact.html?product="+encodeURIComponent(p.id);
  const wa=root.querySelector(".detail-copy a.btn.green");if(wa)wa.href="https://wa.me/918904997113?text="+encodeURIComponent("Hi Leartech, I am interested in "+p.name+". Please share the price and details.");
 }
});