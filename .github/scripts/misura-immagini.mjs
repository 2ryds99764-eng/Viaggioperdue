// Misura le <img> da Cloudinary (classe, larghezza resa, loading/fetchpriority, naturalWidth)
// su un set di pagine, a tre viewport. Node, ES module. Usa Playwright (channel "chrome").

import { chromium } from "playwright";

const BASE = "http://localhost:8098/";

const PAGINE = [
  "itinerari.html",
  "escape-elenco.html",
  "categoria.html?c=locande",
  "itinerario.html?i=creta",
  "escape.html?e=alghero",
  "storia.html?s=dani-maison", // ha copertinaGalleria
  "storia.html?s=minervetta", // ha galleria
];

const VIEWPORT = [
  { nome: "1304x799", width: 1304, height: 799 },
  { nome: "900x800", width: 900, height: 800 },
  { nome: "390x844", width: 390, height: 844 },
];

async function avviaBrowser() {
  try {
    return await chromium.launch();
  } catch (e1) {
    return await chromium.launch({ channel: "chrome" });
  }
}

(async function main() {
  const browser = await avviaBrowser();
  const righe = [];

  for (const pagina of PAGINE) {
    for (const vp of VIEWPORT) {
      const contesto = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
      const page = await contesto.newPage();
      await page.goto(BASE + pagina, { waitUntil: "load" });
      await page.waitForTimeout(2000);

      const altezza = await page.evaluate(() => document.body.scrollHeight);
      let y = 0;
      while (y < altezza) {
        y += 400;
        await page.evaluate((yy) => window.scrollTo(0, yy), y);
        await page.waitForTimeout(150);
      }
      await page.waitForTimeout(500);

      const dati = await page.evaluate(() => {
        return Array.from(document.querySelectorAll("img"))
          .filter((img) => img.src && img.src.includes("res.cloudinary.com"))
          .map((img) => ({
            classe: img.className || "",
            larghezza: Math.round(img.getBoundingClientRect().width),
            loading: img.getAttribute("loading") || "",
            fetchpriority: img.getAttribute("fetchpriority") || "",
            naturalWidth: img.naturalWidth,
          }));
      });

      dati.forEach((d) => righe.push(Object.assign({ pagina, viewport: vp.nome }, d)));

      await contesto.close();
    }
  }

  await browser.close();

  console.log(
    ["pagina", "viewport", "classe", "larghezza", "loading", "fetchpriority", "naturalWidth"].join(" | ")
  );
  righe.forEach((r) => {
    console.log(
      [r.pagina, r.viewport, r.classe || "-", r.larghezza, r.loading || "-", r.fetchpriority || "-", r.naturalWidth].join(" | ")
    );
  });
})();
