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
    us: { mb: 282.2, cap: 714, date: "2026-10-30", peak2026: 415.4, peakDate: "2026-03-20",
      note: "Nivel más bajo desde 1982. Bajó 133,2 millones de barriles desde marzo por la liberación de emergencia ante el cierre de Ormuz.",
      src: "EIA, informe semanal", u: "https://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?n=PET&s=WCSSTUS1&f=W" },
    iea: { pledged: 400, released: 330, date: "2026-10-16",
      note: "Liberación coordinada récord de los 32 países de la AIE acordada el 11-mar-2026; en octubre se aceleró el resto, con prioridad para el diésel.",
      src: "AIE", u: "https://www.iea.org/news/iea-member-countries-to-carry-out-largest-ever-oil-stock-release-amid-market-disruptions-from-middle-east-conflict" },
    countries: [
      { n: "China", mb: 1492, est: true, d: "2026-T2", s: "EIA (estimación; China no publica la cifra)" },
      { n: "Japón", mb: 380, days: 176, d: "2026-07-31", s: "METI" },
      { n: "Estados Unidos", mb: 282.2, d: "2026-10-30", s: "EIA" },
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
  summary: "El vórtice polar del hemisferio norte se está debilitando a un ritmo sin precedentes para la época: los modelos anticipan una inversión de los vientos estratosféricos (un calentamiento súbito) en la primera quincena de noviembre, la más temprana registrada. Llega cuando Europa tiene sus reservas de gas en el nivel más bajo para esta fecha desde que hay registros, por el cierre de Ormuz. Un frío intenso en EE.UU., Europa o Asia dispararía el consumo de gas y electricidad y la competencia por el GNL.",
  vortex: {
    u: 0.75, uDate: "2026-11-06", threshold: 0,
    status: "0,75 m/s el 6 de noviembre (último dato analizado de la NASA), contra una media de 26,3 para la fecha y muy por debajo del mínimo registrado para ese día desde 1979 (13,8): sigue en récord. Repuntó apenas desde los 0,3 m/s del 5, el valor más bajo de la serie hasta ahora. La inversión sigue pronosticada, todavía no observada",
    forecast: "La corrida más reciente del modelo GEOS de la NASA lleva el viento a 2,7 m/s el 7, 2,1 el 8 y 0,8 el 9, y lo pasa a negativo del 10 al 12, con un mínimo de −3,6 m/s el 11 (−1,3 el 10 y −2,5 el 12); vuelve a ser positivo el 13 (2,1) y sube a 6,3 el 15 y 8,1 el 17. Según el servicio Polar Vortex Earth (7-nov), los 50 miembros del ensamble ECMWF muestran la inversión antes del 21 de noviembre. Severe Weather Europe (4-nov) prevé una recuperación a mediados de noviembre y una posible segunda inversión la semana siguiente, que trata como parte del mismo evento. Judah Cohen (AER, 2-nov) no descarta que el calentamiento llegue en etapas, y el Met Office británico (5-nov) espera una inversión relativamente débil y breve.",
    probs: [["ECMWF: 50 de 50 miembros con inversión antes del 21-nov (Polar Vortex Earth, 7-nov)", 100], ["SWE: ECMWF y GEFS, todos los miembros con inversión algún día (4-nov)", 100], ["ECMWF, inversión antes del 11-nov (29-oct)", 96], ["WCS: ECMWF EPS, inversión algún día (2-nov)", 82], ["GEFS de EE.UU. (29-oct)", 71], ["WCS: AIFS-ENS (2-nov)", 61], ["AIFS del ECMWF (29-oct)", 37]],
    record: "El calentamiento súbito más temprano registrado desde 1958 fue el 28 de noviembre. Este lo superaría por más de tres semanas.",
    impacts: "Los efectos en superficie suelen llegar entre dos y seis semanas después (World Climate Service). Andrew Charlton-Perez (Universidad de Reading, 6-nov) dice que nunca se observó un calentamiento súbito tan temprano y ve más riesgo de frío en Escandinavia, las Islas Británicas, Alemania y Polonia, con mucha incertidumbre. Según FOX Weather (6-nov), los modelos todavía no muestran irrupciones de aire frío importantes: el aire más frío está sobre Europa del Este y Siberia, y América del Norte sigue mucho más cálida que lo normal. Severe Weather Europe, a partir de años con calentamiento temprano y El Niño fuerte, sugiere frío en Europa en diciembre y en el centro y este de EE.UU. en enero, aunque el Súper Niño puede tapar la señal. La NOAA favorece temperaturas sobre lo normal en el norte de EE.UU. hasta diciembre, y el Met Office descarta por ahora una helada general en el Reino Unido. Los modelos estacionales marcan un segundo debilitamiento, más fuerte, entre enero y febrero de 2027.",
    oct: { mean: 18.99, src: "https://ozonewatch.gsfc.nasa.gov/meteorology/figures/merra2/wind/u60n_10_10_merra2.txt", v: [[1979,17.66],[1980,16.66],[1981,18.06],[1982,19.81],[1983,22.09],[1984,18.45],[1985,20.95],[1986,22.37],[1987,19.32],[1988,21.40],[1989,18.01],[1990,23.08],[1991,22.79],[1992,18.94],[1993,16.36],[1994,21.53],[1995,22.81],[1996,20.71],[1997,22.72],[1998,18.66],[1999,19.08],[2000,20.23],[2001,21.40],[2002,21.28],[2003,14.59],[2004,17.75],[2005,18.24],[2006,14.82],[2007,14.69],[2008,21.30],[2009,19.65],[2010,18.49],[2011,16.50],[2012,19.85],[2013,16.10],[2014,16.81],[2015,20.76],[2016,17.02],[2017,18.31],[2018,22.03],[2019,20.38],[2020,17.82],[2021,15.30],[2022,17.26],[2023,20.08],[2024,16.93],[2025,13.42]] },
    src: [["NASA Ozone Watch (MERRA-2 y GEOS)", "https://ozonewatch.gsfc.nasa.gov/meteorology/figures/merra2/wind/u60n_10_2026_merra2.txt"], ["Judah Cohen (AER)", "https://published.aer.com/aoblog/pdfs/AO_PV_Analysis_2026-11-02.pdf"], ["World Climate Service", "https://www.worldclimateservice.com/polar-vortex-forecast-november-2026-ssw/"], ["Severe Weather Europe", "https://www.severe-weather.eu/global-weather/polar-vortex-split-record-early-stratospheric-warming-event-november-2026-united-states-canada-europe-fa/"]]
  },
  energy: [
    { k: "Reservas de gas de la UE", v: "72,7%", n: "8-nov-2026 (72,65%) · en extracción neta desde fines de octubre (máximo de la temporada: 74,96%) · 72,98% el 6-nov, 16,6 puntos debajo del promedio de 5 años para la fecha (≈ 90%) y el nivel más bajo para la época desde 2013 · Alemania empezó el invierno en su mínimo histórico", src: "GIE AGSI+ vía InstaForex y TASS", u: "https://www.instaforex.com/forex-news/3281770", bar: 72.7, ref: 90 },
    { k: "Gas en Europa (TTF)", v: "€85,6/MWh", n: "cierre del 6-nov-2026 (€85,59), mínimo de dos semanas y ≈ −15% en la semana · el lunes 9 abrió algo arriba de €86 por dudas sobre la negociación EE.UU.–Irán, el frío, el poco viento y fallas en las exportaciones noruegas", src: "Trading Economics / InstaForex", u: "https://www.instaforex.com/forex-news/3281770" },
    { k: "Gas en EE.UU. (Henry Hub)", v: "≈ US$ 3,01/MMBtu", n: "9-nov-2026 a la mañana (futuro NYMEX del mes cercano), casi igual que el cierre de US$ 2,998 del 6-nov · producción de noviembre: 111,2 bcfd · flujo a las terminales de GNL: 18,2 bcfd · EE.UU. abastece la mayor parte del GNL que compra Europa", src: "OilPriceAPI", u: "https://www.oilpriceapi.com/live/natural-gas-price" },
    { k: "Gas almacenado en EE.UU.", v: "3.801 Bcf", n: "30-oct-2026 · +77 Bcf en la semana · 1,4% sobre el promedio de 5 años y 2,8% debajo de 2025 · próximo informe: 12-nov", src: "EIA vía IndexBox", u: "https://www.indexbox.io/blog/eia-reports-77-bcf-weekly-build-in-lower-48-natural-gas-storage-1/" }
  ],
  watch: ["Si la inversión de los vientos se confirma entre el 10 y el 12 de noviembre, como pronostica la NASA.", "Olas de frío en Europa y el este de EE.UU. a fines de noviembre y en diciembre.", "Ritmo de extracción de las reservas europeas y precio del TTF.", "Récords de demanda eléctrica y cortes."],
  news: [
    { d: "2026-11-09", h: "El gas europeo arranca la semana arriba de €86", x: "El TTF subió levemente el lunes sin alejarse del mínimo de dos semanas: pesan las dudas sobre la negociación con Irán, los cortes de GNL del Golfo, el frío y el poco viento, que aceleran la extracción, y fallas en las exportaciones noruegas.", u: "https://www.instaforex.com/forex-news/3281770", st: "InstaForex" },
    { d: "2026-11-09", h: "El viento del vórtice sigue en récord y la inversión se mantiene para el 10 al 12", x: "El dato analizado de la NASA del 6 de noviembre (0,75 m/s) vuelve a ser el más bajo para la fecha desde 1979; la nueva corrida del modelo GEOS lleva el viento a −3,6 m/s el 11 y lo hace volver a valores positivos el 13.", u: "https://ozonewatch.gsfc.nasa.gov/meteorology/figures/merra2/wind/u60n_10_2026_merra2.txt", st: "NASA Ozone Watch" },
    { d: "2026-11-08", h: "Ola de frío en China: bajas de más de 10 °C en 15 provincias", x: "Entre el 8 y el 10 de noviembre la temperatura cae de 6 a 12 °C, y más de 14 °C en algunos puntos; Qinhuangdao activó su alerta máxima por ventisca y el tren rápido a Tianjin redujo la velocidad.", u: "https://www.globaltimes.cn/page/202611/1373875.shtml", st: "Global Times" },
    { d: "2026-11-08", h: "Seúl tiene su primera nevada casi dos semanas antes de lo normal", x: "Nevó 12 días antes que el promedio 1991–2020 y fue la primera nevada más temprana desde 2010, con −5,4 °C en Daegwallyeong.", u: "https://www.koreajoongangdaily.com/korea/seouls-first-snow-arrives-nearly-a-month-earlier-as-cold-snap-grips-city/12961275", st: "Korea JoongAng Daily" },
    { d: "2026-11-08", h: "Las reservas de gas de la UE caen debajo del 73%", x: "Según datos de GIE, el gas almacenado bajó a 72,98% el 6 de noviembre, 16,6 puntos debajo del promedio de cinco años y en el nivel más bajo para la época desde 2013, con extracciones diarias récord para la fecha.", u: "https://tass.com/economy/2214435", st: "TASS (datos GIE)" },
    { d: "2026-11-08", h: "El viento del vórtice cae a 0,3 m/s, otro récord para la fecha", x: "El último dato analizado de la NASA (5-nov) es el más bajo para ese día desde 1979, con una media de 26 m/s; la corrida del modelo GEOS mantiene la inversión del 10 al 12 de noviembre, con un mínimo de −3,4 m/s el 11.", u: "https://ozonewatch.gsfc.nasa.gov/meteorology/figures/merra2/wind/u60n_10_2026_merra2.txt", st: "NASA Ozone Watch" },
    { d: "2026-11-07", h: "Los 50 miembros del ensamble europeo ya muestran la inversión del vórtice", x: "Según el servicio Polar Vortex Earth, en la corrida del ECMWF del 7 de noviembre todos los miembros invierten los vientos estratosféricos antes del 21 de noviembre; el 26 de octubre eran 18 de 50. Ningún año entre 1991 y 2020 tuvo una inversión en esa fecha.", u: "https://www.rustourismnews.com/2026/11/07/polar-vortex-forecast-strengthens-as-all-50-models-predict-november-wind-reversal/", st: "Rus Tourism News" },
    { d: "2026-11-07", h: "Las reservas de gas de la UE bajan a 73,4%", x: "Con la extracción neta en marcha, el gas almacenado en la UE cayó a 73,4% el 5 de noviembre y Alemania quedó en 60%, lejos del promedio de cinco años para la fecha.", u: "https://voltstack.energy/insights/eu-gas-storage-tracker-winter-2026", st: "Voltstack (datos GIE AGSI+)" },
  ],
  updated: "2026-11-09"
};
