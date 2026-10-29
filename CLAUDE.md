# Monitor de Conflictos (conflictoglobal)

Sitio estático publicado con GitHub Pages desde `main` (raíz). Todo en español rioplatense neutro, con fechas ISO en los datos.
Responsable editorial: Franco Martín López.

## Archivos
- `data/conflicts.js`: `MONITOR_META` (fecha de corte), `ALERTS` y `NOTES` (bloque superior: alertas de conflictos y notas diplomáticas) y los 8 conflictos originales. `conflicts-2.js` y `conflicts-3.js` también suman alertas con `window.ALERTS.push(...)`: al contar el máximo, contalas todas.
- `data/conflicts-2.js` y `data/conflicts-3.js`: el resto de los conflictos (`window.CONFLICTS.push(...)`).
- `data/analysis.js` y `data/analysis-2.js`: **capa editorial** (tesis, historia, lecturas alternativas). **No la toca la actualización automática.**
- `data/toll.js` (víctimas y daños), `data/series.js` (series y `HEADLINE` del panel global), `data/control.js`, `data/front-ua.js`, `data/extra.js` (`EVENT_SOURCES` por índice y `OVERLAYS`).
- `data/global.js`: indicadores de riesgo global de la portada (Reloj del Apocalipsis, DEFCON estimado, reservas estratégicas de petróleo).
- `data/geo.js`: globo geopolítico (bloques y tres índices de riesgo por país). Se regenera a mano; la actualización diaria no lo toca.
- `scripts/validate.js`: validador. `node scripts/validate.js --browser` además abre todas las fichas en Chromium.

## Actualización diaria (tarea programada)
1. Buscá en la web las novedades de las **últimas 24–48 horas** de cada conflicto de `window.CONFLICTS` (ids: medio-oriente, rusia-ucrania, taiwan, corea, mexico, colombia, venezuela, cuba, pakistan-afganistan, sudan, sahel, rdc, myanmar, india-pakistan, haiti). Priorizá agencias (Reuters, AP, AFP), ISW, ACLED, OCHA/ReliefWeb, Al Jazeera, BBC y medios regionales serios. Hacé una búsqueda por conflicto como mínimo.
2. **Revisión de diarios.** Revisá las secciones internacionales de nueve diarios: Argentina (Clarín, La Nación, Infobae), EE.UU. (The New York Times, The Washington Post, The Wall Street Journal) y Europa (El País, Le Monde, The Guardian). Buscá lo que dominó la cobertura de las últimas 24–48 horas, en especial lo diplomático y lo que se discute en la Argentina. Varios de esos sitios no se pueden abrir desde la tarea: en ese caso usá WebSearch con el nombre del diario y el tema, y confirmá cada hecho en una fuente accesible (agencias, Infobae, La Nación); no intentes otras vías para abrirlos. Lo que encuentres va a los eventos y alertas de los conflictos (pasos 3–5) o, si no pertenece a ningún conflicto, a `NOTES` (paso 6).
3. Por cada hecho relevante (ataque significativo, cambio de control, tregua o ruptura, acuerdo, sanción mayor, decisión política clave) **agregá un objeto al final** del array `events` del conflicto. No insertes en el medio ni borres hechos: `EVENT_SOURCES` usa índices.
   Formato: `{ d: "AAAA-MM-DD", lat, lon, t: "aereo|terrestre|naval|atentado|diplomacia|politico", h: "título corto", x: "una o dos frases propias", u: "URL de la fuente", st: "Nombre del medio" }`. Usá `nomap: true` si no hay un lugar preciso. No copies frases de las fuentes: redactá con palabras propias.
   Sólo hechos confirmados por al menos una fuente seria; no dupliques hechos ya cargados. Si no hubo nada relevante, no agregues nada.
4. Actualizá cifras que cambiaron y tengan fuente: `keyFacts` (con fecha en `n`), el estado de `fronts`, `status`/`level` del conflicto si corresponde, y los totales de `data/toll.js` o `HEADLINE` en `data/series.js` sólo si hay una cifra nueva y confiable.
5. `ALERTS`: subí, actualizá o retirá alertas según la situación (máximo 4, ordenadas por nivel). Una alerta entra cuando un conflicto sube de nivel, se rompe o se firma una tregua, o entra un actor nuevo.
6. `NOTES` (notas diplomáticas, debajo de las alertas): hechos de política exterior que no son parte de ningún conflicto del monitor pero tienen peso regional o para la Argentina (crisis entre gobiernos, fugas o asilos de dirigentes, cumbres, rupturas o acuerdos, votos clave en la ONU). Máximo 4, la más reciente primero; retirá las que tengan más de una semana sin novedades. Formato: `{ date: "AAAA-MM-DD", tag: "Crisis diplomática|Cumbre|Acuerdo|ONU|...", countries: ["Brasil", "Argentina"], title, text: "tres a cinco frases propias", u: "URL", st: "Medio" }`. Si una nota sigue viva, actualizá su texto y su fecha en lugar de duplicarla. Si el hecho toca un conflicto del monitor, cargalo además como evento `diplomacia` de ese conflicto.
7. `data/global.js`: actualizá la reserva estratégica de EE.UU. cuando salga el informe semanal de la EIA (miércoles), con su fecha; el avance de la liberación de la AIE si hay dato nuevo; la estimación de DEFCON si DefconLevel.com la cambia (siempre marcada como no oficial); las reservas por país sólo con dato oficial nuevo. El Reloj del Apocalipsis cambia sólo cuando lo anuncia el Bulletin (en enero).
8. `MONITOR_META.updated` = fecha de hoy (ART) y `updatedLabel` = por ejemplo `"28 oct 2026 · 06:00 ART"`. El `edition` no se cambia.
9. Corré `node scripts/validate.js --browser`. Si falla, corregí hasta que pase. Nunca publiques con el validador en rojo.
10. Agregá una línea en `CHANGELOG.md` (arriba de todo) con la fecha y un resumen breve de lo cambiado por conflicto y por nota diplomática.
11. Commit en `main` con el mensaje `Actualización diaria AAAA-MM-DD` y push.

### Límites
- No modificar `data/analysis*.js`, `js/`, `css/` ni `index.html` en la actualización diaria.
- Cifras de víctimas: siempre con fuente, fecha y si es independiente o de una parte; no mezclar.
- Ante dudas sobre un hecho grave o muy disputado, no lo cargues y anotalo en el `CHANGELOG.md` como "pendiente de verificación".
