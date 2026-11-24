import React, { useState } from 'react';
import { conversationQuestions, buildConversationSummary } from '../data/quizQuestions';
import {
  diagnosticAgeGroups,
  responseOptions,
  getGroupByExactAge
} from '../data/workshopDiagnosticData';
import ScientificEvidencePanel from './ScientificEvidencePanel';
import {
  ArrowRight,
  RotateCcw,
  CheckCircle,
  AlertTriangle,
  FileText,
  ChevronRight,
  ClipboardCheck,
  Users,
  Info,
  MessageCircle
} from 'lucide-react';

export default function ReadinessQuiz({ onProceedToAgreement }) {
  // 'tramo' (Checklist por tramo de edad) | 'conversacion' (Guía de 6 preguntas sin puntaje)
  const [guideMode, setGuideMode] = useState('conversacion');

  // State for Age-based Checklist
  const [childAge, setChildAge] = useState(11);
  const [selectedAgeGroupId, setSelectedAgeGroupId] = useState('9-a-12');
  const [diagnosticAnswers, setDiagnosticAnswers] = useState({});

  // State for 6-question Non-Deterministic Conversation Checklist
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  const handleExactAgeChange = (newAge) => {
    const clamped = Math.max(2, Math.min(25, newAge));
    setChildAge(clamped);
    const group = getGroupByExactAge(clamped);
    setSelectedAgeGroupId(group.id);
  };

  const handleSelectAgeGroup = (group) => {
    setSelectedAgeGroupId(group.id);
    setChildAge(group.defaultAge);
  };

  const currentAgeGroup = diagnosticAgeGroups.find((g) => g.id === selectedAgeGroupId) || diagnosticAgeGroups[1];

  const handleDiagnosticAnswer = (questionId, optionId) => {
    setDiagnosticAnswers((prev) => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const resetCurrentAgeAnswers = () => {
    const updated = { ...diagnosticAnswers };
    currentAgeGroup.questions.forEach((q) => {
      delete updated[q.id];
    });
    setDiagnosticAnswers(updated);
  };

  const currentGroupAnsweredCount = currentAgeGroup.questions.filter(
    (q) => diagnosticAnswers[q.id] !== undefined
  ).length;

  const priorityQuestions = currentAgeGroup.questions.filter(
    (q) => diagnosticAnswers[q.id] === 'no' || diagnosticAnswers[q.id] === 'a_veces'
  );

  // Conversation Checklist helpers
  const currentQ = conversationQuestions[currentQuestionIndex];
  const progressPercent = Math.round(((currentQuestionIndex + 1) / conversationQuestions.length) * 100);

  const handleSelectOption = (optionId) => {
    setUserAnswers({
      ...userAnswers,
      [currentQ.id]: optionId
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < conversationQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setIsFinished(false);
  };

  const conversationSummary = isFinished ? buildConversationSummary(userAnswers) : null;

  return (
    <section className="py-8 sm:py-12 bg-slate-50 border-b border-slate-200" id="guia-conversacion">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header & Submode Switcher */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-bold uppercase tracking-wider">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Guía de conversación familiar (no psicométrica)</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {guideMode === 'conversacion'
              ? 'Checklist de conversación antes o durante el acompañamiento'
              : 'Checklist orientador por tramo de edad'}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Herramienta de autoobservación para conversar en casa («qué hacemos hoy, qué necesitamos, qué podemos acordar»).{' '}
            <strong>No es una prueba psicométrica</strong> ni califica a niñas, niños o adolescentes con puntajes de «madurez». No guarda ni envía datos.
          </p>

          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <button
              type="button"
              onClick={() => setGuideMode('conversacion')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                guideMode === 'conversacion'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Checklist de conversación (6 ejes)
            </button>
            <button
              type="button"
              onClick={() => setGuideMode('tramo')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                guideMode === 'tramo'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Pautas por tramo de edad
            </button>
          </div>
        </div>

        {guideMode === 'tramo' ? (
          <div key="mode-tramo" className="space-y-6 tab-panel-transition">
            <ScientificEvidencePanel darkMode={false} defaultExpanded={false} />

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
              {/* Age Selector Bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <label htmlFor="age-stepper-value" className="text-xs sm:text-sm font-bold text-slate-700">
                    Edad aproximada:
                  </label>
                  <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-2xl border border-slate-200">
                    <button
                      type="button"
                      onClick={() => handleExactAgeChange(childAge - 1)}
                      aria-label="Disminuir edad en 1 año"
                      className="w-7 h-7 rounded-lg bg-white hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-200 flex items-center justify-center cursor-pointer"
                    >
                      -
                    </button>
                    <span
                      id="age-stepper-value"
                      className="px-3 py-0.5 rounded-lg bg-indigo-600 text-white font-extrabold text-xs sm:text-sm min-w-[72px] text-center"
                    >
                      {childAge >= 21 ? '21+ años' : `${childAge} años`}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleExactAgeChange(childAge + 1)}
                      aria-label="Aumentar edad en 1 año"
                      className="w-7 h-7 rounded-lg bg-white hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-200 flex items-center justify-center cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {diagnosticAgeGroups.map((grp) => {
                    const isSelected = grp.id === currentAgeGroup.id;
                    return (
                      <button
                        type="button"
                        key={grp.id}
                        onClick={() => handleSelectAgeGroup(grp)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-slate-900 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {grp.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Age Orientation Banner */}
              <div
                className={`rounded-2xl p-4 sm:p-5 border flex items-start gap-3.5 ${
                  currentAgeGroup.alertType === 'warning'
                    ? 'bg-amber-50 border-amber-300 text-amber-950'
                    : currentAgeGroup.alertType === 'emerald'
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                    : currentAgeGroup.alertType === 'purple'
                    ? 'bg-purple-50 border-purple-200 text-purple-950'
                    : 'bg-sky-50 border-sky-200 text-sky-950'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                    currentAgeGroup.alertType === 'warning'
                      ? 'bg-amber-500 text-white'
                      : currentAgeGroup.alertType === 'emerald'
                      ? 'bg-emerald-600 text-white'
                      : currentAgeGroup.alertType === 'purple'
                      ? 'bg-purple-600 text-white'
                      : 'bg-sky-600 text-white'
                  }`}
                >
                  {currentAgeGroup.alertType === 'warning' ? (
                    <AlertTriangle className="w-5 h-5" />
                  ) : (
                    <Users className="w-5 h-5" />
                  )}
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-heading font-extrabold text-sm sm:text-base">
                      {currentAgeGroup.alertTitle} ({childAge >= 21 ? '21+ años' : `${childAge} años`})
                    </h3>
                    {currentGroupAnsweredCount > 0 && (
                      <button
                        type="button"
                        onClick={resetCurrentAgeAnswers}
                        className="text-xs font-bold underline opacity-80 hover:opacity-100 cursor-pointer"
                      >
                        Limpiar respuestas ({currentGroupAnsweredCount}/{currentAgeGroup.questions.length})
                      </button>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed">{currentAgeGroup.alertMessage}</p>
                </div>
              </div>

              {/* Questions Grid */}
              <div key={selectedAgeGroupId} className="grid grid-cols-1 md:grid-cols-2 gap-4 stagger-grid">
                {currentAgeGroup.questions.map((q, idx) => {
                  const selectedAns = diagnosticAnswers[q.id];
                  return (
                    <div
                      key={q.id}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between gap-3 ${
                        selectedAns
                          ? 'bg-indigo-50/30 border-indigo-300 shadow-xs'
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white border border-slate-200 text-indigo-700">
                            Ítem {idx + 1} de {currentAgeGroup.questions.length}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-500">{q.workshopTopic}</span>
                        </div>
                        <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">{q.question}</p>
                      </div>

                      <div className="space-y-2">
                        <div className="grid grid-cols-4 gap-1.5">
                          {responseOptions.map((opt) => {
                            const isSelected = selectedAns === opt.id;
                            let activeStyle = 'bg-indigo-600 border-indigo-600 text-white';
                            if (opt.id === 'si') activeStyle = 'bg-emerald-600 border-emerald-600 text-white';
                            if (opt.id === 'no') activeStyle = 'bg-rose-600 border-rose-600 text-white';
                            if (opt.id === 'a_veces') activeStyle = 'bg-amber-500 border-amber-500 text-slate-950';
                            if (opt.id === 'no_aplica') activeStyle = 'bg-slate-700 border-slate-700 text-white';

                            return (
                              <button
                                type="button"
                                key={opt.id}
                                onClick={() => handleDiagnosticAnswer(q.id, opt.id)}
                                aria-pressed={isSelected}
                                className={`py-1.5 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                                  isSelected
                                    ? `${activeStyle} shadow-xs`
                                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                                }`}
                              >
                                {opt.label}
                              </button>
                            );
                          })}
                        </div>

                        {selectedAns && (
                          <p className="text-[11px] text-slate-700 bg-white border border-slate-200/80 rounded-xl px-3 py-2 leading-snug">
                            <strong className="text-indigo-700">Tema de conversación:</strong> {q.topicNote}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Summary */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-700 block">
                    Hoja de diálogo ({currentGroupAnsweredCount} de {currentAgeGroup.questions.length} revisadas)
                  </span>
                  {priorityQuestions.length > 0 ? (
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Según lo marcado con <strong>«No»</strong> o <strong>«A veces»</strong>, vale la pena conversar especialmente sobre:{' '}
                      <strong className="text-indigo-700">
                        {[...new Set(priorityQuestions.map((q) => q.workshopTopic))].join(' · ')}
                      </strong>
                      .
                    </p>
                  ) : (
                    <p className="text-xs sm:text-sm text-slate-600">
                      Marcá las situaciones de arriba para organizar qué temas priorizar en casa. No se guarda ningún registro.
                    </p>
                  )}
                </div>

                {onProceedToAgreement && (
                  <button
                    type="button"
                    onClick={onProceedToAgreement}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shrink-0 shadow-sm transition-all cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Ir al Acuerdo Familiar</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Non-Deterministic 6-Axis Conversation Checklist */
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-8 transition-all">
            {!isFinished ? (
              <div>
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                    <span>
                      EJE {currentQuestionIndex + 1} DE {conversationQuestions.length} · {currentQ.axis.toUpperCase()}
                    </span>
                    <span>{progressPercent}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-heading text-lg sm:text-2xl font-bold text-slate-900 leading-snug">
                    {currentQ.question}
                  </h3>
                  <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-100 text-xs sm:text-sm text-indigo-950 leading-relaxed flex items-start gap-2">
                    <Info className="w-4 h-4 text-indigo-700 shrink-0 mt-0.5" />
                    <span>
                      <strong>Para qué conversarlo:</strong> {currentQ.whyItMatters}
                    </span>
                  </div>

                  <div className="space-y-3 pt-2">
                    {currentQ.options.map((opt) => {
                      const isSelected = userAnswers[currentQ.id] === opt.id;
                      return (
                        <button
                          type="button"
                          key={opt.id}
                          onClick={() => handleSelectOption(opt.id)}
                          aria-pressed={isSelected}
                          className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all flex items-start gap-4 cursor-pointer ${
                            isSelected
                              ? 'border-indigo-600 bg-indigo-50/50 shadow-sm'
                              : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                              isSelected ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-400'
                            }`}
                          >
                            {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                          </div>
                          <span className="text-sm font-medium text-slate-800">{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0}
                    className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-900 disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
                  >
                    Anterior
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!userAnswers[currentQ.id]}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold shadow-sm disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer"
                  >
                    <span>
                      {currentQuestionIndex === conversationQuestions.length - 1
                        ? 'Ver guía de conversación'
                        : 'Siguiente'}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-2 pb-5 border-b border-slate-200">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-800 text-xs font-bold">
                    <ClipboardCheck className="w-3.5 h-3.5" />
                    <span>Síntesis para conversar en familia</span>
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900">
                    {conversationSummary.summaryHeadline}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 bg-slate-50 border border-slate-200 rounded-xl p-3">
                    {conversationSummary.disclaimer}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs uppercase font-bold text-slate-600 tracking-wider">
                    Orientaciones sugeridas por eje conversado
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {conversationSummary.focusPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                        <CheckCircle className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <span className="text-[11px] font-bold uppercase text-indigo-700 block">{pt.axis}</span>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{pt.focusArea}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Volver a responder</span>
                  </button>

                  {onProceedToAgreement && (
                    <button
                      type="button"
                      onClick={onProceedToAgreement}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-sm transition-all cursor-pointer"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Pasar a Acuerdos Familiares</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
