#!/usr/bin/env node
// Genera datos-informe.json (raíz del sitio) para la web de informes de Plexum.
// Formato: "Datos que cada web publica", v1.2, parte común y apartado 10 (Conflicto Global).
// Sólo publica lo que el sitio ya muestra. Uso: node scripts/build_informe.js
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
global.window = {};
for (const f of ["conflicts", "conflicts-2", "conflicts-3", "economy"]) {
  const p = path.join(ROOT, "data", f + ".js");
  if (fs.existsSync(p)) require(p);
}
const W = global.window;
const CONFLICTS = W.CONFLICTS || [];
const META = W.MONITOR_META || {};
const ECO = (W.ECONOMY || {}).items || {};
const ALERTS = W.ALERTS || [];
const SITE = "https://francomartinlopez.github.io/conflictoglobal/";
const OUT = path.join(ROOT, "datos-informe.json");
const EJE = "Política internacional";

// Misma agrupación por región que el filtro del sitio (js/app.js, MACRO).
const MACRO = { "medio-oriente": "Medio Oriente", "rusia-ucrania": "Europa", corea: "Asia", taiwan: "Asia", mexico: "América", colombia: "América", venezuela: "América", cuba: "América", haiti: "América", "pakistan-afganistan": "Asia", "india-pakistan": "Asia", myanmar: "Asia", sudan: "África", sahel: "África", rdc: "África", etiopia: "África" };
// País principal de cada conflicto para alcance.pais (si hay más de uno, el primero es el de referencia).
const PAIS = { "medio-oriente": "Irán, Israel, Líbano, Yemen", "rusia-ucrania": "Rusia, Ucrania", corea: "Corea del Norte", taiwan: "Taiwán", mexico: "México", colombia: "Colombia", venezuela: "Venezuela", cuba: "Cuba", haiti: "Haití", "pakistan-afganistan": "Pakistán, Afganistán", "india-pakistan": "India, Pakistán", myanmar: "Myanmar", sudan: "Sudán", sahel: "Malí, Burkina Faso, Níger", rdc: "República Democrática del Congo", etiopia: "Etiopía" };
const RUB_DEF = { petroleo: ["Energía"], gas: ["Energía"], fletes: ["Comercio y servicios"], rutas: ["Comercio y servicios"], sanciones: ["Comercio y servicios"] };
const SUB_DEF = { petroleo: ["petróleo"], gas: ["gas"], fletes: ["fletes y seguros"], rutas: ["rutas marítimas y terrestres"], sanciones: [] };
const RUBROS = ["Industria", "Agro", "Minería", "Energía", "Construcción", "Comercio y servicios"];

