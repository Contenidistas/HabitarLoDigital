// Datos estructurados P1 / P2 para «Habitar lo digital» (EDyTIC 2027)
// Separados de los componentes React para mantenimiento editorial, versionado y trazabilidad.

export const PLATFORM_META = {
  brandName: 'Habitar lo digital',
  workingSubtitle: 'Plan de trabajo integrado EDyTIC 2027 · Versión de adecuación técnico-pedagógica',
  legacySubmoduleName: 'Mi primer celular',
  version: '2.0.0-entrega1',
  reviewDate: '23/11/2026',
  author: 'Prof. Esp. Santiago Hernández',
  framework: 'en el marco de EDyTIC',
  authorEmail: 'shernandez@uruguayeduca.edu.uy',
  authorCvUrl: 'https://exportcvuy.anii.org.uy/cv/?8242b38f35c3b4fc9b8d3442700f810e',
  collaboratorsNote:
    'Adaptaciones y aportes: espacio destinado a registrar revisiones y colaboraciones de EDyTIC / Inspección de Informática, POITE y Contenidistas de Uruguay Educa (DGEIP).',
  institutionalDisclaimer:
    'Artefacto educativo de autoría y desarrollo del Prof. Esp. Santiago Hernández, en el marco de EDyTIC. No constituye por sí mismo una política oficial aprobada por ANEP ni sustituye las normativas de cada centro educativo.'
};

// P1-02: Progresión etaria y pedagógica (en lugar de etiqueta única «menores» o prueba universal)
export const AGE_TRACKS = [
  {
    id: 'inicial-primeros',
    tramo: 'Inicial y 1.º–2.º de Primaria (3 a 7 años)',
    subsistema: 'DGEIP · Inicial y Primer Ciclo',
    focusBadge: 'Mediación adulta directa',
    objectives: [
      'Priorizar el juego corporal, la lectura compartida y la interacción presencial.',
      'Acompañar todo contacto ocasional con pantallas como actividad compartida y acotada.'
    ],
    prerequisites: 'No requiere autonomía digital ni teléfono propio; trabaja hábitos cotidianos de familia.',
    contextAdjustment:
      'Considerar rutinas del hogar, presencia de adultos disponibles y pautas pediátricas actualizadas sobre descanso y juego libre.'
  },
  {
    id: 'primaria-3-4',
    tramo: '3.º y 4.º de Primaria (8 a 9 años)',
    subsistema: 'DGEIP · Segundo Ciclo',
    focusBadge: 'Convivencia y primeras prácticas',
    objectives: [
      'Comprender qué datos personales no se comparten (escuela, domicilio, fotos sin permiso).',
      'Diferenciar contenido educativo o creativo de juegos con chat abierto o publicidad.'
    ],
    prerequisites: 'Uso guiado de dispositivos compartidos o equipamiento educativo en aula/hogar.',
    contextAdjustment:
      'Adaptar ejemplos al lenguaje cercano de cada grupo; trabajar con conversatorios e historietas sin requerir que los niños tengan celular.'
  },
  {
    id: 'primaria-5-6',
    tramo: '5.º y 6.º de Primaria (10 a 12 años)',
    subsistema: 'DGEIP · Egreso Primaria',
    focusBadge: 'Transición, acuerdos y «Mi primer celular»',
    objectives: [
      'Construir acuerdos claros de convivencia en grupos de mensajería y respeto a la propia imagen.',
      'Reconocer riesgos de contactos desconocidos, micropagos y circulación de capturas.'
    ],
    prerequisites: 'Nociones básicas de lectura crítica de mensajes y uso escolar de plataformas.',
    contextAdjustment:
      'En grupos donde aún no hay celular propio, enfocar en dispositivos compartidos, videojuegos y preparación previa.'
  },
  {
    id: 'ebi-7-9',
    tramo: 'EBI 7.º a 9.º (12 a 15+ años)',
    subsistema: 'DGES / DGETP · Educación Básica Integrada',
    focusBadge: 'Autonomía progresiva, algoritmos y dilemas',
    objectives: [
      'Analizar cómo operan los algoritmos de recomendación, publicidad y desinformación.',
      'Deliberar sobre consentimiento, huella digital, acuerdos de aula e IA generativa.'
    ],
    prerequisites: 'Experiencia cotidiana en mensajería, redes o plataformas de contenido.',
    contextAdjustment:
      'Promover participación estudiantil activa en acuerdos áulicos; evitar tono prohibitivo o moralizante.'
  },
  {
    id: 'familias-educadores',
    tramo: 'Familias y Educadores (Acompañantes adultos)',
    subsistema: 'Transversal · Hogar y Centro Educativo',
    focusBadge: 'Ejemplo adulto, mediación y redes de apoyo',
    objectives: [
      'Articular normas del hogar y acuerdos del centro con enfoque de derechos y escucha.',
      'Activar rutas seguras de asesoramiento y denuncia sin culpabilizar ni revictimizar.'
    ],
    prerequisites: 'Disposición al diálogo; no exige conocimientos técnicos avanzados.',
    contextAdjustment:
      'Atender diversidad de configuraciones familiares, conectividad limitada y realidades territoriales.'
  }
];

