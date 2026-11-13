// Server statico con compressione gzip per i tipi testuali.
// Node puro, nessuna dipendenza. Uso: node server-gzip.mjs <cartella> <porta>

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const CARTELLA = path.resolve(process.argv[2] || ".");
const PORTA = Number(process.argv[3]) || 8099;

const TIPI = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

const COMPRIMIBILI = new Set([".html", ".css", ".js", ".mjs", ".svg", ".json", ".xml"]);

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
  if (urlPath.endsWith("/")) urlPath += "index.html";

  const filePath = path.normalize(path.join(CARTELLA, urlPath));
  if (!filePath.startsWith(CARTELLA)) {
    res.writeHead(403);
    res.end("Vietato");
    return;
  }

  fs.readFile(filePath, (err, dati) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Non trovato: " + urlPath);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = TIPI[ext] || "application/octet-stream";
    const accettaGzip = (req.headers["accept-encoding"] || "").includes("gzip");

    const intestazioni = { "Content-Type": contentType, "Cache-Control": "no-store" };

    if (COMPRIMIBILI.has(ext) && accettaGzip) {
      zlib.gzip(dati, { level: 6 }, (errGz, compresso) => {
        if (errGz) {
          res.writeHead(500);
          res.end("Errore di compressione");
          return;
        }
        intestazioni["Content-Encoding"] = "gzip";
        intestazioni["Content-Length"] = compresso.length;
        res.writeHead(200, intestazioni);
        res.end(compresso);
      });
      return;
    }

    intestazioni["Content-Length"] = dati.length;
    res.writeHead(200, intestazioni);
    res.end(dati);
  });
});

server.listen(PORTA, () => {
  console.log(`Server gzip su http://localhost:${PORTA}/  (cartella: ${CARTELLA})`);
});
