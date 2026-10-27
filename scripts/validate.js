// Valida los datos del monitor. Uso: node scripts/validate.js [--browser]
// --browser: además abre todas las fichas en Chromium (Playwright) y falla si hay errores de JavaScript.
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const files = [...html.matchAll(/<script src="(data\/[^"]+)"/g)].map(m => m[1]);
const ctx = { window: {} }; vm.createContext(ctx);
const errs = [];
for (const f of files) {
  try { vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f }); }
  catch (e) { errs.push(`${f}: error de sintaxis o ejecución: ${e.message}`); }
}
const W = ctx.window, iso = /^\d{4}-\d{2}-\d{2}$/;
const TYPES = ["aereo", "terrestre", "naval", "atentado", "diplomacia", "politico"];
const okDate = d => iso.test(d) && !isNaN(Date.parse(d));
const M = W.MONITOR_META || {};
if (!okDate(M.updated)) errs.push("MONITOR_META.updated inválido");
const C = W.CONFLICTS || [];
const ids = new Set(C.map(c => c.id));
if (C.length < 10) errs.push(`Sólo ${C.length} conflictos cargados`);
for (const a of W.ALERTS || []) {
  if (!ids.has(a.id)) errs.push(`Alerta con id desconocido: ${a.id}`);
  if (!(a.level >= 1 && a.level <= 5)) errs.push(`Alerta ${a.id}: nivel inválido`);
  if (!okDate(a.date)) errs.push(`Alerta ${a.id}: fecha inválida`);
}
for (const c of C) {
  if (!(c.level >= 1 && c.level <= 5)) errs.push(`${c.id}: nivel inválido`);
  const seen = new Set();
  (c.events || []).forEach((e, i) => {
    const w = `${c.id} evento #${i} (${e.h})`;
    if (!okDate(e.d)) errs.push(`${w}: fecha inválida ${e.d}`);
    else if (e.d > M.updated) errs.push(`${w}: fecha posterior a la de corte`);
    if (!e.nomap && !(Math.abs(e.lat) <= 90 && Math.abs(e.lon) <= 180)) errs.push(`${w}: coordenadas inválidas`);
    if (!TYPES.includes(e.t)) errs.push(`${w}: tipo "${e.t}" no permitido`);
    if (!e.h) errs.push(`${w}: falta título`);
    // Los hechos nuevos (posteriores a la versión inicial) deben traer texto y fuente.
    if (e.d > "2026-10-27" && (!e.x || !e.u)) errs.push(`${w}: los hechos nuevos necesitan texto (x) y fuente (u)`);
    if (e.u && !/^https?:\/\//.test(e.u)) errs.push(`${w}: enlace de fuente inválido`);
    const k = e.d + "|" + e.h; if (seen.has(k)) errs.push(`${w}: duplicado`); seen.add(k);
  });
}
const G = W.GLOBAL_RISK;
if (!G) errs.push("Falta GLOBAL_RISK (data/global.js)");
else {
  if (!(G.clock.seconds > 0)) errs.push("GLOBAL_RISK.clock.seconds inválido");
  if (!(G.defcon.level >= 1 && G.defcon.level <= 5)) errs.push("GLOBAL_RISK.defcon.level inválido");
  if (!(G.oil.us.mb > 0 && G.oil.us.mb <= G.oil.us.cap) || !okDate(G.oil.us.date)) errs.push("GLOBAL_RISK.oil.us inválido");
}
for (const s of W.EVENT_SOURCES || []) if (!ids.has(s.c) || !C.find(c => c.id === s.c).events[s.i]) errs.push(`EVENT_SOURCES apunta a un evento inexistente: ${s.c} #${s.i}`);

async function browser() {
  const http = require("http"), { chromium } = require("playwright");
  const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json" };
  const srv = http.createServer((q, r) => { const p = path.join(root, decodeURIComponent(q.url.split("?")[0]).replace(/\/$/, "/index.html"));
    fs.readFile(p, (e, b) => { if (e) { r.writeHead(404); r.end(); } else { r.writeHead(200, { "content-type": types[path.extname(p)] || "application/octet-stream" }); r.end(b); } }); });
  await new Promise(r => srv.listen(8799, r));
  const b = await chromium.launch(), p = await b.newPage();
  p.on("pageerror", e => errs.push("JS: " + e.message));
  for (const h of ["inicio", "metodologia", ...C.map(c => "c-" + c.id)]) { await p.goto("http://localhost:8799/#" + h); await p.waitForTimeout(h === "c-rusia-ucrania" ? 2500 : 500); }
  await b.close(); srv.close();
}
(async () => {
  if (process.argv.includes("--browser")) await browser();
  if (errs.length) { console.error("ERRORES:\n- " + errs.join("\n- ")); process.exit(1); }
  console.log(`OK: ${C.length} conflictos, ${C.reduce((n, c) => n + c.events.length, 0)} hechos, corte ${M.updated}`);
})();
