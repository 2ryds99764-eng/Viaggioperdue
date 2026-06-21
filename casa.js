/* T42 · VIAGGIOPERDUE — SIMBOLO CASA */
function applicaCasa() {
  document.querySelectorAll("a.ritorno, a[href='index.html'], a[href*='categoria.html']").forEach(function (a) {
    if (a.classList.contains('ritorno') || 
        a.textContent.trim().indexOf('Torna') === 0 || 
        a.textContent.trim() === 'Tutte le categorie' ||
        a.textContent.trim() === 'Riprendi il viaggio') {
      a.textContent = "\u2302";
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(applicaCasa, 500);
});
