import React from 'react';
import { PLATFORM_META } from '../data/platformData';
import { Compass, ExternalLink, ArrowUp, Presentation, GraduationCap, Award } from 'lucide-react';

export default function Footer({ setActiveTab, onOpenWorkshopMode }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigate = (tab) => {
    setActiveTab(tab);
    scrollToTop();
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-10 border-t border-slate-800 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Attribution */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold">
                <Compass className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg text-white block leading-tight">
                  {PLATFORM_META.brandName}
                </span>
                <span className="text-[11px] text-indigo-300 font-semibold">
                  Plan de trabajo integrado EDyTIC 2027 · UY
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Artefacto educativo transversal para ciudadanía, bienestar y convivencia digital en centros educativos y familias de Uruguay. Incluye el submódulo «Mi primer celular».
            </p>

            <div className="p-4 rounded-2xl bg-slate-800/85 border border-slate-700/90 text-xs space-y-2 text-slate-300">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0" />
                  <p className="text-xs sm:text-sm text-white font-semibold">
                    Artefacto digital de autoría y desarrollo del {PLATFORM_META.author}, {PLATFORM_META.framework}.
                  </p>
                </div>
                <a
                  href={PLATFORM_META.authorCvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-500/40 text-indigo-200 font-bold text-[11px] transition-colors"
                >
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>CVuy (ANII)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-[11px] text-slate-400">
                No constituye por sí mismo una política oficial aprobada por ANEP ni sustituye reglamentos de cada centro.{' '}
                <span className="font-mono text-indigo-300">{PLATFORM_META.authorEmail}</span>
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-xs text-white uppercase tracking-wider">
              Recorridos
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button type="button" onClick={() => navigate('inicio')} className="hover:text-white cursor-pointer">
                  Inicio
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('estudiantes')} className="hover:text-white cursor-pointer">
                  Estudiantes (5 ejes y 8 casos)
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('familias')} className="hover:text-white cursor-pointer">
                  Familias y «Mi primer celular»
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('docentes')} className="hover:text-white cursor-pointer">
                  Docentes y centros
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('poite')} className="hover:text-white cursor-pointer">
                  Kit POITE | Secundaria
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('dgeip')} className="hover:text-white cursor-pointer">
                  Kit Contenidistas DGEIP | Primaria
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('fuentes')} className="hover:text-white cursor-pointer">
                  Fuentes, normativa y ayuda
                </button>
              </li>
              <li>
                <button type="button" onClick={() => navigate('acerca')} className="hover:text-white cursor-pointer">
                  Acerca de, licencias y privacidad
                </button>
              </li>
            </ul>
          </div>

          {/* Official Sources */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-xs text-white uppercase tracking-wider">
              Referencias institucionales
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.anep.edu.uy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>ANEP (CODICEN · DGEIP · DGES)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://uruguayeduca.anep.edu.uy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>Portal Uruguay Educa</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.gub.uy/agesic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>AGESIC · Ciudadanía Digital</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.inau.gub.uy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>INAU · Línea Azul 0800 5050</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://denuncias.minterior.gub.uy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>Cibercrimen (Ministerio del Interior)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>Contenidos propios:</span>
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline font-semibold"
            >
              CC BY-NC-SA 4.0
            </a>
            <span>· Pautas S.E.R.C. organizadas en esta plataforma</span>
            <span>· v{PLATFORM_META.version}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onOpenWorkshopMode}
              className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200 transition-colors text-xs cursor-pointer"
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>Modo taller</span>
            </button>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
