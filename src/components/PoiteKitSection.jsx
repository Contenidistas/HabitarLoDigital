import React, { useState } from 'react';
import { POITE_KIT, FORMATIVE_RUBRIC, PLATFORM_META } from '../data/platformData';
import {
  Briefcase,
  Presentation,
  Printer,
  Copy,
  Check,
  Clock,
  CheckCircle2,
  WifiOff,
  MessageSquare,
  BookOpen,
  ClipboardCheck
} from 'lucide-react';

export default function PoiteKitSection({ onOpenWorkshopMode, onNavigateTab }) {
  const [selectedDuration, setSelectedDuration] = useState(POITE_KIT.durations[0].id);
  const [copiedScript, setCopiedScript] = useState(false);

  const currentPlan =
    POITE_KIT.durations.find((d) => d.id === selectedDuration) || POITE_KIT.durations[0];

  const handleCopyKit = () => {
    const text = `KIT TERRITORIAL POITE · SECUNDARIA (${currentPlan.label})
Plataforma: ${PLATFORM_META.brandName} · ${PLATFORM_META.author} (${PLATFORM_META.framework})

PREPARACIÓN PREVIA:
${POITE_KIT.preparationChecklist.map((p, i) => `${i + 1}. ${p}`).join('\n')}

SECUENCIA DEL TALLER:
${currentPlan.blocks.map((b) => `[${b.time}] ${b.phase}\n${b.detail}`).join('\n\n')}

ACTIVIDAD SIN CONEXIÓN:
${POITE_KIT.offlineActivity.title}
${POITE_KIT.offlineActivity.steps.map((s, i) => `${i + 1}. ${s}`).join('\n')}

ARTICULACIÓN INTERDISCIPLINARIA:
${POITE_KIT.interdisciplinaryLinks.map((l) => `- ${l}`).join('\n')}`;

    navigator.clipboard.writeText(text);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2500);
  };

  return (
    <section className="py-10 sm:py-14 bg-white border-b border-slate-200" id="kit-poite">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-6 border-b border-slate-200">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Kit Territorial Secundaria</span>
            </div>
            <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {POITE_KIT.roleTitle}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {POITE_KIT.subtitle}. Pensado para articular con equipos educativos, adscripción y otras asignaturas más allá de la clase de Informática.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0 no-print">
            {onOpenWorkshopMode && (
              <button
                type="button"
                onClick={onOpenWorkshopMode}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-sm cursor-pointer"
              >
                <Presentation className="w-4 h-4 text-amber-400" />
                <span>Abrir Modo Proyector</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs font-bold cursor-pointer"
            >
              <Printer className="w-4 h-4 text-indigo-600" />
              <span>Imprimir ficha A4</span>
            </button>
            <button
              type="button"
              onClick={handleCopyKit}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold cursor-pointer"
            >
              {copiedScript ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedScript ? 'Guion copiado' : 'Copiar guion'}</span>
            </button>
          </div>
        </div>

        {/* Duration Selector & Timeline */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-heading text-lg sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              <Clock className="w-5 h-5 text-indigo-600" />
              <span>Estructura del taller lista para facilitar</span>
            </h2>
            <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 no-print">
              {POITE_KIT.durations.map((dur) => (
                <button
                  type="button"
                  key={dur.id}
                  onClick={() => setSelectedDuration(dur.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedDuration === dur.id
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {dur.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentPlan.blocks.map((b, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-indigo-100 text-indigo-900 font-mono text-xs font-bold">
                  {b.time}
                </span>
                <h3 className="font-heading font-bold text-base text-slate-900">{b.phase}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{b.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Preparation + Offline Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4">
            <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Preparación y articulación en el liceo</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              {POITE_KIT.preparationChecklist.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="font-bold text-indigo-600">{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-3 border-t border-slate-100 space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-800 block">
                Articulación con otras áreas (no solo Informática)
              </span>
              {POITE_KIT.interdisciplinaryLinks.map((link, i) => (
                <p key={i} className="text-xs text-slate-600">• {link}</p>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <WifiOff className="w-4 h-4" />
              <span>Plan B garantizado sin conectividad</span>
            </div>
            <h3 className="font-heading font-bold text-base sm:text-lg">{POITE_KIT.offlineActivity.title}</h3>
            <ol className="space-y-2.5 text-xs sm:text-sm text-slate-200">
              {POITE_KIT.offlineActivity.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <div className="pt-2 flex flex-wrap gap-2 no-print">
              <button
                type="button"
                onClick={() => onNavigateTab('estudiantes')}
                className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold cursor-pointer"
              >
                Abrir los 8 casos dilemáticos
              </button>
              <button
                type="button"
                onClick={() => onNavigateTab('documentos')}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 cursor-pointer"
              >
                Descargar PDFs de apoyo
              </button>
            </div>
          </div>
        </div>

        {/* Anticipated Responses */}
        <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-6 space-y-4">
          <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-amber-700" />
            <span>Anticipación de respuestas frecuentes en sala</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {POITE_KIT.anticipatedResponses.map((ar, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 border border-amber-200/80 space-y-2">
                <p className="text-xs font-bold text-slate-900 italic">{ar.studentSays}</p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong className="text-amber-800">Mediación sugerida:</strong> {ar.facilitatorReply}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Rubric */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 flex items-center gap-2">
              <ClipboardCheck className="w-5 h-5 text-indigo-600" />
              <span>{FORMATIVE_RUBRIC.title}</span>
            </h3>
            <span className="text-xs text-slate-500">Sin datos personales obligatorios</span>
          </div>
          <p className="text-xs text-slate-600">{FORMATIVE_RUBRIC.purpose}</p>
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
      </div>
    </section>
  );
}