// P1-03: Cinco ejes mínimos de contenido con actividad Primaria, Secundaria y ficha docente
export const FIVE_AXES = [
  {
    id: 'eje-a',
    code: 'Eje A',
    title: 'Derechos e identidad digital',
    summary:
      'Construcción de la huella digital, protección de datos personales, derecho a la propia imagen, consentimiento y participación ciudadana en entornos digitales.',
    primariaActivity: {
      tramo: '3.º a 6.º de Primaria',
      title: '«Mi foto, mi decisión» (Semáforo de datos e imagen)',
      description:
        'A partir de tarjetas impresas con escenas cotidianas (foto con túnica/escudo, nombre completo, dibujo propio, ubicación en vivo), el grupo clasifica qué puede compartirse con adultos de confianza y qué se resguarda.'
    },
    secundariaActivity: {
      tramo: 'EBI 7.º a 9.º',
      title: 'Auditoría de huella digital y consentimiento en redes',
      description:
        'Análisis del Caso 6 y Caso 7: distinguir libertad de expresión de vulneración de privacidad ajena, revisando alcance real de la Ley N.º 18.331 y Ley N.º 19.580.'
    },
    teacherSheet: {
      objective: 'Promover el ejercicio de derechos digitales y el respeto por la imagen propia y ajena.',
      mediationTip:
        'Evitar pedir a estudiantes que muestren sus perfiles reales al frente; trabajar siempre sobre perfiles ficticios o casos.'
    }
  },
  {
    id: 'eje-b',
    code: 'Eje B',
    title: 'Bienestar, atención, sueño y pantallas',
    summary:
      'Equilibrio entre conexión y descanso, postura, salud visual, pausas de enfoque y hábitos de uso según momento del día, finalidad y acompañamiento.',
    primariaActivity: {
      tramo: '3.º a 6.º de Primaria',
      title: 'Mapa del día sin apuros (Conexión y descanso)',
      description:
        'Actividad sin conexión: cada estudiante dibuja o ordena su jornada identificando cuándo necesita descanso, juego al aire libre, mesa compartida y cuándo usa pantallas acompañado.'
    },
    secundariaActivity: {
      tramo: 'EBI 7.º a 9.º',
      title: 'Diario opcional de observación de hábitos (no solo minutos)',
      description:
        'Trabajo con el Caso 1 («Las notificaciones en clase») y observación voluntaria de para qué usamos el celular, cómo interrumpe el sueño y qué cambiaría una pausa programada.'
    },
    teacherSheet: {
      objective: 'Superar el enfoque basado solo en prohibir horas, analizando finalidad, descanso y contexto.',
      mediationTip:
        'No patologizar ni diagnosticar conductas; diferenciar recomendaciones generales de higiene del sueño de valoraciones clínicas individuales.'
    }
  },
  {
    id: 'eje-c',
    code: 'Eje C',
    title: 'Convivencia, seguridad y búsqueda de ayuda',
    summary:
      'Prevención del hostigamiento entre pares, trato respetuoso en chats grupales, identificación de contactos engañosos (grooming) y rutas seguras de ayuda.',
    primariaActivity: {
      tramo: '3.º a 6.º de Primaria',
      title: '«¿A quién le pido una mano?» (Red de confianza)',
      description:
        'Juego de roles con títeres o tarjetas sobre qué hacer si un desconocido en un juego pide secretos o fotos, reforzando que pedir ayuda nunca trae castigo.'
    },
    secundariaActivity: {
      tramo: 'EBI 7.º a 9.º',
      title: 'Del testigo mudo al cuidado colectivo en el chat de la clase',
      description:
        'Análisis del Caso 2 («Un meme que ridiculiza») y Caso 3 («Alguien pidió una foto»), diferenciando asesoramiento, referente institucional y denuncia formal.'
    },
    teacherSheet: {
      objective: 'Fortalecer el rol solidario entre pares y difundir el protocolo de actuación pedagógica sin revictimizar.',
      mediationTip:
        'Recordar explícitamente en cada taller que nunca se debe reenviar material íntimo ni compartir capturas sensibles en formularios web.'
    }
  },
  {
    id: 'eje-d',
    code: 'Eje D',
    title: 'Algoritmos, publicidad, desinformación y economía de la atención',
    summary:
      'Comprensión crítica de cómo las plataformas personalizan contenidos, retienen atención con reproducción infinita, difunden desinformación o incorporan micropagos.',
    primariaActivity: {
      tramo: '5.º y 6.º de Primaria',
      title: '«¿Quién puso este video acá?» (Publicidad y premios falsos)',
      description:
        'Comparar un aviso publicitario o botón de «monedas gratis» con un contenido informativo real usando ejemplos impresos del Caso 8.'
    },
    secundariaActivity: {
      tramo: 'EBI 7.º a 9.º',
      title: 'Ingeniería de la atención y verificación de noticias',
      description:
        'Debate sobre el Caso 4 («La recomendación infinita»): identificar autoplay, scroll infinito, burbujas de recomendación y criterios básicos para contrastar noticias.'
    },
    teacherSheet: {
      objective: 'Desarmar explicaciones simplistas centradas solo en la culpa individual o neurobiológica.',
      mediationTip:
        'Enfocar en el diseño comercial de las plataformas y en herramientas concretas que devuelven agencia al usuario.'
    }
  },
  {
    id: 'eje-e',
    code: 'Eje E',
    title: 'Uso responsable de dispositivos, acuerdos e IA generativa',
    summary:
      'Acuerdos participativos de uso en hogar y aula, honestidad intelectual y verificación crítica frente a herramientas de inteligencia artificial generativa.',
    primariaActivity: {
      tramo: '5.º y 6.º de Primaria',
      title: '«El robot que a veces inventa» + Acuerdo de grupo',
      description:
        'Actividad en papel o pizarra comparando una respuesta inventada con un libro/portal verificado y redactando 3 acuerdos sencillos para el salón.'
    },
    secundariaActivity: {
      tramo: 'EBI 7.º a 9.º',
      title: '«IA que inventa una fuente» y pacto dialogado de aula',
      description:
        'Resolución del Caso 5 detectando citas inexistentes, riesgos de privacidad al ingresar datos en chatbots y construcción de una guía de acuerdos revisable.'
    },
    teacherSheet: {
      objective: 'Promover acuerdos situados y criterios éticos frente a dispositivos e IA generativa.',
      mediationTip:
        'Aclarar que el acuerdo de aula es una instancia de deliberación pedagógica y no reemplaza el reglamento oficial del centro.'
    }
  }
];

