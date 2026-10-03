
(function(){
  "use strict";

  const WA_NUMBER = "918904997113";
  const GALLERY_CACHE = new Map();
  const SCRIPT_PROMISES = new Map();
  const CART_KEY = "leartech_quote_cart";

  function esc(v){
    return String(v ?? "").replace(/[&<>'"]/g, c => ({
      "&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"
    }[c]));
  }

  function getProduct(id){
    return PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  }

  function getCart(){
    try{
      const raw = localStorage.getItem(CART_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    }catch(_){ return []; }
  }

  function saveCart(cart){
    try{ localStorage.setItem(CART_KEY, JSON.stringify(cart)); }catch(_){}
    updateCartBadge();
  }

  function addToQuote(product, qty=1){
    const cart = getCart();
    const found = cart.find(item => item.id === product.id);
    if(found) found.qty += qty;
    else cart.push({id:product.id, name:product.name, qty});
    saveCart(cart);
  }

  function cartCount(){
    return getCart().reduce((sum,item)=>sum + Number(item.qty || 0), 0);
  }

  function updateCartBadge(){
    document.querySelectorAll("[data-cart-count]").forEach(el => el.textContent = String(cartCount()));
  }

  function whatsappUrl(product, qty=1, prefix="Hi Leartech"){
    const message = [
      prefix + ",",
      "",
      "Product: " + product.name,
      "Quantity: " + qty,
      "",
      "Please share current price, availability and delivery details."
    ].join("\n");
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(message);
  }

  function buyProduct(product, qty=1){
    addToQuote(product, qty);
    window.open(whatsappUrl(product, qty, "Hi Leartech, I would like to buy this product"), "_blank", "noopener,noreferrer");
  }

  function loadGallery(product){
    if(GALLERY_CACHE.has(product.id)) return Promise.resolve(GALLERY_CACHE.get(product.id));
    const key = "LEARTECH_GALLERY_" + product.id;
    if(window[key]){
      const gallery = normaliseGallery(window[key], product);
      GALLERY_CACHE.set(product.id, gallery);
      return Promise.resolve(gallery);
    }

    if(SCRIPT_PROMISES.has(product.id)) return SCRIPT_PROMISES.get(product.id);

    const promise = new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "js/gallery-" + product.id + ".js";
      script.async = true;
      script.onload = () => {
        const gallery = normaliseGallery(window[key] || [], product);
        GALLERY_CACHE.set(product.id, gallery);
        resolve(gallery);
      };
      script.onerror = () => {
        const gallery = normaliseGallery([], product);
        GALLERY_CACHE.set(product.id, gallery);
        resolve(gallery);
      };
      document.head.appendChild(script);
    });

    SCRIPT_PROMISES.set(product.id, promise);
    return promise;
  }

  function normaliseGallery(raw, product){
    const sources = (Array.isArray(raw) ? raw : [])
      .map(item => typeof item === "string" ? item : item?.src)
      .filter(Boolean);

    if(!sources.length) sources.push(product.preview);
    while(sources.length < 4) sources.push(sources[sources.length - 1]);
    return sources.slice(0,4);
  }

  function starMarkup(){
    return '<span aria-hidden="true">★★★★★</span><small>5.0</small>';
  }

  function cardMarkup(product){
    return `
      <article class="prod-card reference-prod-card" data-product-id="${esc(product.id)}">
        <div class="prod-media">
          <button class="media-arrow media-prev" type="button" data-action="prev" aria-label="Previous image">‹</button>
          <div class="prod-image-link" data-action="details" role="button" tabindex="0" aria-label="View ${esc(product.name)} details">
            <img data-card-image src="${esc(product.preview)}" alt="${esc(product.name)}" loading="lazy">
          </div>
          <button class="media-arrow media-next" type="button" data-action="next" aria-label="Next image">›</button>
          <div class="media-dots" aria-label="Product images">
            <button type="button" class="media-dot active" data-image-index="0" aria-label="Image 1"></button>
            <button type="button" class="media-dot" data-image-index="1" aria-label="Image 2"></button>
            <button type="button" class="media-dot" data-image-index="2" aria-label="Image 3"></button>
            <button type="button" class="media-dot" data-image-index="3" aria-label="Image 4"></button>
          </div>
          <span class="media-count">1/4</span>
        </div>
        <div class="prod-card-body">
          <h3 class="product-title">${esc(product.name)}</h3>
          <div class="product-rating">${starMarkup()}</div>
          <div class="product-actions">
            <button class="btn product-details" type="button" data-action="details">View Details</button>
            <button class="btn product-buy" type="button" data-action="buy">Buy Now</button>
          </div>
        </div>
      </article>`;
  }

  async function upgradeCard(card, product){
    const gallery = await loadGallery(product);
    card.dataset.galleryReady = "1";
    card._gallery = gallery;
    setCardImage(card,0);
  }

  function setCardImage(card,index){
    const gallery = card._gallery || [card.querySelector("[data-card-image]")?.src || getProduct(card.dataset.productId).preview];
    const safe = ((index % 4) + 4) % 4;
    const img = card.querySelector("[data-card-image]");
    if(img) img.src = gallery[safe];
    card.dataset.imageIndex = String(safe);
    card.querySelectorAll(".media-dot").forEach((dot,i)=>dot.classList.toggle("active",i===safe));
    const count=card.querySelector(".media-count");
    if(count) count.textContent=(safe+1)+"/4";
  }

  function cardImageClick(card,index){
    if(!card._gallery){
      loadGallery(getProduct(card.dataset.productId)).then(gallery=>{
        card._gallery = gallery;
        setCardImage(card,index);
      });
      return;
    }
    setCardImage(card,index);
  }

  function bindProductCards(root=document){
    root.querySelectorAll(".reference-prod-card").forEach(card=>{
      const product = getProduct(card.dataset.productId);
      if(card.dataset.bound === "1") return;
      card.dataset.bound = "1";

      card.addEventListener("click", event=>{
        const action = event.target.closest("[data-action]")?.dataset.action;
        if(action === "details"){
          event.preventDefault();
          selectProduct(product.id, true);
        }
        if(action === "buy"){
          event.preventDefault();
          buyProduct(product,1);
        }
        if(action === "next"){
          event.preventDefault();
          cardImageClick(card, Number(card.dataset.imageIndex || 0)+1);
        }
        if(action === "prev"){
          event.preventDefault();
          cardImageClick(card, Number(card.dataset.imageIndex || 0)-1);
        }
      });

      card.querySelectorAll("[data-image-index]").forEach(dot=>{
        dot.addEventListener("click", event=>{
          event.preventDefault();
          event.stopPropagation();
          cardImageClick(card, Number(dot.dataset.imageIndex));
        });
      });

      card.querySelector(".prod-image-link")?.addEventListener("keydown",event=>{
        if(event.key==="Enter" || event.key===" "){
          event.preventDefault();
          selectProduct(product.id,true);
        }
      });
    });

    if("IntersectionObserver" in window){
      const io = new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
          if(!entry.isIntersecting) return;
          const card=entry.target;
          if(card.dataset.galleryReady !== "1") upgradeCard(card,getProduct(card.dataset.productId));
          io.unobserve(card);
        });
      },{rootMargin:"320px 0px"});
      root.querySelectorAll(".reference-prod-card").forEach(card=>io.observe(card));
    }else{
      root.querySelectorAll(".reference-prod-card").forEach(card=>upgradeCard(card,getProduct(card.dataset.productId)));
    }
  }

  function renderTabs(active){
    const tabs = document.getElementById("productTabs");
    if(!tabs) return;
    tabs.innerHTML = PRODUCT_GROUPS.map(group=>{
      const count = group.value==="All" ? PRODUCTS.length : PRODUCTS.filter(p=>p.group===group.value).length;
      return '<button class="catalog-tab'+(group.value===active?' active':'')+'" type="button" data-group="'+esc(group.value)+'">'+esc(group.label)+' <span>('+count+')</span></button>';
    }).join("");
  }

  function currentGroup(){
    return document.querySelector(".catalog-tab.active")?.dataset.group || "All";
  }

  function renderCatalog(){
    const grid = document.getElementById("productsGrid");
    if(!grid) return;

    const search = (document.getElementById("productSearch")?.value || "").trim().toLowerCase();
    const group = currentGroup();
    const sort = document.getElementById("catalogSort")?.value || "Featured";

    let list = PRODUCTS.filter(p=>{
      const groupMatch = group==="All" || p.group===group;
      const searchMatch = !search || [p.name,p.category,p.group].some(v=>v.toLowerCase().includes(search));
      return groupMatch && searchMatch;
    });

    if(sort==="Name: A-Z") list.sort((a,b)=>a.name.localeCompare(b.name));
    if(sort==="Name: Z-A") list.sort((a,b)=>b.name.localeCompare(a.name));

    grid.innerHTML = list.length
      ? list.map(cardMarkup).join("")
      : '<div class="catalog-empty"><strong>No matching products</strong><span>Try another category or search term.</span></div>';

    const count = document.getElementById("catalogCount");
    if(count) count.textContent = String(list.length);
    bindProductCards(grid);
    return list;
  }

  function renderDetail(productId, animate=true){
    const root = document.getElementById("productDetailPanel");
    if(!root) return;
    const product = getProduct(productId);
    root.dataset.productId = product.id;

    root.innerHTML = `
      <div class="detail-breadcrumb">Home <span>›</span> Products <span>›</span> ${esc(product.name)}</div>
      <div class="detail-media-shell">
        <button class="detail-arrow detail-prev" type="button" aria-label="Previous product image">‹</button>
        <div class="detail-main-media"><img class="detail-main-image" src="${esc(product.preview)}" alt="${esc(product.name)}"></div>
        <button class="detail-arrow detail-next" type="button" aria-label="Next product image">›</button>
        <span class="detail-index">1/4</span>
      </div>
      <div class="detail-thumbs"></div>
      <div class="detail-info">
        <span class="detail-label">${esc(product.category)}</span>
        <h2>${esc(product.name)}</h2>
        <div class="detail-rating"><span>★★★★★</span><small>5.0 · Customer enquiry</small></div>
        <p>${esc(product.desc)}</p>
        <div class="detail-features">
          ${product.features.map((feature,index)=>'<div class="detail-feature"><span class="feature-icon">'+["✓","◉","⚙","↗"][index % 4]+"</span><span>"+esc(feature)+"</span></div>").join("")}
        </div>
        <div class="detail-purchase">
          <div class="qty-control" aria-label="Quantity">
            <button type="button" data-qty="-1" aria-label="Decrease quantity">−</button>
            <span data-qty-value>1</span>
            <button type="button" data-qty="+1" aria-label="Increase quantity">+</button>
          </div>
          <button class="btn product-buy detail-buy" type="button">Buy Now</button>
        </div>
        <a class="detail-whatsapp" target="_blank" rel="noopener" href="${whatsappUrl(product)}">◉ <span>Get Quote on WhatsApp</span></a>
        <div class="detail-service-row"><span>Fast Delivery</span><i></i><span>1 Year Support</span><i></i><span>Expert Assistance</span></div>
      </div>
    `;

    const main = root.querySelector(".detail-main-image");
    const thumbs = root.querySelector(".detail-thumbs");
    let gallery = [product.preview,product.preview,product.preview,product.preview];
    let activeIndex = 0;
    let qty = 1;

    const apply = (index)=>{
      activeIndex = (index+4)%4;
      main.src = gallery[activeIndex];
      main.alt = product.name + " view " + (activeIndex+1);
      root.querySelector(".detail-index").textContent=(activeIndex+1)+"/4";
      thumbs.querySelectorAll("button").forEach((btn,i)=>btn.classList.toggle("active",i===activeIndex));
    };

    const renderThumbs = ()=>{
      thumbs.innerHTML = gallery.map((src,i)=>'<button type="button" class="detail-thumb'+(i===0?' active':'')+'" data-thumb-index="'+i+'" aria-label="View image '+(i+1)+'"><img src="'+esc(src)+'" alt="'+esc(product.name)+' view '+(i+1)+'" loading="'+(i?'lazy':'eager')+'"></button>').join("");
      thumbs.querySelectorAll("[data-thumb-index]").forEach(btn=>btn.addEventListener("click",()=>apply(Number(btn.dataset.thumbIndex))));
    };

    root.querySelector(".detail-prev")?.addEventListener("click",()=>apply(activeIndex-1));
    root.querySelector(".detail-next")?.addEventListener("click",()=>apply(activeIndex+1));

    root.querySelectorAll("[data-qty]").forEach(btn=>{
      btn.addEventListener("click",()=>{
        qty = Math.max(1, qty + Number(btn.dataset.qty));
        root.querySelector("[data-qty-value]").textContent=String(qty);
        root.querySelector(".detail-whatsapp").href=whatsappUrl(product,qty);
      });
    });

    root.querySelector(".detail-buy")?.addEventListener("click",()=>buyProduct(product,qty));

    loadGallery(product).then(g=>{
      gallery=g;
      renderThumbs();
      apply(activeIndex);
    });

    renderThumbs();
    updateCartBadge();

    if(animate){
      root.classList.remove("detail-switch");
      void root.offsetWidth;
      root.classList.add("detail-switch");
    }
  }

  function selectProduct(productId, scrollToDetail=false){
    const product=getProduct(productId);
    renderDetail(product.id,true);
    const url = "products.html?id=" + encodeURIComponent(product.id);
    if(history.replaceState) history.replaceState({product:product.id},"",url);
    document.querySelectorAll(".reference-prod-card").forEach(card=>card.classList.toggle("selected",card.dataset.productId===product.id));
    if(scrollToDetail && window.innerWidth < 1120){
      document.getElementById("productDetailPanel")?.scrollIntoView({behavior:"smooth",block:"start"});
    }
  }

  function initCart(){
    const trigger=document.querySelector("[data-cart-trigger]");
    const drawer=document.getElementById("quoteCart");
    const backdrop=document.getElementById("quoteCartBackdrop");
    const close=()=>{drawer?.classList.remove("open");backdrop?.classList.remove("open")};
    trigger?.addEventListener("click",()=>{renderCart();drawer?.classList.add("open");backdrop?.classList.add("open")});
    backdrop?.addEventListener("click",close);
    drawer?.querySelector("[data-cart-close]")?.addEventListener("click",close);
    drawer?.querySelector("[data-cart-send]")?.addEventListener("click",()=>{
      const cart=getCart();
      if(!cart.length) return;
      const lines=cart.map(item=>item.name+" × "+item.qty);
      const message=["Hi Leartech, I would like a quote for:","",...lines,"","Please share price and availability."].join("\n");
      window.open("https://wa.me/"+WA_NUMBER+"?text="+encodeURIComponent(message),"_blank","noopener,noreferrer");
    });
    updateCartBadge();
  }

  function renderCart(){
    const list=document.getElementById("cartItems");
    if(!list) return;
    const cart=getCart();
    list.innerHTML=cart.length ? cart.map(item=>`
      <div class="cart-line"><div><strong>${esc(item.name)}</strong><small>Quantity: ${item.qty}</small></div><button type="button" class="cart-remove" data-remove="${esc(item.id)}" aria-label="Remove ${esc(item.name)}">×</button></div>
    `).join("") : '<div class="cart-empty"><strong>Your quote list is empty</strong><span>Use Buy Now on a product to add it here.</span></div>';
    list.querySelectorAll("[data-remove]").forEach(btn=>btn.addEventListener("click",()=>{
      saveCart(getCart().filter(item=>item.id!==btn.dataset.remove));
      renderCart();
    }));
  }

  function initCatalogPage(){
    if(!document.getElementById("productsGrid")) return;

    renderTabs("All");
    renderCatalog();
    selectProduct(new URLSearchParams(location.search).get("id") || PRODUCTS[0].id,false);

    document.getElementById("productTabs")?.addEventListener("click",event=>{
      const tab=event.target.closest(".catalog-tab");
      if(!tab) return;
      document.querySelectorAll(".catalog-tab").forEach(x=>x.classList.remove("active"));
      tab.classList.add("active");
      renderCatalog();
    });

    const search=document.getElementById("productSearch");
    search?.addEventListener("input",renderCatalog);
    document.getElementById("catalogSort")?.addEventListener("change",renderCatalog);

    window.addEventListener("popstate",()=>{
      const id=new URLSearchParams(location.search).get("id") || PRODUCTS[0].id;
      selectProduct(id,false);
    });

    initCart();
  }

  function initStandalonePage(){
    const root=document.getElementById("standaloneProductPage");
    if(!root) return;

    const product=getProduct(new URLSearchParams(location.search).get("id") || PRODUCTS[0].id);
    root.innerHTML='<div id="productDetailPanel" class="standalone-detail-panel"></div>';
    renderDetail(product.id,false);
    document.title="Leartech | "+product.name;
    initCart();
  }

  function initHomeCards(){
    const home=document.getElementById("homeProducts");
    if(!home) return;
    home.innerHTML=PRODUCTS.slice(0,4).map(cardMarkup).join("");
    bindProductCards(home);
  }

  document.addEventListener("DOMContentLoaded",()=>{
    initCatalogPage();
    initStandalonePage();
    initHomeCards();
  });
})();
