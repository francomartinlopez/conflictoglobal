/* Indicadores globales de riesgo (portada). La actualización diaria puede refrescar
   el nivel de la SPR (EIA, semanal) y la estimación de DEFCON. */
window.GLOBAL_RISK = {
  clock: {
    seconds: 85, set: "2026-01-27",
    note: "El más cercano a la medianoche desde su creación en 1947. Pesan las armas nucleares, el clima, las amenazas biológicas y la IA.",
    hist: [[1991, 1020], [2007, 300], [2015, 180], [2018, 120], [2020, 100], [2023, 90], [2025, 89], [2026, 85]],
    src: "Bulletin of the Atomic Scientists", u: "https://thebulletin.org/doomsday-clock/"
  },
  defcon: {
    level: 3, since: "2026-07-14", official: false,
    note: "El Pentágono no publica el nivel DEFCON: es secreto. Esto es una estimación de fuentes abiertas, no un dato oficial. Se ajustó a 3 cuando EE.UU. retomó el bloqueo de los puertos iraníes.",
    src: "DefconLevel.com (estimación OSINT, no oficial)", u: "https://www.defconlevel.com/current-level"
  },
  oil: {
    us: { mb: 282.6, cap: 714, date: "2026-10-23", peak2026: 415.4, peakDate: "2026-03-20",
      note: "Nivel más bajo desde 1982. Bajó 132,8 millones de barriles desde marzo por la liberación de emergencia ante el cierre de Ormuz.",
      src: "EIA, informe semanal", u: "https://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?n=PET&s=WCSSTUS1&f=W" },
    iea: { pledged: 400, released: 330, date: "2026-10-16",
      note: "Liberación coordinada récord de los 32 países de la AIE acordada el 11-mar-2026; en octubre se aceleró el resto, con prioridad para el diésel.",
      src: "AIE", u: "https://www.iea.org/news/iea-member-countries-to-carry-out-largest-ever-oil-stock-release-amid-market-disruptions-from-middle-east-conflict" },
    countries: [
      { n: "China", mb: 1492, est: true, d: "2026-T2", s: "EIA (estimación; China no publica la cifra)" },
      { n: "Japón", mb: 380, days: 176, d: "2026-07-31", s: "METI" },
      { n: "Estados Unidos", mb: 282.6, d: "2026-10-23", s: "EIA" },
      { n: "Alemania", mb: 140, days: 92, d: "2026-06", s: "Eurostat" },
      { n: "Francia", mb: 119, days: 88, d: "2026-06", s: "Eurostat" },
      { n: "España", mb: 99, days: 97, d: "2026-06", s: "Eurostat" },
      { n: "Italia", mb: 76, days: 90, d: "2026-06", s: "Eurostat" },
      { n: "Reino Unido", mb: 75, est: true, d: "2026-03-31", s: "DESNZ (estimación)" },
      { n: "Corea del Sur", mb: 69, d: "2026-T2", s: "EIA (sólo reserva estatal)" },
      { n: "Países Bajos", mb: 30, days: 94, d: "2026-06", s: "Eurostat" },
      { n: "India", mb: 21, d: "2026-T2", s: "EIA" }
    ],
    cSrc: "Compilado por World Oil Monitor a partir de EIA, METI, Eurostat y DESNZ", cU: "https://worldoilmonitor.com/reserves"
  }
};