// P1-05: Kit Territorial Secundaria — POITE
export const POITE_KIT = {
  roleTitle: 'POITE · Educación Media (Secundaria)',
  subtitle: 'Paquete reutilizable listo para facilitar talleres sin tener que construir material nuevo',
  durations: [
    {
      id: 'estandar',
      label: 'Versión estándar (45–60 min)',
      blocks: [
        { time: '00–08 min', phase: 'Encuadre situado y pregunta disparadora', detail: 'Presentar «Habitar lo digital», aclarar que no es una evaluación ni un interrogatorio, y recoger sin identificar qué situaciones viven con el celular en clase y fuera de ella.' },
        { time: '08–22 min', phase: 'Actividad sin conexión o caso central', detail: 'Trabajo en subgrupos de 4 con tarjetas impresas (Caso 1 «Las notificaciones» o Caso 4 «La recomendación infinita»). Identifican derechos, riesgos y alternativas.' },
        { time: '22–38 min', phase: 'Plenario y análisis crítico con rúbrica ligera', detail: 'Cada subgrupo expone su alternativa. El/la POITE facilita usando preguntas abiertas y contrasta con Aristas 2025 y Resolución CODICEN N.º 1999/026.' },
        { time: '38–50 min', phase: 'Cierre, guía de acuerdos y canales de ayuda', detail: 'Síntesis en 3 acuerdos accionables para el grupo y difusión clara de referentes institucionales y Línea Azul (0800 5050).' }
      ]
    },
    {
      id: 'extendida',
      label: 'Versión extendida (80–90 min · Módulo doble)',
      blocks: [
        { time: '00–12 min', phase: 'Diagnóstico participativo sin datos personales', detail: 'Dinámica de mapeo en pizarra sobre usos positivos, distracciones y momentos de conflicto digital.' },
        { time: '12–35 min', phase: 'Rotación por 3 estaciones de dilemas', detail: 'Subgrupos abordan tres ejes distintos: Convivencia (Caso 2), Algoritmos (Caso 4) e IA generativa (Caso 5).' },
        { time: '35–60 min', phase: 'Debate interdisciplinario y diseño de pautas', detail: 'Articulación con docentes de Lengua, Biología, Ciudadanía o Adscripción para redactar propuestas de convivencia.' },
        { time: '60–85 min', phase: 'Aplicación de rúbrica formativa y cierre', detail: 'Coevaluación con rúbrica de 5 criterios, entrega de ficha impresa A4 y acuerdo de fecha de revisión.' }
      ]
    }
  ],
  preparationChecklist: [
    'Imprimir en A4 (blanco y negro legible) las tarjetas de casos seleccionados y la «Guía para acordar» sin firma obligatoria.',
    'Confirmar si el salón cuenta con proyector para usar el Modo Taller; si no hay conectividad ni pantalla, utilizar la secuencia 100% sin conexión.',
    'Articular previamente con Dirección, Adscripción y al menos un docente de otra asignatura para no limitar la jornada solo a Informática.',
    'Verificar los referentes internos del liceo (adscripto/equipo multidisciplinario) para mencionar la ruta local de consulta ante incidentes.'
  ],
  offlineActivity: {
    title: 'Actividad de respaldo 100 % sin conexión: «El Tribunal de los Algoritmos y Acuerdos»',
    steps: [
      'Entregar a cada subgrupo una hoja impresa con uno de los 8 casos dilemáticos y cuatro tarjetas de rol: Quien recibe el problema, Par solidario, Referente adulto, Diseñador de acuerdos.',
      'Debatir durante 12 minutos sin usar teléfonos: ¿qué derecho está en juego?, ¿qué pasaría con cada opción?, ¿qué cambio concreto proponemos?',
      'Registrar en papel afiche dos compromisos viables para el grupo y una duda para investigar o consultar con referentes.'
    ]
  },
  anticipatedResponses: [
    {
      studentSays: '«Profe, si nos piden guardar el celular es porque desconfían o quieren prohibir todo».',
      facilitatorReply:
        'Aclarar que el objetivo no es prohibir la tecnología sino cuidar la atención compartida y diferenciar momentos: cuándo el equipo aporta a la consigna y cuándo conviene acordar pausa.'
    },
    {
      studentSays: '«Un grupo de WhatsApp es privado, el liceo no tiene nada que ver».',
      facilitatorReply:
        'Explicar que cuando lo que pasa en un chat repercute en la convivencia del aula o vulnera derechos (burlas, difusión sin permiso), el centro tiene responsabilidad pedagógica de acompañar y proteger.'
    },
    {
      studentSays: '«Todos usan IA para hacer las tareas, ¿para qué verificar fuentes?».',
      facilitatorReply:
        'Mostrar un ejemplo real de cita inventada (Caso 5) y proponer que la IA funcione como borrador sujeto a verificación humana, declarando su uso.'
    }
  ],
  interdisciplinaryLinks: [
    'Idioma Español / Literatura: análisis de argumentos, fuentes verificables y lectura crítica frente a textos generados por IA.',
    'Formación Ciudadana / Derecho: derechos de NNA, privacidad (Ley N.º 18.331) y acuerdos democráticos de convivencia.',
    'Biología / Educación Física: descanso nocturno, luz, pausas visuales y equilibrio con actividad física presencial.'
  ]
};

