(function(){
  "use strict";
  const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function applyFilter(){
    const q=(document.getElementById("industrySearch")?.value||"").trim().toLowerCase();
    const active=document.querySelector(".industry-chip.active")?.dataset.tag||"All";
    let visible=0;
    document.querySelectorAll("#industryCards .industry-visual-card").forEach(card=>{
      const matchTag=active==="All"||card.dataset.tag===active;
      const matchQ=!q||card.dataset.name.includes(q)||card.dataset.tag.toLowerCase().includes(q);
      card.hidden=!(matchTag&&matchQ);
      if(matchTag&&matchQ)visible++;
    });
    const out=document.getElementById("industryResultCount"); if(out)out.textContent=visible+" categories";
  }

  function initMotion(){
    if(!window.gsap||!window.ScrollTrigger||reduced)return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".industry-hero h1",{y:48,opacity:0,duration:.9,ease:"power4.out"});
    gsap.from(".industry-hero p,.industry-hero-actions",{y:20,opacity:0,duration:.7,stagger:.08,ease:"power3.out",delay:.18});
    gsap.from(".industry-hero-panel",{x:32,opacity:0,duration:.8,ease:"power4.out",delay:.12});
    gsap.utils.toArray(".industry-visual-card").forEach((el,i)=>{
      gsap.from(el,{y:34,opacity:0,duration:.62,ease:"power3.out",delay:(i%4)*.04,scrollTrigger:{trigger:el,start:"top 90%",once:true}});
    });
  }

  document.addEventListener("DOMContentLoaded",()=>{
    const grid=document.getElementById("industryCards"); if(!grid)return;
    const tags=[...new Set([...document.querySelectorAll("#industryCards .industry-visual-card")].map(x=>x.dataset.tag).filter(Boolean))];
    const chipWrap=document.getElementById("industryChips");
    if(chipWrap){
      chipWrap.innerHTML=["All",...tags].map(tag=>'<button type="button" class="industry-chip '+(tag==="All"?"active":"")+'" data-tag="'+tag.replace(/"/g,"&quot;")+'">'+tag+'</button>').join("");
      chipWrap.addEventListener("click",e=>{
        const chip=e.target.closest(".industry-chip");if(!chip)return;
        chipWrap.querySelectorAll(".industry-chip").forEach(x=>x.classList.remove("active"));
        chip.classList.add("active"); applyFilter();
      });
    }
    const search=document.getElementById("industrySearch"); if(search)search.addEventListener("input",applyFilter);

    document.querySelectorAll(".industry-photo").forEach(img=>{
      img.addEventListener("load",()=>img.classList.add("loaded"));
      img.addEventListener("error",()=>{
        if(img.dataset.fallback && !img.dataset.fallbackUsed){
          img.dataset.fallbackUsed="1";
          img.src=img.dataset.fallback;
          return;
        }
        img.classList.add("failed");
      });
    });
    initMotion();
    applyFilter();
  });
})();