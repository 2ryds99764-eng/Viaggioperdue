/* T42 · VIAGGIOPERDUE — SIMBOLO CASA
   Sostituisce il testo dei link di ritorno con il simbolo ⌂
   Usa setTimeout per aspettare che il motore abbia costruito i link */
function applicaCasa() {
  document.querySelectorAll("a.ritorno").forEach(function (a) {
    var txt = a.textContent.trim();
    if (txt.indexOf("Torna") === 0 || txt === "Riprendi il viaggio" || txt === "Tutte le categorie") {
      a.textContent = "\u2302";
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(applicaCasa, 300);
});
