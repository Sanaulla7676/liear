function esc(v){return String(v).replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[c]))}
function buyUrl(p){return "https://wa.me/918904997113?text="+encodeURIComponent("Hi Leartech, I want to buy "+p.name+". Please share the price and availability.");}
function card(p){
  return `<article class="card prod-card" data-product-id="${p.id}">
    <div class="real-visual"><img src="${p.image}" alt="${esc(p.name)}" loading="lazy"></div>
    <div class="body">
      <h3 class="product-title">${esc(p.name)}</h3>
      <div class="product-rating" aria-hidden="true"><span>★★★★★</span><small>Product Details</small></div>
      <div class="price product-price">Get Quote</div>
      <div class="product-actions">
        <a class="btn product-buy" href="${buyUrl(p)}" target="_blank" rel="noopener">Buy Now <span>→</span></a>
        <a class="btn product-details" href="product.html?id=${encodeURIComponent(p.id)}">View Details <span>→</span></a>
      </div>
    </div>
  </article>`;
}
function getList(){
  const tab=document.querySelector(".tab[data-cat].active"),cat=tab?.dataset.cat||"All";
  const cats=[...document.querySelectorAll(".catfilter:checked")].map(x=>x.value);
  let list=PRODUCTS.filter(p=>(cat==="All"||p.cat===cat)&&(!cats.length||cats.includes(p.cat)));
  const sort=document.getElementById("sort")?.value;
  if(sort==="Price: Low to High")list.sort((a,b)=>a.name.localeCompare(b.name));
  if(sort==="Price: High to Low")list.sort((a,b)=>b.name.localeCompare(a.name));
  return list;
}
function renderGrid(targetId="productsGrid",list=getList()){
  const g=document.getElementById(targetId);if(!g)return;
  g.innerHTML=list.map(card).join("");
  const count=document.getElementById("count");if(count)count.textContent="("+list.length+")";
}
function initProductListing(){
  document.querySelectorAll(".tab[data-cat]").forEach(t=>t.addEventListener("click",()=>{document.querySelectorAll(".tab[data-cat]").forEach(x=>x.classList.remove("active"));t.classList.add("active");renderGrid();}));
  document.querySelectorAll(".catfilter").forEach(x=>x.addEventListener("change",renderGrid));
  renderGrid();
  const home=document.getElementById("homeProducts");if(home)home.innerHTML=PRODUCTS.slice(0,4).map(card).join("");
}
function initProductDetail(){
  const root=document.getElementById("page-product");if(!root)return;
  const p=PRODUCTS.find(x=>x.id===new URLSearchParams(location.search).get("id"))||PRODUCTS[0];
  const img=root.querySelector(".detail-photo");if(img){img.src=p.image;img.removeAttribute("data-asset");img.alt=p.name}
  root.querySelector(".breadcrumb").textContent="Home › Products › "+p.cat+" › "+p.name;
  root.querySelector(".detail-copy .tag").textContent=p.cat;
  root.querySelector(".detail-copy h1").textContent=p.name;
  root.querySelector(".detail-copy > p").textContent=p.desc;
  root.querySelector(".detail-copy .bigprice").textContent="Get Quote";
  const quote=root.querySelector("[data-product-quote]");if(quote)quote.href="contact.html?product="+encodeURIComponent(p.id);
  const wa=root.querySelector(".detail-copy a.btn.green");if(wa){wa.textContent="Buy Now →";wa.href=buyUrl(p);}
  const firstSpec=root.querySelector(".spec");if(firstSpec)firstSpec.querySelector("span").textContent="Professional business hardware";
}
document.addEventListener("DOMContentLoaded",()=>{
  if(document.getElementById("productsGrid")||document.getElementById("homeProducts"))initProductListing();
  if(document.getElementById("page-product"))initProductDetail();
});