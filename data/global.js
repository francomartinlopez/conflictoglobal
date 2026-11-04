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
    u: 8.96, uDate: "2026-11-01", threshold: 0,
    status: "9,0 m/s el 1 de noviembre (último dato analizado), contra una media de 24,9 para la fecha y por debajo del mínimo registrado para ese día (11,4): un récord. La inversión sigue pronosticada, todavía no observada",
    forecast: "El pronóstico de la NASA (modelo GEOS, corrida del 1-nov) baja el viento a 3,1 m/s el 3 de noviembre y a 1,1 el 4, lo lleva por debajo de cero el 5 (−0,7) y lo mantiene cerca de cero o negativo hasta el 12, con un mínimo de −2,9 m/s el 9. Severe Weather Europe había centrado la inversión en torno al 4 de noviembre, con el vórtice partido en dos núcleos y la estratosfera a 10 hPa hasta 22 °C por encima de lo normal.",
    probs: [["ECMWF, inversión antes del 11-nov (29-oct)", 96], ["GEFS de EE.UU. (29-oct)", 71], ["AIFS del ECMWF (29-oct)", 37]],
    record: "El calentamiento súbito más temprano registrado desde 1958 fue el 28 de noviembre. Este lo superaría por más de tres semanas.",
    impacts: "Los efectos en superficie suelen llegar entre una y cuatro semanas después. AccuWeather (2-nov) no espera aire ártico en EE.UU. en noviembre: el frío más intenso se dirige a Siberia y Canadá está entre 5 y 11 °C por encima de lo normal; el Centro de Predicción Climática de la NOAA favorece temperaturas sobre lo normal hasta mediados de mes. En Europa, una corrida del ECMWF mostró frío en el oeste, centro y sur hacia el 8 de noviembre. Judah Cohen (MIT) ve más chances de olas de frío y nieve al este de las Rocosas desde fines de noviembre. El Súper El Niño podría atenuar el frío en EE.UU. Los modelos estacionales marcan un segundo debilitamiento, más fuerte, entre enero y febrero de 2027.",
    oct: { mean: 18.99, src: "https://ozonewatch.gsfc.nasa.gov/meteorology/figures/merra2/wind/u60n_10_10_merra2.txt", v: [[1979,17.66],[1980,16.66],[1981,18.06],[1982,19.81],[1983,22.09],[1984,18.45],[1985,20.95],[1986,22.37],[1987,19.32],[1988,21.40],[1989,18.01],[1990,23.08],[1991,22.79],[1992,18.94],[1993,16.36],[1994,21.53],[1995,22.81],[1996,20.71],[1997,22.72],[1998,18.66],[1999,19.08],[2000,20.23],[2001,21.40],[2002,21.28],[2003,14.59],[2004,17.75],[2005,18.24],[2006,14.82],[2007,14.69],[2008,21.30],[2009,19.65],[2010,18.49],[2011,16.50],[2012,19.85],[2013,16.10],[2014,16.81],[2015,20.76],[2016,17.02],[2017,18.31],[2018,22.03],[2019,20.38],[2020,17.82],[2021,15.30],[2022,17.26],[2023,20.08],[2024,16.93],[2025,13.42]] },
    src: [["World Climate Service", "https://www.worldclimateservice.com/polar-vortex-forecast-november-2026-ssw/"], ["Severe Weather Europe", "https://www.severe-weather.eu/global-weather/polar-vortex-split-record-early-stratospheric-warming-event-november-2026-united-states-canada-europe-fa/"]]
  },
  energy: [
    { k: "Reservas de gas de la UE", v: "74,6%", n: "2-nov-2026 · 74,56%, en extracción neta tras el pico de 74,96% del 27-oct · promedio de 5 años para la fecha: ≈ 86% · no llegó a la meta flexibilizada de 80% al 1-nov", src: "GIE AGSI+ vía Trading Economics", u: "https://tradingeconomics.com/commodity/eu-natural-gas", bar: 74.6, ref: 86 },
    { k: "Gas en Europa (TTF)", v: "≈ €92,9/MWh", n: "4-nov-2026 · +1,4% en el día tras dos bajas seguidas (−8,7% el lunes y más de −3% el martes, debajo de €92) por las expectativas de acuerdo entre EE.UU. e Irán · sigue cerca del triple que hace un año", src: "Trading Economics", u: "https://tradingeconomics.com/commodity/eu-natural-gas" },
    { k: "Gas en EE.UU. (Henry Hub)", v: "≈ US$ 2,88/MMBtu", n: "4-nov-2026 · tocó US$ 2,87, mínimo en dos semanas, por pronósticos templados · el flujo hacia las terminales de GNL bajó a 17,7 bcfd en noviembre (18,4 en octubre) · EE.UU. abastece la mayor parte del GNL que compra Europa", src: "Trading Economics", u: "https://tradingeconomics.com/commodity/natural-gas" },
    { k: "Gas almacenado en EE.UU.", v: "3.724 Bcf", n: "23-oct-2026 · +80 Bcf en la semana · 1% sobre el promedio de 5 años y 3,8% debajo de 2025", src: "EIA vía IndexBox", u: "https://www.indexbox.io/blog/eia-reports-80-bcf-weekly-build-in-lower-48-natural-gas-storage/" }
  ],
  watch: ["Si la inversión de los vientos se confirma en la primera semana de noviembre.", "Olas de frío en el este de EE.UU. y en Europa a mediados de noviembre.", "Ritmo de extracción de las reservas europeas y precio del TTF.", "Récords de demanda eléctrica y cortes."],
  news: [
    { d: "2026-11-03", h: "El GNL en Asia, en máximos desde 2022", x: "El precio de referencia JKM superó los US$ 34/MMBtu el 30 de octubre, el nivel más alto desde diciembre de 2022, y aumenta la competencia con Europa por los cargamentos.", u: "https://www.khan.co.kr/en/article/202611031735017/", st: "Kyunghyang Shinmun" },
    { d: "2026-11-03", h: "El gas europeo baja por segundo día y queda debajo de €92", x: "El TTF cayó más de 3% el martes, a su menor nivel en más de una semana, después del −8,7% del lunes, por las expectativas de un acuerdo entre EE.UU. e Irán. Las reservas de la UE estaban al 74,56% el 2 de noviembre, en un mínimo para la fecha.", u: "https://www.tradingview.com/news/te_news:597752:0-european-natural-gas-prices-fall-further/", st: "TradingView (Trading Economics)" },
    { d: "2026-11-02", h: "El viento del vórtice polar cae a un récord para la fecha", x: "El último dato analizado de la NASA da 9,0 m/s a 10 hPa y 60°N el 1 de noviembre, por debajo del mínimo registrado para ese día desde 1979 (11,4) y contra una media de 24,9. El modelo GEOS pronostica la inversión para el 5 de noviembre.", u: "https://github.com/MarcelHerber/climate-dashboard/blob/stratosphere-data/data/stratosphere/u60n_10_2026_merra2.txt", st: "NASA Ozone Watch (MERRA-2/GEOS, copia diaria)" },
    { d: "2026-11-02", h: "AccuWeather: no llega aire ártico a EE.UU. en noviembre pese al vórtice", x: "El frío más intenso se dirige a Siberia y Canadá sigue muy por encima de lo normal; los episodios más fríos en EE.UU. podrían empezar a fines de noviembre y en diciembre.", u: "https://www.accuweather.com/en/weather-forecasts/no-frigid-air-coming-to-us-in-november-despite-polar-vortex-being-on-the-move/1953117", st: "AccuWeather" },
    { d: "2026-11-02", h: "El petróleo cae más de 7% por las expectativas de acuerdo con Irán", x: "El Brent cerró en US$ 104,77 (−7,6%) y el WTI en US$ 96,46, la mayor baja desde julio, después de que Trump y Vance hablaran de avances en la negociación con Teherán.", u: "https://www.nationthailand.com/news/world/40073041", st: "Reuters (vía Nation Thailand)" },
    { d: "2026-11-01", h: "Europa cierra octubre debajo de la meta de reservas y ya extrae gas", x: "Las reservas de la UE quedaron en 74,6% el 31 de octubre, después de tocar 74,96% el 27, y varios países empezaron a retirar gas con la baja de temperaturas. Faltaron más de cinco puntos para la meta flexibilizada de 80% al 1 de noviembre.", u: "https://global-energy-flow.com/storage/", st: "Global Energy Flow / GIE AGSI+" },
    { d: "2026-10-30", h: "El TTF supera los €101/MWh y suma 36% de alza en octubre", x: "El gas europeo llegó a cotizar cerca de €102/MWh, el nivel más alto desde 2022, con las reservas de la UE en 74,9% al 29 de octubre, muy por debajo de lo habitual para la fecha.", u: "https://oilprice.com/Latest-Energy-News/World-News/European-Gas-Tops-101-Euros-for-First-Time-Since-2022.html", st: "OilPrice" },
    { d: "2026-10-30", h: "Europa entra al invierno con las reservas de gas más bajas en 15 años", x: "Las reservas de la UE rondan el 75%, el nivel más bajo para la fecha desde 2011, y el TTF superó los €100/MWh. Analistas advierten que un invierno frío podría llevar los precios aún más arriba.", u: "https://www.cnbc.com/2026/10/30/europe-gas-prices-winter-energy-costs.html", st: "CNBC" },
  ],
  updated: "2026-11-04"
};
