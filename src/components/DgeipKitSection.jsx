import React, { useState } from 'react';
import { DGEIP_KIT, PLATFORM_META } from '../data/platformData';
import {
  BookOpenCheck,
  Printer,
  Copy,
  Check,
  Sparkles,
  Users,
  Info,
  HeartHandshake
} from 'lucide-react';

export default function DgeipKitSection({ onNavigateTab }) {
  const [selectedTramoId, setSelectedTramoId] = useState(DGEIP_KIT.tramos[2].id);
  const [copiedId, setCopiedId] = useState(null);

  const currentTramo =
    DGEIP_KIT.tramos.find((t) => t.id === selectedTramoId) || DGEIP_KIT.tramos[0];

  const handleCopyTramo = (tramo) => {
    const text = `KIT TERRITORIAL PRIMARIA · CONTENIDISTAS URUGUAY EDUCA (DGEIP)
Tramo: ${tramo.label} (${tramo.duration})
Enfoque: ${tramo.languageNote}

SECUENCIA SUGERIDA:
${tramo.sequence.map((s, i) => `${i + 1}. ${s}`).join('\n')}

PRODUCCIÓN CREATIVA:
${tramo.creativeProduct}

Recurso: ${PLATFORM_META.brandName} · ${PLATFORM_META.author} (${PLATFORM_META.framework}).`;

    navigator.clipboard.writeText(text);
    setCopiedId(tramo.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section className="py-10 sm:py-14 bg-white border-b border-slate-200" id="kit-dgeip">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-6 border-b border-slate-200">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <BookOpenCheck className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Kit Territorial Primaria · DGEIP</span>
            </div>
            <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {DGEIP_KIT.roleTitle}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{DGEIP_KIT.subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-2 shrink-0 no-print">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold cursor-pointer"
            >
              <Printer className="w-4 h-4 text-amber-300" />
              <span>Imprimir ficha A4</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigateTab('documentos')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-xs font-bold cursor-pointer"
            >
              <span>Ver documentos DGEIP / Ceibal</span>
            </button>
          </div>
        </div>

        {/* Execution Scope Note (P1-06) */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 flex items-start gap-3">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p>{DGEIP_KIT.noteOnExecution}</p>
        </div>

        {/* Tramo Selector */}
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-2 no-print" role="tablist" aria-label="Tramos de Primaria">
            {DGEIP_KIT.tramos.map((t) => {
              const isSelected = t.id === currentTramo.id;
              return (
                <button
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  key={t.id}
                  onClick={() => setSelectedTramoId(t.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6" role="tabpanel">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                  {currentTramo.duration}
                </span>
                <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900">
                  Secuencia para {currentTramo.label}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">{currentTramo.languageNote}</p>
              </div>

              <button
                type="button"
                onClick={() => handleCopyTramo(currentTramo)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-300 hover:border-amber-400 text-xs font-bold text-slate-800 shrink-0 cursor-pointer no-print"
              >
                {copiedId === currentTramo.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copiedId === currentTramo.id ? 'Secuencia copiada' : 'Copiar secuencia'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentTramo.sequence.map((step, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-4 border border-slate-200 space-y-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-bold text-xs">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4 border border-indigo-200 space-y-1.5">
                <span className="text-xs font-bold text-indigo-800 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Producción creativa sugerida
                </span>
                <p className="text-xs sm:text-sm text-slate-700">{currentTramo.creativeProduct}</p>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-emerald-200 space-y-1.5">
                <span className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4" />
                  Articulación con adultos responsables
                </span>
                <p className="text-xs sm:text-sm text-slate-700">{DGEIP_KIT.familyMaterialsNote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
