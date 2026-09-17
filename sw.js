/* ============================================================
   Service Worker – Offline-Betrieb für das Objektmanagement
   Zweck: Die App muss im Keller ohne Empfang starten, damit
   Zähler abgelesen werden können. Strategie:
     - HTML/Navigation: erst Netz, bei Fehler aus dem Cache
       (so ist man online immer auf dem aktuellen Stand)
     - Alles andere: erst Cache, sonst Netz und dann ablegen
   ============================================================ */
const VERSION    = "om-v4";
const SHELL      = VERSION + "-shell";
const LAUFZEIT   = VERSION + "-laufzeit";

const SHELL_DATEIEN = [
  "./",
  "./index.html",
  "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
];

self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const c = await caches.open(SHELL);
    // einzeln, damit ein nicht erreichbarer Fremdserver die Installation nicht scheitern lässt
    await Promise.all(SHELL_DATEIEN.map(u => c.add(u).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    const namen = await caches.keys();
    await Promise.all(namen.filter(n => !n.startsWith(VERSION)).map(n => caches.delete(n)));
    await self.clients.claim();
  })());
});

self.addEventListener("message", e => {
  if (e.data === "skipWaiting") self.skipWaiting();
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;

  // Anfragen an die Anthropic-API nie abfangen – die brauchen echtes Netz
  if (req.url.indexOf("api.anthropic.com") > -1) return;

  // Seitenaufruf: erst Netz, sonst Cache (QR-Codes mit #z=… und #m=… landen hier)
  if (req.mode === "navigate") {
    e.respondWith((async () => {
      try {
        // cache:"reload" umgeht den HTTP-Cache des Browsers. GitHub Pages liefert
        // max-age=600 aus; ohne das hier bekäme man nach einer Aktualisierung
        // bis zu zehn Minuten lang die alte Fassung.
        const netz = await fetch(req.url, { cache: "reload", credentials: "same-origin" });
        const c = await caches.open(SHELL);
        c.put("./index.html", netz.clone());
        return netz;
      } catch (err) {
        const c = await caches.open(SHELL);
        return (await c.match("./index.html")) || (await c.match("./")) || Response.error();
      }
    })());
    return;
  }

  // Übrige Dateien: erst Cache, sonst Netz und ablegen
  e.respondWith((async () => {
    const treffer = await caches.match(req);
    if (treffer) return treffer;
    try {
      const netz = await fetch(req);
      if (netz && (netz.ok || netz.type === "opaque")) {
        const c = await caches.open(LAUFZEIT);
        c.put(req, netz.clone());
      }
      return netz;
    } catch (err) {
      return Response.error();
    }
  })());
});