// P1-06: Kit Territorial Primaria — Contenidistas Uruguay Educa (DGEIP)
export const DGEIP_KIT = {
  roleTitle: 'Contenidistas Uruguay Educa · DGEIP (Primaria)',
  subtitle:
    'Secuencias diferenciadas para Primaria pensadas para su ejecución por el equipo de contenidistas de Uruguay Educa DGEIP, sin dependencia base de otras figuras.',
  noteOnExecution:
    'Este kit está diseñado para ser aplicado directamente por contenidistas de Uruguay Educa DGEIP junto a maestras/os de aula y familias; cualquier articulación con otros roles territoriales es opcional y sujeta a acuerdos específicos.',
  tramos: [
    {
      id: 'dgeip-inicial',
      label: 'Inicial y 1.º–2.º año',
      duration: '30–35 min (Conversatorio + producción gráfica)',
      languageNote: 'Lenguaje cercano, apoyado en cuentos, láminas y juego simbólico; no presupone teléfono propio.',
      sequence: [
        'Inicio con lámina o relato corto: «¿Cuándo nos miramos a los ojos y cuándo miramos una pantalla?»',
        'Producción creativa: dibujo de «mi momento favorito sin pantallas» (plaza, merienda, cuento antes de dormir).',
        'Envío al hogar de ficha impresa A4 para adultos responsables con 3 pautas simples de acompañamiento.'
      ],
      creativeProduct: 'Mural colectivo «Nuestros momentos compartidos» para la cartelera del salón.'
    },
    {
      id: 'dgeip-3-4',
      label: '3.º y 4.º año',
      duration: '40–45 min (Dinámica lúdica + diálogo)',
      languageNote: 'Enfocado en convivencia, cuidado de datos personales básicos y juegos en línea compartidos.',
      sequence: [
        'Semáforo de datos e imagen: tarjetas impresas para distinguir qué información es pública y qué queda en casa/escuela.',
        'Conversatorio guiado sobre juegos en línea: ¿qué pasa cuando aparece un chat de alguien que no conozco?',
        'Cierre con lista ilustrada de «personas de confianza a quienes acudir» dentro y fuera de la escuela.'
      ],
      creativeProduct: 'Historieta breve en pareja: «Un mensaje raro en el juego: ¿qué hacemos?».'
    },
    {
      id: 'dgeip-5-6',
      label: '5.º y 6.º año',
      duration: '45–50 min (Situación didáctica + acuerdos)',
      languageNote: 'Aborda primeros chats grupales, respeto en stickers/memes, transición a educación media y «Mi primer celular».',
      sequence: [
        'Lectura en subgrupos del Caso 2 («Un meme que ridiculiza») o Caso 3 («Alguien pidió una foto») adaptado a 5.º–6.º.',
        'Construcción grupal de 4 acuerdos para cuidar el grupo de la clase sin burlas ni capturas sin permiso.',
        'Entrega de díptico/ficha imprimible para familias sobre controles básicos, descanso y comunicación sin castigos.'
      ],
      creativeProduct: 'Decálogo ilustrado de convivencia digital del grupo y carta-invitación a las familias.'
    }
  ],
  familyMaterialsNote:
    'Cada secuencia de Primaria incluye una hoja A4 de lectura clara y alto contraste pensada para reuniones de padres o cuaderno comunicador, enfocada en mediación adulta y descanso sin culpabilización.'
};

