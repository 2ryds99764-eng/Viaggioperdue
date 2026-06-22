/* T42 · VIAGGIOPERDUE — SIMBOLO CASA */
var casaInterval = setInterval(function () {
  var links = document.querySelectorAll("a.ritorno");
  if (links.length > 0) {
    links.forEach(function (a) {
      a.textContent = "\u2302";
    });
    clearInterval(casaInterval);
  }
}, 100);
