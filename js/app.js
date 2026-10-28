/* Monitor de Conflictos — app (vanilla JS + d3-geo) */
(function () {
  "use strict";

  const META = window.MONITOR_META, CONFLICTS = window.CONFLICTS, ALERTS = window.ALERTS, CANDIDATES = window.CANDIDATES;
  CONFLICTS.forEach(c => { const a = (window.ANALYSIS || {})[c.id]; if (a) { if (a.history) c.history = a.history; if (a.alt) c.alt = a.alt; c.thesis = a.thesis; c.mainstream = a.mainstream; } });
  const byId = Object.fromEntries(CONFLICTS.map(c => [c.id, c]));
  (window.EVENT_SOURCES || []).forEach(s => { const c = byId[s.c]; const e = c && c.events[s.i]; if (e) { e.u = s.u; e.st = s.t; if (s.dateFix) e.d = s.dateFix; } });
  const TODAY = parseD(META.updated);
  const MONTHS = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  const ROLE_LABEL = { A: "Bando A", A2: "Aliados de A", B: "Bando B", B2: "Aliados de B", M: "Intermedio / mediador", Z: "Teatro de guerra" };
  const ROLE_ORDER = ["A", "A2", "B", "B2", "M", "Z"];
  const EV_LABEL = { aereo: "Ataque aéreo, misiles o drones", terrestre: "Combate terrestre", naval: "Acción naval", atentado: "Atentado o masacre", diplomacia: "Diplomacia / tregua", politico: "Hecho político" };
  const LV_LABEL = { 5: "Guerra abierta / escalada", 4: "Conflicto activo", 3: "Tensión elevada", 2: "Latente", 1: "Vigilancia" };
  const MACROS = ["América", "Europa", "Medio Oriente", "Asia", "África"];
  const MACRO = { "medio-oriente": "Medio Oriente", "rusia-ucrania": "Europa", corea: "Asia", taiwan: "Asia", mexico: "América", colombia: "América", venezuela: "América", cuba: "América", haiti: "América", "pakistan-afganistan": "Asia", "india-pakistan": "Asia", myanmar: "Asia", sudan: "África", sahel: "África", rdc: "África" };
  const cssVar = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();

  /* ---------- world geometry ---------- */
  const FEATURES = topojson.feature(window.WORLD, window.WORLD.objects.countries).features;
  const FEAT_BY_NAME = Object.fromEntries(FEATURES.map(f => [f.properties.name, f]));

  /* ---------- utils ---------- */
  function parseD(s) { const [y, m, d] = s.split("-").map(Number); return new Date(Date.UTC(y, (m || 1) - 1, d || 1)); }
  function iso(d) { return d.toISOString().slice(0, 10); }
  function addDays(d, n) { return new Date(d.getTime() + n * 864e5); }
  function diffDays(a, b) { return Math.round((b - a) / 864e5); }
  function fmt(d, p) {
    if (typeof d === "string") d = parseD(d);
    const m = MONTHS[d.getUTCMonth()], y = d.getUTCFullYear();
    return p === "m" ? `${m} ${y}` : p === "y" ? `${y}` : `${d.getUTCDate()} ${m} ${y}`;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
  function meter(level) { let h = ""; for (let i = 1; i <= 5; i++) h += `<i class="${i <= level ? "on" : ""}"></i>`; return `<span class="meter" style="--lv:var(--lv${level})" aria-label="Nivel ${level} de 5">${h}</span>`; }
  function lvPill(level, txt) { return `<span class="pill lv" style="--lv:var(--lv${level})">${esc(txt || ("Nivel " + level))}</span>`; }
  function roleAt(c, name, t) {
    let hit = null;
    for (const r of c.roles) if (r.c === name && parseD(r.from) <= t && (!r.to || parseD(r.to) >= t)) hit = r;
    return hit;
  }
  function lastEvent(c) { return c.events.slice().sort((a, b) => b.d.localeCompare(a.d))[0]; }
  const tip = document.getElementById("tip");
  function showTip(e, html) { tip.innerHTML = html; tip.hidden = false; moveTip(e); }
  function moveTip(e) { const x = Math.min(e.clientX + 14, innerWidth - 300), y = e.clientY + 14; tip.style.left = x + "px"; tip.style.top = y + "px"; }
  function hideTip() { tip.hidden = true; }
  // El cartel se oculta también al hacer scroll o al tocar fuera de un elemento con cartel,
  // porque si el elemento desaparece (cambio de página) nunca recibe el "mouseleave".
  window.addEventListener("scroll", hideTip, { passive: true });
  document.addEventListener("pointerdown", e => { if (!e.target.closest("[data-id],[data-cand],svg")) hideTip(); });

  /* ---------- chrome ---------- */
  document.getElementById("stamp").innerHTML = `<span class="live"></span>Actualizado <b>${esc(META.updatedLabel)}</b><br>Próxima actualización: diaria, 06:00 ART`;
  document.getElementById("footEdition").textContent = `${META.edition} · corte de datos ${fmt(META.updated)}`;
  const menu = document.getElementById("navConflicts"), menuBtn = document.getElementById("navConflictsBtn");
  menu.innerHTML = CONFLICTS.map(c => `<a href="#c-${c.id}">${meter(c.level)}<span>${esc(c.name)}</span></a>`).join("");
  menuBtn.addEventListener("click", e => { e.stopPropagation(); const o = menu.hidden; menu.hidden = !o; menuBtn.setAttribute("aria-expanded", String(o)); });
  document.addEventListener("click", () => { menu.hidden = true; menuBtn.setAttribute("aria-expanded", "false"); });

  function renderAlerts() {
    const box = document.getElementById("alerts");
    box.innerHTML = `<div class="wrap alerts-in">
      <div class="alerts-head"><h2><span class="live"></span>Alertas activas · ${ALERTS.length}</h2><span>Conflictos que entraron en una fase importante en los últimos días</span></div>
      <div class="alert-grid">${ALERTS.map(a => `
        <a class="alert" href="#c-${a.id}" style="--lv:var(--lv${a.level})">
          <span class="stripe"></span>
          <span class="body">
            <span class="meta">${lvPill(a.level, "Nivel " + a.level)}<span>${esc(a.tag)}</span><span>· ${fmt(a.date)}</span></span>
            <h3>${esc(a.title)}</h3>
            <p>${esc(a.text)}</p>
            <span class="go btn-go">Ver el conflicto <b>→</b></span>
          </span>
        </a>`).join("")}</div></div>`;
  }

  /* ---------- router ---------- */
  const app = document.getElementById("app");
  let activeMap = null;
  // Al abrir un conflicto se va directo a su contenido (debajo de las alertas);
  // al volver al panorama se recupera la posición en la que estaba el lector.
  let current = null, homeScroll = 0;
  function route() {
    const h = (location.hash || "#inicio").slice(1);
    if (current === "home") homeScroll = window.scrollY;
    hideTip();
    if (activeMap) { activeMap.destroy(); activeMap = null; }
    document.querySelectorAll(".mainnav > a").forEach(a => a.classList.toggle("on", a.dataset.nav === h));
    const first = current === null;
    if (h.startsWith("c-") && byId[h.slice(2)]) { renderConflict(byId[h.slice(2)]); current = "conflict"; }
    else if (h === "metodologia") { renderMethod(); current = "method"; }
    else if (h === "geopolitica" && window.GEO) { renderGeo(); current = "geo"; }
    else { renderHome(); current = "home"; }
    if (current === "home") { window.scrollTo(0, first ? 0 : homeScroll); return; }
    const top = document.querySelector(".topbar"), off = top ? top.getBoundingClientRect().height : 0;
    window.scrollTo(0, Math.max(0, app.getBoundingClientRect().top + window.scrollY - off - 4));
  }
  window.addEventListener("hashchange", route);

  /* ============================== HOME ============================== */
  function renderHome() {
    const sorted = CONFLICTS.slice().sort((a, b) => b.level - a.level);
    const open = CONFLICTS.filter(c => c.level >= 4).length;
    app.innerHTML = `
      <div class="home-head">
        <div>
          <h1>Panorama global</h1>
          <p>Conflictos militares y paramilitares de relevancia internacional. Cada uno tiene mapa con línea de tiempo, cronología histórica y análisis de contexto.</p>
        </div>
        <div class="kpis">
          <div class="kpi"><b>${CONFLICTS.length}</b><span>Monitoreados</span></div>
          <div class="kpi"><b style="color:var(--lv4)">${open}</b><span>Activos (nivel ≥ 4)</span></div>
          <div class="kpi"><b style="color:var(--accent-ink)">${ALERTS.length}</b><span>Alertas</span></div>
          <div class="kpi"><b>${CONFLICTS.filter(c => c.level === 5).length}</b><span>En nivel 5</span></div>
        </div>
      </div>
      <div class="panel worldmap" id="worldmap"></div>
      ${riskPanel()}
      ${globalPanel()}
      <div class="section-title"><h2>Conflictos monitoreados</h2><span id="cardCount">Ordenados por nivel de alerta</span></div>
      <p class="hint"><span class="hint-ic" aria-hidden="true">☞</span>Hacé clic o tocá un conflicto para ver su mapa con línea de tiempo, víctimas y daños, cronología e historia.</p>
      <div class="filters">
        <label class="search"><span class="sr">Buscar conflicto</span><input type="search" id="q" placeholder="Buscar país, actor o conflicto…" autocomplete="off"></label>
        <div class="chips" role="group" aria-label="Filtrar por región">${["Todas", ...MACROS].map((m, i) => `<button type="button" class="chip${i ? "" : " on"}" data-m="${m}">${m}</button>`).join("")}</div>
        <div class="chips" role="group" aria-label="Filtrar por nivel"><button type="button" class="chip lvchip" data-l="5">Nivel 5</button><button type="button" class="chip lvchip" data-l="4">Nivel 4+</button></div>
      </div>
      <div class="cards" id="cards">${sorted.map(card).join("")}</div>
      <p class="muted" id="noRes" hidden>Ningún conflicto coincide con la búsqueda.</p>
      ${CANDIDATES.length ? `<div class="section-title"><h2>Candidatos a incorporar</h2><span>Propuestos para sumar al monitor; a definir</span></div>
      <div class="cand">${CANDIDATES.map(k => `<div class="c"><h4>${esc(k.name)} ${lvPill(k.level, k.status)}</h4><p>${esc(k.why)}</p></div>`).join("")}</div>` : ""}`;
    drawWorld(document.getElementById("worldmap"));
    const st = { q: "", m: "Todas", l: 0 };
    const norm = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const apply = () => {
      let n = 0;
      document.querySelectorAll("#cards .card").forEach(el => {
        const c = byId[el.dataset.id];
        const hay = norm([c.name, c.fullName, c.sub, c.region, c.sides.A.name, c.sides.B.name, ...c.roles.map(r => r.es), ...c.nonState.map(x => x.name)].join(" "));
        const ok = (!st.q || hay.includes(norm(st.q))) && (st.m === "Todas" || MACRO[c.id] === st.m) && c.level >= st.l;
        el.hidden = !ok; if (ok) n++;
      });
      document.getElementById("noRes").hidden = n > 0;
      document.getElementById("cardCount").textContent = n === CONFLICTS.length ? "Ordenados por nivel de alerta" : `${n} de ${CONFLICTS.length} conflictos`;
    };
    document.getElementById("q").addEventListener("input", e => { st.q = e.target.value.trim(); apply(); });
    document.querySelectorAll(".chip[data-m]").forEach(b => b.addEventListener("click", () => { st.m = b.dataset.m; document.querySelectorAll(".chip[data-m]").forEach(x => x.classList.toggle("on", x === b)); apply(); }));
    document.querySelectorAll(".lvchip").forEach(b => b.addEventListener("click", () => { const l = +b.dataset.l; st.l = st.l === l ? 0 : l; document.querySelectorAll(".lvchip").forEach(x => x.classList.toggle("on", +x.dataset.l === st.l)); apply(); }));
  }

  function card(c) {
    const le = lastEvent(c);
    return `<a class="card" href="#c-${c.id}" data-id="${c.id}" style="--lv:var(--lv${c.level})">
      <div class="card-top"><h3>${esc(c.name)}</h3>${lvPill(c.level, c.status)}</div>
      <p class="sub">${esc(c.sub)}</p>
      <div class="vs"><span class="s sa">${esc(c.sides.A.name)}</span><em>VS</em><span class="s sb">${esc(c.sides.B.name)}</span></div>
      <div class="last"><span class="mono">${fmt(le.d, le.p)}</span><span>${esc(le.h)}</span></div>
      <div class="card-lv">${meter(c.level)}<span>Nivel ${c.level} · ${LV_LABEL[c.level]}</span></div>
      <span class="btn-go">Ver análisis completo <b>→</b></span>
    </a>`;
  }

  function drawWorld(host) {
    const W = 1200, H = 560;
    const proj = d3.geoNaturalEarth1().fitExtent([[10, 10], [W - 10, H + 60]], { type: "Sphere" });
    const path = d3.geoPath(proj);
    const roleCountries = new Set();
    CONFLICTS.forEach(c => c.roles.forEach(r => { if (r.r === "A" || r.r === "B" || r.r === "Z") roleCountries.add(r.c); }));
    let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Mapa mundial de conflictos monitoreados">
      <path d="${path({ type: "Sphere" })}" fill="var(--sea)"/>
      <path d="${path(d3.geoGraticule10())}" fill="none" stroke="#1f2225" stroke-width=".6"/>`;
    for (const f of FEATURES) s += `<path class="country" d="${path(f)}" fill="${roleCountries.has(f.properties.name) ? "#3a2b2a" : "var(--land)"}"/>`;
    for (const k of CANDIDATES) {
      const [x, y] = proj(k.center);
      s += `<g class="hot" data-cand="${k.id}" transform="translate(${x},${y})"><circle r="8" fill="none" stroke="var(--muted)" stroke-dasharray="3 3" stroke-width="1.5"/></g>`;
    }
    for (const c of CONFLICTS) {
      const [x, y] = proj(c.center), r = 5 + c.level * 2.2, col = `var(--lv${c.level})`;
      s += `<g class="hot" data-id="${c.id}" transform="translate(${x},${y})" tabindex="0" role="link" aria-label="${esc(c.name)}">
        ${c.level >= 4 ? `<circle class="pulse" r="${r}" stroke="${col}"/>` : ""}
        <circle r="${r}" fill="${col}" fill-opacity=".35" stroke="${col}" stroke-width="2"/>
        <circle r="3" fill="${col}"/>
        <text x="${r + 5}" y="4">${esc(c.name)}</text></g>`;
    }
    s += `</svg>`;
    host.innerHTML = s + `<div class="map-legend">
      ${[5, 4, 3, 2].map(l => `<span><i class="sw" style="background:var(--lv${l})"></i>${LV_LABEL[l]}</span>`).join("")}
      ${CANDIDATES.length ? `<span><i class="sw" style="border:1.5px dashed var(--muted)"></i>Candidato a incorporar</span>` : ""}
      <span><i class="sw sq" style="background:#3a2b2a"></i>País beligerante o teatro de guerra</span>
      <span class="map-hint">☞ Hacé clic en un punto para abrir el conflicto</span></div>`;
    host.querySelectorAll("[data-id]").forEach(g => {
      const c = byId[g.dataset.id];
      g.addEventListener("click", () => location.hash = "c-" + c.id);
      g.addEventListener("keydown", e => { if (e.key === "Enter") location.hash = "c-" + c.id; });
      g.addEventListener("mousemove", e => showTip(e, `<b>${esc(c.name)}</b><span class="d">${esc(c.status)} · nivel ${c.level}</span><span class="tip-go">Clic para ver el conflicto →</span>`));
      g.addEventListener("mouseleave", hideTip);
    });
    host.querySelectorAll("[data-cand]").forEach(g => {
      const k = CANDIDATES.find(x => x.id === g.dataset.cand);
      g.addEventListener("mousemove", e => showTip(e, `<b>${esc(k.name)}</b><span class="d">Candidato · ${esc(k.status)}</span>`));
      g.addEventListener("mouseleave", hideTip);
    });
  }

  /* ============================== CONFLICT ============================== */
  function renderConflict(c) {
    const sideActors = side => c.nonState.filter(n => n.side.startsWith(side)).map(n => `<span class="pill" title="${esc(n.where)}">${esc(n.name)}</span>`).join("");
    app.innerHTML = `
      <div class="crumbs"><a class="back" href="#inicio">← Volver al panorama</a><span>${esc(c.region)}</span></div>
      <div class="c-head">
        <div>
          <h1>${esc(c.fullName)}</h1>
          <p class="sub">${esc(c.sub)}</p>
        </div>
        <div class="right">
          ${lvPill(c.level, c.status)}
          <div>${meter(c.level)}<span class="meter-label">Nivel ${c.level} · ${LV_LABEL[c.level]}</span></div>
          <span class="since">En seguimiento desde ${fmt(c.since, c.since.length === 4 ? "y" : "d")}</span>
        </div>
      </div>
      <nav class="subnav" aria-label="Secciones del conflicto"><span class="subnav-l">Ir a</span>
        <button type="button" data-go="sec-resumen" class="on">Resumen</button>
        <button type="button" data-go="sec-mapa">Mapa</button>
        ${c.id === "rusia-ucrania" ? `<button type="button" data-go="sec-frente">Frente</button>` : ""}
        ${c.id === "medio-oriente" && window.HIST_IL ? `<button type="button" data-go="sec-territorio">Territorio 1882–hoy</button>` : ""}
        ${(window.CONTROL || {})[c.id] ? `<button type="button" data-go="sec-control">Control territorial</button>` : ""}
        <button type="button" data-go="sec-bajas">Víctimas y daños</button>
        <button type="button" data-go="sec-crono">Cronología</button>
        <button type="button" data-go="sec-historia">Historia y análisis</button>
        <button type="button" data-go="sec-fuentes">Fuentes</button>
      </nav>

      <section class="block" id="sec-resumen">
        <h2>Resumen <small>Situación al ${fmt(META.updated)}</small></h2>
        <div class="sum-grid">
          <div class="prose">${c.summary}</div>
          <div class="facts">${c.keyFacts.map(f => `<div class="fact"><span>${esc(f.k)}</span><b>${esc(f.v)}</b><small>${esc(f.n)}</small></div>`).join("")}</div>
          <div class="sides">
            <div class="side" style="--c:var(--role-A)"><h3>${esc(c.sides.A.name)}</h3><p>${esc(c.sides.A.desc)}</p>${sideActors("A") ? `<div class="actors">${sideActors("A")}</div>` : ""}</div>
            <div class="side" style="--c:var(--role-B)"><h3>${esc(c.sides.B.name)}</h3><p>${esc(c.sides.B.desc)}</p>${sideActors("B") ? `<div class="actors">${sideActors("B")}</div>` : ""}</div>
          </div>
          <div class="fronts-wrap"><table class="fronts">
            <thead><tr><th>Frente</th><th>Estado</th><th>Intensidad</th><th>Nota</th></tr></thead>
            <tbody>${c.fronts.map(f => `<tr><td>${esc(f.n)}</td><td>${lvPill(f.l, f.s)}</td><td>${meter(f.l)}</td><td>${esc(f.t)}</td></tr>`).join("")}</tbody>
          </table></div>
        </div>
      </section>

      <section class="block" id="sec-mapa">
        <h2>Mapa <small>Mové la línea de tiempo para ver cómo cambian bandos y hechos</small></h2>
        <div class="panel" id="mapmod"></div>
      </section>

      ${c.id === "rusia-ucrania" ? `<section class="block" id="sec-frente">
        <h2>Evolución del frente <small>Territorio ucraniano ocupado por Rusia, semana a semana</small></h2>
        <div class="panel" id="frontmod"></div>
      </section>` : ""}

      ${c.id === "medio-oriente" && window.HIST_IL ? `<section class="block" id="sec-territorio">
        <h2>Israel y Palestina, 1882–hoy <small>Cómo cambió el territorio y dónde ocurrieron los principales hechos de violencia, de ambos lados</small></h2>
        <div class="panel" id="histmod"></div>
      </section>` : ""}

      ${(window.CONTROL || {})[c.id] ? `<section class="block" id="sec-control">
        <h2>Control territorial <small>Inicio del conflicto frente a hoy, por estado o región</small></h2>
        <div id="ctrlmod">${controlHTML(c)}</div>
      </section>` : ""}

      <section class="block" id="sec-bajas">
        <h2>Víctimas y daños <small>Estimaciones por bando, con fuente y fecha</small></h2>
        <div id="tollmod">${tollHTML(c)}</div>
      </section>

      <section class="block" id="sec-crono">
        <h2>Cronología histórica <small>Hitos desde los orígenes</small></h2>
        <div class="tl">${timeline(c)}</div>
      </section>

      <section class="block" id="sec-historia">
        <h2>Historia y análisis</h2>
        <div class="hist">
          <nav class="toc" aria-label="Índice">${c.history.map((s, i) => `<button type="button" data-go="h-${i}">${esc(s.h)}</button>`).join("")}<button type="button" data-go="h-alt">Claves fuera del relato dominante</button></nav>
          <article>
            ${c.thesis ? `<div class="thesis"><span>Enfoque del monitor</span><p>${esc(c.thesis)}</p></div>` : ""}
            ${c.history.map((s, i) => `<section id="h-${i}"><h3>${esc(s.h)}</h3><div class="prose">${s.b}</div></section>`).join("")}
            <section id="h-alt"><h3>Claves fuera del relato dominante</h3>
              <p class="alt-note">Cada punto lleva su nivel de evidencia: <b>documentado</b> (hay registro público o reconocimiento oficial), <b>indicios sólidos</b> (testimonios o datos consistentes sin prueba concluyente) o <b>hipótesis</b> (plausible, sin prueba).</p>
              <div class="alt">${c.alt.map(a => `<div class="alt-item"><span class="ev-badge ${a.lvl}">${{ doc: "Documentado", ind: "Indicios sólidos", hip: "Hipótesis" }[a.lvl]}</span><div><h4>${esc(a.h)}</h4><p>${esc(a.x)}</p>${a.src ? `<p class="alt-src">${a.src.map(s => `<a href="${esc(s.u)}" target="_blank" rel="noopener">${esc(s.t)} ↗</a>`).join(" · ")}</p>` : ""}</div></div>`).join("")}</div>
              ${c.mainstream ? `<div class="mainstream"><span>La lectura dominante</span><p>${esc(c.mainstream)}</p></div>` : ""}
            </section>
          </article>
        </div>
      </section>

      <section class="block" id="sec-fuentes">
        <h2>Fuentes</h2>
        <ul class="sources">${c.sources.map(s => `<li><a href="${esc(s.u)}" target="_blank" rel="noopener">${esc(s.t)}</a></li>`).join("")}</ul>
      </section>`;

    app.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", () => {
      document.getElementById(b.dataset.go).scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }));
    const subBtns = [...app.querySelectorAll(".subnav button")];
    const secs = subBtns.map(b => document.getElementById(b.dataset.go));
    const io = new IntersectionObserver(ents => {
      ents.forEach(en => { if (en.isIntersecting) subBtns.forEach(b => b.classList.toggle("on", b.dataset.go === en.target.id)); });
    }, { rootMargin: "-40% 0px -55% 0px" });
    secs.forEach(s => io.observe(s));
    activeMap = new ConflictMap(document.getElementById("mapmod"), c);
    let fm = null;
    if (c.id === "rusia-ucrania") {
      const host = document.getElementById("frontmod");
      const start = () => { if (document.body.contains(host)) fm = new FrontMap(host); };
      if (window.FRONT_UA) start();
      else {
        host.innerHTML = `<p class="muted" style="padding:16px">Cargando el mapa del frente…</p>`;
        const s = document.createElement("script"); s.src = "data/front-ua.js";
        s.onload = start; s.onerror = () => { host.innerHTML = `<p class="muted" style="padding:16px">No se pudo cargar el mapa del frente. Recargá la página para reintentar.</p>`; };
        document.head.appendChild(s);
      }
    }
    let hm = null;
    if (c.id === "medio-oriente" && window.HIST_IL) hm = new HistMap(document.getElementById("histmod"));
    const prevDestroy = activeMap.destroy.bind(activeMap);
    activeMap.destroy = () => { io.disconnect(); if (fm) fm.stop(); if (hm) hm.stop(); prevDestroy(); };
  }

  function timeline(c) {
    const groups = [];
    for (const t of c.timeline) {
      if (!groups.length || groups[groups.length - 1].era !== t.era) groups.push({ era: t.era, items: [] });
      groups[groups.length - 1].items.push(t);
    }
    const fmtTL = d => /^\d{4}-\d{2}-\d{2}$/.test(d) ? fmt(d) : /^\d{4}-\d{2}$/.test(d) ? fmt(d + "-01", "m") : d;
    return groups.map(g => `<div class="tl-era"><div class="tl-era-name">${esc(g.era)}</div><div class="tl-items">${g.items.map(t =>
      `<div class="tl-item ${/^202[56]/.test(t.d) ? "recent" : ""}"><span class="d">${esc(fmtTL(t.d))}</span><div><h4>${esc(t.h)}</h4>${t.x ? `<p>${esc(t.x)}</p>` : ""}</div></div>`).join("")}</div></div>`).join("");
  }

  /* ---------- interactive conflict map ---------- */
  function ConflictMap(host, c) {
    this.c = c; this.host = host;
    const evs = c.events.slice().sort((a, b) => a.d.localeCompare(b.d)).map((e, i) => Object.assign({ i, date: parseD(e.d) }, e));
    this.evs = evs;
    const start = parseD(c.map.start), end = TODAY, span = diffDays(start, end);
    this.start = start; this.span = span;
    this.t = end; this.recentOnly = false; this.sel = null; this.timer = null;

    // projection fitted to bbox
    const [[x0, y0], [x1, y1]] = c.map.bbox;
    const box = { type: "Feature", geometry: { type: "Polygon", coordinates: [[[x0, y0], [x0, y1], [x1, y1], [x1, y0], [x0, y0]]] } };
    const probe = d3.geoMercator().fitWidth(1000, box), pb = d3.geoPath(probe).bounds(box);
    const W = 960, H = Math.max(440, Math.min(720, Math.round(W * (pb[1][1] - pb[0][1]) / (pb[1][0] - pb[0][0]))));
    const proj = d3.geoMercator().fitExtent([[0, 0], [W, H]], box);
    const path = d3.geoPath(proj);
    const inView = ([x, y]) => x > 8 && x < W - 8 && y > 8 && y < H - 8;
    const roleNames = [...new Set(c.roles.map(r => r.c))];
    const LABEL_FIX = { "rusia-ucrania": { Russia: [40, 55.5] }, corea: { China: [122.5, 41.5], Russia: [133.5, 44.3] }, taiwan: { China: [112, 26] }, "medio-oriente": {}, cuba: { "United States of America": [-81.5, 27.3] }, venezuela: {}, sahel: { Algeria: [2, 23] }, "pakistan-afganistan": { Iran: [61.5, 31] } };

    let svg = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Mapa de ${esc(c.name)}">
      <defs><pattern id="hatch" patternUnits="userSpaceOnUse" width="7" height="7" patternTransform="rotate(45)">
        <rect width="7" height="7" fill="#3a2f34"/><line x1="0" y1="0" x2="0" y2="7" stroke="#8a4a46" stroke-width="2.4"/></pattern></defs>
      <rect width="${W}" height="${H}" fill="var(--sea)"/>
      <path d="${path(d3.geoGraticule().step([5, 5])())}" fill="none" stroke="#1d2023" stroke-width=".6"/>`;
    for (const f of FEATURES) {
      const nm = f.properties.name, has = roleNames.includes(nm);
      svg += `<path class="country${has ? " role" : ""}" data-c="${esc(nm)}" d="${path(f)}" fill="var(--land)"/>`;
    }
    // labels
    let labels = "";
    for (const nm of roleNames) {
      const f = FEAT_BY_NAME[nm]; if (!f) continue;
      const fix = (LABEL_FIX[c.id] || {})[nm];
      const p = fix ? proj(fix) : path.centroid(f);
      const area = path.area(f);
      if (!p || isNaN(p[0]) || !inView(p) || (!fix && area < 260)) continue;
      const es = c.roles.find(r => r.c === nm).es.replace(/ \(.*\)/, "");
      labels += `<text class="clabel" x="${p[0].toFixed(1)}" y="${p[1].toFixed(1)}">${esc(es.toUpperCase())}</text>`;
    }
    const OV = (window.OVERLAYS || {})[c.id] || [];
    if (OV.length) {
      svg += `<g id="ovl">` + OV.map((o, k) => `<path d="${path(o.geo)}" fill="${o.fill}" fill-opacity="${o.op || .55}" stroke="${o.stroke || o.fill}" stroke-width="1.2" ${o.dash ? `stroke-dasharray="${o.dash}"` : ""} fill-rule="evenodd"><title>${esc(o.name)}${o.kind === "esquemático" ? " (esquemático)" : ""}</title></path>`).join("") + `</g>`;
    }
    svg += `<g>${labels}</g><g class="dots">`;
    for (const e of evs) {
      if (e.nomap || e.lat == null) continue;
      const p = proj([e.lon, e.lat]); if (!p) continue;
      e.xy = p;
      svg += `<g data-e="${e.i}" style="display:none"><circle class="pulse" cx="${p[0]}" cy="${p[1]}" r="7" stroke="var(--ev-${e.t})" style="display:none"/><circle class="evdot" cx="${p[0]}" cy="${p[1]}" r="6" fill="var(--ev-${e.t})"/></g>`;
    }
    svg += `</g></svg>`;

    // ticks
    const years = span > 700;
    let ticks = "";
    const tickDates = [];
    if (years) { for (let y = start.getUTCFullYear() + 1; y <= end.getUTCFullYear(); y++) tickDates.push(new Date(Date.UTC(y, 0, 1))); }
    else { let d = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth() + 1, 1)); while (d <= end) { tickDates.push(d); d = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 1)); } }
    const every = Math.ceil(tickDates.length / 12);
    tickDates.forEach((d, k) => { if (k % every) return; const pct = diffDays(start, d) / span * 100; ticks += `<span style="left:${pct}%">${years ? d.getUTCFullYear() : MONTHS[d.getUTCMonth()] + (d.getUTCMonth() === 0 ? " " + String(d.getUTCFullYear()).slice(2) : "")}</span>`; });
    const marks = evs.map(e => `<i style="left:${diffDays(start, e.date) / span * 100}%;background:var(--ev-${e.t})"></i>`).join("");

    host.innerHTML = `<div class="mapmod">
      <div class="map-stage">${svg}<div class="map-date" id="mapDate"></div></div>
      <div class="map-side">
        <h4>Actores a la fecha</h4><div class="actors-now" id="actorsNow"></div>
        <h4>Hechos hasta la fecha <span id="evCount"></span></h4><div class="evlist" id="evList"></div>
      </div>
      <div class="controls">
        <div class="btns">
          <button type="button" class="btn primary" id="playBtn" aria-label="Reproducir la línea de tiempo">▶ Reproducir</button>
        </div>
        <div class="slider-wrap">
          <div class="evmarks">${marks}</div>
          <input type="range" id="tSlider" min="0" max="${span}" step="1" value="${span}" aria-label="Fecha del mapa">
          <div class="ticks">${ticks}</div>
        </div>
        <div class="btns">
          <button type="button" class="btn" id="prevEv" aria-label="Hecho anterior">◀ Hecho</button>
          <button type="button" class="btn" id="nextEv" aria-label="Hecho siguiente">Hecho ▶</button>
          <button type="button" class="btn" id="toEnd">Hoy</button>
        </div>
      </div>
      <div class="mapleg">
        <div class="g"><b>Países</b>${ROLE_ORDER.map(r => `<span><i class="sw" style="${r === "Z" ? "background:repeating-linear-gradient(45deg,#3a2f34 0 3px,#8a4a46 3px 5px)" : "background:var(--role-" + r + ")"}"></i>${r === "A" ? esc(c.sides.A.name) : r === "B" ? esc(c.sides.B.name) : ROLE_LABEL[r]}</span>`).join("")}</div>
        <div class="g"><b>Hechos</b>${Object.keys(EV_LABEL).map(t => `<span><i class="sw c" style="background:var(--ev-${t})"></i>${EV_LABEL[t]}</span>`).join("")}</div>
        ${OV.length ? `<div class="g"><b>Zonas</b>${OV.map(o => `<span><i class="sw" style="background:${o.fill};opacity:.8"></i>${esc(o.name)}${o.kind === "esquemático" ? " (esquemático)" : ""}</span>`).join("")}<label class="check"><input type="checkbox" id="ovlOn" checked> Mostrar zonas de control actuales</label></div>` : ""}
        <label class="check"><input type="checkbox" id="recentOnly"> Mostrar solo los últimos 90 días</label>
      </div>
    </div>`;

    this.$ = id => host.querySelector("#" + id);
    this.countryEls = [...host.querySelectorAll("path.country.role")];
    this.dotEls = Object.fromEntries([...host.querySelectorAll("[data-e]")].map(g => [g.dataset.e, g]));
    const slider = this.$("tSlider");
    slider.addEventListener("input", () => { this.stop(); this.setT(addDays(start, +slider.value)); });
    this.$("playBtn").addEventListener("click", () => this.timer ? this.stop() : this.play());
    this.$("toEnd").addEventListener("click", () => { this.stop(); this.setT(end); });
    this.$("prevEv").addEventListener("click", () => { this.stop(); const p = evs.filter(e => e.date < this.t).pop() || evs[0]; this.select(p.i, true); });
    this.$("nextEv").addEventListener("click", () => { this.stop(); const n = evs.find(e => e.date > this.t) || evs[evs.length - 1]; this.select(n.i, true); });
    this.$("recentOnly").addEventListener("change", e => { this.recentOnly = e.target.checked; this.render(); });
    if (this.$("ovlOn")) this.$("ovlOn").addEventListener("change", () => this.render());
    Object.entries(this.dotEls).forEach(([i, g]) => {
      const e = evs[+i];
      g.addEventListener("mousemove", ev => showTip(ev, `<span class="d">${fmt(e.d, e.p)}${e.st ? " · " + esc(e.st) : ""}</span><b>${esc(e.h)}</b>${esc(e.x || "")}`));
      g.addEventListener("mouseleave", hideTip);
      g.addEventListener("click", () => this.select(e.i, false));
    });
    this.countryEls.forEach(p => {
      p.addEventListener("mousemove", ev => { const r = roleAt(c, p.dataset.c, this.t); if (!r) return; showTip(ev, `<b>${esc(r.es)}</b><span class="d">${r.r === "A" ? esc(c.sides.A.name) : r.r === "B" ? esc(c.sides.B.name) : ROLE_LABEL[r.r]}</span>${r.n ? "<br>" + esc(r.n) : ""}`); });
      p.addEventListener("mouseleave", hideTip);
    });
    this.$("evList").addEventListener("click", ev => { if (ev.target.closest("a")) return; const it = ev.target.closest("[data-li]"); if (it) this.select(+it.dataset.li, false); });
    this.setT(end);
  }
  ConflictMap.prototype.select = function (i, moveTime) {
    const e = this.evs[i]; this.sel = i;
    if (moveTime || e.date > this.t) this.setT(e.date); else this.render();
    const li = this.host.querySelector(`[data-li="${i}"]`); if (li) li.scrollIntoView({ block: "nearest" });
  };
  ConflictMap.prototype.setT = function (t) {
    this.t = t; this.$("tSlider").value = diffDays(this.start, t); this.render();
  };
  ConflictMap.prototype.render = function () {
    const c = this.c, t = this.t;
    const ov = this.host.querySelector("#ovl");
    if (ov) ov.style.display = diffDays(t, TODAY) <= 30 && this.$("ovlOn").checked ? "" : "none";
    this.$("mapDate").innerHTML = `${fmt(t)}<small>${diffDays(t, TODAY) === 0 ? "Hoy · situación actual" : "Vista histórica"}</small>`;
    // countries
    const present = {};
    for (const p of this.countryEls) {
      const r = roleAt(c, p.dataset.c, t);
      p.setAttribute("fill", r ? (r.r === "Z" ? "url(#hatch)" : `var(--role-${r.r})`) : "var(--land)");
      if (r) (present[r.r] = present[r.r] || []).push(r.es);
    }
    this.$("actorsNow").innerHTML = ROLE_ORDER.filter(r => present[r]).map(r =>
      `<div class="rgroup"><span class="sw" style="${r === "Z" ? "background:repeating-linear-gradient(45deg,#3a2f34 0 3px,#8a4a46 3px 5px)" : "background:var(--role-" + r + ")"}"></span><div><b>${r === "A" ? esc(c.sides.A.name) : r === "B" ? esc(c.sides.B.name) : ROLE_LABEL[r]}</b>${esc(present[r].join(", "))}</div></div>`).join("")
      + (c.nonState.length ? `<div class="rgroup"><span class="sw" style="border:1px dashed var(--muted)"></span><div><b>Actores no estatales</b>${esc(c.nonState.map(n => n.name).join(", "))}</div></div>` : "");
    // dots + list
    let html = "", n = 0;
    const shown = this.evs.filter(e => e.date <= t).reverse();
    for (const e of this.evs) {
      const g = this.dotEls[e.i]; if (!g) continue;
      const age = diffDays(e.date, t), vis = e.date <= t && (!this.recentOnly || age <= 90);
      g.style.display = vis ? "" : "none";
      if (!vis) continue;
      const fresh = age <= 60;
      g.style.opacity = fresh ? 1 : .42;
      g.querySelector(".pulse").style.display = fresh ? "" : "none";
      g.querySelector(".evdot").classList.toggle("sel", this.sel === e.i);
      g.querySelector(".evdot").setAttribute("r", this.sel === e.i ? 8 : 6);
      if (this.sel === e.i) g.parentNode.appendChild(g);
    }
    for (const e of shown) {
      const age = diffDays(e.date, t);
      if (this.recentOnly && age > 90) continue;
      n++;
      html += `<div class="ev ${age > 60 ? "old" : ""} ${this.sel === e.i ? "sel" : ""}" data-li="${e.i}"><span class="dot" style="background:var(--ev-${e.t})"></span><div><div class="d">${fmt(e.d, e.p)}${e.nomap ? " · fuera del mapa" : ""}</div><div class="t">${esc(e.h)}</div>${e.x ? `<div class="x">${esc(e.x)}</div>` : ""}${e.u ? `<a class="evsrc" href="${esc(e.u)}" target="_blank" rel="noopener">${esc(e.st || "Fuente")} ↗</a>` : ""}</div></div>`;
    }
    this.$("evList").innerHTML = html || `<p class="muted" style="padding:8px">Sin hechos registrados hasta esta fecha.</p>`;
    this.$("evCount").textContent = `· ${n}`;
  };
  ConflictMap.prototype.play = function () {
    if (diffDays(this.t, TODAY) <= 0) this.t = this.start;
    const step = Math.max(1, Math.round(this.span / 260));
    this.$("playBtn").textContent = "❚❚ Pausa";
    this.timer = setInterval(() => {
      const nt = addDays(this.t, step);
      if (nt >= TODAY) { this.setT(TODAY); this.stop(); return; }
      this.setT(nt);
    }, 45);
  };
  ConflictMap.prototype.stop = function () {
    if (this.timer) clearInterval(this.timer); this.timer = null;
    const b = this.$("playBtn"); if (b) b.textContent = "▶ Reproducir";
  };
  ConflictMap.prototype.destroy = function () { this.stop(); hideTip(); };

  /* ---------- víctimas y daños ---------- */
  function tollHTML(c) {
    const T = (window.TOLL || {})[c.id];
    if (!T || (!T.casualties?.length && !T.damage?.length)) return `<p class="muted">Sin estimaciones cargadas todavía.</p>`;
    const badge = k => `<span class="kind ${k === "parte" ? "parte" : k === "proyección" ? "proy" : "indep"}">${k === "parte" ? "Dato de una parte" : k === "proyección" ? "Proyección" : "Independiente"}</span>`;
    const src = x => x.url ? `<a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.src)}</a>` : esc(x.src || "");
    const sides = [...new Set(T.casualties.map(x => x.side))];
    const cards = sides.map(sd => {
      const rows = T.casualties.filter(x => x.side === sd);
      return `<div class="toll-side"><h3>${esc(sd)}</h3>${rows.map(x => `
        <div class="toll-row"><div class="toll-k">${esc(x.cat)}</div><div class="toll-v">${esc(x.value)}</div>
        <div class="toll-m">${badge(x.kind)} ${src(x)} · ${x.asOf ? fmt(x.asOf, x.asOf.length === 7 ? "m" : "d") : ""}${x.note ? `<br><span>${esc(x.note)}</span>` : ""}</div></div>`).join("")}</div>`;
    }).join("");
    const dmg = (T.damage || []).length ? `<h3 class="toll-sub">Daños materiales y costo económico</h3><div class="dmg-grid">${T.damage.map(x => `
      <div class="dmg"><span class="dmg-side">${esc(x.side)}</span><b>${esc(x.value)}</b><p>${esc(x.what || "")}</p><div class="toll-m">${badge(x.kind)} ${src(x)}${x.asOf ? " · " + fmt(x.asOf, x.asOf.length === 7 ? "m" : "d") : ""}</div></div>`).join("")}</div>` : "";
    return `${T.method ? `<p class="toll-method">${esc(T.method)}</p>` : ""}${seriesHTML(c)}<div class="toll-grid">${cards}</div>${dmg}`;
  }

  /* ---------- control territorial: inicio vs hoy ---------- */
  function controlHTML(c) {
    const C = window.CONTROL[c.id];
    const isSd = c.id === "sudan";
    const cls = s => { s = String(s || ""); if (/^disput/i.test(s)) return "Z"; if (isSd) return s === "RSF" ? "A" : s === "SAF" ? "B" : "Z"; return /^junta/i.test(s) ? "A" : /resist/i.test(s) ? "B" : "Z"; };
    const lbl = { A: isSd ? "RSF" : "Junta militar", B: isSd ? "Ejército (SAF)" : "Resistencia / ejércitos étnicos", Z: "Disputado" };
    const fill = k => k === "Z" ? "url(#hatchC)" : `var(--role-${k})`;
    const byName = Object.fromEntries(C.units.map(u => [u.name, u]));
    const W = 460, H = 520;
    const proj = d3.geoMercator().fitExtent([[8, 8], [W - 8, H - 8]], C.geo), path = d3.geoPath(proj);
    const mapSvg = (when, title, sub) => {
      let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(title)}"><defs><pattern id="hatchC" patternUnits="userSpaceOnUse" width="7" height="7" patternTransform="rotate(45)"><rect width="7" height="7" fill="#3a2f34"/><line x1="0" y1="0" x2="0" y2="7" stroke="#b08d45" stroke-width="2.2"/></pattern></defs>`;
      for (const f of C.geo.features) { const u = byName[f.properties.n]; const k = u ? cls(u[when]) : "Z"; s += `<path d="${path(f)}" fill="${u ? fill(k) : "var(--land)"}" stroke="#121314" stroke-width="1"><title>${esc((u && u.name_es) || f.properties.n)}: ${u ? esc(u[when]) : "s/d"}</title></path>`; }
      if (when === "now") for (const ci of C.cities) { const ev = ci.events[ci.events.length - 1]; const p = proj([ci.lon, ci.lat]); if (!p) continue; const k = cls(ev.to); s += `<circle cx="${p[0]}" cy="${p[1]}" r="4.5" fill="${k === "Z" ? "#b08d45" : `var(--role-${k})`}" stroke="#fff" stroke-width="1.2"><title>${esc(ci.name)}: ${esc(ev.to)} (${fmt(ev.d)})</title></circle><text class="clabel" x="${p[0]}" y="${p[1] - 8}">${esc(ci.name)}</text>`; }
      return `<figure class="cmap"><figcaption><b>${esc(title)}</b><span>${esc(sub)}</span></figcaption>${s}</svg></figure>`;
    };
    const evs = [];
    C.cities.forEach(ci => ci.events.forEach(e => evs.push({ n: ci.name, d: e.d, to: e.to, x: e.x || "" })));
    evs.sort((x, y) => x.d.localeCompare(y.d));
    return `<div class="cgrid">${mapSvg("start", "Inicio", isSd ? "Abril de 2023" : "Febrero de 2021 (golpe)")}${mapSvg("now", "Hoy", "Octubre de 2026 · puntos: ciudades clave")}</div>
      <div class="mapleg" style="border:0;padding-left:0">${["A", "B", "Z"].map(k => `<span><i class="sw" style="${k === "Z" ? "background:repeating-linear-gradient(45deg,#3a2f34 0 3px,#b08d45 3px 5px)" : "background:var(--role-" + k + ")"}"></i>${lbl[k]}</span>`).join("")}<span>Control mayoritario por ${isSd ? "estado" : "estado o región"}: una aproximación, no una línea de frente.</span></div>
      <div class="ctbl-wrap"><table class="fronts ctbl"><thead><tr><th>${isSd ? "Estado" : "Estado / región"}</th><th>Inicio</th><th>Hoy</th><th>Nota</th></tr></thead><tbody>
      ${C.units.map(u => `<tr><td>${esc(u.name_es || u.name)}</td><td><span class="cdot" style="--k:${cls(u.start) === "Z" ? "#b08d45" : `var(--role-${cls(u.start)})`}"></span>${esc(u.start)}</td><td><span class="cdot" style="--k:${cls(u.now) === "Z" ? "#b08d45" : `var(--role-${cls(u.now)})`}"></span>${esc(u.now)}</td><td>${esc(u.note || "")}${u.url ? ` <a href="${esc(u.url)}" target="_blank" rel="noopener">fuente</a>` : ""}</td></tr>`).join("")}
      </tbody></table></div>
      <h3 class="toll-sub">Cambios de mano en ciudades clave</h3>
      <div class="cev">${evs.map(e => `<div><span class="mono">${fmt(e.d)}</span><b>${esc(e.n)}</b> → ${esc(e.to)}${e.x ? `<small>${esc(e.x)}</small>` : ""}</div>`).join("")}</div>`;
  }

  /* ---------- víctimas en el tiempo ---------- */
  function nfmt(v) { return v >= 1e6 ? (v / 1e6).toFixed(1).replace(".", ",") + " M" : v >= 1e4 ? Math.round(v / 1000) + " mil" : Math.round(v).toLocaleString("es-AR"); }
  function short(t) { t = String(t); return t.length > 70 ? t.slice(0, 68).replace(/[ ,;(]+[^ ]*$/, "") + "…" : t; }
  function seriesChart(s) {
    const pts = s.points.filter(p => typeof p[1] === "number");
    if (pts.length < 2) return "";
    const W = 460, H = 190, pl = 46, pr = 10, pt = 22, pb = 34;
    const max = Math.max(...pts.map(p => p[1])) * 1.12;
    const n = pts.length, bw = (W - pl - pr) / n;
    const ys = v => pt + (1 - v / max) * (H - pt - pb);
    const cum = /acum/i.test(s.unit);
    let g = `<svg viewBox="0 0 ${W} ${H}" class="ser-svg" role="img" aria-label="${esc(s.name)}">`;
    [0, .5, 1].forEach(f => { const v = max / 1.12 * f; g += `<line x1="${pl}" x2="${W - pr}" y1="${ys(v)}" y2="${ys(v)}" stroke="#25282b"/><text x="${pl - 5}" y="${ys(v) + 3.5}" text-anchor="end" class="ax">${nfmt(v)}</text>`; });
    const lblEvery = Math.ceil(n / 9);
    if (cum) {
      g += `<polyline points="${pts.map((p, i) => (pl + bw * (i + .5)).toFixed(1) + "," + ys(p[1]).toFixed(1)).join(" ")}" fill="none" stroke="var(--accent)" stroke-width="2"/>`;
      pts.forEach((p, i) => { g += `<circle cx="${pl + bw * (i + .5)}" cy="${ys(p[1])}" r="3" fill="var(--accent)"><title>${esc(p[0])}: ${p[1].toLocaleString("es-AR")}</title></circle>`; });
    } else {
      pts.forEach((p, i) => { const x = pl + bw * i + bw * .15, y = ys(p[1]); g += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${(bw * .7).toFixed(1)}" height="${(H - pb - y).toFixed(1)}" rx="1.5" fill="${/\*/.test(p[0]) ? "rgba(196,71,61,.45)" : "var(--accent)"}"><title>${esc(p[0])}: ${p[1].toLocaleString("es-AR")}</title></rect>`; });
    }
    const last = pts[pts.length - 1];
    g += `<text x="${pl + bw * (n - .5)}" y="${ys(last[1]) - 7}" text-anchor="middle" class="ax val">${nfmt(last[1])}</text>`;
    const lbl = v => { v = String(v); const m = v.match(/^(\d{4})-(\d{2})/); return m ? MONTHS[+m[2] - 1] + " " + m[1].slice(2) : v; };
    const every2 = cum ? Math.max(1, Math.ceil(n / 4)) : lblEvery;
    pts.forEach((p, i) => { if (i % every2 === 0 || i === n - 1) g += `<text x="${pl + bw * (i + .5)}" y="${H - pb + 14}" text-anchor="middle" class="ax">${esc(lbl(p[0]))}</text>`; });
    g += `</svg>`;
    return `<figure class="ser"><figcaption><b>${esc(s.name)}</b><span>${esc(s.unit)} · <span class="kind ${s.kind === "parte" ? "parte" : "indep"}">${s.kind === "parte" ? "Dato de una parte" : "Independiente"}</span> ${s.url ? `<a href="${esc(s.url)}" target="_blank" rel="noopener" title="${esc(s.src)}">${esc(short(s.src))}</a>` : `<span title="${esc(s.src || "")}">${esc(short(s.src || ""))}</span>`}</span></figcaption>${g}</figure>`;
  }
  function seriesHTML(c) {
    const S = (window.SERIES || {})[c.id];
    if (!S || !S.series || !S.series.length) return "";
    const charts = S.series.map(seriesChart).filter(Boolean).join("");
    return charts ? `<h3 class="toll-sub" style="margin-top:0">Evolución en el tiempo</h3><div class="ser-grid">${charts}</div><h3 class="toll-sub">Cifras por bando</h3>` : "";
  }

  /* ---------- panel global ---------- */

  /* ---------- indicadores globales de riesgo ---------- */
  function riskPanel() {
    const G = window.GLOBAL_RISK; if (!G) return "";
    const dfmt = s => /^\d{4}-\d{2}-\d{2}$/.test(s) ? fmt(s) : /^\d{4}-\d{2}$/.test(s) ? fmt(s, "m") : s.replace("-T", " T");
    const num = v => v.toLocaleString("es-AR", { maximumFractionDigits: 1 });
    const src = (s, u) => u ? `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(s)} ↗</a>` : esc(s);
    // Reloj: últimos 15 minutos de la esfera; 1 seg = 0,1°
    const C = G.clock, R = 62, cx = 80, cy = 80;
    const pt = (deg, r) => [cx + r * Math.sin(deg * Math.PI / 180), cy - r * Math.cos(deg * Math.PI / 180)];
    let ticks = ""; for (let m = 0; m < 60; m += 5) { const a = pt(m * 6, R - 2), b = pt(m * 6, R - (m % 15 ? 7 : 11)); ticks += `<line x1="${a[0]}" y1="${a[1]}" x2="${b[0]}" y2="${b[1]}" stroke="#55595e" stroke-width="${m % 15 ? 1.2 : 2}"/>`; }
    const ang = -C.seconds * 0.1, [mx, my] = pt(ang, R - 10), [hx, hy] = pt(-1 * 30 / 60 * 0 - 0.5, R - 26);
    const [ax, ay] = pt(ang, R + 6), [bx, by] = pt(0, R + 6);
    const clock = `<svg viewBox="0 0 160 160" class="rk-clock" role="img" aria-label="${C.seconds} segundos para la medianoche">
      <circle cx="${cx}" cy="${cy}" r="${R}" fill="#16181a" stroke="#2e3134" stroke-width="2"/>${ticks}
      <path d="M${cx},${cy} L${pt(-90, R)[0]},${pt(-90, R)[1]} A${R},${R} 0 0 1 ${cx},${cy - R} Z" fill="var(--accent-soft)"/>
      <path d="M${ax},${ay} A${R + 6},${R + 6} 0 0 1 ${bx},${by}" fill="none" stroke="var(--accent)" stroke-width="3"/>
      <line x1="${cx}" y1="${cy}" x2="${hx}" y2="${hy}" stroke="#ece9e6" stroke-width="4" stroke-linecap="round"/>
      <line x1="${cx}" y1="${cy}" x2="${mx}" y2="${my}" stroke="var(--accent-ink)" stroke-width="2.5" stroke-linecap="round"/>
      <circle cx="${cx}" cy="${cy}" r="4" fill="#ece9e6"/></svg>`;
    const hmax = Math.max(...C.hist.map(h => h[1])), hmin = Math.min(...C.hist.map(h => h[1])) * 0.6, hl = v => (Math.log(v) - Math.log(hmin)) / (Math.log(hmax) - Math.log(hmin));
    const hist = C.hist.map(h => `<span title="${h[0]}: ${h[1] >= 120 ? Math.round(h[1] / 60) + " min" : h[1] + " s"}"><i style="height:${Math.max(6, hl(h[1]) * 100)}%"></i><em>${String(h[0]).slice(2)}</em></span>`).join("");
    const D = G.defcon;
    const scale = [5, 4, 3, 2, 1].map(l => `<span class="dc${l === D.level ? " on" : ""}${l < D.level ? " up" : ""}" data-l="${l}">${l}</span>`).join("");
    const O = G.oil, U = O.us, I = O.iea, cmax = Math.max(...O.countries.map(c => c.mb));
    const rows = O.countries.map(c => `<tr><td>${esc(c.n)}${c.est ? ` <small class="est">estim.</small>` : ""}</td>
      <td class="barc"><i style="width:${c.mb / cmax * 100}%"${c.n === "Estados Unidos" ? ' class="us"' : ""}></i></td>
      <td class="num">${num(c.mb)}</td><td class="num">${c.days ? c.days + " días" : "—"}</td><td class="rk-s">${esc(c.s)} · ${esc(dfmt(c.d))}</td></tr>`).join("");
    return `<div class="section-title"><h2>Indicadores de riesgo global</h2><span>Termómetros que no dependen de un solo conflicto · <a href="#geopolitica">Ver el globo con bloques y riesgo por país →</a></span></div>
      <div class="rk-grid">
        <div class="panel rk"><h3>Reloj del Apocalipsis</h3>
          <div class="rk-row">${clock}<div><b class="rk-big">${C.seconds} <small>segundos</small></b><span class="rk-sub">para la medianoche</span>
          <div class="rk-hist" aria-label="Evolución desde 1991">${hist}</div><div class="rk-hist-l">1991: 17 min · 2026: 85 s</div></div></div>
          <p>${esc(C.note)}</p><p class="rk-src">${src(C.src, C.u)} · fijado el ${fmt(C.set)}</p></div>
        <div class="panel rk"><h3>DEFCON de EE.UU. <span class="pill">No oficial</span></h3>
          <div class="rk-row"><div><b class="rk-big">${D.level} <small>estimado</small></b><span class="rk-sub">desde el ${fmt(D.since)}</span></div></div>
          <div class="dc-scale" aria-label="Escala DEFCON de 5 (paz) a 1 (guerra nuclear)">${scale}</div>
          <div class="dc-lab"><span>5 · paz</span><span>1 · guerra nuclear inminente</span></div>
          <p>${esc(D.note)}</p><p class="rk-src">${src(D.src, D.u)}</p></div>
        <div class="panel rk"><h3>Reserva estratégica de EE.UU.</h3>
          <div class="rk-row"><div><b class="rk-big">${num(U.mb)} <small>M barriles</small></b><span class="rk-sub">${Math.round(U.mb / U.cap * 100)}% de su capacidad (${U.cap} M) · al ${fmt(U.date)}</span></div></div>
          <div class="rk-fill"><i style="width:${U.mb / U.cap * 100}%"></i><b style="left:${U.peak2026 / U.cap * 100}%" title="${num(U.peak2026)} M el ${fmt(U.peakDate)}"></b></div>
          <div class="dc-lab"><span>0</span><span>▏ ${num(U.peak2026)} M en ${fmt(U.peakDate, "m")}</span><span>${U.cap} M</span></div>
          <p>${esc(U.note)}</p><p class="rk-src">${src(U.src, U.u)}</p>
          <p class="rk-iea"><b>${I.released} de ${I.pledged} M</b> barriles ya liberados por la AIE al ${fmt(I.date)}. ${esc(I.note)} <span class="rk-src">${src(I.src, I.u)}</span></p></div>
      </div>
      <div class="panel gp rk-oil"><h3>Reservas estratégicas de petróleo por país <small>millones de barriles · días de importaciones netas que cubren</small></h3>
        <table class="gp-t"><thead><tr><th>País</th><th></th><th>M barriles</th><th>Cobertura</th><th>Fuente y fecha</th></tr></thead><tbody>${rows}</tbody></table>
        <p class="gp-note">No existe un inventario mundial homogéneo: cada país informa con otra fecha y otro criterio, y varias cifras ya incluyen lo liberado desde marzo. China no publica su reserva y la cifra es una estimación. La AIE exige a sus miembros 90 días de importaciones netas; EE.UU. es exportador neto y no aplica. ${src(O.cSrc, O.cU)}.</p></div>`;
  }

  function globalPanel() {
    const H = window.HEADLINE || {};
    const rows = CONFLICTS.map(c => ({ c, h: H[c.id] || {}, d: ((window.SERIES || {})[c.id] || {}).displaced })).filter(r => r.h.deaths || r.d);
    if (!rows.length) return "";
    const totD = rows.reduce((s, r) => s + (r.h.deathsMin || 0), 0), totP = rows.reduce((s, r) => s + ((r.d && r.d.current !== false && r.d.value) || 0), 0);
    const maxD = Math.max(...rows.map(r => r.h.deaths || 0)), maxP = Math.max(...rows.map(r => (r.d && r.d.value) || 0));
    const lg = (v, m) => v ? Math.max(2, Math.log10(v) / Math.log10(m) * 100) : 0;
    rows.sort((a, b) => (b.h.deaths || 0) - (a.h.deaths || 0));
    return `<div class="section-title"><h2>Panel global</h2><span>Muertes y desplazamiento por conflicto, con la mejor estimación disponible</span></div>
      <div class="gp-kpis">
        <div class="kpi big"><b>${nfmt(totD)}+</b><span>Muertes: suma de los mínimos verificados de cada conflicto</span></div>
        <div class="kpi big"><b>${nfmt(totP)}</b><span>Personas desplazadas hoy (internas y refugiadas, donde hay dato)</span></div>
      </div>
      <div class="panel gp"><table class="gp-t"><thead><tr><th>Conflicto</th><th>Muertes estimadas</th><th></th><th>Desplazados</th><th></th></tr></thead><tbody>
      ${rows.map(r => `<tr><td><a href="#c-${r.c.id}">${esc(r.c.name)}</a><small>${esc(r.h.period || "")}</small></td>
        <td class="num">${esc(r.h.label || "—")}<small>${esc(r.h.src || "")}</small></td><td class="barc"><i style="width:${lg(r.h.deaths, maxD)}%"></i></td>
        <td class="num">${r.d ? esc(r.d.label) : "—"}<small>${r.d ? esc(r.d.src || "") : ""}</small></td><td class="barc p"><i style="width:${r.d ? lg(r.d.value, maxP) : 0}%"></i></td></tr>`).join("")}
      </tbody></table><p class="gp-note">Barras en escala logarítmica. Las cifras mezclan fuentes y métodos distintos (ONU, ACLED, ministerios, estimaciones académicas); el total suma solo el valor mínimo verificado de cada conflicto y es un piso, no una estimación.</p></div>`;
  }

  /* ---------- mapa de evolución del frente (Ucrania) ---------- */
  function FrontMap(host) {
    const F = window.FRONT_UA, UA_AREA = 603628;
    const frames = F.early.map(e => ({ d: e.d, a: e.a, r: e.r, gr: e.gr, ga2: e.ga2, c: e.c, early: true })).concat(F.frames.map(f => Object.assign({ early: false }, f)));
    const K = F.kursk || [];
    const W = 960, H = 640;
    const box = { type: "Feature", geometry: { type: "Polygon", coordinates: [[[22, 44], [22, 52.6], [41, 52.6], [41, 44], [22, 44]]] } };
    const proj = d3.geoMercator().fitExtent([[0, 0], [W, H]], box), path = d3.geoPath(proj);
    const poly = m => m && m.length ? path({ type: "MultiPolygon", coordinates: m }) : "";
    const rings = rs => rs.map(r => "M" + r.map(p => proj(p).map(v => v.toFixed(1)).join(",")).join("L") + "Z").join("");
    const focus = new Set(["Ukraine", "Russia", "Belarus", "Moldova", "Romania", "Poland", "Hungary", "Slovakia"]);
    let base = `<defs><pattern id="hatchF" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)"><rect width="6" height="6" fill="rgba(194,82,71,.42)"/><line x1="0" y1="0" x2="0" y2="6" stroke="#e06a5e" stroke-width="2"/></pattern><pattern id="hatchG" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(-45)"><line x1="0" y1="0" x2="0" y2="8" stroke="rgba(224,106,94,.55)" stroke-width="1.4"/></pattern></defs><rect width="${W}" height="${H}" fill="var(--sea)"/>`;
    for (const f of FEATURES) if (focus.has(f.properties.name)) base += `<path d="${path(f)}" fill="${f.properties.name === "Ukraine" ? "#2a3440" : "var(--land)"}" stroke="var(--land-line)" stroke-width=".6"/>`;
    const cities = [["Kiev", 30.52, 50.45], ["Járkov", 36.23, 49.99], ["Donetsk", 37.80, 48.0], ["Zaporiyia", 35.14, 47.84], ["Jersón", 32.61, 46.64], ["Odesa", 30.73, 46.48], ["Dnipró", 35.05, 48.46], ["Pokrovsk", 37.18, 48.28], ["Kupiansk", 37.62, 49.71], ["Sebastopol", 33.52, 44.6], ["Lugansk", 39.3, 48.57], ["Sumy", 34.8, 50.91], ["Mariúpol", 37.55, 47.1], ["Chernígov", 31.29, 51.49], ["Sudzha", 35.27, 51.19]];
    const lab = cities.map(([n, lo, la]) => { const [x, y] = proj([lo, la]); return `<circle cx="${x}" cy="${y}" r="2.5" fill="#d8d2cc"/><text class="clabel" x="${x}" y="${y - 6}">${n}</text>`; }).join("");
    // gráfico de área
    const pts = frames.map(f => [parseD(f.d), f.a, f.early]);
    const daily = F.daily.map(d => [parseD(d[0]), d[1]]);
    const CW = 960, CH = 170, pl = 52, pr = 14, pt = 14, pb = 26;
    const t0 = pts[0][0], t1 = daily[daily.length - 1][0];
    const xs = d => pl + (d - t0) / (t1 - t0) * (CW - pl - pr), ys = v => pt + (1 - v / 150000) * (CH - pt - pb);
    let chart = `<svg viewBox="0 0 ${CW} ${CH}" class="area-chart" role="img" aria-label="Área ocupada en el tiempo">`;
    [0, 50000, 100000, 150000].forEach(v => chart += `<line x1="${pl}" x2="${CW - pr}" y1="${ys(v)}" y2="${ys(v)}" stroke="#25282b"/><text x="${pl - 6}" y="${ys(v) + 4}" text-anchor="end" class="ax">${(v / 1000)}k</text>`);
    for (let y = 2023; y <= 2026; y++) { const x = xs(new Date(Date.UTC(y, 0, 1))); chart += `<text x="${x}" y="${CH - 8}" class="ax" text-anchor="middle">${y}</text><line x1="${x}" x2="${x}" y1="${pt}" y2="${CH - pb}" stroke="#202326"/>`; }
    chart += `<text x="${xs(t0)}" y="${CH - 8}" class="ax">2022</text>`;
    const ep = F.early.map(e => [parseD(e.d), e.a]).concat([daily[0]]);
    const stepPts = ep.map((p, i) => i ? `L${xs(p[0]).toFixed(1)},${ys(ep[i - 1][1]).toFixed(1)}L${xs(p[0]).toFixed(1)},${ys(p[1]).toFixed(1)}` : `M${xs(p[0]).toFixed(1)},${ys(p[1]).toFixed(1)}`).join("");
    chart += `<path d="${stepPts}" fill="none" stroke="var(--role-A)" stroke-width="1.6" stroke-dasharray="4 3"/>`;
    chart += `<path d="M${xs(daily[0][0])},${ys(0)} ${daily.map(p => "L" + xs(p[0]).toFixed(1) + "," + ys(p[1]).toFixed(1)).join(" ")} L${xs(t1)},${ys(0)}Z" fill="rgba(194,82,71,.18)"/>`;
    chart += `<polyline points="${daily.map(p => xs(p[0]).toFixed(1) + "," + ys(p[1]).toFixed(1)).join(" ")}" fill="none" stroke="var(--role-A)" stroke-width="2"/>`;
    F.early.forEach(e => { chart += `<circle cx="${xs(parseD(e.d))}" cy="${ys(e.a)}" r="3.2" fill="var(--bg)" stroke="var(--role-A)" stroke-width="1.5"><title>${fmt(e.d)}: ${e.a.toLocaleString("es-AR")} km² · ${esc(e.c)}</title></circle>`; });
    chart += `<line id="fcur" x1="0" x2="0" y1="${pt}" y2="${CH - pb}" stroke="#fff" stroke-width="1" stroke-dasharray="2 3"/><circle id="fcurd" r="4.5" fill="#fff"/></svg>`;
    const nE = F.early.length;
    const ticks = frames.map((f, i) => (i < nE ? i === 0 : f.d.slice(5, 7) === "01" && +f.d.slice(8) <= 7) ? `<span style="left:${i / (frames.length - 1) * 100}%">${i === 0 ? "2022" : f.d.slice(0, 4)}</span>` : "").join("") + `<span style="left:${(nE - 0.5) / (frames.length - 1) * 100}%" class="tk-sep">jul 2024</span>`;

    host.innerHTML = `<div class="frontmod">
      <div class="map-stage"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Mapa de control territorial">${base}<path id="focc" fill="rgba(194,82,71,.62)" stroke="#e06a5e" stroke-width=".8" fill-rule="evenodd"/><path id="fgrey" fill="url(#hatchG)" stroke="rgba(224,106,94,.6)" stroke-width=".6" stroke-dasharray="3 3" fill-rule="evenodd"/><path id="fgain" fill="#ff3b2f"/><path id="floss" fill="#58c27a"/><path id="fkur" fill="rgba(79,132,176,.75)" stroke="#8fc0ea" stroke-width="1"/>${lab}</svg>
        <div class="map-date" id="fdate"></div><div class="fcap" id="fcap"></div></div>
      <div class="map-side front-stats">
        <div class="fstat"><span>Territorio ucraniano ocupado</span><b id="farea"></b><small id="fpct"></small></div>
        <div class="fstat"><span>Ganado por Rusia en 28 días</span><b id="fga" style="color:#ff6b5f"></b></div>
        <div class="fstat"><span>Recuperado por Ucrania en 28 días</span><b id="fla" style="color:#58c27a"></b></div>
        <div class="fstat"><span>Territorio ruso en manos ucranianas (Kursk)</span><b id="fkm" style="color:#8fc0ea"></b></div>
        <p class="fnote" id="fsrc"></p>
      </div>
      <div class="controls">
        <div class="btns"><button type="button" class="btn primary" id="fplay">▶ Reproducir</button></div>
        <div class="slider-wrap"><input type="range" id="fslider" min="0" max="${frames.length - 1}" step="1" value="${frames.length - 1}" aria-label="Fecha del mapa del frente"><div class="ticks">${ticks}</div></div>
        <div class="btns"><button type="button" class="btn" id="fstart">2022</button><button type="button" class="btn" id="fend">Hoy</button></div>
      </div>
      <div class="chart-wrap">${chart}</div>
      <div class="mapleg"><div class="g"><b>Mapa</b><span><i class="sw" style="background:rgba(194,82,71,.62)"></i>Ocupado por Rusia (DeepState)</span><span><i class="sw" style="background:repeating-linear-gradient(45deg,rgba(194,82,71,.42) 0 3px,#e06a5e 3px 5px)"></i>Ocupado por Rusia, reconstrucción 2022–2024</span><span><i class="sw" style="background:repeating-linear-gradient(-45deg,transparent 0 3px,rgba(224,106,94,.7) 3px 4px);border:1px dashed rgba(224,106,94,.6)"></i>Zona de avance ruso disputada (2022)</span><span><i class="sw" style="background:#ff3b2f"></i>Avance ruso últimos 28 días</span><span><i class="sw" style="background:#58c27a"></i>Recuperado por Ucrania últimos 28 días</span><span><i class="sw" style="background:rgba(79,132,176,.75)"></i>Territorio ruso ocupado por Ucrania</span></div></div>
    </div>`;
    const $ = id => host.querySelector("#" + id), sl = $("fslider");
    const draw = i => {
      const f = frames[i], t = parseD(f.d);
      $("fgrey").setAttribute("d", f.early && f.gr && f.gr.length ? rings(f.gr) : "");
      if (f.early) { $("focc").setAttribute("d", rings(f.r)); $("focc").setAttribute("fill", "url(#hatchF)"); $("fgain").setAttribute("d", ""); $("floss").setAttribute("d", ""); }
      else { $("focc").setAttribute("d", poly(f.g)); $("focc").setAttribute("fill", "rgba(194,82,71,.62)"); $("fgain").setAttribute("d", poly(f.gain)); $("floss").setAttribute("d", poly(f.loss)); }
      const k = K.filter(x => parseD(x.d) <= t).pop();
      $("fkur").setAttribute("d", k ? poly(k.g) : "");
      $("fkm").textContent = k ? "≈ " + Math.round(k.a).toLocaleString("es-AR") + " km²" : "—";
      $("fdate").innerHTML = `${fmt(f.d)}<small>${f.early ? "Reconstrucción aproximada" : i === frames.length - 1 ? "Última actualización" : "Serie diaria DeepState"}</small>`;
      $("fcap").textContent = f.c || "";
      $("fcap").style.display = f.c ? "" : "none";
      $("farea").textContent = f.a.toLocaleString("es-AR") + " km²";
      $("fpct").textContent = (f.a / UA_AREA * 100).toFixed(2).replace(".", ",") + "% de Ucrania" + (f.ga2 ? ` · más ${f.ga2.toLocaleString("es-AR")} km² en disputa` : "");
      $("fga").textContent = f.ga != null ? "+" + f.ga.toLocaleString("es-AR") + " km²" : "—";
      $("fla").textContent = f.la != null ? "−" + f.la.toLocaleString("es-AR") + " km²" : "—";
      $("fsrc").textContent = f.early ? "Fuente: " + F.earlySource + ". El área de Kursk usa las cifras del ISW; el polígono es esquemático." : "Fuente: DeepStateMap (proyecto OSINT ucraniano), serie diaria abierta desde el 8-jul-2024; una foto por semana. Área calculada en proyección equivalente. Kursk: cifras del ISW, polígono esquemático; máximo declarado por Ucrania: 1.294 km² (27-ago-2024).";
      const x = xs(t), y = ys(f.a);
      $("fcur").setAttribute("x1", x); $("fcur").setAttribute("x2", x); $("fcurd").setAttribute("cx", x); $("fcurd").setAttribute("cy", y);
    };
    let timer = null;
    this.stop = () => { if (timer) clearInterval(timer); timer = null; $("fplay").textContent = "▶ Reproducir"; };
    sl.addEventListener("input", () => { this.stop(); draw(+sl.value); });
    $("fend").addEventListener("click", () => { this.stop(); sl.value = frames.length - 1; draw(frames.length - 1); });
    $("fstart").addEventListener("click", () => { this.stop(); sl.value = 0; draw(0); });
    $("fplay").addEventListener("click", () => {
      if (timer) return this.stop();
      if (+sl.value >= frames.length - 1) sl.value = 0;
      $("fplay").textContent = "❚❚ Pausa";
      const tick = () => { const i = +sl.value + 1; if (i >= frames.length) return this.stop(); sl.value = i; draw(i); clearInterval(timer); timer = setInterval(tick, i < nE ? 1300 : 140); };
      timer = setInterval(tick, 900);
    });
    draw(frames.length - 1);
  }


  /* ---------- mapa histórico Israel–Palestina ---------- */
  function HistMap(host) {
    const D = window.HIST_IL, G = D.geo, FR = D.frames;
    const W = 470, H = 900;
    const bb = G.bbox, box = { type: "Polygon", coordinates: [[[bb[0][0], bb[0][1]], [bb[0][0], bb[1][1]], [bb[1][0], bb[1][1]], [bb[1][0], bb[0][1]], [bb[0][0], bb[0][1]]]] };
    const proj = d3.geoMercator().fitExtent([[0, 0], [W, H]], box), path = d3.geoPath(proj);
    const P = g => g ? path(g) : "";
    const mandate = P(G.mandate);
    let base = `<defs>
      <pattern id="hOcc" patternUnits="userSpaceOnUse" width="7" height="7" patternTransform="rotate(45)"><rect width="7" height="7" fill="rgba(194,82,71,.30)"/><line x1="0" y1="0" x2="0" y2="7" stroke="#e06a5e" stroke-width="2.2"/></pattern>
      <pattern id="hBlq" patternUnits="userSpaceOnUse" width="7" height="7" patternTransform="rotate(-45)"><rect width="7" height="7" fill="rgba(140,140,140,.18)"/><line x1="0" y1="0" x2="0" y2="7" stroke="#b9645c" stroke-width="1.4"/></pattern>
      <pattern id="hSch" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)"><rect width="6" height="6" fill="rgba(217,74,63,.25)"/><line x1="0" y1="0" x2="0" y2="6" stroke="#ff8a7f" stroke-width="1.6"/></pattern>
    </defs><rect width="${W}" height="${H}" fill="var(--sea)"/>`;
    for (const c of G.ctx) base += `<path d="${P(c.g)}" fill="var(--land)" stroke="var(--land-line)" stroke-width=".7"/>`;
    base += `<path d="${P(G.golan)}" fill="var(--land)" stroke="var(--land-line)" stroke-width=".7"/>`;
    const lab = [["Egipto", 34.25, 30.75], ["Jordania", 35.95, 31.0], ["Siria", 36.1, 33.25], ["Líbano", 35.45, 33.5], ["Mediterráneo", 34.45, 32.6]];
    let labels = lab.map(([n, lo, la]) => { const [x, y] = proj([lo, la]); return `<text class="hl-ctx" x="${x}" y="${y}" text-anchor="middle">${n}</text>`; }).join("");
    const cities = [["Jerusalén", 35.214, 31.778], ["Tel Aviv–Jaffa", 34.78, 32.07], ["Haifa", 34.99, 32.79], ["Gaza", 34.45, 31.51], ["Hebrón", 35.1, 31.53], ["Nablus", 35.26, 32.22], ["Beerseba", 34.79, 31.25], ["Eilat", 34.95, 29.56], ["Ammán", 35.93, 31.95], ["Damasco", 36.29, 33.51], ["Beirut", 35.5, 33.89]];
    labels += cities.map(([n, lo, la]) => { const p = proj([lo, la]); if (!p || p[1] < 4 || p[1] > H - 4) return ""; return `<circle cx="${p[0]}" cy="${p[1]}" r="2.6" fill="#ece9e6"/><text class="clabel" x="${p[0] + 5}" y="${p[1] - 5}">${n}</text>`; }).join("");
    const sideCol = { is: "#e2584b", ar: "#5b93c7", ot: "#c9a34a" };
    const sideLab = { is: "Milicias sionistas / Israel", ar: "Árabes / palestinos", ot: "Otros (milicias libanesas)" };
    const EV = D.events.map((e, i) => Object.assign({ i }, e));
    const ticks = FR.map((f, i) => `<span style="left:${i / (FR.length - 1) * 100}%">${f.y}</span>`).join("");
    host.innerHTML = `<div class="frontmod histmod">
      <div class="map-stage"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Mapa histórico de Israel y Palestina">${base}
        <path id="hmMand" fill="#2b2626" stroke="#8a807a" stroke-width="1.2"/>
        <path id="hmIsr" fill="rgba(194,82,71,.62)" stroke="#e06a5e" stroke-width=".9"/>
        <path id="hmWb" stroke-width=".9"/><path id="hmGaza" stroke-width=".9"/><path id="hmGolan" stroke-width=".9"/><path id="hmSinai" stroke-width=".9"/>
        <path id="hmSyr" fill="url(#hSch)" stroke="#ff8a7f" stroke-width=".8" stroke-dasharray="3 2"/><path id="hmLeb" fill="url(#hSch)" stroke="#ff8a7f" stroke-width=".8" stroke-dasharray="3 2"/>
        <g id="hmLab"></g>${labels}<g id="hmPts"></g><g id="hmEv"></g></svg>
        <div class="map-date" id="hmDate"></div></div>
      <div class="map-side hm-side">
        <h3 id="hmTitle"></h3><p id="hmText"></p><p id="hmLink" class="fnote"></p>
        <div class="hm-stats" id="hmStats"></div>
        <div class="hm-evh"><b>Hechos de violencia</b><label class="check"><input type="checkbox" id="hmAll"> Acumular desde 1920</label></div>
        <div class="evlist hm-list" id="hmList"></div>
      </div>
      <div class="controls">
        <div class="btns"><button type="button" class="btn primary" id="hmPlay">▶ Reproducir</button></div>
        <div class="slider-wrap"><input type="range" id="hmSl" min="0" max="${FR.length - 1}" step="1" value="${FR.length - 1}" aria-label="Año del mapa"><div class="ticks">${ticks}</div></div>
        <div class="btns"><button type="button" class="btn" id="hmPrev">◀</button><button type="button" class="btn" id="hmNext">▶</button></div>
      </div>
      <div class="mapleg"><div class="g"><b>Territorio</b>
        <span><i class="sw" style="background:#2b2626;border:1px solid #8a807a"></i>Palestina (Mandato británico, 1922–48)</span>
        <span><i class="sw" style="background:rgba(194,82,71,.62)"></i>Israel (Línea Verde de 1949)</span>
        <span><i class="sw" style="background:repeating-linear-gradient(45deg,rgba(194,82,71,.3) 0 3px,#e06a5e 3px 5px)"></i>Ocupado por Israel</span>
        <span><i class="sw" style="background:rgba(194,82,71,.42);border:1px solid #e06a5e"></i>Anexado por Israel (sin reconocimiento internacional)</span>
        <span><i class="sw" style="background:rgba(79,132,176,.55)"></i>Jordania / Egipto (1949–67)</span>
        <span><i class="sw" style="background:repeating-linear-gradient(-45deg,rgba(140,140,140,.18) 0 3px,#b9645c 3px 5px)"></i>Gaza bajo bloqueo</span>
        <span><i class="sw" style="background:repeating-linear-gradient(45deg,rgba(217,74,63,.25) 0 3px,#ff8a7f 3px 5px)"></i>Zona ocupada, trazado esquemático</span></div>
        <div class="g"><b>Puntos</b><span><i class="sw c" style="background:#f2e3c8"></i>Colonia judía anterior a 1948</span><span><i class="sw c" style="background:#ff6b5f"></i>Asentamiento israelí</span><span><i class="sw c" style="background:transparent;border:1.5px solid #ff6b5f"></i>Puesto avanzado (ilegal también para Israel)</span></div>
        <div class="g"><b>Hechos</b>${Object.keys(sideLab).map(k => `<span><i class="sw c" style="background:${sideCol[k]}"></i>Atacante: ${sideLab[k]}</span>`).join("")}<span>Tamaño según cantidad de muertos</span></div>
        <p class="fnote" style="margin:6px 0 0">${esc(D.note)}</p></div>
    </div>`;
    const $ = id => host.querySelector("#" + id), sl = $("hmSl");
    const yr = s => +String(s).slice(0, 4);
    const deadN = s => { const m = String(s || "").replace(/\./g, "").match(/\d+/g); return m ? Math.max(...m.map(Number)) : 1; };
    const setG = (id, g, fill, stroke, dash) => { const el = $(id); el.setAttribute("d", g ? P(g) : ""); if (fill) el.setAttribute("fill", fill); el.setAttribute("stroke", stroke || "none"); if (dash) el.setAttribute("stroke-dasharray", dash); else el.removeAttribute("stroke-dasharray"); };
    const ST = { occ: ["url(#hOcc)", "#e06a5e"], ann: ["rgba(194,82,71,.42)", "#e06a5e"], jor: ["rgba(79,132,176,.55)", "#6f9fca"], egy: ["rgba(79,132,176,.55)", "#6f9fca"], blq: ["url(#hBlq)", "#b9645c"], occ2: ["url(#hOcc)", "#e06a5e"] };
    const all = () => $("hmAll").checked;
    const draw = i => {
      const f = FR[i], y = f.y, y0 = i ? FR[i - 1].y : 1919, t = f.d;
      $("hmMand").setAttribute("d", f.mandate && f.mandate !== "none" ? mandate : "");
      $("hmMand").setAttribute("stroke-dasharray", f.mandate === "dash" ? "4 3" : "");
      $("hmMand").setAttribute("fill", f.mandate === "dash" ? "#262323" : "#2b2626");
      setG("hmIsr", f.isr ? G.israel49 : null, "rgba(194,82,71,.62)", "#e06a5e");
      for (const [id, k, g] of [["hmWb", "wb", G.wb], ["hmGaza", "gaza", G.gaza], ["hmGolan", "golan", G.golan], ["hmSinai", "sinai", G.sinai]]) {
        const s = f[k]; setG(id, s ? g : null, s ? ST[s][0] : "none", s ? ST[s][1] : null);
      }
      setG("hmSyr", f.syrbuf ? G.syrbuf : null, "url(#hSch)", "#ff8a7f", "3 2");
      setG("hmLeb", f.leb ? G.leb : null, "url(#hSch)", "#ff8a7f", "3 2");
      // etiquetas de zona
      const zl = [];
      if (f.wb) zl.push(["Cisjordania", 35.3, 31.95, f.wb === "jor" ? "Jordania" : "ocupada desde 1967"]);
      if (f.gaza) zl.push(["Gaza", 34.03, 31.68, f.gaza === "egy" ? "Egipto" : f.gaza === "blq" ? "bloqueo" : f.gaza === "occ2" ? "≥60% control israelí" : "ocupada", "start"]);
      if (f.golan) zl.push(["Golán", 35.95, 32.95, f.golan === "ann" ? "anexado 1981" : "ocupado"]);
      if (f.sinai) zl.push(["Sinaí", 34.45, 30.25, "ocupado 1967–82"]);
      if (f.mandate && f.mandate !== "none") zl.push(["Palestina", 34.95, 31.05, f.mandate === "dash" ? "otomana" : "Mandato británico"]);
      if (f.isr) zl.push(["Israel", 34.83, 30.55, ""]);
      $("hmLab").innerHTML = zl.filter((z, k, a) => a.findIndex(q => q[0] === z[0]) === k).map(([n, lo, la, s, an]) => { const [x, yy] = proj([lo, la]); return `<text class="hl-zone" x="${x}" y="${yy}" text-anchor="${an || "middle"}">${n}${s ? `<tspan x="${x}" dy="13" class="hl-zs">${s}</tspan>` : ""}</text>`; }).join("");
      // puntos
      let pts = "";
      if (y <= 1947) for (const c of D.pre48) if (c.y <= y) { const p = proj([c.lon, c.lat]); pts += `<circle cx="${p[0]}" cy="${p[1]}" r="3" fill="#f2e3c8" stroke="#111" stroke-width=".6"><title>${esc(c.n)} (${c.y})</title></circle>`; }
      let nS = 0, nO = 0;
      if (y >= 1967) for (const s of D.settlements) if (s.y <= y && !(s.ev && s.ev <= y)) {
        const p = proj([s.lon, s.lat]); if (!p) continue; const o = s.t === "outpost"; o ? nO++ : nS++;
        pts += `<circle cx="${p[0]}" cy="${p[1]}" r="${o ? 2.6 : 3.2}" fill="${o ? "none" : "#ff6b5f"}" stroke="${o ? "#ff6b5f" : "#111"}" stroke-width="${o ? 1.3 : .6}"><title>${esc(s.n)} · ${o ? "puesto avanzado" : "asentamiento"} desde ${s.y}${s.ev ? ", evacuado en " + s.ev : ""}</title></circle>`;
      }
      $("hmPts").innerHTML = pts;
      // hechos
      const evs = EV.filter(e => yr(e.d) <= y && (all() ? true : yr(e.d) > y0) && e.d <= t);
      $("hmEv").innerHTML = evs.filter(e => !e.nomap).map(e => { const p = proj([e.lon, e.lat]); if (!p || p[0] < 0 || p[0] > W || p[1] < 0 || p[1] > H) return ""; const r = 4 + Math.min(16, Math.sqrt(deadN(e.dead)) * 1.1); return `<circle class="hm-ev" data-i="${e.i}" cx="${p[0]}" cy="${p[1]}" r="${r.toFixed(1)}" fill="${sideCol[e.s]}" fill-opacity=".55" stroke="${sideCol[e.s]}" stroke-width="1.4"/>`; }).join("");
      $("hmList").innerHTML = evs.length ? evs.slice().reverse().map(e => `<div class="ev" data-i="${e.i}"><span class="dot" style="background:${sideCol[e.s]}"></span><div><div class="d">${fmt(e.d)} · ${esc(e.dead)} ${e.dead === "1" ? "muerto" : "muertos"}</div><div class="t">${esc(e.h)}</div><div class="x">${esc(e.x)}</div><a class="evsrc" href="${esc(e.u)}" target="_blank" rel="noopener">Fuente ↗</a></div></div>`).join("") : `<p class="muted" style="font-size:13px">Sin hechos registrados en este período.</p>`;
      $("hmDate").innerHTML = `${f.y}<small>${i === FR.length - 1 ? "Situación actual" : i ? "Período " + (FR[i - 1].y + 1) + "–" + f.y : "Antes del Mandato"}</small>`;
      $("hmTitle").textContent = f.t; $("hmText").textContent = f.x;
      $("hmLink").innerHTML = f.link ? `<a href="${esc(f.link[1])}" target="_blank" rel="noopener">${esc(f.link[0])} ↗</a>` : "";
      const pop = (D.pop || []).filter(p => p.y <= y).pop();
      const st = [];
      if (f.jp) st.push(["Población judía", f.jp]);
      if (y <= 1947) st.push(["Colonias judías en el mapa", String(D.pre48.filter(c => c.y <= y).length)]);
      if (y >= 1967) { st.push(["Asentamientos en el mapa", String(nS)]); if (nO) st.push(["Puestos avanzados en el mapa", String(nO)]); }
      if (y >= 1967 && pop) st.push(["Colonos (Cisj. + Jerusalén Este)", pop.v + (pop.y !== y ? ` (${pop.y})` : "")]);
      $("hmStats").innerHTML = st.map(([k, v]) => `<div class="fstat${v.length > 12 ? " wide" : ""}"><span>${k}</span><b>${esc(v)}</b></div>`).join("");
    };
    host.querySelector("#hmEv").addEventListener("mousemove", e => { const c = e.target.closest(".hm-ev"); if (!c) return hideTip(); const v = EV[+c.dataset.i]; showTip(e, `<b>${esc(v.h)}</b><span class="d">${fmt(v.d)} · ${esc(v.dead)} ${v.dead === "1" ? "muerto" : "muertos"}</span><span class="d">${esc(sideLab[v.s])}</span>`); });
    host.querySelector("#hmEv").addEventListener("mouseleave", hideTip);
    let timer = null;
    this.stop = () => { if (timer) clearInterval(timer); timer = null; $("hmPlay").textContent = "▶ Reproducir"; };
    const go = i => { i = Math.max(0, Math.min(FR.length - 1, i)); sl.value = i; draw(i); };
    sl.addEventListener("input", () => { this.stop(); draw(+sl.value); });
    $("hmAll").addEventListener("change", () => draw(+sl.value));
    $("hmPrev").addEventListener("click", () => { this.stop(); go(+sl.value - 1); });
    $("hmNext").addEventListener("click", () => { this.stop(); go(+sl.value + 1); });
    $("hmPlay").addEventListener("click", () => {
      if (timer) return this.stop();
      if (+sl.value >= FR.length - 1) go(0);
      $("hmPlay").textContent = "❚❚ Pausa";
      timer = setInterval(() => { if (+sl.value >= FR.length - 1) return this.stop(); go(+sl.value + 1); }, 2600);
    });
    draw(FR.length - 1);
  }


  /* ============================== GEOPOLÍTICA (globo) ============================== */
  function renderGeo() {
    const G = window.GEO, BL = G.blocs, SUB = G.subs;
    const OR = G.orgs || {};
    const MODES = [["bloques", "Bloques geopolíticos"], ["o_mil", "Alianzas militares"], ["o_eco", "Bloques económicos"], ["o_pol", "Bloques políticos"], ["mil", "Riesgo militar"], ["int", "Riesgo interno"], ["eco", "Riesgo económico"]].concat(G.mx ? [["sol", "Soldados"], ["gasto", "Gasto en defensa"], ["nuk", "Armas nucleares"]] : []);
    const MX = G.mx || {}, TR = MX.tr || {};
    if (G.mx) {
      const nf = v => Math.round(v).toLocaleString("es-AR");
      MX.sol.fmt = nf; MX.nuk.fmt = nf;
      MX.gasto.fmt = v => v >= 1000 ? `US$ ${(v / 1000).toLocaleString("es-AR", { maximumFractionDigits: v < 10000 ? 1 : 0 })} mil M` : `US$ ${nf(v)} M`;
      MX.sol.det = n => { const x = MX.sol.v[n] || {}; return [x.r ? "reservistas " + nf(x.r) : "", x.p ? "paramilitares " + nf(x.p) : ""].filter(Boolean).join(" · "); };
      MX.gasto.det = n => { const x = MX.gasto.v[n] || {}; return x.p != null ? String(x.p).replace(".", ",") + "% del PIB" : ""; };
      MX.nuk.det = n => { const x = (MX.nuk.tx || {})[n]; return x ? x.l : ""; };
    }
    let nsub = "ojivas";
    const MODE_TXT = {
      bloques: "Dos grandes bloques, Occidente y Eurasia, con sus divisiones internas, y los países no alineados. La línea gruesa marca el borde de cada bloque.",
      mil: G.idx.mil.desc, int: G.idx.int.desc, eco: G.idx.eco.desc, o_mil: (OR.mil || {}).desc, o_eco: (OR.eco || {}).desc, o_pol: (OR.pol || {}).desc, sol: (MX.sol || {}).desc, gasto: (MX.gasto || {}).desc, nuk: (MX.nuk || {}).desc };
    const memb = {}; for (const cat in OR) for (const [id, nm, col, ms] of OR[cat].o) for (const m of ms) (memb[m] = memb[m] || []).push([cat, id, nm, col]);
    let org = null;
    app.innerHTML = `
      <div class="home-head"><div><h1>Mapa geopolítico</h1>
      <p>Arrastrá el globo para girarlo. Tocá un país para ver su bloque y sus tres índices de riesgo.</p></div></div>
      <div class="geo-bar"><div class="chips" role="group" aria-label="Capa">${MODES.map(([k, l], i) => `<button type="button" class="chip${i ? "" : " on"}" data-mode="${k}">${l}</button>`).join("")}</div>
        <label class="check"><input type="checkbox" id="gLines" checked> Límites de bloques</label>
        <div class="chips geo-orgs" id="gOrgs" role="group" aria-label="Organización" hidden></div>
        <label class="check"><input type="checkbox" id="gSpin" checked> Girar solo</label></div>
      <div class="panel geomod">
        <div class="geo-stage"><svg id="gSvg" viewBox="0 0 800 800" role="img" aria-label="Globo terráqueo con bloques y riesgos"></svg>
          <div class="geo-zoom"><button type="button" class="btn" id="gIn" aria-label="Acercar">+</button><button type="button" class="btn" id="gOut" aria-label="Alejar">−</button>
          <button type="button" class="btn" id="gReset" title="Volver a la vista inicial">⟲</button></div></div>
        <div class="geo-side"><p class="geo-mtxt" id="gMtxt"></p><div id="gLeg"></div><div id="gInfo" class="geo-info"><p class="muted">Tocá un país en el globo.</p></div></div>
      </div>
      <div class="section-title"><h2>Ranking</h2><span id="gRankT"></span></div>
      <div class="panel gp" id="gRank"></div>
      <div class="meth-note prose">${G.method}</div>`;
    const svg = document.getElementById("gSvg"), S = 800;
    const proj = d3.geoOrthographic().scale(370).translate([S / 2, S / 2]).clipAngle(90).rotate([-20, -25]).precision(0.6);
    const path = d3.geoPath(proj), grat = d3.geoGraticule10();
    const obj = window.WORLD.objects.countries;
    const geoms = obj.geometries;
    const feats = FEATURES;
    const info = n => G.c[n] || { b: "na" };
    const subOf = n => (G.c[n] && G.c[n].b) || "na";
    const blocOf = n => SUB[subOf(n)][0];
    const mesh = k => topojson.merge(window.WORLD, geoms.filter(g => (k.length === 2 ? subOf(g.properties.name) === k : blocOf(g.properties.name) === k)));
    const subMesh = Object.keys(SUB).filter(k => k !== "na").map(k => [k, mesh(k)]);
    const blocMesh = ["occ", "eur"].map(k => [k, mesh(k)]);
    let mode = "bloques", sel = null;
    const STOPS = [[47, 58, 51], [111, 106, 58], [201, 138, 58], [217, 96, 79], [143, 31, 31]];
    const ramp = v => { if (v == null) return "#2a2c2f"; const x = Math.max(0, Math.min(1, v / 100)) * (STOPS.length - 1), i = Math.min(STOPS.length - 2, Math.floor(x)), f = x - i; return "rgb(" + STOPS[i].map((c, k) => Math.round(c + (STOPS[i + 1][k] - c) * f)).join(",") + ")"; };
    const fillOf = n => {
      if (mode === "bloques") return SUB[subOf(n)][2];
      if (mode === "sol" || mode === "gasto") return logc(mxVal(mode, n), MX[mode].min, MX[mode].max);
      if (mode === "nuk") return nukFill(n);
      if (mode.startsWith("o_")) { const cat = mode.slice(2), ms = (memb[n] || []).filter(x => x[0] === cat && (!org || x[1] === org)); return ms.length ? ms[0][3] : "#26282b"; }
      return ramp((G.idx[mode].v[n] || {}).s);
    };
    const orgMesh = () => { if (!mode.startsWith("o_")) return null; const cat = mode.slice(2); const ids = org ? [org] : OR[cat].o.map(o => o[0]); return ids.map(id => { const o = OR[cat].o.find(x => x[0] === id); const set = new Set(o[3]); return [o[2], topojson.merge(window.WORLD, geoms.filter(g => set.has(g.properties.name)))]; }); };
    let oMesh = null;
    const mxVal = (k, n) => { const v = (MX[k] || {}).v && MX[k].v[n]; return v == null ? null : (typeof v === "object" ? v.a : v); };
    const LS = [[38, 42, 48], [64, 74, 92], [120, 96, 70], [201, 120, 58], [217, 70, 55], [255, 140, 120]];
    const logc = (v, lo, hi) => { if (v == null || v <= 0) return "#26282b"; const x = Math.max(0, Math.min(1, (Math.log10(v) - Math.log10(lo)) / (Math.log10(hi) - Math.log10(lo)))) * (LS.length - 1), i = Math.min(LS.length - 2, Math.floor(x)), f = x - i; return "rgb(" + LS[i].map((c, k) => Math.round(c + (LS[i + 1][k] - c) * f)).join(",") + ")"; };
    const NSUB = { ojivas: "Ojivas", npt: "TNP", ctbt: "Prohibición de ensayos (CTBT)", tpnw: "Prohibición de armas nucleares (TPAN)", iaea: "Inspecciones del OIEA" };
    const NCAT = {
      npt: { parte: ["Parte del TNP", "#4f8f6a"], fuera: ["Nunca lo firmó", "#d0574a"], retirado: ["Se retiró", "#8f1f1f"] },
      ctbt: { ratifico: ["Firmó y ratificó", "#4f8f6a"], firmo: ["Firmó, sin ratificar", "#c9a34a"], desratifico: ["Retiró la ratificación", "#8f1f1f"], no: ["No firmó", "#d0574a"] },
      tpnw: { parte: ["Estado parte", "#4f8f6a"], firmo: ["Firmó, sin ratificar", "#c9a34a"], no: ["No adhirió", "#3a3d42"] },
      iaea: { ap: ["Salvaguardias amplias + Protocolo Adicional", "#4f8f6a"], csa: ["Salvaguardias amplias, sin Protocolo Adicional", "#9fb36a"], voa: ["Acuerdo voluntario (potencias nucleares del TNP)", "#c9a34a"], item: ["Sólo instalaciones puntuales", "#e0814d"], susp: ["Cooperación suspendida", "#d0574a"], none: ["Sin inspecciones", "#8f1f1f"] } };
    const nukFill = n => {
      if (nsub === "ojivas") { const v = mxVal("nuk", n); return v ? logc(v, 30, 6000) : "#26282b"; }
      const s = (TR[n] || {})[nsub]; return s && NCAT[nsub][s] ? NCAT[nsub][s][1] : "#26282b";
    };
    svg.innerHTML = `<defs><radialGradient id="gSea" cx="45%" cy="40%"><stop offset="0" stop-color="#1c2328"/><stop offset="1" stop-color="#101315"/></radialGradient></defs>
      <path id="gSphere" fill="url(#gSea)" stroke="#2a3036"/><path id="gGrat" fill="none" stroke="#1f272c" stroke-width=".6"/>
      <g id="gCountries">${feats.map((f, i) => `<path data-i="${i}" stroke="#121416" stroke-width=".5"/>`).join("")}</g>
      <g id="gSub">${subMesh.map(([k]) => `<path data-k="${k}" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="1" stroke-dasharray="3 2"/>`).join("")}</g>
      <g id="gBloc">${blocMesh.map(([k]) => `<path data-k="${k}" fill="none" stroke="${BL[k][1]}" stroke-width="3.2" stroke-linejoin="round"/>`).join("")}</g>
      <g id="gOrgL"></g><g id="gNukL"></g><path id="gSel" fill="none" stroke="#fff" stroke-width="2"/>`;
    const cps = [...svg.querySelectorAll("#gCountries path")];
    const recolor = () => cps.forEach((p, i) => p.setAttribute("fill", fillOf(feats[i].properties.name)));
    const redraw = () => {
      svg.querySelector("#gSphere").setAttribute("d", path({ type: "Sphere" }));
      svg.querySelector("#gGrat").setAttribute("d", path(grat));
      cps.forEach((p, i) => p.setAttribute("d", path(feats[i]) || ""));
      const lines = document.getElementById("gLines").checked && mode === "bloques";
      svg.querySelector("#gNukL").innerHTML = mode === "nuk" && nsub === "ojivas" ? Object.entries(MX.nuk.tx || {}).map(([n, x]) => { const f = feats.find(q => q.properties.name === n); return f ? `<path d="${path(f) || ""}" fill="none" stroke="${x.c}" stroke-width="2.6" ${x.d ? `stroke-dasharray="${x.d}"` : ""}/>` : ""; }).join("") : "";
      svg.querySelector("#gOrgL").innerHTML = oMesh ? oMesh.map(([c, m]) => `<path d="${path(m) || ""}" fill="none" stroke="${c}" stroke-width="2.2" stroke-linejoin="round"/>`).join("") : "";
      svg.querySelectorAll("#gSub path").forEach((p, j) => p.setAttribute("d", lines ? path(subMesh[j][1]) || "" : ""));
      svg.querySelectorAll("#gBloc path").forEach((p, j) => p.setAttribute("d", lines ? path(blocMesh[j][1]) || "" : ""));
      svg.querySelector("#gSel").setAttribute("d", sel != null ? path(feats[sel]) || "" : "");
    };
    // leyenda
    const legend = () => {
      document.getElementById("gMtxt").textContent = MODE_TXT[mode];
      let h = "";
      if (mode === "bloques") {
        for (const b of ["occ", "eur", "na"]) h += `<div class="geo-lg-b"><b><i class="sw" style="background:${BL[b][1]}"></i>${BL[b][0]}</b>${Object.entries(SUB).filter(([, v]) => v[0] === b).map(([, v]) => `<span><i class="sw" style="background:${v[2]}"></i>${v[1]}</span>`).join("")}</div>`;
        h += `<p class="fnote">${esc(G.blocNote)}</p>`;
      } else if (mode === "sol" || mode === "gasto") {
        const M = MX[mode], r2 = v => { const e = Math.pow(10, Math.floor(Math.log10(v)) - 1); return Math.round(v / e) * e; }, st = [M.min, r2(Math.sqrt(M.min * M.max)), M.max];
        h += `<div class="geo-ramp"><span style="background:linear-gradient(90deg,${[0, .2, .4, .6, .8, 1].map(f => logc(Math.pow(10, Math.log10(M.min) + f * (Math.log10(M.max) - Math.log10(M.min))), M.min, M.max)).join(",")})"></span><div>${st.map(v => `<em>${M.fmt(v)}</em>`).join("")}</div></div><p class="fnote">Escala logarítmica. ${M.src}</p>`;
      } else if (mode === "nuk") {
        h += `<div class="chips geo-nsub">${Object.entries(NSUB).map(([k, l]) => `<button type="button" class="chip${k === nsub ? " on" : ""}" data-nsub="${k}">${l}</button>`).join("")}</div>`;
        if (nsub === "ojivas") {
          h += `<div class="geo-ramp"><span style="background:linear-gradient(90deg,${[30, 100, 300, 1000, 3000, 6000].map(v => logc(v, 30, 6000)).join(",")})"></span><div><em>30</em><em>~400</em><em>6.000</em></div></div>`;
          h += `<div class="geo-lg-b"><b>Borde: transparencia</b>${(MX.nuk.txLeg || []).map(([c, d, l]) => `<span><svg width="26" height="10"><line x1="1" y1="5" x2="25" y2="5" stroke="${c}" stroke-width="3" ${d ? `stroke-dasharray="${d}"` : ""}/></svg>${esc(l)}</span>`).join("")}</div>`;
        } else h += `<div class="geo-lg-b">${Object.values(NCAT[nsub]).map(([l, c]) => `<span><i class="sw" style="background:${c}"></i>${esc(l)}</span>`).join("")}</div>`;
        h += `<p class="fnote">${MX.nuk.src} ${MX.trSrc || ""}</p>`;
      } else if (mode.startsWith("o_")) {
        const cat = mode.slice(2);
        h += OR[cat].o.map(([id, nm, col, ms, nt]) => `<div class="geo-org${org && org !== id ? " dim" : ""}" data-org="${id}"><b><i class="sw" style="background:${col}"></i>${esc(nm)} <small>${ms.length}</small></b>${nt ? `<span>${esc(nt)}</span>` : ""}</div>`).join("");
        h += `<p class="fnote">Membresías a octubre de 2026. Los países que integran varias organizaciones se pintan con la primera de la lista; su ficha muestra todas.</p>`;
      } else {
        h += `<div class="geo-ramp"><span style="background:linear-gradient(90deg,${[0, 25, 50, 75, 100].map(ramp).join(",")})"></span><div><em>0 · bajo</em><em>100 · extremo</em></div></div><p class="fnote">${G.idx[mode].src}</p>`;
      }
      document.getElementById("gLeg").innerHTML = h;
      if (["sol", "gasto", "nuk"].includes(mode)) {
        const M = MX[mode], rr = Object.keys(M.v).map(n => [n, mxVal(mode, n)]).filter(x => x[1]).sort((a, b) => b[1] - a[1]).slice(0, 25);
        document.getElementById("gRankT").textContent = M.rankT;
        document.getElementById("gRank").innerHTML = `<table class="gp-t"><thead><tr><th>#</th><th>País</th><th>Bloque</th><th>${M.unit}</th><th></th><th>Detalle</th></tr></thead><tbody>${rr.map(([n, v], i) => `<tr data-n="${esc(n)}"><td class="num">${i + 1}</td><td>${esc(G.es[n] || n)}</td><td>${esc(SUB[subOf(n)][1])}</td><td class="num">${M.fmt(v)}</td><td class="barc"><i style="width:${Math.max(2, v / rr[0][1] * 100)}%;background:${mode === "nuk" ? logc(v, 30, 6000) : logc(v, M.min, M.max)}"></i></td><td class="rk-s">${esc(M.det ? M.det(n) : "")}</td></tr>`).join("")}</tbody></table>`;
        return;
      }
      const rk = G.idx[mode] ? mode : "mil";
      const rows = Object.entries(G.idx[rk].v).filter(([, v]) => v.s != null).sort((a, b) => b[1].s - a[1].s).slice(0, 25);
      const lab = rk;
      document.getElementById("gRankT").textContent = `Los 25 países con mayor ${G.idx[lab].name.toLowerCase()}`;
      document.getElementById("gRank").innerHTML = `<table class="gp-t"><thead><tr><th>#</th><th>País</th><th>Bloque</th><th>Índice</th><th></th><th>Base</th></tr></thead><tbody>${rows.map(([n, v], i) => `<tr data-n="${esc(n)}"><td class="num">${i + 1}</td><td>${esc(G.es[n] || n)}</td><td>${esc(SUB[subOf(n)][1])}</td><td class="num">${v.s}</td><td class="barc"><i style="width:${v.s}%;background:${ramp(v.s)}"></i></td><td class="rk-s">${esc(v.why || "")}</td></tr>`).join("")}</tbody></table>`;
    };
    const note = (n, c) => {
      const ms = memb[n] || [], conf = CONFLICTS.filter(cf => cf.roles.some(r => r.c === n && (!r.to || r.to >= META.updated)));
      const hi = ["mil", "int", "eco"].map(k => [k, (G.idx[k].v[n] || {}).s]).filter(x => x[1] != null).sort((a, b) => b[1] - a[1])[0];
      const lv = s => s >= 75 ? "muy alto" : s >= 55 ? "alto" : s >= 35 ? "moderado" : "bajo";
      let txt = c.n ? c.n + " " : "";
      if (!c.n) txt += conf.length ? `Involucrado en ${conf.length === 1 ? "el conflicto" : "los conflictos"} ${conf.map(x => x.name).join(", ")}. ` : "Sin participación en los conflictos que sigue el monitor. ";
      if (hi) txt += `Su mayor riesgo es el ${G.idx[hi[0]].name.replace("Riesgo ", "")} (${lv(hi[1])}, ${hi[1]}).`;
      return `<p class="geo-note">${esc(txt)}</p>${ms.length ? `<p class="geo-mem">${ms.map(x => `<span style="border-color:${x[3]}">${esc(x[2])}</span>`).join("")}</p>` : ""}`;
    };
    const mxInfo = n => {
      if (!G.mx) return "";
      const s = mxVal("sol", n), g = (MX.gasto.v || {})[n], k = (MX.nuk.v || {})[n], tr = TR[n] || {};
      const it = [];
      if (s) it.push(["Soldados en actividad", MX.sol.fmt(s) + ((MX.sol.v[n] || {}).r ? ` · reservistas ${MX.sol.fmt(MX.sol.v[n].r)}` : "")]);
      if (g) it.push(["Gasto en defensa", MX.gasto.fmt(g.a) + (g.p != null ? ` · ${String(g.p).replace(".", ",")}% del PIB` : "")]);
      if (k) it.push(["Ojivas nucleares", `${MX.nuk.fmt(k.a)}${k.dep ? ` (${MX.nuk.fmt(k.dep)} desplegadas)` : ""}`]);
      const badge = (cat, lab) => tr[cat] && NCAT[cat][tr[cat]] ? `<span style="border-color:${NCAT[cat][tr[cat]][1]}"><b>${lab}</b> ${esc(NCAT[cat][tr[cat]][0])}</span>` : "";
      const tx = (MX.nuk.tx || {})[n];
      return `<div class="geo-mx">${it.map(([a, b]) => `<div><span>${a}</span><b>${esc(b)}</b></div>`).join("")}</div>
        <div class="geo-tr">${badge("npt", "TNP")}${badge("ctbt", "CTBT")}${badge("tpnw", "TPAN")}${badge("iaea", "OIEA")}${tr.zona ? `<span style="border-color:#4f8f6a"><b>Zona libre</b> ${esc(tr.zona)}</span>` : ""}</div>
        ${tx ? `<p class="geo-note">${esc(tx.l)}</p>` : ""}${tr.nota ? `<p class="geo-note">${esc(tr.nota)}</p>` : ""}`;
    };
    const showInfo = i => {
      sel = i; const n = feats[i].properties.name, c = info(n), sb = SUB[subOf(n)];
      const row = k => { const v = G.idx[k].v[n] || {}; return `<div class="geo-ix"><span>${G.idx[k].name}</span><b style="color:${ramp(v.s)}">${v.s != null ? v.s : "s/d"}</b><div class="geo-bar-i"><i style="width:${v.s || 0}%;background:${ramp(v.s)}"></i></div><small>${esc(v.why || "Sin dato")}</small></div>`; };
      const conf = CONFLICTS.filter(cf => cf.roles.some(r => r.c === n && (!r.to || r.to >= META.updated))).map(cf => `<a href="#c-${cf.id}">${esc(cf.name)}</a>`);
      document.getElementById("gInfo").innerHTML = `<h3>${esc(G.es[n] || n)}</h3><p class="geo-bl"><i class="sw" style="background:${sb[2]}"></i>${esc(BL[sb[0]][0])}${sb[1] !== BL[sb[0]][0] ? " · " + esc(sb[1]) : ""}</p>${note(n, c)}${row("mil")}${row("int")}${row("eco")}${mxInfo(n)}${conf.length ? `<p class="geo-conf">En el monitor: ${conf.join(", ")}</p>` : ""}`;
      redraw();
    };
    // interacción
    let spin = true, last = null, raf = null;
    const loop = t => { if (spin && document.getElementById("gSpin").checked) { const r = proj.rotate(); proj.rotate([r[0] + 0.12, r[1]]); redraw(); } raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    const pt = e => { const r = svg.getBoundingClientRect(); return [(e.clientX - r.left) / r.width * S, (e.clientY - r.top) / r.height * S]; };
    let down = null, moved = false;
    svg.addEventListener("pointerdown", e => { down = { p: pt(e), r: proj.rotate() }; moved = false; spin = false; svg.setPointerCapture(e.pointerId); });
    svg.addEventListener("pointermove", e => {
      if (down) { const p = pt(e), k = 75 / proj.scale() * 2.2; const dx = p[0] - down.p[0], dy = p[1] - down.p[1]; if (Math.abs(dx) + Math.abs(dy) > 3) moved = true; proj.rotate([down.r[0] + dx * k, Math.max(-80, Math.min(80, down.r[1] - dy * k)), down.r[2]]); redraw(); hideTip(); return; }
      if (e.pointerType !== "mouse") return;
      const hi = hit(e); if (hi < 0) return hideTip();
      const n = feats[hi].properties.name, v = mode === "bloques" ? SUB[subOf(n)][1] : mode.startsWith("o_") ? ((memb[n] || []).filter(x => x[0] === mode.slice(2)).map(x => x[2]).join(", ") || "Ninguno") : mode === "nuk" ? (nsub === "ojivas" ? (mxVal("nuk", n) ? MX.nuk.fmt(mxVal("nuk", n)) + " ojivas" : "Sin armas nucleares") : ((NCAT[nsub][(TR[n] || {})[nsub]] || ["Sin dato"])[0])) : (mode === "sol" || mode === "gasto") ? (mxVal(mode, n) ? MX[mode].fmt(mxVal(mode, n)) : "Sin dato") : `${G.idx[mode].name}: ${(G.idx[mode].v[n] || {}).s ?? "s/d"}`;
      showTip(e, `<b>${esc(G.es[n] || n)}</b><span class="d">${esc(v)}</span>`);
    });
    const hit = e => { const ll = proj.invert(pt(e)); if (!ll || isNaN(ll[0])) return -1; const c = proj.rotate(); if (d3.geoDistance(ll, [-c[0], -c[1]]) > Math.PI / 2) return -1; let best = -1, ba = Infinity; feats.forEach((f, i) => { if (d3.geoContains(f, ll)) { const a = d3.geoArea(f); if (a < ba) { ba = a; best = i; } } }); return best; };
    svg.addEventListener("pointerup", e => { const wasDrag = moved; down = null; if (wasDrag) return; const i = hit(e); if (i >= 0) { spin = false; document.getElementById("gSpin").checked = false; showInfo(i); } });
    svg.addEventListener("pointerleave", hideTip);
    svg.addEventListener("wheel", e => { e.preventDefault(); proj.scale(Math.max(250, Math.min(2400, proj.scale() * (e.deltaY < 0 ? 1.12 : 0.89)))); redraw(); }, { passive: false });
    document.getElementById("gIn").onclick = () => { proj.scale(Math.min(2400, proj.scale() * 1.3)); redraw(); };
    document.getElementById("gOut").onclick = () => { proj.scale(Math.max(250, proj.scale() / 1.3)); redraw(); };
    document.getElementById("gReset").onclick = () => { proj.scale(370).rotate([-20, -25]); redraw(); };
    document.getElementById("gLines").onchange = redraw;
    document.getElementById("gSpin").onchange = e => { spin = e.target.checked; };
    const setMode = m => { mode = m; org = null; nsub = "ojivas"; oMesh = orgMesh(); app.querySelectorAll("[data-mode]").forEach(x => x.classList.toggle("on", x.dataset.mode === m)); recolor(); legend(); redraw(); if (sel != null) showInfo(sel); };
    app.querySelectorAll("[data-mode]").forEach(b => b.onclick = () => setMode(b.dataset.mode));
    document.getElementById("gLeg").addEventListener("click", e => { const ns = e.target.closest("[data-nsub]"); if (ns) { nsub = ns.dataset.nsub; recolor(); legend(); redraw(); return; } const d = e.target.closest("[data-org]"); if (!d) return; org = org === d.dataset.org ? null : d.dataset.org; oMesh = orgMesh(); recolor(); legend(); redraw(); });
    document.getElementById("gRank").addEventListener("click", e => { const tr = e.target.closest("tr[data-n]"); if (!tr) return; const i = feats.findIndex(f => f.properties.name === tr.dataset.n); if (i < 0) return; const c = d3.geoCentroid(feats[i]); spin = false; document.getElementById("gSpin").checked = false; proj.rotate([-c[0], -c[1]]); showInfo(i); svg.scrollIntoView({ block: "center", behavior: "smooth" }); });
    recolor(); legend(); redraw();
    activeMap = { destroy: () => { cancelAnimationFrame(raf); } };
  }

  /* ============================== METODOLOGÍA ============================== */
  function renderMethod() {
    app.innerHTML = `
      <div class="home-head"><div><h1>Metodología y propuesta</h1>
      <p>Cómo se eligen los conflictos, cómo se mide la alerta y cómo funcionaría la actualización diaria cuando el sitio pase al repositorio.</p></div></div>
      <div class="meth">
        <div class="prose">
          <h3>Criterio de selección</h3>
          <p>Entra al monitor un conflicto que cumpla al menos dos de estas condiciones: uso sostenido de fuerza militar o paramilitar organizada; participación directa o indirecta de una potencia (EE.UU., Rusia, China) o de varios Estados; efecto sobre rutas comerciales, energía o mercados globales; riesgo creíble de escalada interestatal.</p>
          <p>Quedan fuera los litigios que hoy son solo diplomáticos, como Malvinas, Esequibo (salvo que escale) o Gibraltar, y la violencia criminal sin capacidad de disputar el control territorial al Estado.</p>

          <h3>Conflictos incluidos</h3>
          <div class="tbl"><table><thead><tr><th>Conflicto</th><th>Estado</th><th>Nivel</th><th>Alcance</th></tr></thead><tbody>${CONFLICTS.slice().sort((x, y) => y.level - x.level).map(c => `<tr><td><a href="#c-${c.id}">${esc(c.name)}</a></td><td>${esc(c.status)}</td><td>${c.level}</td><td>${esc(c.sub)}</td></tr>`).join("")}</tbody></table></div>

          <h3>Enfoque editorial</h3>
          <p>Cada conflicto tiene una tesis explícita del monitor y una sección de claves fuera del relato dominante. Cada afirmación lleva su nivel de evidencia (documentado, indicios sólidos o hipótesis) y, cuando corresponde, la fuente. La lectura dominante se resume al final para que el lector vea con qué discute el enfoque. Esta capa se edita a mano y nunca la modifica la actualización automática.</p>
          <h3>Víctimas y daños</h3>
          <p>Cada cifra indica bando, categoría (civiles, militares, total), fecha de corte y fuente, y se marca si es independiente (ONU, Banco Mundial, ACLED, conteos periodísticos con nombre y apellido) o un dato de una de las partes. Donde no hay una estimación confiable se dice explícitamente. Las cifras de las partes se muestran porque a veces son las únicas disponibles, pero no se mezclan con las independientes.</p>
          <h3>Mapa del frente</h3>
          <p>Para Rusia–Ucrania se usa la serie diaria de DeepStateMap desde julio de 2024 (una foto por semana), con el área ocupada calculada en proyección equivalente y las zonas ganadas y perdidas en cada período de 28 días. Para 2022–2024 se usan 16 fechas clave reconstruidas a partir de las evaluaciones del ISW (precisión de 5–10 km), marcadas con rayado. Kursk se muestra con polígonos esquemáticos y cifras del ISW. Para Sudán y Myanmar no existen series abiertas de control territorial: se compara el inicio con hoy por estado o región, como aproximación del control mayoritario.</p>
          <h3>Nivel de alerta</h3>
          <p>Cada conflicto y cada frente tiene un nivel de 1 a 5. El nivel se calcula con reglas sobre los hechos del día (tipos de evento, víctimas, actores nuevos, ruptura de treguas) y se puede corregir a mano. Una alerta se publica en el bloque superior cuando un conflicto sube de nivel, cuando cae o se firma una tregua, o cuando entra un actor nuevo.</p>

          <h3>Modelo de datos</h3>
          <p>Cada conflicto es un archivo con: resumen, cifras clave, bandos, frentes, actores no estatales, <em>roles de países con fecha de inicio y fin</em> (lo que permite que el mapa cambie con la línea de tiempo), hechos georreferenciados, cronología histórica, capítulos de análisis, lecturas alternativas con nivel de evidencia y fuentes.</p>

          <h3>Actualización diaria</h3>
          <ol>
            <li><strong>06:00 ART:</strong> una tarea programada (GitHub Actions o una tarea programada de Claude) junta las novedades de las últimas 24 horas: agencias, ISW, ACLED, ReliefWeb, CENTCOM y medios regionales.</li>
            <li>Un modelo de lenguaje propone hechos nuevos con el esquema del sitio (fecha, coordenadas, tipo, fuente) y cambios de nivel o de rol de países.</li>
            <li>Un validador revisa formato, fechas y duplicados. Los cambios de nivel 4–5 y las lecturas alternativas quedan como <em>pull request</em> para tu aprobación; el resto se publica solo.</li>
            <li>GitHub Pages reconstruye el sitio y la marca de \"Actualizado\" cambia.</li>
          </ol>

          <h3>Estructura del repositorio</h3>
          <pre class="tree">monitor-conflictos/
├── index.html
├── css/styles.css
├── js/app.js
├── data/
│   ├── meta.json            · fecha de corte y alertas
│   ├── candidates.json
│   ├── world-50m.json       · Natural Earth
│   └── conflicts/
│       ├── medio-oriente.json
│       ├── rusia-ucrania.json
│       └── …
├── scripts/
│   ├── fetch_news.py        · fuentes del día
│   ├── propose_events.py    · extracción con LLM
│   └── validate.py
└── .github/workflows/daily.yml</pre>

          <h3>Fuentes por hecho y capas del mapa</h3>
          <p>Cada hecho del mapa lleva un enlace a la nota o al informe del que sale. En Medio Oriente se dibuja de forma esquemática la franja del sur del Líbano que ocupa Israel (unos 650 km², situación al 16-jul-2026). La línea amarilla de Gaza se informa como cifra (entre 60 y 64% de la Franja bajo control israelí) porque no hay un trazado abierto y verificable. Tampoco hay datos abiertos de control por municipio en Myanmar ni de las líneas de frente en Yemen, así que no se dibujan.</p>
          <h3>Indicadores de tensión</h3>
          <p>En los conflictos sin combates abiertos (Taiwán, Corea, Venezuela, Cuba, India–Pakistán) se grafican indicadores de presión: incursiones aéreas, pruebas de misiles, ataques a lanchas, sanciones o incidentes en la Línea de Control, según los datos que haya.</p>
          <h3>Rendimiento</h3>
          <p>El mapa del frente de Ucrania (unos 3 MB) se carga recién al abrir esa ficha, y el mapa mundial se simplificó, así que la portada pesa bastante menos. La portada tiene un buscador y filtros por región y por nivel de alerta.</p>
          <h3>Próximos pasos</h3>
          <ul>
            <li>Subir el sitio a un repositorio de GitHub y activar la actualización diaria.</li>
            <li>Reemplazar fuentes secundarias (Wikipedia) por fuentes primarias.</li>
            <li>Completar huecos de las series: RDC 2024 y años sueltos de Myanmar.</li>
          </ul>
        </div>
        <aside class="aside-box">
          <h4>Escala de alerta</h4>
          ${[5, 4, 3, 2, 1].map(l => `<div class="lvrow">${meter(l)}<div><b>${l} · ${LV_LABEL[l]}</b><span>${{ 5: "Combates o ataques de gran escala, varios frentes o ruptura de tregua.", 4: "Combates sostenidos o ataques regulares.", 3: "Incidentes armados aislados, pruebas militares, movilizaciones.", 2: "Coerción sin combate: bloqueos, maniobras, amenazas.", 1: "Disputa sin actividad militar relevante." }[l]}</span></div></div>`).join("")}
          <h4 style="margin-top:18px">Roles en el mapa</h4>
          ${ROLE_ORDER.map(r => `<div class="lvrow"><span class="pill" style="border-color:${r === "Z" ? "#8a4a46" : "var(--role-" + r + ")"}">${r}</span><div><b>${ROLE_LABEL[r]}</b><span>${{ A: "Beligerante principal del primer bando.", A2: "Aliado militar, alineado o que aloja fuerzas.", B: "Beligerante principal del segundo bando.", B2: "Aliado militar o alineado.", M: "Neutral, mediador o con posición ambigua.", Z: "Territorio donde se combate sin que su Estado sea parte plena." }[r]}</span></div></div>`).join("")}
        </aside>
      </div>`;
  }

  const setTopH = () => document.documentElement.style.setProperty("--topH", document.querySelector(".topbar").offsetHeight + "px");
  window.addEventListener("resize", setTopH); setTopH();
  renderAlerts();
  route();
})();
