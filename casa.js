/* T42 · VIAGGIOPERDUE — SIMBOLO CASA */
function applicaCasa() {
  document.querySelectorAll("a.ritorno").forEach(function (a) {
    a.textContent = "\u2302";
  });
}
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(applicaCasa, 300);
});
