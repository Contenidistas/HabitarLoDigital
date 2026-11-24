import React, { useState } from 'react';
import { teacherGuidelines, classroomActivities, parentWorkshopAgenda } from '../data/teacherResources';
import { AGE_TRACKS, EDUCATOR_ITINERARY, FORMATIVE_RUBRIC, PLATFORM_META } from '../data/platformData';
import ProtocolSection from './ProtocolSection';
import {
  GraduationCap,
  Copy,
  Check,
  Clock,
  Calendar,
  Presentation,
  ClipboardList,
  BookOpen,
  ClipboardCheck,
  Users,
  ArrowRight
} from 'lucide-react';

export default function TeachersSection({ onOpenWorkshopMode, onNavigateTab }) {
  const [copiedWorkshop, setCopiedWorkshop] = useState(false);
  const [copiedActivityId, setCopiedActivityId] = useState(null);

  const handleCopyWorkshop = () => {
    const text = `TALLER PARA FAMILIAS Y COMUNIDADES: "${parentWorkshopAgenda.title.toUpperCase()}"
Duración: ${parentWorkshopAgenda.duration}
Público objetivo: ${parentWorkshopAgenda.target}

OBJETIVOS:
${parentWorkshopAgenda.goals.map((g, i) => `${i + 1}. ${g}`).join('\n')}

ESTRUCTURA DEL TALLER:
${parentWorkshopAgenda.modules.map((m) => `[${m.time}] ${m.name}\n${m.activity}`).join('\n\n')}

Canales en Uruguay: Línea Azul INAU (0800 5050 / *5050), Cibercrimen (2030 4625) y Emergencias (911).
Recurso: ${PLATFORM_META.brandName} · ${PLATFORM_META.author} (${PLATFORM_META.framework}).`;

    navigator.clipboard.writeText(text);
    setCopiedWorkshop(true);
    setTimeout(() => setCopiedWorkshop(false), 2500);
  };

  const handleCopyActivity = (act) => {
    const text = `${act.title.toUpperCase()}
Nivel sugerido: ${act.level}
Duración: ${act.duration}
Objetivo: ${act.goal}

PASO A PASO EN EL AULA:
${act.steps.map((s, idx) => `${idx + 1}. ${s}`).join('\n')}

Recurso de ${PLATFORM_META.brandName} (${PLATFORM_META.author} · ${PLATFORM_META.framework}).`;

    navigator.clipboard.writeText(text);
    setCopiedActivityId(act.id);
    setTimeout(() => setCopiedActivityId(null), 2500);
  };

  return (
    <section className="py-10 sm:py-14 bg-white border-b border-slate-200" id="seccion-docentes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto no-print space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-purple-700" aria-hidden="true" />
            <span>Recorrido Docentes y Centros Educativos</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Secuencias, rúbricas, acuerdos dialogados y formación de referentes
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Herramientas situadas para trabajar convivencia y ciudadanía digital en el aula sin sustituir las normativas de centro. Podés acceder también a los kits específicos para{' '}
            <button
              type="button"
              onClick={() => onNavigateTab('poite')}
              className="text-indigo-700 font-bold underline cursor-pointer"
            >
              POITE (Secundaria)
            </button>{' '}
            y{' '}
            <button
              type="button"
              onClick={() => onNavigateTab('dgeip')}
              className="text-amber-800 font-bold underline cursor-pointer"
            >
              Contenidistas DGEIP (Primaria)
            </button>
            .
          </p>
        </div>

        {/* 4 Institutional Guidelines Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 no-print">
          {teacherGuidelines.map((guide, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 inline-block mb-3">
                  {guide.badge}
                </span>
                <h2 className="font-heading font-bold text-base sm:text-lg text-slate-900 mb-2">
                  {guide.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{guide.content}</p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-200/70 text-[11px] text-slate-500 font-medium flex items-center justify-between">
                <span>Orientación pedagógica · {PLATFORM_META.brandName}</span>
                <span className="text-purple-700 font-bold">Criterio #{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Age Tracks Reference (P1-02) */}
        <div className="space-y-4 no-print">
          <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-600" />
            <span>Referencias por tramo etario y educativo</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {AGE_TRACKS.map((track) => (
              <div key={track.id} className="bg-white rounded-2xl p-4 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-800">
                    {track.subsistema}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500">{track.focusBadge}</span>
                </div>
                <h3 className="font-heading font-bold text-sm text-slate-900">{track.tramo}</h3>
                <ul className="text-xs text-slate-600 space-y-1">
                  {track.objectives.map((o, idx) => (
                    <li key={idx}>• {o}</li>
                  ))}
                </ul>
                <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                  <strong>Ajuste:</strong> {track.contextAdjustment}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Classroom Ready-to-Use Activities */}
        <div className="space-y-5 no-print">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 flex items-center gap-1.5">
                <ClipboardList className="w-4 h-4" />
                Propuestas didácticas para trabajar con estudiantes
              </span>
              <h2 className="font-heading text-xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Dinámicas listas para aplicar en clase o tutoría
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigateTab('estudiantes')}
              className="inline-flex items-center gap-1 text-xs font-bold text-indigo-700 hover:underline cursor-pointer"
            >
              <span>Ver los 5 ejes y 8 casos interactivos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {classroomActivities.map((act) => {
              const isCopied = copiedActivityId === act.id;
              return (
                <div
                  key={act.id}
                  className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 flex flex-col justify-between space-y-5 hover:border-indigo-300 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[11px] font-bold">
                        {act.level}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-mono font-bold text-slate-500 shrink-0">
                        <Clock className="w-3.5 h-3.5 text-indigo-500" />
                        {act.duration}
                      </span>
                    </div>
                    <h3 className="font-heading font-extrabold text-base sm:text-lg text-slate-900 leading-snug">
                      {act.title}
                    </h3>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700">
                      <strong className="text-slate-900 block mb-0.5">Objetivo pedagógico:</strong>
                      {act.goal}
                    </div>
                    <div className="space-y-2">
                      {act.steps.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                          <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                            {sIdx + 1}
                          </span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopyActivity(act)}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50 text-xs font-bold text-slate-700 hover:text-indigo-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700">¡Planificación copiada!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar secuencia</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Formative Dilemma Rubric (P1-13) */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-heading text-lg sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              <ClipboardCheck className="w-5 h-5 text-indigo-600" />
              <span>{FORMATIVE_RUBRIC.title}</span>
            </h2>
            <span className="text-xs font-semibold text-slate-600">Uso grupal en papel · Sin datos personales</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">{FORMATIVE_RUBRIC.purpose}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-2.5 rounded-tl-lg">Criterio</th>
                  <th className="p-2.5">Inicio</th>
                  <th className="p-2.5">En desarrollo</th>
                  <th className="p-2.5 rounded-tr-lg">Consolidado</th>
                </tr>
              </thead>
              <tbody>
                {FORMATIVE_RUBRIC.criteria.map((c, idx) => (
                  <tr key={idx} className="border-b border-slate-200 bg-white">
                    <td className="p-2.5 font-bold text-slate-900">{c.dimension}</td>
                    <td className="p-2.5 text-slate-600">{c.incipiente}</td>
                    <td className="p-2.5 text-slate-700">{c.enDesarrollo}</td>
                    <td className="p-2.5 text-emerald-900 font-medium">{c.logrado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Referent Training Itinerary (P1-12) */}
        <div className="bg-indigo-50/50 border border-indigo-200 rounded-3xl p-6 sm:p-8 space-y-5 no-print">
          <div className="space-y-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-700 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>Formación de referentes · POITE y Contenidistas DGEIP</span>
            </span>
            <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900">
              {EDUCATOR_ITINERARY.title}
            </h2>
            <p className="text-xs text-slate-600">{EDUCATOR_ITINERARY.disclaimer}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {EDUCATOR_ITINERARY.modules.map((mod, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-4 border border-indigo-100 space-y-1.5">
                <span className="text-[11px] font-mono font-bold text-indigo-700">{mod.time}</span>
                <h3 className="font-heading font-bold text-sm text-slate-900">{mod.step}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{mod.content}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
            {EDUCATOR_ITINERARY.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 border border-slate-200 space-y-1">
                <h4 className="font-bold text-xs text-slate-900">{faq.q}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Participative Classroom Agreement */}
        <div className="pt-2 border-t border-slate-200">
          <ProtocolSection initialMode="aula" />
        </div>

        {/* Workshop Blueprint */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 space-y-6 no-print">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-indigo-300 text-xs font-extrabold uppercase tracking-wider mb-1">
                <Calendar className="w-4 h-4" />
                <span>Guion para encuentro con familias</span>
              </div>
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                {parentWorkshopAgenda.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">{parentWorkshopAgenda.target}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {onOpenWorkshopMode && (
                <button
                  type="button"
                  onClick={onOpenWorkshopMode}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-extrabold cursor-pointer"
                >
                  <Presentation className="w-4 h-4" />
                  <span>Abrir Modo Proyector</span>
                </button>
              )}
              <button
                type="button"
                onClick={handleCopyWorkshop}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold cursor-pointer"
              >
                {copiedWorkshop ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                <span>{copiedWorkshop ? '¡Guion copiado!' : 'Copiar guion'}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {parentWorkshopAgenda.modules.map((mod, idx) => (
              <div key={idx} className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-1.5">
                <span className="text-xs font-mono font-bold text-amber-300">{mod.time}</span>
                <h3 className="font-heading font-bold text-sm text-white">{mod.name}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{mod.activity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
