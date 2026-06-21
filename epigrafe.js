/* T42 · VIAGGIOPERDUE — EPIGRAFI
   File separato per il supporto epigrafi nelle storie.
   Si carica dopo motore.js e dati.js. */
document.addEventListener("DOMContentLoaded", function () {
  const corpo = document.getElementById("storia-corpo");
  if (!corpo) return;
  const chiave = new URLSearchParams(window.location.search).get("s") || "";
  const s = (T42.storie && T42.storie[chiave]) ? T42.storie[chiave] : null;
  if (!s || !s.epigrafe || !s.epigrafe.testo) return;
  /* inserisce l'epigrafe prima del corpo esistente */
  const epHtml =
    '<blockquote class="epigrafe">' +
    '<p class="epigrafe-testo">' + s.epigrafe.testo + '</p>' +
    (s.epigrafe.fonte ? '<p class="epigrafe-fonte">' + s.epigrafe.fonte + '</p>' : '') +
    '</blockquote>';
  corpo.innerHTML = epHtml + corpo.innerHTML;
});
