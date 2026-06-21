/* T42 · VIAGGIOPERDUE — MAPPA INTELLIGENTE
   Sovrascrive urlMappa() con versione device-aware.
   Apple Mappe su iPhone/iPad/Mac, Google Maps altrove. */
function urlMappa(q, lat, lng) {
  var ua = navigator.userAgent || navigator.vendor || "";
  var isApple = /iPhone|iPad|iPod|Macintosh/.test(ua) && !window.MSStream;
  var haCoord = (typeof lat === "number" && typeof lng === "number");
  if (isApple) {
    if (haCoord) return "https://maps.apple.com/?ll=" + lat + "," + lng + "&q=" + encodeURIComponent(q || (lat + "," + lng));
    return "https://maps.apple.com/?q=" + encodeURIComponent(q || "");
  }
  if (haCoord) return "https://www.google.com/maps/search/?api=1&query=" + lat + "," + lng;
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q || "");
}
