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
    { d: "2026-10-21", lat: 33.70, lon: 73.06, t: "politico", h: "Sharif: violar el tratado sería \"acto de guerra\"", x: "El agua, \"línea roja\" para Pakistán." }
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
  }
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
window.ALERTS.push({ id: "haiti", level: 4, tag: "Escalada", date: "2026-10-18", title: "Haití: el mayor ataque de pandillas contra la fuerza internacional", text: "Pandillas atacaron con explosivos un blindado de la Fuerza de Supresión de Pandillas en Croix-des-Bouquets: cuatro técnicos salvadoreños desaparecidos. El Consejo Electoral postergó sin fecha las elecciones del 13 de diciembre." });
