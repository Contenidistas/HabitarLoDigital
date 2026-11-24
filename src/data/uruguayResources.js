export const NORMATIVE_LAST_VERIFIED = '23/11/2026';

export const uruguayContacts = [
  {
    name: 'Emergencias policiales y urgencias',
    category: 'Emergencia inmediata',
    description:
      'Atención inmediata ante situaciones de riesgo físico inminente, amenazas graves o extorsión en curso.',
    number: '911',
    free: true,
    hours: '24 horas, todos los días',
    badge: 'Emergencia',
    type: 'emergency',
    website: 'https://www.minterior.gub.uy',
    lastVerified: '23/11/2026',
    details:
      'Usar cuando exista peligro inmediato para una niña, niño o adolescente o necesidad de intervención policial urgente.'
  },
  {
    name: 'Línea Azul — INAU',
    category: 'Asesoramiento y reporte de vulneración de derechos',
    description:
      'Servicio gratuito, nacional y confidencial del Instituto del Niño y Adolescente del Uruguay para orientar y recibir comunicaciones ante situaciones de vulneración de derechos de NNA.',
    number: '0800 5050',
    mobileShort: '*5050',
    free: true,
    hours: 'Consultar franja de atención y guardia en portal oficial INAU',
    badge: 'Asesoramiento y protección',
    type: 'phone',
    website: 'https://www.inau.gub.uy',
    lastVerified: '23/11/2026',
    details:
      'Orientación para familias y referentes adultos ante sospechas de grooming, maltrato, explotación o exposición de menores en línea.'
  },
  {
    name: 'Unidad de Cibercrimen — Ministerio del Interior',
    category: 'Denuncia penal',
    description:
      'Dependencia policial especializada en investigación de delitos informáticos, fraudes, suplantación de identidad, extorsión y delitos contra menores en entornos digitales.',
    number: '2030 4625',
    email: 'delitosinformaticos@minterior.gub.uy',
    hours: 'Atención administrativa y recepción de denuncias (también en línea y seccionales)',
    badge: 'Denuncia penal',
    type: 'police',
    website: 'https://denuncias.minterior.gub.uy',
    lastVerified: '23/11/2026',
    details:
      'Para radicar denuncias formales preservando las pruebas originales sin redistribuir material íntimo.'
  },
  {
    name: 'Fiscalía General de la Nación',
    category: 'Denuncia y persecución penal',
    description:
      'Organismo encargado de dirigir la investigación penal ante delitos tipificados, incluyendo difusión no consentida de imágenes íntimas (Ley N.º 19.580 / Art. 272 ter CP) y ciberdelitos.',
    hours: 'Atención en sedes departamentales y derivación desde seccionales / 911',
    badge: 'Denuncia y tutela penal',
    type: 'justice',
    website: 'https://www.gub.uy/fiscalia-general-nacion',
    lastVerified: '23/11/2026',
    details:
      'Interviene en casos de violencia digital, sextorsión, amenazas y delitos informáticos que afecten a niños, niñas y adolescentes.'
  },
  {
    name: 'CERTuy — AGESIC',
    category: 'Asesoramiento técnico y respuesta a incidentes',
    description:
      'Centro Nacional de Respuesta a Incidentes de Seguridad Informática de Uruguay (AGESIC). Recibe reportes técnicos de incidentes, phishing y vulnerabilidades.',
    email: 'cert@cert.uy',
    number: '2901 0065',
    hours: 'Reporte técnico continuo vía correo y portal oficial',
    badge: 'Asesoramiento técnico',
    type: 'gov',
    website: 'https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/certuy',
    lastVerified: '23/11/2026',
    details:
      'Aporta guías de ciberseguridad, reporte de suplantación institucional (phishing) e incidentes de seguridad de la información.'
  },
  {
    name: 'Plan Ceibal · Seguridad y Ciudadanía Digital',
    category: 'Asesoramiento educativo',
    description:
      'Soporte técnico sobre dispositivos Ceibal y orientaciones educativas de ciudadanía digital para estudiantes, familias y docentes.',
    number: '0800 2342',
    mobileShort: '*2342',
    free: true,
    hours: 'Horarios publicados en el portal oficial de Ceibal',
    badge: 'Asesoramiento educativo',
    type: 'education',
    website: 'https://ceibal.edu.uy',
    lastVerified: '23/11/2026',
    details:
      'Consultas sobre plataformas educativas (CREA, Matific), seguridad de cuentas institucionales y recursos formativos.'
  }
];

