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
    us: { mb: 276.4, cap: 714, date: "2026-11-13", peak2026: 415.4, peakDate: "2026-03-20",
      note: "Nivel más bajo desde octubre de 1982. Bajó 139 millones de barriles (33%) desde el pico del 20 de marzo, 3,1 millones en la semana al 13 de noviembre, por la liberación de emergencia ante el cierre de Ormuz.",
      src: "EIA, informe semanal (vía TASS)", u: "https://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?n=PET&s=WCSSTUS1&f=W" },
    iea: { pledged: 400, released: 349, date: "2026-11-13",
      note: "Según el informe mensual de la AIE del 13-nov, los países miembros liberaron unos 349 millones de barriles desde el 11 de marzo y sumarán otros 71 millones hasta febrero de 2027 (37 de la reserva de EE.UU.), con lo que superarían los 400 prometidos.",
      src: "AIE, informe mensual de noviembre (vía Oil & Gas Journal)", u: "https://www.ogj.com/general-interest/economics-markets/news/55418773/iea-sees-oil-market-surplus-returning-as-gulf-exports-recover" },
    countries: [
      { n: "China", mb: 1492, est: true, d: "2026-T2", s: "EIA (estimación; China no publica la cifra)" },
      { n: "Japón", mb: 380, days: 176, d: "2026-07-31", s: "METI" },
      { n: "Estados Unidos", mb: 276.4, d: "2026-11-13", s: "EIA" },
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
  summary: "El vórtice polar del hemisferio norte sufrió la inversión de sus vientos estratosféricos (un calentamiento súbito) entre el 10 y el 12 de noviembre, la más temprana registrada; desde el 13 el viento volvió a ser del oeste y se recupera rápido (6,4 m/s el 16, contra una media de 30,1), y la NASA prevé que llegue cerca de lo normal hacia el 25. Sus efectos en superficie podrían notarse desde fines de noviembre, cuando Europa tiene sus reservas de gas en el nivel más bajo para la fecha en más de una década por el cierre de Ormuz (69,8% el 19); el TTF rebotó a unos €86 el 20 por los ataques a petroleros en Ormuz, aunque perdió más de 6% en la semana. Un frío intenso en EE.UU., Europa o Asia dispararía el consumo de gas y electricidad y la competencia por el GNL.",
  vortex: {
    u: 6.41, uDate: "2026-11-16", threshold: 0,
    status: "La inversión terminó: según los datos analizados de la NASA, el viento a 10 hPa y 60°N fue negativo del 10 al 12 de noviembre (−0,62, −2,94 y −2,12 m/s) y volvió a valores del oeste el 13 (1,99 m/s); el 16 marcó 6,41 m/s, todavía muy por debajo de la media de 30,1 m/s para la fecha. Fue el calentamiento súbito más temprano registrado; el récord anterior era del 28 de noviembre",
    forecast: "El modelo GEOS de la NASA (corrida del 19-nov) prevé una recuperación rápida: 15,1 m/s el 19, 21,3 el 21, 23,6 el 23 y unos 26 entre el 25 y el 27 de noviembre, algo por debajo de la media para la fecha (≈ 29). Judah Cohen (AER) ve el vórtice fortaleciéndose en el GFS, aunque algunas corridas del ECMWF insinúan un nuevo debilitamiento a fines de noviembre o principios de diciembre. Los modelos estacionales marcan otro debilitamiento, más fuerte, entre enero y febrero de 2027.",
    probs: [["ECMWF: 50 de 50 miembros con inversión antes del 15-nov (Polar Vortex Earth, 12-nov)", 100], ["ECMWF: 50 de 50 miembros con inversión antes del 21-nov (Polar Vortex Earth, 7-nov)", 100], ["SWE: ECMWF y GEFS, todos los miembros con inversión algún día (4-nov)", 100], ["ECMWF, inversión antes del 11-nov (29-oct)", 96], ["WCS: ECMWF EPS, inversión algún día (2-nov)", 82], ["GEFS de EE.UU. (29-oct)", 71], ["WCS: AIFS-ENS (2-nov)", 61], ["AIFS del ECMWF (29-oct)", 37]],
    record: "El calentamiento súbito más temprano registrado desde 1958 había sido el 28 de noviembre. Este, con inversión el 10 de noviembre, lo supera por unas dos semanas y media.",
    impacts: "Los efectos en superficie suelen llegar entre dos y seis semanas después (World Climate Service). Judah Cohen (AER, última actualización) espera temperaturas normales o más altas en EE.UU. en las próximas dos semanas, con algo de frío en el este a fines de noviembre y un frío de principios de diciembre posible pero muy incierto; en Europa ve flujo del oeste y tiempo templado, con frío posible en Escandinavia y el Reino Unido a fines de noviembre, y una tendencia de la AO y la NAO a valores negativos que sube el riesgo de frío en diciembre. Para el corto plazo, los pronósticos citados por Price Group (18-nov) prevén calor desde el 19 en las Llanuras, el Medio Oeste y el Noreste de EE.UU. hasta Acción de Gracias. Severe Weather Europe (13-nov) veía la señal bajando a superficie hacia el 22 al 25 de noviembre, con aire frío del sur de Canadá hacia el Medio Oeste y el norte de EE.UU. entre el 25 de noviembre y el 10 de diciembre; weather.com (12-nov) advierte que la cobertura de nieve en América del Norte es la tercera más baja en 28 años, lo que juega en contra de un frío fuerte. El Súper Niño empuja hacia un invierno suave en EE.UU. y el vórtice alterado, en sentido contrario.",
    oct: { mean: 18.99, src: "https://ozonewatch.gsfc.nasa.gov/meteorology/figures/merra2/wind/u60n_10_10_merra2.txt", v: [[1979,17.66],[1980,16.66],[1981,18.06],[1982,19.81],[1983,22.09],[1984,18.45],[1985,20.95],[1986,22.37],[1987,19.32],[1988,21.40],[1989,18.01],[1990,23.08],[1991,22.79],[1992,18.94],[1993,16.36],[1994,21.53],[1995,22.81],[1996,20.71],[1997,22.72],[1998,18.66],[1999,19.08],[2000,20.23],[2001,21.40],[2002,21.28],[2003,14.59],[2004,17.75],[2005,18.24],[2006,14.82],[2007,14.69],[2008,21.30],[2009,19.65],[2010,18.49],[2011,16.50],[2012,19.85],[2013,16.10],[2014,16.81],[2015,20.76],[2016,17.02],[2017,18.31],[2018,22.03],[2019,20.38],[2020,17.82],[2021,15.30],[2022,17.26],[2023,20.08],[2024,16.93],[2025,13.42]] },
    src: [["NASA Ozone Watch (MERRA-2 y GEOS)", "https://ozonewatch.gsfc.nasa.gov/meteorology/figures/merra2/wind/u60n_10_2026_merra2.txt"], ["Judah Cohen (AER)", "https://published.aer.com/aoblog/pdfs/AO_PV_Analysis_2026-11-02.pdf"], ["World Climate Service", "https://www.worldclimateservice.com/polar-vortex-forecast-november-2026-ssw/"], ["Severe Weather Europe", "https://www.severe-weather.eu/global-weather/polar-vortex-split-record-early-stratospheric-warming-event-november-2026-united-states-canada-europe-fa/"]]
  },
  energy: [
    {"k": "Reservas de gas de la UE", "v": "≈ 69,8%", "n": "19-nov-2026 (69,83%, datos de Gas Infrastructure Europe vía OilPrice.com) · el promedio de 5 años para la fecha es ≈ 89% y hace un año había ≈ 82% · desde fines de octubre ya se extrajo cerca del 11% de lo inyectado en el verano · 17-nov: 69,75% · sin detalle por país posterior al 17 (Alemania 57,1%)", "src": "GIE vía OilPrice.com", "u": "https://oilprice.com/Latest-Energy-News/World-News/Europe-Has-Already-Drained-11-of-Its-Summer-Gas-Injections.html", "bar": 69.8, "ref": 89},
    {"k": "Gas en Europa (TTF)", "v": "≈ €86/MWh", "n": "viernes 20-nov-2026: subió ≈ 1,4% a €85,6–85,8 a la mañana por los petroleros alcanzados en Ormuz y los misiles hutíes contra Riad (Tradingpedia); aun así perdió más de 6% en la semana · jueves 19: ≈ €82,3 · 18-nov: €83,25 (OilPriceAPI) · 13-nov: tocó más de €94", "src": "Tradingpedia", "u": "https://www.tradingpedia.com/2026/11/20/eu-gas-rebounds-above-e86-as-mideast-risks-lift-supply/"},
    {"k": "Gas en EE.UU. (Henry Hub)", "v": "≈ US$ 3,24/MMBtu", "n": "viernes 20-nov-2026, en la sesión (FXEmpire), +1,2% · jueves 19: el contrato de diciembre tocó US$ 3,38, máximo desde junio, y cerró en US$ 3,268 (TradingNews) · 18-nov: mínimo de US$ 3,08 en la sesión · la EIA (STEO) prevé US$ 2,87 para noviembre-marzo", "src": "FXEmpire y TradingNews", "u": "https://www.tradingnews.com/news/natural-gas-forecast-december-ng-rebounds-to-3-325-on-21-bcf-d-lng-pull-3-38-break-opens-3-45-usd-target"},
    {"k": "Gas almacenado en EE.UU.", "v": "3.882 Bcf", "n": "13-nov-2026 (informe del 19-nov) · +20 Bcf en la semana, por debajo de los 25–27 esperados · 80 Bcf (2,1%) sobre el promedio de 5 años y 66 Bcf (1,7%) debajo de 2025 · el gas enviado a plantas de GNL ronda 21 Bcf/d · 6-nov: 3.862 Bcf", "src": "EIA vía FXEmpire", "u": "https://www.fxempire.com/forecasts/article/natural-gas-outlook-20-bcf-storage-build-falls-short-of-forecast-1646032"}
  ],
  watch: ["Cuándo y dónde llega a superficie el efecto de la inversión (desde el 22 al 25 de noviembre, según Severe Weather Europe), y cuánto dura la recuperación del vórtice.", "Frío en Escandinavia, el Reino Unido y el norte de Europa hacia el 20 al 24 de noviembre, y en el este de EE.UU. a fines de noviembre y en diciembre.", "Ritmo de extracción de las reservas europeas y precio del TTF.", "Récords de demanda eléctrica y cortes."],
  news: [
    {"d": "2026-11-20", "h": "El gas europeo rebota a €86 por los petroleros alcanzados en Ormuz", "x": "El TTF subió cerca de 1,4% el viernes por los impactos en dos petroleros frente a Musandam y los misiles hutíes contra Riad. Aun así, la semana cerró con una baja de más de 6% por la expectativa de sobreoferta mundial.", "u": "https://www.tradingpedia.com/2026/11/20/eu-gas-rebounds-above-e86-as-mideast-risks-lift-supply/", "st": "Tradingpedia"},
    {"d": "2026-11-20", "h": "Europa ya gastó 11% del gas que inyectó en el verano", "x": "Las reservas de la UE estaban en 69,8% el 19, contra un promedio de 89% para la fecha y alrededor de 82% hace un año. El frío previsto para la semana próxima aceleraría las extracciones.", "u": "https://oilprice.com/Latest-Energy-News/World-News/Europe-Has-Already-Drained-11-of-Its-Summer-Gas-Injections.html", "st": "OilPrice.com"},
    {"d": "2026-11-20", "h": "Primer frío fuerte y alerta por nevadas en Corea del Sur", "x": "Seúl marcó −3 °C, la mínima más baja de la temporada, y en Jeonbuk cayeron más de 10 cm de nieve en la noche, con la primera alerta de desastre por nevadas del otoño.", "u": "https://news.sbs.co.kr/english/article.do?news_id=N1008856471", "st": "SBS News"},
    {"d": "2026-11-20", "h": "Japón tiene su primera nevada extendida de la temporada", "x": "Se pronosticaban más de 50 cm de nieve en las montañas de Hokuriku, Yamagata y Aizu, y temperaturas cercanas a las de diciembre para el fin de semana.", "u": "https://newsonjapan.com/article/151458.php", "st": "News On Japan"},
    {"d": "2026-11-19", "h": "EE.UU. suma sólo 20 Bcf de gas almacenado", "x": "La EIA informó una inyección de 20 Bcf en la semana al 13 de noviembre, menos de lo esperado: las reservas llegan a 3.882 Bcf. El Henry Hub tocó US$ 3,38, máximo desde junio, antes de retroceder.", "u": "https://www.fxempire.com/forecasts/article/natural-gas-outlook-20-bcf-storage-build-falls-short-of-forecast-1646032", "st": "FXEmpire"},
    {"d": "2026-11-19", "h": "Una nevada deja sin luz a 8.000 clientes en Anchorage", "x": "Con 10 a 20 cm de nieve, un árbol cayó sobre una línea de Chugach Electric; en dos horas el servicio estaba casi repuesto.", "u": "https://www.alaskasnewssource.com/2026/11/20/heavy-snow-leads-power-out-thousands-anchorage/", "st": "Alaska's News Source"},
    {"d": "2026-11-19", "h": "El vórtice polar se recupera más rápido de lo esperado", "x": "Los datos analizados de la NASA marcan 6,4 m/s a 10 hPa y 60°N el 16 de noviembre, y el modelo GEOS lo lleva a unos 26 m/s el 26, cerca de la media. Judah Cohen (AER) ve algunas corridas que insinúan otro debilitamiento a fines de noviembre o principios de diciembre.", "u": "https://ozonewatch.gsfc.nasa.gov/meteorology/figures/merra2/wind/u60n_10_2026_merra2.txt", "st": "NASA Ozone Watch"},
    {"d": "2026-11-18", "h": "El gas europeo encadena tres bajas y queda cerca de €83", "x": "El TTF cayó de unos €88 el 16 a €83,25 el 18, con el GNL estadounidense en récord y pronósticos más templados, aunque las reservas de la UE siguen en el nivel más bajo en diez años para la fecha.", "u": "https://www.oilpriceapi.com/live/dutch-ttf-gas-price", "st": "OilPriceAPI"}
  ],
  updated: "2026-11-21"
};
