// Casos y situaciones didácticas revisadas (P0-09, P0-10, P1-03, P1-04)
// Cubren los 5 ejes mínimos de contenido, con variantes para Primaria (5.º–6.º) y Secundaria (EBI 7.º–9.º),
// dilemas abiertos, derechos en juego y retroalimentación formativa sin calificar madurez.

export const caseStudies = [
  {
    id: 'notificaciones-clase',
    axisId: 'eje-b',
    axisLabel: 'Eje 2 · Bienestar, atención y descanso',
    title: 'Caso 1: Las notificaciones en clase',
    category: 'Atención, acuerdos y economía de la atención',
    badgeColor: 'bg-indigo-100 text-indigo-800',
    tramoPrimaria: '5.º y 6.º de Primaria: trabajar cuándo el sonido o vibración interrumpe un trabajo grupal o lectura compartida.',
    tramoSecundaria: 'EBI 7.º–9.º: analizar cómo las alertas continuas fragmentan la concentración y qué acuerdos cuidan al grupo.',
    situation:
      'Durante una actividad en parejas en clase, el teléfono guardado en la mochila de un compañero vibra diez veces seguidas por mensajes de un grupo ajeno al aula. El compañero lo saca «un segundo para ver si es urgente» y termina respondiendo tres audios mientras el resto del equipo queda esperando.',
    dilemma: '¿Qué respuesta promueve acuerdos justos sin transformar la clase en un conflicto personal?',
    openQuestions: [
      '¿Qué diferencia hay entre una comunicación urgente familiar y una alerta automática de una app o chat grupal?',
      '¿Cómo influyen las notificaciones en la atención de quien mira la pantalla y de quienes trabajan al lado?'
    ],
    rightsInPlay: 'Derecho a aprender en un ambiente cuidado, participación en acuerdos de aula y respeto por el tiempo compartido.',
    conversationStarter:
      '«No se trata de buscar culpables: todos nos distraemos cuando suena algo. ¿Qué acuerdo concreto podemos probar en el grupo para que las alertas no interrumpan el trabajo?»',
    options: [
      {
        id: 'a',
        label: 'Opción A: Exponer al compañero frente a toda la clase o retirarle el dispositivo sin explicación.',
        type: 'warning',
        evaluation: 'Poco formativa. Genera resistencia y no construye autorregulación.',
        feedback:
          'Convertir una distracción habitual en sanción pública rompe el clima de diálogo y suele derivar en ocultamiento en lugar de comprensión.',
        pedagogicalTip:
          'Los datos de Aristas 2025 muestran que la distracción en clase es un fenómeno colectivo; requiere acuerdos claros más que medidas aisladas.'
      },
      {
        id: 'b',
        label: 'Opción B: Ignorar la situación y aceptar que cada cual use el chat cuando quiera durante las tareas.',
        type: 'danger',
        evaluation: 'Descuida el encuadre colectivo de aprendizaje.',
        feedback:
          'Sin un encuadre acordado, el grupo pierde foco compartido y quienes desean concentrarse cargan solos con la interrupción.',
        pedagogicalTip:
          'Acordar momentos «sin notificaciones» (por ejemplo, modo No Molestar o silencio real durante consignas) cuida a todo el grupo.'
      },
      {
        id: 'c',
        label: 'Opción C: Recordar el acuerdo de clase, activar «No Molestar» durante la consigna y revisar cómo configurar notificaciones.',
        type: 'success',
        evaluation: 'Enfoque formativo y participativo.',
        feedback:
          'Separa la emergencia real (llamada familiar a través del centro o contacto autorizado) de las alertas secundarias, y traduce el problema en una mejora práctica para todos.',
        pedagogicalTip:
          'Articular acuerdos de aula con la configuración técnica (silenciar grupos no prioritarios) facilita cumplir lo pactado sin esfuerzo constante.'
      }
    ],
    uruguayContext:
      'En Uruguay, Aristas Media 2025 (INEEd, 2026) relevó que 65,8 % de estudiantes de 9.º grado percibe que las distracciones por celulares afectan muchas veces o siempre las clases. La Resolución CODICEN N.º 1999/026 encomienda avanzar hacia criterios situados por centro.'
  },
  {
    id: 'meme-ridiculiza',
    axisId: 'eje-c',
    axisLabel: 'Eje 3 · Convivencia, seguridad y ayuda',
    title: 'Caso 2: Un meme que ridiculiza en el grupo',
    category: 'Convivencia escolar y liceal',
    badgeColor: 'bg-purple-100 text-purple-800',
    tramoPrimaria: '5.º y 6.º de Primaria: distinguir una broma entre amigos que consienten de un sticker o meme que lastima.',
    tramoSecundaria: 'EBI 7.º–9.º: analizar el rol del espectador, la viralización en grupos de WhatsApp y la reparación.',
    situation:
      'En el grupo de mensajería de la clase empiezan a circular stickers y memes editados con la foto de un compañero que tropezó en el patio, acompañados de burlas. Quien te lo muestra no creó el meme, pero está en el chat y teme quedar aislado si pide que paren.',
    dilemma: '¿Cómo acompañar desde la familia o el centro educativo sin exponer a quien pidió ayuda?',
    openQuestions: [
      '¿Qué cambia entre reírse juntos de algo acordado y difundir una imagen de alguien sin su permiso?',
      '¿Qué puede hacer un compañero que no quiere ser cómplice pero tampoco quiere quedar expuesto?'
    ],
    rightsInPlay: 'Derecho a la integridad moral, a la propia imagen y a una convivencia libre de hostigamiento (Ley N.º 18.331 y protocolos ANEP).',
    conversationStarter:
      '«Gracias por contármelo. Que no hayas hecho el meme importa, y ahora podemos pensar cómo frenar la burla y cuidar a tu compañero sin dejarte solo frente al grupo.»',
    options: [
      {
        id: 'a',
        label: 'Opción A: «Salite del grupo, borrá todo y no te metas en problemas ajenos».',
        type: 'warning',
        evaluation: 'Naturaliza la indiferencia ante el hostigamiento.',
        feedback:
          'Aunque busca proteger al estudiante de represalias, deja sola a la persona agredida y refuerza el silencio del testigo.',
        pedagogicalTip:
          'Acompañar al estudiante para pasar de espectador silencioso a par solidario (con respaldo adulto) es clave en convivencia.'
      },
      {
        id: 'b',
        label: 'Opción B: Escribir inmediatamente con enojo al grupo de familias o estudiantes señalando responsables.',
        type: 'warning',
        evaluation: 'Escala el conflicto y puede exponer al estudiante que confió.',
        feedback:
          'Las intervenciones impulsivas en chats colectivos suelen activar defensas grupales y señalar al estudiante que avisó.',
        pedagogicalTip:
          'Canalizar la situación mediante referentes institucionales (maestra/o, adscripto, dirección o equipo multidisciplinario) protege a ambos estudiantes.'
      },
      {
        id: 'c',
        label: 'Opción C: Agradecer la confianza, no reenviar el meme, ofrecer apoyo privado al afectado y activar al referente del centro.',
        type: 'success',
        evaluation: 'Respuesta cuidada, restaurativa y segura.',
        feedback:
          'Corta la circulación sin replicar la imagen, protege la confidencialidad de quien avisó y permite que el centro aborde la convivencia grupal de forma restaurativa.',
        pedagogicalTip:
          'El protocolo institucional prioriza detener la exposición, cuidar a la víctima y trabajar el consentimiento de imagen con todo el grupo.'
      }
    ],
    uruguayContext:
      'Las guías de hostigamiento escolar de DGEIP y convivencia de DGES priorizan intervenciones educativas y restaurativas. La Ley N.º 18.331 protege la imagen personal como dato sujeto a consentimiento.'
  },
  {
    id: 'alguien-pidio-foto',
    axisId: 'eje-c',
    axisLabel: 'Eje 3 · Convivencia, seguridad y ayuda',
    title: 'Caso 3: Alguien pidió una foto y pidió secreto',
    category: 'Prevención de grooming y protección',
    badgeColor: 'bg-rose-100 text-rose-800',
    tramoPrimaria: '5.º y 6.º de Primaria: identificar perfiles desconocidos en juegos con chat (Roblox, Brawl Stars, etc.) y pedir ayuda sin miedo.',
    tramoSecundaria: 'EBI 7.º–9.º: reconocer estrategias de manipulación, chantaje o pedido de secreto y activar canales de denuncia.',
    situation:
      'Un estudiante de 11 años cuenta con angustia que una persona que conoció en un juego en línea le ofreció monedas virtuales a cambio de que envíe una foto personal por mensaje privado y le pidió «que no le diga nada a los adultos porque no entenderían».',
    dilemma: '¿Cuál es la actuación prioritaria para proteger al menor y cortar el riesgo?',
    openQuestions: [
      '¿Por qué el pedido de «mantener el secreto» frente a adultos de confianza es una señal de alerta central?',
      '¿Qué cuidado hay que tener con las pruebas digitales para no revictimizar ni borrar evidencias?'
    ],
    rightsInPlay: 'Derecho a la integridad física y psíquica, protección frente a explotación o abuso en línea (CNA, INAU).',
    conversationStarter:
      '«Hiciste muy bien en contármelo. Vos no hiciste nada malo: cuando alguien en internet pide fotos o pide secretos frente a tu familia, siempre es momento de pedir ayuda.»',
    options: [
      {
        id: 'a',
        label: 'Opción A: Retar al niño o niña y quitarle todo acceso al dispositivo como castigo.',
        type: 'danger',
        evaluation: 'Contraproducente: cierra la comunicación en futuras situaciones.',
        feedback:
          'Culpar o sancionar a quien pidió ayuda enseña a ocultar riesgos reales por temor al castigo.',
        pedagogicalTip:
          'La regla de cuidado: quien pide ayuda ante un contacto extraño recibe contención inmediata, nunca sanción.'
      },
      {
        id: 'b',
        label: 'Opción B: Contener sin culpabilizar, no reenviar nada por la web, preservar datos del perfil/chat y acudir a referentes e instituciones.',
        type: 'success',
        evaluation: 'Actuación protectora adecuada.',
        feedback:
          'Asegura contención emocional, evita que el agresor reciba alertas que le permitan borrar cuentas antes de una denuncia, y canaliza por Línea Azul INAU (0800 5050), Cibercrimen (2030 4625) o centro educativo.',
        pedagogicalTip:
          'Nunca pedir a estudiantes ni familias que suban capturas sensibles a sitios web públicos ni redistribuir imágenes.'
      },
      {
        id: 'c',
        label: 'Opción C: Responderle insultos al perfil desde la cuenta del menor para ahuyentarlo.',
        type: 'warning',
        evaluation: 'Riesgosa e ineficaz.',
        feedback:
          'Interactuar con el perfil puede escalar amenazas o alertar a la persona para que elimine rastros digitales antes de la intervención policial.',
        pedagogicalTip:
          'Frente a sospechas fundadas de grooming corresponde proteger al niño/a y recurrir a organismos especializados.'
      }
    ],
    uruguayContext:
      'En Uruguay podés recibir orientación confidencial en Línea Azul de INAU (0800 5050 / *5050) y radicar denuncia en la Unidad de Cibercrimen de la Policía Nacional (2030 4625 / denuncias.minterior.gub.uy) o ante Fiscalía.'
  },
  {
    id: 'recomendacion-infinita',
    axisId: 'eje-d',
    axisLabel: 'Eje 4 · Algoritmos, publicidad y atención',
    title: 'Caso 4: La recomendación infinita',
    category: 'Algoritmos y diseño persuasivo',
    badgeColor: 'bg-amber-100 text-amber-800',
    tramoPrimaria: '3.º–6.º de Primaria: notar cuándo un video termina y empieza otro automáticamente sin que lo hayamos elegido.',
    tramoSecundaria: 'EBI 7.º–9.º: analizar cómo funcionan los feeds algorítmicos, la publicidad encubierta y los sesgos de recomendación.',
    situation:
      'Un estudiante entra a mirar un tutorial corto de 2 minutos para una tarea o deporte. Al terminar, la plataforma reproduce automáticamente otro video llamativo, y luego otro similar cada vez más intenso. Cuarenta minutos después siente frustración porque no empezó lo que quería hacer.',
    dilemma: '¿Cómo ayudar a comprender que la dificultad para frenar no es solo «falta de voluntad»?',
    openQuestions: [
      '¿Qué pistas de diseño (autoplay, scroll infinito, miniaturas exageradas) buscan que sigamos mirando?',
      '¿Qué cambios concretos en la interfaz o en nuestros hábitos devuelven control al usuario?'
    ],
    rightsInPlay: 'Derecho a la información transparente, a la protección frente a prácticas comerciales persuasivas y al bienestar.',
    conversationStarter:
      '«Muchas apps están programadas para que no exista un punto de pausa natural. Probemos juntos desactivar la reproducción automática y ver cómo cambia la sensación.»',
    options: [
      {
        id: 'a',
        label: 'Opción A: Decirle que «no tiene fuerza de voluntad» y que su cerebro está «arruinado por la dopamina».',
        type: 'warning',
        evaluation: 'Explicación simplista y culpabilizante.',
        feedback:
          'Atribuir todo a etiquetas neurobiológicas simplistas responsabiliza al estudiante de sistemas diseñados por equipos enteros de ingeniería para retener atención.',
        pedagogicalTip:
          'Es más preciso y formativo explicar mecanismos concretos de diseño persuasivo (autoplay, recompensas variables, publicidad personalizada) y entrenar pausas.'
      },
      {
        id: 'b',
        label: 'Opción B: Analizar juntos cómo funciona el algoritmo, desactivar el autoplay y fijar un propósito claro antes de abrir la app.',
        type: 'success',
        evaluation: 'Alfabetización algorítmica práctica.',
        feedback:
          'Combina comprensión crítica del modelo de negocio (economía de la atención) con ajustes técnicos reales y planificación del propósito de uso.',
        pedagogicalTip:
          'Preguntar «¿Para qué abrí esta app y cuánto tiempo decidí dedicarle?» ayuda a pasar de consumo pasivo a decisión consciente.'
      },
      {
        id: 'c',
        label: 'Opción C: No hablar del tema porque todas las plataformas funcionan igual y no se puede cambiar nada.',
        type: 'danger',
        evaluation: 'Resignación pasiva.',
        feedback:
          'Omitir la reflexión crítica impide que niños y adolescentes reconozcan cómo la publicidad y los sesgos algorítmicos influyen en sus gustos y emociones.',
        pedagogicalTip:
          'Comprender el algoritmo empodera: permite curar lo que seguimos, usar búsquedas directas y elegir cuándo desconectar.'
      }
    ],
    uruguayContext:
      'La Estrategia Nacional de Ciudadanía Digital (AGESIC) incluye la comprensión crítica de algoritmos, economía de la atención y publicidad digital como competencias clave en primaria y media.'
  },
  {
    id: 'ia-inventa-fuente',
    axisId: 'eje-e',
    axisLabel: 'Eje 5 · Dispositivos e IA generativa',
    title: 'Caso 5: Una IA que inventa una fuente',
    category: 'Ciudadanía frente a IA generativa',
    badgeColor: 'bg-teal-100 text-teal-800',
    tramoPrimaria: '5.º y 6.º de Primaria: comparar una respuesta automática con un libro, portal educativo o docente.',
    tramoSecundaria: 'EBI 7.º–9.º: verificar citas, detectar alucinaciones de modelos generativos, cuidar datos personales y declarar usos.',
    situation:
      'Para un trabajo de Historia o Ciencias, un estudiante consulta un chatbot de inteligencia artificial generativa. La herramienta redacta un texto muy convincente e incluye el título de un supuesto libro y un enlace web que, al intentar abrirlo, no existe (es una referencia inventada o «alucinación»). Además, el estudiante estuvo a punto de pegar allí nombres completos de compañeros.',
    dilemma: '¿Cómo orientar un uso responsable, verificado y ético de la IA generativa?',
    openQuestions: [
      '¿Por qué una IA puede sonar segura y aun así inventar datos o bibliografía?',
      '¿Qué información personal o institucional nunca deberíamos ingresar en chats de IA públicos?'
    ],
    rightsInPlay: 'Integridad académica, derecho a información veraz y protección de datos personales (Ley N.º 18.331).',
    conversationStarter:
      '«La IA genera texto probable, no verifica la verdad por sí sola. Revisemos qué fuentes primarias reales respaldan esto y qué partes construiste con tu propio criterio.»',
    options: [
      {
        id: 'a',
        label: 'Opción A: Copiar el texto tal cual porque está bien escrito y nadie revisará los enlaces.',
        type: 'danger',
        evaluation: 'Compromete el aprendizaje y difunde errores.',
        feedback:
          'Entregar información no verificada reproduce datos falsos y anula la oportunidad de investigar y argumentar con criterio propio.',
        pedagogicalTip:
          'Toda cita o dato sugerido por una IA debe contrastarse con fuentes primarias confiables antes de incluirse.'
      },
      {
        id: 'b',
        label: 'Opción B: Prohibir cualquier consulta digital y volver solo a memorizar sin explicar por qué falla la IA.',
        type: 'warning',
        evaluation: 'Pierde la oportunidad de enseñar alfabetización en IA.',
        feedback:
          'Prohibir sin enseñar a contrastar deja a los estudiantes sin herramientas críticas cuando usen sistemas generativos fuera del aula.',
        pedagogicalTip:
          'La consigna clara diferencia cuándo se trabaja sin asistencia de IA y cuándo se permite usarla como apoyo declarado y verificado.'
      },
      {
        id: 'c',
        label: 'Opción C: Contrastar cada dato en fuentes primarias, evitar subir datos personales y transparentar cómo se usó la herramienta.',
        type: 'success',
        evaluation: 'Ciudadanía digital y rigor académico.',
        feedback:
          'Enseña que la IA es una herramienta probabilística (puede errar e inventar citas), resguarda datos personales de terceros y valora la autoría y reflexión del estudiante.',
        pedagogicalTip:
          'Proponer en clase una actividad de «cazar errores de IA» desarrolla pensamiento crítico mejor que prohibir.'
      }
    ],
    uruguayContext:
      'En Uruguay, Uruguay Educa, Plan Ceibal y AGESIC promueven el uso ético, transparente y crítico de la inteligencia artificial, resguardando siempre datos personales (Ley N.º 18.331) y autoría.'
  },
  {
    id: 'difusion-sin-consentimiento',
    axisId: 'eje-a',
    axisLabel: 'Eje 1 · Derechos e identidad digital',
    title: 'Caso 6: Reenvío de imagen íntima sin consentimiento',
    category: 'Derechos, privacidad y marco legal',
    badgeColor: 'bg-pink-100 text-pink-800',
    tramoPrimaria: '5.º y 6.º de Primaria: comprender el derecho a la propia imagen y por qué ninguna foto privada debe reenviarse.',
    tramoSecundaria: 'EBI 7.º–9.º: conocer la Ley N.º 19.580 / Art. 272 ter CP, cortar la cadena sin revictimizar y pedir apoyo adulto.',
    situation:
      'En un grupo de mensajería adolescente circula una fotografía íntima de una estudiante que había sido compartida en confianza y luego reenviada sin su permiso. Algunos participantes proponen guardarla «por si acaso» o seguir pasándola.',
    dilemma: '¿Qué orientación jurídica y de cuidado corresponde transmitir de inmediato?',
    openQuestions: [
      '¿Dónde recae la responsabilidad ética y legal cuando una foto privada se reenvía sin permiso?',
      '¿Por qué guardar o reenviar también vulnera derechos y puede constituir delito?'
    ],
    rightsInPlay: 'Derecho a la intimidad, dignidad, no revictimización y tutela penal frente a violencia digital (Ley N.º 19.580).',
    conversationStarter:
      '«La responsabilidad nunca es de quien confió; es de quien difunde sin permiso. Borrarla sin reenviarla y acompañar a quien fue afectada es cuidar derechos.»',
    options: [
      {
        id: 'a',
        label: 'Opción A: «Mientras vos no la hayas sacado, podés guardarla en el teléfono y no decir nada».',
        type: 'danger',
        evaluation: 'Grave error de cuidado y legal.',
        feedback:
          'Conservar o reenviar material íntimo sin consentimiento (y más aún involucrando menores de edad) agrava el daño y puede configurar delito.',
        pedagogicalTip:
          'Cortar la viralización significa eliminar el archivo de inmediato y jamás redistribuirlo.'
      },
      {
        id: 'b',
        label: 'Opción B: Eliminar de inmediato sin reenviar, recordar que difundir sin permiso es delito, acompañar a la persona afectada y acudir al centro/fiscalía.',
        type: 'success',
        evaluation: 'Respuesta ajustada a derechos y cuidado.',
        feedback:
          'Protege a la víctima sin culparla, frena la cadena de exposición, informa con claridad el marco legal uruguayo y activa acompañamiento adulto e institucional.',
        pedagogicalTip:
          'Si hay menores involucrados, el centro y las familias deben acudir a las autoridades competentes sin redistribuir ni almacenar imágenes íntimas.'
      },
      {
        id: 'c',
        label: 'Opción C: Borrarla pero decir que «eso pasa por sacarse fotos» y evitar ayudar a la compañera.',
        type: 'warning',
        evaluation: 'Revictimizante.',
        feedback:
          'Culpabilizar a la víctima desalienta que otros jóvenes pidan ayuda si sufren extorsión o exposición no consentida.',
        pedagogicalTip:
          'El foco educativo está siempre en el consentimiento y en la prohibición absoluta de difundir material íntimo ajeno.'
      }
    ],
    uruguayContext:
      'El Art. 272 ter del Código Penal y la Ley N.º 19.580 sancionan la divulgación no consentida de imágenes íntimas. La responsabilidad penal juvenil rige desde los 13 años (CNA).'
  },
  {
    id: 'sharenting-consentimiento',
    axisId: 'eje-a',
    axisLabel: 'Eje 1 · Derechos e identidad digital',
    title: 'Caso 7: Fotos familiares en redes y derecho a la imagen',
    category: 'Identidad digital y ejemplo adulto',
    badgeColor: 'bg-sky-100 text-sky-800',
    tramoPrimaria: '3.º–6.º de Primaria: reflexionar sobre el derecho de niñas y niños a opinar antes de que adultos publiquen sus fotos.',
    tramoSecundaria: 'EBI 7.º–9.º: debatir huella digital construida desde la infancia, privacidad y consentimiento recíproco.',
    situation:
      'Un adulto de la familia publica en una red social abierta una fotografía de un niño de 10 años en la playa o con el uniforme visible de su escuela, y el niño le pide con incomodidad que la borre porque le da vergüenza que la vean sus compañeros.',
    dilemma: '¿Cómo modelar el respeto al consentimiento y la huella digital desde el mundo adulto?',
    openQuestions: [
      '¿Qué riesgos de privacidad implica publicar uniformes escolares, ubicaciones o situaciones íntimas en perfiles abiertos?',
      '¿Cómo cambia el aprendizaje cuando un adulto escucha y respeta el «no» de un niño sobre su propia imagen?'
    ],
    rightsInPlay: 'Derecho a la propia imagen, a la privacidad y a ser escuchado (Convención sobre los Derechos del Niño, CNA, Ley N.º 18.331).',
    conversationStarter:
      '«Tenés derecho a decidir sobre tu imagen. La borro ahora mismo y de ahora en adelante te voy a preguntar antes de subir una foto tuya.»',
    options: [
      {
        id: 'a',
        label: 'Opción A: «Soy tu adulto responsable y en mi cuenta publico lo que quiero».',
        type: 'danger',
        evaluation: 'Contradice el aprendizaje del consentimiento.',
        feedback:
          'Exigirles que cuiden su privacidad mientras ignoramos su incomodidad debilita la coherencia educativa.',
        pedagogicalTip:
          'El ejemplo adulto enseña más que cualquier regla escrita: respetar su límite fortalece su criterio.'
      },
      {
        id: 'b',
        label: 'Opción B: Escuchar su pedido, retirar la publicación de inmediato y acordar consultar siempre antes de publicar.',
        type: 'success',
        evaluation: 'Modelado coherente de ciudadanía digital.',
        feedback:
          'Valida el derecho a la propia imagen, evita exponer datos identificatorios (escudo escolar, ubicación) y construye reciprocidad en el hogar.',
        pedagogicalTip:
          'Preferir álbumes familiares privados en lugar de perfiles abiertos protege la huella digital de niñas y niños.'
      },
      {
        id: 'c',
        label: 'Opción C: Dejar la foto publicada porque ya tiene muchos comentarios de familiares y prometer avisar la próxima vez.',
        type: 'warning',
        evaluation: 'Prioriza la validación en redes sobre el malestar del niño.',
        feedback:
          'Mantener la exposición cuando ya manifestó incomodidad muestra que las reacciones de terceros pesan más que su bienestar.',
        pedagogicalTip:
          'Retirar la foto a pedido demuestra respeto real y apertura al diálogo.'
      }
    ],
    uruguayContext:
      'La Ley N.º 18.331 protege especialmente los datos e imagen de menores de edad. AGESIC y UNICEF promueven buenas prácticas frente a la sobreexposición infantil (sharenting).'
  },
  {
    id: 'desinformacion-compras-juego',
    axisId: 'eje-d',
    axisLabel: 'Eje 4 · Algoritmos, publicidad y atención',
    title: 'Caso 8: Desinformación, retos y «monedas gratis» en juegos',
    category: 'Consumo digital y pensamiento crítico',
    badgeColor: 'bg-emerald-100 text-emerald-800',
    tramoPrimaria: '3.º–6.º de Primaria: distinguir publicidad, micropagos reales y promesas falsas («gemas gratis»).',
    tramoSecundaria: 'EBI 7.º–9.º: identificar estafas (phishing), patrones oscuros en videojuegos/apuestas y verificación de información.',
    situation:
      'En un videojuego o red social aparece una oferta relámpago de «monedas gratis» o un supuesto sorteo que pide ingresar datos de la cuenta o apretar un botón de pago vinculado al dispositivo familiar, generando un gasto inesperado o riesgo de robo de cuenta.',
    dilemma: '¿Cómo abordar juntos las trampas visuales, la economía digital y el cuidado de cuentas?',
    openQuestions: [
      '¿Qué señales nos ayudan a sospechar de sorteos urgentes, enlaces acortados o botones que simulan premios gratuitos?',
      '¿Qué medidas técnicas y de diálogo evitan compras accidentales o robo de cuentas?'
    ],
    rightsInPlay: 'Derecho a la información clara en el consumo digital y protección frente a fraudes informáticos.',
    conversationStarter:
      '«Estos juegos usan botones diseñados para confundir entre puntos ficticios y dinero real. Revisemos juntos cómo bloquear compras sin autorización y detectar enlaces falsos.»',
    options: [
      {
        id: 'a',
        label: 'Opción A: Pagar o resolver en silencio sin explicar qué pasó ni ajustar permisos.',
        type: 'warning',
        evaluation: 'Se pierde la instancia educativa y persiste la vulnerabilidad.',
        feedback:
          'Sin analizar el patrón engañoso ni configurar autenticación para compras, la situación puede repetirse.',
        pedagogicalTip:
          'Mostrar el vínculo entre dinero real y compras digitales ayuda a desarrollar criterio financiero.'
      },
      {
        id: 'b',
        label: 'Opción B: Exigir PIN/biometría para toda compra, revisar el patrón engañoso, enseñar verificación y activar doble factor.',
        type: 'success',
        evaluation: 'Respuesta preventiva y educativa.',
        feedback:
          'Protege las cuentas y la economía familiar (incluyendo bloqueo de SMS premium con operadoras), solicita reembolso si corresponde y enseña a desconfiar de ofertas «demasiado buenas».',
        pedagogicalTip:
          'Nunca entregar contraseñas ni códigos de verificación a supuestos sorteos o moderadores.'
      },
      {
        id: 'c',
        label: 'Opción C: Prohibir todo juego para siempre sin conversar sobre cómo funcionan los micropagos.',
        type: 'danger',
        evaluation: 'Prohibicionismo que no enseña a detectar engaños.',
        feedback:
          'No desarrolla pensamiento crítico frente a la publicidad engañosa o estafas digitales.',
        pedagogicalTip:
          'La alfabetización digital incluye leer términos básicos, cuidar credenciales y acordar reglas claras de gasto.'
      }
    ],
    uruguayContext:
      'En Uruguay, el Área de Defensa del Consumidor (MEF) y CERTuy (AGESIC) advierten sobre fraudes digitales y suscripciones no deseadas. Con operadoras locales (Antel, Claro, Movistar) se puede solicitar bloqueo de compras a terceros por SMS.'
  }
];
