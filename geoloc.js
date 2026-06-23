/* T42 · VIAGGIOPERDUE — CERCA VICINO A TE
   Geolocalizzazione lato client — nessun dato inviato a server esterni. */

document.addEventListener("DOMContentLoaded", function () {
  if (!document.getElementById("mappa")) return;

  /* aspetta che il motore abbia costruito la pagina */
  var tentativi = 0;
  var intervallo = setInterval(function () {
    tentativi++;
    var intestazione = document.getElementById("mappa-intestazione");
    if (!intestazione || tentativi > 40) { clearInterval(intervallo); return; }
    if (document.getElementById("btn-vicino")) { clearInterval(intervallo); return; }

    /* crea il pulsante */
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

          /* accede alla mappa Leaflet tramite l'elemento DOM */
          var mapEl = document.getElementById("mappa");
          var mapObj = mapEl && mapEl._leaflet_map ? mapEl._leaflet_map : null;

          /* fallback: cerca nei dati interni di Leaflet */
          if (!mapObj && window.L) {
            try {
              var id = mapEl._leaflet_id;
              mapObj = L.map._instances ? L.map._instances[id] : null;
            } catch(e) {}
          }

          if (mapObj) {
            /* rimuovi marker precedente */
            if (window._t42_geo_marker) {
              window._t42_geo_marker.remove();
            }
            /* aggiungi marker posizione utente */
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
        function (err) {
          btn.textContent = "📍 Vicino a me";
          btn.disabled = false;
        },
        { timeout: 10000, maximumAge: 60000 }
      );
    });
  }, 300);
});