export const pedagogicalIncidentProtocol = {
  title: 'Protocolo de actuación pedagógica ante incidentes digitales',
  subtitle:
    'Pautas de cuidado para docentes, adscriptos, equipos de dirección y familias frente a situaciones de exposición, acoso o difusión no consentida.',
  lastReviewed: '23/11/2026',
  criticalWarning:
    'Nunca pidas a estudiantes que envíen, reenvíen ni carguen en sitios web capturas de pantalla o imágenes íntimas o sensibles. Esta plataforma no solicita ni almacena evidencia.',
  steps: [
    {
      step: '1. No culpabilizar ni revictimizar',
      detail:
        'Escuchar con serenidad a quien pide ayuda. Quien confió o sufrió exposición en línea nunca es responsable de la difusión no consentida ni del engaño de un tercero.'
    },
    {
      step: '2. Detener la exposición sin destruir contexto',
      detail:
        'Cortar la circulación en chats o redes del centro sin pedir reenvíos masivos. Orientar para no responder provocaciones ni replicar el contenido.'
    },
    {
      step: '3. Registrar sin redistribuir material íntimo',
      detail:
        'Si se trata de material íntimo de menores de edad, está prohibido almacenarlo o reenviarlo por mensajería. Documentar fechas, cuentas involucradas y hechos de forma confidencial para autoridades competentes.'
    },
    {
      step: '4. Acudir al referente institucional y activar protocolos',
      detail:
        'Dar intervención inmediata a Dirección, Adscripción, Equipo Multidisciplinario o Referente de Convivencia del centro educativo (ANEP · DGEIP / DGES).'
    },
    {
      step: '5. Activar canales oficiales proporcionados',
      detail:
        'Según la gravedad, orientar a la familia hacia asesoramiento (Línea Azul INAU 0800 5050), denuncia formal (Unidad de Cibercrimen 2030 4625 / Fiscalía) o emergencia (911).'
    }
  ]
};

