/* T42 · VIAGGIOPERDUE — SIMBOLO CASA
   Sostituisce il testo dei link di ritorno con il simbolo ⌂ */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a.ritorno").forEach(function (a) {
    if (a.textContent.trim() === "Torna all\u2019inizio" || 
        a.textContent.trim() === "Riprendi il viaggio") {
      a.textContent = "\u2302";
    }
  });
});
