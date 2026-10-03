(function(){
  "use strict";

  const SITE = {
    name: "Leartech Automation Ventures",
    phone: "+918618605066",
    email: "info@leartech.in",
    address: "Chandra Layout, Bengaluru – 560072",
    siteUrl: (function(){
      const p = location.pathname.replace(/\\/g,"/");
      const base = p.endsWith("/") ? p : p.replace(/\/[^/]*$/, "/");
      return location.origin + base;
    })()
  };

  const icon = {
    arrow: '<span aria-hidden="true">↗</span>',
    bolt: '<span aria-hidden="true">✦</span>',
    check: '<span aria-hidden="true">✓</span>',
    scan: '<span aria-hidden="true">⌁</span>'
  };

  const pageKey = document.querySelector("#page-home") ? "home" :
    document.querySelector("#page-products") ? "products" :
    document.querySelector("#page-product") ? "product" :
    document.querySelector("#page-industries") ? "industries" :
    document.querySelector("#page-software") ? "software" :
    document.querySelector("#page-support") ? "support" :
    document.querySelector("#page-about") ? "about" :
    document.querySelector("#page-contact") ? "contact" : "";

  const extra = {
    home: {
      html: `
      <section class="fx-section fx-command" aria-labelledby="fx-command-title">
        <div class="container">
          <div class="fx-kicker">THE OPERATING LAYER</div>
          <div class="fx-heading-row"><div><h2 id="fx-command-title">Everything your counter depends on, connected.</h2><p>Hardware, software, stock movement and customer workflows are presented as one practical system instead of a pile of disconnected products.</p></div><a class="fx-text-link" href="products.html">Explore the system ${icon.arrow}</a></div>
          <div class="fx-feature-grid">
            <article class="fx-card"><span class="fx-number">01</span><b>Fast Checkout</b><p>Touch-first interfaces, barcode entry and receipt workflows built around busy counters.</p><small>Counter speed</small></article>
            <article class="fx-card"><span class="fx-number">02</span><b>Inventory Visibility</b><p>Keep product movement and stock information close to everyday billing decisions.</p><small>Stock awareness</small></article>
            <article class="fx-card"><span class="fx-number">03</span><b>Hardware Stack</b><p>POS screens, scanners, thermal printers, drawers and supporting devices in one catalogue.</p><small>Complete setup</small></article>
            <article class="fx-card"><span class="fx-number">04</span><b>Business Reporting</b><p>Turn transactions into useful summaries for owners and operational teams.</p><small>Operational clarity</small></article>
            <article class="fx-card"><span class="fx-number">05</span><b>Service & Setup</b><p>Installation guidance, configuration help and practical assistance after purchase.</p><small>Human support</small></article>
            <article class="fx-card"><span class="fx-number">06</span><b>Scalable Workflow</b><p>Start with the counter you have and expand the stack as the business grows.</p><small>Future-ready</small></article>
          </div>
        </div>
      </section>
      <section class="fx-section fx-flow">
        <div class="container">
          <div class="fx-kicker">HOW IT WORKS</div>
          <div class="fx-heading-row"><div><h2>From first enquiry to daily operation.</h2><p>A clearer buying journey means fewer surprises when the system reaches your counter.</p></div></div>
          <div class="fx-flow-track">
            <div class="fx-flow-step"><span>01</span><b>Discover</b><small>Business type + workflow</small></div>
            <div class="fx-flow-step"><span>02</span><b>Configure</b><small>Products + software</small></div>
            <div class="fx-flow-step"><span>03</span><b>Install</b><small>Counter-ready setup</small></div>
            <div class="fx-flow-step"><span>04</span><b>Train</b><small>Team handover</small></div>
            <div class="fx-flow-step"><span>05</span><b>Support</b><small>Ongoing assistance</small></div>
          </div>
        </div>
      </section>
      <section class="fx-section fx-faq">
        <div class="container">
          <div class="fx-kicker">COMMON QUESTIONS</div>
          <div class="fx-heading-row"><div><h2>Before you upgrade.</h2><p>Useful answers for business owners comparing billing hardware, software and support.</p></div><a class="fx-text-link" href="contact.html">Talk to Leartech ${icon.arrow}</a></div>
          <div class="fx-faq-grid">
            <details><summary>Which businesses can use these systems?</summary><p>Leartech presents solutions for retail, groceries, food service, fashion, electronics, automotive, hospitality, salons, beauty, trade and other billing-led operations.</p></details>
            <details><summary>Can I combine hardware and software?</summary><p>Yes. The catalogue is organized so businesses can evaluate hardware and software as connected parts of a counter setup.</p></details>
            <details><summary>Can I ask for a complete setup instead of one product?</summary><p>Yes. Use the quote flow and describe your business type, number of counters and the devices you need.</p></details>
            <details><summary>How do I choose the right printer or scanner?</summary><p>Start with transaction volume, receipt or label needs, connectivity and counter space. The product detail pages expose the available workflow information.</p></details>
            <details><summary>Do you provide support after purchase?</summary><p>The website is structured around installation guidance, configuration support, training and after-sales assistance.</p></details>
            <details><summary>Where is Leartech based?</summary><p>Leartech Automation Ventures lists Chandra Layout, Bengaluru as its local presence and supports enquiries by phone and WhatsApp.</p></details>
          </div>
        </div>
      </section>`,
    },
    products: {
      html: `
      <section class="fx-section fx-buying-guide">
        <div class="container">
          <div class="fx-kicker">BUYING GUIDE</div>
          <div class="fx-heading-row"><div><h2>Choose by workflow, not by jargon.</h2><p>Use the product catalogue to build a practical stack around how your counter actually works.</p></div></div>
          <div class="fx-guide-grid">
            <article class="fx-card"><b>Need fast checkout?</b><p>Start with touchscreen POS or billing hardware, then add the printer and scanner your counter needs.</p></article>
            <article class="fx-card"><b>Need product identification?</b><p>Use barcode scanners, barcode printers and labels as the identification layer of the workflow.</p></article>
            <article class="fx-card"><b>Need cash control?</b><p>Pair a cash drawer or counting machine with the billing workflow for cleaner cash handling.</p></article>
            <article class="fx-card"><b>Need an end-to-end counter?</b><p>Combine POS, printer, scanner, cash drawer and software around the number of counters you operate.</p></article>
          </div>
        </div>
      </section>`,
    },
    industries: {
      html: `
      <section class="fx-section fx-match">
        <div class="container">
          <div class="fx-kicker">BUSINESS FIT</div>
          <div class="fx-heading-row"><div><h2>Match the setup to the way customers buy.</h2><p>Different businesses need different counter flows. The catalogue is organized around real operating environments.</p></div></div>
          <div class="fx-feature-grid">
            <article class="fx-card"><b>Retail & Grocery</b><p>Barcode-led checkout, thermal receipts, product catalogues and stock visibility.</p></article>
            <article class="fx-card"><b>Food & Hospitality</b><p>Fast order entry, touchscreen billing and receipt workflows for customer-facing service.</p></article>
            <article class="fx-card"><b>Fashion & Luxury</b><p>Product-rich catalogues, customer transactions and organized counter operations.</p></article>
            <article class="fx-card"><b>Automotive</b><p>Parts, accessories and service transactions with practical item lookup.</p></article>
            <article class="fx-card"><b>Electronics</b><p>Multiple SKUs, customer transactions, barcode workflows and documented billing.</p></article>
            <article class="fx-card"><b>Service Businesses</b><p>Customer-focused billing for salons, beauty and other service-led environments.</p></article>
          </div>
        </div>
      </section>`,
    },
    product: {
      html: `
      <section class="fx-section fx-product-context">
        <div class="container">
          <div class="fx-kicker">PRODUCT INTELLIGENCE</div>
          <div class="fx-heading-row"><div><h2>Look at the product in context.</h2><p>Before choosing hardware, check where it sits in the complete billing workflow and which companion devices make sense.</p></div><a class="fx-text-link" href="products.html">Back to catalogue ${icon.arrow}</a></div>
          <div class="fx-guide-grid">
            <article class="fx-card"><b>Use case</b><p>Identify the business counter, transaction type and volume this device is expected to serve.</p></article>
            <article class="fx-card"><b>Companion hardware</b><p>Consider the scanner, printer, drawer or workstation that completes the workflow.</p></article>
            <article class="fx-card"><b>Deployment</b><p>Leave enough room for connectivity, cable routing, receipt media and daily operator movement.</p></article>
            <article class="fx-card"><b>Support</b><p>Keep setup and service contacts accessible so the counter stays operational.</p></article>
          </div>
        </div>
      </section>`,
    },
    software: {
      html: `
      <section class="fx-section fx-stack">
        <div class="container">
          <div class="fx-kicker">SOFTWARE STACK</div>
          <div class="fx-heading-row"><div><h2>A billing workflow is more than a single screen.</h2><p>The useful unit is the flow: product, customer, transaction, payment, stock and reporting.</p></div></div>
          <div class="fx-feature-grid">
            <article class="fx-card"><span class="fx-number">01</span><b>Capture</b><p>Add or scan the product and identify the relevant item information.</p></article>
            <article class="fx-card"><span class="fx-number">02</span><b>Calculate</b><p>Build the transaction with quantities, pricing, discounts and taxes where applicable.</p></article>
            <article class="fx-card"><span class="fx-number">03</span><b>Complete</b><p>Finish payment and print or store the transaction outcome.</p></article>
            <article class="fx-card"><span class="fx-number">04</span><b>Reflect</b><p>Let sales and stock movement feed the operational view of the business.</p></article>
          </div>
        </div>
      </section>`,
    },
    support: {
      html: `
      <section class="fx-section fx-support-hub">
        <div class="container">
          <div class="fx-kicker">SUPPORT COMMAND CENTER</div>
          <div class="fx-heading-row"><div><h2>Get from problem to resolution with less friction.</h2><p>Good support starts with the right information. Use the support flow below to prepare a faster enquiry.</p></div><a class="fx-text-link" href="contact.html">Open contact ${icon.arrow}</a></div>
          <div class="fx-flow-track">
            <div class="fx-flow-step"><span>01</span><b>Identify</b><small>Product + issue</small></div>
            <div class="fx-flow-step"><span>02</span><b>Describe</b><small>What changed?</small></div>
            <div class="fx-flow-step"><span>03</span><b>Share</b><small>Photos / details</small></div>
            <div class="fx-flow-step"><span>04</span><b>Resolve</b><small>Guidance / service</small></div>
          </div>
        </div>
      </section>`,
    },
    about: {
      html: `
      <section class="fx-section fx-company">
        <div class="container">
          <div class="fx-kicker">THE COMPANY LAYER</div>
          <div class="fx-heading-row"><div><h2>A practical technology partner, not just a product shelf.</h2><p>The website now explains how the product catalogue, software offering, business fit and support journey connect into one customer experience.</p></div></div>
          <div class="fx-feature-grid">
            <article class="fx-card"><b>Products</b><p>Hardware and consumables for the billing counter.</p></article>
            <article class="fx-card"><b>Software</b><p>Billing, inventory, customer and reporting workflows.</p></article>
            <article class="fx-card"><b>Industry fit</b><p>Business-specific examples that make the catalogue easier to understand.</p></article>
            <article class="fx-card"><b>Support</b><p>Setup guidance and after-sales assistance around the deployed system.</p></article>
          </div>
        </div>
      </section>`,
    },
    contact: {
      html: `
      <section class="fx-section fx-contact-roadmap">
        <div class="container">
          <div class="fx-kicker">WHAT HAPPENS NEXT</div>
          <div class="fx-heading-row"><div><h2>Give us the details that make the first reply useful.</h2><p>The faster we understand your business type and counter requirement, the less back-and-forth the enquiry needs.</p></div></div>
          <div class="fx-flow-track">
            <div class="fx-flow-step"><span>01</span><b>Business</b><small>Retail, food, service, etc.</small></div>
            <div class="fx-flow-step"><span>02</span><b>Counters</b><small>How many billing points?</small></div>
            <div class="fx-flow-step"><span>03</span><b>Devices</b><small>POS, scanner, printer, drawer</small></div>
            <div class="fx-flow-step"><span>04</span><b>Goal</b><small>What needs to improve?</small></div>
          </div>
        </div>
      </section>`,
    }
  };

  function appendPageEnhancement(){
    const cfg=extra[pageKey];
    if(!cfg || document.querySelector(".fx-section")) return;
    const footer=document.querySelector("footer");
    if(!footer) return;
    footer.insertAdjacentHTML("beforebegin",cfg.html);
  }

  function addSkipLink(){
    if(document.querySelector(".fx-skip")) return;
    const a=document.createElement("a");
    a.className="fx-skip";
    a.href="#main-content";
    a.textContent="Skip to content";
    document.body.prepend(a);
    const main=document.querySelector("main");
    if(main && !main.id) main.id="main-content";
  }

  function addSEO(){
    const titles={
      home:"Leartech | Billing Machines, POS, Thermal Printers & Billing Software",
      products:"Leartech | POS, Billing, Barcode & Retail Hardware",
      product:"Leartech | Product Details",
      industries:"Leartech | POS & Billing Solutions by Industry",
      software:"Leartech | Billing Software for Retail & Service Businesses",
      support:"Leartech | Product Support & Service",
      about:"Leartech | About Leartech Automation Ventures",
      contact:"Leartech | Contact for POS & Billing Solutions"
    };
    if(titles[pageKey]) document.title=titles[pageKey];

    const description=document.querySelector('meta[name="description"]');
    const descriptions={
      home:"Explore Leartech billing machines, touchscreen POS systems, thermal printers, barcode devices, cash-handling hardware and billing software for growing businesses.",
      products:"Browse Leartech POS, billing, barcode, thermal printer, cash-handling and retail hardware products.",
      industries:"Explore Leartech billing and POS solutions across retail, grocery, food service, fashion, automotive, electronics, hospitality and service businesses.",
      software:"Explore Leartech billing software for sales, inventory, products, customers and operational reporting.",
      support:"Find product support, setup guidance and service information for Leartech billing and POS solutions.",
      about:"Learn about Leartech Automation Ventures and its billing, POS, software and business technology offering.",
      contact:"Contact Leartech Automation Ventures for product quotes, billing software, POS systems, barcode solutions and support.",
      product:"Explore detailed Leartech product information, gallery views, compatible workflow context and quote options."
    };
    if(description && descriptions[pageKey]) description.content=descriptions[pageKey];

    const head=document.head;
    if(!head.querySelector('link[rel="canonical"]')){
      const link=document.createElement("link"); link.rel="canonical"; link.href=SITE.siteUrl; head.appendChild(link);
    }

    const metas=[
      ["property","og:title",document.title],
      ["property","og:description",(description?.content)||""],
      ["property","og:type","website"],
      ["property","og:url",SITE.siteUrl],
      ["name","twitter:card","summary_large_image"],
      ["name","twitter:title",document.title],
      ["name","twitter:description",(description?.content)||""]
    ];
    metas.forEach(([attr,key,val])=>{
      let m=head.querySelector('meta['+attr+'="'+key+'"]');
      if(!m){m=document.createElement("meta");m.setAttribute(attr,key);head.appendChild(m);}
      m.content=val;
    });

    const existing=head.querySelector("#leartech-schema");
    if(existing) existing.remove();
    const schema={
      "@context":"https://schema.org",
      "@graph":[
        {"@type":"Organization","@id":SITE.siteUrl+"#organization","name":SITE.name,"url":SITE.siteUrl,"telephone":SITE.phone,"email":SITE.email,"address":{"@type":"PostalAddress","streetAddress":"Chandra Layout","addressLocality":"Bengaluru","postalCode":"560072","addressCountry":"IN"}},
        {"@type":"WebSite","@id":SITE.siteUrl+"#website","name":SITE.name,"url":SITE.siteUrl,"publisher":{"@id":SITE.siteUrl+"#organization"}},
        {"@type":"WebPage","@id":SITE.siteUrl+"#webpage","name":document.title,"url":SITE.siteUrl}
      ]
    };

    if(pageKey==="products" && Array.isArray(window.PRODUCTS)){
      schema["@graph"].push({"@type":"ItemList","name":"Leartech Products","numberOfItems":window.PRODUCTS.length,"itemListElement":window.PRODUCTS.map((p,i)=>({"@type":"ListItem","position":i+1,"name":p.name,"url":SITE.siteUrl+"product.html?id="+encodeURIComponent(p.id)}))});
    }
    if(pageKey==="product" && typeof window.PRODUCTS!=="undefined"){
      const id=new URLSearchParams(location.search).get("id")||window.PRODUCTS[0]?.id;
      const p=window.PRODUCTS.find(x=>x.id===id);
      if(p) schema["@graph"].push({"@type":"Product","name":p.name,"description":p.desc,"image":SITE.siteUrl+p.preview.replace(/^\//,""),"brand":{"@type":"Brand","name":"Leartech"}});
    }
    const script=document.createElement("script");
    script.type="application/ld+json"; script.id="leartech-schema"; script.textContent=JSON.stringify(schema);
    head.appendChild(script);
  }

  function normalizeFloatingButtons(){
    document.querySelectorAll(".float .wa").forEach(a=>{
      a.setAttribute("aria-label","WhatsApp");
      a.innerHTML='<span class="contact-icon contact-icon-wa"><svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 5a11 11 0 0 0-9.3 16.8L5 27l5.4-1.7A11 11 0 1 0 16 5Zm0 20a8.9 8.9 0 0 1-4.5-1.2l-.4-.2-3.1 1 1-3.1-.2-.4A8.9 8.9 0 1 1 16 25Zm4.3-6.5c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-1.5-.7-2.6-1.4-3.6-3-.1-.2-.1-.3.1-.5l.5-.5c.1-.2.2-.3.1-.5l-.6-1.4c-.2-.4-.3-.4-.5-.4h-.4c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.6 1 2.8c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.5 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.3-.5 1.5-1 .2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3Z"/></svg></span>';
    });
    document.querySelectorAll(".float .call").forEach(a=>{
      a.setAttribute("aria-label","Call");
      a.innerHTML='<span class="contact-icon contact-icon-call"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.8 3.5 9.4 2.7c.7-.2 1.4.2 1.7.9l1.1 2.8c.2.6 0 1.3-.5 1.6l-1.8 1.1c.8 1.8 2.3 3.3 4.1 4.1l1.1-1.7c.3-.5 1-.7 1.6-.5l2.8 1.1c.7.3 1.1 1 .9 1.7l-.8 2.5c-.2.7-.9 1.2-1.7 1.2-6.3-.2-11.4-5.3-11.6-11.6 0-.8.5-1.5 1.2-1.7Z"/></svg></span>';
    });
  }

  function upgradeContactIcons(){
    document.querySelectorAll(".contact-icon-wa").forEach(el=>{
      el.innerHTML='<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 5a11 11 0 0 0-9.3 16.8L5 27l5.4-1.7A11 11 0 1 0 16 5Zm0 20a8.9 8.9 0 0 1-4.5-1.2l-.4-.2-3.1 1 1-3.1-.2-.4A8.9 8.9 0 1 1 16 25Zm4.3-6.5c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-1.5-.7-2.6-1.4-3.6-3-.1-.2-.1-.3.1-.5l.5-.5c.1-.2.2-.3.1-.5l-.6-1.4c-.2-.4-.3-.4-.5-.4h-.4c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.6 1 2.8c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.5 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.3-.5 1.5-1 .2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3Z"/></svg>';
    });
    document.querySelectorAll(".contact-icon-call").forEach(el=>{
      el.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.8 3.5 9.4 2.7c.7-.2 1.4.2 1.7.9l1.1 2.8c.2.6 0 1.3-.5 1.6l-1.8 1.1c.8 1.8 2.3 3.3 4.1 4.1l1.1-1.7c.3-.5 1-.7 1.6-.5l2.8 1.1c.7.3 1.1 1 .9 1.7l-.8 2.5c-.2.7-.9 1.2-1.7 1.2-6.3-.2-11.4-5.3-11.6-11.6 0-.8.5-1.5 1.2-1.7Z"/></svg>';
    });
  }

  function revealFX(){
    const els=document.querySelectorAll(".fx-section,.fx-card,.fx-flow-step,.fx-faq-grid details");
    if(!("IntersectionObserver" in window)){
      els.forEach(el=>el.classList.add("fx-visible"));
      return;
    }
    const io=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting) return;
        entry.target.classList.add("fx-visible");
        io.unobserve(entry.target);
      });
    },{threshold:.12,rootMargin:"0px 0px -8% 0px"});
    els.forEach((el,i)=>{
      el.style.setProperty("--fx-delay",Math.min((i%8)*.045,.3)+"s");
      io.observe(el);
    });
  }

  function activateMicroInteractions(){
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.querySelectorAll(".fx-card,.fx-flow-step").forEach(card=>{
      card.addEventListener("pointermove",e=>{
        const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
        card.style.setProperty("--fx-x",(x*5).toFixed(2)+"deg");
        card.style.setProperty("--fx-y",(y*-5).toFixed(2)+"deg");
      });
      card.addEventListener("pointerleave",()=>{
        card.style.removeProperty("--fx-x");card.style.removeProperty("--fx-y");
      });
    });
  }

  function addMetricCounters(){
    document.querySelectorAll("[data-counter]").forEach(el=>{
      const target=Number(el.dataset.counter||0);
      if(!target || el.dataset.counted==="1") return;
      const duration=900, start=performance.now();
      const tick=now=>{
        const p=Math.min(1,(now-start)/duration);
        const value=Math.round(target*(1-Math.pow(1-p,3)));
        el.textContent=value.toLocaleString("en-IN");
        if(p<1) requestAnimationFrame(tick); else el.dataset.counted="1";
      };
      requestAnimationFrame(tick);
    });
  }

  document.addEventListener("DOMContentLoaded",()=>{
    appendPageEnhancement();
    addSkipLink();
    addSEO();
    normalizeFloatingButtons();
    upgradeContactIcons();
    revealFX();
    activateMicroInteractions();
    addMetricCounters();

    document.querySelectorAll(".nav-actions .callpill").forEach(a=>{
      a.setAttribute("aria-label","Call Leartech on "+SITE.phone);
    });
  });
})();