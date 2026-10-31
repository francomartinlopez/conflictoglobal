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

/* Invierno boreal: vórtice polar y abastecimiento de energía. Lo refresca la actualización diaria. */
window.GLOBAL_RISK.winter = {
  level: 4, levelTxt: "Riesgo alto",
  summary: "El vórtice polar del hemisferio norte se está debilitando a un ritmo sin precedentes para la época: los modelos anticipan una inversión de los vientos estratosféricos (un calentamiento súbito) a comienzos de noviembre, la más temprana registrada. Llega cuando Europa tiene sus reservas de gas en el nivel más bajo para esta fecha desde que hay registros, por el cierre de Ormuz. Un frío intenso en EE.UU., Europa o Asia dispararía el consumo de gas y electricidad y la competencia por el GNL.",
  vortex: {
    u: 19.5, uDate: "2026-10-27", threshold: 0,
    status: "Debilitándose; inversión pronosticada, todavía no observada",
    forecast: "Inversión de los vientos a 10 hPa y 60°N prevista entre el 4 y el 10 de noviembre; el vórtice se partiría en dos núcleos.",
    probs: [["ECMWF (28-oct)", 66], ["GEFS de EE.UU. (27-oct)", 74]],
    record: "El calentamiento súbito más temprano registrado desde 1958 fue el 28 de noviembre. Este lo superaría por más de tres semanas.",
    impacts: "Los efectos en superficie suelen llegar entre una y cuatro semanas después. Los primeros pronósticos muestran frío por debajo de lo normal en el centro y este de EE.UU. y en el oeste, centro y sur de Europa hacia la segunda semana de noviembre. El Súper El Niño podría atenuar el frío en EE.UU. Los modelos estacionales marcan un segundo debilitamiento, más fuerte, entre enero y febrero de 2027.",
    src: [["World Climate Service", "https://www.worldclimateservice.com/polar-vortex-forecast-november-2026-ssw/"], ["Severe Weather Europe", "https://www.severe-weather.eu/global-weather/polar-vortex-split-record-early-stratospheric-warming-event-november-2026-united-states-canada-europe-fa/"]]
  },
  energy: [
    { k: "Reservas de gas de la UE", v: "74,9%", n: "26-oct-2026 · promedio de 5 años: 89,4% · el nivel más bajo para la fecha desde 2011", src: "GIE AGSI+", u: "https://agsi.gie.eu/", bar: 74.9, ref: 89.4 },
    { k: "Gas en Europa (TTF)", v: "≈ €100/MWh", n: "28-oct-2026 · máximo desde diciembre de 2022 · empezó el año cerca de €28", src: "ICE vía TASS", u: "https://tass.com/economy/2209523" },
    { k: "Gas en EE.UU. (Henry Hub)", v: "US$ 3,1/MMBtu", n: "16-oct-2026 · EE.UU. abastece la mayor parte del GNL que compra Europa", src: "JOGMEC vía Global LNG Hub", u: "https://globallnghub.com/?p=20853" },
    { k: "Gas almacenado en EE.UU.", v: "3.644 Bcf", n: "16-oct-2026 · dentro del rango de 5 años", src: "EIA", u: "https://www.oilandgas360.com/?p=1062400" }
  ],
  argentina: "Para la Argentina el golpe es indirecto pero real: un invierno boreal frío encarece el GNL en todo el mundo justo cuando el país todavía depende de cargamentos importados para su invierno de 2027, porque las ampliaciones de gasoductos desde Vaca Muerta no estarán listas antes. A la vez, sube el valor del gas que Vaca Muerta empezará a exportar desde 2027.",
  watch: ["Si la inversión de los vientos se confirma en la primera semana de noviembre.", "Olas de frío en el este de EE.UU. y en Europa a mediados de noviembre.", "Ritmo de extracción de las reservas europeas y precio del TTF.", "Récords de demanda eléctrica y cortes."],
  news: [
    { d: "2026-10-30", h: "Europa entra al invierno con las reservas de gas más bajas en 15 años", x: "Las reservas de la UE rondan el 75%, el nivel más bajo para la fecha desde 2011, y el TTF superó los €100/MWh. Analistas advierten que un invierno frío podría llevar los precios aún más arriba.", u: "https://www.cnbc.com/2026/10/30/europe-gas-prices-winter-energy-costs.html", st: "CNBC" },
    { d: "2026-10-30", h: "Pronostican un calentamiento estratosférico récord", x: "Una meteoróloga del Servicio Meteorológico de EE.UU. dice que el vórtice ya se ve distorsionado y estirado, algo que suele pasar en pleno invierno; un investigador del MIT lo califica de inédito por lo temprano.", u: "https://www.inquirer.com/weather/polar-vortex-stratospheric-warming-philadelphia-weather-20261030.html", st: "The Philadelphia Inquirer" },
    { d: "2026-10-28", h: "El TTF supera los €100/MWh por primera vez en cuatro años", x: "El precio del día siguiente llegó a €100,85/MWh y el contrato de noviembre a €99,25/MWh.", u: "https://tass.com/economy/2209523", st: "TASS" }
  ],
  updated: "2026-10-31"
};
