// Valida los datos del monitor. Uso: node scripts/validate.js [--browser]
// --browser: además abre todas las fichas en Chromium (Playwright) y falla si hay errores de JavaScript.
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const files = [...html.matchAll(/<script src="(data\/[^"?]+)/g)].map(m => m[1]);
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
const AL = W.ALERTS || [];
if (AL.filter(a => !a.id).length > 8) errs.push("Hay más de 8 alertas fuera del monitor");
if (AL.filter(a => a.id).length > 4) errs.push("Hay más de 4 alertas de conflictos del monitor");
for (const a of AL) {
  if (a.id && !ids.has(a.id)) errs.push(`Alerta con id desconocido: ${a.id}`);
  if (!a.id && (!a.u || !/^https?:\/\//.test(a.u) || !a.st || !(a.countries || []).length)) errs.push(`Alerta fuera del monitor (${a.title}): faltan países o fuente (u y st)`);
  if (!(a.level >= 1 && a.level <= 5)) errs.push(`Alerta ${a.id}: nivel inválido`);
  if (!okDate(a.date)) errs.push(`Alerta ${a.id}: fecha inválida`);
}
const N = W.NOTES || [];
if (N.length > 4) errs.push(`Hay ${N.length} notas diplomáticas (máximo 4)`);
N.forEach((n, i) => {
  const w = `Nota diplomática #${i} (${n.title})`;
  if (!okDate(n.date)) errs.push(`${w}: fecha inválida`);
  else if (n.date > M.updated) errs.push(`${w}: fecha posterior a la de corte`);
  if (!n.title || !n.text || !n.tag) errs.push(`${w}: faltan título, texto o etiqueta`);
  if (!n.u || !/^https?:\/\//.test(n.u) || !n.st) errs.push(`${w}: falta la fuente (u y st)`);
});
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
const EC = W.ECONOMY;
if (EC) {
  if (!okDate(EC.updated)) errs.push("ECONOMY.updated inválido");
  const ks = new Set(["petroleo", "gas", "fletes", "rutas", "sanciones", "otros"]);
  for (const [id, E] of Object.entries(EC.items || {})) {
    if (!ids.has(id)) errs.push(`ECONOMY: conflicto desconocido ${id}`);
    (E.items || []).forEach((i, n) => {
      const w = `ECONOMY ${id} #${n} (${i.h})`;
      if (!ks.has(i.k)) errs.push(`${w}: categoría desconocida ${i.k}`);
      if (!okDate(i.d)) errs.push(`${w}: fecha inválida`);
      if (!i.h || !i.x || !i.u || !/^https?:\/\//.test(i.u) || !i.st) errs.push(`${w}: faltan título, texto o fuente`);
    });
  }
}
// datos-informe.json (web de informes de Plexum, formato v1.2)
{
  const P = path.join(__dirname, "..", "datos-informe.json");
  let D = null;
  try { D = JSON.parse(fs.readFileSync(P, "utf8")); } catch (e) { errs.push("datos-informe.json falta o no es JSON válido: " + e.message); }
  if (D) {
    const L = { eje: ["Economía nacional", "Política nacional", "Economía internacional", "Política internacional", "Clima y riesgo productivo", "Región y rubro"],
      rub: ["Industria", "Agro", "Minería", "Energía", "Construcción", "Comercio y servicios"],
      exp: ["Exporta", "Importa insumos", "Deuda en dólares", "Energía intensiva", "Mano de obra intensiva", "Vende al Estado", "Vende a minería y energía"],
      niv: ["mundo", "país", "nacional", "provincia", "localidad"],
      tipo: ["norma", "inversión", "empresa en crisis", "licitación", "conflicto", "elección", "encuesta", "medida comercial", "clima", "otro"] };
    if (D.web !== "Conflicto Global") errs.push("datos-informe.json: web debe ser «Conflicto Global»");
    if (D.version !== "1.3") errs.push("datos-informe.json: version debe ser 1.3");
    if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[-+]\d{2}:\d{2}$/.test(D.generado || "")) errs.push("datos-informe.json: generado sin fecha y zona horaria");
    else if (D.generado.slice(0, 10) < M.updated) errs.push("datos-informe.json desactualizado: correr node scripts/build_informe.js");
    const comun = (o, w) => {
      if (!L.eje.includes(o.eje)) errs.push(`${w}: eje inválido`);
      if (!o.alcance || !L.niv.includes(o.alcance.nivel)) errs.push(`${w}: alcance.nivel inválido`);
      if ((o.rubros || []).some(r => !L.rub.includes(r))) errs.push(`${w}: rubro inválido`);
      if ((o.exposicion || []).some(r => !L.exp.includes(r))) errs.push(`${w}: exposición inválida`);
      if (!/^https?:\/\//.test(o.url || "")) errs.push(`${w}: falta url`);
    };
    const seen = new Set();
    for (const i of D.indicadores || []) {
      const w = "informe indicador " + i.id;
      if (!/^[a-z0-9-]+$/.test(i.id) || seen.has(i.id)) errs.push(`${w}: id inválido o repetido`); seen.add(i.id);
      if (i.valor === "" || i.valor === null || i.valor === undefined || !okDate(i.fecha_dato)) errs.push(`${w}: valor o fecha_dato inválidos`);
      comun(i, w);
      if (!["tasa", "nivel", "estado"].includes(i.tipo_valor)) errs.push(`${w}: tipo_valor inválido`);
      if (!["diaria", "semanal", "mensual", "trimestral", "semestral", "anual"].includes(i.frecuencia)) errs.push(`${w}: frecuencia inválida`);
      if (!Array.isArray(i.comparar) || i.comparar.some(x => !["mensual", "interanual"].includes(x))) errs.push(`${w}: comparar inválido`);
      if (i.serie) {
        const s = i.serie;
        if (!s.length || s.some((p, k) => !okDate(p.fecha) || typeof p.valor !== "number" || (k && p.fecha <= s[k - 1].fecha))) errs.push(`${w}: serie desordenada o con valores no numéricos`);
        else if (s[s.length - 1].valor !== i.valor || s[s.length - 1].fecha !== i.fecha_dato) errs.push(`${w}: el último valor de la serie no coincide con el publicado`);
        if (s.length > 25) errs.push(`${w}: serie de más de 25 puntos`);
      }
      if (i.grupo) {
        const g = i.grupo;
        if (!g.id || !g.nombre || !g.clave || !["provincia", "rubro", "pais", "otro"].includes(g.dimension)) errs.push(`${w}: grupo incompleto`);
        const m = (D.indicadores || []).filter(x => x.grupo && x.grupo.id === g.id);
        if (m.length < 3) errs.push(`${w}: el grupo ${g.id} tiene menos de 3 miembros`);
        if (m.some(x => x.grupo.nombre !== g.nombre || x.unidad !== i.unidad || x.fecha_dato !== i.fecha_dato)) errs.push(`${w}: el grupo ${g.id} mezcla nombre, unidad o fecha`);
      }
    }
    for (const n of D.novedades || []) {
      const w = "informe novedad " + n.id;
      if (seen.has(n.id)) errs.push(`${w}: id repetido`); seen.add(n.id);
      if (!okDate(n.fecha_dato) || (Date.parse(D.generado.slice(0, 10)) - Date.parse(n.fecha_dato)) / 864e5 > 90) errs.push(`${w}: fecha_dato inválida o de más de 90 días`);
      if (!L.tipo.includes(n.tipo)) errs.push(`${w}: tipo inválido`);
      if (!n.titulo || !n.resumen || n.resumen.trim().split(/\s+/).length > 60) errs.push(`${w}: falta título o el resumen pasa de 60 palabras`);
      comun(n, w);
    }
  }
}
const CY = W.CYBER;
if (!CY) errs.push("Falta CYBER (data/cyber.js)");
else {
  if (!okDate(CY.updated)) errs.push("CYBER.updated inválido");
  const secs = new Set(CY.sectors.map(s => s[0])), caus = new Set(CY.causes.map(s => s[0]));
  const names = new Set(((W.WORLD || {}).objects || { countries: { geometries: [] } }).countries.geometries.map(g => g.properties.name));
  CY.events.forEach((e, i) => {
    const w = `CYBER evento #${i} (${e.h})`;
    if (!okDate(e.d)) errs.push(`${w}: fecha inválida`); else if (e.d > CY.updated) errs.push(`${w}: fecha posterior a CYBER.updated`);
    if (!secs.has(e.sec)) errs.push(`${w}: sector desconocido ${e.sec}`);
    if (!caus.has(e.cause)) errs.push(`${w}: causa desconocida ${e.cause}`);
    if (!Array.isArray(e.c)) errs.push(`${w}: c tiene que ser una lista de países`);
    else e.c.forEach(n => { if (!names.has(n)) errs.push(`${w}: país "${n}" no está en data/world.js`); });
    if (e.actor && !CY.actors[e.actor.t]) errs.push(`${w}: tipo de actor desconocido`);
    if (e.actor && e.actor.from) e.actor.from.forEach(n => { if (!names.has(n)) errs.push(`${w}: origen "${n}" no está en data/world.js`); });
    if (!e.h || !e.x || !e.u || !/^https?:\/\//.test(e.u) || !e.st) errs.push(`${w}: faltan título, texto o fuente`);
  });
}
const G = W.GLOBAL_RISK;
if (!G) errs.push("Falta GLOBAL_RISK (data/global.js)");
else {
  if (!(G.clock.seconds > 0)) errs.push("GLOBAL_RISK.clock.seconds inválido");
  if (!(G.defcon.level >= 1 && G.defcon.level <= 5)) errs.push("GLOBAL_RISK.defcon.level inválido");
  const Wn = G.winter;
  if (Wn) {
    if (!(Wn.level >= 1 && Wn.level <= 5)) errs.push("GLOBAL_RISK.winter.level inválido");
    if (!okDate(Wn.updated) || !okDate(Wn.vortex.uDate)) errs.push("GLOBAL_RISK.winter: fechas inválidas");
    for (const n of Wn.news || []) if (!okDate(n.d) || !/^https?:/.test(n.u || "")) errs.push(`GLOBAL_RISK.winter.news: hecho sin fecha o fuente (${n.h})`);
    if ((Wn.news || []).length > 8) errs.push("GLOBAL_RISK.winter.news: más de 8 novedades");
  }
  if (!(G.oil.us.mb > 0 && G.oil.us.mb <= G.oil.us.cap) || !okDate(G.oil.us.date)) errs.push("GLOBAL_RISK.oil.us inválido");
}
for (const s of W.EVENT_SOURCES || []) if (!ids.has(s.c) || !C.find(c => c.id === s.c).events[s.i]) errs.push(`EVENT_SOURCES apunta a un evento inexistente: ${s.c} #${s.i}`);
{ const has = new Set((W.EVENT_SOURCES || []).map(s => s.c + ":" + s.i));
  for (const c of C) (c.events || []).forEach((e, i) => { if (!e.u && !has.has(c.id + ":" + i)) errs.push(`${c.id} hecho #${i} (${e.h}): sin fuente (ni u ni EVENT_SOURCES)`); }); }
{ const F = W.FRONT_UA;
  if (F) { let prev = "";
    for (const [d, a] of F.daily) { if (!okDate(d) || d <= prev || !(a > 0)) { errs.push(`FRONT_UA.daily: dato inválido o fuera de orden en ${d}`); break; } prev = d; }
    if (F.last !== F.daily[F.daily.length - 1][0]) errs.push("FRONT_UA.last no coincide con el último dato diario");
    if (F.frames[F.frames.length - 1].d > F.last) errs.push("FRONT_UA: hay una trama posterior a last"); } }

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
