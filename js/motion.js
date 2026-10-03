(function(){
  "use strict";
  const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(!window.gsap||!window.ScrollTrigger||reduced)return;
  gsap.registerPlugin(ScrollTrigger);

  const hero=document.querySelector("#page-home .hero-pro-copy");
  if(hero){
    const tl=gsap.timeline({defaults:{ease:"power4.out"}});
    tl.from("#page-home .hero-pro-copy .eyebrow",{y:22,opacity:0,duration:.55})
      .from("#page-home .hero-pro-copy h1",{y:52,opacity:0,duration:.85},"-=.28")
      .from("#page-home .hero-pro-copy>p",{y:24,opacity:0,duration:.6},"-=.5")
      .from("#page-home .hero-pro-actions .btn",{y:18,opacity:0,stagger:.09,duration:.5},"-=.34")
      .from("#page-home .hero-pro-proof>div",{y:15,opacity:0,stagger:.08,duration:.45},"-=.25")
      .from("#page-home .hero-product",{y:35,scale:.96,opacity:0,stagger:.08,duration:.7,ease:"power3.out"},"-=.65")
      .from("#page-home .hero-stage-label",{y:10,opacity:0,duration:.4},"-=.35");
  }

  gsap.utils.toArray(".section:not(.about-section)").forEach((section)=>{
    gsap.from(section,{
      y:36,opacity:0,duration:.75,ease:"power3.out",
      scrollTrigger:{trigger:section,start:"top 88%",once:true}
    });
  });

  gsap.utils.toArray(".stagger > *").forEach((item,i)=>{
    gsap.from(item,{
      y:28,opacity:0,duration:.55,delay:(i%6)*.05,ease:"power3.out",
      scrollTrigger:{trigger:item,start:"top 90%",once:true}
    });
  });

  gsap.utils.toArray(".about-page .about-section").forEach((section)=>{
    gsap.from(section.querySelectorAll(".eyebrow,.about-section-content h2,.about-section-content>p,.about-section-heading h2,.career-banner h2,.contact-about-grid h2,.network-grid h2,.about-final-card h2"),{
      y:26,opacity:0,stagger:.05,duration:.65,ease:"power3.out",
      scrollTrigger:{trigger:section,start:"top 82%",once:true}
    });
  });

  gsap.utils.toArray(".about-nav-card,.serve-card,.team-card,.news-card").forEach((card)=>{
    card.addEventListener("pointerenter",()=>gsap.to(card,{y:-5,duration:.28,ease:"power2.out",overwrite:true}));
    card.addEventListener("pointerleave",()=>gsap.to(card,{y:0,duration:.38,ease:"power3.out",overwrite:true}));
  });

  gsap.utils.toArray(".hero-product").forEach((el,i)=>{
    const depth=(i+1)*7;
    el.addEventListener("pointermove",(e)=>{
      const r=el.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5;
      const y=(e.clientY-r.top)/r.height-.5;
      gsap.to(el,{rotateX:y*-2.5,rotateY:x*3.5,x:x*depth,y:y*depth,duration:.35,ease:"power2.out",overwrite:true});
    });
    el.addEventListener("pointerleave",()=>gsap.to(el,{rotateX:0,rotateY:0,x:0,y:0,duration:.55,ease:"power3.out",overwrite:true}));
  });

  const progress=document.querySelector(".scroll-progress");
  if(progress) gsap.to(progress,{scaleX:1,transformOrigin:"left center",ease:"none",scrollTrigger:{start:0,end:"max",scrub:.15}});
})();