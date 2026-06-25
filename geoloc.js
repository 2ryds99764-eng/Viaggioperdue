/* T42 · VIAGGIOPERDUE — CERCA VICINO A TE
   Versione semplificata: apre Apple Mappe / Google Maps sulla posizione dell'utente.
   Da perfezionare con Mac per integrazione diretta nella mappa Leaflet. */

document.addEventListener("DOMContentLoaded", function () {
  if (!document.getElementById("mappa")) return;

  var tentativi = 0;
  var intervallo = setInterval(function () {
    tentativi++;
    var intestazione = document.getElementById("mappa-intestazione");
    if (!intestazione || tentativi > 40) { clearInterval(intervallo); return; }
    if (document.getElementById("btn-vicino")) { clearInterval(intervallo); return; }

    var btn = document.createElement("button");
    btn.id = "btn-vicino";
    btn.className = "btn-vicino";
    btn.innerHTML = "📍 Vicino a me";
    intestazione.appendChild(btn);
    clearInterval(intervallo);

    btn.addEventListener("click", function () {
      if (!navigator.geolocation) {
        alert("Il tuo browser non supporta la geolocalizzazione.");
        return;
      }
      btn.textContent = "📍 Ricerca…";
      btn.disabled = true;

      navigator.geolocation.getCurrentPosition(
        function (pos) {
          var lat = pos.coords.latitude;
          var lng = pos.coords.longitude;
          var ua = navigator.userAgent || "";
          var isApple = /iPhone|iPad|iPod|Macintosh/.test(ua);
          var url = isApple
            ? "https://maps.apple.com/?ll=" + lat + "," + lng + "&z=12"
            : "https://www.google.com/maps/@" + lat + "," + lng + ",12z";
          window.open(url, "_blank");
          btn.textContent = "📍 Vicino a me";
          btn.disabled = false;
        },
        function () {
          btn.textContent = "📍 Vicino a me";
          btn.disabled = false;
        },
        { timeout: 10000, maximumAge: 60000 }
      );
    });
  }, 300);
});
