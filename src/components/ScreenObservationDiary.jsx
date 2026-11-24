import React, { useState } from 'react';
import { Printer, Trash2, BookOpen, Sun, Moon, Users, CheckCircle2, Info } from 'lucide-react';

// P1-10: Diario opcional y no persistente de observación de pantallas (más allá de contar minutos).
// No requiere cuenta, no guarda datos en localStorage ni envía información por red.
export default function ScreenObservationDiary() {
  const [entries, setEntries] = useState([]);
  const [momento, setMomento] = useState('tarde');
  const [finalidad, setFinalidad] = useState('comunicacion');
  const [acompaniamento, setAcompaniamento] = useState('compartido');
  const [bienestar, setBienestar] = useState('tranquilo');
  const [actividadAlternativa, setActividadAlternativa] = useState('');

  const momentos = [
    { id: 'manana', label: 'Mañana / Antes de clase' },
    { id: 'tarde', label: 'Tarde / Luego de actividades' },
    { id: 'cena', label: 'Cerca de comidas familiares' },
    { id: 'noche', label: 'Noche / Previo a dormir' }
  ];

  const finalidades = [
    { id: 'tarea', label: 'Estudio o creación escolar' },
    { id: 'comunicacion', label: 'Comunicación con familia o pares' },
    { id: 'juego', label: 'Juego compartido o en línea' },
    { id: 'scroll', label: 'Videos o navegación continua' }
  ];

  const acompanamientos = [
    { id: 'compartido', label: 'En espacio común o con adultos' },
    { id: 'autonomo_acordado', label: 'Uso autónomo con pauta acordada' },
    { id: 'aislado', label: 'En solitario / puerta cerrada' }
  ];

  const estadosBienestar = [
    { id: 'tranquilo', label: 'Cierre calmo, buen descanso posterior' },
    { id: 'interrupciones', label: 'Varias interrupciones de notificaciones' },
    { id: 'tenso', label: 'Costó cerrar o generó enojo / cansancio' }
  ];

  const handleAddEntry = (e) => {
    e.preventDefault();
    setEntries((prev) => [
      {
        id: Date.now(),
        momentoLabel: momentos.find((m) => m.id === momento)?.label,
        momento,
        finalidadLabel: finalidades.find((f) => f.id === finalidad)?.label,
        finalidad,
        acompaniamentoLabel: acompanamientos.find((a) => a.id === acompaniamento)?.label,
        acompaniamento,
        bienestarLabel: estadosBienestar.find((b) => b.id === bienestar)?.label,
        bienestar,
        actividadAlternativa: actividadAlternativa.trim()
      },
      ...prev
    ]);
    setActividadAlternativa('');
  };

  const handleClear = () => {
    setEntries([]);
  };

  const nightCount = entries.filter((e) => e.momento === 'noche' || e.momento === 'cena').length;
  const tenseCount = entries.filter((e) => e.bienestar === 'tenso' || e.bienestar === 'interrupciones').length;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs" id="diario-observacion">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="space-y-1">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Diario opcional y no persistente (sin cuenta ni envío de datos)</span>
          </span>
          <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-slate-900">
            Observar cómo usamos las pantallas (más allá del reloj)
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            En lugar de contar minutos de forma compulsiva o culpabilizar, anotá brevemente para qué se usó la pantalla, en qué momento, si hubo compañía y cómo quedó el descanso o el juego presencial. Podés imprimir o borrar al instante.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0 no-print">
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Imprimir hoja</span>
          </button>
          {entries.length > 0 && (
            <button
              type="button"
              onClick={handleClear}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 text-xs font-bold cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Borrar todo ahora</span>
            </button>
          )}
        </div>
      </div>

      {/* Observation Form */}
      <form onSubmit={handleAddEntry} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 no-print">
        <div>
          <label htmlFor="obs-momento" className="block text-xs font-bold text-slate-700 mb-1">
            1. Momento del día
          </label>
          <select
            id="obs-momento"
            value={momento}
            onChange={(e) => setMomento(e.target.value)}
            className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl"
          >
            {momentos.map((m) => (
              <option key={m.id} value={m.id}>{m.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="obs-finalidad" className="block text-xs font-bold text-slate-700 mb-1">
            2. Finalidad principal
          </label>
          <select
            id="obs-finalidad"
            value={finalidad}
            onChange={(e) => setFinalidad(e.target.value)}
            className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl"
          >
            {finalidades.map((f) => (
              <option key={f.id} value={f.id}>{f.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="obs-acomp" className="block text-xs font-bold text-slate-700 mb-1">
            3. Contexto y acompañamiento
          </label>
          <select
            id="obs-acomp"
            value={acompaniamento}
            onChange={(e) => setAcompaniamento(e.target.value)}
            className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl"
          >
            {acompanamientos.map((a) => (
              <option key={a.id} value={a.id}>{a.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="obs-bienestar" className="block text-xs font-bold text-slate-700 mb-1">
            4. Cierre, interrupciones y descanso
          </label>
          <select
            id="obs-bienestar"
            value={bienestar}
            onChange={(e) => setBienestar(e.target.value)}
            className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl"
          >
            {estadosBienestar.map((b) => (
              <option key={b.id} value={b.id}>{b.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="obs-alt" className="block text-xs font-bold text-slate-700 mb-1">
            5. Actividad física / social / lectura del día
          </label>
          <input
            id="obs-alt"
            type="text"
            value={actividadAlternativa}
            onChange={(e) => setActividadAlternativa(e.target.value)}
            placeholder="Ej: plaza, lectura compartida, club..."
            className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl"
          />
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold cursor-pointer"
          >
            Agregar observación local
          </button>
        </div>
      </form>

      {/* Non-persistent notice */}
      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
        <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
        <span>
          <strong>Privacidad garantizada:</strong> estas notas existen solo en esta ventana mientras dialogan en casa. Al recargar la página o tocar «Borrar todo ahora», desaparecen por completo.
        </span>
      </div>

      {/* Recorded Observations List */}
      {entries.length > 0 && (
        <div className="space-y-4 pt-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-200 text-xs text-indigo-950">
              <strong className="block text-indigo-800">Observaciones anotadas</strong>
              <span className="text-lg font-extrabold">{entries.length}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950">
              <strong className="block text-amber-800">En comidas o previo al sueño</strong>
              <span className="text-lg font-extrabold">{nightCount}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950">
              <strong className="block text-teal-800">Con interrupciones o cierre tenso</strong>
              <span className="text-lg font-extrabold">{tenseCount}</span>
            </div>
          </div>

          <div className="space-y-2.5">
            {entries.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2 font-bold text-slate-900">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white border border-slate-200">
                      {item.momento === 'noche' ? <Moon className="w-3 h-3 text-indigo-600" /> : <Sun className="w-3 h-3 text-amber-600" />}
                      {item.momentoLabel}
                    </span>
                    <span className="text-indigo-700">{item.finalidadLabel}</span>
                    <span className="text-slate-500">· {item.acompaniamentoLabel}</span>
                  </div>
                  <p className="text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline mr-1" />
                    {item.bienestarLabel}
                    {item.actividadAlternativa && ` · Actividad alternativa: ${item.actividadAlternativa}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
