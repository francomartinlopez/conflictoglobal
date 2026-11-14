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
  summary: "El vórtice polar del hemisferio norte sufrió la inversión de sus vientos estratosféricos (un calentamiento súbito) el 10 de noviembre, la más temprana registrada: la serie analizada de la NASA ya la confirma, con −2,9 m/s el 11. Sus efectos en superficie podrían llegar desde fines de noviembre, cuando Europa tiene sus reservas de gas en el nivel más bajo para la fecha en más de una década por el cierre de Ormuz y el TTF cerró la semana cerca de €91, con un máximo de más de €94 el 13. Un frío intenso en EE.UU., Europa o Asia dispararía el consumo de gas y electricidad y la competencia por el GNL.",
  vortex: {
    u: -2.94, uDate: "2026-11-11", threshold: 0,
    status: "Inversión confirmada en los datos analizados de la NASA: el viento a 10 hPa y 60°N pasó a −0,62 m/s el 10 de noviembre y a −2,94 m/s el 11, contra una media de 28,8 m/s para la fecha y un mínimo previo de 11,3 desde 1979. Es el calentamiento súbito más temprano registrado; el récord anterior era del 28 de noviembre. Severe Weather Europe y The Weather Network ya lo habían dado por iniciado el 10. El 9 de noviembre la serie marcaba 1,22 m/s",
    forecast: "El modelo GEOS de la NASA da −2,2 m/s el 12 y devuelve el viento a valores positivos el 13 (2,1 m/s) y el 14 (4,0 m/s), con una recuperación rápida hasta unos 21 m/s hacia el 22 de noviembre. Los ensambles del ECMWF, el GFS y el AIFS también muestran una recuperación rápida (Severe Weather Europe), y The Weather Network espera vientos de más de 25 m/s en la tercera semana del mes. Severe Weather Europe (4-nov) había previsto una posible segunda inversión dentro del mismo evento. Los modelos estacionales marcan otro debilitamiento, más fuerte, entre enero y febrero de 2027.",
    probs: [["ECMWF: 50 de 50 miembros con inversión antes del 15-nov (Polar Vortex Earth, 12-nov)", 100], ["ECMWF: 50 de 50 miembros con inversión antes del 21-nov (Polar Vortex Earth, 7-nov)", 100], ["SWE: ECMWF y GEFS, todos los miembros con inversión algún día (4-nov)", 100], ["ECMWF, inversión antes del 11-nov (29-oct)", 96], ["WCS: ECMWF EPS, inversión algún día (2-nov)", 82], ["GEFS de EE.UU. (29-oct)", 71], ["WCS: AIFS-ENS (2-nov)", 61], ["AIFS del ECMWF (29-oct)", 37]],
    record: "El calentamiento súbito más temprano registrado desde 1958 había sido el 28 de noviembre. Este, con inversión el 10 de noviembre, lo supera por unas dos semanas y media.",
    impacts: "Los efectos en superficie suelen llegar entre dos y seis semanas después (World Climate Service). Severe Weather Europe (13-nov) ve la señal bajando a superficie hacia el 22 al 25 de noviembre, con un corredor de aire frío del sur de Canadá hacia el Medio Oeste y el norte de EE.UU. entre el 25 de noviembre y el 10 de diciembre y temperaturas bajo lo normal en buena parte de Europa, aunque ninguna corrida muestra todavía una caída fuerte y el Súper Niño puede tapar la señal; The Weather Network ve posible aire ártico en América del Norte en los últimos diez días de noviembre. Judah Cohen (AER, 9-nov) ve, con poca confianza, más frío en Escandinavia, el Reino Unido y Europa hacia el 20 al 24 de noviembre y un posible giro a temperaturas bajo lo normal en América del Norte a fines de noviembre o principios de diciembre, sin apostar a un frío extremo; en Asia el frío se concentraría en Siberia oriental. Andrew Charlton-Perez (Universidad de Reading, 6-nov) dice que nunca se observó un calentamiento súbito tan temprano y ve más riesgo de frío en Escandinavia, las Islas Británicas, Alemania y Polonia, con mucha incertidumbre. Según FOX Weather (6-nov), los modelos todavía no muestran irrupciones de aire frío importantes: el aire más frío está sobre Europa del Este y Siberia, y América del Norte sigue mucho más cálida que lo normal. Severe Weather Europe, a partir de años con calentamiento temprano y El Niño fuerte, sugiere frío en Europa en diciembre y en el centro y este de EE.UU. en enero, aunque el Súper Niño puede tapar la señal. La NOAA favorece temperaturas sobre lo normal en el norte de EE.UU. hasta diciembre, y el Met Office descarta por ahora una helada general en el Reino Unido. Los modelos estacionales marcan un segundo debilitamiento, más fuerte, entre enero y febrero de 2027.",
    oct: { mean: 18.99, src: "https://ozonewatch.gsfc.nasa.gov/meteorology/figures/merra2/wind/u60n_10_10_merra2.txt", v: [[1979,17.66],[1980,16.66],[1981,18.06],[1982,19.81],[1983,22.09],[1984,18.45],[1985,20.95],[1986,22.37],[1987,19.32],[1988,21.40],[1989,18.01],[1990,23.08],[1991,22.79],[1992,18.94],[1993,16.36],[1994,21.53],[1995,22.81],[1996,20.71],[1997,22.72],[1998,18.66],[1999,19.08],[2000,20.23],[2001,21.40],[2002,21.28],[2003,14.59],[2004,17.75],[2005,18.24],[2006,14.82],[2007,14.69],[2008,21.30],[2009,19.65],[2010,18.49],[2011,16.50],[2012,19.85],[2013,16.10],[2014,16.81],[2015,20.76],[2016,17.02],[2017,18.31],[2018,22.03],[2019,20.38],[2020,17.82],[2021,15.30],[2022,17.26],[2023,20.08],[2024,16.93],[2025,13.42]] },
    src: [["NASA Ozone Watch (MERRA-2 y GEOS)", "https://ozonewatch.gsfc.nasa.gov/meteorology/figures/merra2/wind/u60n_10_2026_merra2.txt"], ["Judah Cohen (AER)", "https://published.aer.com/aoblog/pdfs/AO_PV_Analysis_2026-11-02.pdf"], ["World Climate Service", "https://www.worldclimateservice.com/polar-vortex-forecast-november-2026-ssw/"], ["Severe Weather Europe", "https://www.severe-weather.eu/global-weather/polar-vortex-split-record-early-stratospheric-warming-event-november-2026-united-states-canada-europe-fa/"]]
  },
  energy: [
    { k: "Reservas de gas de la UE", v: "≈ 71%", n: "11-nov-2026 (71,3%, 807 TWh, según gaslevel.eu con datos de AGSI+), último dato accesible · el promedio de 5 años para la fecha es 89% · Alemania, por debajo del 60% · Bloomberg: las extracciones de la semana previa fueron casi seis veces las de la anterior · 10-nov: 72%", src: "GIE AGSI+ vía gaslevel.eu y Bloomberg", u: "https://www.energyconnects.com/news/utilities/2026/november/european-gas-swings-with-storage-worries-countering-iran-hopes/", bar: 71.3, ref: 89 },
    { k: "Gas en Europa (TTF)", v: "≈ €91/MWh", n: "cierre del viernes 13-nov-2026, tras tocar más de €94 en el día (máximo de dos semanas) · cortó tres ruedas de suba, pero ganó más de 6% en la semana por los pronósticos de frío, la falla en el campo noruego Troll y la falta de acuerdo con Irán · 12-nov: €92,70 (+7%)", src: "Trading Economics", u: "https://tradingeconomics.com/commodity/eu-natural-gas/news/600111" },
    { k: "Gas en EE.UU. (Henry Hub)", v: "≈ US$ 3,23/MMBtu", n: "13-nov-2026 · bajó desde US$ 3,34 el 12, máximo de siete semanas · la EIA (STEO, 10-nov) prevé US$ 2,87 para noviembre-marzo por el arranque templado del mes · EE.UU. abastece la mayor parte del GNL que compra Europa", src: "Trading Economics y EIA", u: "https://tradingeconomics.com/commodity/natural-gas/news/598740" },
    { k: "Gas almacenado en EE.UU.", v: "3.862 Bcf", n: "6-nov-2026 (informe del 13-nov) · +61 Bcf en la semana, por debajo de los ≈ 65 esperados · 75 Bcf (2%) sobre el promedio de 5 años y 92 Bcf (2,3%) debajo de 2025 · 30-oct: 3.801 Bcf", src: "EIA vía Pipeline & Gas Journal", u: "https://pgjonline.com/news/2026/november/us-natural-gas-storage-rises-61-bft3-to-3-862-bft3-eia-says" }
  ],
  watch: ["Cuándo y dónde llega a superficie el efecto de la inversión (desde el 22 al 25 de noviembre, según Severe Weather Europe), y cuánto dura la recuperación del vórtice.", "Frío en Escandinavia, el Reino Unido y el norte de Europa hacia el 20 al 24 de noviembre, y en el este de EE.UU. a fines de noviembre y en diciembre.", "Ritmo de extracción de las reservas europeas y precio del TTF.", "Récords de demanda eléctrica y cortes."],
  news: [
    { d: "2026-11-14", h: "La NASA confirma en sus datos la inversión del vórtice polar", x: "La serie analizada ya registra viento negativo a 10 hPa y 60°N: −0,62 m/s el 10 de noviembre y −2,94 m/s el 11, contra una media de casi 29 m/s para la fecha. El modelo GEOS lo devuelve a valores positivos desde el 13.", u: "https://ozonewatch.gsfc.nasa.gov/meteorology/figures/merra2/wind/u60n_10_2026_merra2.txt", st: "NASA Ozone Watch" },
    { d: "2026-11-13", h: "EE.UU. inyecta menos gas que lo esperado y llega a 3.862 Bcf", x: "El informe semanal de la EIA registró 61 Bcf en la semana al 6 de noviembre; las reservas quedan 2% sobre el promedio de cinco años y 2,3% debajo de las de 2025. El Henry Hub cerró en US$ 3,23.", u: "https://pgjonline.com/news/2026/november/us-natural-gas-storage-rises-61-bft3-to-3-862-bft3-eia-says", st: "Pipeline & Gas Journal" },
    { d: "2026-11-13", h: "El TTF cierra cerca de €91 pero sube más de 6% en la semana", x: "El gas europeo llegó a superar los €94 en el día y después bajó; en la semana lo empujaron el frío pronosticado, la falla en Troll y la falta de acuerdo con Irán.", u: "https://tradingeconomics.com/commodity/eu-natural-gas/news/600111", st: "Trading Economics" },
    { d: "2026-11-13", h: "Se confirma la inversión del vórtice polar, la más temprana registrada", x: "Severe Weather Europe da por confirmado que los vientos a 10 hPa se invirtieron el 10 de noviembre, unas dos semanas y media antes que el récord previo. Los modelos prevén una recuperación rápida, pero el efecto podría llegar a superficie hacia el 22 al 25 de noviembre, con frío posible en el centro de EE.UU. y en buena parte de Europa.", u: "https://www.severe-weather.eu/global-weather/polar-vortex-stratospheric-warming-impact-wave-thanksgiving-2026-united-states-canada-europe-fa/", st: "Severe Weather Europe" },
    { d: "2026-11-13", h: "El TTF supera los €94, máximo de dos semanas", x: "El gas europeo subió 7% el 12 y siguió en alza el 13 por los pronósticos de frío desde el 17 de noviembre, las fallas en campos noruegos y la falta de un acuerdo con Irán. Las reservas de la UE rondan el 71%, contra un promedio de 89% para la fecha.", u: "https://www.oilpriceapi.com/live/dutch-ttf-gas-price", st: "OilPriceAPI" },
    { d: "2026-11-12", h: "Una falla en el campo Troll recorta el gas noruego", x: "Los flujos desde Noruega bajaron de 331 a 322 millones de metros cúbicos diarios por una falla en Troll, cuya duración Gassco no puede estimar, sumada al mantenimiento programado.", u: "https://rallies.ai/news/europe-gas-prices-rise-on-cooler-temperatures-lower-norwegian-supply-97d715ad466ba2d2", st: "Rallies.ai" },
    { d: "2026-11-12", h: "Europa vacía sus reservas de gas a casi el triple del ritmo normal", x: "Las extracciones netas se multiplicaron casi por seis en la semana del 10 de noviembre por el frío y la poca generación eólica, y el GNL que sale por Ormuz cayó al 52% del ritmo de antes de la guerra.", u: "https://www.energyflux.news/burn-now-pay-later/", st: "Energy Flux" },
    { d: "2026-11-12", h: "El vórtice cae a 1,2 m/s y la inversión ya está en el pronóstico de corto plazo", x: "El último dato analizado de la NASA (9 de noviembre) marca 1,22 m/s, contra una media de 28,4 para la fecha; la corrida del modelo GEOS da −0,6 m/s el 10, −3,1 el 11 y −2,2 el 12. Polar Vortex Earth calcula 0 m/s el 10.", u: "https://ozonewatch.gsfc.nasa.gov/meteorology/figures/merra2/wind/u60n_10_2026_merra2.txt", st: "NASA Ozone Watch" }
  ],
  updated: "2026-11-14"
};
