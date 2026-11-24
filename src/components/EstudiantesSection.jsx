import React, { useState } from 'react';
import { FIVE_AXES, AGE_TRACKS } from '../data/platformData';
import InteractiveCasesSection from './InteractiveCasesSection';
import {
  Users,
  BookOpen,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Video,
  CheckCircle2,
  Layers
} from 'lucide-react';

export default function EstudiantesSection({ onNavigateTab }) {
  const [selectedLevel, setSelectedLevel] = useState('secundaria'); // 'primaria' | 'secundaria'
  const [activeAxisId, setActiveAxisId] = useState(FIVE_AXES[0].id);

  const currentAxis = FIVE_AXES.find((a) => a.id === activeAxisId) || FIVE_AXES[0];
  const primaryTracks = AGE_TRACKS.filter((t) =>
    t.id === 'inicial-primeros' || t.id === 'primaria-3-4' || t.id === 'primaria-5-6'
  );
  const secondaryTrack = AGE_TRACKS.find((t) => t.id === 'ebi-7-9');

  return (
    <section className="py-10 sm:py-14 bg-white border-b border-slate-200" id="recorrido-estudiantes">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Recorrido Estudiantes · Primaria y EBI Secundaria</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Habitar lo digital desde tu mirada y tus derechos
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Propuestas organizadas por tramo y por cinco ejes de ciudadanía digital. Todas las actividades funcionan{' '}
            <strong>sin crear perfiles ni entregar datos personales</strong>.
          </p>

          {/* Subsistema Switcher */}
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            <button
              type="button"
              onClick={() => setSelectedLevel('primaria')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedLevel === 'primaria'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Primaria (con mediación adulta)
            </button>
            <button
              type="button"
              onClick={() => setSelectedLevel('secundaria')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedLevel === 'secundaria'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Secundaria · EBI 7.º a 9.º
            </button>
          </div>
        </div>

        {/* Tramo Orientation Cards */}
        {selectedLevel === 'primaria' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {primaryTracks.map((tr) => (
              <div key={tr.id} className="bg-amber-50/50 border border-amber-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900">
                    {tr.focusBadge}
                  </span>
                </div>
                <h2 className="font-heading font-extrabold text-base text-slate-900">{tr.tramo}</h2>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {tr.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-slate-600 pt-2 border-t border-amber-200/60">
                  <strong>Ajuste de contexto:</strong> {tr.contextAdjustment}
                </p>
              </div>
            ))}
          </div>
        ) : (
          secondaryTrack && (
            <div className="bg-indigo-50/60 border border-indigo-200 rounded-2xl p-6 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900">
                  {secondaryTrack.tramo}
                </h2>
                <span className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold">
                  {secondaryTrack.focusBadge}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                <ul className="space-y-1.5">
                  {secondaryTrack.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-white rounded-xl p-3.5 border border-indigo-100 text-xs text-slate-600 space-y-1">
                  <p><strong>Conocimientos previos:</strong> {secondaryTrack.prerequisites}</p>
                  <p><strong>Ajuste situado:</strong> {secondaryTrack.contextAdjustment}</p>
                </div>
              </div>
            </div>
          )
        )}

        {/* Five Minimum Content Axes (P1-03) */}
        <div className="space-y-5">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-700 flex items-center justify-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>Cinco ejes transversales de contenido</span>
            </span>
            <h2 className="font-heading text-xl sm:text-3xl font-extrabold text-slate-900">
              Qué trabajamos en Habitar lo digital
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Cinco ejes de contenido">
            {FIVE_AXES.map((axis) => {
              const isSelected = axis.id === activeAxisId;
              return (
                <button
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  key={axis.id}
                  onClick={() => setActiveAxisId(axis.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {axis.code}: {axis.title}
                </button>
              );
            })}
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5" role="tabpanel">
            <div className="space-y-1.5 pb-4 border-b border-slate-200">
              <span className="text-xs font-extrabold uppercase text-indigo-700">{currentAxis.code}</span>
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900">
                {currentAxis.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700">{currentAxis.summary}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-4 border border-amber-200 space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold">
                  Primaria · {currentAxis.primariaActivity.tramo}
                </span>
                <h4 className="font-heading font-bold text-sm text-slate-900">
                  {currentAxis.primariaActivity.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {currentAxis.primariaActivity.description}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-indigo-200 space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-900 text-[11px] font-bold">
                  Secundaria · {currentAxis.secundariaActivity.tramo}
                </span>
                <h4 className="font-heading font-bold text-sm text-slate-900">
                  {currentAxis.secundariaActivity.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {currentAxis.secundariaActivity.description}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-purple-200 space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-900 text-[11px] font-bold">
                  Ficha de mediación docente
                </span>
                <h4 className="font-heading font-bold text-sm text-slate-900">
                  {currentAxis.teacherSheet.objective}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {currentAxis.teacherSheet.mediationTip}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 8 Didactic Cases */}
        <InteractiveCasesSection />

        {/* Learning Closure without Data Collection */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Cierre cuidado y confidencial</span>
            </span>
            <h3 className="font-heading text-lg sm:text-xl font-extrabold">
              ¿Te quedó alguna duda o viviste una situación incómoda en redes o juegos?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Esta plataforma no pide tu nombre, no guarda tus respuestas ni solicita capturas de pantalla. Si necesitás ayuda real, conversá con un adulto de confianza o referente de tu escuela o liceo y consultá los canales oficiales.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            <button
              type="button"
              onClick={() => onNavigateTab('videos')}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 cursor-pointer"
            >
              <Video className="w-4 h-4 text-sky-400" />
              <span>Ver videos</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigateTab('fuentes')}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold cursor-pointer"
            >
              <span>Ver canales de ayuda</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
