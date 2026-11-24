import React from 'react';
import { PLATFORM_META, CHANGELOG_DATA } from '../data/platformData';
import {
  Info,
  ShieldCheck,
  FileText,
  Accessibility,
  GraduationCap,
  ExternalLink,
  History,
  Lock
} from 'lucide-react';

export default function AcercaDeSection() {
  return (
    <section className="py-10 sm:py-14 bg-white border-b border-slate-200" id="acerca-de">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
            <Info className="w-3.5 h-3.5 text-indigo-600" />
            <span>Acerca de · Créditos · Privacidad · Licencias · Accesibilidad</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {PLATFORM_META.brandName}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {PLATFORM_META.workingSubtitle}. Última revisión documental: <strong>{PLATFORM_META.reviewDate}</strong> · Versión <strong>{PLATFORM_META.version}</strong>.
          </p>
        </div>

        {/* Authorship & Institutional Limits (P0-06) */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-4">
          <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>Autoría, créditos y alcance institucional</span>
          </div>
          <p className="text-sm sm:text-base text-slate-900 font-semibold leading-relaxed">
            Artefacto digital de autoría y desarrollo del <strong>{PLATFORM_META.author}</strong>, {PLATFORM_META.framework}.
          </p>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {PLATFORM_META.collaboratorsNote}
          </p>
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 leading-relaxed">
            <strong>Alcance institucional:</strong> {PLATFORM_META.institutionalDisclaimer}
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs pt-1">
            <span className="font-mono text-indigo-700">Contacto para correcciones: {PLATFORM_META.authorEmail}</span>
            <a
              href={PLATFORM_META.authorCvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-indigo-700 hover:underline"
            >
              <span>Ver CVuy (ANII)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Privacy & Zero Data Collection (P0-01 to P0-04) */}
        <div className="bg-emerald-50/60 rounded-3xl p-6 sm:p-8 border border-emerald-200 space-y-3">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
            <Lock className="w-4 h-4" />
            <span>Política de privacidad y datos personales (P0-01 a P0-04)</span>
          </div>
          <h2 className="font-heading text-lg sm:text-xl font-extrabold text-slate-900">
            Cero recolección de datos personales en la plataforma educativa
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <li>• Esta edición pública no contiene formularios de investigación, paneles con contraseñas en el cliente, códigos QR de relevamiento ni envíos a servidores o webhooks externos.</li>
            <li>• Los recorridos para estudiantes, familias y docentes funcionan sin registro ni cuentas.</li>
            <li>• El diario opcional de observación de pantallas y los generadores de acuerdos imprimibles operan exclusivamente en la memoria temporal del navegador y pueden borrarse al instante sin persistencia.</li>
            <li>• No se solicitan capturas de pantalla, fotografías ni relatos de casos sensibles dentro del sitio web.</li>
          </ul>
        </div>

        {/* Licenses & Third-Party Resources (P0-11) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-4">
          <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>Licencias y derechos de uso (P0-11)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <h3 className="font-heading font-bold text-slate-900">Contenidos originales</h3>
              <p className="text-slate-600 leading-relaxed">
                Los textos, guiones, secuencias y orientaciones de autoría propia se publican bajo licencia{' '}
                <a
                  href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-700 font-bold underline"
                >
                  CC BY-NC-SA 4.0
                </a>{' '}
                (reconocimiento, uso no comercial y compartir igual).
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <h3 className="font-heading font-bold text-slate-900">Código y librerías</h3>
              <p className="text-slate-600 leading-relaxed">
                El código fuente de la interfaz web y sus dependencias (React, Vite, Tailwind CSS, Lucide Icons, qrcode.react, canvas-confetti) se rigen por licencias de código abierto (MIT) separadas del contenido editorial.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <h3 className="font-heading font-bold text-slate-900">Recursos de terceros</h3>
              <p className="text-slate-600 leading-relaxed">
                Los documentos PDF y videos de organismos (ANEP, DGEIP, DGES, AGESIC, URCDP, Plan Ceibal, UNICEF, UNESCO) mantienen la titularidad y condiciones de uso de sus autores e instituciones emisoras.
              </p>
            </div>
          </div>
        </div>

        {/* Accessibility (P0-12) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-3">
          <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase tracking-wider">
            <Accessibility className="w-4 h-4" />
            <span>Accesibilidad y uso inclusivo · Meta técnica WCAG 2.2 AA (P0-12)</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            La plataforma toma <strong>WCAG 2.2 nivel AA</strong> como meta técnica de mejora continua (no declarada aún como certificación formal auditada externamente). Incluye enlace de salto al contenido principal, foco visible por teclado, etiquetas en formularios, respeto a <code>prefers-reduced-motion</code> (incluyendo confeti y transiciones), contraste legible en pantalla e impresión A4 en blanco y negro.
          </p>
        </div>

        {/* Changelog (P2-02) */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-4">
          <div className="flex items-center gap-2 text-slate-800 font-bold text-xs uppercase tracking-wider">
            <History className="w-4 h-4 text-indigo-600" />
            <span>Bitácora de versiones y trazabilidad editorial</span>
          </div>
          <div className="space-y-4">
            {CHANGELOG_DATA.map((rel, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-4 border border-slate-200 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-heading font-extrabold text-sm text-slate-900">
                    Versión {rel.version}
                  </span>
                  <span className="text-xs text-slate-500">
                    {rel.date} · {rel.reviewer}
                  </span>
                </div>
                <ul className="space-y-1 text-xs text-slate-700">
                  {rel.changes.map((c, cIdx) => (
                    <li key={cIdx}>• {c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
