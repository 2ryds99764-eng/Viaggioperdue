/* T42 · VIAGGIOPERDUE — ICONA HOME */
var SVG_HOME = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" aria-label="Home">' +
  '<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#4A6FA5"/>' +
  '</svg>';

(function fix() {
  var links = document.querySelectorAll("a.ritorno[href='index.html']");
  if (links.length === 0) { setTimeout(fix, 200); return; }
  links.forEach(function(a) {
    a.innerHTML = SVG_HOME;
    a.style.border = 'none';
    a.style.lineHeight = '1';
  });
})();
