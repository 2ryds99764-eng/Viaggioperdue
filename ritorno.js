/* T42 · VIAGGIOPERDUE — TESTO RITORNO */
(function fix() {
  var links = document.querySelectorAll("a[href='index.html']");
  if (links.length === 0) { setTimeout(fix, 200); return; }
  links.forEach(function(a) {
    if (a.textContent.trim() !== 'Riprendi il viaggio') {
      a.textContent = 'Riprendi il viaggio';
    }
  });
})();
