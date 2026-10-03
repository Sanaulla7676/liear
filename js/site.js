document.addEventListener("DOMContentLoaded",()=>{
const current=location.pathname.split("/").pop()||"index.html";
document.querySelectorAll("header .links a").forEach(a=>a.classList.toggle("active",a.getAttribute("href")===current));
const nav=document.querySelector("header .links"),menu=document.getElementById("menu");
menu?.addEventListener("click",()=>{const open=nav?.classList.toggle("mobile-open");menu.setAttribute("aria-expanded",String(!!open))});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("mobile-open")));
document.querySelectorAll("[data-asset]").forEach(img=>{const key=img.dataset.asset;const assets=window.LEARTECH_SITE_ASSETS||{};if(assets[key]){img.src=assets[key];img.removeAttribute("data-asset")}});
const header=document.querySelector("header");
const updateScroll=()=>{header?.classList.toggle("scrolled",window.scrollY>12);const max=document.documentElement.scrollHeight-window.innerHeight;document.documentElement.style.setProperty("--progress",(max>0?window.scrollY/max*100:0)+"%")};
window.addEventListener("scroll",updateScroll,{passive:true});updateScroll();
if("IntersectionObserver"in window){
const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");io.unobserve(entry.target)}}),{threshold:.12,rootMargin:"0px 0px -8% 0px"});
document.querySelectorAll(".section,.subhero,.strip,.band,.cta,.detail,.head,.grid4,.aud-grid,.industry-grid,.metric-grid,.testimonials,.values,.timeline,.form,.office,.map,.photo-stage").forEach(el=>{el.classList.add("reveal");io.observe(el)});
document.querySelectorAll(".grid4,.aud-grid,.industry-grid,.metric-grid,.testimonials,.values,.timeline").forEach(el=>el.classList.add("stagger"));
}else document.querySelectorAll(".reveal").forEach(el=>el.classList.add("is-visible"));
const lead=document.getElementById("leadForm");
if(lead){
const params=new URLSearchParams(location.search);
const catalog=typeof PRODUCTS!=="undefined"?PRODUCTS:[];
const selected=catalog.find(p=>p.id===params.get("product"));
const need=document.getElementById("need");
if(selected&&need&&!need.value)need.value="I am interested in "+selected.name+". Please share the best quote and setup details.";
lead.addEventListener("submit",e=>{
e.preventDefault();
const name=document.getElementById("name")?.value.trim()||"";
const phone=document.getElementById("phone")?.value.trim()||"";
const business=document.getElementById("business")?.value||"";
const requirement=need?.value.trim()||"Please advise on the right billing setup.";
if(phone.replace(/\D/g,"").length<10){document.getElementById("phone")?.reportValidity();return}
const msg=["Hi Leartech, I would like a billing/POS enquiry.","","Name: "+name,"Phone: "+phone,"Business: "+business,"Requirement: "+requirement].join("\n");
location.href="https://wa.me/918618605966?text="+encodeURIComponent(msg);
});
}
document.getElementById("year")?.replaceChildren(document.createTextNode(String(new Date().getFullYear())));
});

/* Premium motion layer: purposeful scroll/parallax/reveal interactions. */
document.addEventListener("DOMContentLoaded",()=>{
  const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hero=document.querySelector("#page-home .hero-reference-wrap");
  const heroArt=document.querySelector("#page-home .hero-reference-art");

  const progress=document.createElement("div");
  progress.className="scroll-progress";
  progress.setAttribute("aria-hidden","true");
  document.body.appendChild(progress);

  const updateMotion=()=>{
    const y=window.scrollY||0;
    const max=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
    progress.style.setProperty("--scroll-progress",(y/max)*100+"%");
    if(!reduce && hero && heroArt){
      const phone=window.matchMedia("(max-width:760px)").matches;
      if(phone){ heroArt.style.transform="none"; }
      else {
        const p=Math.min(y/700,1);
        heroArt.style.transform="translate3d(0,"+(p*18)+"px,0) scale("+(1.008+p*.006)+")";
      }
    }
  };
  window.addEventListener("scroll",updateMotion,{passive:true});
  updateMotion();

  if(!reduce){
    document.querySelectorAll(".reveal").forEach((el)=>{
      el.style.setProperty("--reveal-delay",((el.getBoundingClientRect().top % 5) * .02)+"s");
    });

    document.querySelectorAll(".stagger > *").forEach((el,i)=>{
      el.style.setProperty("--item-delay",Math.min(i*.055,.33)+"s");
    });

    document.querySelectorAll("a.btn, .pill, .catalog-tab, .detail-thumb, .gallery-thumb").forEach((el)=>{
      el.addEventListener("pointerenter",()=>el.classList.add("motion-hover"));
      el.addEventListener("pointerleave",()=>el.classList.remove("motion-hover"));
    });

    document.querySelectorAll(".card:not(.reference-prod-card), .aud, .industry, .metric, .quote").forEach((el)=>{
      el.addEventListener("pointermove",(e)=>{
        const r=el.getBoundingClientRect();
        const x=(e.clientX-r.left)/r.width-.5;
        const y=(e.clientY-r.top)/r.height-.5;
        el.style.setProperty("--mx",x.toFixed(3));
        el.style.setProperty("--my",y.toFixed(3));
      });
      el.addEventListener("pointerleave",()=>{
        el.style.removeProperty("--mx");
        el.style.removeProperty("--my");
      });
    });
  }
});

document.addEventListener("DOMContentLoaded",()=>{
  const wa='<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.1 3.9A9.8 9.8 0 0 0 4.5 16.1L3 21l5-1.5A9.8 9.8 0 1 0 20.1 3.9Zm-8.2 15.8c-1.6 0-3.2-.4-4.6-1.2l-.3-.2-3 .9.9-2.9-.2-.3a8.1 8.1 0 1 1 7.2 3.7Zm4.4-6.1c-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-1.7-.8-2.8-1.5-3.9-3.3-.1-.2-.1-.4.1-.5l.5-.6c.1-.2.2-.3.1-.5l-.6-1.5c-.2-.4-.3-.4-.5-.4h-.4c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s.9 2.6 1 2.8c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.6.6.2 1.1.2 1.5.1.5-.1 1.3-.5 1.5-1 .2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3Z"/></svg>';
  const tel='<svg class="icon-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.7 3.8 9.2 3c.7-.2 1.4.2 1.7.9l1.1 2.8c.2.6 0 1.3-.5 1.6l-1.7 1.1c.8 1.8 2.3 3.4 4.1 4.2l1.1-1.7c.3-.5 1-.7 1.6-.5l2.8 1.1c.7.3 1.1 1 .9 1.7l-.8 2.5c-.2.7-.9 1.2-1.6 1.2C11 17.9 6.1 13 6.1 7c0-.7.5-1.4 1.2-1.6l-.6-1.6Z"/></svg>';
  document.querySelectorAll(".float .wa").forEach(el=>el.innerHTML=wa);
  document.querySelectorAll(".float .call").forEach(el=>el.innerHTML=tel);
});
