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
    us: { mb: 279.5, cap: 714, date: "2026-11-06", peak2026: 415.4, peakDate: "2026-03-20",
      note: "Nivel más bajo desde 1982. Bajó 135,9 millones de barriles desde marzo (2,6 millones en la semana al 6 de noviembre) por la liberación de emergencia ante el cierre de Ormuz.",
      src: "EIA, informe semanal", u: "https://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?n=PET&s=WCSSTUS1&f=W" },
    iea: { pledged: 400, released: 330, date: "2026-10-16",
      note: "Liberación coordinada récord de los 32 países de la AIE acordada el 11-mar-2026; en octubre se aceleró el resto, con prioridad para el diésel.",
      src: "AIE", u: "https://www.iea.org/news/iea-member-countries-to-carry-out-largest-ever-oil-stock-release-amid-market-disruptions-from-middle-east-conflict" },
    countries: [
      { n: "China", mb: 1492, est: true, d: "2026-T2", s: "EIA (estimación; China no publica la cifra)" },
      { n: "Japón", mb: 380, days: 176, d: "2026-07-31", s: "METI" },
      { n: "Estados Unidos", mb: 279.5, d: "2026-11-06", s: "EIA" },
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
  summary: "El vórtice polar del hemisferio norte sufrió la inversión de sus vientos estratosféricos (un calentamiento súbito) entre el 10 y el 12 de noviembre, la más temprana registrada; desde el 13 el viento volvió a ser del oeste y se recupera rápido (6,4 m/s el 16, contra una media de 30,1), y la NASA prevé que llegue cerca de lo normal hacia el 25. Sus efectos en superficie podrían notarse desde fines de noviembre, cuando Europa tiene sus reservas de gas en el nivel más bajo para la fecha en más de una década por el cierre de Ormuz (69,8% el 17), aunque el TTF bajó a unos €83 por el GNL récord de EE.UU. y pronósticos más templados. Un frío intenso en EE.UU., Europa o Asia dispararía el consumo de gas y electricidad y la competencia por el GNL.",
  vortex: {
    u: 6.41, uDate: "2026-11-16", threshold: 0,
    status: "La inversión terminó: según los datos analizados de la NASA, el viento a 10 hPa y 60°N fue negativo del 10 al 12 de noviembre (−0,62, −2,94 y −2,12 m/s) y volvió a valores del oeste el 13 (1,99 m/s); el 16 marcó 6,41 m/s, todavía muy por debajo de la media de 30,1 m/s para la fecha. Fue el calentamiento súbito más temprano registrado; el récord anterior era del 28 de noviembre",
    forecast: "El modelo GEOS de la NASA prevé una recuperación rápida: 11,8 m/s el 18, 15,1 el 19, 21,7 el 22 y 25,9 el 26 de noviembre, cerca de la media para la fecha. Judah Cohen (AER) ve el vórtice fortaleciéndose en el GFS, aunque algunas corridas del ECMWF insinúan un nuevo debilitamiento a fines de noviembre o principios de diciembre. Los modelos estacionales marcan otro debilitamiento, más fuerte, entre enero y febrero de 2027.",
    probs: [["ECMWF: 50 de 50 miembros con inversión antes del 15-nov (Polar Vortex Earth, 12-nov)", 100], ["ECMWF: 50 de 50 miembros con inversión antes del 21-nov (Polar Vortex Earth, 7-nov)", 100], ["SWE: ECMWF y GEFS, todos los miembros con inversión algún día (4-nov)", 100], ["ECMWF, inversión antes del 11-nov (29-oct)", 96], ["WCS: ECMWF EPS, inversión algún día (2-nov)", 82], ["GEFS de EE.UU. (29-oct)", 71], ["WCS: AIFS-ENS (2-nov)", 61], ["AIFS del ECMWF (29-oct)", 37]],
    record: "El calentamiento súbito más temprano registrado desde 1958 había sido el 28 de noviembre. Este, con inversión el 10 de noviembre, lo supera por unas dos semanas y media.",
    impacts: "Los efectos en superficie suelen llegar entre dos y seis semanas después (World Climate Service). Judah Cohen (AER, última actualización) espera temperaturas normales o más altas en EE.UU. en las próximas dos semanas, con algo de frío en el este a fines de noviembre y un frío de principios de diciembre posible pero muy incierto; en Europa ve flujo del oeste y tiempo templado, con frío posible en Escandinavia y el Reino Unido a fines de noviembre, y una tendencia de la AO y la NAO a valores negativos que sube el riesgo de frío en diciembre. Para el corto plazo, los pronósticos citados por Price Group (18-nov) prevén calor desde el 19 en las Llanuras, el Medio Oeste y el Noreste de EE.UU. hasta Acción de Gracias. Severe Weather Europe (13-nov) veía la señal bajando a superficie hacia el 22 al 25 de noviembre, con aire frío del sur de Canadá hacia el Medio Oeste y el norte de EE.UU. entre el 25 de noviembre y el 10 de diciembre; weather.com (12-nov) advierte que la cobertura de nieve en América del Norte es la tercera más baja en 28 años, lo que juega en contra de un frío fuerte. El Súper Niño empuja hacia un invierno suave en EE.UU. y el vórtice alterado, en sentido contrario.",
    oct: { mean: 18.99, src: "https://ozonewatch.gsfc.nasa.gov/meteorology/figures/merra2/wind/u60n_10_10_merra2.txt", v: [[1979,17.66],[1980,16.66],[1981,18.06],[1982,19.81],[1983,22.09],[1984,18.45],[1985,20.95],[1986,22.37],[1987,19.32],[1988,21.40],[1989,18.01],[1990,23.08],[1991,22.79],[1992,18.94],[1993,16.36],[1994,21.53],[1995,22.81],[1996,20.71],[1997,22.72],[1998,18.66],[1999,19.08],[2000,20.23],[2001,21.40],[2002,21.28],[2003,14.59],[2004,17.75],[2005,18.24],[2006,14.82],[2007,14.69],[2008,21.30],[2009,19.65],[2010,18.49],[2011,16.50],[2012,19.85],[2013,16.10],[2014,16.81],[2015,20.76],[2016,17.02],[2017,18.31],[2018,22.03],[2019,20.38],[2020,17.82],[2021,15.30],[2022,17.26],[2023,20.08],[2024,16.93],[2025,13.42]] },
    src: [["NASA Ozone Watch (MERRA-2 y GEOS)", "https://ozonewatch.gsfc.nasa.gov/meteorology/figures/merra2/wind/u60n_10_2026_merra2.txt"], ["Judah Cohen (AER)", "https://published.aer.com/aoblog/pdfs/AO_PV_Analysis_2026-11-02.pdf"], ["World Climate Service", "https://www.worldclimateservice.com/polar-vortex-forecast-november-2026-ssw/"], ["Severe Weather Europe", "https://www.severe-weather.eu/global-weather/polar-vortex-split-record-early-stratospheric-warming-event-november-2026-united-states-canada-europe-fa/"]]
  },
  energy: [
    { k: "Reservas de gas de la UE", v: "≈ 69,8%", n: "17-nov-2026 (69,75%, datos de GIE AGSI+ vía gasspeicher.app) · el promedio de 5 años para la fecha es ≈ 89% · Alemania, 57,1%, 17,2 puntos debajo del mismo día de 2025 · Países Bajos 60,7%, Austria 62,7%, Francia 75,5%, Italia 86,5% · 16-nov: 70,6% (Trading Economics)", src: "GIE AGSI+ vía gasspeicher.app", u: "https://gasspeicher.app/en/", bar: 69.8, ref: 89 },
    { k: "Gas en Europa (TTF)", v: "≈ €83/MWh", n: "miércoles 18-nov-2026 (€83,25; €82,48 el 19 a la mañana), según los datos diarios de OilPriceAPI: tercera baja seguida por los envíos récord de GNL de EE.UU. y pronósticos más templados · 17-nov: €85,16 · 16-nov: ≈ €88 · 13-nov: tocó más de €94", src: "OilPriceAPI", u: "https://www.oilpriceapi.com/live/dutch-ttf-gas-price" },
    { k: "Gas en EE.UU. (Henry Hub)", v: "≈ US$ 3,21/MMBtu", n: "cierre del contrato de diciembre del martes 17-nov-2026 (US$ 3,208, Price Group) · el 18 bajó a US$ 3,08 en la sesión, mínimo desde el 9, por pronósticos más templados (Reuters) · 13-nov: US$ 3,23 · la EIA (STEO, 10-nov) prevé US$ 2,87 para noviembre-marzo · EE.UU. abastece la mayor parte del GNL que compra Europa", src: "Price Group y Reuters", u: "https://www.brecorder.com/news/40449416/us-natgas-extends-losses-as-milder-forecasts-curb-heating-demand" },
    { k: "Gas almacenado en EE.UU.", v: "3.862 Bcf", n: "6-nov-2026 (informe del 13-nov) · +61 Bcf en la semana, por debajo de los ≈ 65 esperados · 75 Bcf (2%) sobre el promedio de 5 años y 92 Bcf (2,3%) debajo de 2025 · 30-oct: 3.801 Bcf", src: "EIA vía Pipeline & Gas Journal", u: "https://pgjonline.com/news/2026/november/us-natural-gas-storage-rises-61-bft3-to-3-862-bft3-eia-says" }
  ],
  watch: ["Cuándo y dónde llega a superficie el efecto de la inversión (desde el 22 al 25 de noviembre, según Severe Weather Europe), y cuánto dura la recuperación del vórtice.", "Frío en Escandinavia, el Reino Unido y el norte de Europa hacia el 20 al 24 de noviembre, y en el este de EE.UU. a fines de noviembre y en diciembre.", "Ritmo de extracción de las reservas europeas y precio del TTF.", "Récords de demanda eléctrica y cortes."],
  news: [
    {"d": "2026-11-19", "h": "El vórtice polar se recupera más rápido de lo esperado", "x": "Los datos analizados de la NASA marcan 6,4 m/s a 10 hPa y 60°N el 16 de noviembre, y el modelo GEOS lo lleva a unos 26 m/s el 26, cerca de la media. Judah Cohen (AER) ve algunas corridas que insinúan otro debilitamiento a fines de noviembre o principios de diciembre.", "u": "https://ozonewatch.gsfc.nasa.gov/meteorology/figures/merra2/wind/u60n_10_2026_merra2.txt", "st": "NASA Ozone Watch"},
    {"d": "2026-11-18", "h": "El gas europeo encadena tres bajas y queda cerca de €83", "x": "El TTF cayó de unos €88 el 16 a €83,25 el 18, con el GNL estadounidense en récord y pronósticos más templados, aunque las reservas de la UE siguen en el nivel más bajo en diez años para la fecha.", "u": "https://www.oilpriceapi.com/live/dutch-ttf-gas-price", "st": "OilPriceAPI"},
    {"d": "2026-11-18", "h": "El Henry Hub cae a su menor nivel en nueve días", "x": "Los futuros del gas en EE.UU. bajaron a US$ 3,08 por pronósticos más templados que recortan la demanda de calefacción hasta Acción de Gracias.", "u": "https://www.brecorder.com/news/40449416/us-natgas-extends-losses-as-milder-forecasts-curb-heating-demand", "st": "Reuters vía Business Recorder"},
    {"d": "2026-11-16", "h": "Ola de frío y ventiscas en el norte de China", "x": "Las temperaturas cayeron hasta 17 °C en un día en Mongolia Interior y Shaanxi; hubo autopistas y peajes cerrados, vuelos cancelados en Chifeng y alerta naranja por ventisca en Heilongjiang y Jilin.", "u": "https://watchers.news/2026/11/16/cold-wave-temperature-drops-blizzards-northern-china-november-2026/", "st": "The Watchers"},
    { d: "2026-11-18", h: "Termina la inversión del vórtice polar y el viento se recupera", x: "Los datos analizados de la NASA muestran que el viento a 10 hPa y 60°N fue negativo del 10 al 12 de noviembre y volvió a soplar del oeste el 13; el 15 marcó 4,8 m/s y el modelo GEOS lo lleva cerca de la media hacia el 26. Los efectos en superficie de un calentamiento súbito suelen llegar semanas después.", u: "https://ozonewatch.gsfc.nasa.gov/meteorology/figures/merra2/wind/u60n_10_2026_merra2.txt", st: "NASA Ozone Watch" },
    { d: "2026-11-17", h: "Nieve en el norte de Inglaterra y alerta sanitaria por frío", x: "Rige el aviso amarillo de la Met Office desde Staffordshire hasta el suroeste de Escocia, con 5 a 15 cm en zonas altas y demoras en rutas y trenes. La agencia sanitaria británica emitió una alerta amarilla por frío en tres regiones del norte hasta el jueves; el domingo hubo −7,7 °C en Tulloch Bridge, Escocia, la noche más fría de la temporada.", u: "https://www.itv.com/news/2026-11-17/snow-warning-comes-into-force-bringing-potential-rush-hour-disruption", st: "ITV News" },
    { d: "2026-11-16", h: "El Henry Hub baja por pronósticos más templados en EE.UU.", x: "Los futuros del gas estadounidense cedían el lunes porque los modelos recortaron la demanda de calefacción prevista y la producción se recuperó, aunque el gas enviado a las plantas de GNL sigue en récord.", u: "https://naturalgasintel.com/news/weak-weather-outweighing-record-lng-as-natural-gas-futures-slip/", st: "Natural Gas Intelligence" },
    { d: "2026-11-16", h: "El gas europeo baja casi 3% por el GNL récord de EE.UU.", x: "El TTF cedía a unos €88/MWh el lunes: los envíos récord de GNL estadounidense compensan por ahora la preocupación por las reservas, que rondan el 70,6% contra un promedio de 89% para la fecha. El campo noruego Troll volvería a operar el 16.", u: "https://tradingeconomics.com/commodity/eu-natural-gas", st: "Trading Economics" },
  ],
  updated: "2026-11-19"
};
