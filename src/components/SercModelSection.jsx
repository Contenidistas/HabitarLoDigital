import React, { useState } from 'react';
import {
  Eye,
  BookOpen,
  Clock,
  MessageSquare,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Sparkles,
  Image as ImageIcon,
  Info
} from 'lucide-react';

export default function SercModelSection() {
  const [activePillar, setActivePillar] = useState('S');
  const [showOriginalBanner, setShowOriginalBanner] = useState(false);

  const pillars = [
    {
      id: 'S',
      letter: 'S',
      title: 'Supervisión',
      subtitle: 'Acompañar como adultos referentes con criterios claros y progresivos según la edad.',
      color: 'bg-red-600',
      icon: Eye,
      practicalTips: [
        'Establecer configuraciones de cuidado iniciales que evolucionen hacia mayor autonomía conforme crece el niño/a o adolescente.',
        'Revisar juntos periódicamente las aplicaciones instaladas, permisos de privacidad y juegos con chat.',
        'Supervisar de forma transparente y dialogada, evitando el espionaje a escondidas: las pautas se conversan.',
        'Configurar autorización adulta para descargas y compras en tiendas de aplicaciones.'
      ],
      uruguayContext:
        'En el marco del Código de la Niñez y la Adolescencia (Uruguay), la orientación y el cuidado adulto se articulan con el principio de autonomía progresiva.'
    },
    {
      id: 'E',
      letter: 'E',
      title: 'Educación',
      subtitle: 'Promover acciones formativas partiendo siempre del ejemplo cotidiano.',
      color: 'bg-purple-600',
      icon: BookOpen,
      practicalTips: [
        'Enseñar con el ejemplo: niñas, niños y adolescentes observan cómo gestionamos nuestras propias pantallas.',
        'Reservar momentos libres de dispositivos en comidas compartidas y encuentros cara a cara.',
        'Conversar sobre huella digital: lo que se sube a internet o a un estado de mensajería puede copiarse y permanecer.',
        'Interiorizarse con curiosidad sobre los juegos, plataformas o usos escolares en lugar de prohibir sin diálogo.'
      ],
      uruguayContext:
        'Alineado con la Estrategia Nacional de Ciudadanía Digital (AGESIC) y propuestas educativas de Uruguay Educa y Plan Ceibal.'
    },
    {
      id: 'R',
      letter: 'R',
      title: 'Regulación',
      subtitle: 'Cuidar el descanso, el contexto y la finalidad del uso de pantallas.',
      color: 'bg-amber-600',
      icon: Clock,
      practicalTips: [
        'Acordar horarios de corte antes de dormir adecuados a cada edad y rutina escolar o liceal.',
        'Programar el modo descanso automático para silenciar alertas nocturnas sin depender solo de la discusión diaria.',
        'Preferir que la recarga nocturna de dispositivos ocurra en espacios comunes (living o comedor) fuera del dormitorio.',
        'Valorar qué tipo de uso se realiza (crear, estudiar, comunicarse o consumo pasivo) y preservar juego físico, lectura y aire libre.'
      ],
      uruguayContext:
        'Pautas pediátricas generales sugieren pausar pantallas antes del descanso nocturno para cuidar la calidad del sueño; ante inquietudes específicas, consultar con el equipo de salud.'
    },
    {
      id: 'C',
      letter: 'C',
      title: 'Comunicación',
      subtitle: 'Sostener un diálogo periódico y seguro ante dudas, errores o incidentes.',
      color: 'bg-teal-600',
      icon: MessageSquare,
      practicalTips: [
        'Construir un canal de confianza donde pedir ayuda o equivocarse no derive en castigos sorpresivos ni pérdida automática del diálogo.',
        'Preguntar con interés genuino: «¿Qué viste hoy que te llamó la atención? ¿Algo te incomodó en un chat o juego?».',
        'Revisar juntos las condiciones de edad y privacidad de cada red social o plataforma (suelen situarse entre 13 y 14 años según servicio y jurisdicción).',
        'Recordar con claridad: «Si alguien te pide fotos, secretos o te incomoda, podés contarnos enseguida para acompañarte».'
      ],
      uruguayContext:
        'La confianza familiar y los referentes educativos son la barrera principal frente al grooming, el hostigamiento digital y la difusión no consentida.'
    }
  ];

  const currentPillarData = pillars.find((p) => p.id === activePillar) || pillars[0];

  return (
    <section className="py-10 sm:py-14 bg-white border-b border-slate-200" id="modelo-serc">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Pautas de acompañamiento familiar · S.E.R.C.</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Supervisión, Educación, Regulación y Comunicación (<span className="text-indigo-600">S.E.R.C.</span>)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Cuatro pautas de acompañamiento familiar organizadas en esta plataforma por el{' '}
            <strong>Prof. Esp. Santiago Hernández</strong> (revisión 2026) para orientar la convivencia digital sin prohibicionismo rígido ni desatención.
          </p>
        </div>

        {/* 4 Pillar Selector Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3" role="tablist" aria-label="Pautas S.E.R.C.">
          {pillars.map((pillar) => {
            const isSelected = activePillar === pillar.id;
            return (
              <button
                type="button"
                role="tab"
                aria-selected={isSelected}
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`text-left rounded-2xl p-4 transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-slate-50/70 text-slate-700 border-slate-200/90 hover:bg-slate-100/80 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <span
                    className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm ${
                      isSelected ? 'bg-white text-slate-900' : `${pillar.color} text-white`
                    }`}
                  >
                    {pillar.letter}
                  </span>
                  {isSelected && (
                    <span className="text-[10px] font-semibold text-emerald-300 bg-slate-800 px-2 py-0.5 rounded-full">
                      Seleccionada
                    </span>
                  )}
                </div>
                <h3 className={`font-heading font-bold text-sm leading-snug ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                  {pillar.title}
                </h3>
                <p className={`text-[11px] leading-snug mt-1 line-clamp-2 ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                  {pillar.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Content Box */}
        <div className="bg-slate-50/80 rounded-2xl border border-slate-200 p-5 sm:p-7 space-y-6" role="tabpanel">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded-lg ${currentPillarData.color} text-white text-xs font-bold flex items-center justify-center`}>
                  {currentPillarData.letter}
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900">
                  {currentPillarData.title}
                </h3>
              </div>
              <p className="text-xs text-slate-600 mt-1">{currentPillarData.subtitle}</p>
            </div>

            <button
              type="button"
              onClick={() => setShowOriginalBanner(!showOriginalBanner)}
              className="inline-flex items-center gap-1.5 text-xs text-slate-700 hover:text-slate-900 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-xs transition-colors self-start sm:self-auto cursor-pointer"
            >
              <ImageIcon className="w-3.5 h-3.5 text-indigo-600" />
              <span>{showOriginalBanner ? 'Ocultar esquema visual' : 'Ver esquema visual S.E.R.C.'}</span>
            </button>
          </div>

          {showOriginalBanner && (
            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-2">
              <img
                src={`${import.meta.env.BASE_URL}RESPOSABILIDAD.png`}
                alt="Afiche ilustrativo de las pautas Supervisión, Educación, Regulación y Comunicación (S.E.R.C.)"
                className="w-full max-h-80 object-contain rounded-lg mx-auto"
              />
              <p className="text-[11px] text-slate-500 text-center">
                Material gráfico de referencia de «Mi primer celular» integrado como pauta organizativa en Habitar lo digital (Prof. Esp. Santiago Hernández).
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Pautas cotidianas para casa</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentPillarData.practicalTips.map((tip, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-3.5 border border-slate-200 shadow-xs flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-800 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-normal">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between space-y-3 shadow-xs">
              <div>
                <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs uppercase tracking-wider mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Referencia en Uruguay</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{currentPillarData.uruguayContext}</p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500">
                <Info className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <span>Orientación general; no sustituye valoración profesional individual.</span>
              </div>
            </div>
          </div>

          {/* Golden Rule */}
          <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/80 text-amber-950">
            <div className="flex items-start gap-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <p className="text-xs leading-relaxed text-amber-950">
                <strong>Criterio de acompañamiento:</strong> «El ejemplo adulto cotidiano sostiene cualquier límite técnico. Conversar, acordar y acompañar protege más que prohibir sin explicación».
              </p>
            </div>
            <span className="text-[11px] font-semibold text-amber-900 bg-white px-2.5 py-1 rounded-md border border-amber-200 shrink-0">
              Pautas S.E.R.C. · EDyTIC
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