// P1-13: Evaluación formativa ligera (rúbrica de dilemas sin datos personales obligatorios)
export const FORMATIVE_RUBRIC = {
  title: 'Rúbrica formativa ligera para trabajo con dilemas',
  purpose:
    'Permite observar el progreso argumentativo del grupo durante un taller y registrar apreciaciones agregadas en papel o instrumento institucional aprobado, sin calificar a estudiantes ni recolectar datos personales.',
  criteria: [
    {
      dimension: '1. Identificación del problema',
      incipiente: 'Describe solo el hecho superficial o busca culpables individuales.',
      enDesarrollo: 'Reconoce que existe un conflicto de convivencia, atención o privacidad.',
      logrado: 'Identifica con claridad qué está en juego (cuidado, diseño de plataforma, presión grupal o norma).'
    },
    {
      dimension: '2. Derechos y normas',
      incipiente: 'No relaciona la situación con derechos ni acuerdos compartidos.',
      enDesarrollo: 'Menciona nociones generales de respeto o reglas de aula/casa.',
      logrado: 'Articula derechos concretos (propia imagen, privacidad, descanso, aprendizaje) y distingue acuerdo de sanción.'
    },
    {
      dimension: '3. Alternativas de acción',
      incipiente: 'Propone respuestas extremas (callar todo o prohibir/agredir).',
      enDesarrollo: 'Plantea una salida prudente aunque centrada solo en protegerse a sí mismo.',
      logrado: 'Formula alternativas viables, restaurativas y proporcionadas que cuidan a todos los involucrados.'
    },
    {
      dimension: '4. Argumentación',
      incipiente: 'Justifica por costumbre («porque siempre es así» o «porque sí»).',
      enDesarrollo: 'Expone razones basadas en la experiencia cotidiana del grupo.',
      logrado: 'Sostiene su postura con argumentos claros, anticipando consecuencias y escuchando otras miradas.'
    },
    {
      dimension: '5. Cuidado y búsqueda de ayuda',
      incipiente: 'Asume que debe resolver solo situaciones graves o guardar secretos.',
      enDesarrollo: 'Identifica que puede pedir ayuda ante emergencias.',
      logrado: 'Reconoce referentes de confianza (familia, centro educativo, Línea Azul 0800 5050) y evita difundir material sensible.'
    }
  ]
};

