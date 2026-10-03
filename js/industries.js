(function(){
"use strict";
function applyFilter(){
 const q=(document.getElementById("industrySearch")?.value||"").trim().toLowerCase();
 const active=document.querySelector(".industry-chip.active")?.dataset.tag||"All";
 let visible=0;
 document.querySelectorAll("#industryCards .industry-visual-card").forEach(card=>{
  const tag=card.dataset.tag||"", name=card.dataset.name||"";
  const show=(active==="All"||tag===active)&&(!q||name.includes(q)||tag.toLowerCase().includes(q));
  card.hidden=!show; if(show)visible++;
 });
 const out=document.getElementById("industryResultCount"); if(out)out.textContent=visible+" industries";
}
document.addEventListener("DOMContentLoaded",()=>{
 const chips=document.getElementById("industryChips");
 chips?.addEventListener("click",e=>{
  const chip=e.target.closest(".industry-chip"); if(!chip)return;
  chips.querySelectorAll(".industry-chip").forEach(x=>x.classList.remove("active"));
  chip.classList.add("active"); applyFilter();
 });
 document.getElementById("industrySearch")?.addEventListener("input",applyFilter);
 if(window.gsap&&window.ScrollTrigger&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".industry-hero h1",{y:40,opacity:0,duration:.8,ease:"power4.out"});
  gsap.from(".industry-hero p,.industry-hero-actions",{y:18,opacity:0,duration:.6,stagger:.08,delay:.1});
  gsap.utils.toArray(".industry-visual-card").forEach((el,i)=>gsap.from(el,{y:24,opacity:0,duration:.55,delay:(i%4)*.04,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 92%",once:true}}));
 }
 applyFilter();
});
})();