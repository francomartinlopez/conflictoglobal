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
    u: 2.57, uDate: "2026-11-07", threshold: 0,
    status: "2,57 m/s el 7 de noviembre (último dato analizado de la NASA), contra una media de 26,9 para la fecha y muy por debajo del mínimo registrado para ese día desde 1979 (12,6): sigue en récord. Repuntó desde los 0,32 m/s del 5, el valor más bajo de la serie. La inversión sigue pronosticada para el 10 al 12 de noviembre, todavía no observada",
    forecast: "La corrida más reciente del modelo GEOS de la NASA lleva el viento a 2,1 m/s el 8 y 1,1 el 9, y lo pasa a negativo del 10 al 12, con un mínimo de −3,4 m/s el 11 (−1,0 el 10 y −2,2 el 12); vuelve a ser positivo el 13 (1,5) y sube a 5,2 el 15 y 7,5 el 18. Según el servicio Polar Vortex Earth (7-nov), los 50 miembros del ensamble ECMWF muestran la inversión antes del 21 de noviembre. Severe Weather Europe (4-nov) prevé una recuperación a mediados de noviembre y una posible segunda inversión la semana siguiente, que trata como parte del mismo evento. Judah Cohen (AER, 2-nov) no descarta que el calentamiento llegue en etapas, y el Met Office británico (5-nov) espera una inversión relativamente débil y breve.",
    probs: [["ECMWF: 50 de 50 miembros con inversión antes del 21-nov (Polar Vortex Earth, 7-nov)", 100], ["SWE: ECMWF y GEFS, todos los miembros con inversión algún día (4-nov)", 100], ["ECMWF, inversión antes del 11-nov (29-oct)", 96], ["WCS: ECMWF EPS, inversión algún día (2-nov)", 82], ["GEFS de EE.UU. (29-oct)", 71], ["WCS: AIFS-ENS (2-nov)", 61], ["AIFS del ECMWF (29-oct)", 37]],
    record: "El calentamiento súbito más temprano registrado desde 1958 fue el 28 de noviembre. Este lo superaría por más de tres semanas.",
    impacts: "Los efectos en superficie suelen llegar entre dos y seis semanas después (World Climate Service). Andrew Charlton-Perez (Universidad de Reading, 6-nov) dice que nunca se observó un calentamiento súbito tan temprano y ve más riesgo de frío en Escandinavia, las Islas Británicas, Alemania y Polonia, con mucha incertidumbre. Según FOX Weather (6-nov), los modelos todavía no muestran irrupciones de aire frío importantes: el aire más frío está sobre Europa del Este y Siberia, y América del Norte sigue mucho más cálida que lo normal. Severe Weather Europe, a partir de años con calentamiento temprano y El Niño fuerte, sugiere frío en Europa en diciembre y en el centro y este de EE.UU. en enero, aunque el Súper Niño puede tapar la señal. La NOAA favorece temperaturas sobre lo normal en el norte de EE.UU. hasta diciembre, y el Met Office descarta por ahora una helada general en el Reino Unido. Los modelos estacionales marcan un segundo debilitamiento, más fuerte, entre enero y febrero de 2027.",
    oct: { mean: 18.99, src: "https://ozonewatch.gsfc.nasa.gov/meteorology/figures/merra2/wind/u60n_10_10_merra2.txt", v: [[1979,17.66],[1980,16.66],[1981,18.06],[1982,19.81],[1983,22.09],[1984,18.45],[1985,20.95],[1986,22.37],[1987,19.32],[1988,21.40],[1989,18.01],[1990,23.08],[1991,22.79],[1992,18.94],[1993,16.36],[1994,21.53],[1995,22.81],[1996,20.71],[1997,22.72],[1998,18.66],[1999,19.08],[2000,20.23],[2001,21.40],[2002,21.28],[2003,14.59],[2004,17.75],[2005,18.24],[2006,14.82],[2007,14.69],[2008,21.30],[2009,19.65],[2010,18.49],[2011,16.50],[2012,19.85],[2013,16.10],[2014,16.81],[2015,20.76],[2016,17.02],[2017,18.31],[2018,22.03],[2019,20.38],[2020,17.82],[2021,15.30],[2022,17.26],[2023,20.08],[2024,16.93],[2025,13.42]] },
    src: [["NASA Ozone Watch (MERRA-2 y GEOS)", "https://ozonewatch.gsfc.nasa.gov/meteorology/figures/merra2/wind/u60n_10_2026_merra2.txt"], ["Judah Cohen (AER)", "https://published.aer.com/aoblog/pdfs/AO_PV_Analysis_2026-11-02.pdf"], ["World Climate Service", "https://www.worldclimateservice.com/polar-vortex-forecast-november-2026-ssw/"], ["Severe Weather Europe", "https://www.severe-weather.eu/global-weather/polar-vortex-split-record-early-stratospheric-warming-event-november-2026-united-states-canada-europe-fa/"]]
  },
  energy: [
    { k: "Reservas de gas de la UE", v: "72,7%", n: "7-nov-2026 (72,65%) · 16,85 puntos debajo del promedio de 5 años para la fecha y el nivel más bajo para la época desde 2011 (82,7% un año antes) · menos de 80 bcm almacenados · más de 3 bcm extraídos desde el 28-oct, con récords diarios para la fecha en 7 de los primeros 11 días · Alemania, debajo del 60%", src: "GIE AGSI+ vía TASS", u: "https://tass.com/economy/2214739", bar: 72.7, ref: 90 },
    { k: "Gas en Europa (TTF)", v: "≈ €81/MWh", n: "10-nov-2026 a la mañana (≈ −1,9% en el día), mínimo de un mes por las expectativas de una salida diplomática en Medio Oriente; sigue en más del doble que antes de la guerra · cierre del 6-nov: €85,59", src: "Trading Economics", u: "https://tradingeconomics.com/commodity/eu-natural-gas" },
    { k: "Gas en EE.UU. (Henry Hub)", v: "≈ US$ 3,2/MMBtu", n: "9 y 10-nov-2026 (futuro NYMEX del mes cercano, US$ 3,21), ≈ 7% arriba de los US$ 3,00 de fines de la semana pasada, con el primer frío fuerte previsto en el este · el GNL asiático (JKM) cotiza ≈ US$ 31/MMBtu · EE.UU. abastece la mayor parte del GNL que compra Europa", src: "OilPriceAPI", u: "https://www.oilpriceapi.com/live/natural-gas-price" },
    { k: "Gas almacenado en EE.UU.", v: "3.801 Bcf", n: "30-oct-2026 · +77 Bcf en la semana · 1,4% sobre el promedio de 5 años y 2,8% debajo de 2025 · próximo informe: 12-nov", src: "EIA vía IndexBox", u: "https://www.indexbox.io/blog/eia-reports-77-bcf-weekly-build-in-lower-48-natural-gas-storage-1/" }
  ],
  watch: ["Si la inversión de los vientos se confirma entre el 10 y el 12 de noviembre, como pronostica la NASA.", "Olas de frío en Europa y el este de EE.UU. a fines de noviembre y en diciembre.", "Ritmo de extracción de las reservas europeas y precio del TTF.", "Récords de demanda eléctrica y cortes."],
  news: [
    { d: "2026-11-10", h: "El TTF cae a un mínimo de un mes, cerca de €81", x: "Las expectativas de una salida diplomática en Medio Oriente bajaron el precio del gas europeo, que sigue en más del doble que antes de la guerra por el corte del GNL del Golfo.", u: "https://tradingeconomics.com/commodity/eu-natural-gas", st: "Trading Economics" },
    { d: "2026-11-10", h: "El viento del vórtice repunta a 2,6 m/s y la NASA mantiene la inversión del 10 al 12", x: "El dato analizado del 7 de noviembre sigue siendo un récord para la fecha (media: 26,9 m/s); la corrida del modelo GEOS lleva el viento a −3,4 m/s el 11 y lo hace volver a valores positivos el 13.", u: "https://ozonewatch.gsfc.nasa.gov/meteorology/figures/merra2/wind/u60n_10_2026_merra2.txt", st: "NASA Ozone Watch" },
    { d: "2026-11-09", h: "Primer frío fuerte y posible nieve en el este de EE.UU.", x: "Entre el miércoles 11 y el viernes 13 las máximas caen unos 11 °C desde Chicago hasta Atlanta, con nieve posible de los Grandes Lagos a Nueva Inglaterra; será breve, en un noviembre que apunta a estar entre los diez más cálidos.", u: "https://www.spokesman.com/stories/2026/nov/09/northeast-on-alert-for-freezing-cold-first-major-s/", st: "Spokesman-Review (USA Today)" },
    { d: "2026-11-09", h: "Europa extrae gas a un ritmo récord para la época", x: "Desde el 28 de octubre la UE sacó más de 3 bcm de sus depósitos, con récords diarios para la fecha en 7 de los primeros 11 días; las reservas quedaron en 72,65% el 7 de noviembre, el nivel más bajo para la época desde 2011.", u: "https://tass.com/economy/2214739", st: "TASS (datos GIE)" },
    { d: "2026-11-09", h: "El gas europeo arranca la semana arriba de €86", x: "El TTF subió levemente el lunes sin alejarse del mínimo de dos semanas: pesan las dudas sobre la negociación con Irán, los cortes de GNL del Golfo, el frío y el poco viento, que aceleran la extracción, y fallas en las exportaciones noruegas.", u: "https://www.instaforex.com/forex-news/3281770", st: "InstaForex" },
    { d: "2026-11-09", h: "El viento del vórtice sigue en récord y la inversión se mantiene para el 10 al 12", x: "El dato analizado de la NASA del 6 de noviembre (0,75 m/s) vuelve a ser el más bajo para la fecha desde 1979; la nueva corrida del modelo GEOS lleva el viento a −3,6 m/s el 11 y lo hace volver a valores positivos el 13.", u: "https://ozonewatch.gsfc.nasa.gov/meteorology/figures/merra2/wind/u60n_10_2026_merra2.txt", st: "NASA Ozone Watch" },
    { d: "2026-11-08", h: "Ola de frío en China: bajas de más de 10 °C en 15 provincias", x: "Entre el 8 y el 10 de noviembre la temperatura cae de 6 a 12 °C, y más de 14 °C en algunos puntos; Qinhuangdao activó su alerta máxima por ventisca y el tren rápido a Tianjin redujo la velocidad.", u: "https://www.globaltimes.cn/page/202611/1373875.shtml", st: "Global Times" },
    { d: "2026-11-08", h: "Seúl tiene su primera nevada casi dos semanas antes de lo normal", x: "Nevó 12 días antes que el promedio 1991–2020 y fue la primera nevada más temprana desde 2010, con −5,4 °C en Daegwallyeong.", u: "https://www.koreajoongangdaily.com/korea/seouls-first-snow-arrives-nearly-a-month-earlier-as-cold-snap-grips-city/12961275", st: "Korea JoongAng Daily" },
  ],
  updated: "2026-11-10"
};
