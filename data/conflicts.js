/* Monitor de Conflictos — datos
   Estructura pensada para migrar a /data/*.json en el repo.
   Fechas ISO; "p" = precisión ("d" día, "m" mes, "y" año).
   Roles de países: A = bando A · A2 = aliado/alineado con A · B = bando B · B2 = aliado/alineado con B
                    M = intermedio / mediador / ambivalente · Z = teatro de guerra o territorio fragmentado
   Tipos de evento: aereo · terrestre · naval · atentado · diplomacia · politico
   Nivel de evidencia (lecturas alternativas): doc = documentado · ind = indicios sólidos · hip = hipótesis */

window.MONITOR_META = {
  updated: "2026-10-29",
  updatedLabel: "29 oct 2026 · 06:00 ART",
  edition: "Maqueta v0.5"
};

window.ALERTS = [
  { id: "medio-oriente", level: 5, tag: "Escalada", date: "2026-10-28",
    title: "Medio Oriente: misiles hutíes sobre Adén y un borrador catarí sobre la mesa",
    text: "Tras la ronda de Teherán sin tregua, los hutíes atacaron el aeropuerto de Adén y siguen disparando contra Arabia Saudita; Ormuz continúa cerrado. Catar le presentó a Irán un plan de siete días con garantes, mientras EE.UU. advierte al Golfo que podría retomar los ataques después del 3 de noviembre. En Israel, el escrutinio deja a Netanyahu sin mayoría." },
  { id: "rusia-ucrania", level: 4, tag: "Ventana diplomática", date: "2026-10-27",
    title: "Rusia–Ucrania: tregua local en Oleshky y negociación trilateral en noviembre",
    text: "Desde el 27 de octubre rige un alto el fuego humanitario en Oleshky (Jersón), aunque Rusia volvió a atacar Kiev esa misma noche. Rusia aceptó \"en principio\" retomar las conversaciones con Ucrania y EE.UU. después del 10 de noviembre, posiblemente en Abu Dabi. La disputa de fondo sigue siendo el Donbás." },
  { id: "corea", level: 3, tag: "Tensión fronteriza", date: "2026-10-12",
    title: "Península de Corea: incidente en la DMZ y nueva salva de misiles",
    text: "Una mina hirió a tres oficiales surcoreanos en la zona desmilitarizada el 21 de septiembre. Semanas después, Pyongyang lanzó varios misiles balísticos desde el área de la capital hacia el mar del Este." }
];

/* Notas diplomáticas: hechos de política exterior que no son conflictos armados del monitor
   pero tienen peso regional o para Argentina. Máximo 4, la más reciente primero.
   Campos: date, tag, title, text, countries (nombres en español), u (fuente), st (medio). */
window.NOTES = [
  { date: "2026-10-28", tag: "Crisis diplomática", countries: ["Brasil", "Argentina", "EE.UU.", "Ecuador"],
    title: "Flávio Bolsonaro sale de Brasil por Argentina y se proclama \"líder legítimo\" desde Miami",
    text: "El candidato derrotado por Lula el 25-oct tenía prohibido salir del país y los pasaportes cancelados en una causa por lavado. Cruzó a Misiones con pasaporte italiano, voló desde Puerto Iguazú vía Guayaquil y llegó a Miami. Primero se presentó como \"presidente electo legítimo\" y después cambió la palabra por \"líder\". Migraciones primero negó y luego confirmó su ingreso a la Argentina; la oposición exige explicaciones al gobierno de Milei. EE.UU. anunció que le dará visa; Lula calificó la salida de \"vergonzosa\".",
    u: "https://www.infobae.com/america/agencias/2026/10/28/el-papel-del-gobierno-de-milei-en-la-fuga-de-flavio-bolsonaro-a-traves-de-argentina/", st: "Infobae (EFE)" },
  { date: "2026-10-28", tag: "Cumbre", countries: ["Rusia", "África"],
    title: "Tercera cumbre Rusia–África en Moscú",
    text: "Del 28 al 29 de octubre, con delegaciones de 48 países y 22 jefes de Estado según el Kremlin. Moscú busca afianzar su presencia en el continente, donde su Africa Corps sostiene a las juntas del Sahel.",
    u: "https://interfax.com/newsroom/top-stories/119688/", st: "Interfax" }
];

window.CANDIDATES = [
  { id: "pakistan-afganistan", name: "Pakistán – Afganistán", level: 4, status: "Guerra fronteriza abierta",
    center: [69.5, 33.5],
    why: "Desde el 27 de febrero de 2026 Islamabad habla de \"guerra abierta\" con el gobierno talibán: bombardeos sobre Kabul y provincias del este, combates sobre la Línea Durand y negociaciones fallidas en Moscú. Pakistán además es mediador en la guerra de Irán y socio del pacto de defensa con Arabia Saudita, así que conecta con el tablero de Medio Oriente." },
  { id: "sudan", name: "Sudán", level: 5, status: "Guerra civil",
    center: [30, 14.5],
    why: "Ejército (SAF) contra las Fuerzas de Apoyo Rápido (RSF) desde abril de 2023. Tras la caída de El Fasher (oct-2025) las RSF controlan todo Darfur y la guerra se extiende a Kordofán. La ONU la describe como la mayor crisis de desplazamiento y hambre del mundo, con injerencia de Emiratos, Egipto y otros actores." },
  { id: "sahel", name: "Sahel central (Malí, Burkina Faso, Níger)", level: 3, status: "Insurgencia yihadista",
    center: [-1, 15],
    why: "Juntas militares aliadas con Rusia (Africa Corps) contra filiales de Al Qaeda y Estado Islámico que controlan amplias zonas rurales. Relevante si se quiere seguir la competencia Rusia–Occidente fuera de Europa." },
  { id: "rdc", name: "RD Congo – Ruanda (M23)", level: 3, status: "Conflicto armado con acuerdo frágil",
    center: [28.5, -1.5],
    why: "El M23, respaldado por Ruanda según la ONU, tomó Goma y Bukavu en 2025. Hay acuerdos firmados en Washington y Doha, pero el control territorial no cambió de manos. Minerales críticos de por medio." },
  { id: "myanmar", name: "Myanmar", level: 3, status: "Guerra civil",
    center: [96, 21],
    why: "La junta militar enfrenta a ejércitos étnicos y milicias de resistencia desde el golpe de 2021. China actúa como árbitro en la frontera norte." }
];

