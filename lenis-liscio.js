/* lenis-liscio.js — scroll fluido (Lenis), senza GSAP.
   Per pagine senza testo narrativo lungo da animare (index.html, itinerari.html):
   solo smoothing dello scroll nativo, nessuna animazione di entrata. */
(function () {
  "use strict";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const lenis = new Lenis({ duration: 1.2, smoothWheel: true });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
})();
