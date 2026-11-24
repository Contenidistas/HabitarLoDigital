import React, { useState } from 'react';
import SercModelSection from './SercModelSection';
import DigitalHealthSection from './DigitalHealthSection';
import ParentalControlsSection from './ParentalControlsSection';
import ReadinessQuiz from './ReadinessQuiz';
import ProtocolSection from './ProtocolSection';
import {
  HeartHandshake,
  Smartphone,
  ShieldCheck,
  FileText,
  Video,
  PhoneCall,
  BookOpen,
  ArrowRight
} from 'lucide-react';

export default function FamiliasSection({ initialSubmodule = 'bienestar', onNavigateTab }) {
  // 'bienestar' | 'primer-celular' | 'acuerdos'
  const [activeSub, setActiveSub] = useState(initialSubmodule);

  return (
    <div className="bg-slate-50 border-b border-slate-200" id="recorrido-familias">
      {/* Header & Submodule Switcher */}
      <div className="bg-white border-b border-slate-200 py-8 sm:py-10 no-print">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Recorrido Familias · Hogar y acompañamiento</span>
          </div>

          <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bienestar digital en casa y módulo «Mi primer celular»
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Orientaciones para hogares donde ya existen pantallas o dispositivos compartidos, y un submódulo específico para cuando evalúan habilitar el primer teléfono propio. Todo funciona sin registro ni envío de datos.
          </p>

          {/* Submodule Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2" role="tablist" aria-label="Submódulos de Familias">
            <button
              type="button"
              role="tab"
              aria-selected={activeSub === 'bienestar'}
              onClick={() => setActiveSub('bienestar')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                activeSub === 'bienestar'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>1. Bienestar, pautas S.E.R.C. y diario de hábitos</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeSub === 'primer-celular'}
              onClick={() => setActiveSub('primer-celular')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                activeSub === 'primer-celular'
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>2. Submódulo «Mi primer celular» (Controles y diálogo)</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeSub === 'acuerdos'}
              onClick={() => setActiveSub('acuerdos')}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                activeSub === 'acuerdos'
                  ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>3. Guía de acuerdos familiares (Imprimible A4)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Submodule Content */}
      {activeSub === 'bienestar' && (
        <div>
          <SercModelSection />
          <DigitalHealthSection />
        </div>
      )}

      {activeSub === 'primer-celular' && (
        <div>
          <div className="bg-indigo-950 text-white py-6 px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-1.5">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-300">
                Submódulo específico · «Mi primer celular»
              </span>
              <h2 className="font-heading text-xl sm:text-2xl font-extrabold">
                Acompañar la etapa de acceso a un dispositivo propio
              </h2>
              <p className="text-xs sm:text-sm text-indigo-100">
                Antes de habilitar un smartphone propio: conversen en casa con el checklist orientador, configuren juntos los controles técnicos iniciales y revisen los acuerdos periódicamente.
              </p>
            </div>
          </div>
          <ReadinessQuiz onProceedToAgreement={() => setActiveSub('acuerdos')} />
          <ParentalControlsSection />
        </div>
      )}

      {activeSub === 'acuerdos' && (
        <ProtocolSection initialMode="familiar" />
      )}

      {/* Bottom Help & Videos Strip */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 gap-4 no-print">
        <button
          type="button"
          onClick={() => onNavigateTab('videos')}
          className="text-left p-4 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 flex items-center justify-between gap-3 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <Video className="w-5 h-5 text-indigo-600 shrink-0" />
            <div>
              <span className="font-heading font-bold text-sm text-slate-900 block">Cortometrajes para mirar en familia</span>
              <span className="text-xs text-slate-600">Disparadores breves sobre grooming, privacidad y redes</span>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-indigo-600 shrink-0" />
        </button>

        <button
          type="button"
          onClick={() => onNavigateTab('fuentes')}
          className="text-left p-4 rounded-2xl bg-red-50 border border-red-200 hover:border-red-300 flex items-center justify-between gap-3 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <PhoneCall className="w-5 h-5 text-red-700 shrink-0" />
            <div>
              <span className="font-heading font-bold text-sm text-red-950 block">¿Necesitan ayuda ante un incidente?</span>
              <span className="text-xs text-red-800">Protocolo de cuidado, Línea Azul 0800 5050 y Cibercrimen</span>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-red-700 shrink-0" />
        </button>
      </div>
    </div>
  );
}