window.CONFLICTS = [

/* ============================================================= */
{
  id: "medio-oriente",
  name: "Medio Oriente",
  fullName: "Guerra regional de Medio Oriente",
  sub: "Israel y EE.UU. contra Irán y su red de aliados · Gaza · Líbano · Yemen · Ormuz",
  region: "Asia occidental",
  status: "Guerra abierta",
  level: 5,
  since: "2023-10-07",
  center: [47, 29],
  sides: {
    A: { name: "EE.UU. – Israel", desc: "Israel desde el 7-oct-2023; EE.UU. como beligerante directo desde el 28-feb-2026, con apoyo de los Estados del Golfo que alojan sus bases." },
    B: { name: "Irán y el \"Eje de la Resistencia\"", desc: "Irán y sus aliados armados: Hezbolá (Líbano), Hamás y la Yihad Islámica (Gaza), los hutíes (Yemen) y milicias chiíes iraquíes." }
  },
  keyFacts: [
    { k: "Día de guerra con Irán", v: "244", n: "desde el 28-feb-2026" },
    { k: "Brent (28-oct)", v: "US$ 114,87", n: "Ormuz bajo control iraní (The National)" },
    { k: "Muertos en Gaza", v: "≥ 74.540", n: "Min. de Salud de Gaza, 24-oct-2026" },
    { k: "Desplazados en Líbano", v: "> 1 millón", n: "guerra desde el 2-mar-2026" }
  ],
  summary: "<p>Lo que empezó como la guerra de Gaza tras el ataque de Hamás del 7 de octubre de 2023 se convirtió en una guerra regional con varios frentes simultáneos. El salto cualitativo llegó el <strong>28 de febrero de 2026</strong>, cuando EE.UU. e Israel lanzaron una ofensiva aérea contra Irán que mató al líder supremo Alí Jamenei. Irán respondió con misiles contra Israel, contra bases estadounidenses y contra países árabes aliados de Washington, y cerró el estrecho de Ormuz.</p><p>Desde entonces hubo un alto el fuego mediado por Pakistán (8 de abril), un bloqueo naval estadounidense sobre los puertos iraníes, un memorando firmado en Islamabad (17 de junio) y un colapso de la tregua el 8 de julio. Hace más de un mes que EE.UU. e Irán no intercambian golpes directos, pero la guerra se desplazó: los hutíes abrieron en julio un frente contra Arabia Saudita que hoy es el más activo, Israel mantiene ocupada una franja del sur del Líbano y Ormuz sigue cerrado para quien no acepte las reglas iraníes.</p><p>El 26 de octubre, funcionarios de Arabia Saudita, Turquía y Pakistán se reunieron en Teherán con el presidente Pezeshkian para evitar la reanudación de la guerra abierta. Irán puso siete condiciones para negociar con Washington; Trump dijo que no atacará antes de las elecciones del 3 de noviembre.</p>",
  fronts: [
    { n: "Irán – EE.UU./Israel", s: "Pausa armada", l: 4, t: "Sin ataques directos en más de un mes; bloqueo naval y Ormuz cerrado." },
    { n: "Arabia Saudita – hutíes", s: "Escalada", l: 5, t: "Misiles y drones sobre Riad, el Este y el sur saudí; contraofensiva en la costa de Yemen." },
    { n: "Israel – Hezbolá (Líbano)", s: "Tregua y ocupación", l: 3, t: "Israel ocupa una franja de unos 650 km² en el sur (jul-2026); tregua desde junio y retiro gradual pactado con EE.UU." },
    { n: "Gaza", s: "Tregua violada", l: 3, t: "Alto el fuego desde el 10-oct-2025. Israel controlaba el 53% de la Franja tras la \"línea amarilla\"; en 2026 lo amplió a por lo menos el 60–64% (Reuters, Israel)." },
    { n: "Estrecho de Ormuz / Golfo de Omán", s: "Bloqueo cruzado", l: 5, t: "Minas, ataques a petroleros y bloqueo estadounidense." }
  ],
  nonState: [
    { name: "Hamás y Yihad Islámica", side: "B2", where: "Gaza" },
    { name: "Hezbolá", side: "B2", where: "Líbano" },
    { name: "Hutíes (Ansar Alá)", side: "B2", where: "Norte de Yemen" },
    { name: "Milicias chiíes (FMP)", side: "B2", where: "Irak" },
    { name: "Gobierno yemení reconocido", side: "A2", where: "Adén, Marib, Taiz" }
  ],
  map: { bbox: [[26, 9], [78, 41]], start: "2023-10-01" },
  roles: [
    { c: "Israel", es: "Israel", r: "A", from: "2023-10-07" },
    { c: "United States of America", es: "Estados Unidos", r: "A2", from: "2023-10-07", to: "2026-02-27", n: "Apoyo militar a Israel; ataques a hutíes (2024-25) e instalaciones nucleares iraníes (jun-2025)" },
    { c: "United States of America", es: "Estados Unidos", r: "A", from: "2026-02-28", n: "Beligerante directo" },
    { c: "Iran", es: "Irán", r: "B", from: "2023-10-07" },
    { c: "Palestine", es: "Palestina (Gaza y Cisjordania)", r: "Z", from: "2023-10-07" },
    { c: "Lebanon", es: "Líbano", r: "Z", from: "2023-10-08", n: "Hezbolá combate; el Estado libanés no es beligerante" },
    { c: "Yemen", es: "Yemen", r: "Z", from: "2023-10-19", n: "Norte hutí vs. gobierno respaldado por Arabia Saudita" },
    { c: "Syria", es: "Siria", r: "B2", from: "2023-10-07", to: "2024-12-07", n: "Régimen de Asad, aliado de Irán" },
    { c: "Syria", es: "Siria", r: "Z", from: "2024-12-08", n: "Tras la caída de Asad: territorio fragmentado, ataques israelíes" },
    { c: "Iraq", es: "Irak", r: "Z", from: "2023-10-17", n: "Milicias pro-iraníes atacan a EE.UU. e Israel; el Estado intenta mantenerse al margen" },
    { c: "Saudi Arabia", es: "Arabia Saudita", r: "M", from: "2023-10-07", to: "2026-07-12" },
    { c: "Saudi Arabia", es: "Arabia Saudita", r: "A2", from: "2026-07-13", n: "En guerra con los hutíes desde jul-2026; a la vez media con Teherán" },
    { c: "United Arab Emirates", es: "Emiratos Árabes Unidos", r: "M", from: "2023-10-07", to: "2026-02-27" },
    { c: "United Arab Emirates", es: "Emiratos Árabes Unidos", r: "A2", from: "2026-02-28", n: "Alberga fuerzas de EE.UU.; blanco de represalias iraníes" },
    { c: "Bahrain", es: "Baréin", r: "A2", from: "2023-10-07", n: "Sede de la V Flota" },
    { c: "Kuwait", es: "Kuwait", r: "A2", from: "2026-02-28", n: "Bases de EE.UU. atacadas" },
    { c: "Qatar", es: "Catar", r: "M", from: "2023-10-07", n: "Mediador; base de Al Udeid atacada por Irán (2025 y 2026)" },
    { c: "Jordan", es: "Jordania", r: "A2", from: "2024-04-13", n: "Interceptó misiles iraníes" },
    { c: "Egypt", es: "Egipto", r: "M", from: "2023-10-07", n: "Mediador en Gaza" },
    { c: "Oman", es: "Omán", r: "M", from: "2023-10-07", n: "Canal con Irán; acuerdo sobre Ormuz" },
    { c: "Turkey", es: "Turquía", r: "M", from: "2023-10-07", n: "Mediador; pacto de defensa con Arabia Saudita y Pakistán" },
    { c: "Pakistan", es: "Pakistán", r: "M", from: "2026-03-01", n: "Mediador del alto el fuego de abril y del Memorando de Islamabad" },
    { c: "Russia", es: "Rusia", r: "M", from: "2023-10-07", n: "Socio de Irán sin intervención militar" },
    { c: "China", es: "China", r: "M", from: "2023-10-07", n: "Principal comprador de crudo iraní" }
  ],
  events: [
    { d: "2023-10-07", lat: 31.40, lon: 34.45, t: "atentado", h: "Ataque de Hamás al sur de Israel", x: "Unas 1.200 personas muertas y 251 rehenes llevados a Gaza. Israel declara la guerra." },
    { d: "2023-10-27", lat: 31.52, lon: 34.46, t: "terrestre", h: "Invasión terrestre de Gaza", x: "Comienza la ofensiva terrestre israelí en el norte de la Franja." },
    { d: "2023-11-19", lat: 15.2, lon: 41.6, t: "naval", h: "Los hutíes capturan el Galaxy Leader", x: "Inicio de la campaña hutí contra el tráfico marítimo en el mar Rojo." },
    { d: "2024-04-01", lat: 33.51, lon: 36.29, t: "aereo", h: "Israel bombardea el consulado iraní en Damasco", x: "Mueren altos mandos de la Fuerza Quds." },
    { d: "2024-04-13", lat: 31.0, lon: 35.0, t: "aereo", h: "Primer ataque directo de Irán a Israel", x: "Más de 300 drones y misiles; la mayoría interceptados con apoyo de EE.UU., Reino Unido y Jordania." },
    { d: "2024-07-31", lat: 35.69, lon: 51.39, t: "atentado", h: "Asesinato de Ismail Haniye en Teherán", x: "El jefe político de Hamás muere en la capital iraní." },
    { d: "2024-09-17", lat: 33.6, lon: 35.6, t: "atentado", h: "Explosión de buscapersonas de Hezbolá", x: "Operación israelí contra la red de comunicaciones del grupo." },
    { d: "2024-09-27", lat: 33.85, lon: 35.51, t: "aereo", h: "Muerte de Hasán Nasralá", x: "Bombardeo israelí en Dahiye, Beirut." },
    { d: "2024-10-01", lat: 33.2, lon: 35.4, t: "terrestre", h: "Israel invade el sur del Líbano", x: "El mismo día Irán lanza unos 180 misiles balísticos sobre Israel." },
    { d: "2024-11-27", lat: 33.27, lon: 35.2, t: "diplomacia", h: "Alto el fuego Israel–Hezbolá", x: "Mediado por EE.UU. y Francia." },
    { d: "2024-12-08", lat: 33.51, lon: 36.29, t: "politico", h: "Cae el régimen de Bashar al Asad", x: "Irán pierde su corredor terrestre hacia Hezbolá." },
    { d: "2025-01-19", lat: 31.35, lon: 34.3, t: "diplomacia", h: "Primera tregua en Gaza", x: "Intercambio de rehenes por presos palestinos." },
    { d: "2025-03-18", lat: 31.5, lon: 34.47, t: "aereo", h: "Israel reanuda la ofensiva en Gaza", x: "Fin de la primera fase de la tregua." },
    { d: "2025-06-13", lat: 33.72, lon: 51.73, t: "aereo", h: "Israel ataca Irán: comienza la guerra de los 12 días", x: "Ataques sobre Natanz, jefes militares y científicos nucleares." },
    { d: "2025-06-22", lat: 34.88, lon: 50.99, t: "aereo", h: "EE.UU. bombardea Fordo, Natanz e Isfahán", x: "Primer ataque estadounidense directo al programa nuclear iraní." },
    { d: "2025-06-23", lat: 25.12, lon: 51.31, t: "aereo", h: "Irán ataca la base de Al Udeid (Catar)", x: "Represalia anunciada; al día siguiente Trump anuncia un alto el fuego." },
    { d: "2025-09-09", lat: 25.29, lon: 51.53, t: "aereo", h: "Israel bombardea a la cúpula de Hamás en Doha", x: "Ataque en territorio del principal mediador." },
    { d: "2025-10-10", lat: 31.45, lon: 34.4, t: "diplomacia", h: "Alto el fuego en Gaza (plan Trump)", x: "Israel se repliega hasta la \"línea amarilla\"; la segunda fase, con el desarme de Hamás, queda trabada." },
    { d: "2026-02-28", lat: 35.69, lon: 51.42, t: "aereo", h: "EE.UU. e Israel atacan Irán; muere Jamenei", x: "Ataques en Teherán, Isfahán, Karaj, Kermanshah, Qom y Tabriz en plena negociación nuclear." },
    { d: "2026-03-01", lat: 26.2, lon: 50.6, t: "aereo", h: "Represalia iraní contra el Golfo", x: "Misiles y drones sobre Israel y bases de EE.UU. en Baréin, Kuwait, Catar y Emiratos." },
    { d: "2026-03-02", lat: 33.1, lon: 35.5, t: "terrestre", h: "Hezbolá entra en la guerra", x: "Comienza la guerra del Líbano de 2026; Israel ocupa partes del sur." },
    { d: "2026-03-01", lat: 26.57, lon: 56.25, t: "naval", h: "Irán cierra el estrecho de Ormuz", x: "Junto con la represalia inicial; disrupción del comercio mundial de crudo y GNL.", p: "m" },
    { d: "2026-03-28", lat: 15.37, lon: 44.19, t: "aereo", h: "Los hutíes reanudan los misiles contra Israel", x: "Se suman formalmente a la guerra con Irán." },
    { d: "2026-04-08", lat: 33.69, lon: 73.05, t: "diplomacia", h: "Alto el fuego mediado por Pakistán", x: "Tregua de dos semanas; las conversaciones de Islamabad fracasan y EE.UU. impone un bloqueo naval a Irán." },
    { d: "2026-06-17", lat: 33.72, lon: 73.07, t: "diplomacia", h: "Memorando de Islamabad", x: "Firmado por los presidentes de EE.UU. e Irán (18-jun, hora de Islamabad); levanta el doble bloqueo." },
    { d: "2026-07-08", lat: 26.4, lon: 56.6, t: "naval", h: "Colapsa la tregua en Ormuz", x: "Irán ataca buques comerciales y se reanudan los ataques cruzados con EE.UU." },
    { d: "2026-07-13", lat: 15.48, lon: 44.22, t: "aereo", h: "Ruptura de la tregua saudí–hutí", x: "Tras un bombardeo sobre un aeropuerto hutí, los hutíes disparan misiles a Arabia Saudita. El 20-jul declaran un bloqueo naval sobre sus puertos del mar Rojo." },
    { d: "2026-08-06", lat: 15.46, lon: 45.32, t: "terrestre", h: "Ofensiva hutí sobre Marib y Hadramaut", x: "La mayor campaña terrestre desde la tregua de 2022." },
    { d: "2026-10-05", lat: 13.32, lon: 43.25, t: "terrestre", h: "Contraofensiva saudí en la costa de Moca", x: "Unos 100 cazas apoyan a fuerzas yemeníes tras la toma hutí de Moca.", p: "m" },
    { d: "2026-10-10", lat: 24.96, lon: 46.70, t: "aereo", h: "Ataque hutí al aeropuerto de Riad", x: "13 muertos y más de 300 heridos: el ataque más letal contra Arabia Saudita en más de una década." },
    { d: "2026-10-11", lat: 25.2, lon: 57.6, t: "naval", h: "EE.UU. inutiliza un buque que intentaba romper el bloqueo", x: "La noche anterior, un superpetrolero había chocado con una mina en una ruta no autorizada de Ormuz." },
    { d: "2026-10-26", lat: 35.70, lon: 51.40, t: "diplomacia", h: "Saudíes, turcos y pakistaníes en Teherán", x: "Reunión con Pezeshkian para evitar la reanudación de la guerra; Irán fija siete condiciones para negociar." },
    { d: "2026-10-27", lat: 24.71, lon: 46.68, t: "aereo", h: "Nueva salva hutí sobre Riad", x: "Horas después de que la ronda de Teherán terminara sin tregua, Arabia Saudita informó la intercepción de misiles balísticos sobre la capital y sobre la región oriental. Los hutíes reivindicaron objetivos en Riad, Najrán y Ras Tanura.", u: "https://www.wsbtv.com/news/world/houthis-say-2-dead/5ZXMA66CIYYI5KENJ7M4FH5FZY/", st: "AP" },
    { d: "2026-10-27", lat: 26.30, lon: 56.90, t: "naval", h: "Petrolero en llamas tras chocar con minas al este de Ormuz", x: "Según el ejército iraní, el buque había apagado su sistema de rastreo y entró en una zona restringida; no se informaron víctimas. Teherán insiste en que el estrecho sigue cerrado a buques sin su autorización.", u: "https://www.aa.com.tr/en/middle-east/iran-says-oil-tanker-catches-fire-after-hitting-naval-mine-east-of-strait-of-hormuz/4102560", st: "Anadolu" },
    { d: "2026-10-27", lat: 31.77, lon: 35.21, t: "politico", h: "Elecciones en Israel: ningún bloque llega a 61 bancas", x: "Las encuestas de boca de urna dan al Likud como primera fuerza pero sin mayoría para Netanyahu, con el bloque de Eisenkot cerca o por delante según el canal. Los resultados oficiales se esperan para el 4 de noviembre.", u: "https://www.israelhayom.com/2026/10/27/israel-election-2026-exit-polls-full-results/", st: "Israel Hayom" },
    { d: "2026-10-28", lat: 12.83, lon: 45.03, t: "aereo", h: "Misiles hutíes contra el aeropuerto de Adén", x: "Después de pedir la evacuación, los hutíes atacaron el aeropuerto de la sede provisional del gobierno yemení y los vuelos se suspendieron; una fuente humanitaria dijo que no hubo heridos. La TV hutí atribuyó a bombardeos saudíes 14 muertos en Al Jawf (dato de parte, sin verificar).", u: "https://theprint.in/world/houthis-strike-yemens-aden-airport-after-evacuation-warning/3084304/", st: "Reuters (vía ThePrint)" },
    { d: "2026-10-28", lat: 25.29, lon: 51.53, t: "diplomacia", h: "Catar acerca a Irán un borrador para cerrar la guerra", x: "Según Reuters, el plan fija siete días de gestos recíprocos con países garantes y Teherán debería contestar antes del fin de semana; Irán dijo que valora cualquier esfuerzo negociador. En paralelo, el WSJ informó que Washington alertó a países del Golfo sobre una posible nueva campaña después de las legislativas del 3 de noviembre.", u: "https://www.thenationalnews.com/news/mena/2026/10/28/iran-welcomes-negotiations-after-reported-qatari-mediated-draft-deal/", st: "The National" },
    { d: "2026-10-28", lat: 31.77, lon: 35.21, t: "politico", h: "Escrutinio en Israel: 53 bancas para Netanyahu, 48 para Eisenkot", x: "Con más del 85% de los votos contados ningún bloque llega a 61; los partidos árabes suman 19 bancas, su mejor resultado. Restan los sobres dobles, entre ellos el voto militar, así que el reparto todavía puede moverse.", u: "https://www.ynetnews.com/article/hjnatbkaml", st: "Ynet" }
  ],
  timeline: [
    { d: "1916", era: "Orígenes", h: "Acuerdo Sykes–Picot", x: "Francia y Gran Bretaña se reparten las provincias árabes del Imperio otomano." },
    { d: "1917", era: "Orígenes", h: "Declaración Balfour", x: "Londres apoya un \"hogar nacional judío\" en Palestina." },
    { d: "1929", era: "Orígenes", h: "Masacres de Hebrón y Safed", x: "Turbas árabes matan a 67 judíos en Hebrón y a unos 20 en Safed." },
    { d: "1936–1939", era: "Orígenes", h: "Revuelta árabe", x: "Rebelión contra el Mandato y la inmigración judía; unos 5.000 árabes muertos, la mayoría por la represión británica." },
    { d: "1937–1939", era: "Orígenes", h: "Bombas del Irgún en mercados árabes", x: "Atentados en Jerusalén y Haifa con decenas de muertos cada uno." },
    { d: "1944", era: "Orígenes", h: "Lehi asesina a Lord Moyne", x: "Ministro británico para Medio Oriente, en El Cairo." },
    { d: "1946", era: "Orígenes", h: "Atentado al hotel Rey David", x: "El Irgún de Menájem Beguin mata a 91 personas. Londres lo consideraba terrorista y en 1954–55 le negó la visa; fue primer ministro desde 1977." },
    { d: "1948-04-09", era: "Orígenes", h: "Deir Yassin y el convoy de Hadassah", x: "Irgún y Lehi matan a unos 107 aldeanos árabes; cuatro días después, una represalia árabe mata a 79 judíos." },
    { d: "1948", era: "Orígenes", h: "Creación de Israel y primera guerra árabe-israelí", x: "Unos 700.000 palestinos huyen o son expulsados (la Nakba)." },
    { d: "1948-07", era: "Orígenes", h: "Expulsión de Lida y Ramle", x: "Entre 50.000 y 70.000 palestinos expulsados; cientos de muertos." },
    { d: "1948-09-17", era: "Orígenes", h: "Lehi asesina al mediador de la ONU", x: "Folke Bernadotte. Yitzhak Shamir, de la dirección de Lehi, fue luego primer ministro." },
    { d: "1953", era: "Orígenes", h: "Golpe contra Mosaddegh en Irán", x: "Operación de la CIA y el MI6 que restaura el poder del sha." },
    { d: "1953-10", era: "Guerras árabe-israelíes", h: "Masacre de Qibya", x: "La Unidad 101 de Ariel Sharon mata a 69 aldeanos en Cisjordania." },
    { d: "1956", era: "Guerras árabe-israelíes", h: "Kafr Qasim y Jan Yunis", x: "Masacres de civiles árabes en Israel y en Gaza durante la crisis de Suez." },
    { d: "1967", era: "Guerras árabe-israelíes", h: "Guerra de los Seis Días", x: "Israel ocupa Gaza, Cisjordania, Jerusalén Este, el Golán y el Sinaí." },
    { d: "1972-09", era: "Guerras árabe-israelíes", h: "Masacre de Múnich", x: "Septiembre Negro mata a 11 atletas israelíes en los Juegos Olímpicos." },
    { d: "1979", era: "Revolución iraní", h: "Revolución islámica en Irán", x: "Cae el sha; Jomeini instaura la República Islámica y rompe con EE.UU. e Israel." },
    { d: "1979–1989", era: "Revolución iraní", h: "Operación Ciclón", x: "La CIA, con Pakistán y Arabia Saudita, arma a los muyahidines afganos contra la URSS." },
    { d: "1980–1988", era: "Revolución iraní", h: "Guerra Irán–Irak", x: "Cerca de un millón de muertos; Irán aprende a pelear por medio de aliados." },
    { d: "1982", era: "Revolución iraní", h: "Nace Hezbolá", x: "Durante la invasión israelí del Líbano, con apoyo de los Guardianes de la Revolución." },
    { d: "1982-09", era: "Revolución iraní", h: "Sabra y Shatila", x: "Falangistas libaneses matan a cientos o miles de refugiados palestinos en zona controlada por Israel." },
    { d: "1987", era: "Revolución iraní", h: "Primera Intifada y fundación de Hamás", x: "" },
    { d: "1988", era: "Revolución iraní", h: "Bin Laden funda Al Qaeda", x: "Con veteranos árabes de la guerra afgana." },
    { d: "1993", era: "Oslo", h: "Acuerdos de Oslo", x: "Reconocimiento mutuo entre Israel y la OLP; el Estado palestino nunca llega." },
    { d: "1994", era: "Oslo", h: "Masacre de Hebrón", x: "El colono Baruch Goldstein mata a 29 palestinos que rezaban." },
    { d: "1995", era: "Oslo", h: "Asesinato de Rabin", x: "Un extremista judío mata al primer ministro de Oslo." },
    { d: "1996", era: "Oslo", h: "Ola de atentados suicidas de Hamás", x: "Unos 59 muertos en nueve días en Jerusalén y Tel Aviv." },
    { d: "2001-09-11", era: "Oslo", h: "Atentados del 11 de septiembre", x: "Al Qaeda ataca EE.UU.; comienza la \"guerra contra el terror\"." },
    { d: "2003", era: "Oslo", h: "Invasión de Irak", x: "La caída de Sadam abre Irak a la influencia iraní." },
    { d: "2005", era: "Oslo", h: "Retirada israelí de Gaza", x: "En 2007 Hamás toma el control de la Franja; Israel y Egipto imponen un bloqueo." },
    { d: "2011–2017", era: "Primavera Árabe y después", h: "Guerra de Siria: armas para la oposición", x: "EE.UU., Arabia Saudita, Catar y Turquía arman a los rebeldes; parte del material termina en manos yihadistas." },
    { d: "2014-06", era: "Primavera Árabe y después", h: "El Estado Islámico toma Mosul y proclama el califato", x: "En agosto EE.UU. empieza a bombardearlo." },
    { d: "2014", era: "Primavera Árabe y después", h: "Los hutíes toman Saná", x: "En 2015 Arabia Saudita interviene en Yemen." },
    { d: "2015", era: "Primavera Árabe y después", h: "Acuerdo nuclear (JCPOA)", x: "Irán limita el enriquecimiento a cambio del alivio de sanciones." },
    { d: "2018", era: "Primavera Árabe y después", h: "EE.UU. abandona el JCPOA", x: "\"Máxima presión\"; Irán vuelve a enriquecer por encima de lo pactado." },
    { d: "2020", era: "Primavera Árabe y después", h: "EE.UU. mata a Qasem Soleimani · Acuerdos de Abraham", x: "Israel normaliza relaciones con Emiratos y Baréin." },
    { d: "2023-10-07", era: "Guerra regional", h: "Ataque de Hamás y guerra de Gaza", x: "" },
    { d: "2024-04", era: "Guerra regional", h: "Primer choque directo Irán–Israel", x: "" },
    { d: "2024-09", era: "Guerra regional", h: "Decapitación de Hezbolá", x: "Buscapersonas, muerte de Nasralá e invasión del sur libanés." },
    { d: "2024-12-08", era: "Guerra regional", h: "Caída de Asad", x: "" },
    { d: "2025-06", era: "Guerra regional", h: "Guerra de los 12 días", x: "Israel y EE.UU. bombardean el programa nuclear iraní." },
    { d: "2025-10-10", era: "Guerra regional", h: "Alto el fuego en Gaza", x: "" },
    { d: "2026-02-28", era: "Guerra de Irán", h: "Guerra de EE.UU. e Israel contra Irán", x: "Muere Jamenei; cierre de Ormuz." },
    { d: "2026-04-08", era: "Guerra de Irán", h: "Tregua de Islamabad y bloqueo naval", x: "" },
    { d: "2026-07", era: "Guerra de Irán", h: "Colapso de la tregua y frente saudí–hutí", x: "" },
    { d: "2026-10", era: "Guerra de Irán", h: "Escalada en Yemen y mediación regional", x: "Ataque al aeropuerto de Riad; reunión en Teherán." }
  ],
  history: [
    { h: "Un mapa trazado desde afuera", b: "<p>El Medio Oriente moderno nace del desarme del Imperio otomano tras la Primera Guerra Mundial. Francia y Gran Bretaña dibujaron fronteras según sus intereses (Sykes–Picot, 1916) y, al mismo tiempo, Londres prometió a los árabes un reino independiente y al movimiento sionista un \"hogar nacional judío\" en Palestina. Esas promesas incompatibles son el primer sustrato del conflicto.</p><p>La creación de Israel en 1948 y la derrota árabe dejaron sin resolver la cuestión palestina. La guerra de 1967 sumó la ocupación de Cisjordania, Gaza y Jerusalén Este, que sigue siendo el núcleo del litigio.</p>" },
    { h: "1979: Irán cambia de bando", b: "<p>Hasta 1979 Irán era el principal aliado de EE.UU. en el Golfo, con relaciones discretas con Israel. La revolución islámica lo convirtió en el gran adversario de ambos. La memoria del golpe de 1953 contra Mosaddegh explica parte del antiamericanismo del nuevo régimen.</p><p>La guerra con Irak (1980–88), en la que Sadam Husein contó con apoyo occidental y del Golfo, enseñó a Teherán que no podía ganar una guerra convencional. Su respuesta fue construir una red de aliados armados fuera de sus fronteras: Hezbolá en el Líbano (1982), milicias en Irak después de 2003, el apoyo a Hamás y la Yihad Islámica, y más tarde a los hutíes de Yemen. Esa red es el \"Eje de la Resistencia\".</p>" },
    { h: "La cuestión nuclear", b: "<p>El programa nuclear iraní es el hilo que une a Israel, EE.UU. y las monarquías del Golfo. El acuerdo de 2015 (JCPOA) limitó el enriquecimiento; la salida de EE.UU. en 2018 y la política de \"máxima presión\" llevaron a Irán a enriquecer cerca del 60%. En junio de 2025 el OIEA declaró a Irán en incumplimiento por primera vez en dos décadas y, semanas después, Israel y EE.UU. bombardearon Natanz, Fordo e Isfahán. Las evaluaciones de la ONU hablaron de un retraso temporal, no de una destrucción.</p>" },
    { h: "Del 7 de octubre a la guerra regional", b: "<p>El ataque de Hamás del 7 de octubre de 2023 abrió la guerra de Gaza, la más destructiva de la historia del conflicto. Los aliados de Irán abrieron frentes de \"solidaridad\": Hezbolá en la frontera norte, los hutíes en el mar Rojo y milicias iraquíes contra bases estadounidenses.</p><p>Durante 2024 Israel cambió el equilibrio: eliminó a buena parte de la cúpula de Hamás y Hezbolá, invadió el sur del Líbano y por primera vez intercambió ataques directos con Irán. La caída de Asad en diciembre cortó el corredor terrestre iraní. Ese debilitamiento del Eje es el contexto en que EE.UU. e Israel deciden, en 2025 y 2026, ir directamente contra Irán.</p>" },
    { h: "2026: la guerra de Irán", b: "<p>El 28 de febrero de 2026, en medio de negociaciones nucleares iniciadas en abril de 2025, EE.UU. e Israel atacaron Irán y mataron a Jamenei. Irán respondió contra Israel, contra bases estadounidenses y contra los países árabes que las alojan, y cerró Ormuz. Hezbolá y los hutíes se sumaron.</p><p>La guerra tuvo pausas y recaídas: una tregua mediada por Pakistán en abril, un bloqueo naval de EE.UU., el Memorando de Islamabad en junio y el colapso del 8 de julio. Desde el verano el centro de gravedad pasó a Yemen: los hutíes intentan forzar a Arabia Saudita a una \"paz del vencedor\" (abandono del gobierno yemení, apertura de puertos y aeropuertos, reparaciones) con ataques a aeropuertos e infraestructura petrolera. La consecuencia global más visible es el precio del crudo.</p>" },
    { h: "Qué mirar en las próximas semanas", b: "<ul><li><strong>3 de noviembre:</strong> elecciones de medio término en EE.UU. Trump dijo que no atacará antes; Netanyahu le pide \"terminar el trabajo\".</li><li><strong>Ormuz:</strong> si Irán acepta reabrirlo a cambio del fin del bloqueo, según su propuesta de siete días.</li><li><strong>Riad:</strong> si EE.UU. da apoyo aéreo a Arabia Saudita contra los hutíes, lo que lo arrastraría a Yemen.</li><li><strong>Pacto de La Meca:</strong> el papel de Arabia Saudita, Turquía y Pakistán como bloque mediador.</li></ul>" }
  ],
  alt: [
    { lvl: "doc", h: "Israel y el financiamiento de Hamás", x: "Durante años los gobiernos de Netanyahu permitieron el ingreso de fondos cataríes a Gaza controlada por Hamás, una política descripta por la prensa israelí como estrategia para mantener dividida a la dirigencia palestina frente a la Autoridad Palestina." },
    { lvl: "ind", h: "El umbral nuclear como argumento de guerra", x: "Las afirmaciones sobre la inminencia de un arma iraní (\"a dos semanas\") contrastan con evaluaciones previas de inteligencia que no veían una decisión de fabricar la bomba. El debate sobre si la guerra fue preventiva o de cambio de régimen sigue abierto." },
    { lvl: "hip", h: "Espacio para tus lecturas", x: "Esta sección queda reservada para los puntos que quieras incorporar con su nivel de evidencia y fuentes." }
  ],
  sources: [
    { t: "GlobalSecurity — Iran War 2026, Day 242 update", u: "https://www.globalsecurity.org/military/ops/iran-war-oprep.htm" },
    { t: "Wikipedia — 2026 Iran war ceasefire", u: "https://en.wikipedia.org/wiki/2026_Iran_war_ceasefire" },
    { t: "Washington Institute — The latest cycle of Saudi–Houthi escalation (14-oct-2026)", u: "https://www.washingtoninstitute.org/pdf/view/19980/en" },
    { t: "Al Jazeera — Hormuz attacks intensify (11-oct-2026)", u: "https://www.aljazeera.com/news/2026/10/11/hormuz-attacks-intensify-as-efforts-to-end-war-on-iran-stall" },
    { t: "The War Zone — Last-ditch meeting in Iran (26-oct-2026)", u: "https://www.twz.com/news-features/last-ditch-meeting-in-iran-seeks-to-stave-off-a-restart-of-all-out-fighting-in-the-region" }
  ]
},

/* ============================================================= */
{
  id: "rusia-ucrania",
  name: "Rusia – Ucrania",
  fullName: "Guerra ruso-ucraniana",
  sub: "Invasión a gran escala desde 2022 · conflicto desde 2014 · Europa, EE.UU. y Corea del Norte involucrados",
  region: "Europa del Este",
  status: "Guerra abierta · negociación en curso",
  level: 4,
  since: "2014-02-27",
  center: [34, 48.8],
  sides: {
    A: { name: "Rusia", desc: "Con apoyo militar de Bielorrusia, Corea del Norte (tropas y munición) e Irán (drones)." },
    B: { name: "Ucrania", desc: "Con apoyo militar, financiero y de inteligencia de la UE, el Reino Unido, Noruega, Canadá y, de forma variable según la administración, EE.UU." }
  },
  keyFacts: [
    { k: "Duración de la invasión", v: "4 años y 8 meses", n: "desde el 24-feb-2022" },
    { k: "Línea de frente", v: "≈ 1.200 km", n: "según el mando ucraniano" },
    { k: "Avance ruso en 2026", v: "–50%", n: "ritmo del 1er semestre vs. 2025 (Syrskyi)" },
    { k: "Próxima negociación", v: "≈ 10 nov", n: "trilateral, Abu Dabi o Suiza" }
  ],
  summary: "<p>La invasión rusa de febrero de 2022 es la continuación, a escala total, de un conflicto que empezó en 2014 con la anexión de Crimea y la guerra en el Donbás. Después de la fase de maniobras de 2022 (retirada rusa de Kiev, contraofensivas ucranianas en Járkov y Jersón), la guerra se volvió de desgaste: drones, artillería y una \"zona de muerte\" de hasta 20 km de profundidad que vuelve casi imposible el avance mecanizado.</p><p>En 2026 el frente está prácticamente congelado. Según el análisis de AFP sobre datos del ISW, en junio Rusia ganó apenas 30 km² netos, y el fallido asalto de fines de julio sobre Dobropillia mostró los límites de su capacidad ofensiva. Ucrania, en cambio, amplió sus ataques de largo alcance sobre refinerías y logística en Rusia y en Crimea.</p><p>En el plano diplomático, las rondas trilaterales con EE.UU. se estancaron en febrero. Tras la reunión de Witkoff con Putin en San Petersburgo (21-oct), el Kremlin aceptó retomar las conversaciones después del 10 de noviembre. Rusia sigue exigiendo todo el Donbás, incluido el territorio que no ocupa; Zelenski acepta congelar la línea actual sin reconocer la anexión.</p>",
  fronts: [
    { n: "Donetsk (Pokrovsk – Dobropillia – Kostiantynivka)", s: "Desgaste", l: 4, t: "Eje principal del esfuerzo ruso." },
    { n: "Járkov (Kupiansk – Borova – Vovchansk)", s: "Activo", l: 4, t: "Avances ucranianos locales en Kupiansk y Borova (ISW, ago-2026)." },
    { n: "Zaporiyia – Dnipropetrovsk", s: "Activo", l: 3, t: "Rusia busca ampliar la ofensiva; Ucrania recuperó terreno." },
    { n: "Jersón / Dniéper", s: "Tregua local", l: 2, t: "Alto el fuego humanitario en Oleshky desde el 27-oct (previsto hasta el domingo); la evacuación se postergó por el desminado de la ruta." },
    { n: "Retaguardia profunda", s: "Ataques de largo alcance", l: 4, t: "Drones y misiles sobre energía, refinerías y logística en ambos países." }
  ],
  nonState: [
    { name: "Tropas norcoreanas", side: "A2", where: "Kursk y frente" },
    { name: "Grupo Wagner / Africa Corps", side: "A2", where: "Hasta 2023 en Ucrania" },
    { name: "Voluntarios extranjeros (Legión Internacional)", side: "B2", where: "Ucrania" }
  ],
  map: { bbox: [[13, 43], [48, 58]], start: "2014-02-01" },
  roles: [
    { c: "Russia", es: "Rusia", r: "A", from: "2014-02-27" },
    { c: "Ukraine", es: "Ucrania", r: "B", from: "2014-02-27" },
    { c: "Belarus", es: "Bielorrusia", r: "A2", from: "2022-02-24", n: "Plataforma de la invasión del norte; armas nucleares tácticas rusas" },
    { c: "North Korea", es: "Corea del Norte", r: "A2", from: "2024-10-15", n: "Tropas en Kursk; tratado de defensa mutua con Rusia (jun-2024)" },
    { c: "Iran", es: "Irán", r: "A2", from: "2022-09-01", n: "Drones Shahed y tecnología" },
    { c: "China", es: "China", r: "M", from: "2022-02-24", n: "Socio económico de Rusia; componentes de doble uso" },
    { c: "India", es: "India", r: "M", from: "2022-02-24", n: "Comprador de crudo ruso" },
    { c: "Turkey", es: "Turquía", r: "M", from: "2022-02-24", n: "Mediador (Estambul 2022 y 2025); controla el Bósforo; vende drones a Ucrania" },
    { c: "Hungary", es: "Hungría", r: "M", from: "2022-02-24", n: "Miembro de la UE y la OTAN que bloquea o diluye la ayuda a Ucrania" },
    { c: "Slovakia", es: "Eslovaquia", r: "M", from: "2023-10-25", n: "Gobierno de Fico, ambivalente" },
    { c: "United States of America", es: "Estados Unidos", r: "B2", from: "2022-02-24", n: "Principal proveedor de armas hasta 2025; desde entonces apoyo condicionado y mediación" },
    { c: "United Kingdom", es: "Reino Unido", r: "B2", from: "2022-02-24" },
    { c: "Poland", es: "Polonia", r: "B2", from: "2022-02-24", n: "Principal corredor logístico" },
    { c: "Germany", es: "Alemania", r: "B2", from: "2022-02-24" },
    { c: "France", es: "Francia", r: "B2", from: "2022-02-24" },
    { c: "Italy", es: "Italia", r: "B2", from: "2022-02-24" },
    { c: "Spain", es: "España", r: "B2", from: "2022-02-24" },
    { c: "Netherlands", es: "Países Bajos", r: "B2", from: "2022-02-24" },
    { c: "Belgium", es: "Bélgica", r: "B2", from: "2022-02-24" },
    { c: "Denmark", es: "Dinamarca", r: "B2", from: "2022-02-24" },
    { c: "Sweden", es: "Suecia", r: "B2", from: "2022-02-24" },
    { c: "Finland", es: "Finlandia", r: "B2", from: "2022-02-24" },
    { c: "Norway", es: "Noruega", r: "B2", from: "2022-02-24" },
    { c: "Estonia", es: "Estonia", r: "B2", from: "2022-02-24" },
    { c: "Latvia", es: "Letonia", r: "B2", from: "2022-02-24" },
    { c: "Lithuania", es: "Lituania", r: "B2", from: "2022-02-24" },
    { c: "Czechia", es: "Chequia", r: "B2", from: "2022-02-24" },
    { c: "Romania", es: "Rumania", r: "B2", from: "2022-02-24" },
    { c: "Bulgaria", es: "Bulgaria", r: "B2", from: "2022-02-24" },
    { c: "Austria", es: "Austria", r: "M", from: "2022-02-24", n: "Neutral; ayuda no letal" },
    { c: "Moldova", es: "Moldavia", r: "M", from: "2022-02-24", n: "Transnistria con tropas rusas" },
    { c: "Georgia", es: "Georgia", r: "M", from: "2022-02-24" },
    { c: "Greece", es: "Grecia", r: "B2", from: "2022-02-24" },
    { c: "Croatia", es: "Croacia", r: "B2", from: "2022-02-24" },
    { c: "Slovenia", es: "Eslovenia", r: "B2", from: "2022-02-24" },
    { c: "Portugal", es: "Portugal", r: "B2", from: "2022-02-24" },
    { c: "Ireland", es: "Irlanda", r: "B2", from: "2022-02-24", n: "Neutral; apoyo no letal" },
    { c: "Canada", es: "Canadá", r: "B2", from: "2022-02-24" },
    { c: "Serbia", es: "Serbia", r: "M", from: "2022-02-24" },
    { c: "Kazakhstan", es: "Kazajistán", r: "M", from: "2022-02-24" }
  ],
  events: [
    { d: "2014-02-22", lat: 50.45, lon: 30.52, t: "politico", h: "Cae Yanukóvich tras el Euromaidán", x: "El presidente huye a Rusia después de las protestas y la matanza de manifestantes en Kiev." },
    { d: "2014-02-27", lat: 44.95, lon: 34.10, t: "terrestre", h: "Fuerzas rusas sin insignias toman Crimea", x: "El 18 de marzo Moscú formaliza la anexión." },
    { d: "2014-04-12", lat: 48.85, lon: 37.6, t: "terrestre", h: "Comienza la guerra del Donbás", x: "Separatistas apoyados por Rusia toman Sloviansk y edificios en Donetsk y Lugansk." },
    { d: "2014-07-17", lat: 48.13, lon: 38.65, t: "aereo", h: "Derribo del MH17", x: "298 muertos; investigación internacional atribuye el misil a una unidad rusa." },
    { d: "2015-02-12", lat: 53.9, lon: 27.56, t: "diplomacia", h: "Acuerdos de Minsk II", x: "Alto el fuego nunca cumplido del todo." },
    { d: "2022-02-24", lat: 50.45, lon: 30.52, t: "terrestre", h: "Invasión rusa a gran escala", x: "Ataques desde Bielorrusia, Rusia y Crimea; objetivo inicial: Kiev." },
    { d: "2022-03-29", lat: 41.01, lon: 28.98, t: "diplomacia", h: "Negociaciones de Estambul", x: "Borrador de neutralidad ucraniana; Rusia anuncia la retirada del norte." },
    { d: "2022-04-01", lat: 50.54, lon: 30.21, t: "atentado", h: "Masacre de Bucha", x: "Tras la retirada rusa aparecen cientos de civiles asesinados." },
    { d: "2022-05-20", lat: 47.1, lon: 37.55, t: "terrestre", h: "Cae Mariúpol", x: "Rendición de los defensores de Azovstal." },
    { d: "2022-09-06", lat: 49.6, lon: 37.3, t: "terrestre", h: "Contraofensiva ucraniana en Járkov", x: "Colapso del frente ruso al este de Járkov." },
    { d: "2022-09-26", lat: 55.3, lon: 15.6, t: "atentado", h: "Sabotaje de los gasoductos Nord Stream", x: "Explosiones cerca de Bornholm dañan tres de los cuatro ductos." },
    { d: "2022-09-30", lat: 55.75, lon: 37.62, t: "politico", h: "Rusia anexa cuatro regiones", x: "Donetsk, Lugansk, Zaporiyia y Jersón, sin controlarlas por completo." },
    { d: "2022-11-11", lat: 46.64, lon: 32.61, t: "terrestre", h: "Ucrania recupera Jersón", x: "Rusia se repliega a la margen izquierda del Dniéper." },
    { d: "2023-05-20", lat: 48.6, lon: 38.0, t: "terrestre", h: "Cae Bajmut", x: "Tras meses de combate urbano liderado por Wagner." },
    { d: "2023-06-06", lat: 46.78, lon: 33.37, t: "atentado", h: "Destrucción de la represa de Kajovka", x: "Inundaciones masivas en el bajo Dniéper." },
    { d: "2023-06-24", lat: 47.24, lon: 39.71, t: "politico", h: "Motín de Wagner", x: "Prigozhin toma Rostov y marcha hacia Moscú; muere dos meses después." },
    { d: "2024-02-17", lat: 48.14, lon: 37.74, t: "terrestre", h: "Cae Avdiivka", x: "" },
    { d: "2024-08-06", lat: 51.19, lon: 35.27, t: "terrestre", h: "Incursión ucraniana en Kursk", x: "Primera ocupación de territorio ruso; Corea del Norte envía tropas para recuperarlo." },
    { d: "2025-05-16", lat: 41.03, lon: 29.0, t: "diplomacia", h: "Primeras conversaciones directas desde 2022", x: "Estambul; acuerdo de canje de prisioneros." },
    { d: "2025-06-01", lat: 55.75, lon: 37.62, t: "aereo", h: "Operación \"Telaraña\"", x: "Drones ucranianos ocultos en camiones atacan bombarderos estratégicos en bases rusas lejanas.", nomap: true },
    { d: "2026-02-04", lat: 24.45, lon: 54.38, t: "diplomacia", h: "Ronda trilateral en Abu Dabi", x: "Ucrania, Rusia y EE.UU.; sin avances significativos.", nomap: true },
    { d: "2026-06-30", lat: 53.55, lon: 9.99, t: "politico", h: "Alemania acusa formalmente a Serhii Kuznetsov por Nord Stream", x: "Fiscalía Federal, ante el Tribunal Regional Superior de Hamburgo." },
    { d: "2026-07-28", lat: 48.47, lon: 37.08, t: "terrestre", h: "Fracasa el asalto ruso sobre Dobropillia", x: "Rusia ensaya nuevos blindajes para recuperar la maniobra mecanizada.", p: "m" },
    { d: "2026-08-11", lat: 47.84, lon: 35.14, t: "aereo", h: "Ataque ruso sobre Zaporiyia y Kiev", x: "Misiles, bombas guiadas y drones; impacto en Zaporizhstal." },
    { d: "2026-08-19", lat: 44.87, lon: 13.85, t: "politico", h: "Croacia detiene a Volodímir Z. (Nord Stream)", x: "Buzo ucraniano que Polonia se había negado a extraditar a Alemania." },
    { d: "2026-10-21", lat: 59.94, lon: 30.31, t: "diplomacia", h: "Witkoff con Putin en San Petersburgo", x: "Rusia acepta \"en principio\" retomar la negociación después del 10-nov." },
    { d: "2026-10-27", lat: 46.62, lon: 32.72, t: "diplomacia", h: "Alto el fuego humanitario en Oleshky", x: "Primera tregua local; corredores para ayuda y evacuación." },
    { d: "2026-10-27", lat: 50.45, lon: 30.52, t: "aereo", h: "Ataque con misiles balísticos sobre Kiev mientras rige la tregua local", x: "Dos oleadas alcanzaron el puente del Sur sobre el Dniéper, estaciones de metro y una residencia universitaria. La evacuación de Oleshky se postergó porque hay que desminar la ruta de acceso.", u: "https://kyivindependent.com/local-ceasefire-in-besieged-oleshky-begins-ukrainian-russian-officials-say/", st: "The Kyiv Independent" },
    { d: "2026-10-27", lat: 0, lon: 0, nomap: true, t: "diplomacia", h: "Stubb y Støre hablan con Putin", x: "Los líderes de Finlandia y Noruega pidieron bajar los ataques contra la red energética ucraniana y repasaron la preparación de la ronda trilateral de noviembre; después le informaron a Zelensky.", u: "https://www.forbes.com/sites/katyasoldak/2026/10/28/tuesday-october-28-russias-war-on-ukraine-news-and-information-from-ukraine/", st: "Forbes" },
    { d: "2026-10-28", lat: 50.45, lon: 30.52, t: "politico", h: "Zelensky: tres días sin atacar refinerías, sin respuesta rusa", x: "El presidente contó que Ucrania suspendió los golpes a refinerías durante las primeras 72 horas de la tregua energética anunciada por Trump, mientras Rusia siguió atacando su red, y que ya retomó las represalias.", u: "https://kyivindependent.com/ukraine-paused-attacks-on-oil-refineries-for-3-days-as-russia-continued-strikes-on-energy-infrastructure-zelensky-says/", st: "Kyiv Independent" }
  ],
  timeline: [
    { d: "882–1240", era: "Raíces", h: "Rus de Kiev", x: "Estado medieval que tanto Rusia como Ucrania reclaman como origen." },
    { d: "1654", era: "Raíces", h: "Pereyáslav", x: "Los cosacos del Dniéper se someten al zar; inicio de la incorporación de Ucrania al imperio ruso." },
    { d: "1783", era: "Raíces", h: "Anexión de Crimea por Catalina II", x: "Fundación de Sebastopol como base de la flota del mar Negro." },
    { d: "1853–1856", era: "Raíces", h: "Guerra de Crimea", x: "Gran Bretaña, Francia, Cerdeña y el Imperio otomano contra Rusia. Cae Sebastopol; el Tratado de París prohíbe a Rusia tener flota en el mar Negro." },
    { d: "1917–1921", era: "Siglo XX", h: "Independencia efímera y guerra civil", x: "Ucrania termina como república soviética." },
    { d: "1932–1933", era: "Siglo XX", h: "Holodomor", x: "Hambruna provocada por la colectivización; millones de muertos." },
    { d: "1944", era: "Siglo XX", h: "Deportación de los tártaros de Crimea", x: "Stalin deporta a unos 190.000 a Asia Central; miles mueren en el traslado y los primeros años." },
    { d: "1954", era: "Siglo XX", h: "Crimea pasa a la RSS de Ucrania", x: "Decisión administrativa de Jruschov." },
    { d: "1991", era: "Independencia", h: "Independencia de Ucrania", x: "Más del 90% vota por la independencia, incluida una mayoría en Crimea (54%)." },
    { d: "1994", era: "Independencia", h: "Memorándum de Budapest", x: "Ucrania entrega su arsenal nuclear a cambio de garantías de integridad territorial." },
    { d: "2004", era: "Independencia", h: "Revolución Naranja", x: "" },
    { d: "2008", era: "Independencia", h: "Cumbre de la OTAN en Bucarest", x: "Promete que Ucrania y Georgia \"serán miembros\"; meses después, guerra de Rusia en Georgia." },
    { d: "2013–2014", era: "Guerra del Donbás", h: "Euromaidán", x: "Yanukóvich suspende el acuerdo con la UE; protestas y caída del gobierno." },
    { d: "2014", era: "Guerra del Donbás", h: "Anexión de Crimea y guerra en el Donbás", x: "" },
    { d: "2014-05-02", era: "Guerra del Donbás", h: "Incendio en Odesa", x: "48 muertos, en su mayoría manifestantes prorrusos." },
    { d: "2014-07-17", era: "Guerra del Donbás", h: "Derribo del MH17", x: "298 muertos; la investigación internacional atribuye el misil a una brigada rusa." },
    { d: "2015", era: "Guerra del Donbás", h: "Minsk II", x: "" },
    { d: "2019", era: "Guerra del Donbás", h: "Zelenski gana con promesa de paz", x: "73% en segunda vuelta." },
    { d: "2021", era: "Guerra del Donbás", h: "Concentración militar rusa y ultimátum a la OTAN", x: "Moscú exige garantías escritas de no ampliación." },
    { d: "2022-02-24", era: "Invasión", h: "Invasión a gran escala", x: "" },
    { d: "2022", era: "Invasión", h: "Retirada de Kiev, contraofensivas de Járkov y Jersón", x: "" },
    { d: "2023", era: "Invasión", h: "Bajmut, contraofensiva ucraniana fallida, motín de Wagner", x: "" },
    { d: "2023–2024", era: "Invasión", h: "Finlandia y Suecia entran a la OTAN", x: "La frontera de la Alianza con Rusia se duplica." },
    { d: "2024", era: "Invasión", h: "Avdiivka, incursión en Kursk, tropas norcoreanas", x: "" },
    { d: "2025", era: "Invasión", h: "Giro de EE.UU. y vuelta a la negociación", x: "Choque en el Despacho Oval, Estambul, cumbre de Alaska." },
    { d: "2026", era: "Invasión", h: "Frente congelado y diplomacia intermitente", x: "Abu Dabi (feb), tregua de Oleshky (oct)." }
  ],
  history: [
    { h: "Dos relatos sobre un mismo origen", b: "<p>Rusia y Ucrania reclaman la herencia de la Rus de Kiev. Para el nacionalismo ruso, y para Putin en su ensayo de 2021, ucranianos y rusos son \"un solo pueblo\"; para el ucraniano, la historia común es la de un imperio que absorbió a una nación distinta. Esa disputa identitaria no explica por sí sola la guerra, pero define lo que cada lado considera innegociable.</p>" },
    { h: "1991–2013: independencia y equilibrio", b: "<p>Ucrania se independizó en 1991 con un país dividido en preferencias: un oeste orientado a Europa y un este y sur más ligados a Rusia, por idioma, economía y flota del mar Negro en Sebastopol. Durante dos décadas los gobiernos alternaron entre ambos polos. La ampliación de la OTAN hacia el este y la promesa de Bucarest de 2008 fueron leídas en Moscú como una línea roja; en Kiev y en Europa central, como la única garantía frente a Rusia.</p>" },
    { h: "2014: Crimea y el Donbás", b: "<p>Cuando Yanukóvich rechazó el acuerdo de asociación con la UE y cayó tras el Euromaidán, Rusia tomó Crimea y apoyó con armas, mandos y finalmente tropas regulares a los separatistas de Donetsk y Lugansk. Los acuerdos de Minsk congelaron el conflicto sin resolverlo: unas 14.000 personas murieron entre 2014 y 2021.</p>" },
    { h: "2022: la apuesta por la guerra total", b: "<p>La invasión de 2022 buscaba un cambio de gobierno rápido en Kiev. Fracasó en semanas. Las negociaciones de Estambul llegaron a un borrador de neutralidad, pero se cortaron tras la masacre de Bucha y con el aumento del apoyo occidental. La guerra pasó a ser de desgaste, con anexiones formales de territorios que Rusia no controla del todo.</p>" },
    { h: "La dimensión europea y energética", b: "<p>Europa cortó su dependencia del gas ruso en pocos años. El sabotaje de los Nord Stream en septiembre de 2022 cerró definitivamente esa vía. La investigación de la Fiscalía Federal alemana atribuye la operación a un equipo de buzos ucranianos que zarpó de Rostock en el velero <em>Andromeda</em>; acusó formalmente a Serhii Kuznetsov (Hamburgo, junio de 2026) y obtuvo en agosto de 2026 la detención en Croacia de Volodímir Z., a quien Polonia se había negado a extraditar. Kiev niega participación estatal.</p>" },
    { h: "2026: congelamiento y negociación", b: "<p>El frente casi no se mueve, la economía rusa está en modo de guerra y Ucrania depende de Europa más que de EE.UU. Washington presiona a Kiev para cerrar un acuerdo y hubo fricciones por limitaciones en Starlink. La negociación de noviembre girará alrededor de tres puntos: el Donbás, las garantías de seguridad para Ucrania y el \"marco de seguridad\" que reclama Moscú.</p>" }
  ],
  alt: [
    { lvl: "ind", h: "Nord Stream: la pista ucraniana y la dimensión polaca", x: "La investigación alemana identifica a un comando ucraniano; los sospechosos vivían o transitaron por Polonia, el velero se desvió hacia aguas polacas según el Wall Street Journal, uno fue trasladado a Kiev en un auto de un agregado militar ucraniano y Varsovia rechazó extraditar a otro. Polonia niega haber participado. La autoría estatal (ucraniana o polaca) no está probada judicialmente." },
    { lvl: "hip", h: "Nord Stream: la tesis de Seymour Hersh", x: "En 2023 el periodista atribuyó el sabotaje a una operación de la Marina de EE.UU. con apoyo noruego. Ninguna investigación oficial la corroboró y la línea alemana apunta en otra dirección." },
    { lvl: "ind", h: "Estambul 2022 y el papel occidental", x: "Participantes ucranianos y la prensa ucraniana reportaron que socios occidentales desalentaron firmar el borrador de Estambul. Otros protagonistas atribuyen el corte a Bucha y a la desconfianza en las garantías rusas." },
    { lvl: "doc", h: "El debate realista sobre la ampliación de la OTAN", x: "Autores como John Mearsheimer sostienen desde 2014 que la expansión de la OTAN fue la causa principal del conflicto; la posición contraria lo explica por el revisionismo imperial ruso. Ambas lecturas son parte del debate académico." }
  ],
  sources: [
    { t: "Reuters vía ThePrint — Ceasefire in Oleshky, talks next month", u: "https://theprint.in/world/russia-ukraine-agree-on-ceasefire-in-embattled-town-to-hold-peace-talks-next-month/3080212/" },
    { t: "ISW — Russian Offensive Campaign Assessment, 21-oct-2026", u: "https://www.criticalthreats.org/analysis/russian-offensive-campaign-assessment-october-21-2026" },
    { t: "GlobalSecurity — Russo-Ukraine War, August 2026", u: "https://www.globalsecurity.org/military/world/war/russo-ukraine-2026-08.htm" },
    { t: "Militarnyi — Nord Stream: suspect detained in Croatia", u: "https://militarnyi.com/en/news/nord-stream-sabotage-ukrainian-national-detained-in-croatia-after-poland-refused-to-extradite-him-to-germany/" },
    { t: "LIGA — Second Nord Stream suspect detained", u: "https://biz.liga.net/en/energy/news/a-second-ukrainian-suspected-of-blowing-up-the-nord-stream-pipelines-has-been-detained-in-croatia" }
  ]
},

/* ============================================================= */
{
  id: "corea",
  name: "Península de Corea",
  fullName: "Conflicto de la península de Corea",
  sub: "Guerra técnicamente no terminada desde 1953 · programa nuclear norcoreano · alianza con Rusia",
  region: "Asia oriental",
  status: "Latente · tensión militar elevada",
  level: 3,
  since: "1950-06-25",
  center: [127.5, 38.3],
  sides: {
    A: { name: "Corea del Norte", desc: "Potencia nuclear de facto; alianza militar con Rusia desde 2024 y tratado con China desde 1961." },
    B: { name: "Corea del Sur", desc: "Alianza con EE.UU. (28.500 soldados en el país) y cooperación trilateral con Japón." }
  },
  keyFacts: [
    { k: "Armisticio", v: "1953", n: "sin tratado de paz" },
    { k: "Ensayos nucleares", v: "6", n: "2006–2017" },
    { k: "Oficiales surcoreanos heridos en la DMZ", v: "3", n: "por una mina, 21-sep-2026" },
    { k: "Presidente surcoreano", v: "Lee Jae-myung", n: "desde jun-2025" }
  ],
  summary: "<p>Las dos Coreas siguen técnicamente en guerra: el conflicto de 1950–53 terminó con un armisticio, no con un tratado. Desde 2024 Pyongyang abandonó oficialmente el objetivo de la reunificación y define al Sur como \"el Estado más hostil\". Su alianza con Rusia, que incluye el envío de tropas al frente de Kursk, le dio experiencia de combate, divisas y probablemente tecnología militar.</p><p>El gobierno de Lee Jae-myung intentó reabrir el diálogo, pero Corea del Norte respondió con lanzamientos de misiles y burlas públicas. El 21 de septiembre de 2026, una mina en la zona desmilitarizada hirió a tres oficiales surcoreanos y el 12 de octubre el Norte disparó varios misiles balísticos desde el área de Pyongyang. No hay combates, pero la probabilidad de un incidente que escale es la más alta en años.</p>",
  fronts: [
    { n: "Zona desmilitarizada (DMZ)", s: "Incidentes", l: 3, t: "Minas, fortificación norcoreana de la frontera." },
    { n: "Línea Límite Norte (mar Amarillo)", s: "Disputada", l: 2, t: "Escenario de los choques de 2010." },
    { n: "Programa de misiles", s: "Pruebas frecuentes", l: 3, t: "Balísticos de corto alcance, crucero e hipersónicos." }
  ],
  nonState: [],
  map: { bbox: [[118, 30], [146, 45]], start: "2010-01-01" },
  roles: [
    { c: "North Korea", es: "Corea del Norte", r: "A", from: "2010-01-01" },
    { c: "South Korea", es: "Corea del Sur", r: "B", from: "2010-01-01" },
    { c: "Japan", es: "Japón", r: "B2", from: "2010-01-01" },
    { c: "United States of America", es: "Estados Unidos", r: "B2", from: "2010-01-01" },
    { c: "China", es: "China", r: "A2", from: "2010-01-01", n: "Tratado de 1961; principal socio comercial; frena sanciones" },
    { c: "Russia", es: "Rusia", r: "M", from: "2010-01-01", to: "2024-06-18" },
    { c: "Russia", es: "Rusia", r: "A2", from: "2024-06-19", n: "Tratado de asociación estratégica integral" },
    { c: "Mongolia", es: "Mongolia", r: "M", from: "2010-01-01" }
  ],
  events: [
    { d: "2010-03-26", lat: 37.93, lon: 124.6, t: "naval", h: "Hundimiento de la corbeta Cheonan", x: "46 marinos muertos; una investigación internacional lo atribuye a un torpedo norcoreano." },
    { d: "2010-11-23", lat: 37.67, lon: 125.7, t: "aereo", h: "Bombardeo de Yeonpyeong", x: "Artillería norcoreana sobre la isla; muertos militares y civiles." },
    { d: "2013-02-12", lat: 41.28, lon: 129.08, t: "aereo", h: "Tercer ensayo nuclear", x: "Punggye-ri." },
    { d: "2017-09-03", lat: 41.30, lon: 129.07, t: "aereo", h: "Sexto ensayo nuclear", x: "Pyongyang afirma haber probado una bomba de hidrógeno." },
    { d: "2017-11-29", lat: 39.0, lon: 125.75, t: "aereo", h: "Misil intercontinental Hwasong-15", x: "Kim declara \"completada\" la fuerza nuclear." },
    { d: "2018-04-27", lat: 37.96, lon: 126.68, t: "diplomacia", h: "Cumbre de Panmunjom", x: "Kim Jong-un y Moon Jae-in." },
    { d: "2018-06-12", lat: 1.29, lon: 103.85, t: "diplomacia", h: "Cumbre Trump–Kim en Singapur", x: "", nomap: true },
    { d: "2019-02-28", lat: 21.03, lon: 105.85, t: "diplomacia", h: "Cumbre de Hanói sin acuerdo", x: "", nomap: true },
    { d: "2020-06-16", lat: 37.95, lon: 126.67, t: "politico", h: "Pyongyang vuela la oficina de enlace en Kaesong", x: "" },
    { d: "2024-01-15", lat: 39.02, lon: 125.75, t: "politico", h: "Kim abandona la reunificación", x: "El Sur pasa a ser \"Estado hostil\" en la doctrina oficial." },
    { d: "2024-06-19", lat: 39.03, lon: 125.76, t: "diplomacia", h: "Tratado Rusia–Corea del Norte", x: "Putin en Pyongyang; cláusula de defensa mutua." },
    { d: "2024-10-15", lat: 51.7, lon: 36.2, t: "terrestre", h: "Tropas norcoreanas a Rusia", x: "Despliegue en la región de Kursk.", nomap: true },
    { d: "2024-12-03", lat: 37.57, lon: 126.98, t: "politico", h: "Ley marcial de Yoon en Seúl", x: "Revocada en horas; Yoon es destituido." },
    { d: "2026-03-14", lat: 39.1, lon: 125.6, t: "aereo", h: "Unos 10 misiles balísticos durante Freedom Shield", x: "Respuesta a las maniobras conjuntas EE.UU.–Corea del Sur." },
    { d: "2026-04-08", lat: 39.15, lon: 127.44, t: "aereo", h: "Misiles desde Wonsan", x: "Segundo lanzamiento en dos días, tras las disculpas de Lee por incursiones de drones." },
    { d: "2026-09-21", lat: 38.25, lon: 127.2, t: "atentado", h: "Mina en la DMZ hiere a tres oficiales surcoreanos", x: "En el sector controlado por Seúl; semanas de fricción posterior." },
    { d: "2026-10-12", lat: 39.05, lon: 125.7, t: "aereo", h: "Varios misiles balísticos hacia el mar del Este", x: "Lanzados desde el área de Pyongyang." }
  ],
  timeline: [
    { d: "1910–1945", era: "Orígenes", h: "Colonia japonesa", x: "" },
    { d: "1945", era: "Orígenes", h: "División en el paralelo 38", x: "Ocupación soviética al norte y estadounidense al sur." },
    { d: "1948", era: "Orígenes", h: "Dos Estados", x: "Kim Il-sung en el Norte, Syngman Rhee en el Sur." },
    { d: "1950–1953", era: "Guerra de Corea", h: "Guerra de Corea", x: "Intervienen la ONU, liderada por EE.UU., y China; millones de muertos." },
    { d: "1953", era: "Guerra de Corea", h: "Armisticio de Panmunjom", x: "Crea la DMZ; no hay tratado de paz." },
    { d: "1968", era: "Guerra Fría", h: "Comando contra la Casa Azul y captura del USS Pueblo", x: "" },
    { d: "1983", era: "Guerra Fría", h: "Atentado de Rangún", x: "Contra el presidente surcoreano; mueren 4 ministros." },
    { d: "1994", era: "Nuclear", h: "Marco Acordado", x: "Congelamiento del programa a cambio de reactores y combustible." },
    { d: "2000", era: "Nuclear", h: "Primera cumbre intercoreana", x: "\"Política del Sol\"." },
    { d: "2006", era: "Nuclear", h: "Primer ensayo nuclear", x: "" },
    { d: "2010", era: "Nuclear", h: "Cheonan y Yeonpyeong", x: "" },
    { d: "2017", era: "Nuclear", h: "Sexto ensayo y misiles intercontinentales", x: "" },
    { d: "2018–2019", era: "Diplomacia", h: "Cumbres con Moon y con Trump", x: "Sin desnuclearización." },
    { d: "2024", era: "Nuevo eje", h: "Fin de la reunificación y alianza con Rusia", x: "" },
    { d: "2026", era: "Nuevo eje", h: "Incidentes en la DMZ y lanzamientos", x: "" }
  ],
  history: [
    { h: "Una guerra que nunca terminó", b: "<p>Corea fue colonia japonesa hasta 1945 y quedó dividida entre las zonas de ocupación soviética y estadounidense. En 1950 el Norte invadió al Sur con aval de Stalin; la intervención de la ONU y luego la de China convirtieron la península en el primer gran choque armado de la Guerra Fría. El armisticio de 1953 fijó la DMZ, pero no hubo paz.</p>" },
    { h: "La bomba como seguro de vida", b: "<p>Para la dinastía Kim, el arma nuclear es la garantía de supervivencia del régimen. El ejemplo de Libia, que renunció a su programa en 2003 y cuyo líder cayó en 2011 con apoyo occidental, es una referencia explícita en la propaganda norcoreana. Los intentos de negociación (1994, conversaciones a seis bandas, cumbres de 2018–19) fracasaron en el mismo punto: el Norte pide garantías y levantamiento de sanciones antes de desarmarse; EE.UU. pide lo inverso.</p>" },
    { h: "El giro de 2024", b: "<p>Kim Jong-un abandonó la idea de reunificación y reescribió la doctrina: el Sur es un Estado extranjero y enemigo. A la vez, se volvió un proveedor militar clave para Rusia (munición, misiles y tropas). El tratado de 2024 con Moscú rompe el aislamiento y debilita el régimen de sanciones de la ONU.</p>" },
    { h: "Qué mirar", b: "<ul><li>Si se produce un séptimo ensayo nuclear.</li><li>Qué tecnología rusa recibe Pyongyang a cambio de su apoyo en Ucrania.</li><li>Cómo responde Seúl a nuevos incidentes en la DMZ.</li><li>La posición china, que no quiere ni el colapso del Norte ni una crisis que justifique más presencia estadounidense.</li></ul>" }
  ],
  alt: [
    { lvl: "hip", h: "Espacio para tus lecturas", x: "Sin aportes cargados todavía." }
  ],
  sources: [
    { t: "Malay Mail / AFP — North Korea fires several ballistic missiles (12-oct-2026)", u: "https://www.malaymail.com/amp/news/world/2026/10/11/north-korea-fires-several-ballistic-missiles-as-border-tensions-with-south-escalate/238651" },
    { t: "AP — North Korea fires missiles after ridiculing South's hopes (abr-2026)", u: "https://www.aol.com/articles/north-korea-launches-projectile-off-001235081.html" }
  ]
},

/* ============================================================= */
{
  id: "taiwan",
  name: "China – Taiwán y mares de Asia",
  fullName: "Estrecho de Taiwán y mar de China Meridional",
  sub: "Presión militar china sobre Taiwán · disputas marítimas con Filipinas, Vietnam y Japón",
  region: "Asia oriental y sudeste asiático",
  status: "Latente · coerción en zona gris",
  level: 2,
  since: "1949-12-07",
  center: [119, 20],
  sides: {
    A: { name: "China", desc: "Considera a Taiwán una provincia; reclama casi todo el mar de China Meridional dentro de la \"línea de nueve trazos\"." },
    B: { name: "Taiwán y Estados ribereños", desc: "Taiwán (República de China) y Filipinas, con el respaldo de EE.UU., Japón y Australia." }
  },
  keyFacts: [
    { k: "Venta de armas de EE.UU. (dic-2025)", v: "US$ 11.100 M", n: "la mayor de la historia" },
    { k: "Grandes maniobras chinas desde 2022", v: "6", n: "la última, \"Misión Justicia 2025\"" },
    { k: "Han Kuang 2026", v: "5–14 ago", n: "ejercicio anual de Taiwán" },
    { k: "Fallo arbitral de La Haya", v: "2016", n: "rechazado por China" }
  ],
  summary: "<p>China no renuncia al uso de la fuerza para incorporar a Taiwán y desde 2022 ensaya bloqueos con maniobras cada vez más cercanas a la isla. La última gran ronda, \"Misión Justicia 2025\" (29 y 30 de diciembre), simuló bloqueos y toma de puertos y por primera vez se presentó como disuasión de una intervención externa. Llegó once días después del paquete de armas estadounidense de US$ 11.100 millones y tras la declaración de la primera ministra japonesa Takaichi de que un ataque a Taiwán podría involucrar a Japón.</p><p>En el mar de China Meridional el foco es Filipinas: en 2026 hubo un cara a cara naval en Scarborough (junio), un marino filipino golpeado en Second Thomas (julio) y cañones de agua sobre misiones de abastecimiento. No hay combate, pero sí coerción constante en la llamada \"zona gris\".</p>",
  fronts: [
    { n: "Estrecho de Taiwán", s: "Coerción", l: 3, t: "Incursiones aéreas diarias y maniobras de bloqueo." },
    { n: "Kinmen y Matsu", s: "Presión costera", l: 2, t: "Guardacostas chinos dentro de la zona contigua." },
    { n: "Scarborough / Second Thomas", s: "Choques no letales", l: 3, t: "Cañones de agua, embestidas y bloqueos." },
    { n: "Senkaku / Diaoyu", s: "Patrullas", l: 2, t: "Disputa con Japón." }
  ],
  nonState: [
    { name: "Milicia marítima china", side: "A2", where: "Mar de China Meridional" }
  ],
  map: { bbox: [[104, 2], [134, 34]], start: "2012-01-01" },
  roles: [
    { c: "China", es: "China", r: "A", from: "2012-01-01" },
    { c: "Hong Kong", es: "Hong Kong", r: "A", from: "2012-01-01" },
    { c: "Macao", es: "Macao", r: "A", from: "2012-01-01" },
    { c: "Taiwan", es: "Taiwán", r: "B", from: "2012-01-01" },
    { c: "Philippines", es: "Filipinas", r: "B", from: "2012-04-10", n: "Disputa directa con China" },
    { c: "Japan", es: "Japón", r: "B2", from: "2012-01-01", n: "Disputa por las Senkaku; alianza con EE.UU." },
    { c: "United States of America", es: "Estados Unidos", r: "B2", from: "2012-01-01" },
    { c: "Australia", es: "Australia", r: "B2", from: "2012-01-01" },
    { c: "South Korea", es: "Corea del Sur", r: "M", from: "2012-01-01" },
    { c: "Vietnam", es: "Vietnam", r: "M", from: "2012-01-01", n: "Reclamante (Paracel, Spratly); equilibrio con China" },
    { c: "Malaysia", es: "Malasia", r: "M", from: "2012-01-01", n: "Reclamante" },
    { c: "Brunei", es: "Brunéi", r: "M", from: "2012-01-01", n: "Reclamante" },
    { c: "Indonesia", es: "Indonesia", r: "M", from: "2012-01-01", n: "Choques por pesca en Natuna" },
    { c: "North Korea", es: "Corea del Norte", r: "A2", from: "2012-01-01" }
  ],
  events: [
    { d: "2012-04-10", lat: 15.15, lon: 117.76, t: "naval", h: "China toma control de Scarborough", x: "Tras un enfrentamiento entre guardacostas." },
    { d: "2014-05-02", lat: 15.5, lon: 111.2, t: "naval", h: "Crisis de la plataforma HD-981", x: "Plataforma petrolera china en aguas reclamadas por Vietnam." },
    { d: "2016-07-12", lat: 10.0, lon: 114.0, t: "diplomacia", h: "Fallo arbitral a favor de Filipinas", x: "Tribunal de La Haya: la línea de nueve trazos no tiene base legal. China lo rechaza." },
    { d: "2022-08-04", lat: 23.7, lon: 121.0, t: "naval", h: "Maniobras tras la visita de Pelosi", x: "Misiles sobre la isla y zonas de exclusión." },
    { d: "2023-04-08", lat: 24.5, lon: 119.8, t: "naval", h: "\"Espada Conjunta\"", x: "Tras la reunión de Tsai con McCarthy." },
    { d: "2024-05-23", lat: 25.5, lon: 121.9, t: "naval", h: "\"Espada Conjunta-2024A\"", x: "Tras la asunción de Lai Ching-te." },
    { d: "2024-10-14", lat: 22.2, lon: 121.6, t: "naval", h: "\"Espada Conjunta-2024B\"", x: "" },
    { d: "2025-04-01", lat: 24.0, lon: 119.2, t: "naval", h: "\"Trueno del Estrecho\"", x: "" },
    { d: "2025-12-17", lat: 25.03, lon: 121.56, t: "politico", h: "EE.UU. aprueba venta de armas por US$ 11.100 M", x: "HIMARS y misiles ATACMS." },
    { d: "2025-12-29", lat: 23.7, lon: 120.0, t: "naval", h: "\"Misión Justicia 2025\"", x: "Simulación de bloqueo y toma de puertos; guardacostas chinos a 1,3 millas de Matsu." },
    { d: "2026-06-20", lat: 15.3, lon: 117.4, t: "naval", h: "Cara a cara naval en Scarborough", x: "Fragata filipina frente a cuatro buques de guerra chinos." },
    { d: "2026-07-20", lat: 9.73, lon: 115.86, t: "naval", h: "Choque en Second Thomas", x: "Guardacostas chinos golpean a un marino filipino." },
    { d: "2026-07-24", lat: 15.15, lon: 117.8, t: "naval", h: "Cañones de agua en Scarborough", x: "Tercer incidente de la semana, durante el foro de la ASEAN en Manila." },
    { d: "2026-08-05", lat: 25.03, lon: 121.56, t: "politico", h: "Han Kuang 2026", x: "El mayor ejercicio anual de Taiwán, con reservistas." }
  ],
  timeline: [
    { d: "1895", era: "Orígenes", h: "Taiwán pasa a Japón", x: "Tratado de Shimonoseki." },
    { d: "1943", era: "Orígenes", h: "Declaración de El Cairo", x: "Los aliados anuncian que Taiwán volverá a la República de China; no es un tratado." },
    { d: "1945", era: "Orígenes", h: "Taiwán vuelve a la República de China", x: "" },
    { d: "1947-02-28", era: "Orígenes", h: "Incidente del 28 de febrero", x: "Represión del Kuomintang con miles de muertos." },
    { d: "1949", era: "Orígenes", h: "El gobierno nacionalista se refugia en Taiwán", x: "Mao proclama la República Popular." },
    { d: "1951", era: "Orígenes", h: "Tratado de San Francisco", x: "Japón renuncia a Taiwán sin decir a favor de quién." },
    { d: "1954–1958", era: "Crisis del Estrecho", h: "Primera y segunda crisis del Estrecho", x: "Bombardeos sobre Kinmen y Matsu." },
    { d: "1971", era: "Reconocimiento", h: "Resolución 2758 de la ONU", x: "Pekín ocupa el asiento de China." },
    { d: "1979", era: "Reconocimiento", h: "EE.UU. reconoce a Pekín · Ley de Relaciones con Taiwán", x: "\"Ambigüedad estratégica\"." },
    { d: "1987", era: "Reconocimiento", h: "Fin de la ley marcial", x: "Comienza la democratización." },
    { d: "1995–1996", era: "Reconocimiento", h: "Tercera crisis del Estrecho", x: "EE.UU. envía dos portaaviones." },
    { d: "2005", era: "Reconocimiento", h: "Ley Antisecesión", x: "Autoriza \"medios no pacíficos\"." },
    { d: "2012", era: "Mares", h: "Scarborough bajo control chino", x: "" },
    { d: "2016", era: "Mares", h: "Fallo arbitral de La Haya", x: "" },
    { d: "2020", era: "Mares", h: "Ley de Seguridad Nacional en Hong Kong", x: "Fin práctico de \"un país, dos sistemas\"." },
    { d: "2022", era: "Coerción", h: "Visita de Pelosi y maniobras masivas", x: "" },
    { d: "2024", era: "Coerción", h: "Lai Ching-te asume; dos rondas \"Espada Conjunta\"", x: "" },
    { d: "2025", era: "Coerción", h: "\"Trueno del Estrecho\" y \"Misión Justicia\"", x: "" },
    { d: "2026", era: "Coerción", h: "Choques en Scarborough y Second Thomas", x: "" }
  ],
  history: [
    { h: "Una guerra civil sin cierre", b: "<p>La cuestión de Taiwán es el capítulo pendiente de la guerra civil china. En 1949 el gobierno del Kuomintang se replegó a la isla y siguió reclamando ser el gobierno legítimo de toda China. Pekín, a su vez, considera a Taiwán una provincia rebelde. La democratización de la isla en los años noventa cambió el problema: hoy la mayoría de los taiwaneses se identifica como taiwanesa y no quiere la unificación, pero tampoco declarar una independencia formal que provoque una guerra.</p>" },
    { h: "La ambigüedad estratégica", b: "<p>Desde 1979 EE.UU. reconoce a Pekín pero vende armas a Taiwán y no aclara si lo defendería. Esa ambigüedad buscaba disuadir a ambos lados. Su erosión, con declaraciones presidenciales más explícitas, el crecimiento militar chino y la importancia de Taiwán en los semiconductores, convirtió al Estrecho en el punto más peligroso de la relación entre las dos potencias.</p>" },
    { h: "El mar de China Meridional", b: "<p>China reclama casi todo ese mar, por donde pasa una parte enorme del comercio mundial. Desde 2013 construyó islas artificiales con pistas y bases en las Spratly. El fallo arbitral de 2016 le dio la razón a Filipinas, pero Pekín lo ignora y usa guardacostas y milicias pesqueras para imponer hechos consumados sin disparar.</p>" },
    { h: "Qué mirar", b: "<ul><li>El código de conducta ASEAN–China prometido para fin de año.</li><li>La reacción china a la entrega de HIMARS y ATACMS.</li><li>Si EE.UU., absorbido por Medio Oriente, reduce presencia naval en el Pacífico.</li></ul>" }
  ],
  alt: [ { lvl: "hip", h: "Espacio para tus lecturas", x: "Sin aportes cargados todavía." } ],
  sources: [
    { t: "FAPA — China's drill near Taiwan tests US deterrence (ene-2026)", u: "https://fapa.org/2026-0105-chinas-drill-near-taiwan-tests-u-s-deterrence/" },
    { t: "IntelliNews — Naval head-to-head near Scarborough (jun-2026)", u: "https://www.intellinews.com/china-philippines-in-naval-head-to-head-near-scarborough-shoal-450443/" },
    { t: "Jakarta Post / Reuters — Water cannon at Scarborough (jul-2026)", u: "https://www.thejakartapost.com/world/2026/07/23/china-fires-water-cannon-on-philippine-ship-at-scarborough-shoal-manila-says" }
  ]
},

/* ============================================================= */
{
  id: "mexico",
  name: "México",
  fullName: "Guerra contra los cárteles en México",
  sub: "Estado mexicano y EE.UU. contra el CJNG, las facciones de Sinaloa y otros grupos",
  region: "América del Norte",
  status: "Conflicto armado interno",
  level: 4,
  since: "2006-12-11",
  center: [-102, 22],
  sides: {
    A: { name: "Organizaciones criminales", desc: "CJNG, facciones del Cártel de Sinaloa (Chapitos y Mayos) y grupos regionales. Varias designadas organizaciones terroristas por EE.UU. desde 2025." },
    B: { name: "Estado mexicano", desc: "Ejército, Guardia Nacional y fiscalías, con inteligencia y presión de EE.UU." }
  },
  keyFacts: [
    { k: "Muerte de \"El Mencho\"", v: "22-feb-2026", n: "operativo en Tapalpa con inteligencia de EE.UU." },
    { k: "Estados con bloqueos tras el operativo", v: "16–19", n: "según fuentes oficiales" },
    { k: "Muertos en la ola posterior", v: "> 50", n: "según García Harfuch" },
    { k: "Guerra interna de Sinaloa", v: "desde sep-2024", n: "tras la captura de Zambada" }
  ],
  summary: "<p>Desde que Felipe Calderón envió al Ejército a Michoacán en diciembre de 2006, México vive un conflicto armado de baja intensidad pero altísima letalidad entre el Estado y organizaciones criminales, y entre esas organizaciones. El año 2026 trajo dos cambios: la presión de la administración Trump, que designó a los cárteles como organizaciones terroristas, y la muerte de Nemesio \"El Mencho\" Oseguera, jefe del Cártel Jalisco Nueva Generación, en un operativo militar con inteligencia estadounidense el 22 de febrero.</p><p>La respuesta del CJNG fue inmediata: incendios, bloqueos y enfrentamientos en al menos 16 estados, cierre de escuelas y cancelación de vuelos. Mientras tanto, la guerra interna del Cártel de Sinaloa, abierta tras la entrega de Ismael \"El Mayo\" Zambada a EE.UU. en julio de 2024, sigue golpeando a Culiacán.</p>",
  fronts: [
    { n: "Jalisco – Michoacán – Guanajuato", s: "Reacomodo del CJNG", l: 4, t: "Disputa por la sucesión de \"El Mencho\"." },
    { n: "Sinaloa", s: "Guerra interna", l: 4, t: "Chapitos contra Mayos en Culiacán y la sierra." },
    { n: "Frontera norte", s: "Tráfico y extorsión", l: 3, t: "Rutas de fentanilo y migración." }
  ],
  nonState: [
    { name: "Cártel Jalisco Nueva Generación (CJNG)", side: "A", where: "Occidente y centro" },
    { name: "Cártel de Sinaloa — Chapitos", side: "A", where: "Sinaloa, Sonora" },
    { name: "Cártel de Sinaloa — Mayos", side: "A", where: "Sinaloa" },
    { name: "Cárteles del Golfo / del Noreste", side: "A", where: "Tamaulipas" }
  ],
  map: { bbox: [[-118, 14], [-86, 33]], start: "2006-12-01" },
  roles: [
    { c: "Mexico", es: "México", r: "Z", from: "2006-12-01", n: "Estado en guerra con organizaciones criminales en su territorio" },
    { c: "United States of America", es: "Estados Unidos", r: "B2", from: "2006-12-01", n: "Iniciativa Mérida; desde 2025, designación terrorista e inteligencia operativa" },
    { c: "Guatemala", es: "Guatemala", r: "M", from: "2006-12-01", n: "Corredor de tráfico" },
    { c: "Belize", es: "Belice", r: "M", from: "2006-12-01" }
  ],
  events: [
    { d: "2006-12-11", lat: 19.70, lon: -101.19, t: "terrestre", h: "Calderón lanza el Operativo Michoacán", x: "Inicio de la militarización de la seguridad." },
    { d: "2010-08-24", lat: 24.85, lon: -98.15, t: "atentado", h: "Masacre de San Fernando", x: "72 migrantes asesinados por Los Zetas." },
    { d: "2014-09-26", lat: 18.35, lon: -99.54, t: "atentado", h: "Desaparición de los 43 de Ayotzinapa", x: "Iguala, Guerrero." },
    { d: "2016-01-08", lat: 25.79, lon: -108.99, t: "terrestre", h: "Recaptura de \"El Chapo\" Guzmán", x: "Los Mochis; extraditado en 2017." },
    { d: "2019-10-17", lat: 24.80, lon: -107.39, t: "terrestre", h: "\"Culiacanazo\"", x: "El gobierno libera a Ovidio Guzmán ante el asedio del cártel." },
    { d: "2023-01-05", lat: 24.82, lon: -107.42, t: "terrestre", h: "Captura de Ovidio Guzmán", x: "" },
    { d: "2024-07-25", lat: 31.77, lon: -106.42, t: "politico", h: "\"El Mayo\" Zambada llevado a EE.UU.", x: "Entregado por un hijo de \"El Chapo\"; estalla la guerra interna de Sinaloa." },
    { d: "2024-09-09", lat: 24.79, lon: -107.38, t: "terrestre", h: "Comienza la guerra Chapitos–Mayos", x: "Culiacán paralizada por enfrentamientos." },
    { d: "2025-02-20", lat: 38.9, lon: -77.03, t: "politico", h: "EE.UU. designa terroristas a los cárteles", x: "CJNG, Sinaloa y otros.", nomap: true },
    { d: "2025-02-27", lat: 19.43, lon: -99.13, t: "politico", h: "México envía 29 narcos a EE.UU.", x: "Incluye a Rafael Caro Quintero." },
    { d: "2026-02-22", lat: 19.94, lon: -103.76, t: "terrestre", h: "Muere \"El Mencho\" en Tapalpa", x: "Herido en el enfrentamiento, muere durante el traslado aéreo." },
    { d: "2026-02-22", lat: 20.67, lon: -103.35, t: "atentado", h: "Ola de bloqueos e incendios del CJNG", x: "Guadalajara paralizada; disturbios en al menos 16 estados." },
    { d: "2026-02-23", lat: 19.25, lon: -103.72, t: "atentado", h: "Violencia en Michoacán y Colima", x: "Cierre de escuelas en ocho estados; más de 50 muertos según el gobierno." },
    { d: "2026-10-26", lat: 25.57, lon: -108.47, t: "terrestre", h: "La Marina abate a \"El Chuy\" González, del Cártel de Guasave", x: "Jesús González Peñuelas, señalado como número dos del grupo y con recompensa de la DEA, murió tras una persecución aérea y terrestre de varias horas en el norte de Sinaloa.", u: "https://www.infobae.com/mexico/2026/10/28/en-vivo-seguridad-narcotrafico-y-crimen-en-mexico-hoy-28-de-octubre-abaten-en-sinaloa-a-chuy-gonzalez-segundo-al-mando-del-cartel-de-guasave/", st: "Infobae" }
  ],
  timeline: [
    { d: "1980s", era: "Orígenes", h: "Cártel de Guadalajara", x: "Félix Gallardo y Caro Quintero; asesinato del agente de la DEA Kiki Camarena (1985)." },
    { d: "1990s", era: "Orígenes", h: "México reemplaza a Colombia como ruta", x: "Tras la caída de los cárteles de Medellín y Cali." },
    { d: "2000", era: "Alternancia", h: "Fin de la hegemonía del PRI", x: "Se rompen los pactos informales entre el poder político y los cárteles." },
    { d: "2006", era: "Guerra", h: "Calderón declara la guerra al narco", x: "" },
    { d: "2010s", era: "Guerra", h: "Fragmentación: Zetas, Templarios, CJNG", x: "" },
    { d: "2014", era: "Guerra", h: "Ayotzinapa", x: "" },
    { d: "2018", era: "Abrazos", h: "\"Abrazos, no balazos\" de López Obrador", x: "Creación de la Guardia Nacional." },
    { d: "2024", era: "Abrazos", h: "Captura de Zambada y guerra en Sinaloa", x: "" },
    { d: "2025", era: "Presión de EE.UU.", h: "Designación terrorista y extradiciones masivas", x: "" },
    { d: "2026", era: "Presión de EE.UU.", h: "Muerte de \"El Mencho\"", x: "" }
  ],
  history: [
    { h: "De la ruta al Estado paralelo", b: "<p>México fue durante décadas una ruta del contrabando hacia EE.UU. En los años ochenta y noventa, al caer los cárteles colombianos, las organizaciones mexicanas pasaron a controlar el negocio. Durante la hegemonía del PRI existían arreglos informales entre autoridades y traficantes; la alternancia del año 2000 rompió esos equilibrios.</p>" },
    { h: "La militarización", b: "<p>Desde 2006 el Ejército asumió tareas de seguridad pública. La estrategia de capturar a los jefes (\"capos\") fragmentó a las organizaciones y multiplicó la violencia. Los grupos diversificaron sus negocios: extorsión, robo de combustible, minería, tráfico de personas y, sobre todo, fentanilo.</p>" },
    { h: "2025–2026: el factor Trump", b: "<p>La designación de los cárteles como organizaciones terroristas abrió la puerta a acciones extraterritoriales y a una cooperación de inteligencia mucho más estrecha. El gobierno de Sheinbaum respondió con extradiciones masivas y operativos de alto impacto. La muerte de \"El Mencho\" fue el mayor golpe en años; la pregunta es si el CJNG se fragmenta, como pasó con otros cárteles, y con cuánta violencia.</p>" }
  ],
  alt: [ { lvl: "hip", h: "Espacio para tus lecturas", x: "Sin aportes cargados todavía." } ],
  sources: [
    { t: "La Estrella de Panamá — México y la caída de \"El Mencho\"", u: "https://www.laestrella.com.pa/mundo/america/mexico-asegura-tener-bajo-control-la-violencia-tras-caida-de-el-mencho-FA20205473" },
    { t: "Metro PR / EFE — Violencia en 16 estados", u: "https://www.metro.pr/noticias/2026/02/23/la-violencia-recorre-mexico-tras-la-muerte-de-el-mencho-en-operativo-con-ayuda-de-estados-unidos/" },
    { t: "Primicias — Más de 50 fallecidos", u: "https://www.primicias.ec/internacional/ataques-mexico-muertos-alias-mencho-guardia-nacional-delincuentes-116558/" }
  ]
},

/* ============================================================= */
{
  id: "colombia",
  name: "Colombia",
  fullName: "Conflicto armado en Colombia",
  sub: "ELN, disidencias de las FARC y Clan del Golfo · economías de la coca y el oro · frontera con Venezuela",
  region: "América del Sur",
  status: "Conflicto armado interno",
  level: 4,
  since: "1964-05-27",
  center: [-74, 5],
  sides: {
    A: { name: "Grupos armados ilegales", desc: "ELN, disidencias de las FARC (Estado Mayor Central y Segunda Marquetalia) y el Clan del Golfo (EGC)." },
    B: { name: "Estado colombiano", desc: "Fuerzas Militares y Policía, con cooperación de EE.UU. Desde el 7-ago-2026 gobierna Abelardo de la Espriella." }
  },
  keyFacts: [
    { k: "Presidente", v: "A. de la Espriella", n: "desde el 7-ago-2026" },
    { k: "Ultimátum a ELN y disidencias", v: "1 mes", n: "anunciado el 9-jul-2026" },
    { k: "Acuerdo de paz con las FARC", v: "2016", n: "13.000 combatientes desmovilizados" },
    { k: "Foco crítico", v: "Catatumbo", n: "frontera con Venezuela" }
  ],
  summary: "<p>El acuerdo de paz de 2016 desmovilizó a las FARC, pero no terminó el conflicto: el ELN, las disidencias que no se acogieron y los grupos herederos del paramilitarismo ocuparon los territorios y las economías ilegales que dejó la guerrilla. La \"paz total\" de Gustavo Petro (2022–2026) abrió negociaciones con casi todos los grupos, pero terminó con un repunte de la violencia, la crisis del Catatumbo de enero de 2025 y el atentado mortal contra el precandidato Miguel Uribe Turbay.</p><p>La elección de junio de 2026 marcó un giro: Abelardo de la Espriella ganó el balotaje por menos de un punto frente a Iván Cepeda y, ya como presidente electo, dio al ELN y a las disidencias un mes para entregarse antes de considerarlos objetivos militares. La relación con la Venezuela posterior a Maduro, que funcionaba como retaguardia del ELN, es la variable regional clave.</p>",
  fronts: [
    { n: "Catatumbo (Norte de Santander)", s: "Guerra ELN – disidencias", l: 4, t: "Desplazamiento masivo desde enero de 2025." },
    { n: "Cauca y Nariño", s: "Disidencias", l: 4, t: "Ataques con drones y explosivos a la fuerza pública." },
    { n: "Arauca", s: "ELN", l: 3, t: "Frontera con Apure (Venezuela)." },
    { n: "Antioquia, Chocó, Córdoba", s: "Clan del Golfo", l: 3, t: "Minería ilegal y rutas del Pacífico y el Caribe." }
  ],
  nonState: [
    { name: "ELN", side: "A", where: "Catatumbo, Arauca, Chocó, Cauca" },
    { name: "Estado Mayor Central (disidencias FARC)", side: "A", where: "Cauca, Guaviare, Meta" },
    { name: "Segunda Marquetalia", side: "A", where: "Nariño, Putumayo, Venezuela" },
    { name: "Clan del Golfo (EGC)", side: "A", where: "Antioquia, Córdoba, Chocó" }
  ],
  map: { bbox: [[-80, -5], [-66, 13]], start: "1998-01-01" },
  roles: [
    { c: "Colombia", es: "Colombia", r: "B", from: "1998-01-01" },
    { c: "United States of America", es: "Estados Unidos", r: "B2", from: "2000-07-13", n: "Plan Colombia" },
    { c: "Venezuela", es: "Venezuela", r: "M", from: "1998-01-01", n: "Retaguardia del ELN y disidencias bajo el chavismo" },
    { c: "Ecuador", es: "Ecuador", r: "M", from: "1998-01-01", n: "Frontera porosa; bombardeo de Angostura (2008)" },
    { c: "Peru", es: "Perú", r: "M", from: "1998-01-01" },
    { c: "Brazil", es: "Brasil", r: "M", from: "1998-01-01" },
    { c: "Panama", es: "Panamá", r: "M", from: "1998-01-01", n: "Tapón del Darién" }
  ],
  events: [
    { d: "1999-01-07", lat: 2.2, lon: -74.8, t: "diplomacia", h: "Diálogos del Caguán", x: "Zona de distensión de 42.000 km² para las FARC; fracasan en 2002." },
    { d: "2002-05-02", lat: 6.55, lon: -76.88, t: "atentado", h: "Masacre de Bojayá", x: "Un cilindro de las FARC cae en una iglesia; 79 muertos." },
    { d: "2008-03-01", lat: 0.33, lon: -76.25, t: "aereo", h: "Muerte de Raúl Reyes en Ecuador", x: "Bombardeo de Angostura; crisis regional." },
    { d: "2008-07-02", lat: 2.2, lon: -72.6, t: "terrestre", h: "Operación Jaque", x: "Rescate de Íngrid Betancourt y 14 rehenes." },
    { d: "2016-11-24", lat: 4.6, lon: -74.08, t: "diplomacia", h: "Acuerdo de paz con las FARC", x: "Firmado en el Teatro Colón tras el rechazo en el plebiscito." },
    { d: "2019-01-17", lat: 4.6, lon: -74.13, t: "atentado", h: "Coche bomba del ELN en Bogotá", x: "Más de 20 cadetes muertos en la Escuela General Santander." },
    { d: "2025-01-16", lat: 8.64, lon: -72.73, t: "terrestre", h: "Crisis del Catatumbo", x: "Ofensiva del ELN contra disidencias; decenas de muertos y miles de desplazados." },
    { d: "2025-06-07", lat: 4.68, lon: -74.12, t: "atentado", h: "Atentado contra Miguel Uribe Turbay", x: "El precandidato muere en agosto." },
    { d: "2026-04-25", lat: 2.45, lon: -76.6, t: "aereo", h: "Ataque con drones a un radar en Cauca", x: "Queda fuera de servicio un radar aéreo." },
    { d: "2026-05-19", lat: 8.3, lon: -73.0, t: "atentado", h: "Masacre en Norte de Santander", x: "Atribuida por el gobierno al ELN; al día siguiente el ELN anuncia cese al fuego electoral." },
    { d: "2026-06-21", lat: 4.6, lon: -74.08, t: "politico", h: "De la Espriella gana la presidencia", x: "49,7% contra 48,7% de Cepeda." },
    { d: "2026-07-09", lat: 4.62, lon: -74.06, t: "politico", h: "Ultimátum al ELN y a las disidencias", x: "Un mes para entregarse o serán \"objetivos militares\"." },
    { d: "2026-10-26", lat: 8.64, lon: -72.73, t: "terrestre", h: "Se entrega alias \"Flecha\", del frente 33 de las disidencias", x: "El presidente informó que el número dos de la subestructura que opera en el Catatumbo se sometió a la justicia; enfrenta cargos por terrorismo y rebelión.", u: "https://www.infobae.com/colombia/2026/10/26/alias-flecha-segundo-cabecilla-del-frente-33-de-las-disidencias-de-las-farc-se-sometio-a-la-justicia-en-el-catatumbo/", st: "Infobae" },
    { d: "2026-10-28", lat: 0, lon: 0, nomap: true, t: "aereo", h: "Sexto bombardeo del gobierno, contra las disidencias de Mordisco", x: "De la Espriella autorizó de madrugada la operación Bosur-Kratos; la prensa la ubica en el Chocó o en el corredor Cauca–Valle y el balance todavía no se conoce. Días antes, otro bombardeo contra el ELN en El Tambo (Cauca) dejó diez muertos según el gobierno.", u: "https://www.eltiempo.com/justicia/conflicto-y-narcotrafico/atencion-fuerzas-militares-ejecutaron-sexto-bombardeo-del-gobierno-de-de-la-espriella-fue-contra-mordisco-en-cauca-3596854", st: "El Tiempo" }
  ],
  timeline: [
    { d: "1948", era: "Orígenes", h: "Bogotazo y La Violencia", x: "Asesinato de Gaitán; guerra entre liberales y conservadores." },
    { d: "1964", era: "Guerrillas", h: "Nacen las FARC y el ELN", x: "" },
    { d: "1980s", era: "Narcotráfico", h: "Cárteles de Medellín y Cali; auge paramilitar", x: "" },
    { d: "1985", era: "Narcotráfico", h: "Toma del Palacio de Justicia", x: "M-19." },
    { d: "1993", era: "Narcotráfico", h: "Muerte de Pablo Escobar", x: "" },
    { d: "1997", era: "Narcotráfico", h: "Nacen las AUC", x: "" },
    { d: "2000", era: "Plan Colombia", h: "Plan Colombia", x: "Asistencia militar de EE.UU." },
    { d: "2002–2010", era: "Plan Colombia", h: "Seguridad Democrática", x: "Uribe repliega a las FARC; desmovilización de las AUC." },
    { d: "2016", era: "Paz", h: "Acuerdo de paz con las FARC", x: "" },
    { d: "2022", era: "Paz total", h: "Petro lanza la \"paz total\"", x: "" },
    { d: "2025", era: "Paz total", h: "Crisis del Catatumbo", x: "" },
    { d: "2026", era: "Mano dura", h: "Elección de De la Espriella", x: "" }
  ],
  history: [
    { h: "Un conflicto con varias capas", b: "<p>El conflicto colombiano combina una guerra civil política (liberales y conservadores en La Violencia), insurgencias marxistas nacidas en los sesenta, el narcotráfico desde los ochenta y el paramilitarismo como respuesta. Con los años las fronteras entre esas capas se borraron: casi todos los actores armados terminaron financiados por la coca, la minería ilegal y la extorsión.</p>" },
    { h: "El acuerdo de 2016 y el vacío", b: "<p>La desmovilización de las FARC fue el mayor logro de paz en el hemisferio, pero el Estado no ocupó los territorios que la guerrilla dejó. El ELN, las disidencias y el Clan del Golfo llenaron ese vacío y se disputan corredores hacia Venezuela, el Pacífico y Ecuador.</p>" },
    { h: "La frontera venezolana", b: "<p>Durante el chavismo, el ELN y las disidencias usaron territorio venezolano como retaguardia, con tolerancia o complicidad de sectores del Estado. La caída de Maduro en enero de 2026 abrió la posibilidad de cooperación entre Bogotá y Caracas contra esos grupos, algo que el nuevo gobierno colombiano pretende aprovechar.</p>" }
  ],
  alt: [ { lvl: "hip", h: "Espacio para tus lecturas", x: "Sin aportes cargados todavía." } ],
  sources: [
    { t: "Telemundo — De la Espriella, presidente electo", u: "https://www.telemundo51.com/noticias/mundo/termina-el-escrutinio-abelardo-de-la-espriella-es-el-presidente-electo-de-colombia/2797070/" },
    { t: "El Cronista — Ultimátum al ELN y las disidencias", u: "https://www.cronista.com/tema/farc-co/" },
    { t: "Finance Colombia — ELN ceasefire during elections", u: "https://www.financecolombia.com/?p=37389" }
  ]
},

/* ============================================================= */
{
  id: "venezuela",
  name: "Venezuela",
  fullName: "Intervención de EE.UU. en Venezuela y transición",
  sub: "Ataques a lanchas, captura de Maduro y gobierno interino bajo tutela de Washington",
  region: "América del Sur / Caribe",
  status: "Post-intervención · transición tutelada",
  level: 2,
  since: "2025-08-15",
  center: [-66, 8],
  sides: {
    A: { name: "Chavismo (hasta ene-2026)", desc: "Gobierno de Nicolás Maduro, FANB y el aparato acusado por EE.UU. de integrar el \"Cártel de los Soles\"." },
    B: { name: "Estados Unidos", desc: "Despliegue naval y aéreo en el Caribe desde agosto de 2025; operación de captura el 3-ene-2026." }
  },
  keyFacts: [
    { k: "Captura de Maduro", v: "3-ene-2026", n: "trasladado a Nueva York" },
    { k: "Presidenta encargada", v: "Delcy Rodríguez", n: "con aval de Washington" },
    { k: "Ataques a lanchas", v: "≈ 72", n: "≈ 240 muertos (recuento de Infobae, 27-oct-2026)" },
    { k: "Riesgo de guerra civil", v: "Bajo", n: "pero sin elecciones convocadas" }
  ],
  summary: "<p>Entre agosto de 2025 y enero de 2026 EE.UU. desplegó la mayor fuerza naval en el Caribe en décadas, incluido el portaaviones Gerald R. Ford, y atacó embarcaciones que acusó de transportar droga: hasta fines de 2025 fueron más de veinte, y para octubre de 2026 la cuenta llegaba a 70 ataques y al menos 235 muertos. Declaró al \"Cártel de los Soles\" organización terrorista e impuso un bloqueo petrolero. El 3 de enero de 2026 fuerzas especiales capturaron a Maduro y a Cilia Flores en Caracas.</p><p>Lo que siguió no fue un cambio de régimen completo: la vicepresidenta Delcy Rodríguez asumió como presidenta encargada y negoció con Washington acceso al petróleo, liberación de presos y reapertura de embajadas. EE.UU. le levantó las sanciones personales. María Corina Machado quedó fuera del proceso y su vínculo con Trump se resintió. El conflicto armado está en pausa; la incógnita es la transición política.</p>",
  fronts: [
    { n: "Transición política", s: "Negociación", l: 2, t: "Sin calendario electoral; presos políticos liberados por tandas." },
    { n: "Frontera con Colombia", s: "Grupos armados", l: 3, t: "ELN y disidencias en Apure y Zulia." }
  ],
  nonState: [
    { name: "Colectivos armados", side: "A2", where: "Caracas y ciudades" },
    { name: "ELN y disidencias de las FARC", side: "A2", where: "Apure, Zulia, Amazonas" }
  ],
  map: { bbox: [[-76, 0], [-58, 18]], start: "2025-08-01" },
  roles: [
    { c: "Venezuela", es: "Venezuela", r: "A", from: "2025-08-01", to: "2026-01-02" },
    { c: "Venezuela", es: "Venezuela", r: "M", from: "2026-01-03", n: "Gobierno encargado de Delcy Rodríguez, en negociación con EE.UU." },
    { c: "United States of America", es: "Estados Unidos", r: "B", from: "2025-08-01" },
    { c: "Puerto Rico", es: "Puerto Rico", r: "B", from: "2025-08-01", n: "Base de F-35" },
    { c: "Trinidad and Tobago", es: "Trinidad y Tobago", r: "B2", from: "2025-08-01", n: "Apoyó el despliegue estadounidense" },
    { c: "Cuba", es: "Cuba", r: "A2", from: "2025-08-01", to: "2026-01-02", n: "Aliado del chavismo; personal de seguridad cubano en Venezuela" },
    { c: "Colombia", es: "Colombia", r: "M", from: "2025-08-01" },
    { c: "Guyana", es: "Guyana", r: "B2", from: "2025-08-01", n: "Disputa por el Esequibo" },
    { c: "Brazil", es: "Brasil", r: "M", from: "2025-08-01" }
  ],
  events: [
    { d: "2025-09-02", lat: 12.2, lon: -66.0, t: "naval", h: "Primer ataque a una lancha en el Caribe", x: "EE.UU. afirma que transportaba droga; 11 muertos." },
    { d: "2025-10-01", lat: 11.8, lon: -66.2, t: "terrestre", h: "Maniobras venezolanas en La Orchila", x: "Padrino López habla de \"guerra no declarada\".", p: "m" },
    { d: "2025-11-24", lat: 10.5, lon: -66.9, t: "politico", h: "EE.UU. declara terrorista al \"Cártel de los Soles\"", x: "" },
    { d: "2025-12-06", lat: 10.44, lon: -66.89, t: "terrestre", h: "Venezuela juramenta 5.600 soldados", x: "Fuerte Tiuna, ante el despliegue del Gerald R. Ford." },
    { d: "2025-12-16", lat: 11.2, lon: -68.0, t: "naval", h: "Bloqueo petrolero sobre Venezuela", x: "Intercepción de petroleros.", p: "m" },
    { d: "2026-01-03", lat: 10.48, lon: -66.90, t: "terrestre", h: "Operación de captura de Maduro", x: "Fuerzas de EE.UU. lo trasladan con Cilia Flores a Nueva York." },
    { d: "2026-01-06", lat: 10.50, lon: -66.92, t: "politico", h: "Delcy Rodríguez asume como presidenta encargada", x: "Trump dice que \"coopera\"." },
    { d: "2026-04-15", lat: 10.5, lon: -66.95, t: "diplomacia", h: "EE.UU. levanta sanciones a Delcy Rodríguez", x: "Deshielo y traspaso de la embajada en Washington (fecha aproximada).", p: "m" },
    { d: "2026-09-27", lat: 10.49, lon: -66.88, t: "diplomacia", h: "Delcy Rodríguez se reúne con Trump en EE.UU.", x: "Gira iniciada el 21-sep; se quiebra el vínculo entre Machado y Trump." },
    { d: "2026-10-27", lat: 0, lon: 0, nomap: true, t: "naval", h: "Nuevo ataque de EE.UU. contra una lancha: cinco muertos", x: "El Comando Sur informó el golpe en el Pacífico oriental sin dar ubicación ni nacionalidades. La campaña iniciada en septiembre de 2025 suma unas 70 embarcaciones atacadas y alrededor de 240 muertos.", u: "https://infobae.com/estados-unidos/2026/10/27/el-ejercito-de-estados-unidos-bombardeo-una-lancha-en-el-pacifico-oriental-cinco-muertos", st: "Infobae" },
    { d: "2026-10-25", lat: 10.07, lon: -69.32, t: "politico", h: "María Corina Machado regresa a Venezuela", x: "La dirigente opositora reapareció en Barquisimeto y viajó por tierra hasta Caracas entre multitudes. Delcy Rodríguez respondió con un acto en Carabobo y una gira por los mismos estados, con la advertencia de que no permitirá que \"nadie se entrometa\".", u: "https://www.infobae.com/venezuela/2026/10/28/delcy-rodriguez-monta-su-propia-campana-ante-el-impacto-que-genero-el-regreso-de-maria-corina-machado/", st: "Infobae" },
    { d: "2026-10-28", lat: 10.49, lon: -66.88, t: "politico", h: "Se abre la postulación de magistrados del TSJ", x: "La Asamblea Nacional inició el proceso, con votación prevista para el 11 de diciembre. La renovación del tribunal y del CNE es la condición que Washington asocia a una posible elección presidencial en 2027.", u: "https://www.infobae.com/venezuela/2026/10/28/delcy-rodriguez-monta-su-propia-campana-ante-el-impacto-que-genero-el-regreso-de-maria-corina-machado/", st: "Infobae" }
  ],
  timeline: [
    { d: "1998", era: "Chavismo", h: "Chávez gana la presidencia", x: "" },
    { d: "2002", era: "Chavismo", h: "Golpe fallido y paro petrolero", x: "" },
    { d: "2013", era: "Madurismo", h: "Muerte de Chávez; asume Maduro", x: "" },
    { d: "2014–2017", era: "Madurismo", h: "Protestas y represión", x: "" },
    { d: "2019", era: "Madurismo", h: "Gobierno interino de Guaidó", x: "Reconocido por más de 50 países." },
    { d: "2020", era: "Madurismo", h: "EE.UU. acusa a Maduro de narcoterrorismo", x: "" },
    { d: "2024", era: "Madurismo", h: "Elección del 28 de julio", x: "Maduro se proclama ganador sin mostrar actas." },
    { d: "2025", era: "Intervención", h: "Despliegue naval y ataques a lanchas", x: "" },
    { d: "2026", era: "Transición", h: "Captura de Maduro y gobierno de Delcy Rodríguez", x: "" }
  ],
  history: [
    { h: "Del petroestado al colapso", b: "<p>Venezuela tiene las mayores reservas de crudo del mundo. El chavismo usó la renta petrolera para un proyecto político que, con la caída de los precios desde 2014 y el deterioro de PDVSA, terminó en hiperinflación y en la emigración de cerca de ocho millones de personas. Las sanciones de EE.UU. desde 2017 profundizaron la crisis.</p>" },
    { h: "La lógica de la intervención", b: "<p>Washington justificó su campaña como una operación antinarcóticos contra un Estado al que acusa de narcoterrorista. El objetivo político era la salida de Maduro. La operación del 3 de enero eligió una vía quirúrgica: retirar a la cúpula y negociar con el resto del aparato, priorizando la estabilización y el petróleo sobre una transición inmediata a la oposición.</p>" }
  ],
  alt: [ { lvl: "hip", h: "Espacio para tus lecturas", x: "Sin aportes cargados todavía." } ],
  sources: [
    { t: "Americas Quarterly — Venezuela: A 2026 Snapshot", u: "https://www.americasquarterly.org/?p=57246" },
    { t: "Khaleej Times / AFP — Venezuela swears in 5,600 troops", u: "https://www.khaleejtimes.com/world/americas/venezuela-swears-in-5600-troops-us-military-build-up" },
    { t: "La Nación — Tema Delcy Rodríguez", u: "https://www.lanacion.com.ar/tema/delcy-rodriguez/" }
  ]
},

/* ============================================================= */
{
  id: "cuba",
  name: "Cuba",
  fullName: "Crisis Cuba – Estados Unidos",
  sub: "Bloqueo energético, amenaza de acción militar y negociación",
  region: "Caribe",
  status: "Latente · coerción económica",
  level: 2,
  since: "2026-01-01",
  center: [-79.5, 21.8],
  sides: {
    A: { name: "Gobierno cubano", desc: "Partido Comunista; Díaz-Canel como primer secretario." },
    B: { name: "Estados Unidos", desc: "Bloqueo petrolero desde ene-2026; busca un cambio de régimen negociado." }
  },
  keyFacts: [
    { k: "Bloqueo de combustible", v: "desde ene-2026", n: "orden ejecutiva y bloqueo de petroleros" },
    { k: "Daño estimado por La Habana", v: "US$ 8.083 M", n: "mar-2025 a feb-2026 (dato de parte)" },
    { k: "Reformas económicas", v: "176", n: "aprobadas en junio de 2026" },
    { k: "Postura de Trump (26-sep)", v: "\"Haremos un acuerdo\"", n: "tras reporte de planes del Comando Sur" }
  ],
  summary: "<p>Tras la captura de Maduro, Cuba perdió a su principal proveedor de petróleo. EE.UU. firmó en enero una orden para cortar el suministro de combustible a la isla y desde febrero bloquea petroleros, incluidos los de Pemex. El resultado fueron apagones nacionales repetidos y la crisis más dura desde el Período Especial.</p><p>Hubo incidentes armados aislados (en febrero, guardacostas cubanos mataron a cuatro hombres armados que llegaban en una lancha desde Florida) y amenazas explícitas de que \"Cuba es la próxima\". Al mismo tiempo, hay diálogo: diplomáticos estadounidenses viajaron a la isla en abril y La Habana aprobó una apertura económica inédita. En septiembre CBS informó que el Comando Sur evaluaba refuerzos para una posible acción; Trump respondió que espera un acuerdo y que no hará falta el Ejército.</p>",
  fronts: [
    { n: "Bloqueo energético", s: "Activo", l: 3, t: "Apagones nacionales; ayuda humanitaria limitada." },
    { n: "Estrecho de Florida", s: "Incidentes", l: 2, t: "Infiltraciones armadas y patrullaje." },
    { n: "Negociación", s: "Intermitente", l: 2, t: "Contactos directos desde marzo de 2026." }
  ],
  nonState: [],
  map: { bbox: [[-88, 17.5], [-72, 28]], start: "2026-01-01" },
  roles: [
    { c: "Cuba", es: "Cuba", r: "A", from: "2026-01-01" },
    { c: "United States of America", es: "Estados Unidos", r: "B", from: "2026-01-01" },
    { c: "Mexico", es: "México", r: "M", from: "2026-01-01", n: "Suspendió envíos de Pemex; envía ayuda humanitaria" },
    { c: "Venezuela", es: "Venezuela", r: "M", from: "2026-01-03", n: "Dejó de abastecer a Cuba tras la caída de Maduro" },
    { c: "Bahamas", es: "Bahamas", r: "M", from: "2026-01-01" },
    { c: "Jamaica", es: "Jamaica", r: "M", from: "2026-01-01" },
    { c: "Haiti", es: "Haití", r: "M", from: "2026-01-01" }
  ],
  events: [
    { d: "2026-01-29", lat: 38.9, lon: -77.03, t: "politico", h: "Orden ejecutiva para cortar el combustible a Cuba", x: "", p: "m", nomap: true },
    { d: "2026-02-10", lat: 23.4, lon: -82.6, t: "naval", h: "EE.UU. comienza a bloquear petroleros", x: "Incluye cargamentos de Pemex; amenaza de aranceles.", p: "m" },
    { d: "2026-02-25", lat: 23.2, lon: -80.8, t: "naval", h: "Guardacostas cubanos matan a cuatro hombres armados", x: "Lancha con matrícula de Florida; seis heridos. Ubicación aproximada." },
    { d: "2026-03-13", lat: 23.13, lon: -82.38, t: "diplomacia", h: "Díaz-Canel confirma conversaciones con EE.UU.", x: "" },
    { d: "2026-03-16", lat: 23.11, lon: -82.36, t: "politico", h: "Apagón en toda la isla", x: "" },
    { d: "2026-04-15", lat: 23.14, lon: -82.39, t: "diplomacia", h: "Diplomáticos de EE.UU. en La Habana", x: "Primera visita desde 2016.", p: "m" },
    { d: "2026-05-20", lat: 38.9, lon: -77.03, t: "politico", h: "Causa penal contra Raúl Castro", x: "", nomap: true },
    { d: "2026-07-06", lat: 23.12, lon: -82.37, t: "politico", h: "Nuevo apagón nacional", x: "" },
    { d: "2026-09-25", lat: 25.8, lon: -80.3, t: "politico", h: "Reporte sobre planes del Comando Sur", x: "CBS: la Reserva evalúa refuerzos para una posible acción en torno a Cuba." },
    { d: "2026-09-26", lat: 23.13, lon: -82.38, t: "diplomacia", h: "Trump: \"Cuba y nosotros haremos un acuerdo\"", x: "La Habana ofrece en la ONU relaciones comerciales con empresas de EE.UU." },
    { d: "2026-10-27", lat: 40.75, lon: -73.97, t: "diplomacia", h: "Cruce a los gritos en la ONU por el embargo", x: "En el debate anual de la Asamblea General, el embajador estadounidense pidió rechazar la resolución cubana y chocó con el canciller Bruno Rodríguez; la votación queda para la segunda sesión.", u: "https://www.infobae.com/estados-unidos/2026/10/28/el-embajador-de-eeuu-y-el-canciller-de-cuba-protagonizaron-un-tenso-cruce-a-los-gritos-en-la-onu-por-el-embargo-economico-contra-el-regimen/", st: "Infobae" },
    { d: "2026-10-28", lat: 40.75, lon: -73.97, t: "diplomacia", h: "La ONU vuelve a condenar el embargo, con menos apoyo", x: "La resolución cubana sacó 130 votos a favor, 17 en contra y 25 abstenciones, contra 165, 7 y 12 en 2025. Varios países que la respaldaban pasaron a abstenerse tras el cabildeo de Washington.", u: "https://www.infobae.com/america/agencias/2026/10/28/la-onu-aprueba-la-resolucion-contra-el-embargo-de-eeuu-a-cuba-pese-a-perder-apoyos-clave/", st: "Infobae" }
  ],
  timeline: [
    { d: "1898", era: "Orígenes", h: "Guerra hispano-estadounidense", x: "Enmienda Platt y base de Guantánamo." },
    { d: "1959", era: "Revolución", h: "Triunfo de la Revolución", x: "" },
    { d: "1961", era: "Revolución", h: "Bahía de Cochinos", x: "" },
    { d: "1962", era: "Revolución", h: "Embargo y crisis de los misiles", x: "" },
    { d: "1991", era: "Período Especial", h: "Colapso soviético", x: "" },
    { d: "1996", era: "Período Especial", h: "Ley Helms-Burton", x: "" },
    { d: "2014", era: "Deshielo", h: "Restablecimiento de relaciones", x: "Obama y Raúl Castro." },
    { d: "2017", era: "Deshielo", h: "Marcha atrás de Trump", x: "" },
    { d: "2021", era: "Crisis", h: "Protestas del 11 de julio", x: "" },
    { d: "2026", era: "Crisis", h: "Bloqueo energético y negociación", x: "" }
  ],
  history: [
    { h: "Seis décadas de enfrentamiento", b: "<p>La relación entre Cuba y EE.UU. está marcada por la tutela estadounidense posterior a 1898, la revolución de 1959, la alianza con la URSS y el embargo vigente desde 1962. La isla sobrevivió al colapso soviético gracias a la apertura turística y, desde 2000, al petróleo venezolano.</p>" },
    { h: "2026: la pinza", b: "<p>La caída de Maduro cortó el sostén energético de Cuba en el momento de mayor fragilidad de su red eléctrica. Washington combina la asfixia económica con la negociación, buscando una transición pactada. La apertura económica aprobada en junio, la más amplia en décadas, muestra que La Habana busca margen sin ceder en lo político.</p>" }
  ],
  alt: [ { lvl: "hip", h: "Espacio para tus lecturas", x: "Sin aportes cargados todavía." } ],
  sources: [
    { t: "Wikipedia — 2026 Cuban crisis", u: "https://en.wikipedia.org/wiki/2026_Cuban_crisis" },
    { t: "El Comercio / EFE — Trump anticipa acuerdo con Cuba (26-sep-2026)", u: "https://www.elcomercio.com/actualidad/mundo/trump-anticipa-acuerdo-cuba-descarta-intervencion-militar/" },
    { t: "Al Jazeera — At UN, Cuba rallies support (jul-2026)", u: "https://aljazeera.com/news/2026/7/8/at-un-cuba-rallies-support-against-ruthless-us-blockade" }
  ]
}
];
