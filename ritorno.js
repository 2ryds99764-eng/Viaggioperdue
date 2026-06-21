/* T42 · VIAGGIOPERDUE — TESTO LINK RITORNO
   Aggiorna il testo del link di ritorno alla home. */
(function fix() {
  var links = document.querySelectorAll("a.ritorno[href='index.html']");
  if (links.length === 0) {
    setTimeout(fix, 200);
    return;
  }
  links.forEach(function(a) {
    a.textContent = "Riprendi il viaggio";
  });
})();
