import React, { useState } from 'react';
import { caseStudies } from '../data/caseStudiesData';
import {
  HelpCircle,
  CheckCircle2,
  AlertOctagon,
  AlertTriangle,
  Scale,
  ChevronRight,
  RotateCcw,
  MessageCircleHeart,
  Copy,
  Check,
  ShieldCheck,
  Layers
} from 'lucide-react';

export default function InteractiveCasesSection({ initialFilterAxis = 'todos' }) {
  const [axisFilter, setAxisFilter] = useState(initialFilterAxis);
  const [tramoView, setTramoView] = useState('secundaria'); // 'primaria' | 'secundaria'
  const [activeCaseId, setActiveCaseId] = useState(caseStudies[0].id);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [copiedPhrase, setCopiedPhrase] = useState(false);

  const visibleCases =
    axisFilter === 'todos' ? caseStudies : caseStudies.filter((c) => c.axisId === axisFilter);

  const currentCase =
    visibleCases.find((c) => c.id === activeCaseId) || visibleCases[0] || caseStudies[0];
  const userChosenOptionId = selectedOptions[currentCase.id];
  const chosenOption = currentCase.options.find((o) => o.id === userChosenOptionId);

  const answeredCount = Object.keys(selectedOptions).length;

  const handleSelectOption = (optionId) => {
    setSelectedOptions({
      ...selectedOptions,
      [currentCase.id]: optionId
    });
  };

  const handleResetCurrentCase = () => {
    const updated = { ...selectedOptions };
    delete updated[currentCase.id];
    setSelectedOptions(updated);
  };

  const handleCopyStarter = () => {
    if (!currentCase.conversationStarter) return;
    navigator.clipboard.writeText(currentCase.conversationStarter);
    setCopiedPhrase(true);
    setTimeout(() => setCopiedPhrase(false), 2000);
  };

  const currentIndex = visibleCases.findIndex((c) => c.id === currentCase.id);
  const nextCase = visibleCases[(currentIndex + 1) % visibleCases.length];

  return (
    <div className="space-y-6" id="casos-interactivos">
      {/* Subheader */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
          Situaciones didácticas · {caseStudies.length} casos revisados ({answeredCount}/{caseStudies.length} explorados)
        </span>
        <h3 className="font-heading text-xl sm:text-3xl font-extrabold text-slate-900">
          Dilemas reales para analizar en clase o en casa
        </h3>
        <p className="text-xs sm:text-sm text-slate-600">
          Cada caso presenta preguntas abiertas, derechos en juego, adaptación para Primaria (5.º–6.º) o Secundaria (EBI 7.º–9.º) y retroalimentación formativa sin calificar a nadie.
        </p>

        {/* Tramo toggle */}
        <div className="inline-flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 pt-1">
          <button
            type="button"
            onClick={() => setTramoView('primaria')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              tramoView === 'primaria' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Enfoque Primaria (5.º–6.º)
          </button>
          <button
            type="button"
            onClick={() => setTramoView('secundaria')}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              tramoView === 'secundaria' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Enfoque Secundaria (EBI 7.º–9.º)
          </button>
        </div>
      </div>

      {/* Axis Filter */}
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {[
          { id: 'todos', label: 'Todos los ejes (8)' },
          { id: 'eje-a', label: 'Eje A · Derechos' },
          { id: 'eje-b', label: 'Eje B · Bienestar' },
          { id: 'eje-c', label: 'Eje C · Convivencia' },
          { id: 'eje-d', label: 'Eje D · Algoritmos' },
          { id: 'eje-e', label: 'Eje E · IA y acuerdos' }
        ].map((f) => (
          <button
            type="button"
            key={f.id}
            onClick={() => {
              setAxisFilter(f.id);
              const first = f.id === 'todos' ? caseStudies[0] : caseStudies.find((c) => c.axisId === f.id);
              if (first) setActiveCaseId(first.id);
            }}
            className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
              axisFilter === f.id
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Case Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {visibleCases.map((cs, idx) => {
          const isSelected = cs.id === currentCase.id;
          const chosenId = selectedOptions[cs.id];
          const chosenOpt = cs.options.find((o) => o.id === chosenId);
          return (
            <button
              type="button"
              key={cs.id}
              onClick={() => setActiveCaseId(cs.id)}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                isSelected
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-indigo-300'
              }`}
            >
              <span>Caso {caseStudies.findIndex((x) => x.id === cs.id) + 1}</span>
              {chosenOpt && (
                <span
                  aria-label={
                    chosenOpt.type === 'success'
                      ? 'Alternativa cuidada explorada'
                      : chosenOpt.type === 'warning'
                      ? 'Alternativa con riesgos explorada'
                      : 'Alternativa inadecuada explorada'
                  }
                  className={`w-2.5 h-2.5 rounded-full ${
                    chosenOpt.type === 'success'
                      ? 'bg-emerald-400'
                      : chosenOpt.type === 'warning'
                      ? 'bg-amber-400'
                      : 'bg-rose-400'
                  }`}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Case Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden transition-all">
        {/* Case Banner Header */}
        <div className="p-6 sm:p-8 bg-slate-900 text-white border-b border-slate-800 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider ${currentCase.badgeColor}`}>
                {currentCase.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-slate-800 text-indigo-200 border border-slate-700">
                {currentCase.axisLabel}
              </span>
            </div>
            <span className="text-xs text-slate-300">
              Caso {caseStudies.findIndex((x) => x.id === currentCase.id) + 1} de {caseStudies.length}
            </span>
          </div>

          <h4 className="font-heading font-extrabold text-lg sm:text-2xl text-white">
            {currentCase.title}
          </h4>
          <p className="text-xs sm:text-base text-slate-200 leading-relaxed font-normal">
            {currentCase.situation}
          </p>

          {/* Tramo Focus + Rights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-200">
              <span className="font-bold text-amber-300 flex items-center gap-1.5 mb-1">
                <Layers className="w-3.5 h-3.5" />
                {tramoView === 'primaria' ? 'Adaptación Primaria (5.º–6.º)' : 'Adaptación Secundaria (EBI 7.º–9.º)'}
              </span>
              <p className="leading-relaxed">
                {tramoView === 'primaria' ? currentCase.tramoPrimaria : currentCase.tramoSecundaria}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-200">
              <span className="font-bold text-emerald-300 flex items-center gap-1.5 mb-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Derechos y principios en juego
              </span>
              <p className="leading-relaxed">{currentCase.rightsInPlay}</p>
            </div>
          </div>
        </div>

        {/* Question / Dilemma & Options */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Open questions for deliberation */}
          {currentCase.openQuestions && (
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block">
                Preguntas abiertas para deliberar antes de elegir
              </span>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                {currentCase.openQuestions.map((oq, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span>{oq}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-900">
            <HelpCircle className="w-5 h-5 text-indigo-600 shrink-0" />
            <span>{currentCase.dilemma}</span>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentCase.options.map((option) => {
              const isSelected = userChosenOptionId === option.id;
              return (
                <button
                  type="button"
                  key={option.id}
                  onClick={() => handleSelectOption(option.id)}
                  aria-pressed={isSelected}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-start gap-3.5 cursor-pointer ${
                    isSelected
                      ? option.type === 'success'
                        ? 'border-emerald-600 bg-emerald-50/60'
                        : option.type === 'warning'
                        ? 'border-amber-500 bg-amber-50/60'
                        : 'border-rose-600 bg-rose-50/60'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/70'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs ${
                      isSelected
                        ? option.type === 'success'
                          ? 'border-emerald-600 bg-emerald-600 text-white'
                          : option.type === 'warning'
                          ? 'border-amber-600 bg-amber-600 text-white'
                          : 'border-rose-600 bg-rose-600 text-white'
                        : 'border-slate-400 text-slate-600'
                    }`}
                  >
                    {option.id.toUpperCase()}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Feedback Panel */}
          {chosenOption && (
            <div
              className={`rounded-2xl p-5 sm:p-6 border space-y-4 ${
                chosenOption.type === 'success'
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                  : chosenOption.type === 'warning'
                  ? 'bg-amber-50 border-amber-200 text-amber-950'
                  : 'bg-rose-50 border-rose-200 text-rose-950'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="shrink-0 mt-0.5">
                  {chosenOption.type === 'success' && <CheckCircle2 className="w-6 h-6 text-emerald-700" />}
                  {chosenOption.type === 'warning' && <AlertTriangle className="w-6 h-6 text-amber-700" />}
                  {chosenOption.type === 'danger' && <AlertOctagon className="w-6 h-6 text-rose-700" />}
                </div>
                <div className="space-y-1.5">
                  <h5 className="font-heading font-extrabold text-sm sm:text-base">
                    Valoración formativa: {chosenOption.evaluation}
                  </h5>
                  <p className="text-xs sm:text-sm leading-relaxed">{chosenOption.feedback}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/90 border border-slate-200/70 text-xs sm:text-sm text-slate-800 leading-relaxed">
                <strong>Criterio pedagógico:</strong> {chosenOption.pedagogicalTip}
              </div>

              {currentCase.conversationStarter && (
                <div className="p-4 rounded-xl bg-white border border-indigo-200 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-indigo-700 flex items-center gap-1.5">
                      <MessageCircleHeart className="w-4 h-4 text-indigo-600" />
                      Frase sugerida para abrir el diálogo
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyStarter}
                      className="inline-flex items-center gap-1 text-xs font-bold text-indigo-700 hover:underline cursor-pointer"
                    >
                      {copiedPhrase ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedPhrase ? 'Copiada' : 'Copiar frase'}</span>
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm italic text-slate-800">{currentCase.conversationStarter}</p>
                </div>
              )}

              <div className="p-3.5 rounded-xl bg-slate-900 text-slate-100 text-xs sm:text-sm flex items-start gap-2.5">
                <Scale className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sky-300">Referencia en Uruguay:</strong> {currentCase.uruguayContext}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <button
                  type="button"
                  onClick={handleResetCurrentCase}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-950 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Probar otra respuesta</span>
                </button>

                {visibleCases.length > 1 && (
                  <button
                    type="button"
                    onClick={() => setActiveCaseId(nextCase.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold cursor-pointer"
                  >
                    <span>Siguiente caso</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
