/* T42 · VIAGGIOPERDUE — SIMBOLO CASA
   Sostituisce il testo dei link di ritorno con il simbolo ⌂ */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a.ritorno").forEach(function (a) {
    var txt = a.textContent.trim();
    if (txt.indexOf("Torna") === 0 || txt === "Riprendi il viaggio" || txt === "Tutte le categorie") {
      a.textContent = "\u2302";
    }
  });
});
