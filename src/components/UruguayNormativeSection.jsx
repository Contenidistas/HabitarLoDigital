import React, { useState } from 'react';
import {
  uruguayContacts,
  legalFramework,
  aristas2025Data,
  pedagogicalIncidentProtocol,
  NORMATIVE_LAST_VERIFIED
} from '../data/uruguayResources';
import {
  PhoneCall,
  ExternalLink,
  Scale,
  AlertTriangle,
  CheckCircle2,
  BarChart3,
  ShieldAlert,
  FolderDown,
  Video,
  Info
} from 'lucide-react';

export default function UruguayNormativeSection({ onNavigateTab }) {
  const [legalFilter, setLegalFilter] = useState('todos'); // 'todos' | 'normas_vigentes' | 'recomendaciones' | 'acuerdos_institucionales'
  const [activeLegalId, setActiveLegalId] = useState(legalFramework[0].id);

  const filteredLaws =
    legalFilter === 'todos'
      ? legalFramework
      : legalFramework.filter((l) => l.category === legalFilter);

  const currentLegal =
    filteredLaws.find((l) => l.id === activeLegalId) || filteredLaws[0] || legalFramework[0];

  return (
    <section className="py-10 sm:py-14 bg-slate-50 border-b border-slate-200" id="fuentes-normativa-ayuda">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Fuentes, evidencia nacional, normativa y ayuda</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Evidencia empírica, marco normativo y rutas de cuidado en Uruguay
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Última revisión documental y de canales: <strong>{NORMATIVE_LAST_VERIFIED}</strong>. Las afirmaciones distinguen expresamente evidencia empírica, normas vigentes, orientaciones institucionales y acuerdos de centro.
          </p>
        </div>

        {/* 1. P0-08: Aristas Media 2025 (INEEd, 2026) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-indigo-700">
                <BarChart3 className="w-4 h-4" />
                Evidencia empírica nacional (P0-08)
              </span>
              <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900">
                {aristas2025Data.title}
              </h2>
              <p className="text-xs text-slate-600">{aristas2025Data.population}</p>
            </div>

            <a
              href={aristas2025Data.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shrink-0"
            >
              <span>Ver informe INEEd (Cap. 5, pp. 132–140)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {aristas2025Data.indicators.map((ind, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 flex flex-col justify-between">
                <div className="space-y-1">
                  <span className="font-heading text-2xl sm:text-3xl font-black text-indigo-700 block">
                    {ind.value}
                  </span>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-900">
                    {ind.informant}
                  </span>
                  <p className="text-xs font-semibold text-slate-800 leading-snug pt-1">{ind.label}</p>
                </div>
                <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-200/80">
                  {ind.denominatorNote}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p><strong>{aristas2025Data.methodologicalNote}</strong></p>
              <p className="text-amber-900">Fuente completa: {aristas2025Data.sourceFull}</p>
            </div>
          </div>
        </div>

        {/* 2. P0-07: Normative Framework separated into Normas Vigentes / Recomendaciones / Acuerdos */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-700">
                Base normativa y límites del artefacto (P0-07)
              </span>
              <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
                Normas vigentes, disposiciones y acuerdos situados
              </h2>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'todos', label: 'Todas (7)' },
                { id: 'normas_vigentes', label: 'Normas vigentes' },
                { id: 'recomendaciones', label: 'Res. 1999/026 y Estrategia' },
                { id: 'acuerdos_institucionales', label: 'Acuerdos de centro' }
              ].map((cat) => (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => {
                    setLegalFilter(cat.id);
                    const first =
                      cat.id === 'todos'
                        ? legalFramework[0]
                        : legalFramework.find((l) => l.category === cat.id);
                    if (first) setActiveLegalId(first.id);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    legalFilter === cat.id
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {filteredLaws.map((law) => {
              const isSelected = currentLegal.id === law.id;
              return (
                <button
                  type="button"
                  key={law.id}
                  onClick={() => setActiveLegalId(law.id)}
                  className={`p-3 rounded-xl text-left border text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-950 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50'
                  }`}
                >
                  <span className="text-[10px] font-semibold uppercase text-indigo-700 block mb-0.5">
                    {law.categoryLabel}
                  </span>
                  <span className="block line-clamp-2">{law.title}</span>
                </button>
              );
            })}
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-indigo-700">
                  <Scale className="w-4 h-4" />
                  <span>{currentLegal.entity}</span>
                  <span>·</span>
                  <span>{currentLegal.jurisdiction}</span>
                </div>
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900">
                  {currentLegal.title}
                </h3>
              </div>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600">
                Revisado: {currentLegal.reviewDate}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{currentLegal.summary}</p>

            <div className="space-y-2">
              {currentLegal.keyPoints.map((pt, i) => (
                <div key={i} className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
              <span>Fuente primaria: {currentLegal.sourceLabel}</span>
              <a
                href={currentLegal.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-indigo-700 hover:underline"
              >
                <span>Consultar enlace oficial</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 3. P0-10: Pedagogical Incident Protocol */}
        <div className="bg-rose-50/70 border border-rose-200 rounded-3xl p-6 sm:p-8 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-rose-800">
                <ShieldAlert className="w-4 h-4" />
                Actuación pedagógica cuidada (P0-10)
              </span>
              <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
                {pedagogicalIncidentProtocol.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 mt-1">{pedagogicalIncidentProtocol.subtitle}</p>
            </div>
            <span className="text-xs font-semibold text-rose-900 bg-white px-3 py-1 rounded-full border border-rose-200 shrink-0 self-start">
              Verificado: {pedagogicalIncidentProtocol.lastReviewed}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900 text-white text-xs sm:text-sm flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p>{pedagogicalIncidentProtocol.criticalWarning}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {pedagogicalIncidentProtocol.steps.map((s, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-4 border border-rose-200/80 space-y-1.5">
                <h3 className="font-heading font-bold text-xs sm:text-sm text-rose-950">{s.step}</h3>
                <p className="text-xs text-slate-700 leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. P0-10: Verified Help & Reporting Directory */}
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 flex items-center gap-2">
                <PhoneCall className="w-5 h-5 text-red-700" />
                <span>Directorio oficial: asesoramiento, denuncia y emergencias</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Distinción explícita según el tipo de intervención requerida. Última verificación: {NORMATIVE_LAST_VERIFIED}.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {uruguayContacts.map((contact, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-900 border border-indigo-200">
                      {contact.badge}
                    </span>
                    {contact.free && (
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        Llamada gratuita
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-base text-slate-900">{contact.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{contact.description}</p>
                  <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-600">
                    <p><strong>Horario / alcance:</strong> {contact.hours}</p>
                    <p>{contact.details}</p>
                    <p className="text-slate-400">Verificado: {contact.lastVerified}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                  {contact.number && (
                    <a
                      href={`tel:${contact.number.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-red-400" />
                      <span>{contact.number}</span>
                      {contact.mobileShort && <span className="opacity-75">({contact.mobileShort})</span>}
                    </a>
                  )}
                  {contact.website && (
                    <a
                      href={contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-indigo-700 hover:underline ml-auto"
                    >
                      <span>Sitio oficial</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Links to PDFs & Videos */}
        {onNavigateTab && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => onNavigateTab('documentos')}
              className="text-left p-5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 flex items-center justify-between gap-3 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <FolderDown className="w-6 h-6 text-indigo-600 shrink-0" />
                <div>
                  <span className="font-heading font-bold text-sm text-slate-900 block">
                    Biblioteca de documentos oficiales en PDF
                  </span>
                  <span className="text-xs text-slate-600">
                    Guías de ANEP, DGEIP, AGESIC, URCDP, Ceibal, UNICEF y UNESCO
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-indigo-600 shrink-0" />
            </button>

            <button
              type="button"
              onClick={() => onNavigateTab('videos')}
              className="text-left p-5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 flex items-center justify-between gap-3 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Video className="w-6 h-6 text-indigo-600 shrink-0" />
                <div>
                  <span className="font-heading font-bold text-sm text-slate-900 block">
                    Videoteca educativa para talleres y familias
                  </span>
                  <span className="text-xs text-slate-600">
                    Cortometrajes y recursos audiovisuales con consignas de debate
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-indigo-600 shrink-0" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
