/* Conflictos incorporados en la v0.3: India–Pakistán y Haití */
window.CANDIDATES = [];

window.CONFLICTS.push({
  id: "india-pakistan",
  name: "India – Pakistán",
  fullName: "Conflicto India – Pakistán",
  sub: "Dos potencias nucleares · Cachemira · guerra de cuatro días en 2025 · disputa por las aguas del Indo",
  region: "Asia meridional",
  status: "Latente · riesgo nuclear",
  level: 3,
  since: "1947-10-22",
  center: [74.5, 32.5],
  sides: {
    A: { name: "India", desc: "Controla dos tercios de Cachemira. Acusa a Pakistán de patrocinar a grupos armados como Lashkar-e-Taiba y Jaish-e-Mohammed." },
    B: { name: "Pakistán", desc: "Controla Azad Cachemira y Gilgit-Baltistán. Socio militar de China y, desde 2025, del pacto de defensa con Arabia Saudita." }
  },
  keyFacts: [
    { k: "Guerra de mayo de 2025", v: "4 días", n: "7 al 10 de mayo" },
    { k: "Ojivas nucleares estimadas", v: "180 / 170", n: "India / Pakistán (SIPRI 2025)" },
    { k: "Tratado de Aguas del Indo", v: "Suspendido", n: "por India desde abril de 2025" },
    { k: "Fallo de La Haya (31-ago-2026)", v: "Rechazado", n: "India no acepta restablecer el tratado" }
  ],
  summary: "<p>India y Pakistán pelearon tres guerras (1947, 1965, 1971) y el conflicto de Kargil (1999), y desde 1998 ambos tienen armas nucleares. Cachemira, dividida por la Línea de Control, es el núcleo de la disputa.</p><p>El 22 de abril de 2025 un atentado mató a 26 turistas en Pahalgam. India culpó a Pakistán, suspendió el Tratado de Aguas del Indo y el 7 de mayo lanzó la Operación Sindoor contra nueve sitios en Pakistán. Siguieron cuatro días de ataques con misiles, drones y artillería, incluidos golpes indios sobre bases aéreas pakistaníes, hasta el alto el fuego del 10 de mayo. En 2026 no hubo combates confirmados, pero la disputa se trasladó al agua: India rechazó el fallo de La Haya que ordena restablecer el tratado y Pakistán advierte que cualquier restricción del caudal sería un \"acto de guerra\".</p>",
  fronts: [
    { n: "Línea de Control (Cachemira)", s: "Alto el fuego", l: 2, t: "Vigente desde mayo de 2025." },
    { n: "Aguas del Indo", s: "Disputa escalando", l: 3, t: "India retiene el tratado en suspenso; Pakistán habla de guerra." },
    { n: "Insurgencia en Cachemira india", s: "Atentados esporádicos", l: 2, t: "" }
  ],
  nonState: [
    { name: "Lashkar-e-Taiba / TRF", side: "B2", where: "Cachemira" },
    { name: "Jaish-e-Mohammed", side: "B2", where: "Cachemira, Punyab pakistaní" }
  ],
  map: { bbox: [[66, 23], [82, 37]], start: "2025-04-01" },
  roles: [
    { c: "India", es: "India", r: "A", from: "2025-04-01" },
    { c: "Pakistan", es: "Pakistán", r: "B", from: "2025-04-01" },
    { c: "Siachen Glacier", es: "Glaciar de Siachen", r: "Z", from: "2025-04-01", n: "Ocupado por India desde 1984" },
    { c: "China", es: "China", r: "B2", from: "2025-04-01", n: "Principal proveedor de armas de Pakistán; controla Aksai Chin" },
    { c: "Afghanistan", es: "Afganistán", r: "M", from: "2025-04-01" },
    { c: "Nepal", es: "Nepal", r: "M", from: "2025-04-01" }
  ],
  events: [
    { d: "2025-04-22", lat: 34.01, lon: 75.32, t: "atentado", h: "Atentado de Pahalgam", x: "Militantes matan a 26 turistas en Cachemira; Nueva Delhi culpa a Pakistán." },
    { d: "2025-04-23", lat: 28.61, lon: 77.21, t: "politico", h: "India suspende el Tratado de Aguas del Indo", x: "Además expulsa diplomáticos y cierra el paso de Attari." },
    { d: "2025-05-07", lat: 29.39, lon: 71.68, t: "aereo", h: "Operación Sindoor", x: "India ataca nueve sitios, entre ellos Bahawalpur, Muzaffarabad y Kotli." },
    { d: "2025-05-07", lat: 33.77, lon: 74.09, t: "terrestre", h: "Artillería pakistaní sobre Poonch", x: "Al menos 13 civiles muertos en Cachemira india." },
    { d: "2025-05-10", lat: 33.62, lon: 73.10, t: "aereo", h: "India golpea bases aéreas pakistaníes", x: "Nur Khan, Rafiqui, Murid; Pakistán responde con la operación Bunyanum Marsoos." },
    { d: "2025-05-10", lat: 28.62, lon: 77.22, t: "diplomacia", h: "Alto el fuego", x: "Acordado entre los jefes de operaciones militares." },
    { d: "2026-03-20", lat: 28.61, lon: 77.21, t: "diplomacia", h: "India mantiene suspendido el tratado del Indo", x: "Hasta que Pakistán \"deje de apoyar el terrorismo\", dice en la ONU." },
    { d: "2026-06-22", lat: 33.69, lon: 73.05, t: "politico", h: "Pakistán amenaza con guerra por el agua", x: "El ministro de Defensa Khawaja Asif." },
    { d: "2026-08-31", lat: 52.08, lon: 4.30, t: "diplomacia", h: "Fallo de La Haya sobre el Indo", x: "La Corte Permanente de Arbitraje ordena restablecer el tratado; India lo rechaza.", nomap: true },
    { d: "2026-10-21", lat: 33.70, lon: 73.06, t: "politico", h: "Sharif: violar el tratado sería \"acto de guerra\"", x: "El agua, \"línea roja\" para Pakistán." },
    {"d": "2026-11-02", "lat": 33.7, "lon": 73.06, "t": "politico", "h": "Gillani: bloquear el agua del Indo sería un \"acto de guerra\"", "x": "El presidente del Senado pakistaní dijo en la Semana del Agua que el tratado sigue vigente y que cualquier intento de cortar o desviar la parte de Pakistán se trataría como un acto de guerra.", "u": "https://www.arabnews.pk/pakistan/pakistan-wont-allow-water-to-be-used-as-instrument-of-geopolitical-pressure-official-says-3005877", "st": "Arab News Pakistan", "nomap": true}
  ],
  timeline: [
    { d: "1947", era: "Partición", h: "Partición de la India británica", x: "Entre cientos de miles y dos millones de muertos, y unos 15 millones de desplazados. El maharajá de Cachemira se adhiere a India; primera guerra." },
    { d: "1949", era: "Partición", h: "Línea de alto el fuego en Cachemira", x: "" },
    { d: "1960", era: "Partición", h: "Tratado de Aguas del Indo", x: "Mediado por el Banco Mundial; sobrevivió a todas las guerras hasta 2025." },
    { d: "1965", era: "Guerras", h: "Segunda guerra", x: "" },
    { d: "1971", era: "Guerras", h: "Tercera guerra e independencia de Bangladés", x: "" },
    { d: "1984", era: "Guerras", h: "India ocupa el glaciar de Siachen", x: "" },
    { d: "1989", era: "Insurgencia", h: "Insurgencia armada en Cachemira india", x: "" },
    { d: "1998", era: "Nuclear", h: "Ensayos nucleares de ambos países", x: "" },
    { d: "1999", era: "Nuclear", h: "Guerra de Kargil", x: "" },
    { d: "2008", era: "Nuclear", h: "Atentados de Bombay", x: "166 muertos; Lashkar-e-Taiba." },
    { d: "2019", era: "Nuclear", h: "Pulwama, Balakot y fin de la autonomía de Cachemira", x: "" },
    { d: "2025", era: "Nuclear", h: "Pahalgam y la guerra de cuatro días", x: "" },
    { d: "2026", era: "Nuclear", h: "Disputa por el Indo", x: "" }
  ],
  history: [
    { h: "Una herida de la partición", b: "<p>La partición de 1947 dejó a Cachemira, de mayoría musulmana y gobernada por un maharajá hindú, en disputa. Su adhesión a India durante una invasión de milicias tribales apoyadas por Pakistán originó la primera guerra y una división que dura hasta hoy.</p>" },
    { h: "La guerra bajo el paraguas nuclear", b: "<p>Desde 1998 ambos tienen la bomba, lo que limita la escala de los choques pero no los evita: Kargil (1999), Balakot (2019) y Sindoor (2025) muestran un patrón de atentado, represalia y desescalada rápida con mediación externa. El agua es el nuevo frente: Pakistán depende del Indo para su agricultura y la suspensión del tratado convierte una disputa territorial en una cuestión de supervivencia.</p>" }
  ],
  alt: [
    { lvl: "doc", h: "Pakistán y los grupos armados", x: "El apoyo histórico del ISI a grupos como Lashkar-e-Taiba está documentado. Pakistán niega su participación en Pahalgam y pidió una investigación neutral." }
  ],
  sources: [
    { t: "GlobalSecurity — Operation Sindoor", u: "https://www.globalsecurity.org/military/world/war/kashmir-operation-sindoor.htm" },
    { t: "Al Jazeera — India rejects Hague court order on Indus Waters (31-ago-2026)", u: "https://www.aljazeera.com/news/2026/8/31/india-rejects-hague-court-order-to-restore-indus-waters-pact-with-pakistan" },
    { t: "Pakistan Today — Indus violation would be act of war (21-oct-2026)", u: "https://www.pakistantoday.com.pk/2026/10/21/pm-warns-india-any-indus-waters-treaty-violation-will-be-act-of-war" }
  ]
});

