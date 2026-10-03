(function(){
  "use strict";

  const SITE = {
    name: "Leartech Automation Ventures",
    phone: "+918618605966",
    email: "info@leartech.in",
    address: "No. 40(S), SBI Bank Opp Road, 2nd A Main, 1st Stage, 2nd Phase, Chandra Layout, Bengaluru – 560040",
    googleProfileUrl: "https://share.google/BtJHUSVvmcNcuEB4e",
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
          <div class="fx-heading-row"><div><h2 id="fx-command-title">A billing setup built around the way your counter works.</h2><p>Choose the <strong>hardware</strong>, <strong>software</strong> and <strong>support</strong> you actually need, with clear product information before you make an enquiry.</p></div><a class="fx-text-link" href="products.html">Explore the system ${icon.arrow}</a></div>
          <div class="fx-feature-grid">
            <article class="fx-card"><span class="fx-number">01</span><b>Fast Checkout</b><p>Touch-first interfaces, barcode entry and receipt workflows built around busy counters.</p><small>Counter speed</small></article>
            <article class="fx-card"><span class="fx-number">02</span><b>Inventory Visibility</b><p>Keep product movement and stock information close to everyday billing decisions.</p><small>Stock awareness</small></article>
            <article class="fx-card"><span class="fx-number">03</span><b>Hardware Stack</b><p>POS screens, scanners, thermal printers, drawers and supporting devices in one catalogue.</p><small>Complete setup</small></article>
            <article class="fx-card"><span class="fx-number">04</span><b>Business Reporting</b><p>Turn transactions into useful summaries for owners and operational teams.</p><small>Operational clarity</small></article>
            <article class="fx-card"><span class="fx-number">05</span><b>Service & Setup</b><p>Installation guidance, configuration help and practical assistance after purchase.</p><small>After-sales help</small></article>
            <article class="fx-card"><span class="fx-number">06</span><b>Scalable Workflow</b><p>Start with the counter you have and expand the stack as the business grows.</p><small>Easy to expand</small></article>
          </div>
        </div>
      </section>
      <section class="fx-section fx-flow">
        <div class="container">
          <div class="fx-kicker">HOW IT WORKS</div>
          <div class="fx-heading-row"><div><h2>From enquiry to installation and everyday use.</h2><p>A clearer buying journey means fewer surprises when the system reaches your counter.</p></div></div>
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
            <details><summary>Which businesses can use these systems?</summary><p>Leartech serves <strong>retail</strong>, <strong>grocery</strong>, <strong>food service</strong>, <strong>fashion</strong>, <strong>electronics</strong>, <strong>automotive</strong>, <strong>hospitality</strong>, <strong>salons</strong>, <strong>beauty</strong>, <strong>trade</strong> and other billing-led businesses.</p></details>
            <details><summary>Can I combine hardware and software?</summary><p>Yes. The catalogue is organized so businesses can evaluate hardware and software as connected parts of a counter setup.</p></details>
            <details><summary>Can I ask for a complete setup instead of one product?</summary><p>Yes. Use the quote flow and describe your business type, number of counters and the devices you need.</p></details>
            <details><summary>How do I choose the right printer or scanner?</summary><p>Start with transaction volume, receipt or label needs, connectivity and counter space. The product detail pages expose the available workflow information.</p></details>
            <details><summary>Do you provide support after purchase?</summary><p>Support covers <strong>setup guidance</strong>, <strong>configuration help</strong>, <strong>training</strong> and <strong>after-sales assistance</strong>.</p></details>
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
          <div class="fx-heading-row"><div><h2>Choose equipment around the job it needs to do.</h2><p>Use the product catalogue to build a practical stack around how your counter actually works.</p></div></div>
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
          <div class="fx-heading-row"><div><h2>A clearer way to choose your billing setup.</h2><p>Browse the catalogue, understand the business fit, and contact the team with a specific requirement.</p></div></div>
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

  function setPageTheme(){ document.body.dataset.page=pageKey; document.documentElement.dataset.page=pageKey; }

  function addPageUtilities(){
    if(document.querySelector(".fx-page-tools")) return;
    const wrap=document.createElement("div"); wrap.className="fx-page-tools"; wrap.setAttribute("aria-label","Page tools");
    wrap.innerHTML="<button type=\"button\" class=\"fx-page-tool\" data-top aria-label=\"Back to top\">↑</button><span class=\"fx-page-tool fx-reading-label visible\" aria-hidden=\"true\">READ</span>";
    document.body.appendChild(wrap); const top=wrap.querySelector("[data-top]");
    const onScroll=()=>top.classList.toggle("visible",window.scrollY>500); window.addEventListener("scroll",onScroll,{passive:true}); onScroll();
    top.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
  }

  function addBusinessProfileSection(){
    if(document.querySelector(".fx-business-profile")) return;
    const footer=document.querySelector("footer");
    if(!footer) return;
    footer.insertAdjacentHTML("beforebegin",`
      <section class="fx-section fx-business-profile" aria-labelledby="fx-business-title">
        <div class="container">
          <div class="fx-kicker">LOCAL BUSINESS INFORMATION</div>
          <div class="fx-heading-row">
            <div>
              <h2 id="fx-business-title">Leartech in <strong>Chandra Layout, Bengaluru.</strong></h2>
              <p>For <strong>billing machines</strong>, <strong>thermal printers</strong>, <strong>billing software</strong> and <strong>touch screen billing machines</strong>, visit the Leartech business location or contact the team before you travel.</p>
            </div>
            <a class="fx-text-link" href="https://www.google.com/maps/search/?api=1&query=No.40(S),SBI%20Bank%20Opp.%20Road,2nd%20A%20Main,1st%20Stage,2nd%20Phase,Chandra%20Layout,Bengaluru,560040" target="_blank" rel="noopener">Get directions ${icon.arrow}</a><a class="fx-google-profile" href="https://share.google/BtJHUSVvmcNcuEB4e" target="_blank" rel="noopener"><span class="fx-google-g">G</span> Google Business Profile</a>
          </div>
          <div class="fx-business-grid">
            <article class="fx-business-card"><span class="fx-business-label">ADDRESS</span><strong>No. 40(S), SBI Bank Opp. Road</strong><p>2nd A Main, 1st Stage, 2nd Phase, Chandra Layout, Bengaluru – 560040</p></article>
            <article class="fx-business-card"><span class="fx-business-label">PHONE</span><strong><a href="tel:+918618605966">+91 86186 05966</a></strong><p>Call for product enquiries, pricing discussions and service requirements.</p></article>
            <article class="fx-business-card"><span class="fx-business-label">HOURS</span><strong>Monday–Saturday · 9:30 AM–6:30 PM</strong><p>Sunday closed. Confirm availability before visiting for a specific product or service.</p></article>
            <article class="fx-business-card"><span class="fx-business-label">WHAT WE HANDLE</span><strong>Billing & POS equipment</strong><p>Billing machines, thermal printers, billing software, touch screen billing, barcode devices, cash-counting equipment, consumables and related service support.</p></article>
          </div>
        </div>
      </section>`);
  }
  function addRichContent(){
    if(document.querySelector(".fx-rich-content")) return;
    const footer=document.querySelector("footer");
    if(!footer) return;

    const blocks={
      home:`
        <section class="fx-section fx-rich-content">
          <div class="container">
            <div class="fx-kicker">WHY THE SETUP MATTERS</div>
            <div class="fx-heading-row"><div><h2>Billing equipment should fit the <strong>business workflow</strong>, not the other way around.</h2><p>A busy counter depends on small details working together: item entry, barcode scanning, payment handling, receipt printing, stock updates and the operator's ability to move through a sale without unnecessary steps.</p></div></div>
            <div class="fx-rich-copy">
              <p><strong>Retail counters</strong> often need a dependable combination of billing software, barcode scanning, thermal printing and cash handling. <strong>Food businesses</strong> generally need speed, simple item selection and reliable receipt output. <strong>Service businesses</strong> benefit from a clean way to capture customer details and transaction history. Leartech's catalogue is structured around these practical differences.</p>
              <p>When choosing a system, consider the number of billing points, daily transaction volume, product count, receipt or label requirements, available counter space and the level of operator training required. The right configuration is the one that removes friction from the actual working day.</p>
              <p>For businesses in Bengaluru, the Leartech location in <strong>Chandra Layout</strong> provides a place to discuss the product mix, software requirements, accessories and service needs before committing to a complete setup.</p>
            </div>
          </div>
        </section>`,
      products:`
        <section class="fx-section fx-rich-content">
          <div class="container">
            <div class="fx-kicker">PRODUCT SELECTION</div>
            <div class="fx-heading-row"><div><h2>Compare the parts of a <strong>complete counter</strong>.</h2><p>A printer is useful only when it fits the receipt format, a scanner is useful only when it matches the product workflow, and a POS system is useful when the operator can actually use it quickly.</p></div></div>
            <div class="fx-rich-copy">
              <p><strong>Billing machines</strong> can be the centre of a compact counter setup where product entry, transaction processing and receipt printing need to happen in one place. <strong>Touch screen POS systems</strong> are useful where a visual product interface and faster navigation are important.</p>
              <p><strong>Thermal printers</strong> handle everyday receipt or label output, while <strong>barcode scanners</strong> reduce manual item entry. <strong>Cash drawers</strong> and currency-counting equipment add a dedicated cash-handling layer when the business needs tighter control at the counter.</p>
              <p>Before ordering, confirm the required interfaces, media size, physical footprint, number of counters and software workflow. A short requirements discussion can prevent buying individual devices that later need to be replaced because they do not fit together.</p>
            </div>
          </div>
        </section>`,
      product:`
        <section class="fx-section fx-rich-content">
          <div class="container">
            <div class="fx-kicker">BEFORE YOU ORDER</div>
            <div class="fx-heading-row"><div><h2>Understand the product in its <strong>working environment</strong>.</h2><p>The product image shows the device. The real decision is whether that device makes sense in your counter, software and day-to-day operating conditions.</p></div></div>
            <div class="fx-rich-copy">
              <p>Check the <strong>connection method</strong>, placement, power requirement, paper or label media, expected usage and the companion devices that will sit beside it. These details affect installation and operator experience more than a product name alone.</p>
              <p>For a new counter, it is useful to think in layers: <strong>billing interface</strong>, <strong>item identification</strong>, <strong>receipt output</strong>, <strong>cash handling</strong> and <strong>software workflow</strong>. For an existing counter, the main question is usually compatibility with the devices already in use.</p>
              <p>Use the enquiry route for the exact product configuration, availability and commercial quotation instead of relying on a generic online price that may not represent the final setup.</p>
            </div>
          </div>
        </section>`,
      industries:`
        <section class="fx-section fx-rich-content">
          <div class="container">
            <div class="fx-kicker">INDUSTRY-SPECIFIC WORKFLOWS</div>
            <div class="fx-heading-row"><div><h2>Different businesses create different <strong>billing problems</strong>.</h2><p>Good equipment selection starts with how the customer order enters the business and what must happen before the transaction is complete.</p></div></div>
            <div class="fx-rich-copy">
              <p>In <strong>grocery and retail</strong>, barcode scanning and fast product lookup can reduce repetitive manual entry. In <strong>fashion</strong>, the product catalogue and transaction workflow must cope with a broader range of items and customer choices. In <strong>electronics</strong>, product codes and organised billing records can become especially important as SKU count grows.</p>
              <p>For <strong>food service and hospitality</strong>, speed at the point of sale matters because the billing process sits inside a customer-facing service experience. <strong>Automotive businesses</strong> may need structured parts and service billing, while <strong>salons and beauty businesses</strong> generally need service-led billing and customer-focused records.</p>
              <p>The common requirement is not a single “best” device. It is a <strong>coherent system</strong> where the hardware, software and operating procedure support the work staff actually perform every day.</p>
            </div>
          </div>
        </section>`,
      software:`
        <section class="fx-section fx-rich-content">
          <div class="container">
            <div class="fx-kicker">SOFTWARE IN PRACTICE</div>
            <div class="fx-heading-row"><div><h2>Turn transactions into a <strong>repeatable daily process</strong>.</h2><p>Billing software becomes valuable when the same workflow works reliably for every operator, every counter and every ordinary business day.</p></div></div>
            <div class="fx-rich-copy">
              <p>A useful billing workflow starts with a product or service, applies the relevant quantity and pricing logic, records the customer or transaction information required by the business, and completes payment with a clear receipt or transaction record.</p>
              <p>Behind the counter, <strong>inventory</strong> and <strong>reporting</strong> turn individual sales into operational information. Product quantities, transaction history and sales summaries can help a business owner understand what happened after the customer has left the counter.</p>
              <p>Software should also be considered alongside the hardware. A fast interface loses its advantage when the scanner, printer, network connection or workstation creates unnecessary delays. That is why the product and software decisions should be evaluated together.</p>
            </div>
          </div>
        </section>`,
      support:`
        <section class="fx-section fx-rich-content">
          <div class="container">
            <div class="fx-kicker">SERVICE GUIDANCE</div>
            <div class="fx-heading-row"><div><h2>Good support begins with the <strong>right information</strong>.</h2><p>Most avoidable support delays happen because the issue arrives without the product name, symptom, error message or enough context to reproduce the problem.</p></div></div>
            <div class="fx-rich-copy">
              <p>When a <strong>thermal printer</strong> is not printing, describe whether the device has power, whether the paper feeds, whether the indicator lights are active and whether the problem is limited to one application. When a <strong>barcode scanner</strong> fails, mention the connection type and whether the device is detected by the computer.</p>
              <p>For <strong>billing software</strong>, useful information includes the screen where the issue appears, the action that triggers it and any visible error message. A clear photograph or short video can be more useful than a long description when the problem is visual.</p>
              <p>Support requests should end with a clear next action: a setting to change, a test to perform, a configuration to check or a service step to schedule. That keeps the process measurable and prevents repeated explanations of the same problem.</p>
            </div>
          </div>
        </section>`,
      about:`
        <section class="fx-section fx-rich-content">
          <div class="container">
            <div class="fx-kicker">HOW LEARTECH FITS TOGETHER</div>
            <div class="fx-heading-row"><div><h2>Products, software and support form one <strong>customer journey</strong>.</h2><p>The value of a billing system does not come from one box. It comes from how the components behave together after installation.</p></div></div>
            <div class="fx-rich-copy">
              <p>Leartech Automation Ventures is positioned around <strong>billing machines</strong>, <strong>thermal printers</strong>, <strong>touch screen billing machines</strong>, <strong>billing software</strong>, barcode equipment and related counter hardware. That combination gives businesses a single place to discuss the equipment and workflow rather than sourcing every component separately.</p>
              <p>The practical buying process starts with the business type and counter requirements, moves into product selection and software fit, and then continues into installation, training and service. A clear process makes it easier for a business owner to understand what is being purchased and why each component is included.</p>
              <p>For customers visiting in Bengaluru, the listed Chandra Layout location provides a local point for enquiries around the billing and POS range.</p>
            </div>
          </div>
        </section>`,
      contact:`
        <section class="fx-section fx-rich-content">
          <div class="container">
            <div class="fx-kicker">CONTACT WITH CONTEXT</div>
            <div class="fx-heading-row"><div><h2>A better enquiry starts with <strong>specific details</strong>.</h2><p>Instead of sending “price?”, share the business type, number of counters, products or services you bill, and the hardware or software you are considering.</p></div></div>
            <div class="fx-rich-copy">
              <p>For a new installation, include the approximate <strong>number of counters</strong>, whether barcode scanning is required, whether you need receipts or labels, and whether cash-handling equipment is part of the requirement. This gives the team enough context to discuss a complete configuration.</p>
              <p>For an existing system, explain what is already installed and what you want to replace, add or repair. A photo of the current setup can make the first response much more useful because it shows the available space, device type and physical connections.</p>
              <p>The listed business location is in <strong>Chandra Layout, Bengaluru</strong>, opposite SBI Bank on 2nd A Main. Use the directions link on this page to navigate to the exact listed address before visiting.</p>
            </div>
          </div>
        </section>`
    };

    const html=blocks[pageKey];
    if(html) footer.insertAdjacentHTML("beforebegin",html);
  }


  const PAGE_FEATURES = {
    home: [
      ["Sticky navigation","Keeps primary pages and enquiry access close at hand while scrolling."],
      ["Hero CTA controls","Visible Call and WhatsApp controls sit directly over the artwork CTA positions."],
      ["Responsive hero scaling","The hero preserves the artwork composition across desktop and mobile widths."],
      ["Product preview grid","The home page surfaces key products without forcing users into the catalogue first."],
      ["Industry preview cards","Business types are introduced through visual cards with direct enquiry paths."],
      ["Business detail section","The listed Bengaluru location, hours and product focus are surfaced on the home page."],
      ["Scroll reveal","New content blocks appear progressively as they enter the viewport."],
      ["Pointer depth","Feature cards react subtly to pointer movement on supported devices."],
      ["Reduced-motion support","People who request reduced motion are not forced through decorative animation."],
      ["Direct enquiry routes","Call, WhatsApp and quote links are available from high-intent areas."],
      ["FAQ content","Common product and setup questions are answered without requiring another page."],
      ["Local business context","The home page explains where the business is located and what it handles."],
      ["Counter workflow explainer","Billing is explained as a process rather than only as a product category."],
      ["Hardware stack explanation","Printers, scanners, POS and cash handling are described as connected components."],
      ["Software relationship","The role of billing software is explained alongside physical counter hardware."],
      ["Buying guidance","Visitors get practical criteria before they start comparing individual products."]
    ],
    products: [
      ["Product search","Search the catalogue by product name or category."],
      ["Category tabs","Filter products by the available catalogue groups."],
      ["Sort controls","Change the presentation order for faster scanning."],
      ["Quote cart","Collect multiple products before sending one WhatsApp enquiry."],
      ["Four-image galleries","Product cards support multiple views where gallery assets exist."],
      ["Product detail panel","Compare a selected product without immediately leaving the catalogue."],
      ["Standalone product page","Individual products have dedicated detail routes."],
      ["Buy Now flow","Add a chosen product to the quote list from the catalogue."],
      ["WhatsApp quotation","Send selected products and quantities through WhatsApp."],
      ["Responsive product grid","The catalogue adapts to tablet and mobile layouts."],
      ["Buying guide","Explains what to consider for checkout, barcode, cash and complete setups."],
      ["Product context links","Catalogue cards link naturally into more detailed product information."],
      ["Breadcrumb structure","Users get a clearer understanding of where they are in the catalogue."],
      ["Loading strategy","Product galleries load progressively to reduce the initial page burden."],
      ["Accessible controls","Interactive controls include labels for keyboard and assistive-technology use."],
      ["Natural product copy","Descriptions focus on business use instead of generic marketing filler."]
    ],
    product: [
      ["Dedicated product URL","Individual products can be opened with a focused URL."],
      ["Gallery navigation","Previous and next controls support product image exploration."],
      ["Thumbnail rail","Multiple product views remain visible in a compact image strip."],
      ["Quantity control","Customers can prepare a multi-unit enquiry from the product page."],
      ["Quote action","A product can be sent to the quote flow without copying details manually."],
      ["WhatsApp quote link","The selected product can be quoted directly through WhatsApp."],
      ["Feature summary","Core product attributes are surfaced before deeper enquiry."],
      ["Product category label","The page makes the product family explicit."],
      ["Deployment guidance","The page explains counter placement and supporting equipment considerations."],
      ["Compatibility thinking","Users are encouraged to consider the existing workflow around the device."],
      ["Support context","The support path is connected to the product decision."],
      ["Responsive detail layout","The product detail experience reorganizes for smaller screens."],
      ["Keyboard-friendly controls","Gallery and quantity controls are interactive without requiring pointer input."],
      ["SEO product schema","Product detail pages expose structured product information."],
      ["Contextual navigation","Visitors can return to the catalogue without losing the product journey."]
    ],
    industries: [
      ["Industry taxonomy","Business categories are organized around actual billing-led environments."],
      ["Retail workflows","Retail use cases explain barcode, receipts and product lookup."],
      ["Grocery workflows","High-volume item entry and counter speed are addressed."],
      ["Food service workflows","Food counters are described around quick order and receipt flow."],
      ["Fashion workflows","Product-rich catalogues and organized transactions are explained."],
      ["Luxury retail context","The page covers product-led retail with structured customer transactions."],
      ["Automotive workflows","Parts and service transactions receive their own business context."],
      ["Electronics workflows","SKU-heavy product environments are explained."],
      ["Hospitality context","Customer-facing billing workflows are described separately."],
      ["Beauty services","Service-led billing use cases are covered."],
      ["Visual industry cards","Original industry imagery is presented as the main visual layer."],
      ["Direct enquiry links","Each industry card can route a visitor into a specific enquiry."],
      ["Industry filters","Visitors can narrow the catalogue by business type."],
      ["Business-fit matrix","A separate content layer explains why different counters need different setups."],
      ["Industry copy depth","Each business group gets distinct explanatory content."],
      ["Medical-free catalogue","Unrelated medical positioning has been removed from the active industry experience."]
    ],
    software: [
      ["Billing workflow","Explains the path from product entry to completed transaction."],
      ["Inventory module","Describes how stock visibility fits around billing."],
      ["Product catalogue module","Explains product organization and pricing context."],
      ["Customer module","Shows where customer records fit into daily operations."],
      ["Reporting module","Explains why transaction data matters after the sale."],
      ["Hardware integration","Positions software as part of the physical counter system."],
      ["Live dashboard concept","The page visualizes the operational information a business owner reviews."],
      ["Software pricing context","Starting price is separated from final configuration decisions."],
      ["FAQ section","Answers common software buying questions."],
      ["Workflow sequence","Capture, calculate, complete and reflect are explained as a connected process."],
      ["Retail-first positioning","The page keeps billing use cases central to the product story."],
      ["Operational language","Copy focuses on actual business tasks instead of vague technology claims."],
      ["Responsive dashboard","The software visual is designed to remain usable across viewport sizes."],
      ["SEO software metadata","Page titles and descriptions target relevant billing software intent."],
      ["Contact handoff","Visitors can move from software research to a setup discussion."]
    ],
    support: [
      ["Support command center","The page organizes support around a clear service journey."],
      ["Call support","One-tap phone access is available for support enquiries."],
      ["WhatsApp support","Customers can send details, photos and issue descriptions quickly."],
      ["Email support","Longer technical explanations can be sent through email."],
      ["Support FAQ","Common troubleshooting questions are answered in expandable panels."],
      ["Issue categorization","Visitors can identify the hardware or software area affected."],
      ["Support request form","A structured form prepares a clearer WhatsApp request."],
      ["Diagnostic checklist","The page explains what information makes diagnosis faster."],
      ["Installation guidance","Setup and configuration are explained as part of the service flow."],
      ["Hardware support coverage","POS, printers, scanners and cash-handling devices are included."],
      ["Software support coverage","Billing and operational workflow questions have dedicated context."],
      ["Four-step resolution flow","Understand, diagnose, resolve and follow-through are separated."],
      ["Visual support explainer","The service page uses a custom support illustration."],
      ["Action-oriented copy","Instructions tell visitors what to check and what to send."],
      ["Reduced support friction","The enquiry format reduces repeated back-and-forth."]
    ],
    about: [
      ["Company positioning","The company story is tied to actual billing and POS work."],
      ["Product relationship","Hardware categories are explained as part of the wider offering."],
      ["Software relationship","Software is presented as the operational layer around hardware."],
      ["Support relationship","Service is shown as part of the customer journey."],
      ["Industry context","The company page links its offering to real operating environments."],
      ["Local presence","The Bengaluru location is surfaced as part of the business identity."],
      ["Practical buying journey","Visitors see the path from business need to configuration."],
      ["Clear information architecture","About content connects naturally to Products, Industries and Software."],
      ["Natural copy","The page avoids exaggerated corporate claims."],
      ["Accessible navigation","Core links remain reachable through standard navigation."],
      ["Responsive sections","Company content adapts to smaller screens."],
      ["Search-friendly metadata","About page metadata is aligned to the business offering."]
    ],
    contact: [
      ["Exact listed address","The Chandra Layout location is shown in full rather than only the locality."],
      ["SBI Bank landmark","The nearby landmark is included to make the address easier to recognize."],
      ["Live Google map","The contact page can show a map centered on the listed business location."],
      ["Directions link","Visitors can open the same location in Google Maps for navigation."],
      ["One-tap call","The listed phone number can be called directly from the page."],
      ["WhatsApp enquiry","Visitors can start a WhatsApp conversation without copying the number."],
      ["Business hours","The listed Monday-to-Saturday opening window is shown explicitly."],
      ["Structured enquiry form","Business type and requirement fields collect useful context."],
      ["Requirement guidance","The page explains what information helps create a better first response."],
      ["Counter-count prompt","Visitors can include the number of billing points they operate."],
      ["Existing-system prompt","Replacement or expansion enquiries can describe the current setup."],
      ["Product-category context","The contact page references the actual product families offered."],
      ["Local SEO signals","Address, locality, hours and business category are exposed in structured data."],
      ["Map accessibility label","The embedded map receives a descriptive title."],
      ["Responsive contact layout","Contact content and map adapt to mobile screens."]
    ]
  };


  const DEEP_COPY = {
    home: [
      "A good billing counter should feel predictable for the operator: the product is easy to identify, the transaction is easy to complete, and the final record is easy to understand later. That rhythm matters on a quiet morning and even more during a busy evening rush.",
      "For a new setup, it is worth thinking about the full sequence before buying individual devices. Counter height, available sockets, network access, printer placement, scanner position, receipt media and the software interface all affect the final experience.",
      "Leartech's Chandra Layout presence gives Bengaluru businesses a local point for discussing **billing hardware**, **software requirements** and the practical accessories that complete a counter. Online product research can start the conversation, but the actual configuration should follow the way the business operates."
    ],
    products: [
      "Product selection becomes easier when the requirement is written down first. Note the number of counters, the expected transaction pattern, the type of receipts or labels required, whether products already have barcodes, and whether the business needs dedicated cash-handling equipment.",
      "A complete counter is often a combination rather than a single purchase. A **POS or billing machine** handles the transaction workflow, while a **barcode scanner** can speed item entry and a **thermal printer** produces the customer receipt. A **cash drawer** may be useful where physical cash remains a meaningful part of daily sales.",
      "When comparing products, look beyond photographs. Consider the physical footprint, connection method, operating environment, consumables, software compatibility and who will support the installation. Those details decide whether a product remains useful after the first week."
    ],
    product: [
      "A product specification only answers part of the buying question. The other part is how the device will be used at the counter, how frequently it will operate, what it connects to, and what the staff member needs to do immediately before and after using it.",
      "Think about the surrounding workflow: **item entry**, **transaction calculation**, **payment**, **receipt output** and **record keeping**. A device that performs one task well still needs to fit cleanly into the other four steps.",
      "For an existing installation, share the current device model, software environment and the problem you are trying to solve. For a new setup, describe the business and counter requirement. This gives the enquiry a useful starting point instead of a generic request for a price."
    ],
    industries: [
      "Industry fit is mainly a workflow question. A grocery counter may prioritize fast scanning and short transaction times, while a salon may place more emphasis on service selection and customer records. The equipment can look similar on paper while the operating needs are very different.",
      "Businesses also vary in how they handle products and inventory. **Electronics** and **automotive parts** can involve many SKUs and exact item identification, while **fashion** and **home retail** may involve a different product catalogue and customer interaction at the same counter.",
      "The purpose of the industry catalogue is to make those differences visible. Choose the business environment that feels closest to the way you operate, then use the product and software pages to evaluate the parts of the setup that matter to that environment."
    ],
    software: [
      "Software is easiest to understand when it is described in terms of the daily work it supports. A salesperson needs to find the item, build the transaction, accept payment and finish the bill. A manager then needs a reliable view of what was sold and what information has been recorded.",
      "The **inventory** layer connects the front counter to the rest of the business. Product records, quantities and transaction history become useful only when the underlying workflow is consistent enough for staff to follow every day.",
      "The right software also depends on hardware. Screen size, scanning speed, printer behaviour and network reliability all influence the experience of the billing operator. That is why software selection should be discussed together with the physical counter setup rather than in isolation."
    ],
    support: [
      "Support works best when the first message contains enough information to reproduce the problem. A device name, a short description of the symptom, the point in the workflow where it occurs, and a photograph or video can remove several rounds of basic questioning.",
      "For **printers**, mention whether power and paper feed are normal and whether the issue appears across applications. For **scanners**, mention whether the computer detects the device. For **software**, mention the screen, action and message that appear when the problem occurs.",
      "The aim of support is not simply to provide a long answer. It is to define the next useful action, test it, and then decide whether further configuration or service is required. Clear support notes make that process faster for both sides."
    ],
    about: [
      "Leartech's offering is easier to evaluate when the parts are considered together. **Billing machines**, **touch screen billing systems**, **thermal printers**, **barcode equipment** and **billing software** each solve a different part of the counter workflow.",
      "The company page therefore acts as a bridge between the catalogue and the working environment. A business owner can identify the operating need first, understand which equipment fits that need, and then move into a product or support conversation with more useful context.",
      "The local Chandra Layout presence is part of that practical model. Bengaluru customers can use the listed business location and contact channels when they need product information, configuration guidance or service assistance."
    ],
    contact: [
      "The fastest quotation is usually the one with enough context to avoid guesswork. Include the business type, number of counters, the products or services you bill, your current equipment if any, and the result you want the new system to deliver.",
      "For a replacement enquiry, a photograph of the existing counter is useful because it can show the device footprint, cable layout and available workspace. For a new installation, describe the expected billing volume and whether you need **barcode scanning**, **receipt printing**, **labels** or **cash handling**.",
      "The listed Leartech location is in **Chandra Layout, Bengaluru**, with **SBI Bank Opp Road** as a nearby landmark. The page includes a direct Google Maps route and the supplied Google Business Profile link so visitors can verify the listing before travelling."
    ]
  };

  function addDeepCopy(){
    const copy=DEEP_COPY[pageKey];
    const host=document.querySelector(".fx-rich-content .fx-rich-copy");
    if(!copy || !host || host.dataset.deep==="1") return;
    copy.forEach(txt=>{ const p=document.createElement("p"); p.innerHTML=txt.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"); host.appendChild(p); });
    host.dataset.deep="1";
  }

  function addFeatureIndex(){
    if(document.querySelector(".fx-feature-index")) return;
    const list=PAGE_FEATURES[pageKey];
    if(!list) return;
    const footer=document.querySelector("footer");
    if(!footer) return;
    const offset=list.map((item,i)=>'<article class="fx-feature-index-card"><span class="fx-fi-no">'+String(i+1).padStart(2,"0")+'</span><strong>'+item[0]+'</strong><p>'+item[1]+'</p></article>').join("");
    const total=Object.values(PAGE_FEATURES).reduce((n,a)=>n+a.length,0);
    footer.insertAdjacentHTML("beforebegin",'<section class="fx-section fx-feature-index"><div class="container"><div class="fx-index-head"><div><div class="fx-kicker">SITE EXPERIENCE INDEX</div><h2>Built-in details that make the site easier to use.</h2></div><span class="fx-index-count">'+total+' documented refinements across the site</span></div><div class="fx-feature-index-grid">'+offset+"</div></div></section>");
  }

  function addContactMap(){
    if(pageKey!=="contact" || document.querySelector(".fx-map-shell")) return;
    const footer=document.querySelector("footer");
    if(!footer) return;
    const anchor=document.querySelector("#page-contact .map");
    const map='<div class="fx-map-shell"><iframe title="Leartech Automation Ventures exact listed business location in Chandra Layout, Bengaluru" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=No.40(S),SBI%20Bank%20Opp%20Road,2nd%20A%20Main,1st%20Stage,2nd%20Phase,Chandra%20Layout,Bengaluru%20560040&output=embed"></iframe><div class="fx-map-caption"><strong>No. 40(S), SBI Bank Opp Road, 2nd A Main, 1st Stage, 2nd Phase, Chandra Layout, Bengaluru – 560040</strong><span>Use the directions link above the map for turn-by-turn navigation.</span></div></div>';
    if(anchor){ anchor.outerHTML=map; }
    else { footer.insertAdjacentHTML("beforebegin",map); }
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
        {"@type":"LocalBusiness","@id":SITE.siteUrl+"#organization","name":SITE.name,"url":SITE.siteUrl,"telephone":SITE.phone,"email":SITE.email,"address":{"@type":"PostalAddress","streetAddress":"No. 40(S), SBI Bank Opp. Road, 2nd A Main, 1st Stage, 2nd Phase, Chandra Layout","addressLocality":"Bengaluru","postalCode":"560040","addressRegion":"Karnataka","addressCountry":"IN"},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"09:30","closes":"18:30"}],"areaServed":{"@type":"City","name":"Bengaluru"},"knowsAbout":["Billing Machines","Thermal Printers","Billing Software","Touch Screen Billing Machines","Barcode Scanners","Currency Counting Machines","Billing Machine Repair & Service","Thermal Paper Rolls"],"sameAs":[SITE.googleProfileUrl]},
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


  function ensureGlobalQuickSetup(){
    if(document.querySelector(".ux-quick-setup")) return;
    const host=document.createElement("div");
    host.className="ux-quick-setup";
    const label=pageKey==="support"?"Request support":pageKey==="contact"?"Start an enquiry":"Find my setup";
    host.innerHTML='<button class="ux-setup-trigger" type="button" aria-haspopup="dialog" aria-controls="uxSetupDialog"><span class="ux-setup-icon">✦</span><span>'+label+'</span></button>'+
      '<div class="ux-setup-backdrop" data-setup-close></div>'+
      '<section class="ux-setup-dialog" id="uxSetupDialog" role="dialog" aria-modal="true" aria-labelledby="uxSetupTitle">'+
      '<button class="ux-setup-close" type="button" data-setup-close aria-label="Close">×</button>'+
      '<div class="ux-setup-kicker">QUICK SETUP FINDER</div><h2 id="uxSetupTitle">Plan the right billing setup in three steps.</h2>'+
      '<p class="ux-setup-intro">Choose your business, counter count and requirement. We will turn those answers into a ready-to-send WhatsApp enquiry.</p>'+
      '<div class="ux-stepper"><span class="active" data-step-dot="1">1</span><i></i><span data-step-dot="2">2</span><i></i><span data-step-dot="3">3</span></div>'+
      '<div class="ux-setup-step active" data-step="1"><label>Business type<select id="uxBusiness"><option>Retail Store</option><option>Grocery / Supermarket</option><option>Restaurant / Café</option><option>Fashion / Apparel</option><option>Electronics</option><option>Automotive</option><option>Salon / Beauty</option><option>Other</option></select></label><button class="btn primary" type="button" data-next-step>Continue →</button></div>'+
      '<div class="ux-setup-step" data-step="2"><label>Billing points<select id="uxCounters"><option>1 counter</option><option>2 counters</option><option>3–5 counters</option><option>6+ counters</option><option>Not decided</option></select></label><button class="btn primary" type="button" data-next-step>Continue →</button></div>'+
      '<div class="ux-setup-step" data-step="3"><label>Requirement<textarea id="uxNeed" placeholder="Example: POS, thermal printer and barcode scanner..."></textarea></label><button class="btn primary" type="button" data-setup-send>Send enquiry on WhatsApp →</button></div>'+
      '</section>';
    document.body.appendChild(host);
    let step=1;
    const showStep=n=>{step=n;host.querySelectorAll(".ux-setup-step").forEach(el=>el.classList.toggle("active",Number(el.dataset.step)===n));host.querySelectorAll("[data-step-dot]").forEach(el=>el.classList.toggle("active",Number(el.dataset.stepDot)<=n));};
    const open=()=>host.classList.add("open"), close=()=>host.classList.remove("open");
    host.querySelector(".ux-setup-trigger").addEventListener("click",open);
    host.querySelectorAll("[data-setup-close]").forEach(el=>el.addEventListener("click",close));
    host.querySelectorAll("[data-next-step]").forEach(el=>el.addEventListener("click",()=>showStep(Math.min(3,step+1))));
    host.querySelector("[data-setup-send]").addEventListener("click",()=>{
      const message=["Hi Leartech, I need help choosing a billing/POS setup.","","Business: "+host.querySelector("#uxBusiness").value,"Billing points: "+host.querySelector("#uxCounters").value,"Requirement: "+(host.querySelector("#uxNeed").value.trim()||"Please recommend the right setup.")].join("\\n");
      window.open("https://wa.me/918618605966?text="+encodeURIComponent(message),"_blank","noopener,noreferrer");
      close();
    });
    document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});
  }


  function addGlobalMobileBar(){
    if(document.querySelector(".ux-mobile-bar")) return;
    const bar=document.createElement("div");
    bar.className="ux-mobile-bar";
    bar.innerHTML='<a href="tel:+918618605966" aria-label="Call Leartech"><span>☎</span>Call</a><button type="button" data-ux-open-setup><span>✦</span>Quick Setup</button><a href="https://wa.me/918618605966" target="_blank" rel="noopener" aria-label="WhatsApp Leartech"><span>◉</span>WhatsApp</a>';
    document.body.appendChild(bar);
    bar.querySelector("[data-ux-open-setup]")?.addEventListener("click",()=>document.querySelector(".ux-setup-trigger")?.click());
  }

  function addSearchShortcut(){
    document.addEventListener("keydown",e=>{
      if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){
        const input=document.querySelector("#productSearch,#standaloneSearch");
        if(input){e.preventDefault();input.focus();}
      }
    });
  }

  document.addEventListener("DOMContentLoaded",()=>{
    appendPageEnhancement();
    addRichContent();
    addDeepCopy();
    addBusinessProfileSection();
    setPageTheme();
    addPageUtilities();
    ensureGlobalQuickSetup();
    addGlobalMobileBar();
    addSearchShortcut();
    addContactMap();
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