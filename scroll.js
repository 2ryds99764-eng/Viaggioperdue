/* scroll.js — scroll fluido (Lenis) + entrata paragrafi (GSAP ScrollTrigger)
   Attivo solo su storia.html. Attende che motore.js popoli #storia-corpo
   prima di inizializzare, così non anima un contenitore vuoto. */
(function () {
  "use strict";

  const corpo = document.getElementById("storia-corpo");
  if (!corpo) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  function init() {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      autoRaf: false
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add(function (time) {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    gsap.utils.toArray("#storia-corpo .rp").forEach(function (p) {
      gsap.from(p, {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: p,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });
  }

  if (corpo.children.length > 0) {
    init();
    return;
  }

  const observer = new MutationObserver(function () {
    if (corpo.children.length > 0) {
      observer.disconnect();
      init();
    }
  });
  observer.observe(corpo, { childList: true });
})();
