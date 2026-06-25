/* T42 · VIAGGIOPERDUE — CERCA VICINO A TE
   Geolocalizzazione lato client — nessun dato inviato a server esterni. */

document.addEventListener("DOMContentLoaded", function () {
  if (!document.getElementById("mappa")) return;

  /* intercetta L.map per salvare il riferimento alla mappa */
  function patchLeaflet() {
    if (!window.L) { setTimeout(patchLeaflet, 100); return; }
    var origMap = L.map.bind(L);
    L.map = function(el, opts) {
      var m = origMap(el, opts);
      if (el === "mappa" || (typeof el === "object" && el.id === "mappa")) {
        window._t42_mappa = m;
      }
      return m;
    };
    avviaPulsante();
  }
  patchLeaflet();

  function avviaPulsante() {
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
            var mapObj = window._t42_mappa;

            if (mapObj) {
              if (window._t42_geo_marker) window._t42_geo_marker.remove();
              var icona = L.divIcon({
                className: "",
                html: '<div style="width:14px;height:14px;background:#e8455a;border:2px solid white;border-radius:50%;box-shadow:0 0 0 4px rgba(232,69,90,0.25)"></div>',
                iconSize: [14, 14], iconAnchor: [7, 7]
              });
              window._t42_geo_marker = L.marker([lat, lng], { icon: icona })
                .addTo(mapObj)
                .bindPopup("<div style='font-family:sans-serif;font-size:12px;color:#14233F'><b>Sei qui</b></div>")
                .openPopup();
              mapObj.setView([lat, lng], 9);
            }
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
  }
});
