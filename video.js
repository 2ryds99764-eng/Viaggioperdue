/* T42 · VIAGGIOPERDUE — GESTIONE VIDEO
   File separato per il supporto video nelle storie.
   Si carica dopo motore.js e dati.js. */
document.addEventListener("DOMContentLoaded", function () {
  const vid = document.getElementById("storia-video");
  if (!vid) return;
  /* recupera la chiave storia dall'URL */
  const chiave = new URLSearchParams(window.location.search).get("s") || "";
  const s = (T42.storie && T42.storie[chiave]) ? T42.storie[chiave] : null;
  if (s && s.video) {
    vid.innerHTML =
      '<div class="storia-video-link">' +
      '<a class="btn btn--storia" href="https://youtu.be/' + s.video +
      '" target="_blank" rel="noopener">Guarda il video \u2192</a>' +
      '</div>';
  } else {
    vid.style.display = "none";
  }
});
