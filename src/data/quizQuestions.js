// P1-08: Checklist de conversación familiar y autoobservación (sin validación psicométrica)
// Reemplaza el antiguo "Test de madurez digital" con puntaje determinista.
// Prioriza "qué hacemos, qué necesitamos, qué podemos acordar" antes o durante el acompañamiento.

export const conversationQuestions = [
  {
    id: 1,
    axis: 'Cuidado cotidiano',
    question: '¿Cómo organizamos hoy el cuidado de pertenencias y responsabilidades diarias en casa?',
    whyItMatters:
      'Conversar sobre cómo cuidamos mochilas, llaves, útiles o dispositivos compartidos ayuda a anticipar si hará falta acompañamiento extra con un equipo propio.',
    options: [
      {
        id: 'necesita_apoyo',
        text: 'Todavía precisa recordatorios frecuentes; conviene empezar con apoyos claros.',
        focusArea: 'Acordar rutinas simples de cuidado físico y lugar fijo de guardado antes de sumar un dispositivo propio.'
      },
      {
        id: 'en_proceso',
        text: 'A veces necesita guía, pero responde bien cuando hay pautas claras.',
        focusArea: 'Documentar en familia dónde se guarda, quién asume reparaciones y cómo se cuida el equipo.'
      },
      {
        id: 'consolidado',
        text: 'Mantiene rutinas constantes de orden y cuidado en sus tareas cotidianas.',
        focusArea: 'Mantener acuerdos explícitos y revisar juntos el uso responsable en salidas o traslados.'
      }
    ]
  },
  {
    id: 2,
    axis: 'Descanso y regulación',
    question: '¿Qué ocurre actualmente cuando llega la hora de cerrar pantallas, juegos o televisión?',
    whyItMatters:
      'Las transiciones entre juego digital y descanso o estudio suelen ser el principal foco de tensión familiar; anticiparlas con avisos previos reduce conflictos.',
    options: [
      {
        id: 'necesita_apoyo',
        text: 'Se generan discusiones intensas o cuesta mucho aceptar el corte.',
        focusArea: 'Priorizar avisos anticipados (5–10 minutos antes), horarios previsibles de descanso y carga fuera del dormitorio.'
      },
      {
        id: 'en_proceso',
        text: 'Negocia unos minutos más, pero logra cerrar con acompañamiento adulto.',
        focusArea: 'Usar temporizadores visibles o límites automáticos programados para que la regla no dependa solo de discutir en el momento.'
      },
      {
        id: 'consolidado',
        text: 'Acepta el horario acordado y alterna pantallas con otras actividades sin conflicto.',
        focusArea: 'Sostener espacios libres de pantallas compartidos por toda la familia (comidas y descanso nocturno).'
      }
    ]
  },
  {
    id: 3,
    axis: 'Vínculos y seguridad',
    question: '¿Hemos conversado sobre la diferencia entre contactos reales y perfiles desconocidos en internet?',
    whyItMatters:
      'En juegos en línea y mensajería no todas las cuentas pertenecen a pares reales; hablarlo antes prepara respuestas seguras ante pedidos extraños.',
    options: [
      {
        id: 'necesita_apoyo',
        text: 'Todavía no lo charlamos en detalle o suele aceptar contactos de juegos abiertos.',
        focusArea: 'Revisar juntos la privacidad de juegos/redes, desactivar chats abiertos con extraños y ver un corto disparador en familia.'
      },
      {
        id: 'en_proceso',
        text: 'Tiene una noción general, aunque a veces duda ante ofertas o mensajes llamativos.',
        focusArea: 'Practicar ejemplos concretos (pedidos de fotos, premios falsos, pedido de secreto) sin asustar.'
      },
      {
        id: 'consolidado',
        text: 'Identifica que no debe compartir datos, fotos ni ubicación con desconocidos.',
        focusArea: 'Reforzar que las normas de privacidad evolucionan y que siempre puede consultar ante cualquier duda.'
      }
    ]
  },
  {
    id: 4,
    axis: 'Confianza y ayuda',
    question: 'Si ve algo que lo/la incomoda, asusta o comete un error en línea, ¿siente confianza para contarlo?',
    whyItMatters:
      'El temor a perder el teléfono o recibir un reto suele llevar al ocultamiento; asegurar una escucha sin castigo sorpresivo protege mejor que cualquier filtro.',
    options: [
      {
        id: 'necesita_apoyo',
        text: 'Suele callar o esconder errores por miedo a que le saquen el dispositivo.',
        focusArea: 'Explicitar como compromiso adulto: «Si pedís ayuda ante algo incómodo o un error, vamos a acompañarte primero y no a castigar por contar».'
      },
      {
        id: 'en_proceso',
        text: 'A veces tarda en animarse, pero termina buscando apoyo en casa.',
        focusArea: 'Abrir conversaciones cotidianas breves sin interrogatorio («¿qué te llamó la atención hoy en internet?»).'
      },
      {
        id: 'consolidado',
        text: 'Existe un canal fluido para hablar de dudas, burlas o mensajes raros.',
        focusArea: 'Mantener ese canal abierto y recordar los teléfonos/referentes de ayuda (familia, centro educativo, 0800 5050).'
      }
    ]
  },
  {
    id: 5,
    axis: 'Finalidad y contexto',
    question: '¿Qué necesidad concreta motiva evaluar un dispositivo en este momento y qué alternativas existen?',
    whyItMatters:
      'Distinguir necesidad de coordinación (traslados, actividades) de presión de pares ayuda a elegir soluciones proporcionadas según la edad y contexto.',
    options: [
      {
        id: 'necesita_apoyo',
        text: 'Principalmente presión social («todos en el grupo tienen») sin necesidad real de traslado.',
        focusArea: 'Evaluar si alcanza por ahora con dispositivo familiar compartido en espacios comunes o teléfono básico sin acceso abierto.'
      },
      {
        id: 'en_proceso',
        text: 'Para entretenimiento o acceso escolar que podría resolverse con computadora o tablet familiar.',
        focusArea: 'Priorizar dispositivos de uso compartido en living/comedor antes que un smartphone de uso permanente.'
      },
      {
        id: 'consolidado',
        text: 'Comienza traslados autónomos (escuela, liceo, club) y necesitamos coordinar llegadas.',
        focusArea: 'Definir qué aplicaciones son realmente necesarias al inicio y configurar límites antes de entregarlo.'
      }
    ]
  },
  {
    id: 6,
    axis: 'Disponibilidad adulta',
    question: 'Como adultos responsables, ¿qué tiempo y pautas reales podemos sostener para acompañar este proceso?',
    whyItMatters:
      'Las herramientas técnicas ayudan, pero requieren presencia adulta, ejemplo cotidiano en casa y revisiones periódicas de lo acordado.',
    options: [
      {
        id: 'necesita_apoyo',
        text: 'Nos cuesta la configuración técnica o tenemos poco margen para acompañar hoy.',
        focusArea: 'Apoyarse en la guía paso a paso (Nivel 1, 10 minutos), en talleres del centro educativo o postergar la entrega hasta poder acompañar.'
      },
      {
        id: 'en_proceso',
        text: 'Podemos aprender lo básico y revisar juntos cada cierto tiempo.',
        focusArea: 'Empezar con 3 acuerdos simples (mesa sin pantallas, descanso nocturno y aprobación de descargas).'
      },
      {
        id: 'consolidado',
        text: 'Estamos dispuestos a configurar juntos, modelar hábitos adultos y revisar acuerdos.',
        focusArea: 'Construir el Acuerdo Familiar participativo y acordar una fecha de revisión conjunta en 2 o 3 meses.'
      }
    ]
  }
];

export const buildConversationSummary = (answersByQuestionId) => {
  const focusPoints = [];
  conversationQuestions.forEach((q) => {
    const selectedId = answersByQuestionId[q.id];
    const opt = q.options.find((o) => o.id === selectedId);
    if (opt) {
      focusPoints.push({
        axis: q.axis,
        level: opt.id,
        focusArea: opt.focusArea
      });
    }
  });

  const needsSupportCount = focusPoints.filter((f) => f.level === 'necesita_apoyo').length;

  return {
    answeredCount: focusPoints.length,
    totalCount: conversationQuestions.length,
    disclaimer:
      'Este checklist es una guía de conversación familiar sin validación psicométrica: no mide «madurez», no asigna edades universales ni reemplaza el criterio contextual de la familia o profesionales.',
    summaryHeadline:
      needsSupportCount >= 3
        ? 'Puntos prioritarios para conversar y fortalecer antes de ampliar autonomía'
        : needsSupportCount >= 1
        ? 'Aspectos clave para acordar en conjunto durante el acompañamiento'
        : 'Base favorable para sostener acuerdos familiares revisables',
    focusPoints
  };
};
