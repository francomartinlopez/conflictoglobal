/* Conflictos incorporados en la v0.2 */
window.CANDIDATES = [
  { id: "india-pakistan", name: "India – Pakistán", level: 2, status: "Latente · riesgo nuclear", center: [74.5, 33],
    why: "Dos potencias nucleares con una disputa abierta por Cachemira. En mayo de 2025 intercambiaron cuatro días de ataques con misiles y drones tras el atentado de Pahalgam. Hoy Pakistán además combate en su frontera oeste." },
  { id: "haiti", name: "Haití", level: 3, status: "Colapso estatal · pandillas", center: [-72.5, 18.9],
    why: "Coaliciones de pandillas controlan la mayor parte de Puerto Príncipe. La ONU autorizó en 2025 una Fuerza de Supresión de Pandillas para reemplazar a la misión liderada por Kenia. Relevante por la cercanía con Cuba y la presión migratoria sobre EE.UU." }
];

window.CONFLICTS.push(

/* ============================================================= */
{
  id: "pakistan-afganistan",
  name: "Pakistán – Afganistán",
  fullName: "Guerra fronteriza Pakistán – Afganistán",
  sub: "Pakistán contra el gobierno talibán y el TTP · Línea Durand · conexión con la guerra de Irán",
  region: "Asia meridional",
  status: "Guerra fronteriza abierta",
  level: 4,
  since: "2025-10-09",
  center: [69.5, 33.5],
  sides: {
    A: { name: "Pakistán", desc: "Fuerzas Armadas e inteligencia (ISI). Acusa a Kabul de albergar al TTP y al Estado Islámico-Jorasán." },
    B: { name: "Emirato Islámico (talibanes)", desc: "Gobierno talibán de Afganistán, reconocido formalmente por Rusia en 2025. Niega dar refugio al TTP." }
  },
  keyFacts: [
    { k: "\"Guerra abierta\" declarada", v: "27-feb-2026", n: "Operación Ghazab lil-Haq" },
    { k: "Rondas de bombardeos pakistaníes desde el 18-sep", v: "3", n: "Kunar, Helmand y otras provincias" },
    { k: "Formato Moscú (5-oct)", v: "Sin declaración", n: "primera vez desde 2017" },
    { k: "Khyber Pakhtunkhwa", v: "Emergencia", n: "gobierno provincial suspendido" }
  ],
  summary: "<p>Pakistán fue durante décadas el principal padrino de los talibanes afganos. Desde su regreso al poder en 2021, la relación se invirtió: el Tehrik-i-Taliban Pakistan (TTP), primo ideológico de los talibanes, multiplicó sus ataques en Khyber Pakhtunkhwa desde santuarios en Afganistán, y Kabul nunca reconoció la Línea Durand como frontera.</p><p>En octubre de 2025 Pakistán bombardeó Kabul buscando al jefe del TTP y hubo los peores combates fronterizos desde 2021. Las treguas mediadas por Catar, Turquía y Arabia Saudita fracasaron. El 27 de febrero de 2026 Islamabad declaró la \"guerra abierta\". Tras un alto el fuego en marzo, un atentado suicida el 18 de septiembre reabrió el ciclo: tres rondas de bombardeos pakistaníes, combates en Kurram y Paktia y un fracaso diplomático en Moscú, donde Rusia elogió al gobierno talibán.</p>",
  fronts: [
    { n: "Kurram – Paktia", s: "Combates", l: 4, t: "Intercambios de artillería y cruces de milicianos." },
    { n: "Bajaur – Kunar", s: "Bombardeos", l: 4, t: "Ataques aéreos pakistaníes sobre presuntos campos del TTP." },
    { n: "Interior de Pakistán", s: "Atentados", l: 4, t: "TTP en Khyber Pakhtunkhwa; separatistas en Baluchistán." }
  ],
  nonState: [
    { name: "Tehrik-i-Taliban Pakistan (TTP)", side: "B2", where: "Khyber Pakhtunkhwa y este afgano" },
    { name: "Estado Islámico-Jorasán", side: "M", where: "Enemigo de ambos" },
    { name: "Ejército de Liberación de Baluchistán", side: "B2", where: "Baluchistán" }
  ],
  map: { bbox: [[60, 24], [78, 38]], start: "2025-09-15" },
  roles: [
    { c: "Pakistan", es: "Pakistán", r: "A", from: "2025-09-15" },
    { c: "Afghanistan", es: "Afganistán", r: "B", from: "2025-09-15" },
    { c: "India", es: "India", r: "M", from: "2025-09-15", n: "Pakistán la acusa de usar a Kabul como aliado; India mantiene relación diplomática con los talibanes" },
    { c: "Iran", es: "Irán", r: "M", from: "2025-09-15" },
    { c: "China", es: "China", r: "M", from: "2025-09-15", n: "Aliado de Pakistán con intereses mineros en Afganistán" },
    { c: "Tajikistan", es: "Tayikistán", r: "M", from: "2025-09-15" },
    { c: "Turkmenistan", es: "Turkmenistán", r: "M", from: "2025-09-15" },
    { c: "Uzbekistan", es: "Uzbekistán", r: "M", from: "2025-09-15" },
    { c: "Russia", es: "Rusia", r: "M", from: "2025-09-15", n: "Reconoció al gobierno talibán en 2025" }
  ],
  events: [
    { d: "2025-10-09", lat: 34.53, lon: 69.17, t: "aereo", h: "Pakistán bombardea Kabul", x: "Buscaba al jefe del TTP, Noor Wali Mehsud." },
    { d: "2025-10-12", lat: 34.0, lon: 70.4, t: "terrestre", h: "Los peores combates fronterizos desde 2021", x: "Decenas de combatientes muertos de ambos lados." },
    { d: "2025-10-19", lat: 25.29, lon: 51.53, t: "diplomacia", h: "Alto el fuego mediado por Catar y Turquía", x: "Fracasa en la segunda ronda (28-oct).", nomap: true },
    { d: "2025-11-25", lat: 33.34, lon: 69.92, t: "aereo", h: "Bombardeos pakistaníes en tres provincias del este", x: "Nueve niños y una mujer muertos según Kabul." },
    { d: "2026-02-06", lat: 33.69, lon: 73.06, t: "atentado", h: "Atentado contra una mezquita chiíta en Islamabad", x: "Reivindicado por el Estado Islámico-Jorasán." },
    { d: "2026-02-16", lat: 34.68, lon: 71.50, t: "atentado", h: "Coche bomba en Bajaur", x: "Islamabad responde con ataques en Nangarhar, Paktika y Khost." },
    { d: "2026-02-26", lat: 34.2, lon: 70.9, t: "terrestre", h: "Ofensiva talibán sobre puestos pakistaníes", x: "Pakistán bombardea Kabul y otras provincias." },
    { d: "2026-02-27", lat: 33.72, lon: 73.04, t: "politico", h: "Pakistán declara la \"guerra abierta\"", x: "Operación Ghazab lil-Haq." },
    { d: "2026-03-15", lat: 33.72, lon: 73.04, t: "diplomacia", h: "Tregua temporal tras los bombardeos", x: "Las tensiones persisten.", p: "m" },
    { d: "2026-09-18", lat: 34.0, lon: 71.55, t: "atentado", h: "Atentado suicida complejo en el noroeste", x: "Reabre el ciclo de represalias." },
    { d: "2026-09-30", lat: 34.85, lon: 71.10, t: "aereo", h: "Bombardeo pakistaní en Kunar", x: "Tercera ronda desde el 18-sep, junto con Helmand." },
    { d: "2026-09-30", lat: 31.6, lon: 64.4, t: "aereo", h: "Ataque pakistaní en Helmand", x: "" },
    { d: "2026-10-05", lat: 55.75, lon: 37.62, t: "diplomacia", h: "Formato Moscú sin declaración conjunta", x: "Lavrov elogia al gobierno talibán.", nomap: true },
    { d: "2026-10-10", lat: 33.85, lon: 70.15, t: "terrestre", h: "Combates en Kurram y Dand Patan", x: "12 milicianos y un soldado pakistaní muertos según el ejército." },
    { d: "2026-10-27", lat: 32.60, lon: 69.62, t: "terrestre", h: "Fuego cruzado en Angoor Adda (Waziristán del Sur)", x: "Un civil muerto y cinco heridos por un mortero disparado desde Afganistán, según Pakistán, que respondió con artillería contra puestos talibanes.", u: "https://www.dawn.com/news/2040360/one-killed-five-injured-by-afghan-firing-near-angoor-adda", st: "Dawn / Reuters" },
    { d: "2026-10-28", lat: 34.1, lon: 71.09, t: "terrestre", h: "Combates intermitentes en el paso de Torkham", x: "Hubo fuego cruzado en el principal cruce entre Nangarhar y Khyber Pakhtunkhwa; un niño y un trabajador humanitario resultaron heridos.", u: "https://www.longwarjournal.org/archives/2026/10/afghanistan-pakistan-border-clashes-continue-amid-reported-pakistani-outreach-to-anti-taliban-groups.php", st: "FDD's Long War Journal" },
    { d: "2026-10-30", lat: 32.6, lon: 69.62, t: "terrestre", h: "Pakistán dice haber destruido puestos talibanes frente a Waziristán y Parachinar", x: "La radio estatal, con fuentes de seguridad anónimas, afirmó que el ejército respondió con armas pesadas a disparos desde Afganistán. Es la versión de una parte: no hay cifras ni confirmación independiente.", u: "https://www.radio.gov.pk/30-10-2026/pakistan-army-destroys-posts-military-positions-of-afghan-taliban-along-border", st: "Radio Pakistan (estatal)" },
    {"d": "2026-10-31", "lat": 33.69, "lon": 73.05, "nomap": true, "t": "diplomacia", "h": "Islamabad culpa a Kabul y advierte que podría actuar", "x": "El Ministerio de Información pakistaní respondió al vocero talibán Zabihullah Mujahid, que acusó a Pakistán de no querer negociar: dijo que la inacción afgana contra el TTP es el principal obstáculo y que Pakistán podría actuar según el derecho internacional.", "u": "https://www.pakistantoday.com.pk/2026/11/01/pakistan-slams-afghan-taliban-over-failure-to-curb-cross-border-terrorism", "st": "Pakistan Today"},
    {"d": "2026-11-01", "lat": 34.1, "lon": 71.09, "t": "terrestre", "h": "Tiroteos en varios pasos y cierre de Torkham", "x": "Las fuerzas fronterizas intercambiaron fuego en varios puntos; Torkham estuvo cerrado casi cinco horas por un puesto de control afgano en construcción y un civil murió por fuego de mortero cerca de Angoor Adda (Waziristán del Sur).", "u": "https://asianews.network/pakistan-warns-kabul-of-unbearable-punishment-as-clashes-persist-along-border/", "st": "Dawn (vía Asia News Network)"},
    {"d": "2026-11-02", "lat": 32.53, "lon": 69.33, "t": "terrestre", "h": "Pakistán ataca puestos afganos frente a Angoor Adda", "x": "Las fuerzas pakistaníes respondieron al fuego desde puestos afganos y dicen haber destruido posiciones y morteros; no informaron bajas propias y las afganas no están confirmadas.", "u": "https://tribune.com.pk/story/2638119/pakistani-forces-respond-to-unprovoked-firing-from-afghan-border-posts-says-dc", "st": "The Express Tribune"},
    {"d": "2026-11-05", "lat": 33.95, "lon": 70.05, "t": "terrestre", "h": "Choque en Kurram por un intento de infiltración del TTP", "x": "Según fuentes de seguridad pakistaníes citadas por la radio estatal, el ejército frenó un cruce de militantes en el sector de Shaluzan y respondió con armas pesadas cuando los talibanes afganos abrieron fuego. No hay cifras de víctimas ni versión de Kabul.", "u": "https://tribune.com.pk/story/2638850/army-foils-ttp-infiltration-attempt-in-kurram-retaliates-to-unprovoked-afghan-firing-state-media", "st": "The Express Tribune"},
    {"d": "2026-11-08", "lat": 32.22, "lon": 70.38, "t": "atentado", "h": "El TTP mata a un policía en Tank", "x": "Según el gobernador de Khyber Pakhtunkhwa, militantes del TTP balearon a un policía, cuyo hijo quedó herido.", "u": "https://www.arabnews.pk/pakistan/policeman-killed-in-militant-attack-in-pakistans-restive-northwest-3006435", "st": "Arab News Pakistan"},
    {"d": "2026-11-08", "lat": 33.02, "lon": 70.07, "t": "terrestre", "h": "Operativo contra escondites en mezquitas de Mir Ali", "x": "El ejército informó que desarmó dos escondites con armas y explosivos en mezquitas de Waziristán del Norte y volvió a acusar a los talibanes afganos de dar apoyo al TTP; no informó bajas.", "u": "https://english.aaj.tv/news/330479953/two-militant-hideouts-inside-mosques-in-north-waziristan-cleared-ispr", "st": "Aaj News"},
    {"d": "2026-11-08", "lat": 33.53, "lon": 71.06, "t": "atentado", "h": "Ataque a un puesto policial en Hangu: un muerto y tres secuestrados", "x": "Milicianos asaltaron el puesto de Shah Almas Pir, mataron a un policía y se llevaron a otros tres, que aparecieron ilesos tras una gestión con ancianos tribales.", "u": "https://tribune.com.pk/story/2639553/hangu-checkpost-raided-one-cop-martyred", "st": "The Express Tribune"},
    {"d": "2026-11-10", "lat": 32.98, "lon": 70.27, "t": "terrestre", "h": "Hallan 700 kg de explosivos en Waziristán del Norte", "x": "En el rastrillaje posterior al operativo de Mir Ali, las fuerzas de seguridad encontraron explosivos caseros y un misil en Mosaki y Hassu Khel.", "u": "https://tribune.com.pk/story/2639575/security-forces-recover-700kg-of-explosives-during-north-waziristan-clearance-operation-sources", "st": "The Express Tribune"},
    {"d": "2026-11-11", "lat": 33.58, "lon": 71.44, "t": "atentado", "h": "Emboscada en Kohat: diez policías muertos", "x": "Atacaron a una patrulla que volvía de un operativo contra la minería ilegal de oro; murió un subjefe policial y hubo 12 heridos. La policía dice que mató a 18 atacantes y culpa al TTP; nadie se atribuyó el ataque.", "u": "https://www.dawn.com/news/2043793/10-cops-martyred-18-terrorists-killed-as-police-party-comes-under-attack-in-kps-kohat", "st": "Dawn"},
    {"d": "2026-11-11", "lat": 33.75, "lon": 70.95, "t": "politico", "h": "Pakistán presenta a un exsoldado afgano detenido por atentados", "x": "La policía de Khyber Pakhtunkhwa dice que el detenido, de Paktia, integraba el grupo de Hafiz Gul Bahadur y confesó ataques; Kabul niega que su territorio se use contra Pakistán.", "u": "https://www.dawn.com/news/2043766/former-afghan-army-member-arrested-for-alleged-terrorist-activities-in-pakistan", "st": "Dawn"}
  ],
  timeline: [
    { d: "1893", era: "Orígenes", h: "Línea Durand", x: "Frontera trazada por el Raj británico; parte en dos a los pastunes. Ningún gobierno afgano la reconoció." },
    { d: "1947", era: "Orígenes", h: "Nace Pakistán", x: "Afganistán vota contra su ingreso a la ONU." },
    { d: "1979–1989", era: "Yihad afgana", h: "Invasión soviética", x: "Pakistán, EE.UU. y Arabia Saudita arman a los muyahidines." },
    { d: "1994–1996", era: "Yihad afgana", h: "Ascenso talibán", x: "Con apoyo del ISI pakistaní." },
    { d: "2001", era: "Guerra de EE.UU.", h: "Invasión estadounidense", x: "Los talibanes se refugian en zonas tribales de Pakistán." },
    { d: "2007", era: "Guerra de EE.UU.", h: "Nace el TTP", x: "" },
    { d: "2014", era: "Guerra de EE.UU.", h: "Masacre de la escuela de Peshawar", x: "Unos 150 muertos, en su mayoría niños." },
    { d: "2021", era: "Emirato", h: "Vuelven los talibanes", x: "" },
    { d: "2025", era: "Emirato", h: "Bombardeo de Kabul y choques fronterizos", x: "" },
    { d: "2026", era: "Emirato", h: "\"Guerra abierta\"", x: "" }
  ],
  history: [
    { h: "Una frontera que nadie aceptó", b: "<p>La Línea Durand fue negociada en 1893 entre el Raj británico y el emir afgano. Divide a los pastunes entre dos Estados y ningún gobierno de Kabul, incluido el talibán, la reconoció como frontera internacional. Pakistán la fortificó con un cerco a partir de 2017, una fuente permanente de choques.</p>" },
    { h: "La \"profundidad estratégica\" y su efecto boomerang", b: "<p>El establishment militar pakistaní buscó durante décadas un gobierno afín en Kabul para tener profundidad estratégica frente a India. Por eso apoyó a los muyahidines contra los soviéticos y luego a los talibanes. El costo fue el TTP: un movimiento hermano que considera ilegítimo al Estado pakistaní. Con los talibanes otra vez en el poder, el TTP ganó santuario y Pakistán perdió su influencia sobre Kabul.</p>" },
    { h: "El tablero regional", b: "<p>Islamabad acusa a India de usar a los talibanes en su contra; Rusia reconoció al Emirato y China protege sus inversiones en ambos países. Pakistán es a la vez mediador en la guerra de Irán y socio del pacto de defensa con Arabia Saudita y Turquía, lo que lo obliga a pelear en su frontera oeste mientras sostiene un rol diplomático en Medio Oriente.</p>" }
  ],
  alt: [
    { lvl: "doc", h: "El padrinazgo del ISI", x: "El apoyo de la inteligencia pakistaní al movimiento talibán en los noventa y su tolerancia durante la guerra de EE.UU. están ampliamente documentados. La guerra actual es en buena medida consecuencia de esa política." }
  ],
  sources: [
    { t: "FDD Long War Journal — Taliban-Pakistan border clashes continue (12-oct-2026)", u: "https://www.fdd.org/?p=307046" },
    { t: "Express Tribune — Pakistan, Taliban clash at Moscow talks", u: "https://tribune.com.pk/story/2633200/pakistan-taliban-clash-at-moscow-talks" },
    { t: "Al-Monitor — Timeline of fighting between Pakistan and Afghanistan", u: "https://www.al-monitor.com/originals/2026/03/timeline-recent-fighting-between-pakistan-and-afghanistan" }
  ]
},

/* ============================================================= */
{
  id: "sudan",
  name: "Sudán",
  fullName: "Guerra civil de Sudán",
  sub: "Ejército contra las Fuerzas de Apoyo Rápido · Darfur y Kordofán · injerencia de Emiratos y Egipto",
  region: "África nororiental",
  status: "Guerra civil",
  level: 5,
  since: "2023-04-15",
  center: [30, 14.5],
  sides: {
    A: { name: "Fuerzas de Apoyo Rápido (RSF)", desc: "Paramilitares de Mohamed Hamdan Dagalo (\"Hemedti\"), herederos de los Janjaweed. Controlan todo Darfur y armaron un gobierno paralelo." },
    B: { name: "Fuerzas Armadas de Sudán (SAF)", desc: "Ejército del general Abdel Fattah al Burhan, con sede en Puerto Sudán. Controla la mitad oriental y recuperó Jartum en 2025." }
  },
  keyFacts: [
    { k: "Muertos estimados", v: "52.904 – 200.000+", n: "ACLED (directos, jun-2026) / trabajadores humanitarios (AFP)" },
    { k: "Desplazados", v: "> 14 millones", n: "desde abr-2023, internos y refugiados (ONU vía Reuters, 5-nov-2026)" },
    { k: "Muertos en El Fasher (25–27 oct 2025)", v: "> 6.000", n: "Oficina de DD.HH. de la ONU" },
    { k: "Población de El Obeid", v: "≈ 500.000", n: "bajo ataques de drones" }
  ],
  summary: "<p>La guerra estalló en abril de 2023 entre los dos hombres que habían dado juntos el golpe de 2021: el jefe del ejército, Burhan, y el de las RSF, Hemedti. La disputa era por la integración de los paramilitares al ejército y, en el fondo, por el control del Estado, el oro y los puertos.</p><p>Tras un primer año favorable a las RSF, el ejército recuperó Wad Madani y Jartum en 2025. Las RSF respondieron consolidando Darfur: en octubre de 2025 tomaron El Fasher después de 18 meses de asedio, con masacres que la ONU documentó como posibles crímenes de lesa humanidad. En 2026 el frente es Kordofán: las RSF intentan cercar El Obeid, el ejército recuperó en julio la ruta a Jartum y Hemedti dijo a sus combatientes que les \"soltaba las riendas\".</p>",
  fronts: [
    { n: "Kordofán (El Obeid, Bara, Kadugli)", s: "Ofensiva y contraofensiva", l: 5, t: "El frente decisivo de 2026." },
    { n: "Darfur", s: "Control RSF", l: 4, t: "Gobierno paralelo; drones del ejército." },
    { n: "Jartum y el norte", s: "Ataques con drones", l: 3, t: "Drones sobre Jartum, Atbara y Puerto Sudán." }
  ],
  nonState: [
    { name: "RSF y milicias árabes aliadas", side: "A", where: "Darfur, Kordofán" },
    { name: "Movimientos armados de Darfur (Minawi, JEM)", side: "B2", where: "Darfur" },
    { name: "SPLM-N (al Hilu)", side: "A2", where: "Kordofán del Sur; aliado de las RSF en la coalición Tasis" }
  ],
  map: { bbox: [[20, 8], [40, 23]], start: "2023-04-01" },
  roles: [
    { c: "Sudan", es: "Sudán", r: "Z", from: "2023-04-01" },
    { c: "United Arab Emirates", es: "Emiratos Árabes Unidos", r: "A2", from: "2023-04-15", n: "Señalado por expertos de la ONU y la prensa como proveedor de armas a las RSF; lo niega" },
    { c: "Chad", es: "Chad", r: "A2", from: "2023-04-15", n: "Corredor de suministros hacia las RSF según informes de la ONU" },
    { c: "Libya", es: "Libia", r: "A2", from: "2023-04-15", n: "El este de Haftar, ruta logística de las RSF" },
    { c: "Egypt", es: "Egipto", r: "B2", from: "2023-04-15", n: "Principal aliado del ejército" },
    { c: "Eritrea", es: "Eritrea", r: "B2", from: "2023-04-15" },
    { c: "Saudi Arabia", es: "Arabia Saudita", r: "M", from: "2023-04-15", n: "Mediador en Yeda; más cercano al ejército" },
    { c: "S. Sudan", es: "Sudán del Sur", r: "M", from: "2023-04-15", n: "Depende del oleoducto sudanés" },
    { c: "Ethiopia", es: "Etiopía", r: "M", from: "2023-04-15" },
    { c: "Central African Rep.", es: "Rep. Centroafricana", r: "M", from: "2023-04-15" }
  ],
  events: [
    { d: "2023-04-15", lat: 15.60, lon: 32.53, t: "terrestre", h: "Estalla la guerra en Jartum", x: "Las RSF atacan el aeropuerto y el palacio presidencial." },
    { d: "2023-06-15", lat: 13.45, lon: 22.45, t: "atentado", h: "Masacres de masalit en El Geneina", x: "Asesinato del gobernador de Darfur Occidental y matanzas étnicas.", p: "m" },
    { d: "2023-12-18", lat: 14.40, lon: 33.52, t: "terrestre", h: "Las RSF toman Wad Madani", x: "" },
    { d: "2024-05-10", lat: 13.63, lon: 25.35, t: "terrestre", h: "Comienza el asedio de El Fasher", x: "Último bastión del ejército en Darfur.", p: "m" },
    { d: "2024-08-01", lat: 13.48, lon: 25.30, t: "politico", h: "Hambruna declarada en el campo de Zamzam", x: "Primera declaración formal de hambruna de la guerra." },
    { d: "2025-01-07", lat: 38.9, lon: -77.03, t: "politico", h: "EE.UU. acusa a las RSF de genocidio", x: "", nomap: true },
    { d: "2025-01-11", lat: 14.40, lon: 33.52, t: "terrestre", h: "El ejército recupera Wad Madani", x: "" },
    { d: "2025-03-21", lat: 15.61, lon: 32.53, t: "terrestre", h: "El ejército recupera el palacio presidencial", x: "Las RSF son expulsadas de Jartum." },
    { d: "2025-04-13", lat: 13.50, lon: 25.28, t: "atentado", h: "Asalto de las RSF al campo de Zamzam", x: "Cientos de muertos y desplazamiento masivo." },
    { d: "2025-05-04", lat: 19.62, lon: 37.22, t: "aereo", h: "Drones de las RSF sobre Puerto Sudán", x: "Primer ataque sobre la capital provisoria." },
    { d: "2025-10-26", lat: 13.63, lon: 25.35, t: "atentado", h: "Caída de El Fasher", x: "Al menos 6.000 muertos en tres días según la ONU." },
    { d: "2025-10-28", lat: 13.70, lon: 30.37, t: "terrestre", h: "Las RSF toman Bara (Kordofán del Norte)", x: "" },
    { d: "2026-02-15", lat: 13.63, lon: 25.35, t: "politico", h: "Misión de la ONU: \"rasgos de genocidio\" en El Fasher", x: "", p: "m" },
    { d: "2026-07-26", lat: 13.6, lon: 31.0, t: "terrestre", h: "El ejército recupera la ruta El Obeid–Jartum", x: "Hemedti \"suelta las riendas\" de sus combatientes." },
    { d: "2026-08-12", lat: 13.18, lon: 30.22, t: "aereo", h: "Las RSF reanudan el ataque sobre El Obeid", x: "Drones también sobre Jartum y Atbara." },
    { d: "2026-10-26", lat: 12.05, lon: 24.88, t: "aereo", h: "Bombardeos intensos del ejército sobre Nyala", x: "Ataques contra mandos y defensas antiaéreas de las RSF en la capital de Darfur del Sur; una fuente local habla de al menos 20 muertos, entre ellos civiles en un mercado nocturno.", u: "https://sudantribune.com/article/320509", st: "Sudan Tribune" },
    { d: "2026-10-27", lat: 15.60, lon: 32.53, t: "aereo", h: "Drones de las RSF contra la red eléctrica", x: "Tras golpear seis centrales el día anterior en el este, un ataque a la subestación de Al-Markhiyat dejó sin luz a gran parte de Jartum y Al-Yazira.", u: "https://www.arabnews.pk/middle-east/sudan-rsf-drones-hit-khartoum-power-station-govt-source-3005367", st: "AFP" },
    { d: "2026-10-28", lat: 15.9, lon: 23.3, t: "aereo", h: "Drones de las RSF matan a cinco personas en Karnoi", x: "Según las salas de emergencia locales, los ataques en Darfur del Norte se repitieron dos días, junto con incursiones terrestres y robo de ganado.", u: "https://sudantribune.com/article/320612", st: "Sudan Tribune" },
    { d: "2026-10-29", lat: 19.62, lon: 37.22, t: "diplomacia", h: "Sudán acusa a Etiopía de lanzar 162 ataques con drones desde su territorio", x: "El gobierno afirma que salieron de bases en Asosa y Bahir Dar y mataron a más de 400 civiles. No hay verificación independiente; Etiopía ya había negado apoyar a las RSF.", u: "https://allafrica.com/stories/202610300075.html", st: "Dabanga (allAfrica)" },
    { d: "2026-10-28", lat: 13.18, lon: 30.22, t: "diplomacia", h: "Investigadores de la ONU: octubre, el peor mes de ataques con drones contra civiles", x: "La misión de determinación de hechos denunció drones de las RSF sobre El Obeid y detenciones arbitrarias del ejército: la cárcel central tiene unas 2.000 personas para 450 plazas. Identificó una red de apoyo a las RSF en Chad, Puntlandia, el sudeste de Libia y los Emiratos.", u: "https://news.un.org/en/story/2026/10/1168696", st: "Noticias ONU" },
    { d: "2026-11-01", lat: 18.05, lon: 30.95, t: "aereo", h: "Drones destruyen subestaciones en Al Dabbah y Abu Hamad", x: "Tras los ataques a la central de Um Dabakir y a la subestación de Shendi, el norte quedó con más cortes; murió un guardia en Al Dabbah. White Nile y Kordofán del Norte están fuera de la red por meses y la represa de Merowe aporta más del 70% de la electricidad. El gobierno culpa a las RSF y dice que los drones salen de Etiopía.", u: "https://www.news4jax.com/news/world/2026/11/01/sudans-power-grid-nears-collapse-as-drone-strikes-blamed-on-rsf-target-electric-stations/", st: "AP" },
    {"d": "2026-11-02", "lat": 15.32, "lon": 35.6, "t": "aereo", "h": "Más drones contra la red eléctrica: subestaciones de Kassala y del norte", "x": "Ataques atribuidos a las RSF alcanzaron subestaciones en New Halfa, Aroma y Al Ghazali y dejaron amplias zonas sin luz: ya son 18 golpes contra la red en una semana.", "u": "https://www.aljazeera.com/news/2026/11/2/drone-attacks-extend-campaign-targeting-sudans-power-system", "st": "Al Jazeera"},
    {"d": "2026-11-02", "lat": 15.6, "lon": 32.53, "t": "diplomacia", "h": "Sudán denuncia a Etiopía ante la ONU y la Unión Africana", "x": "Jartum presentó quejas ante el Consejo de Seguridad y el Consejo de Paz de la UA: dice que más de 180 drones lanzados desde Etiopía este año mataron o hirieron a unos 500 civiles y acusa a Adís Abeba de apoyar a las RSF.", "u": "https://english.aawsat.com/arab-world/5336979-sudan-files-complaint-against-ethiopia-un-security-council-over-drone-attacks", "st": "Asharq Al-Awsat", "nomap": true},
    { d: "2026-11-02", nomap: true, t: "aereo", h: "Ocho muertos por drones en Um Dibo (Kordofán Occidental)", x: "Un ataque con drones mató a ocho personas en Um Dibo, en la localidad de El Sunut, y otro dejó tres heridos. La ONU condenó la escalada de ataques con drones de las dos partes.", u: "https://www.dabangasudan.org/en/all-news/article/drone-attacks-kill-civilians-and-cripple-sudans-power-infrastructure-un-warns-of-growing-humanitarian-toll", st: "Radio Dabanga" },
    { d: "2026-11-03", lat: 12.17, lon: 31.3, t: "aereo", h: "Dron contra una estación de servicio en Abbasiya (Kordofán del Sur)", x: "Un dron atribuido a las RSF cayó sobre una estación de servicio llena de gente en plena escasez de combustible; los balances van de 4 muertos (Dabanga) a 7 muertos y 36 heridos (Sudan Tribune). La misma noche otros drones mataron a dos civiles en Ed Damazin.", u: "https://www.dabangasudan.org/en/all-news/article/drone-attacks-kill-civilians-and-cripple-sudans-power-infrastructure-un-warns-of-growing-humanitarian-toll", st: "Radio Dabanga" },
    { d: "2026-11-03", nomap: true, t: "diplomacia", h: "La Liga Árabe nombra un enviado para Sudán", x: "El secretario general Nabil Fahmy designó a Zaid al-Sabban como enviado personal para impulsar negociaciones entre las partes y un diálogo nacional, y condenó los ataques con drones contra la infraestructura civil.", u: "https://themedialine.org/headlines/arab-league-appoints-sudan-envoy-to-advance-civil-war-peace-talks/", st: "The Media Line" },
    { d: "2026-11-04", lat: 14.03, lon: 35.38, t: "diplomacia", h: "Sudán y Etiopía se cierran consulados y expulsan diplomáticos", x: "Etiopía declaró personas non gratas a los seis diplomáticos del consulado sudanés en Asosa y Jartum respondió cerrando el consulado etíope en Gedaref. Sudán acusa a Etiopía de dejar que las RSF lancen drones desde su territorio; Adís Abeba lo niega y acusa al ejército sudanés de apoyar al TPLF.", u: "https://www.internazionale.it/ultime-notizie-reuters/2026/11/05/ethiopia-expels-sudanese-diplomats-after-fresh-allegations-of-support-for-rsf", st: "Reuters" },
    { d: "2026-11-03", lat: 11.79, lon: 34.36, t: "aereo", h: "Drones de las RSF contra Ed Damazin (Nilo Azul)", x: "Un ataque con drones atribuido a las RSF alcanzó una vivienda del barrio Al-Zuhur, en la capital del Nilo Azul; murieron al menos dos civiles.", u: "https://darfur24.com/en/2026/11/06/drone-strikes-in-sudan-this-week/", st: "Darfur24" },
    { d: "2026-11-04", lat: 14.23, lon: 27.94, t: "aereo", h: "Bombardeo contra una fuente de agua en Um Badr (Kordofán del Norte)", x: "Un ataque aéreo atribuido al ejército mató a dos mujeres y dejó unos diez heridos junto a una fuente de agua.", u: "https://martinplaut.com/2026/11/05/eepa-situation-report-horn-of-africa-no-777-5-november-2026", st: "EEPA (informe n.º 777)" },
    { d: "2026-11-05", lat: 12.8, lon: 30.2, t: "terrestre", h: "El ejército dice haber recuperado Kazgeil y Abu Qaoud, al sur de El Obeid", x: "Según fuentes militares, el ejército y sus aliados retomaron las dos localidades sobre la ruta hacia Kordofán del Sur; las RSF difundieron videos en los que dicen seguir en la zona y ninguna parte emitió un comunicado oficial.", u: "https://www.anews.com.tr/middle-east/2026/11/05/sudanese-army-regains-control-of-2-areas-in-north-kordofan-after-clashes-with-rsf", st: "Anadolu" },
    {"d": "2026-11-06", "lat": 13.1, "lon": 30.1, "t": "terrestre", "h": "Disputa por cuatro localidades al oeste de El Obeid", "x": "La fuerza conjunta aliada del ejército dijo haber tomado Umm Samima, Kazgeil, Al-Hamadi y Abu Qaoud y destruido 40 vehículos de las RSF, que difundieron videos para mostrar que siguen allí. Ningún mando independiente confirmó el resultado.", "u": "https://darfur24.com/en/2026/11/06/rival-forces-dispute-control-of-north-kordofan-areas/", "st": "Darfur24"},
    {"d": "2026-11-05", "lat": 9.6, "lon": 28.44, "t": "diplomacia", "h": "La ONU alerta por los primeros ataques con drones en Abyei", "x": "El jefe de operaciones de paz, Jean-Pierre Lacroix, dijo al Consejo de Seguridad que los drones del 19 de octubre mataron al menos a 30 personas y advirtió por la designación de un representante de las RSF en el comité de supervisión.", "u": "https://allafrica.com/stories/202611060037.html", "st": "UN News (vía allAfrica)"},
    {"d": "2026-11-03", "lat": 10.9, "lon": 34.3, "t": "terrestre", "h": "Las RSF y el SPLM-N toman la base de Sali (Nilo Azul)", "x": "La coalición entró en la base, unos 100 km al sur de Ed Damazin, con ataques desde Kurmuk y Sirkum; Sudans Post geolocalizó videos de combatientes en el lugar y el ejército no se pronunció.", "u": "https://www.sudanspost.com/rsf-and-allied-rebels-capture-sali-base-in-sudans-blue-nile/", "st": "Sudans Post"},
    {"d": "2026-11-06", "lat": 15.5, "lon": 32.5, "t": "diplomacia", "h": "Australia sanciona a Burhan y a Hemedti", "x": "Canberra aplicó sanciones y prohibición de entrada a los dos jefes militares, a un gobernador de facto de las RSF y a un comandante de campo, y congeló bienes de la Brigada Al Baraa Bin Malik, aliada del ejército.", "u": "https://www.dabangasudan.org/en/all-news/article/australia-sanctions-el-burhan-and-hemedti-over-sudan-war-and-human-rights-abuses", "st": "Radio Dabanga", "nomap": true},
    {"d": "2026-11-07", "lat": 13.45, "lon": 28.9, "t": "terrestre", "h": "El ejército dice haber tomado Ayyal Bakhit (Kordofán Occidental)", "x": "La fuerza conjunta aliada del ejército anunció la toma de la localidad, al norte de En Nahud, y el derribo de un dron; no hay confirmación independiente y las RSF no se pronunciaron.", "u": "https://riotimesonline.com/sudan-army-claims-new-gains-kordofan-region", "st": "The Rio Times"},
    {"d": "2026-11-08", "lat": 15.5, "lon": 32.56, "t": "politico", "h": "El ejército detiene a Ahmed Harún, jefe del ex partido de Bashir", "x": "La inteligencia militar arrestó en Jartum al último presidente del disuelto Congreso Nacional, buscado por la Corte Penal Internacional por crímenes en Darfur, dos días después de que diera una larga entrevista en la que decía que los islamistas combaten junto al ejército.", "u": "https://www.thenationalnews.com/news/mena/2026/11/08/sudan-detains-politician-ahmed-haroun-wanted-by-icc/", "st": "The National"},
    {"d": "2026-11-08", "dq": 1, "lat": 13.3, "lon": 29.23, "t": "terrestre", "h": "Combates cerca de El Khuwei y otro dron derribado en Kordofán Occidental", "x": "Fuentes militares hablaron de una batalla de tres horas contra las RSF en las afueras de El Khuwei, nudo entre el centro del país y Kordofán Occidental. El ejército dijo haber derribado al este de Wad Banda el cuarto dron de la semana en la zona.", "u": "https://www.aa.com.tr/en/middle-east/sudanese-army-downs-4th-drone-in-week-as-troops-advance-against-rsf-in-west-kordofan/4116366", "st": "Anadolu"},
    {"d": "2026-11-10", "lat": 10.55, "lon": 34.28, "t": "aereo", "h": "Un dron atribuido a las RSF mata a nueve civiles en el Nilo Azul", "x": "El gobernador de la localidad de Kurmuk informó el ataque contra una aldea cercana a la frontera con Etiopía; las RSF no se pronunciaron.", "u": "https://www.anews.com.tr/africa/2026/11/10/9-civilians-killed-in-rsf-drone-attack-in-sudans-blue-nile-state-official", "st": "Anadolu (vía aNews)"},
    {"d": "2026-11-10", "lat": 15.5, "lon": 32.56, "nomap": true, "t": "politico", "h": "Crecen las dudas sobre la detención de Ahmed Harún", "x": "Ninguna autoridad judicial ni policial confirmó el arresto informado el 8; la coalición Sumud lo llamó una puesta en escena y abogados piden que el ejército aclare su situación.", "u": "https://www.dabangasudan.org/en/all-news/article/alleged-sudan-arrest-of-icc-fugitive-ahmed-haroun-in-doubt", "st": "Radio Dabanga"},
    {"d": "2026-11-11", "lat": 11.3, "lon": 28.4, "t": "aereo", "h": "El ejército derriba otro dron en Kordofán Occidental", "x": "Es el cuarto que dice haber derribado en una semana en ese estado, esta vez al sur de Ayyal Bakhit; no dijo quién lo lanzó.", "u": "https://anews.com.tr/middle-east/2026/11/11/sudanese-army-says-it-shot-down-hostile-drone-in-west-kordofan", "st": "Anadolu (vía A News)"}
  ],
  timeline: [
    { d: "1956", era: "Orígenes", h: "Independencia", x: "Un Estado dominado por las élites del valle del Nilo." },
    { d: "1989", era: "Bashir", h: "Golpe de Omar al Bashir", x: "Régimen islamista y militar." },
    { d: "2003", era: "Bashir", h: "Guerra de Darfur", x: "Las milicias Janjaweed, origen de las RSF; acusaciones de genocidio." },
    { d: "2011", era: "Bashir", h: "Independencia de Sudán del Sur", x: "Sudán pierde tres cuartos de su petróleo; el oro pasa a ser clave." },
    { d: "2013", era: "Bashir", h: "Se crean las RSF", x: "Bajo el mando de Hemedti." },
    { d: "2019", era: "Transición", h: "Cae Bashir", x: "Gobierno de transición cívico-militar." },
    { d: "2021", era: "Transición", h: "Golpe de Burhan y Hemedti", x: "" },
    { d: "2023", era: "Guerra", h: "Estalla la guerra", x: "" },
    { d: "2025", era: "Guerra", h: "Jartum para el ejército, Darfur para las RSF", x: "" },
    { d: "2026", era: "Guerra", h: "Batalla por Kordofán", x: "" }
  ],
  history: [
    { h: "Un Estado del centro contra sus periferias", b: "<p>Desde la independencia, Sudán fue gobernado por élites del valle del Nilo que trataron a Darfur, Kordofán, el este y el sur como periferias. Las rebeliones periféricas se combatieron con milicias reclutadas localmente. Los Janjaweed de Darfur fueron la más brutal y de ellas nacieron las RSF.</p>" },
    { h: "Oro, puertos y padrinos externos", b: "<p>Tras la separación del sur, el oro pasó a ser la principal exportación y Hemedti construyó su imperio económico sobre las minas de Darfur, con vínculos con Wagner y con Emiratos. El mar Rojo y Puerto Sudán atraen a Emiratos, Arabia Saudita, Egipto, Turquía, Rusia e Irán. Esa competencia explica por qué la guerra recibe armas de afuera y por qué las mediaciones fracasan.</p>" }
  ],
  alt: [
    { lvl: "ind", h: "El papel de Emiratos", x: "Informes de expertos de la ONU, investigaciones periodísticas y seguimiento de vuelos señalan envíos de armas a las RSF a través de Chad y el este de Libia. Emiratos lo niega. Sudán llevó el caso a la Corte Internacional de Justicia." }
  ],
  sources: [
    { t: "AFP vía Ahram — Hemedti \"unleashes\" fighters (28-jul-2026)", u: "https://english.ahram.org.eg/News/573598.aspx" },
    { t: "Reuters vía BusinessDay — RSF renews assault on Al-Obeid (13-ago-2026)", u: "https://www.businessday.co.za/world/africa/2026-08-13-sudansrsf-renews-assault-on-al-obeid-with-drone-strikes/" },
    { t: "AP vía OPB — At least 6,000 killed in El Fasher", u: "https://www.opb.org/article/2026/02/15/un-says-at-least-6000-killed-over-3-days-during-rsf-attack-on-sudans-el-fasher/" }
  ]
},

/* ============================================================= */
{
  id: "sahel",
  name: "Sahel central",
  fullName: "Insurgencia yihadista en el Sahel central",
  sub: "Malí, Burkina Faso y Níger · JNIM y Estado Islámico contra juntas aliadas de Rusia",
  region: "África occidental",
  status: "Insurgencia en expansión",
  level: 4,
  since: "2012-01-17",
  center: [-1, 15],
  sides: {
    A: { name: "Insurgentes", desc: "JNIM (Al Qaeda, unos 6.000 combatientes), Estado Islámico-Sahel y, desde 2026 en alianza táctica, separatistas tuaregs del FLA." },
    B: { name: "Juntas de la AES", desc: "Alianza de Estados del Sahel (Malí, Burkina Faso, Níger), con apoyo del Africa Corps ruso tras la salida de Francia y la ONU." }
  },
  keyFacts: [
    { k: "Ofensiva JNIM–FLA", v: "25-abr-2026", n: "muere el ministro de Defensa de Malí" },
    { k: "Bloqueo de Bamako", v: "desde 28-abr-2026", n: "rutas de acceso cortadas" },
    { k: "Combatientes de JNIM", v: "≈ 6.000", n: "estimación" },
    { k: "Golpes de Estado desde 2020", v: "5", n: "Malí (2), Burkina Faso (2), Níger" }
  ],
  summary: "<p>La insurgencia empezó en 2012 con una rebelión tuareg en el norte de Malí que los yihadistas capturaron. Francia intervino en 2013 y la ONU desplegó una misión, pero la violencia se extendió al centro de Malí, a Burkina Faso y a Níger. Entre 2020 y 2023 cinco golpes militares instalaron juntas que expulsaron a Francia y a la ONU y se aliaron con Rusia.</p><p>El modelo ruso no frenó la expansión. En 2025 el JNIM impuso un bloqueo de combustible sobre Bamako y en abril de 2026, aliado con separatistas tuaregs, lanzó una ofensiva que mató al ministro de Defensa, Sadio Camara, forzó la retirada del ejército y de los rusos de varias ciudades del norte y terminó en un bloqueo de las rutas hacia la capital.</p>",
  fronts: [
    { n: "Bamako y el oeste de Malí", s: "Bloqueo", l: 4, t: "Rutas de combustible desde Senegal y Costa de Marfil." },
    { n: "Norte de Malí (Kidal, Gao, Tombuctú)", s: "Retirada estatal", l: 4, t: "Ejército y Africa Corps abandonan posiciones." },
    { n: "Burkina Faso", s: "Expansión de JNIM", l: 5, t: "El grupo actúa como un Estado en amplias zonas." },
    { n: "Frontera Níger–Benín–Togo", s: "Derrame", l: 3, t: "Ataques en los países costeros." }
  ],
  nonState: [
    { name: "JNIM (Al Qaeda)", side: "A", where: "Malí, Burkina Faso, Níger, Benín" },
    { name: "Estado Islámico-Sahel", side: "A", where: "Ménaka, Tillabéri" },
    { name: "FLA (separatistas tuaregs)", side: "A2", where: "Norte de Malí" },
    { name: "Africa Corps (ex Wagner)", side: "B2", where: "Malí, Burkina Faso, Níger" }
  ],
  map: { bbox: [[-13, 8], [17, 24]], start: "2012-01-01" },
  roles: [
    { c: "Mali", es: "Malí", r: "B", from: "2012-01-01" },
    { c: "Burkina Faso", es: "Burkina Faso", r: "B", from: "2015-01-01" },
    { c: "Niger", es: "Níger", r: "B", from: "2015-01-01" },
    { c: "France", es: "Francia", r: "B2", from: "2013-01-11", to: "2022-08-15", n: "Operaciones Serval y Barkhane" },
    { c: "Russia", es: "Rusia", r: "B2", from: "2021-12-01", n: "Wagner, luego Africa Corps" },
    { c: "Algeria", es: "Argelia", r: "M", from: "2012-01-01", n: "Choque con Malí por un dron derribado (2025)" },
    { c: "Mauritania", es: "Mauritania", r: "M", from: "2012-01-01" },
    { c: "Senegal", es: "Senegal", r: "M", from: "2012-01-01", n: "Ruta de combustible" },
    { c: "Côte d'Ivoire", es: "Costa de Marfil", r: "M", from: "2012-01-01" },
    { c: "Benin", es: "Benín", r: "Z", from: "2022-01-01", n: "Ataques de JNIM en el norte" },
    { c: "Togo", es: "Togo", r: "Z", from: "2022-01-01" },
    { c: "Nigeria", es: "Nigeria", r: "M", from: "2012-01-01" },
    { c: "Guinea", es: "Guinea", r: "M", from: "2021-09-05", n: "También bajo gobierno militar" }
  ],
  events: [
    { d: "2012-01-17", lat: 15.92, lon: 2.40, t: "terrestre", h: "Rebelión tuareg en el norte de Malí", x: "Los yihadistas terminan desplazando a los separatistas." },
    { d: "2012-03-22", lat: 12.64, lon: -8.00, t: "politico", h: "Golpe en Bamako", x: "" },
    { d: "2013-01-11", lat: 14.95, lon: -3.90, t: "aereo", h: "Francia interviene (Operación Serval)", x: "Detiene el avance yihadista en Konna." },
    { d: "2015-11-20", lat: 12.63, lon: -8.02, t: "atentado", h: "Ataque al hotel Radisson de Bamako", x: "" },
    { d: "2017-03-02", lat: 18.44, lon: 1.41, t: "politico", h: "Nace el JNIM", x: "Fusión de grupos afines a Al Qaeda." },
    { d: "2020-08-18", lat: 12.65, lon: -7.98, t: "politico", h: "Golpe de Assimi Goïta", x: "Repite en mayo de 2021." },
    { d: "2021-12-15", lat: 12.65, lon: -8.0, t: "politico", h: "Llega Wagner a Malí", x: "", p: "m" },
    { d: "2022-03-27", lat: 13.98, lon: -4.88, t: "atentado", h: "Masacre de Moura", x: "Ejército maliense y combatientes extranjeros matan a unos 500 civiles según la ONU." },
    { d: "2022-08-15", lat: 16.27, lon: -0.04, t: "politico", h: "Los últimos franceses dejan Malí", x: "" },
    { d: "2022-09-30", lat: 12.37, lon: -1.52, t: "politico", h: "Golpe de Traoré en Burkina Faso", x: "" },
    { d: "2023-07-26", lat: 13.51, lon: 2.11, t: "politico", h: "Golpe en Níger", x: "Expulsión de tropas francesas y luego estadounidenses." },
    { d: "2023-11-14", lat: 18.44, lon: 1.41, t: "terrestre", h: "El ejército y Wagner toman Kidal", x: "" },
    { d: "2024-07-27", lat: 19.95, lon: 2.98, t: "terrestre", h: "Emboscada de Tinzaouaten", x: "La peor derrota de Wagner en África." },
    { d: "2024-08-24", lat: 13.42, lon: -1.06, t: "atentado", h: "Masacre de Barsalogho", x: "Centenares de civiles muertos por JNIM en Burkina Faso." },
    { d: "2024-09-17", lat: 12.56, lon: -7.95, t: "atentado", h: "JNIM ataca Bamako", x: "Escuela de gendarmería y aeropuerto." },
    { d: "2025-09-10", lat: 14.45, lon: -11.44, t: "terrestre", h: "Bloqueo de combustible sobre Bamako", x: "Más de 100 camiones cisterna atacados.", p: "m" },
    { d: "2026-04-25", lat: 12.74, lon: -8.07, t: "atentado", h: "Ofensiva JNIM–FLA; muere el ministro de Defensa", x: "Sadio Camara, en un ataque suicida." },
    { d: "2026-04-28", lat: 12.64, lon: -8.0, t: "terrestre", h: "JNIM anuncia el bloqueo de Bamako", x: "Llama a un \"frente común\" para derribar a la junta." },
    { d: "2026-04-29", lat: 18.44, lon: 1.41, t: "terrestre", h: "Retirada del ejército y de los rusos del norte", x: "Abandonan ciudades y bases.", p: "m" },
    {"d": "2026-09-01", "lat": 13.58, "lon": -2.42, "t": "atentado", "h": "Masacre del JNIM en la mina de Soubo (Burkina Faso)", "x": "Más de 60 combatientes atacaron un sitio de minería de oro en Yatenga y mataron a 24 civiles. Human Rights Watch lo documentó en un informe del 4 de noviembre; el JNIM admitió el ataque.", "u": "https://www.hrw.org/news/2026/11/04/burkina-faso-islamist-armed-group-targets-civilians", "st": "Human Rights Watch"},
    {"d": "2026-10-19", "lat": 12.65, "lon": -8.0, "t": "politico", "h": "HRW acusa al ejército de Malí y al Africa Corps ruso de matar civiles", "x": "El informe registra, entre otros casos, un ataque con drones contra un mercado en Bandiagara (6 muertos) y la ejecución de al menos 19 soldados capturados por el JNIM y el FLA en Gao. ACLED cuenta 49 bombardeos con 89 civiles muertos entre abril y agosto.", "u": "https://www.aljazeera.com/news/2026/10/19/malis-military-and-armed-groups-committing-abuses-against-civilians-hrw", "st": "Al Jazeera (AFP)", "nomap": true},
    { d: "2026-11-01", lat: 16.97, lon: 7.99, t: "diplomacia", h: "Tropas argelinas escoltan combustible hasta Agadez", x: "Llegó a Agadez el primer convoy de combustible argelino para Níger, de unas 50 a 60 cisternas, custodiado por militares argelinos y nigerinos. Argelia había anunciado el 26 de octubre el despliegue de unidades en Níger para proteger intereses energéticos comunes.", u: "https://www.africanews.com/amp/2026/11/02/niger-algerian-military-personnel-have-arrived-in-agadez-africanews-today/", st: "Africanews" },
    { d: "2026-11-04", lat: 13.58, lon: -2.42, t: "politico", h: "HRW acusa al JNIM de crímenes de guerra en Yatenga", x: "Human Rights Watch documentó al menos 27 civiles muertos por el JNIM en septiembre en esa provincia de Burkina Faso, 24 de ellos en la mina de Soubo. Según ACLED, el grupo hizo 125 ataques en el país entre enero y agosto.", u: "https://www.hrw.org/news/2026/11/04/burkina-faso-islamist-armed-group-targets-civilians", st: "Human Rights Watch" },
    { d: "2026-11-05", lat: 12.37, lon: -1.52, t: "diplomacia", h: "Goïta visita Uagadugú", x: "El jefe de la junta de Malí hace una visita de trabajo a Burkina Faso, anunciada por la presidencia burkinesa, mientras sigue el bloqueo yihadista sobre Bamako.", u: "https://burkina24.com/2026/11/04/burkina-mali-le-general-darmee-assimi-goita-attendu-ce-jeudi-5-novembre-2026-a-ouagadougou/", st: "Burkina24" },
    {"d": "2026-11-05", "lat": 13.51, "lon": 2.11, "t": "diplomacia", "h": "Goïta y Tiani refuerzan la alianza de la AES en Niamey", "x": "En la misma gira que lo llevó a Uagadugú, el jefe de la junta de Malí se reunió con su par de Níger; reafirmaron la fuerza unificada de la Confederación de Estados del Sahel y acusaron a mercenarios con apoyo extranjero de querer desestabilizarlos.", "u": "https://bamada.net/confederation-des-etats-du-sahel-les-generaux-assimi-goita-et-abdourahamane-tiani-scellent-la-synergie-strategique-a-niamey", "st": "Bamada.net"},
    {"d": "2026-11-06", "lat": 15.6, "lon": 2.9, "t": "aereo", "h": "Bombardeos del ejército maliense cerca de Ménaka y Kidal", "x": "El estado mayor informó ataques aéreos el 6 contra una concentración al suroeste de Ménaka y el 7 contra seis posiciones al sur de Kidal, sin balance de víctimas.", "u": "https://fr.madar.mr/actualites/sahel/mali-army-strikes-armed-groups-menaka-kidal-operation-dougoukoloko-20261108", "st": "MADAR"},
    {"d": "2026-11-07", "lat": 12.64, "lon": -8, "t": "terrestre", "h": "Llega a Bamako un convoy escoltado de 665 cisternas", "x": "El primer convoy de combustible de noviembre entró de madrugada con escolta militar, una muestra de que el abastecimiento de la capital depende del ejército mientras sigue el bloqueo del JNIM.", "u": "https://fr.madar.mr/actualites/sahel/mali-665-fuel-tankers-reach-bamako-first-november-convoy-20261107", "st": "MADAR"},
    {"d": "2026-11-11", "lat": 11.97, "lon": -8.77, "t": "diplomacia", "h": "Los mineros expulsados de Guinea empiezan a dejar Kouremalé", "x": "Malí cuenta unas 160.000 personas recibidas y seis muertos; los expulsados salen en camiones y buses del sitio de reunión, mientras Guinea informó 1.263 detenidos de siete nacionalidades.", "u": "https://www.africanews.com/2026/11/11/gold-miners-expelled-by-guinea-start-leaving-assembly-site-in-mali/", "st": "Africanews"}
  ],
  timeline: [
    { d: "1960", era: "Orígenes", h: "Independencias", x: "Fronteras coloniales que dividen a tuaregs y fulanis." },
    { d: "1990s", era: "Orígenes", h: "Rebeliones tuaregs", x: "" },
    { d: "2011", era: "Libia", h: "Caída de Gadafi", x: "Combatientes tuaregs y armas libias vuelven al Sahel." },
    { d: "2012", era: "Guerra de Malí", h: "Rebelión y golpe en Malí", x: "" },
    { d: "2013", era: "Guerra de Malí", h: "Intervención francesa", x: "" },
    { d: "2017", era: "Guerra de Malí", h: "Fundación del JNIM", x: "" },
    { d: "2020–2023", era: "Juntas", h: "Cinco golpes militares", x: "" },
    { d: "2023", era: "Juntas", h: "Alianza de Estados del Sahel", x: "Salida de la CEDEAO." },
    { d: "2026", era: "Juntas", h: "Ofensiva sobre Bamako", x: "" }
  ],
  history: [
    { h: "Libia como detonante", b: "<p>La intervención de la OTAN en Libia en 2011 y la caída de Gadafi liberaron arsenales y combatientes tuaregs que habían servido en su ejército. Volvieron a Malí y relanzaron la rebelión del norte, que los grupos yihadistas absorbieron. Es un ejemplo directo de cómo un cambio de régimen produce inestabilidad en países vecinos.</p>" },
    { h: "Del modelo francés al modelo ruso", b: "<p>Una década de presencia francesa y de la ONU no frenó la expansión yihadista y alimentó un fuerte sentimiento antifrancés. Las juntas cambiaron de socio: Wagner y luego el Africa Corps. El resultado tampoco fue mejor, con masacres de civiles como Moura y derrotas como Tinzaouaten. Hoy el JNIM no busca gobernar Bamako sino erosionar a la junta hasta forzar un gobierno más afín.</p>" }
  ],
  alt: [
    { lvl: "doc", h: "Ucrania en el Sahel", x: "Tras la emboscada de Tinzaouaten (2024), un vocero de la inteligencia militar ucraniana sugirió que Kiev había dado información a los rebeldes. Malí y Níger rompieron relaciones con Ucrania. Es un caso de la guerra ruso-ucraniana librada en otro continente." }
  ],
  sources: [
    { t: "Wikipedia — Mali fuel blockade", u: "https://en.wikipedia.org/wiki/Mali_fuel_blockade" },
    { t: "Dhaka Tribune / AFP — Mali jihadists begin Bamako blockade (may-2026)", u: "https://www.dhakatribune.com/world/409114/mali-jihadists-call-for-unified-front-begin" },
    { t: "Anadolu — Explainer: what is JNIM", u: "https://www.aa.com.tr/en/africa/explainer-what-is-jnim-the-armed-group-destabilizing-mali/3741054" }
  ]
},

/* ============================================================= */
{
  id: "rdc",
  name: "RD Congo – Ruanda",
  fullName: "Conflicto del este de la RD Congo (M23)",
  sub: "M23 respaldado por Ruanda · Goma y Bukavu · minerales críticos · acuerdos de Washington y Doha",
  region: "África central",
  status: "Conflicto armado · acuerdos sin cumplir",
  level: 4,
  since: "2021-11-08",
  center: [28.5, -1.5],
  sides: {
    A: { name: "AFC/M23 y Ruanda", desc: "Rebeldes liderados por comandantes tutsis congoleños, con apoyo militar ruandés según la ONU." },
    B: { name: "RD Congo", desc: "Ejército congoleño (FARDC), milicias Wazalendo y tropas de Burundi." }
  },
  keyFacts: [
    { k: "Desplazados en el este", v: "≈ 7 millones", n: "ONU" },
    { k: "Grupos armados activos", v: "> 100", n: "" },
    { k: "Capitales provinciales en manos del M23", v: "2", n: "Goma y Bukavu desde 2025" },
    { k: "Acuerdo RDC–Ruanda", v: "27-jun-2025", n: "Washington; ratificado en dic-2025" }
  ],
  summary: "<p>El M23 reapareció a fines de 2021 y en enero y febrero de 2025, con miles de soldados ruandeses según la ONU, tomó Goma y Bukavu, las dos mayores ciudades del este congoleño. EE.UU. medió un acuerdo entre la RD Congo y Ruanda (junio de 2025, firmado por los presidentes en diciembre) que incluye un componente de minerales. Catar medió entre Kinshasa y el M23.</p><p>Los papeles no cambiaron el terreno: en 2026 hubo combates intensos en Kivu del Sur, ataques con drones y un brote de ébola. En agosto las partes acordaron una hoja de ruta para negociar, pero el M23 sigue gobernando las zonas que tomó.</p>",
  fronts: [
    { n: "Kivu del Sur (Minembwe, Uvira, Kamanyola)", s: "Combates", l: 4, t: "Escalada en junio de 2026." },
    { n: "Kivu del Norte (Masisi, Rutshuru)", s: "Control M23", l: 3, t: "Minas de coltán de Rubaya." },
    { n: "Ituri", s: "Milicias y ADF", l: 3, t: "Presencia ugandesa." }
  ],
  nonState: [
    { name: "AFC/M23", side: "A", where: "Kivu del Norte y del Sur" },
    { name: "Wazalendo", side: "B2", where: "Kivus" },
    { name: "FDLR (hutus ruandeses)", side: "B2", where: "Kivu del Norte" },
    { name: "ADF (Estado Islámico)", side: "M", where: "Ituri, Beni" }
  ],
  map: { bbox: [[24, -6], [33, 3]], start: "2012-04-01" },
  roles: [
    { c: "Dem. Rep. Congo", es: "RD Congo", r: "B", from: "2012-04-01" },
    { c: "Rwanda", es: "Ruanda", r: "A", from: "2012-04-01" },
    { c: "Burundi", es: "Burundi", r: "B2", from: "2023-10-01", n: "Tropas junto al ejército congoleño" },
    { c: "Uganda", es: "Uganda", r: "M", from: "2012-04-01", n: "Tropas en Ituri; acusado de tolerar al M23" },
    { c: "South Africa", es: "Sudáfrica", r: "B2", from: "2023-12-15", to: "2025-05-31", n: "Misión de la SADC, retirada en 2025" },
    { c: "Tanzania", es: "Tanzania", r: "M", from: "2012-04-01" },
    { c: "Angola", es: "Angola", r: "M", from: "2012-04-01", n: "Mediador" }
  ],
  events: [
    { d: "2012-11-20", lat: -1.68, lon: 29.22, t: "terrestre", h: "El M23 toma Goma por primera vez", x: "Se retira días después." },
    { d: "2013-11-05", lat: -1.2, lon: 29.4, t: "terrestre", h: "Derrota del M23", x: "Ejército congoleño y brigada de la ONU." },
    { d: "2021-11-08", lat: -1.18, lon: 29.45, t: "terrestre", h: "Reaparece el M23 en Rutshuru", x: "" },
    { d: "2022-06-13", lat: 1.29, lon: 29.60, t: "terrestre", h: "Cae Bunagana", x: "Paso fronterizo con Uganda." },
    { d: "2024-04-30", lat: -1.56, lon: 28.88, t: "terrestre", h: "El M23 toma las minas de Rubaya", x: "Una de las mayores fuentes de coltán del mundo." },
    { d: "2025-01-27", lat: -1.68, lon: 29.22, t: "terrestre", h: "Cae Goma", x: "Con apoyo de miles de soldados ruandeses según la ONU." },
    { d: "2025-02-16", lat: -2.51, lon: 28.86, t: "terrestre", h: "Cae Bukavu", x: "" },
    { d: "2025-06-27", lat: 38.9, lon: -77.03, t: "diplomacia", h: "Acuerdo de Washington RDC–Ruanda", x: "", nomap: true },
    { d: "2025-07-19", lat: 25.29, lon: 51.53, t: "diplomacia", h: "Declaración de principios en Doha", x: "RDC y M23.", nomap: true },
    { d: "2025-12-04", lat: -2.75, lon: 29.0, t: "terrestre", h: "Combates en Kamanyola mientras se firma en Washington", x: "Tshisekedi y Kagame ratifican el acuerdo." },
    { d: "2026-06-20", lat: -3.50, lon: 28.40, t: "terrestre", h: "Escalada en Minembwe (Kivu del Sur)", x: "Drones y brote de ébola.", p: "m" },
    { d: "2026-03-02", lat: -1.95, lon: 30.06, t: "politico", h: "EE.UU. sanciona al ejército de Ruanda", x: "Por su apoyo al M23." },
    { d: "2026-08-25", lat: -1.68, lon: 29.22, t: "diplomacia", h: "Hoja de ruta para negociar", x: "Con EE.UU., Catar, Suiza, la UA y Togo.", p: "m" },
    { d: "2026-10-12", lat: -1.67, lon: 29.23, t: "politico", h: "Kabila lanza en Goma el Frente para la Refundación de la Nación", x: "El expresidente, condenado en ausencia por traición, encabeza una nueva coalición que reemplaza a la AFC/M23." },
    { d: "2026-10-27", lat: -1.10, lon: 27.95, t: "terrestre", h: "Se reanudan los combates en Walikale", x: "El FRN atacó posiciones del ejército y de los wazalendo en Luola y la colina Tchad; también se oyeron armas pesadas en Pinga. Sin balance de víctimas.", u: "https://www.congoquotidien.com/2026/10/27/nord-kivu-reprise-combats-luola-colline-tchad/", st: "Congo Quotidien" },
    { d: "2026-10-28", lat: 0, lon: 0, nomap: true, t: "diplomacia", h: "EE.UU. sanciona al Ministerio de Defensa de Ruanda y al banco Zigama", x: "El Tesoro acusa al ministerio de dirigir el despliegue de miles de soldados junto al M23 en los Kivu, y a Zigama de mover oro y decenas de millones de dólares para la AFC/M23. Kinshasa celebró la medida.", u: "https://actualite.cd/2026/10/29/rdc-sans-surprise-kinshasa-salue-les-sanctions-americaines-contre-le-ministere-rwandais", st: "Actualite.cd" },
    {"d": "2026-11-03", "lat": -1.4, "lon": 28.8, "t": "terrestre", "h": "Combates entre el ejército y el frente de Kabila en Masisi", "x": "Las FARDC, con apoyo de los Wazalendo, chocaron desde la madrugada con los rebeldes del Frente para la Refundación de la Nación en Mirindano. No hay balance de víctimas.", "u": "https://actualite.cd/2026/11/03/masisi-les-fardc-et-le-frn-saffrontent-mirindano", "st": "Actualite.cd"},
    {"d": "2026-11-03", "lat": -1.68, "lon": 29.22, "t": "diplomacia", "h": "El frente de Kabila se reúne con la ONU y rechaza renovar la MONUSCO", "x": "Tras reunirse en Goma con el jefe de la misión, James Swan, el FRN dijo que respeta el proceso de Doha y los compromisos del AFC/M23, pero se opone a renovar la MONUSCO y acusa al ejército, los wazalendo y Burundi de ataques en Masisi, Walikale y Minembwe.", "u": "https://actualite.cd/2026/11/03/rdc-apres-la-rencontre-kabila-swan-le-frn-exprime-des-reserves-sur-le-renouvellement-du", "st": "Actualité.cd"},
    { d: "2026-10-31", lat: -4.32, lon: 15.31, t: "politico", h: "El Senado aprueba la ley de referéndum", x: "Por unanimidad, el Senado sancionó la ley que regula los referendos, también para reformar la Constitución. La oposición y el frente de Kabila temen que abra el camino a un tercer mandato de Tshisekedi.", u: "https://www.infobascongo.com/2026/11/01/rdc-le-senat-adopte-a-lunanimite-la-loi-sur-lorganisation-du-referendum/", st: "Infobascongo" },
    { d: "2026-11-03", lat: -1.68, lon: 29.22, t: "diplomacia", h: "El frente de Kabila amenaza con dejar las negociaciones de Doha", x: "Tras reunirse en Goma con el jefe de la MONUSCO, Bertrand Bisimwa advirtió que el FRN podría abandonar Doha si Kinshasa reforma la Constitución por referéndum.", u: "https://ua.news/en/dovkolo-svitu/povstantsi-dr-kongo-prigrozili-viiti-z-peregovoriv-u-dosi-anadolu-agency", st: "Anadolu (vía UA.News)" },
    { d: "2026-11-04", lat: -1.3, lon: 28.75, t: "terrestre", h: "El ejército recupera Mahanga y Kilongo (Masisi)", x: "Tras dos días de combates, las FARDC y los wazalendo desalojaron al FRN de las dos localidades, que se replegó hacia Kasopo. Radio Okapi contó al menos cuatro civiles muertos y unos diez heridos.", u: "https://actualite.cd/2026/11/05/masisi-larmee-reprend-mahanga-et-kilongo-apres-deux-jours-dintenses-combats-contre-le", st: "Actualité.cd" },
    { d: "2026-11-05", lat: -1.15, lon: 28.45, t: "terrestre", h: "Ofensiva del ejército contra el FRN en Kibati (Walikale)", x: "Las FARDC y los wazalendo atacaron al amanecer posiciones del FRN en un sector del frente quieto desde hacía meses, con armas pesadas y livianas. Todavía no hay balance.", u: "https://actualite.cd/2026/11/05/walikale-reprise-de-combats-entre-les-fardc-et-le-frn-kibati", st: "Actualité.cd" },
    { d: "2026-11-04", nomap: true, t: "politico", h: "Kinshasa dice que el frente de Kabila no llegará a la capital", x: "El vocero Patrick Muyaya, en una cumbre Reino Unido–RDC en Londres, describió al FRN como una agresión ruandesa con fachada congoleña.", u: "https://actualite.cd/2026/11/05/frn-kabila-ils-narriveront-pas-kinshasa-affirme-patrick-muyaya", st: "Actualité.cd" },
    { d: "2026-11-05", lat: -1.0, lon: 28.68, t: "aereo", h: "Drones del FRN contra posiciones del ejército en Mindjendje (Walikale)", x: "En la noche del 4 al 5, drones atribuidos al frente de Kabila atacaron posiciones del ejército y de los wazalendo cerca de Pinga; murieron al menos dos milicianos. Es el tercer ataque aéreo del FRN en la zona.", u: "https://actualite.cd/2026/11/05/walikale-les-positions-de-larmee-visee-par-des-frappes-de-drone-du-frn-mindjendje", st: "Actualité.cd" },
    { d: "2026-11-05", lat: -2.35, lon: 28.8, t: "terrestre", h: "Combates en varios frentes de Kivu del Sur", x: "Hubo choques entre el ejército, los wazalendo y el FRN en Kabare, Mwenga y Walungu; en Masisi hubo una pausa, con Kazinga todavía en manos del FRN.", u: "https://www.reporter.cd/rdc-walikale-masisi-mwenga-walungu-plusieurs-fronts-secoues-par-de-nouveaux-combats-dans-lest/", st: "Reporter.cd" },
    {"d": "2026-11-06", "lat": 0.2, "lon": 29.3, "t": "atentado", "h": "Las ADF matan al menos a 35 civiles en Cantine-Aloya", "x": "En la noche del 5 al 6, el grupo armado atacó la localidad, entre Beni y Lubero, mató al menos a 35 personas, 17 de ellas niños, e incendió casas, comercios y dos centros de salud, según el Kivu Security Tracker.", "u": "https://actualite.cd/2026/11/06/rdc-au-moins-35-civils-tues-dans-une-nouvelle-attaque-des-adf-dans-le-territoire-de-beni", "st": "Actualité.cd"},
    {"d": "2026-11-06", "lat": -1.2, "lon": 28.45, "t": "terrestre", "h": "Segundo día de combates por Kibati (Walikale)", "x": "El ejército y los wazalendo cercan Kibati, en manos del FRN, sobre el eje Kashebere–Kibati; muchos vecinos huyeron y la ruta Goma–Walikale sigue cortada.", "u": "https://www.radiookapi.net/2026/11/06/actualite/securite/les-combats-sintensifient-entre-les-fardc-et-le-frn-sur-laxe-kashebere", "st": "Radio Okapi"},
    {"d": "2026-11-06", "lat": -2.25, "lon": 28.7, "t": "terrestre", "h": "El FRN abre un frente en Kabare (Kivu del Sur)", "x": "Hay combates con los wazalendo en Kasirusiru y Bugulumiza y la lucha ya llega a cinco de los ocho territorios de la provincia; en Minembwe, los bombardeos sobre Kakenge mataron al menos a dos personas.", "u": "https://actualite.cd/2026/11/06/rdc-les-combats-entre-les-rebelles-du-frn-et-larmee-se-generalisent-dans-plusieurs", "st": "Actualité.cd"},
    {"d": "2026-11-06", "nomap": true, "lat": 25.29, "lon": 51.53, "t": "diplomacia", "h": "El FRN le pide a Qatar frenar la reforma constitucional de Tshisekedi", "x": "En una carta a la mediación qatarí, el frente de Kabila exigió que Kinshasa aclare sus planes de cambiar la Constitución y advirtió que usará todos los medios para impedirlo.", "u": "https://actualite.cd/2026/11/06/doha-le-frn-de-joseph-kabila-saisit-la-mediation-qatarie-contre-le-projet-de-changement", "st": "Actualité.cd"},
    {"d": "2026-11-06", "lat": -1.42, "lon": 28.05, "t": "politico", "h": "Condenan a muerte a 66 soldados en Walikale", "x": "Un tribunal militar los declaró culpables de cobardía, revuelta y desobediencia por hechos en Ntoto, una muestra de la crisis de disciplina del ejército ante el avance del FRN.", "u": "https://actualite.cd/index.php/2026/11/07/walikale-66-militaires-des-fardc-condamnes-mort-pour-lachete-revolte-militaire-et-refus", "st": "Actualité.cd"},
    {"d": "2026-11-07", "lat": -1.3, "lon": 28.85, "t": "terrestre", "h": "El ejército rechaza un contraataque del FRN en Mahanga (Masisi)", "x": "En la noche del 6 el FRN intentó recuperar la localidad, perdida el miércoles, pero tras horas de combate volvió a replegarse hacia Kasopo.", "u": "https://actualite.cd/2026/11/07/masisi-larmee-repousse-une-nouvelle-offensive-du-frn-mahanga", "st": "Actualité.cd"},
    {"d": "2026-11-07", "lat": -2.1, "lon": 28.65, "t": "terrestre", "h": "El FRN toma Kalonge y Bitale (Kalehe)", "x": "Los rebeldes del frente de Kabila entraron en las dos localidades de Kivu del Sur, al borde del parque Kahuzi-Biega, tras avanzar desde Kabare; el ejército y los wazalendo se replegaron hacia Myowe.", "u": "https://actualite.cd/2026/11/07/sud-kivu-kalonge-et-bitale-passent-sous-controle-des-rebelles-du-frn", "st": "Actualité.cd"},
    {"d": "2026-11-07", "lat": -2.05, "lon": 28.83, "t": "terrestre", "h": "El ejército recupera Katasomwa (Kalehe)", "x": "La localidad volvió a manos del ejército en la noche del 7, en medio de la contraofensiva del FRN en el territorio de Kalehe.", "u": "https://actualite.cd/2026/11/08/kalehe-katasomwa-repasse-sous-controle-de-larmee", "st": "Actualité.cd"},
    {"d": "2026-11-08", "lat": -2.12, "lon": 28.62, "t": "terrestre", "h": "Vuelven los combates en Bitale", "x": "El ejército y los wazalendo chocaron de nuevo con el FRN en la localidad tomada por los rebeldes el día anterior.", "u": "https://actualite.cd/2026/11/08/kalehe-reprise-des-affrontements-entre-rfn-et-fardcwazalendo-bitale", "st": "Actualité.cd"},
    {"d": "2026-11-08", "lat": -2, "lon": 28.56, "t": "terrestre", "h": "El FRN toma Bulambika y controla un tramo de la RN3", "x": "Tras el repliegue del ejército y los wazalendo, los rebeldes entraron en la localidad y quedaron dueños de un tramo clave de la ruta Bukavu–Hombo, con nuevos desplazamientos.", "u": "https://actualite.cd/2026/11/08/kalehe-les-rebelles-du-frn-prennent-le-controle-de-bulambika", "st": "Actualité.cd"},
    {"d": "2026-11-07", "lat": -1.4, "lon": 28.4, "t": "terrestre", "h": "El ejército y los wazalendo rechazan un ataque del FRN en Mindjendje", "x": "Desde Malemo (Masisi), el FRN atacó posiciones en Mindjendje, en Walikale, en combates de más de cuatro horas; los rebeldes se replegaron y el 9 la zona estaba en calma precaria.", "u": "https://actualite.cd/2026/11/09/walikale-retour-au-calme-mindjendje-apres-des-combats-entre-les-fardc-et-le-frn", "st": "Actualité.cd"},
    {"d": "2026-11-09", "lat": -2.07, "lon": 28.57, "t": "terrestre", "h": "El FRN avanza unos 50 km por la RN3 y llega a Bunyakiri", "x": "Según fuentes locales y de seguridad citadas por AFP, la ofensiva lanzada desde Chivanga a través del parque Kahuzi-Biega llegó a Bunyakiri y tomó Kambali, mientras Kambegete sigue en manos del ejército. El objetivo declarado es Walikale.", "u": "https://africaradio.com/actualite-117304-rdc-le-groupe-arme-frn-lance-une-offensive-et-progresse-dans-l-est-du-pays", "st": "Africa Radio (AFP)"},
    {"d": "2026-11-09", "lat": -2.05, "lon": 28.6, "t": "terrestre", "h": "El ejército anuncia una contraofensiva en Bunyakiri", "x": "El vocero militar regional dijo que el avance rebelde quedó frenado en Bulambika, que se prepara una contraofensiva hacia Kambali y que Mubugu, Kambegete, Irangi y Hombo-Sud siguen bajo control del gobierno.", "u": "https://actualite.cd/2026/11/09/kalehe-larmee-annonce-une-contre-offensive-pour-reconquerir-les-zones-de-bunyakiri", "st": "Actualité.cd"},
    {"d": "2026-11-09", "lat": -1.75, "lon": 28.45, "t": "terrestre", "h": "Cientos de familias desplazadas llegan a Hombo", "x": "Tras la caída de Bitale y Bulambika, cientos de hogares huyeron hacia Hombo Sud y Hombo Norte, donde se alojan en escuelas e iglesias; la sociedad civil pide ayuda y teme que el FRN siga hacia la puerta de Walikale.", "u": "https://actualite.cd/2026/11/09/rdc-kalehe-des-centaines-de-menages-de-deplaces-affluent-hombo-apres-loccupation-de", "st": "Actualité.cd"},
    {"d": "2026-11-09", "lat": 1.98, "lon": 30.3, "t": "terrestre", "h": "La ONU alerta por combates en Djugu que traban la respuesta al ébola", "x": "El coordinador humanitario interino informó combates desde el 8 en Fataki, con al menos cinco civiles heridos, y la suspensión de una misión cerca del sitio de Plaine Savo, que aloja a más de 76.000 desplazados.", "u": "https://actualite.cd/2026/11/10/crise-humanitaire-djugu-lonu-salarme-des-violences-fataki-et-plaine-savo-qui", "st": "Actualité.cd"},
    {"d": "2026-11-10", "lat": -2.0, "lon": 28.56, "t": "terrestre", "h": "Hallan dos civiles muertos tras la entrada del FRN en Bulambika", "x": "Vecinos encontraron los cuerpos de un hombre y una mujer con heridas de bala, que habrían muerto el día en que llegaron los rebeldes.", "u": "https://actualite.cd/index.php/2026/11/10/sud-kivu-au-moins-deux-civils-tues-lentree-des-rebelles-du-frn-bulambika", "st": "Actualité.cd"},
    {"d": "2026-11-10", "lat": 1.0, "lon": 29.1, "t": "atentado", "h": "Más de 40 cuerpos tras ataques de las ADF en Mambasa", "x": "Fuentes locales y humanitarias cuentan al menos 40 civiles muertos, sobre todo agricultores, en siete aldeas del territorio de Mambasa (Ituri) desde el 1 de noviembre; los cuerpos siguen sin recuperar.", "u": "https://actualite.cd/2026/11/10/rdc-decouverte-de-plus-de-40-corps-apres-une-serie-dattaques-des-adf-dans-differents", "st": "Actualité.cd"},
    {"d": "2026-11-10", "lat": -1.85, "lon": 28.65, "t": "terrestre", "h": "El FRN se repliega de tres localidades de Kalehe y las toman los Wazalendo", "x": "Fuentes de seguridad lo describen como una reubicación hacia el eje de Bunyakiri y no como una derrota.", "u": "https://actualite.cd/2026/11/11/crise-securitaire-le-frn-se-retire-de-chambombo-bukumba-et-shanje-et-redeploie-les", "st": "Actualité.cd"},
    {"d": "2026-11-11", "lat": -1.95, "lon": 28.35, "t": "terrestre", "h": "Combates en Kambegete, sobre la RN3, y en los altos de Uvira y Fizi", "x": "El ejército y los Wazalendo enfrentaron al FRN el martes y el miércoles al norte de Bunyakiri; también hubo choques cerca de Kaziba. No se informaron cifras de víctimas.", "u": "https://www.reporter.cd/sud-kivu-toujours-aucun-repit-dans-les-combats-entre-fardc-et-frn-m23-a-kalehe-uvira-et-fizi/", "st": "Reporter.cd"},
    {"d": "2026-11-11", "lat": 1.35, "lon": 29.05, "t": "atentado", "h": "Nuevos ataques de las ADF en Mambasa: al menos 12 civiles muertos", "x": "Las incursiones del 11 golpearon cuatro aldeas de la jefatura Babila Babombi; la sociedad civil suma otros 11 muertos desde el domingo.", "u": "https://www.radiookapi.net/2026/11/12/actualite/securite/12-civils-tues-dans-de-nouvelles-attaques-attribuees-aux-adf-mambasa", "st": "Radio Okapi"}
  ],
  timeline: [
    { d: "1885–1960", era: "Orígenes", h: "Estado Libre del Congo y colonia belga", x: "" },
    { d: "1994", era: "Grandes Lagos", h: "Genocidio en Ruanda", x: "Los genocidas hutus huyen al Congo." },
    { d: "1996–1997", era: "Grandes Lagos", h: "Primera guerra del Congo", x: "Ruanda y Uganda derrocan a Mobutu." },
    { d: "1998–2003", era: "Grandes Lagos", h: "Segunda guerra del Congo", x: "Nueve países involucrados; millones de muertos." },
    { d: "2012", era: "M23", h: "Nace el M23 y toma Goma", x: "" },
    { d: "2021", era: "M23", h: "Resurgimiento del M23", x: "" },
    { d: "2025", era: "M23", h: "Caída de Goma y Bukavu; acuerdos de Washington y Doha", x: "" }
  ],
  history: [
    { h: "La sombra de 1994", b: "<p>El genocidio de Ruanda empujó al este del Congo a cientos de miles de hutus, entre ellos los responsables de las matanzas. Ruanda justifica desde entonces su intervención por la amenaza de las FDLR. Dos guerras (1996 y 1998) convirtieron al este congoleño en un espacio sin Estado efectivo, disputado por ejércitos vecinos y milicias.</p>" },
    { h: "Minerales y geopolítica", b: "<p>El este del Congo concentra coltán, estaño, oro y tungsteno. Buena parte sale de contrabando por Ruanda. El acuerdo impulsado por Washington liga la paz a un esquema de cooperación minera, en competencia con la presencia china en el sector.</p>" }
  ],
  alt: [
    { lvl: "doc", h: "El apoyo de Ruanda al M23", x: "Los informes del Grupo de Expertos de la ONU documentan desde 2012 el mando, las tropas y el armamento ruandeses junto al M23. Kigali lo niega o lo justifica por la amenaza de las FDLR." }
  ],
  sources: [
    { t: "Anadolu — DR Congo, Rwanda commit to de-escalate (25-jun-2026)", u: "https://aa.com.tr/en/africa/dr-congo-rwanda-commit-to-de-escalate-tensions-in-south-kivu/3977941" },
    { t: "NPR — Congo and Rwanda sign peace deal as fighting rages", u: "https://www.wusf.org/2025-12-04/congo-and-rwanda-to-sign-symbolic-peace-deal-in-washington-as-fighting-rages" }
  ]
},

/* ============================================================= */
{
  id: "myanmar",
  name: "Myanmar",
  fullName: "Guerra civil de Myanmar",
  sub: "Junta militar contra ejércitos étnicos y fuerzas de resistencia · China como árbitro",
  region: "Sudeste asiático",
  status: "Guerra civil",
  level: 4,
  since: "2021-02-01",
  center: [96, 21],
  sides: {
    A: { name: "Junta militar (Tatmadaw)", desc: "Desde 2026 con fachada civil: Min Aung Hlaing presidente tras elecciones sin los territorios rebeldes." },
    B: { name: "Resistencia", desc: "Gobierno de Unidad Nacional (NUG) y sus Fuerzas de Defensa Popular, más ejércitos étnicos como el Arakan Army, el KIA, el KNU y fuerzas karenni." }
  },
  keyFacts: [
    { k: "Territorio fuera del control de la junta", v: "39,3%", n: "ISP-Myanmar, may-2026" },
    { k: "Civiles muertos en ataques aéreos durante la elección", v: "≈ 170", n: "ACNUDH" },
    { k: "Presidente", v: "Min Aung Hlaing", n: "desde abr-2026" },
    { k: "Golpe de Estado", v: "1-feb-2021", n: "" }
  ],
  summary: "<p>El golpe de 2021 contra el gobierno de Aung San Suu Kyi desató protestas masivas reprimidas a balazos y el nacimiento de una resistencia armada que se alió con los ejércitos étnicos históricos. La Operación 1027 (octubre de 2023) de la Alianza de la Hermandad le quitó a la junta buena parte del norte del estado Shan, la frontera con China y Lashio; el Arakan Army tomó casi todo Rakhine.</p><p>China, preocupada por sus inversiones y la estafa en línea en su frontera, presionó a los rebeldes del norte para devolver Lashio en 2025 y respaldó las elecciones de la junta (diciembre de 2025 a enero de 2026). Con Min Aung Hlaing como presidente, el régimen busca legitimidad regional mientras recupera terreno con bombardeos aéreos.</p>",
  fronts: [
    { n: "Rakhine", s: "Control del Arakan Army", l: 4, t: "Casi todo el estado fuera del control militar." },
    { n: "Karenni y Karen", s: "Contraofensiva de la junta", l: 4, t: "Mando regional trasladado a Loikaw (oct-2026)." },
    { n: "Sagaing y la zona seca", s: "Resistencia bamar", l: 4, t: "Bombardeos aéreos frecuentes." },
    { n: "Norte de Shan", s: "Tregua bajo presión china", l: 2, t: "" }
  ],
  nonState: [
    { name: "Arakan Army", side: "B", where: "Rakhine" },
    { name: "KIA (Kachin)", side: "B", where: "Kachin" },
    { name: "Fuerzas de Defensa Popular (NUG)", side: "B", where: "Sagaing, Magway" },
    { name: "UWSA (Wa)", side: "M", where: "Shan; reconoció a Min Aung Hlaing" }
  ],
  map: { bbox: [[91, 9], [102, 29]], start: "2021-01-15" },
  roles: [
    { c: "Myanmar", es: "Myanmar", r: "Z", from: "2021-01-15" },
    { c: "China", es: "China", r: "M", from: "2021-01-15", n: "Árbitro; presiona a los rebeldes del norte y respalda las elecciones" },
    { c: "Russia", es: "Rusia", r: "A2", from: "2021-02-01", n: "Proveedor de aviones y armas" },
    { c: "Thailand", es: "Tailandia", r: "M", from: "2021-01-15", n: "Acusada de legitimar al régimen" },
    { c: "India", es: "India", r: "M", from: "2021-01-15" },
    { c: "Bangladesh", es: "Bangladesh", r: "M", from: "2021-01-15", n: "Más de un millón de refugiados rohinyás" },
    { c: "Laos", es: "Laos", r: "M", from: "2021-01-15" }
  ],
  events: [
    { d: "2021-02-01", lat: 19.76, lon: 96.13, t: "politico", h: "Golpe de Estado", x: "Detención de Aung San Suu Kyi." },
    { d: "2021-03-27", lat: 16.84, lon: 96.17, t: "atentado", h: "Masacres del Día de las Fuerzas Armadas", x: "Más de 100 manifestantes muertos en un día." },
    { d: "2023-10-27", lat: 23.70, lon: 98.77, t: "terrestre", h: "Operación 1027", x: "Ofensiva de la Alianza de la Hermandad en el norte de Shan." },
    { d: "2024-01-05", lat: 23.74, lon: 98.75, t: "terrestre", h: "Cae Laukkai", x: "Rendición de un mando regional completo." },
    { d: "2024-08-03", lat: 22.93, lon: 97.75, t: "terrestre", h: "Cae Lashio", x: "Sede del Mando Noreste." },
    { d: "2024-12-20", lat: 19.78, lon: 94.04, t: "terrestre", h: "El Arakan Army toma Ann", x: "Sede del Mando Occidental." },
    { d: "2025-03-28", lat: 21.98, lon: 96.08, t: "politico", h: "Terremoto de magnitud 7,7", x: "Mandalay y Sagaing; los bombardeos continúan." },
    { d: "2025-04-22", lat: 22.93, lon: 97.75, t: "diplomacia", h: "Lashio vuelve a la junta", x: "Bajo presión china." },
    { d: "2025-12-28", lat: 19.76, lon: 96.13, t: "politico", h: "Primera fase de las elecciones", x: "Sin votación en zonas rebeldes." },
    { d: "2026-01-22", lat: 25.38, lon: 97.40, t: "aereo", h: "Bombardeo en Kachin", x: "Hasta 50 muertos según el ACNUDH." },
    { d: "2026-04-03", lat: 19.76, lon: 96.13, t: "politico", h: "El parlamento elige presidente a Min Aung Hlaing", x: "" },
    { d: "2026-10-01", lat: 19.67, lon: 97.21, t: "terrestre", h: "La junta traslada un mando regional a Loikaw", x: "Contraofensiva en Karenni." },
    { d: "2026-10-30", lat: 20.95, lon: 92.38, t: "aereo", h: "Bombardeo de la junta contra una escuela en Maungdaw", x: "El ataque de madrugada en Kyeinchaung, zona controlada por el Ejército de Arakan, destruyó la escuela secundaria y dañó casas cercanas; no hubo víctimas, según vecinos.", u: "https://www.bnionline.net/en/news/myanmar-junta-airstrike-hits-high-school-arakan-army-controlled-maungdaw", st: "BNI Online" },
    { d: "2026-10-31", lat: 17.97, lon: 97.73, t: "aereo", h: "Bombardeo de la junta junto a la frontera daña un pueblo tailandés", x: "El ataque contra una posición de la KNU al otro lado del río Salween dañó unos 17 edificios en Mae Sam Laep, en Tailandia, entre ellos un centro de salud, una mezquita, un templo y una iglesia. Tailandia suspendió los botes en el río y preparó refugios; la KNU dice que la junta busca cortar el comercio de su Brigada 5.", u: "https://www.nationthailand.com/news/general/40072996", st: "The Nation (Tailandia)" },
    {"d": "2026-10-31", "lat": 19.68, "lon": 97.21, "t": "aereo", "h": "Bombardeo contra una escuela en Loikaw: tres alumnos muertos", "x": "El ataque se produjo durante las clases y dejó cinco heridos, según el Grupo de Derechos Humanos Karenni.", "u": "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/11/02/newborn-among-15-killed-as-myanmar-military-strikes-maternity-clinic-and-school-sources-say", "st": "Reuters (vía The Star)"},
    {"d": "2026-11-01", "lat": 20.59, "lon": 93.19, "t": "aereo", "h": "Ataques en Rakhine: 12 muertos, uno en una maternidad", "x": "Bombardeos en Kyauktaw, Kyaukpyu, Pauktaw y Mrauk-U, donde fue alcanzada una clínica con maternidad; entre los muertos hay una beba de una semana y personal de salud, según el Ejército de Arakan y un trabajador humanitario.", "u": "https://www.thestar.com.my/aseanplus/aseanplus-news/2026/11/02/newborn-among-15-killed-as-myanmar-military-strikes-maternity-clinic-and-school-sources-say", "st": "Reuters (vía The Star)"},
    {"d": "2026-11-02", "lat": 13.75, "lon": 100.5, "t": "diplomacia", "h": "Tailandia convoca al agregado militar de Myanmar por los bombardeos en la frontera", "x": "El jefe de las Fuerzas Armadas tailandesas pidió \"cautela\" después del ataque aéreo del 31 de octubre contra una base de la KNU en Hpapun, que dañó edificios en Mae Hong Son.", "u": "https://english.dvb.no/thailand-warns-myanmar-military-attache-to-exercise-caution-over-border-airstrikes/", "st": "DVB", "nomap": true},
    { d: "2026-10-30", lat: 13.85, lon: 98.27, t: "aereo", h: "Bombardeo contra una escuela karen en Tanintharyi", x: "Un ataque aéreo del ejército contra una escuela en Ka Nyin Chaung mató a cuatro personas, entre ellas una nena de 10 años, e hirió a tres.", u: "https://myanmar-now.org/en/news/myanmar-military-airstrikes-on-two-schools-kill-seven-including-children/", st: "Myanmar Now" },
    { d: "2026-11-03", lat: 19.76, lon: 96.08, t: "diplomacia", h: "El canciller tailandés viajará a Naypyidó", x: "Tras los bombardeos que dañaron casas en territorio tailandés, Bangkok anunció que su canciller visitará Myanmar el 12 de noviembre, antes de la cumbre de la ASEAN en Manila. La junta culpó a \"insurgentes terroristas\" por el civil tailandés herido.", u: "https://www.malaymail.com/news/world/2026/11/04/thailands-foreign-minister-visits-myanmar-amid-border-clashes-a-coup-ahead-of-asean-summit/241955", st: "AFP (vía Malay Mail)" },
    { d: "2026-11-03", nomap: true, t: "diplomacia", h: "EE.UU. prioriza minerales y crimen transnacional en Myanmar", x: "Un documento de estrategia del Departamento de Estado fija como metas combatir el crimen transnacional, acceder a tierras raras, ampliar la influencia estadounidense y lograr un acuerdo de paz antes de 2030, sin mencionar la democracia.", u: "https://myanmar-now.org/en/news/us-prioritises-own-interests-over-myanmars-democracy-in-new-strategy-statement/", st: "Myanmar Now" },
    { d: "2026-11-04", nomap: true, t: "diplomacia", h: "La Corte de La Haya fallará el 19 de noviembre sobre el genocidio rohinyá", x: "La Corte Internacional de Justicia fijó la fecha de la sentencia de fondo en la demanda de Gambia contra Myanmar por genocidio. La junta niega las acusaciones.", u: "https://www.malaymail.com/news/world/2026/11/05/myanmar-faces-landmark-icj-ruling-on-rohingya-genocide-allegations-on-nov-19/241942", st: "AFP (vía Malay Mail)" },
    {"d": "2026-11-04", "lat": 23.79, "lon": 95.68, "t": "aereo", "h": "Bombardeo contra un hospital de la resistencia en Kawlin (Sagaing)", "x": "Un ataque aéreo de la junta mató a cinco trabajadores de la salud, entre ellos un médico de alto rango, e hirió al menos a cinco pacientes; medios locales elevan el balance a ocho.", "u": "https://euro-burma.eu/junta-airstrike-kills-senior-doctor-4-healthcare-workers-at-hospital-in-sagaing-region/", "st": "BNI (vía Euro-Burma Office)"},
    {"d": "2026-11-07", "lat": 22.43, "lon": 94.83, "t": "aereo", "h": "Bombardeo contra una escuela y casas en Kani (Sagaing)", "x": "Autogiros de la junta atacaron la aldea de Nyaung Pin Lay; medios locales cuentan al menos ocho civiles muertos, entre ellos una adolescente, y siete heridos, y otro medio eleva los muertos a 11. Sin confirmación de agencias.", "u": "https://www.globalarakannetwork.com/post/eight-killed-including-children-and-seven-injured-as-myanmar-junta-bombs-school-and-homes-in-kani", "st": "Global Arakan Network"},
    {"d": "2026-11-06", "lat": 12.8, "lon": 98.95, "t": "aereo", "h": "Ataque aéreo en territorio de la KNU en Tanintharyi", "x": "Un caza y tres autogiros bombardearon la aldea de Mazaw; según autoridades locales de la KNU murieron tres civiles, entre ellos un chico, y hubo siete heridos.", "u": "https://moemaka.net/eng/2026/11/november-8-2026-m-cdm-domestic-news/", "st": "Moemaka (m.CDM)"},
    {"d": "2026-11-05", "lat": 20.59, "lon": 93.19, "t": "aereo", "h": "Una bomba de la junta mata a una embarazada en Mrauk-U", "x": "Una bomba de 500 libras cayó sobre una casa en zona del Ejército de Arakan; murió una mujer embarazada y hubo once heridos.", "u": "https://myanmar-now.org/en/news/myanmar-military-airstrike-in-mrauk-u-kills-pregnant-woman/", "st": "Myanmar Now"},
    {"d": "2026-11-10", "lat": 24.4, "lon": 96.2, "t": "terrestre", "h": "El KIA y fuerzas de defensa toman tres puestos militares cerca de Maw Luu", "x": "Entre el 4 y el 10 de noviembre tomaron Sipein, Hparpant y Pinwei, en el límite entre Sagaing y Kachin; un oficial del KIA habla de decenas de soldados muertos y 18 capturados, sin confirmación independiente.", "u": "https://myanmar-now.org/en/news/fighting-intensifies-near-sagaing-kachin-border-as-resistance-forces-capture-three-military-outposts/", "st": "Myanmar Now"},
    {"d": "2026-11-10", "lat": 17.6, "lon": 96.9, "t": "terrestre", "h": "La junta dice haber tomado un cuartel del NUG y del KNLA entre Mon y Bago", "x": "Según el diario estatal, tras seis días de operación capturó 11 bases, con armas y drones; AP no pudo verificarlo y la resistencia no respondió.", "u": "https://abcnews.com/International/wireStory/myanmar-army-seizes-key-resistance-headquarters-10-bases-138003361", "st": "AP"}
  ],
  timeline: [
    { d: "1948", era: "Orígenes", h: "Independencia de Birmania", x: "Rebeliones étnicas desde el primer año." },
    { d: "1962", era: "Dictadura", h: "Golpe de Ne Win", x: "Medio siglo de gobierno militar." },
    { d: "1988", era: "Dictadura", h: "Levantamiento 8888", x: "" },
    { d: "2011", era: "Apertura", h: "Transición controlada", x: "" },
    { d: "2015", era: "Apertura", h: "Triunfo de Suu Kyi", x: "" },
    { d: "2017", era: "Apertura", h: "Limpieza étnica de los rohinyás", x: "" },
    { d: "2021", era: "Guerra civil", h: "Golpe y resistencia armada", x: "" },
    { d: "2023", era: "Guerra civil", h: "Operación 1027", x: "" },
    { d: "2026", era: "Guerra civil", h: "Elecciones y presidencia de Min Aung Hlaing", x: "" }
  ],
  history: [
    { h: "La guerra más larga del mundo", b: "<p>Myanmar vive conflictos armados desde su independencia en 1948. El ejército se presenta como garante de la unidad frente a decenas de minorías armadas. El golpe de 2021 unió por primera vez a la mayoría bamar con esas minorías contra los militares.</p>" },
    { h: "El factor chino", b: "<p>China tiene un oleoducto y un gasoducto hasta el golfo de Bengala y proyectos en el norte. Arma a varios grupos de la frontera y a la vez sostiene a la junta. Su prioridad es la estabilidad de la frontera, no quién gobierne en Naipyidó.</p>" }
  ],
  alt: [
    { lvl: "doc", h: "Una causa en Argentina", x: "En febrero de 2025 un tribunal argentino, por jurisdicción universal, ordenó la detención de 25 funcionarios, incluido Min Aung Hlaing, por el genocidio rohinyá." }
  ],
  sources: [
    { t: "Global R2P — Myanmar (mar-2026)", u: "https://globalr2p.org/countries/myanmar-burma" },
    { t: "The Irrawaddy — cobertura de la guerra", u: "https://www.irrawaddy.com/" }
  ]
}
);