export const legalFramework = [
  {
    id: 'codicen1999',
    category: 'recomendaciones',
    categoryLabel: 'Disposición y orientación institucional (2026)',
    title: 'Resolución CODICEN N.º 1999/026, Acta N.º 25 (04/08/2026)',
    jurisdiction: 'ANEP — Consejo Directivo Central (Nacional)',
    reviewDate: '23/11/2026',
    sourceUrl: 'https://www.anep.edu.uy',
    sourceLabel: 'ANEP · CODICEN (Acta N.º 25, 04/08/2026) y Anexo Grupo de Trabajo Ciudadanía Digital (06/07/2026)',
    summary:
      'Toma conocimiento del Informe del Grupo de Trabajo sobre Ciudadanía Digital (06/07/2026) y encomienda la elaboración de una propuesta de regulación general para su aplicación situada en los centros educativos. No establece por sí misma una prohibición general automática ni sustituye los acuerdos de cada centro.',
    keyPoints: [
      'Alcance preciso: toma conocimiento del informe técnico y encomienda proyectar una regulación general con criterios de aplicación situada según subsistema y contexto.',
      'Enfoque de derechos y autonomía progresiva: articula el cuidado de niñas, niños y adolescentes con la participación estudiantil, la formación docente y el diálogo con familias.',
      'No sustituye el reglamento de centro: las pautas concretas de uso o resguardo en cada escuela, liceo o UTU responden a las disposiciones vigentes de su subsistema y acuerdos institucionales.'
    ],
    entity: 'ANEP · CODICEN'
  },
  {
    id: 'estrategia2024',
    category: 'recomendaciones',
    categoryLabel: 'Estrategia y recomendaciones',
    title: 'Estrategia Nacional de Ciudadanía Digital 2024–2028',
    jurisdiction: 'AGESIC · Grupo de Trabajo Ciudadanía Digital',
    reviewDate: '23/11/2026',
    sourceUrl: 'https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/ciudadania-digital',
    sourceLabel: 'AGESIC · Estrategia de Ciudadanía Digital 2024–2028',
    summary:
      'Marco estratégico interinstitucional orientado a fortalecer el uso crítico, reflexivo, seguro, responsable y creativo de las tecnologías digitales en toda la sociedad.',
    keyPoints: [
      'Integra tres dimensiones: uso seguro y responsable, uso crítico y reflexivo, y participación creativa y ciudadana.',
      'Promueve articulación entre sistema educativo, familias y organismos de protección de derechos.',
      'Constituye una guía de orientación pública; no reemplaza leyes ni normativas internas de centro.'
    ],
    entity: 'AGESIC · Mesa de Ciudadanía Digital'
  },
  {
    id: 'ley18331',
    category: 'normas_vigentes',
    categoryLabel: 'Norma vigente (Ley nacional)',
    title: 'Ley N.º 18.331: Protección de Datos Personales y Habeas Data',
    jurisdiction: 'República Oriental del Uruguay (Nacional)',
    reviewDate: '23/11/2026',
    sourceUrl: 'https://www.impo.com.uy/bases/leyes/18331-2008',
    sourceLabel: 'IMPO · Texto actualizado Ley N.º 18.331',
    summary:
      'Regula la protección de datos personales como derecho humano fundamental, estableciendo reglas de consentimiento informado, finalidad y tutela especial para menores de edad.',
    keyPoints: [
      'Los datos personales e imágenes de niñas, niños y adolescentes cuentan con tutela reforzada.',
      'La recolección de datos de menores requiere autorización de sus representantes legales y finalidad legítima informada.',
      'En entornos escolares y familiares fundamenta el cuidado de fotografías, videos, listados y plataformas educativas.'
    ],
    entity: 'URCDP — AGESIC'
  },
  {
    id: 'cna',
    category: 'normas_vigentes',
    categoryLabel: 'Norma vigente (Código nacional)',
    title: 'Código de la Niñez y la Adolescencia (Ley N.º 17.823)',
    jurisdiction: 'República Oriental del Uruguay (Nacional)',
    reviewDate: '23/11/2026',
    sourceUrl: 'https://www.impo.com.uy/bases/codigo-ninez-adolescencia',
    sourceLabel: 'IMPO · Código de la Niñez y la Adolescencia',
    summary:
      'Consagra el interés superior de niñas, niños y adolescentes, el principio de autonomía progresiva y los deberes de cuidado, orientación y protección de los adultos responsables.',
    keyPoints: [
      'Autonomía progresiva: el acompañamiento adulto evoluciona gradualmente conforme a la edad, el desarrollo y la capacidad de ejercicio de derechos.',
      'El derecho a la intimidad coexiste con el deber adulto de orientación y resguardo frente a riesgos reales del entorno digital.',
      'A partir de los 13 años rige el sistema de responsabilidad penal adolescente ante conductas tipificadas como delito.'
    ],
    entity: 'Poder Judicial · INAU'
  },
  {
    id: 'ley19580',
    category: 'normas_vigentes',
    categoryLabel: 'Norma vigente (Ley penal y de protección)',
    title: 'Ley N.º 19.580 y Código Penal (Art. 272 ter)',
    jurisdiction: 'República Oriental del Uruguay (Nacional)',
    reviewDate: '23/11/2026',
    sourceUrl: 'https://www.impo.com.uy/bases/leyes/19580-2017',
    sourceLabel: 'IMPO · Ley N.º 19.580 y Código Penal Art. 272 ter',
    summary:
      'Sanciona la violencia basada en género y tipifica la divulgación o exhibición no consentida de imágenes o grabaciones de contenido íntimo.',
    keyPoints: [
      'Difundir, exhibir o compartir imágenes íntimas sin consentimiento expreso de la persona retratada constituye un delito grave.',
      'También abarca el hostigamiento digital y la extorsión mediante material íntimo (sextorsión).',
      'En el ámbito educativo obliga a cortar la cadena de difusión sin almacenar ni reenviar el material.'
    ],
    entity: 'Fiscalía General de la Nación · Poder Judicial'
  },
  {
    id: 'ley20252',
    category: 'normas_vigentes',
    categoryLabel: 'Norma vigente (Ley penal)',
    title: 'Ley N.º 20.252: Ciberdelitos en Uruguay',
    jurisdiction: 'República Oriental del Uruguay (Nacional)',
    reviewDate: '23/11/2026',
    sourceUrl: 'https://www.impo.com.uy/bases/leyes/20252-2024',
    sourceLabel: 'IMPO · Ley N.º 20.252 de Ciberdelitos',
    summary:
      'Incorpora y actualiza figuras penales vinculadas al acceso ilícito a sistemas, fraude informático, daño digital y suplantación en entornos electrónicos.',
    keyPoints: [
      'Sanciona el acceso no autorizado a cuentas, correos o dispositivos mediante engaño o robo de credenciales.',
      'Brinda marco específico para investigar estafas digitales, suplantación de identidad y ataques informáticos.'
    ],
    entity: 'Ministerio del Interior · Fiscalía · Poder Judicial'
  },
  {
    id: 'acuerdos_centro',
    category: 'acuerdos_institucionales',
    categoryLabel: 'Acuerdos institucionales situados',
    title: 'Disposiciones de DGEIP / DGES y Acuerdos de Convivencia de Centro',
    jurisdiction: 'Cada centro educativo (Primaria, Secundaria, UTU)',
    reviewDate: '23/11/2026',
    sourceUrl: 'https://www.anep.edu.uy',
    sourceLabel: 'ANEP · DGEIP / DGES · Proyectos Educativos de Centro',
    summary:
      'Cada escuela, liceo o escuela técnica define su encuadre situado de convivencia conforme a las orientaciones de su Dirección General (DGEIP, DGES o DGETP) y acuerdos participativos.',
    keyPoints: [
      'En Primaria (DGEIP) prevalece la mediación adulta directa y el trabajo conjunto con familias sobre el uso de dispositivos.',
      'En Secundaria (DGES) y UTU los acuerdos de aula complementan —pero nunca reemplazan— el reglamento de convivencia y los estatutos vigentes del centro.',
      'Este artefacto educativo («Habitar lo digital») ofrece insumos pedagógicos de apoyo y no constituye normativa oficial vinculante.'
    ],
    entity: 'DGEIP · DGES · Comunidades Educativas'
  }
];