window.CONFLICTS.push({
 "id": "haiti",
 "name": "Haití",
 "fullName": "Crisis armada de Haití",
 "sub": "Coaliciones de pandillas contra un Estado colapsado · Fuerza de Supresión de Pandillas autorizada por la ONU",
 "region": "Caribe",
 "status": "Colapso estatal · guerra de pandillas",
 "level": 4,
 "since": "2021-07-07",
 "center": [
  -72.5,
  18.9
 ],
 "sides": {
  "A": {
   "name": "Pandillas (Viv Ansanm y otras)",
   "desc": "Coalición formada en 2023 por el G9 y el G-Pèp, liderada por Jimmy \"Barbecue\" Chérizier y designada organización terrorista por EE.UU. en 2025, más pandillas regionales como Gran Grif."
  },
  "B": {
   "name": "Estado haitiano y fuerza internacional",
   "desc": "Policía y Fuerzas Armadas de Haití, el gobierno interino del primer ministro Fils-Aimé y la Fuerza de Supresión de Pandillas autorizada por la ONU."
  }
 },
 "keyFacts": [
  {
   "k": "Muertos en 2025",
   "v": "5.915",
   "n": "BINUH/ONU; además 2.708 heridos y 647 secuestros"
  },
  {
   "k": "Muertos 2026 (ene–jun)",
   "v": "1.642 (T1) y ≥1.408 (T2)",
   "n": "BINUH; informes trimestrales oficiales de la ONU (ene–mar y abr–jun 2026)"
  },
  {
   "k": "Desplazados internos",
   "v": "~1,5 millones",
   "n": "OIM, septiembre de 2026; récord histórico"
  },
  {
   "k": "Fuerza de Supresión de Pandillas",
   "v": ">2.000 de 5.550 autorizados",
   "n": "AP, 19-oct-2026; mandato hasta 31-mar-2027"
  }
 ],
 "summary": "<p>Haití vive la peor crisis de seguridad de su historia moderna. Tras el asesinato del presidente Jovenel Moïse en 2021, las pandillas de Puerto Príncipe se unieron en la coalición Viv Ansanm (2023), forzaron la renuncia del primer ministro Ariel Henry en marzo de 2024 y hoy controlan cerca del 70% de la capital y las principales rutas de salida. La ONU registró al menos 5.915 muertos en 2025 y, en 2026, 1.642 muertos en el primer trimestre y al menos 1.408 en el segundo; desde 2025, la mayoría de las víctimas registradas se producen en operaciones de las fuerzas de seguridad (a veces con drones de una empresa militar privada), además de las matanzas de pandillas y de grupos de autodefensa. Casi 1,5 millones de personas están desplazadas, cifra récord según la OIM.</p><p>En el plano político, el Consejo Presidencial de Transición terminó su mandato el 7 de febrero de 2026 sin sucesor, dejando al primer ministro Alix Didier Fils-Aimé como única autoridad ejecutiva. En el plano de seguridad, la misión keniana (MSS) fue reemplazada por la Fuerza de Supresión de Pandillas, autorizada por el Consejo de Seguridad el 30 de septiembre de 2025 con hasta 5.550 efectivos; sus primeras tropas (Chad) llegaron en abril de 2026, pero en octubre de 2026 tenía algo más de 2.000 efectivos y su mandato fue prorrogado hasta el 31 de marzo de 2027. En octubre de 2026 las pandillas lanzaron su mayor ataque contra la fuerza internacional en Croix-des-Bouquets, y el Consejo Electoral Provisional suspendió la campaña y postergó sin nueva fecha las elecciones previstas para el 13 de diciembre.</p>",
 "fronts": [
  {
   "n": "Puerto Príncipe",
   "s": "Control de pandillas",
   "l": 4,
   "t": "Cerca del 70% de la capital y las rutas de salida."
  },
  {
   "n": "Croix-des-Bouquets y el este",
   "s": "Combates con la GSF",
   "l": 4,
   "t": "Mayor ataque contra la fuerza internacional (18-oct-2026)."
  },
  {
   "n": "Artibonite",
   "s": "Masacres",
   "l": 4,
   "t": "Gran Grif contra grupos de autodefensa."
  }
 ],
 "nonState": [
  {
   "name": "Viv Ansanm",
   "side": "A",
   "where": "Alianza formada en sept. 2023 entre G9 y G-Pèp; portavoz Jimmy 'Barbecue' Chérizier; designada organización terrorista por EE.UU. en mayo de 2025"
  },
  {
   "name": "400 Mawozo",
   "side": "A",
   "where": "Croix-des-Bouquets; líder Lanmo Sanjou, sancionado por ONU y EE.UU."
  },
  {
   "name": "Kraze Baryè",
   "side": "A",
   "where": "Líder Vitelhomme Innocent, sancionado por ONU y EE.UU."
  },
  {
   "name": "Chèn Méchan",
   "side": "A",
   "where": "Activa en Croix-des-Bouquets"
  },
  {
   "name": "Gran Grif",
   "side": "A",
   "where": "Artibonite (Petite-Rivière); masacres contra grupos de autodefensa"
  },
  {
   "name": "Fuerza de Supresión de Pandillas (GSF)",
   "side": "B2",
   "where": "Res. 2793; tropas de Chad, Sri Lanka, Guatemala, El Salvador, Jamaica, Mongolia, Bangladés, Bahamas, Belice; comandante mongol Erdenebat Batsuuri"
  },
  {
   "name": "Grupos de autodefensa / 'Bwa Kale'",
   "side": "M",
   "where": "Responsables de linchamientos; 4–6% de las víctimas según la ONU"
  }
 ],
 "map": {
  "bbox": [
   [
    -74.6,
    17.8
   ],
   [
    -71.4,
    20.2
   ]
  ],
  "start": "2021-06-15"
 },
 "roles": [
  {
   "c": "Haiti",
   "es": "Haití",
   "r": "Z",
   "from": "2021-06-15"
  },
  {
   "c": "Dominican Rep.",
   "es": "República Dominicana",
   "r": "M",
   "from": "2021-06-15",
   "n": "Frontera militarizada y deportaciones masivas"
  },
  {
   "c": "United States of America",
   "es": "Estados Unidos",
   "r": "B2",
   "from": "2021-06-15",
   "n": "Principal financista de la misión internacional"
  },
  {
   "c": "Cuba",
   "es": "Cuba",
   "r": "M",
   "from": "2021-06-15"
  },
  {
   "c": "Jamaica",
   "es": "Jamaica",
   "r": "B2",
   "from": "2024-06-25",
   "n": "Aporta efectivos"
  },
  {
   "c": "Bahamas",
   "es": "Bahamas",
   "r": "B2",
   "from": "2024-06-25",
   "n": "Aporta efectivos"
  },
  {
   "c": "Kenya",
   "es": "Kenia",
   "r": "B2",
   "from": "2024-06-25",
   "to": "2026-03-31",
   "n": "Lideró la misión MSS"
  },
  {
   "c": "Chad",
   "es": "Chad",
   "r": "B2",
   "from": "2026-04-01",
   "n": "Primeras tropas de la GSF"
  }
 ],
 "events": [
  {"d": "2026-10-05", "lat": 18.5425, "lon": -72.3386, "t": "politico", "h": "Elecciones postergadas sin fecha", "x": "El Consejo Electoral Provisional suspende la campaña; la primera vuelta estaba prevista para el 13 de diciembre."},
  {
   "d": "2021-07-07",
   "lat": 18.5115,
   "lon": -72.289,
   "t": "atentado",
   "h": "Asesinato del presidente Jovenel Moïse",
   "x": "Un comando de mercenarios mata a Moïse en su residencia de Pèlerin (Puerto Príncipe), abriendo un vacío de poder que aprovechan las pandillas."
  },
  {
   "d": "2023-09-01",
   "lat": 18.5425,
   "lon": -72.3386,
   "t": "politico",
   "h": "Nace la coalición de pandillas Viv Ansanm",
   "x": "Jimmy \"Barbecue\" Chérizier anuncia la alianza entre el G9 y su rival G-Pèp para derrocar al primer ministro Ariel Henry.",
   "p": "m"
  },
  {
   "d": "2024-03-12",
   "lat": 18.5425,
   "lon": -72.3386,
   "t": "politico",
   "h": "Renuncia el primer ministro Ariel Henry",
   "x": "Tras los ataques coordinados de Viv Ansanm contra instalaciones estatales, aeropuertos y puertos, Henry renuncia."
  },
  {
   "d": "2024-06-25",
   "lat": 18.58,
   "lon": -72.2925,
   "t": "terrestre",
   "h": "Llegan los primeros policías kenianos (misión MSS)",
   "x": "Un primer contingente de 400 policías de Kenia aterriza en Puerto Príncipe para encabezar la Misión Multinacional de Apoyo a la Seguridad."
  },
  {
   "d": "2025-09-30",
   "lat": 40.749,
   "lon": -73.968,
   "t": "diplomacia",
   "h": "La ONU autoriza la Fuerza de Supresión de Pandillas",
   "x": "El Consejo de Seguridad aprueba la Resolución 2793, que transforma la misión keniana en una fuerza de hasta 5.550 efectivos.",
   "nomap": true
  },
  {
   "d": "2026-02-07",
   "lat": 18.5425,
   "lon": -72.3386,
   "t": "politico",
   "h": "Termina el mandato del Consejo Presidencial de Transición",
   "x": "El consejo se disuelve sin plan de sucesión y el primer ministro Alix Didier Fils-Aimé asume en solitario la autoridad ejecutiva."
  },
  {
   "d": "2026-03-29",
   "lat": 19.133,
   "lon": -72.478,
   "t": "terrestre",
   "h": "Masacre de Gran Grif en Petite-Rivière-de-l'Artibonite",
   "x": "La pandilla Gran Grif mata al menos a 16 personas en combates con un grupo de autodefensa; activistas hablan de más de 30 muertos."
  },
  {
   "d": "2026-04-01",
   "lat": 18.58,
   "lon": -72.2925,
   "t": "terrestre",
   "h": "Llegan las primeras tropas de la GSF (Chad)",
   "x": "Un equipo de avanzada chadiano inicia el despliegue de la Fuerza de Supresión de Pandillas, que reemplaza a la misión keniana."
  },
  {
   "d": "2026-09-29",
   "lat": 40.749,
   "lon": -73.968,
   "t": "diplomacia",
   "h": "La ONU prorroga la GSF hasta marzo de 2027",
   "x": "El Consejo de Seguridad extiende seis meses el mandato (12 votos a favor; abstenciones de Rusia, China y Pakistán); la fuerza sigue muy por debajo de los 5.500 efectivos.",
   "nomap": true
  },
  {
   "d": "2026-10-18",
   "lat": 18.578,
   "lon": -72.225,
   "t": "terrestre",
   "h": "Mayor ataque de pandillas contra la GSF en Croix-des-Bouquets",
   "x": "Pandillas atacan con explosivos un blindado con cuatro técnicos salvadoreños, que quedan desaparecidos; helicópteros salvadoreños también reciben fuego."
  },
  {"d":"2026-10-27", "lat":18.54, "lon":-72.34, "t":"terrestre", "h":"El Salvador envía unos 1.000 soldados a Haití", "x":"Llegaron en vuelos con apoyo de aviones C-130 de EE.UU., después de la emboscada del 18 de octubre en la que desaparecieron cuatro salvadoreños de la GSF. No se sabe quién los comandará ni por cuánto tiempo.", "u":"https://yahoo.com/news/articles/around-1-000-soldiers-el-172815445.html", "st":"Reuters"},
  {"d": "2026-10-28", "lat": 18.5425, "lon": -72.3386, "t": "politico", "h": "Las elecciones pasan al 18 de julio de 2027", "x": "El Consejo Electoral Provisional fijó una nueva fecha para la primera vuelta presidencial y legislativa, que estaba prevista para el 13 de diciembre, por la falta de seguridad. Haití no vota desde 2016.", "u": "https://www.infobae.com/america/agencias/2026/10/29/haiti-aplaza-de-nuevo-las-elecciones-presidenciales-y-legislativas-al-18-de-julio-de-2027/", "st": "Infobae (EFE)"},
  {"d": "2026-10-28", "lat": 18.54, "lon": -72.34, "t": "politico", "h": "El Salvador eleva a más de 2.000 los soldados para Haití", "x": "La cancillería salvadoreña anunció el envío para buscar a los cuatro técnicos desaparecidos el 18-oct y combatir a las pandillas; no está claro si se integrarán a la GSF.", "u": "https://aljazeera.com/news/2026/10/29/el-salvador-pledges-more-than-2000-soldiers-as-haiti-delays-elections", "st": "Al Jazeera"},
  {"d": "2026-10-28", "lat": 0, "lon": 0, "nomap": true, "t": "politico", "h": "Récord de hambre: 5,94 millones de haitianos en inseguridad alimentaria aguda", "x": "El nuevo análisis internacional ubica a 1,8 millones en fase de emergencia y proyecta 6,35 millones para mediados de 2027.", "u": "https://aljazeera.com/news/2026/10/29/el-salvador-pledges-more-than-2000-soldiers-as-haiti-delays-elections", "st": "Al Jazeera"},
  {"d": "2026-10-30", "lat": 18.58, "lon": -72.27, "t": "terrestre", "h": "Tropas salvadoreñas montan una base en Tabarre y empiezan a patrullar", "x": "Con blindados y cobertura de helicópteros recorrieron el entorno del aeropuerto, Tabarre y la zona de Santo, en Croix-des-Bouquets, en busca de los cuatro militares desaparecidos desde la emboscada del 18 de octubre.", "u": "https://www.infobae.com/el-salvador/2026/10/31/militares-salvadorenos-montan-base-cerca-de-embajada-de-ee-uu-e-inician-patrullajes-en-puerto-principe-haiti/", "st": "Infobae"},
  {"d": "2026-10-31", "lat": 18.6, "lon": -72.2, "nomap": true, "t": "politico", "h": "Bukele niega bombardeos contra civiles en Haití", "x": "Una asociación de la diáspora haitiana denunció ante Guterres ataques aéreos sobre Croix-des-Bouquets y Canaán desde el 22 de octubre. Bukele respondió que la misión no lleva bombas y que sus helicópteros, llegados el 29, todavía no hicieron ninguna misión.", "u": "https://diariolibre.com/mundo/haiti/2026/10/31/bukele-rechaza-acusaciones-de-bombardeos-contra-civiles-en-haiti/3707004", "st": "EFE vía Diario Libre"},
    {"d": "2026-11-02", "lat": 18.6, "lon": -72.29, "t": "terrestre", "h": "Primera ofensiva terrestre salvadoreña contra las pandillas", "x": "Con una decena de blindados, las tropas de El Salvador avanzaron sobre Santo y Croix-des-Missions, en la llanura de Cul-de-Sac, contra Chen Mechan y 400 Mawozo, mientras la policía haitiana opera con la fuerza de la ONU. Medios haitianos hablan de al menos diez pandilleros muertos. El jefe de 400 Mawozo le pidió a Guterres una mediación; la ONU confirmó la carta, aclaró que no lo reconoce y recordó que la mayoría de las tropas salvadoreñas no integra la fuerza que autorizó el Consejo de Seguridad.", "u": "https://www.infobae.com/el-salvador/2026/11/03/las-fuerzas-salvadorenas-lanzan-su-primera-ofensiva-terrestre-contra-pandillas-al-noreste-de-puerto-principe/", "st": "Infobae (EFE)"},
    {"d": "2026-11-02", "lat": 40.75, "lon": -73.97, "t": "diplomacia", "h": "La ONU recibe la carta del jefe de 400 Mawozo, sin reconocerlo", "x": "El vocero Stéphane Dujarric confirmó la carta en la que Wilson Joseph pide una delegación para negociar, pero aclaró que eso no implica reconocimiento y que toda operación debe respetar el derecho humanitario. La mayoría de las tropas salvadoreñas no integra la fuerza de la ONU.", "u": "https://news.un.org/fr/story/2026/11/1159776", "st": "ONU Info", "nomap": true},
    {"d": "2026-11-03", "lat": 18.58, "lon": -72.23, "t": "aereo", "h": "Helicópteros salvadoreños disparan contra pandillas en Croix-des-Bouquets", "x": "Bukele difundió imágenes de helicópteros que apoyaban a tropas chadianas de la fuerza internacional atacadas por pandillas, y vecinos de la llanura del Cul-de-Sac confirmaron los disparos desde el aire. No hubo balance de víctimas.", "u": "https://www.aljazeera.com/news/2026/11/5/el-salvadors-bukele-touts-military-intervention-in-haiti", "st": "Al Jazeera"},
    {"d": "2026-11-03", "lat": 18.59, "lon": -72.22, "t": "terrestre", "h": "Aparece quemado el camión de los técnicos salvadoreños desaparecidos", "x": "Un operativo conjunto halló en Santo los restos incendiados del vehículo de los cuatro aerotécnicos desaparecidos el 18 de octubre, que siguen sin aparecer. El jefe de 400 Mawozo dice que murieron; El Salvador cree que están vivos.", "u": "https://www.aljazeera.com/news/2026/11/5/el-salvadors-bukele-touts-military-intervention-in-haiti", "st": "Al Jazeera"},
    {"d": "2026-11-05", "lat": 40.42, "lon": -3.7, "t": "diplomacia", "h": "El Salvador defiende su despliegue en Haití en la Cumbre Iberoamericana", "x": "El vicepresidente Félix Ulloa negó que sea una fuerza de ocupación y dijo que el objetivo es recuperar a los cuatro técnicos; Bukele afirmó que su país paga cerca del 90% de la operación y que retirará las tropas cuando se los devuelvan.", "u": "https://www.infobae.com/el-salvador/2026/11/05/vicepresidente-afirma-en-la-cumbre-iberoamericana-que-las-tropas-salvadorenas-en-haiti-no-son-una-fuerza-de-ocupacion/", "st": "Infobae"},
    {"d": "2026-11-06", "nomap": true, "lat": 13.69, "lon": -89.19, "t": "diplomacia", "h": "El Salvador y Haití definirán este mes el futuro de las tropas", "x": "El vicepresidente Félix Ulloa dijo que una reunión bilateral en San Salvador decidirá qué pasa con los cerca de 2.000 efectivos; el primer ministro Fils-Aimé viajará el 16 y 17 de noviembre.", "u": "https://www.infobae.com/el-salvador/2026/11/06/el-futuro-de-las-2000-tropas-salvadorenas-en-haiti-se-definira-este-mes-en-una-reunion-bilateral-en-san-salvador/", "st": "EFE (vía Infobae)"},
    {"d": "2026-11-04", "lat": 18.77, "lon": -72.51, "t": "terrestre", "h": "Represalias de pandillas en Arcahaie: 16 muertos en tres días", "x": "Tras un operativo policial del 29 de octubre en el que murió el jefe \"Galaxy\", las bandas atacaron la comuna durante varios días; entre los muertos hay integrantes de brigadas de autodefensa.", "u": "https://lenouvelliste.com/article/273535/16-dead-after-three-days-of-armed-gang-attacks-in-arcahaie", "st": "Le Nouvelliste"},
    {"d": "2026-11-06", "lat": 18.58, "lon": -72.33, "t": "aereo", "h": "Muere Mathias Saintil, jefe de la banda Boston de Cité Soleil", "x": "El primer ministro Fils-Aimé anunció la muerte del líder de la banda, parte de Viv Ansanm. Una red de derechos humanos dice que lo hirió un dron explosivo el 5 por la noche; la policía habla de disparos durante un operativo.", "u": "https://www.yahoo.com/news/world/articles/haiti-gang-leader-killed-drone-223037822.html", "st": "Miami Herald"}
  ],
 "timeline": [
  {
   "d": "1804",
   "era": "Orígenes",
   "h": "Independencia",
   "x": "Primera república negra, tras la única rebelión de esclavos triunfante; Francia le impone en 1825 una deuda de independencia que pagó durante más de un siglo."
  },
  {
   "d": "1915–1934",
   "era": "Orígenes",
   "h": "Ocupación estadounidense",
   "x": ""
  },
  {
   "d": "1957–1986",
   "era": "Dictadura",
   "h": "Duvalier padre e hijo",
   "x": "Milicia de los tonton macoutes."
  },
  {
   "d": "1991–2004",
   "era": "Inestabilidad",
   "h": "Golpes contra Aristide",
   "x": "Intervención de EE.UU. en 1994; segundo derrocamiento en 2004."
  },
  {
   "d": "2004–2017",
   "era": "Inestabilidad",
   "h": "Misión de la ONU (MINUSTAH)",
   "x": "Liderada por Brasil; brote de cólera introducido por cascos azules."
  },
  {
   "d": "2010",
   "era": "Inestabilidad",
   "h": "Terremoto",
   "x": "Más de 200.000 muertos."
  },
  {
   "d": "2021",
   "era": "Colapso",
   "h": "Asesinato de Jovenel Moïse",
   "x": ""
  },
  {
   "d": "2023",
   "era": "Colapso",
   "h": "Nace Viv Ansanm",
   "x": ""
  },
  {
   "d": "2024",
   "era": "Colapso",
   "h": "Renuncia de Henry y llegada de la misión keniana",
   "x": ""
  },
  {
   "d": "2025",
   "era": "Colapso",
   "h": "La ONU autoriza la Fuerza de Supresión de Pandillas",
   "x": ""
  },
  {
   "d": "2026",
   "era": "Colapso",
   "h": "Fin del Consejo de Transición, llegada de la GSF y elecciones postergadas",
   "x": ""
  }
 ],
 "history": [
  {
   "h": "Un Estado debilitado desde el origen",
   "b": "<p>Haití arrastra dos siglos de deuda externa, ocupaciones, dictaduras y golpes. Las élites políticas y económicas usaron históricamente a grupos armados de barrio para controlar votos y territorios. Tras el terremoto de 2010 y la salida de la misión de la ONU en 2017, esas bandas ganaron autonomía económica con secuestros, extorsión y control de rutas y puertos.</p>"
  },
  {
   "h": "De herramienta política a poder propio",
   "b": "<p>El asesinato de Moïse en 2021 dejó al país sin presidente ni parlamento. Las pandillas dejaron de ser instrumentos de los políticos para disputarles el poder: en 2024 forzaron la renuncia del primer ministro y hoy dominan la capital. La respuesta internacional fue tardía y subfinanciada: la misión keniana nunca llegó a su dotación prevista y la nueva fuerza de la ONU tiene menos de la mitad de sus efectivos.</p>"
  }
 ],
 "alt": [
  {
   "lvl": "doc",
   "h": "Las víctimas del Estado",
   "x": "Según la ONU, desde 2025 la mayoría de los muertos registrados caen en operaciones de las fuerzas de seguridad, algunas con drones operados por una empresa militar privada contratada por el gobierno, no en ataques de pandillas."
  }
 ],
 "sources": [
  {
   "t": "AP vía NY1 — Gangs target foreign troops (19-oct-2026)",
   "u": "https://ny1.com/nyc/all-boroughs/ap-top-news/2026/10/19/gangs-in-haiti-target-foreign-troops-in-biggest-attack-since-new-force-began-operations"
  },
  {
   "t": "Al Jazeera — First troops of gang suppression force arrive (abr-2026)",
   "u": "https://www.aljazeera.com/news/2026/4/2/first-troops-from-un-backed-gang-suppression-force-arrive-in-haiti"
  },
  {
   "t": "Citizen Digital — UN extends Haiti anti-gang force",
   "u": "https://citizen.digital/article/un-security-council-extends-haiti-anti-gang-force-by-6-months-n391143"
  }
 ]
});
window.ALERTS.push({ id: "haiti", level: 4, tag: "Escalada", date: "2026-11-07", title: "Haití: muere un jefe de Viv Ansanm en plena ofensiva y las bandas se vengan en Arcahaie", text: "El primer ministro Fils-Aimé confirmó el 6 de noviembre la muerte de Mathias Saintil, jefe de la banda Boston en Cité Soleil, herido en una operación en la que, según una red de derechos humanos, se usó un dron explosivo. En Arcahaie, las represalias de las pandillas tras la muerte del jefe \"Galaxy\" dejaron 16 muertos en tres días. La ofensiva combina a la policía, la Fuerza de Supresión de Pandillas y unos 2.000 soldados salvadoreños, mientras siguen desaparecidos los técnicos salvadoreños. El Salvador y Haití definirán el futuro de esas tropas el 16 y 17 de noviembre en San Salvador." });

