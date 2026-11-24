import React from 'react';
import { PLATFORM_META } from '../data/platformData';
import {
  Users,
  HeartHandshake,
  GraduationCap,
  Briefcase,
  BookOpenCheck,
  Scale,
  Presentation,
  Printer,
  ArrowRight,
  ShieldCheck,
  Info,
  Video,
  FolderDown
} from 'lucide-react';

export default function InicioView({ onNavigateTab, onOpenWorkshopMode, onOpenPrintableMaterials }) {
  const routes = [
    {
      id: 'estudiantes',
      title: 'Estudiantes',
      audience: 'Primaria (3.º–6.º) y EBI (7.º–9.º)',
      description:
        'Cinco ejes de trabajo y 8 casos dilemáticos sobre convivencia, algoritmos, descanso e IA generativa, sin crear perfiles ni entregar datos.',
      icon: Users,
      accent: 'bg-sky-50 text-sky-700 border-sky-200'
    },
    {
      id: 'familias',
      title: 'Familias',
      audience: 'Adultos referentes · Incluye «Mi primer celular»',
      description:
        'Bienestar digital cotidiano, pautas S.E.R.C., diario opcional no persistente, controles parentales y guía de acuerdos imprimibles.',
      icon: HeartHandshake,
      accent: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      id: 'docentes',
      title: 'Docentes y centros',
      audience: 'Equipos educativos',
      description:
        'Secuencias por tramo etario, itinerario de formación de referentes, rúbrica formativa ligera y acuerdos dialogados de aula.',
      icon: GraduationCap,
      accent: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      id: 'poite',
      title: 'POITE | Secundaria',
      audience: 'Kit territorial Educación Media',
      description:
        'Paquete listo para talleres de 45–60 o 90 min: guion, actividad 100% sin conexión, modo proyector, casos y rúbrica de cierre.',
      icon: Briefcase,
      accent: 'bg-indigo-50 text-indigo-700 border-indigo-200'
    },
    {
      id: 'dgeip',
      title: 'Contenidistas Uruguay Educa DGEIP',
      audience: 'Kit territorial Primaria',
      description:
        'Secuencias diferenciadas para Inicial/1.º–2.º, 3.º–4.º y 5.º–6.º de Primaria con producciones creativas, conversatorios y fichas para familias.',
      icon: BookOpenCheck,
      accent: 'bg-amber-50 text-amber-800 border-amber-200'
    },
    {
      id: 'fuentes',
      title: 'Fuentes, normativa y ayuda',
      audience: 'Evidencia y protección',
      description:
        'Resolución CODICEN N.º 1999/026, datos Aristas Media 2025, protocolo pedagógico ante incidentes y directorio verificado de ayuda.',
      icon: Scale,
      accent: 'bg-rose-50 text-rose-700 border-rose-200'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        {/* Hero / Identity & Status */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-xs font-bold text-indigo-800">
              <span>Plan de trabajo integrado EDyTIC 2027</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Sin registro · Sin recolección de datos</span>
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {PLATFORM_META.brandName}
          </h1>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
            Artefacto educativo transversal para promover la <strong>ciudadanía, el bienestar y la convivencia digital</strong> en centros educativos y hogares de Uruguay. Reorganiza y amplía la propuesta anterior incorporando el submódulo <strong>«Mi primer celular»</strong> dentro del recorrido de familias.
          </p>

          {/* Direct Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={onOpenWorkshopMode}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-sm transition-colors cursor-pointer"
            >
              <Presentation className="w-4 h-4 text-amber-400" />
              <span>Empezar un taller (Modo proyector)</span>
            </button>

            <button
              type="button"
              onClick={onOpenPrintableMaterials}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-indigo-600" />
              <span>Material para imprimir (A4)</span>
            </button>
          </div>
        </div>

        {/* Authorship & Institutional Scope Notice */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1 text-xs text-slate-700 leading-relaxed">
              <p>
                <strong>Autoría y marco:</strong> Artefacto digital de autoría y desarrollo del{' '}
                <strong>{PLATFORM_META.author}</strong>, {PLATFORM_META.framework}.
              </p>
              <p className="text-slate-600">
                <strong>Estado del proyecto ({PLATFORM_META.reviewDate}):</strong> Versión de adecuación técnico-pedagógica ({PLATFORM_META.version}). No se presenta como portal oficial aprobado por ANEP ni sustituye los reglamentos de cada centro educativo.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onNavigateTab('acerca')}
            className="shrink-0 text-xs font-bold text-indigo-700 hover:text-indigo-900 underline cursor-pointer"
          >
            Créditos, licencias y privacidad →
          </button>
        </div>

        {/* Non-identifying Route Selection */}
        <div className="space-y-4">
          <div className="text-center space-y-1">
            <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900">
              Elegí un recorrido (sin cuenta ni datos personales)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Cada perfil orienta materiales específicos en tres clics o menos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {routes.map((r) => {
              const Icon = r.icon;
              return (
                <button
                  type="button"
                  key={r.id}
                  onClick={() => {
                    onNavigateTab(r.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-left group bg-white rounded-2xl p-5 border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all flex flex-col justify-between gap-4 cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${r.accent}`}>
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500">{r.audience}</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-indigo-700 transition-colors">
                        {r.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">{r.description}</p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-indigo-700">
                    <span>Abrir recorrido</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Multimedia Access Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <button
            type="button"
            onClick={() => onNavigateTab('videos')}
            className="text-left p-4 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 transition-colors flex items-center justify-between gap-4 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Video className="w-6 h-6 text-sky-400 shrink-0" aria-hidden="true" />
              <div>
                <span className="font-heading font-bold text-sm block">Videoteca y cortometrajes</span>
                <span className="text-xs text-slate-300">Disparadores para cine-foro y charlas en casa o aula</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-300 shrink-0" />
          </button>

          <button
            type="button"
            onClick={() => onNavigateTab('documentos')}
            className="text-left p-4 rounded-2xl bg-white border border-slate-300 hover:border-indigo-400 text-slate-900 transition-colors flex items-center justify-between gap-4 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <FolderDown className="w-6 h-6 text-indigo-600 shrink-0" aria-hidden="true" />
              <div>
                <span className="font-heading font-bold text-sm block">Biblioteca de guías oficiales (PDF)</span>
                <span className="text-xs text-slate-600">Documentos ANEP, DGEIP, AGESIC, URCDP, Ceibal, UNICEF y UNESCO</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-indigo-600 shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
}