// P1-12: Itinerario breve de formación de referentes (POITE y Contenidistas DGEIP)
export const EDUCATOR_ITINERARY = {
  title: 'Itinerario breve de formación para referentes (POITE y Contenidistas DGEIP)',
  disclaimer:
    'Este itinerario funciona como guía de preparación autónoma o de equipo. La emisión de constancias o certificaciones corresponde exclusivamente si se acuerda un mecanismo institucional formal.',
  modules: [
    {
      step: 'Módulo 1 · Objetivos y enfoque de derechos',
      time: '15 min',
      content: 'Pasar del enfoque prohibicionista o centrado solo en el primer celular hacia la ciudadanía, el bienestar y la convivencia digital situadas (Resolución CODICEN N.º 1999/026 y Estrategia Nacional 2024–2028).'
    },
    {
      step: 'Módulo 2 · Microlectura de evidencia y límites metodológicos',
      time: '15 min',
      content: 'Lectura comentada de Aristas Media 2025 (pp. 132–140): cómo comunicar porcentajes con denominadores y evitar inferencias causales injustificadas.'
    },
    {
      step: 'Módulo 3 · Análisis de casos y rúbrica formativa',
      time: '20 min',
      content: 'Selección de dos dilemas por tramo etario, anticipación de respuestas frecuentes y ensayo de devolución formativa sin etiquetar estudiantes.'
    },
    {
      step: 'Módulo 4 · Cuidado ético y actuación ante incidentes',
      time: '15 min',
      content: 'Manejo confidencial, prohibición de pedir o redistribuir capturas íntimas, distinción entre asesoramiento y denuncia y derivación a referentes.'
    }
  ],
  faqs: [
    {
      q: '¿Qué hago si un estudiante quiere contar un caso grave suyo en medio del taller grupal?',
      a: 'Agradecer la confianza sin exponerlo frente al grupo, señalar que lo conversarán en privado al finalizar junto a un referente institucional (Adscripción/Dirección) y seguir el protocolo de cuidado.'
    },
    {
      q: '¿Cómo adapto la actividad si en la escuela o liceo no hay buena conectividad o proyector?',
      a: 'Todos los kits incluyen una versión 100 % sin conexión basada en tarjetas impresas en blanco y negro (A4) y dinámica oral/en papel.'
    },
    {
      q: '¿La plataforma recolecta métricas de mi taller?',
      a: 'No. Esta edición pública no recoge ni envía datos. Si un piloto institucional requiere seguimiento agregado, deberá utilizar un instrumento institucional independiente y aprobado.'
    }
  ]
};

// P2-02: Bitácora pública de versiones y trazabilidad
export const CHANGELOG_DATA = [
  {
    version: '2.0.0-entrega1',
    date: '23/11/2026',
    reviewer: 'Prof. Esp. Santiago Hernández (Propuesta técnica EDyTIC 2027)',
    changes: [
      'Cambio de identidad principal a «Habitar lo digital», reubicando «Mi primer celular» como submódulo para familias.',
      'Retiro completo de formularios de encuesta de investigación, panel investigador, contraseñas en cliente y envío por webhook (P0-01 a P0-04).',
      'Corrección de atribución S.E.R.C. como cuatro pautas organizadas en esta plataforma (P0-05).',
      'Incorporación de Resolución CODICEN N.º 1999/026 (Acta N.º 25, 04/08/2026) y datos Aristas Media 2025 (INEEd, 2026, Cap. 5, pp. 132–140) con aviso metodológico (P0-07, P0-08).',
      'Reestructuración de navegación por recorridos (Estudiantes, Familias, Docentes, POITE Secundaria, Contenidistas DGEIP Primaria, Fuentes y ayuda, Acerca de), 5 ejes mínimos, 8 casos didácticos y diario opcional no persistente de pantallas (P1-01 a P1-14).'
    ]
  },
  {
    version: '1.0.0',
    date: '2026',
    reviewer: 'Prof. Esp. Santiago Hernández',
    changes: [
      'Versión inicial «Primer Celular Uruguay» orientada a entrega responsable del primer celular, controles parentales, videoteca, biblioteca PDF y acuerdos imprimibles.'
    ]
  }
];