/* Conflicto incorporado el 2026-11-03 por la actualización diaria: guerra en el norte de Etiopía */
window.CONFLICTS.push({
  id: "etiopia",
  name: "Etiopía (Tigray)",
  fullName: "Guerra en el norte de Etiopía",
  sub: "Gobierno de Abiy Ahmed contra la alianza del TPLF y el Fano · Tigray, Afar y Amhara · ruptura con Eritrea",
  region: "Cuerno de África",
  status: "Guerra civil reabierta",
  level: 4,
  since: "2026-09-23",
  center: [39.3, 13.0],
  sides: {
    A: { name: "Gobierno federal etíope", desc: "Fuerzas de Defensa Nacional (ENDF), fuerza aérea con drones, policía federal, fuerzas regionales de Amhara y la Fuerza de Paz de Tigray, formada por disidentes del TPLF." },
    B: { name: "Alianza de Fuerzas Populares Etíopes por la Supervivencia", desc: "Coalición anunciada el 20-sep-2026 para derrocar a Abiy. La encabeza el TPLF con sus Fuerzas de Defensa de Tigray (TDF); según ACLED, a fines de septiembre sólo combatían el TPLF, el Movimiento Nacional Fano de Amhara y Ugugumo." }
  },
  keyFacts: [
    { k: "Ofensiva tigriña", v: "23-sep-2026", n: "toma de los aeropuertos de Mekelle, Axum y Shire; choques desde el 1-ago (ACLED)" },
    { k: "Mekelle", v: "En manos federales", n: "desde el 4-oct-2026, tras el repliegue del TPLF" },
    { k: "Ataque al campo de desplazados Jaari 2 (Amhara)", v: "≥ 15 muertos", n: "30-oct-2026, fuentes del rescate citadas por Reuters" },
    { k: "Acuerdo de paz de Pretoria (nov-2022)", v: "Roto", n: "el TPLF lo dio por muerto en jul-2026" }
  ],
  summary: "<p>La guerra de Tigray de 2020–2022 terminó con el acuerdo de Pretoria, firmado en noviembre de 2022, pero quedaron sin resolver los territorios disputados con Amhara, el regreso de los desplazados y el desarme de las fuerzas tigriñas. En julio de 2026 el TPLF dio el acuerdo por muerto, en agosto hubo choques cerca de la frontera con Sudán y el 20 de septiembre siete grupos armados y políticos anunciaron una alianza para derrocar al primer ministro Abiy Ahmed.</p><p>El <strong>23 de septiembre</strong> las fuerzas tigriñas tomaron los aeropuertos de Mekelle, Axum y Shire y avanzaron sobre Afar y Amhara, en lo que el TPLF llamó una \"guerra defensiva\". El gobierno respondió con drones y una contraofensiva: retomó Sekota y Alamata, y el 4 de octubre entró en Mekelle tras el repliegue del TPLF; después tomó Adigrat, Adwa y Shire. Abiy designó un consejo interino para Tigray por seis meses, pero las TDF contraatacan en el centro de la región y el Fano disputa rutas en Amhara.</p><p>El conflicto tiene dimensión regional: Etiopía rompió relaciones con Eritrea el 1 de octubre y la acusa de financiar a los rebeldes; AP informó de tropas eritreas en Adigrat. Egipto, Eritrea, Sudán y Somalia se acercaron en una cumbre en New Alamein, y Sudán acusa a Etiopía de lanzar drones contra su territorio. La OMS advierte que el sistema de salud del norte está al borde del colapso.</p>",
  fronts: [
    { n: "Centro y norte de Tigray", s: "Contraofensiva tigriña", l: 4, t: "Las fuerzas federales controlan las ciudades (Mekelle, Adigrat, Adwa, Shire); las TDF contraatacan en el interior." },
    { n: "Frontera con Eritrea", s: "Tensión extrema", l: 4, t: "Relaciones rotas desde el 1-oct; Etiopía denuncia tropas eritreas en su territorio y las atacó con drones." },
    { n: "Amhara (Fano)", s: "Combates en rutas", l: 3, t: "El Fano disputa la ruta B22 cerca de Woldia y el camino a Sekota." },
    { n: "Afar", s: "Disputado", l: 3, t: "Los avances tigriños sobre Abala y Erebti amenazaron el corredor Semera–Yibuti, principal vía de importación del país." }
  ],
  nonState: [
    { name: "TPLF / Fuerzas de Defensa de Tigray", side: "B", where: "Tigray" },
    { name: "Movimiento Nacional Fano de Amhara", side: "B2", where: "Amhara" },
    { name: "Ejército de Liberación Oromo", side: "B2", where: "Oromía (miembro de la alianza)" },
    { name: "Fuerza de Paz de Tigray", side: "A2", where: "Tigray" }
  ],
  map: { bbox: [[34, 8.5], [43.5, 15.8]], start: "2026-08-01" },
  roles: [
    { c: "Ethiopia", es: "Etiopía", r: "A", from: "2026-08-01" },
    { c: "Eritrea", es: "Eritrea", r: "B2", from: "2026-09-29", n: "Acusada por Etiopía de financiar a los rebeldes; lo niega. AP informó de tropas eritreas en Adigrat" },
    { c: "Egypt", es: "Egipto", r: "M", from: "2026-08-01", n: "Acusado por Etiopía de respaldar a los rebeldes; lo niega" },
    { c: "Sudan", es: "Sudán", r: "M", from: "2026-08-01", n: "Acusa a Etiopía de lanzar drones desde su territorio" },
    { c: "Somalia", es: "Somalia", r: "M", from: "2026-08-01" },
    { c: "Djibouti", es: "Yibuti", r: "M", from: "2026-08-01", n: "Puerto por el que entra la mayor parte de las importaciones etíopes" }
  ],
  events: [
    { d: "2026-08-01", lat: 14.29, lon: 36.62, t: "terrestre", h: "Primeros choques cerca de la frontera con Sudán", x: "Según ACLED, fuerzas tigriñas y federales empezaron a enfrentarse en el oeste de Tigray, una zona disputada con Amhara.", u: "https://www.aljazeera.com/news/2026/10/2/how-the-fighting-in-ethiopia-spread-beyond-tigray-in-maps-and-charts", st: "Al Jazeera" },
    { d: "2026-09-20", lat: 9.03, lon: 38.74, nomap: true, t: "politico", h: "Nace una alianza armada para derrocar a Abiy", x: "Siete movimientos, entre ellos el TPLF, el Fano amhara y el Ejército de Liberación Oromo, anunciaron la Alianza de Fuerzas Populares Etíopes por la Supervivencia. El gobierno acusa a Eritrea de financiarla.", u: "https://www.aljazeera.com/news/2026/9/24/fighting-widens-across-ethiopia-as-tigray-clashes-escalate", st: "Al Jazeera" },
    { d: "2026-09-22", lat: 12.42, lon: 39.56, t: "aereo", h: "Drones federales sobre Alamata", x: "ACLED registró entre 15 y 17 ataques con drones sobre la ciudad, incluidas varias escuelas y un hospital.", u: "https://www.aljazeera.com/news/2026/10/2/how-the-fighting-in-ethiopia-spread-beyond-tigray-in-maps-and-charts", st: "Al Jazeera" },
    { d: "2026-09-23", lat: 13.47, lon: 39.53, t: "terrestre", h: "Las fuerzas tigriñas toman los aeropuertos de Mekelle, Axum y Shire", x: "Avanzaron además sobre Afar, donde tomaron Abala, y sobre Amhara. El TPLF habló de \"guerra defensiva\" y el gobierno de \"ofensiva total\"; Ethiopian Airlines suspendió los vuelos a Tigray.", u: "https://www.aljazeera.com/news/2026/9/24/fighting-widens-across-ethiopia-as-tigray-clashes-escalate", st: "Al Jazeera" },
    { d: "2026-09-27", lat: 12.63, lon: 39.03, t: "terrestre", h: "El gobierno retoma Sekota", x: "Las fuerzas federales recuperaron la capital de la zona de Wag Hemra, en Amhara.", u: "https://www.aljazeera.com/news/2026/10/2/how-the-fighting-in-ethiopia-spread-beyond-tigray-in-maps-and-charts", st: "Al Jazeera" },
    { d: "2026-09-28", lat: 12.42, lon: 39.56, t: "terrestre", h: "Fuerzas progubernamentales toman Alamata", x: "Es el principal nudo de abastecimiento del sur de Tigray, a unos 120 km de Mekelle.", u: "https://www.aljazeera.com/news/2026/10/2/how-the-fighting-in-ethiopia-spread-beyond-tigray-in-maps-and-charts", st: "Al Jazeera" },
    { d: "2026-10-01", lat: 15.34, lon: 38.93, t: "diplomacia", h: "Etiopía y Eritrea rompen relaciones", x: "Addis Abeba cerró su embajada en Asmara y expulsó a diez diplomáticos eritreos por \"actos hostiles\"; Eritrea cortó los lazos y niega apoyar a los rebeldes.", u: "https://www.aljazeera.com/news/2026/10/5/ethiopias-forces-retake-mekelle-amid-renewed-tigray-fighting", st: "Al Jazeera" },
    { d: "2026-10-04", lat: 13.5, lon: 39.47, t: "terrestre", h: "Las fuerzas federales entran en Mekelle", x: "El TPLF confirmó que se retiró de la capital regional y que gobernará desde otro lugar; el ejército y la Fuerza de Paz de Tigray tomaron el aeropuerto y otros puntos clave.", u: "https://www.aljazeera.com/news/2026/10/5/ethiopias-forces-retake-mekelle-amid-renewed-tigray-fighting", st: "Al Jazeera" },
    { d: "2026-10-04", lat: 30.83, lon: 28.95, nomap: true, t: "diplomacia", h: "Cumbre de Egipto, Eritrea, Sudán y Somalia en New Alamein", x: "Prometieron más cooperación y respeto a la soberanía y la integridad territorial, sin formar una alianza militar. Egipto ve como amenazas la gran represa etíope y cualquier salida de Etiopía al mar Rojo.", u: "https://www.aljazeera.com/news/2026/10/9/will-ethiopias-neighbours-intervene-as-tigray-war-escalates", st: "Al Jazeera" },
    { d: "2026-10-08", lat: 14.1, lon: 38.28, t: "terrestre", h: "El ejército toma Shire", x: "Es la ciudad más occidental de Tigray sobre la ruta B30.", u: "https://www.criticalthreats.org/briefs/ethiopia-war-security-review/october-23-2026", st: "Critical Threats (AEI)" },
    { d: "2026-10-09", lat: 14.28, lon: 39.46, t: "terrestre", h: "AP informa de tropas eritreas en Adigrat", x: "La agencia dio cuenta de soldados eritreos en Adigrat e Idaga Hamus, en el norte de Tigray; Asmara no lo confirmó ni lo desmintió.", u: "https://www.aljazeera.com/news/2026/10/9/will-ethiopias-neighbours-intervene-as-tigray-war-escalates", st: "Al Jazeera (AP)" },
    { d: "2026-10-16", lat: 13.5, lon: 39.47, t: "politico", h: "Abiy designa un consejo interino para Tigray", x: "Gobernará seis meses, hasta elecciones regionales, con miembros de escisiones del TPLF.", u: "https://www.criticalthreats.org/briefs/ethiopia-war-security-review/october-23-2026", st: "Critical Threats (AEI)" },
    { d: "2026-10-22", lat: 13.62, lon: 39.0, t: "terrestre", h: "Contraofensiva tigriña y combates en el centro de Tigray", x: "Mientras el ejército tomaba Zana y Abiy Addi, las TDF contraatacaban en el centro de la región y el Fano cortaba la ruta B22 cerca de Woldia; los rebeldes tomaron Abergele el 23.", u: "https://www.criticalthreats.org/briefs/ethiopia-war-security-review/october-23-2026", st: "Critical Threats (AEI)" },
    { d: "2026-10-30", lat: 11.5, lon: 39.6, nomap: true, t: "aereo", h: "Drones contra un campo de desplazados en Amhara: al menos 15 muertos", x: "El ataque al campo Jaari 2 mató a varios niños, según fuentes del rescate citadas por Reuters; no se sabe quién lo hizo. Por otra parte murieron varias personas que buscaban comida en Rama, en Tigray.", u: "https://www.aljazeera.com/news/2026/11/2/violence-in-northern-ethiopia-pushing-health-system-towards-collapse-who", st: "Al Jazeera (Reuters, AP)" },
    { d: "2026-11-02", lat: 9.03, lon: 38.74, nomap: true, t: "politico", h: "La OMS: el sistema de salud del norte, al borde del colapso", x: "Tedros Adhanom Ghebreyesus advirtió por la falta de personal, medicamentos y ambulancias y por la inseguridad que bloquea los suministros.", u: "https://www.aljazeera.com/news/2026/11/2/violence-in-northern-ethiopia-pushing-health-system-towards-collapse-who", st: "Al Jazeera" },
    {"d": "2026-10-31", "lat": 14.12, "lon": 38.72, "t": "terrestre", "h": "El TPLF dice haber matado a 500 soldados cerca de Axum", "x": "Según la radio tigriña Dimtsi Weyane, la contraofensiva causó 500 muertos y 800 heridos al ejército federal; es una cifra de parte, sin verificación ni respuesta del gobierno. La zona está sin teléfono ni internet.", "u": "https://www.africanews.com/amp/2026/11/03/ethiopias-tigray-rebels-claim-to-have-inflicted-heavy-losses-on-army/", "st": "Africanews"},
    {"d": "2026-11-02", "lat": 3.53, "lon": 39.05, "t": "terrestre", "h": "Choques entre Oromía y la región Somalí cruzan a Kenia en Moyale", "x": "Granadas cayeron en el lado keniano de Moyale, en una escuela y en la oficina meteorológica, y una mujer de 65 años murió por una bala perdida. Unos 50.000 refugiados cruzaron a Kenia desde el 22 de octubre.", "u": "https://www.the-star.co.ke/counties/north-eastern/2026-11-03-moyale-woman-killed-by-suspected-stray-bullet-as-ethiopia-clashes-escalate", "st": "The Star (Kenia)"},
    { d: "2026-10-30", lat: 14.4, lon: 38.78, t: "aereo", h: "Un dron mata a una docena de civiles en Rama (Tigray)", x: "El ataque alcanzó a jóvenes que juntaban grano de un camión cerca de la frontera con Eritrea; ACLED cuenta 12 civiles muertos y AFP entre 11 y 13. Los monitores lo atribuyen al ejército federal, que no se pronunció.", u: "https://mereja.com/index/838644", st: "Mereja (BBC Amárico, ACLED, AFP)" },
    { d: "2026-11-04", lat: 10.07, lon: 34.53, t: "diplomacia", h: "Etiopía expulsa a los diplomáticos sudaneses de Asosa", x: "Adís Abeba cerró el consulado de Sudán en Asosa (Benishangul) y Jartum respondió con el cierre del consulado etíope en Gedaref. Es la tercera ruptura con un vecino desde septiembre, tras la de Eritrea y la expulsión de un diplomático egipcio.", u: "https://www.aljazeera.com/news/2026/11/4/sudan-ethiopia-order-tit-for-tat-diplomatic-expulsions", st: "Al Jazeera" },
    { d: "2026-11-04", nomap: true, t: "politico", h: "EE.UU. avisa que siguen los combates en Tigray central y en la frontera eritrea", x: "La embajada estadounidense informó combates en el centro de Tigray y cerca de Eritrea, con los vuelos a Axum y Shire suspendidos, y pidió a sus ciudadanos salir de Tigray, Amhara y Afar.", u: "https://et.usembassy.gov/security-alert-u-s-embassy-addis-ababa-ethiopia-november-4-2026/", st: "Embajada de EE.UU. en Etiopía" },
    { d: "2026-11-04", lat: 14.35, lon: 37.85, t: "terrestre", h: "La ONU: miles de desplazados vuelven a huir en Tigray y Amhara", x: "Familias que habían regresado a Tahtay Adiyabo tuvieron que irse otra vez y hay miles de desplazados en Shire y Debre Birhan; la inseguridad corta las rutas de Gondar hacia Debark y Metema.", u: "https://allafrica.com/stories/202611040531.html", st: "Addis Standard (vía allAfrica)" },
    { d: "2026-11-04", lat: 9.03, lon: 38.74, t: "diplomacia", h: "Llega a Adís Abeba el enviado chino para África", x: "Liu Xianfa habló con el canciller Gedion Timothewos sobre la seguridad en el Cuerno de África; Pekín anunció que su enviado para el Cuerno viajará también a Eritrea.", u: "https://www.fanamc.com/english/ethiopia-and-china-exchange-views-on-regional-stability-and-cooperation-for-peace-and-security-in-africa/", st: "FBC (medio estatal etíope)" },
    {"d": "2026-11-03", "lat": 14.4, "lon": 37.77, "t": "terrestre", "h": "Tropas federales entran en Sheraro", "x": "El ejército ocupó la ciudad del noroeste de Tigray, que había quedado sin control desde la retirada de eritreos y fuerzas tigriñas el 12 de octubre.", "u": "https://acleddata.com/ethiopia-alerts-archive", "st": "ACLED"},
    {"d": "2026-11-05", "lat": 13.5, "lon": 39.47, "t": "politico", "h": "Toque de queda en Mekele y plazo para entregar armas", "x": "Las fuerzas federales impusieron desde el 6 un toque de queda nocturno para vehículos y dieron tres días para entregar armas ilegales; unos 5.500 excombatientes tigriños fueron desarmados.", "u": "https://acleddata.com/ethiopia-alerts-archive", "st": "ACLED"}
  ],
  timeline: [
    { d: "1991", era: "Antecedentes", h: "El TPLF llega al poder", x: "Encabeza la coalición que derroca al Derg y domina la política etíope durante casi tres décadas." },
    { d: "2018", era: "Antecedentes", h: "Abiy Ahmed, primer ministro", x: "Firma la paz con Eritrea y desplaza al TPLF del centro del poder." },
    { d: "2020–2022", era: "Primera guerra", h: "Guerra de Tigray", x: "Fuerzas federales, eritreas y amharas contra el TPLF; cientos de miles de muertos según estimaciones." },
    { d: "2022", era: "Primera guerra", h: "Acuerdo de Pretoria", x: "Mediado por la Unión Africana; deja pendientes los territorios disputados y el desarme." },
    { d: "2026", era: "Segunda guerra", h: "El TPLF da por muerto el acuerdo (julio) y lanza su ofensiva (septiembre)", x: "" },
    { d: "2026", era: "Segunda guerra", h: "Las fuerzas federales retoman Mekelle y Etiopía rompe con Eritrea (octubre)", x: "" }
  ],
  history: [
    { h: "Una paz que dejó todo pendiente", b: "<p>El acuerdo de Pretoria frenó la guerra de 2020–2022 pero no resolvió el oeste de Tigray, disputado con Amhara, ni el regreso de los desplazados ni el desarme. El TPLF se partió entre la conducción de Debretsion Gebremichael y los sectores que se acercaron a Abiy, como Getachew Reda, hoy asesor del primer ministro.</p>" },
    { h: "El mar Rojo de fondo", b: "<p>Abiy reclama una salida al mar para Etiopía, que perdió la costa con la independencia de Eritrea en 1993, y Asmara lo lee como una amenaza sobre el puerto de Assab. Egipto, enfrentado con Addis Abeba por la gran represa del Nilo, se acercó a Eritrea, Sudán y Somalia. Por eso la guerra en Tigray puede volverse un conflicto entre Estados.</p>" }
  ],
  alt: [
    { lvl: "doc", h: "El papel de Eritrea", x: "Etiopía acusa a Eritrea de financiar a la alianza rebelde y AP informó de tropas eritreas en Tigray; Asmara niega apoyar a los rebeldes y no confirmó la presencia de sus soldados." }
  ],
  sources: [
    { t: "Al Jazeera — Fighting widens across Ethiopia as Tigray clashes escalate (24-sep-2026)", u: "https://www.aljazeera.com/news/2026/9/24/fighting-widens-across-ethiopia-as-tigray-clashes-escalate" },
    { t: "Al Jazeera — How the fighting in Ethiopia spread beyond Tigray (2-oct-2026)", u: "https://www.aljazeera.com/news/2026/10/2/how-the-fighting-in-ethiopia-spread-beyond-tigray-in-maps-and-charts" },
    { t: "Al Jazeera — Ethiopia's forces retake Mekelle (5-oct-2026)", u: "https://www.aljazeera.com/news/2026/10/5/ethiopias-forces-retake-mekelle-amid-renewed-tigray-fighting" },
    { t: "Critical Threats — Ethiopia War Security Review (23-oct-2026)", u: "https://www.criticalthreats.org/briefs/ethiopia-war-security-review/october-23-2026" },
    { t: "Al Jazeera — WHO: violence pushing health system towards collapse (2-nov-2026)", u: "https://www.aljazeera.com/news/2026/11/2/violence-in-northern-ethiopia-pushing-health-system-towards-collapse-who" }
  ]
});
