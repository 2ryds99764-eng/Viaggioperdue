/* scroll-itinerario.js — scroll fluido (Lenis) + entrata paragrafi (GSAP ScrollTrigger)
   Attivo solo su itinerario.html. Attende che motore.js popoli tutti gli 8
   contenitori dinamici prima di inizializzare; se qualcuno resta vuoto
   (sezione opzionale assente per questo itinerario), un timeout di sicurezza
   avvia comunque le animazioni sul contenuto già presente. */
(function () {
  "use strict";

  const CONTENITORI_ID = [
    "itinerario-corpo",
    "itinerario-percorso",
    "itinerario-giorni",
    "itinerario-dormire",
    "itinerario-tavola",
    "itinerario-approfondimenti",
    "itinerario-a-tavola",
    "itinerario-prima-di-chiudere"
  ];

  const main = document.querySelector("main");
  if (!main) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let avviato = false;

  function tuttiPopolati() {
    return CONTENITORI_ID.every(function (id) {
      const el = document.getElementById(id);
      return el && el.children.length > 0;
    });
  }

  function init() {
    if (avviato) return;
    avviato = true;

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

    gsap.utils.toArray(".rp").forEach(function (p) {
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

    let refreshTimer = null;
    function refreshConDebounce() {
      clearTimeout(refreshTimer);
      refreshTimer = setTimeout(function () {
        ScrollTrigger.refresh();
      }, 150);
    }
    document.querySelectorAll("#itinerario-copertina img").forEach(function (img) {
      if (!img.complete) {
        img.addEventListener("load", refreshConDebounce);
        img.addEventListener("error", refreshConDebounce);
      }
    });
  }

  if (tuttiPopolati()) {
    init();
    return;
  }

  const observer = new MutationObserver(function () {
    if (tuttiPopolati()) {
      observer.disconnect();
      init();
    }
  });
  observer.observe(main, { childList: true, subtree: true });

  setTimeout(function () {
    observer.disconnect();
    init();
  }, 3000);
})();
