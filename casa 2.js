/* T42 · VIAGGIOPERDUE — SIMBOLO CASA */
function applicaCasa() {
  document.querySelectorAll("a").forEach(function (a) {
    if (a.href && (a.href.indexOf("index.html") !== -1 || a.href === location.origin + "/") ) {
      if (a.className && a.className.indexOf("ritorno") !== -1) {
        a.textContent = "\u2302";
      }
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(applicaCasa, 600);
});
