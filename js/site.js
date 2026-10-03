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
location.href="https://wa.me/918904997113?text="+encodeURIComponent(msg);
});
}
document.getElementById("year")?.replaceChildren(document.createTextNode(String(new Date().getFullYear())));
});