export const aristas2025Data = {
  title: 'Evidencia nacional: Aristas Media 2025 (INEEd, 2026)',
  sourceFull:
    'INEEd (2026). Aristas 2025. Informe de resultados de noveno de educación media. Capítulo 5: Uso de celulares y convivencia digital, pp. 132–140.',
  sourceUrl:
    'https://www.ineed.edu.uy/images/Aristas/Publicaciones/Aristas2025/Aristas-Media-2025-Informe-de-resultados.pdf',
  population: 'Estudiantes de 9.º año de educación media en Uruguay y adscriptos de los centros participantes (relevamiento 2025).',
  methodologicalNote:
    'Aviso metodológico: los datos describen percepciones y reportes de estudiantes y adscriptos en 9.º grado de educación media durante 2025. No demuestran por sí solos una relación causal directa de que el uso del celular haya causado variaciones en los resultados de pruebas estandarizadas.',
  indicators: [
    {
      value: '83,3 %',
      informant: 'Estudiantes (9.º grado)',
      label: 'Indica que otros estudiantes revisan el celular durante la clase.',
      denominatorNote: 'Porcentaje de estudiantes consultados sobre frecuencia observada en sus aulas.'
    },
    {
      value: '79,6 %',
      informant: 'Adscriptos',
      label: 'Señala que el uso no académico del celular afecta bastante o mucho las clases.',
      denominatorNote: 'Porcentaje sobre el total de adscriptos respondientes en centros de educación media.'
    },
    {
      value: '65,8 %',
      informant: 'Estudiantes (9.º grado)',
      label: 'Reporta que las distracciones por celulares afectan las clases muchas veces o siempre.',
      denominatorNote: 'Porcentaje sobre estudiantes encuestados en la cohorte de 9.º año.'
    },
    {
      value: '52,2 %',
      informant: 'Adscriptos',
      label: 'Indica que los estudiantes asisten a centros con un acuerdo o reglamento formal sobre uso de celulares.',
      denominatorNote: 'Estimación ponderada a nivel de matrícula de centros con normativa formal declarada.'
    },
    {
      value: '47,0 %',
      informant: 'Adscriptos',
      label: 'Indica que los estudiantes asisten a centros donde se realizan talleres específicos sobre el tema.',
      denominatorNote: 'Brecha formativa que fundamenta el despliegue de kits territoriales para POITE y DGEIP.'
    }
  ]
};