function slug(s) { return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
function nowART() {
  const d = new Date(Date.now() - 3 * 3600e3);
  return d.toISOString().slice(0, 19) + "-03:00";
}
function daysBetween(a, b) { return Math.round((Date.parse(b) - Date.parse(a)) / 864e5); }
function words(s) { return s.trim().split(/\s+/).length; }
function firstSentence(s) {
  const t = s.replace(/EE\.UU\./g, "EE§UU§").replace(/(\d)\.(\d)/g, "$1§$2");
  const m = t.match(/^.*?[.;](\s|$)/);
  return (m ? m[0] : t).trim().replace(/§/g, ".");
}
function exposicion(rub, k) {
  const e = new Set();
  if (rub.includes("Energía")) e.add("Energía intensiva");
  if (["fletes", "rutas", "sanciones"].includes(k) || rub.includes("Comercio y servicios")) { e.add("Exporta"); e.add("Importa insumos"); }
  if (rub.includes("Agro") || rub.includes("Minería")) e.add("Exporta");
  return [...e];
}

const generado = nowART();
const hoy = generado.slice(0, 10);
const corte = META.updated || hoy;
let prev = {};
try { for (const i of JSON.parse(fs.readFileSync(OUT, "utf8")).indicadores || []) prev[i.id] = i; } catch (e) { /* primera vez */ }

const indicadores = [];
const faltantes = [];
function ind(id, nombre, valor, unidad, extra = {}) {
  if (valor === undefined || valor === null || valor === "") {
    faltantes.push({ id, nombre, motivo: "El monitor no tiene el dato en esta actualización", ultimo_dato: prev[id] ? prev[id].fecha_dato : null });
    return;
  }
  const o = { id, nombre, valor, unidad, fecha_dato: corte, fuente_original: "Conflicto Global (Monitor de Conflictos), elaboración propia con agencias, ISW, ACLED y ONU", eje: EJE,
    alcance: { nivel: "mundo", provincia: "", localidad: "", pais: "" }, rubros: [], subrubros: [], exposicion: [], url: SITE + "#inicio", ...extra };
  const p = prev[id];
  if (p && p.fecha_dato === corte && p.variacion) o.variacion = p.variacion;
  else if (p && p.fecha_dato < corte && typeof p.valor === "number" && typeof valor === "number" && p.valor !== valor) o.variacion = { valor: valor - p.valor, unidad: unidad, contra: "actualización del " + p.fecha_dato };
  // orden de claves como en la especificación
  indicadores.push({ id: o.id, nombre: o.nombre, valor: o.valor, unidad: o.unidad, ...(o.variacion ? { variacion: o.variacion } : {}), fecha_dato: o.fecha_dato, fuente_original: o.fuente_original, eje: o.eje, alcance: o.alcance, rubros: o.rubros, subrubros: o.subrubros, exposicion: o.exposicion, url: o.url });
}

// Indicadores que muestra la portada.
ind("conflictos-monitoreados", "Conflictos monitoreados", CONFLICTS.length, "conflictos");
ind("conflictos-activos", "Conflictos activos (nivel 4 o 5 de 5)", CONFLICTS.filter(c => c.level >= 4).length, "conflictos");
ind("conflictos-nivel-5", "Conflictos en nivel máximo (5 de 5)", CONFLICTS.filter(c => c.level === 5).length, "conflictos");
// Riesgo por región: el nivel más alto entre los conflictos de cada región del filtro del sitio.
const regiones = [...new Set(Object.values(MACRO))];
for (const r of regiones) {
  const cs = CONFLICTS.filter(c => MACRO[c.id] === r);
  const max = cs.length ? Math.max(...cs.map(c => c.level)) : null;
  ind("riesgo-region-" + slug(r), "Nivel de riesgo más alto · " + r + " (1 a 5)", max, "nivel (1 a 5)",
    {});
  ind("conflictos-region-" + slug(r), "Conflictos monitoreados · " + r, cs.length || null, "conflictos", {});
}

// Novedades «conflicto»: impacto en rutas, energía o materias primas (últimos 90 días).
const novedades = [];
for (const c of CONFLICTS) {
  const b = ECO[c.id];
  if (!b) continue;
  for (const it of b.items) {
    if (it.k === "otros" && !it.rub) continue;
    if (!it.d || daysBetween(it.d, hoy) > 90 || daysBetween(it.d, hoy) < 0) continue;
    const rub = (it.rub || RUB_DEF[it.k] || []).filter(r => RUBROS.includes(r));
    const sub = it.sub || SUB_DEF[it.k] || [];
    let resumen = `${c.name}, riesgo nivel ${c.level} de 5 (${c.status}). ${it.h}: ${it.v}. ${firstSentence(it.x)}`;
    if (words(resumen) > 60) resumen = `${c.name}, riesgo nivel ${c.level} de 5 (${c.status}). ${it.h}: ${it.v}.`;
    if (words(resumen) > 60) resumen = resumen.split(/\s+/).slice(0, 60).join(" ");
    novedades.push({
      id: `${it.d}-${c.id}-${slug(it.h)}`.slice(0, 90).replace(/-$/, ""),
      fecha_dato: it.d,
      titulo: `${c.name}: ${it.h}`,
      resumen,
      tipo: "conflicto",
      eje: EJE,
      alcance: { nivel: "país", provincia: "", localidad: "", pais: PAIS[c.id] || c.name },
      rubros: rub,
      subrubros: sub,
      exposicion: exposicion(rub, it.k),
      url: it.u
    });
  }
}
novedades.sort((a, b) => b.fecha_dato.localeCompare(a.fecha_dato) || a.id.localeCompare(b.id));

const out = { web: "Conflicto Global", version: "1.0", generado, indicadores, novedades, agenda: [], faltantes };
fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + "\n");
console.log(`datos-informe.json: ${indicadores.length} indicadores, ${novedades.length} novedades, ${faltantes.length} faltantes`);
