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
    u: 5.44, uDate: "2026-11-02", threshold: 0,
    status: "5,4 m/s el 2 de noviembre (último dato analizado de la NASA), contra una media de 25,6 para la fecha y muy por debajo del mínimo registrado para ese día desde 1979 (13,7): otro récord. La inversión sigue pronosticada, todavía no observada",
    forecast: "La corrida nueva del modelo GEOS de la NASA retrasa y achica la inversión: el viento baja a 3,2 m/s el 3 de noviembre, 1,2 el 4 y 0,4 el 5, se queda entre 0,5 y 1,2 hasta el 8 y pasa a negativo del 9 al 11, con un mínimo de −1,9 m/s el 10; vuelve a ser positivo el 12. Judah Cohen (AER, 2-nov) también corre el calentamiento a mediados de noviembre y no descarta que llegue en etapas. Severe Weather Europe (4-nov) mantiene el vórtice partido en dos núcleos.",
    probs: [["ECMWF, inversión antes del 11-nov (29-oct)", 96], ["WCS: ECMWF EPS, inversión algún día (2-nov)", 82], ["GEFS de EE.UU. (29-oct)", 71], ["WCS: AIFS-ENS (2-nov)", 61], ["AIFS del ECMWF (29-oct)", 37]],
    record: "El calentamiento súbito más temprano registrado desde 1958 fue el 28 de noviembre. Este lo superaría por más de tres semanas.",
    impacts: "Los efectos en superficie suelen llegar entre dos y seis semanas después (World Climate Service). Judah Cohen (AER, 2-nov) ve frío en Europa central del 8 al 12 de noviembre, posible frío en el este de EE.UU. en esos mismos días y un frío extremo temprano en Siberia, pero tiene poca confianza en que el calentamiento baje a la superficie. El Centro de Predicción Climática de la NOAA lo calificó de muy raro para noviembre, no descarta una vaguada fría sobre el sudeste de EE.UU. hacia fin de mes y cree que El Niño seguirá dominando. Una corrida del ECMWF da frío en el centro y el este de EE.UU. hacia el 7 y en el oeste, centro y sur de Europa hacia el 8. Los modelos estacionales marcan un segundo debilitamiento, más fuerte, entre enero y febrero de 2027.",
    oct: { mean: 18.99, src: "https://ozonewatch.gsfc.nasa.gov/meteorology/figures/merra2/wind/u60n_10_10_merra2.txt", v: [[1979,17.66],[1980,16.66],[1981,18.06],[1982,19.81],[1983,22.09],[1984,18.45],[1985,20.95],[1986,22.37],[1987,19.32],[1988,21.40],[1989,18.01],[1990,23.08],[1991,22.79],[1992,18.94],[1993,16.36],[1994,21.53],[1995,22.81],[1996,20.71],[1997,22.72],[1998,18.66],[1999,19.08],[2000,20.23],[2001,21.40],[2002,21.28],[2003,14.59],[2004,17.75],[2005,18.24],[2006,14.82],[2007,14.69],[2008,21.30],[2009,19.65],[2010,18.49],[2011,16.50],[2012,19.85],[2013,16.10],[2014,16.81],[2015,20.76],[2016,17.02],[2017,18.31],[2018,22.03],[2019,20.38],[2020,17.82],[2021,15.30],[2022,17.26],[2023,20.08],[2024,16.93],[2025,13.42]] },
    src: [["NASA Ozone Watch (MERRA-2 y GEOS)", "https://ozonewatch.gsfc.nasa.gov/meteorology/figures/merra2/wind/u60n_10_2026_merra2.txt"], ["Judah Cohen (AER)", "https://published.aer.com/aoblog/pdfs/AO_PV_Analysis_2026-11-02.pdf"], ["World Climate Service", "https://www.worldclimateservice.com/polar-vortex-forecast-november-2026-ssw/"], ["Severe Weather Europe", "https://www.severe-weather.eu/global-weather/polar-vortex-split-record-early-stratospheric-warming-event-november-2026-united-states-canada-europe-fa/"]]
  },
  energy: [
    { k: "Reservas de gas de la UE", v: "74,3%", n: "4-nov-2026 · 74,33%, en extracción neta (74,56% el 2-nov) · promedio de 5 años para la fecha: ≈ 86% · Alemania, al 61%, empieza el invierno en su mínimo histórico", src: "GIE AGSI+ vía Trading Economics", u: "https://tradingeconomics.com/commodity/eu-natural-gas", bar: 74.3, ref: 86 },
    { k: "Gas en Europa (TTF)", v: "≈ €85/MWh", n: "5-nov-2026, intradiario · −3,7% en el día y ≈ −18% en la semana por la mediación de Qatar entre EE.UU. e Irán; el 4-nov había rebotado a más de €93", src: "Trading Economics", u: "https://tradingeconomics.com/commodity/eu-natural-gas" },
    { k: "Gas en EE.UU. (Henry Hub)", v: "≈ US$ 2,88/MMBtu", n: "4-nov-2026 · tocó US$ 2,87, mínimo en dos semanas, por pronósticos templados · el flujo hacia las terminales de GNL bajó a 17,7 bcfd en noviembre (18,4 en octubre) · EE.UU. abastece la mayor parte del GNL que compra Europa", src: "Trading Economics", u: "https://tradingeconomics.com/commodity/natural-gas" },
    { k: "Gas almacenado en EE.UU.", v: "3.724 Bcf", n: "23-oct-2026 · +80 Bcf en la semana · 1% sobre el promedio de 5 años y 3,8% debajo de 2025", src: "EIA vía IndexBox", u: "https://www.indexbox.io/blog/eia-reports-80-bcf-weekly-build-in-lower-48-natural-gas-storage/" }
  ],
  watch: ["Si la inversión de los vientos se confirma entre el 9 y el 11 de noviembre, como pronostica la NASA.", "Olas de frío en el este de EE.UU. y en Europa a mediados de noviembre.", "Ritmo de extracción de las reservas europeas y precio del TTF.", "Récords de demanda eléctrica y cortes."],
  news: [
    { d: "2026-11-05", h: "El TTF cae a €85 y acumula 18% de baja en la semana", x: "El gas europeo bajó casi 4% el jueves por la expectativa en la mediación de Qatar entre EE.UU. e Irán, aunque el GNL del Golfo sigue interrumpido. Las reservas de la UE bajaron a 74,33% el 4 de noviembre.", u: "https://tradingeconomics.com/commodity/eu-natural-gas", st: "Trading Economics" },
    { d: "2026-11-04", h: "El viento del vórtice baja a 5,4 m/s y la NASA corre la inversión al 9–11 de noviembre", x: "El último dato analizado (2-nov) vuelve a ser el más bajo para la fecha desde 1979. La nueva corrida del modelo GEOS lleva el viento a valores negativos del 9 al 11, más tarde y más débil que en la corrida anterior.", u: "https://ozonewatch.gsfc.nasa.gov/meteorology/figures/merra2/wind/u60n_10_2026_merra2.txt", st: "NASA Ozone Watch" },
    { d: "2026-11-04", h: "El Brent se hunde 8,5% tras las legislativas de EE.UU.", x: "El crudo cayó a US$ 94,83, su menor nivel en casi dos meses, porque el mercado apuesta a un fin más rápido de la guerra con Irán después de la derrota republicana.", u: "https://www.thenationalnews.com/business/energy/2026/11/04/brent-oil-slides-to-94-on-iran-uncertainty-after-us-midterms/", st: "The National" },
    { d: "2026-11-04", h: "EE.UU. presta gasoil de su reserva para calefacción del noreste", x: "Con el gasoil en precios récord, el Departamento de Energía aceptó prestar 300.000 barriles de la Reserva de Gasoil para Calefacción del Noreste; los inventarios de destilados están 13% debajo del promedio de cinco años.", u: "https://oilprice.com/Latest-Energy-News/World-News/Oil-Crashes-9-as-Trump-and-Vance-Blame-Iran-War-for-Midterm-Rout.html", st: "OilPrice" },
    { d: "2026-11-04", h: "La NOAA ve posible frío en EE.UU. recién a fines de noviembre", x: "El Centro de Predicción Climática calificó de muy raro un debilitamiento así del vórtice en noviembre y no descarta una vaguada sobre el sudeste hacia fin de mes, pero cree que El Niño seguirá dominando.", u: "https://www.newsweek.com/polar-vortex-disruption-raises-prospect-of-major-us-cold-snap-12664709", st: "Newsweek" },
    { d: "2026-11-03", h: "Alemania empieza el invierno con sus reservas de gas en mínimo récord", x: "Los depósitos alemanes, más de un quinto de la capacidad de la UE, estaban al 61% el 2 de noviembre, el nivel más bajo al inicio de un invierno. Raiffeisen calcula que podrían terminar la temporada entre 20% y 25%.", u: "https://www.globalbankingandfinance.com/germany-lags-eu-neighbours-gas-storage-refill-winter-starts/", st: "Reuters (vía Global Banking & Finance Review)" },
    { d: "2026-11-03", h: "El GNL en Asia, en máximos desde 2022", x: "El precio de referencia JKM superó los US$ 34/MMBtu el 30 de octubre, el nivel más alto desde diciembre de 2022, y aumenta la competencia con Europa por los cargamentos.", u: "https://www.khan.co.kr/en/article/202611031735017/", st: "Kyunghyang Shinmun" },
    { d: "2026-11-03", h: "El gas europeo baja por segundo día y queda debajo de €92", x: "El TTF cayó más de 3% el martes, a su menor nivel en más de una semana, después del −8,7% del lunes, por las expectativas de un acuerdo entre EE.UU. e Irán. Las reservas de la UE estaban al 74,56% el 2 de noviembre, en un mínimo para la fecha.", u: "https://www.tradingview.com/news/te_news:597752:0-european-natural-gas-prices-fall-further/", st: "TradingView (Trading Economics)" }
  ],
  updated: "2026-11-05"
};
