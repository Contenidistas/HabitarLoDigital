import React, { useState } from 'react';
import {
  Compass,
  Users,
  HeartHandshake,
  GraduationCap,
  Briefcase,
  BookOpenCheck,
  Scale,
  Info,
  Menu,
  X,
  PhoneCall
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio', icon: Compass },
    { id: 'estudiantes', label: 'Estudiantes', icon: Users },
    { id: 'familias', label: 'Familias', icon: HeartHandshake },
    { id: 'docentes', label: 'Docentes y centros', icon: GraduationCap },
    { id: 'poite', label: 'POITE | Secundaria', icon: Briefcase },
    { id: 'dgeip', label: 'Contenidistas DGEIP', icon: BookOpenCheck },
    { id: 'fuentes', label: 'Fuentes y ayuda', icon: Scale },
    { id: 'acerca', label: 'Acerca de', icon: Info }
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs no-print">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-3">
          {/* Logo & Brand */}
          <button
            type="button"
            onClick={() => handleNavClick('inicio')}
            className="flex items-center gap-2.5 text-left group shrink-0 cursor-pointer"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-500 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <Compass className="w-4 h-4 text-white" aria-hidden="true" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-sm sm:text-base text-slate-900 tracking-tight">
                  Habitar lo digital
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200">
                  EDyTIC 2027
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Navegación principal">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                activeTab === item.id ||
                (item.id === 'fuentes' && (activeTab === 'videos' || activeTab === 'documentos'));
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-700 hover:text-indigo-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-500'}`}
                    aria-hidden="true"
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Emergency / Help Shortcut & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleNavClick('fuentes')}
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold text-red-800 bg-red-50 hover:bg-red-100 border border-red-200 transition-colors cursor-pointer shrink-0"
              title="Canales oficiales de ayuda y protocolo ante incidentes"
            >
              <PhoneCall className="w-3.5 h-3.5 text-red-700" aria-hidden="true" />
              <span>Ayuda · 0800 5050</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Cerrar menú principal' : 'Abrir menú principal'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <nav
          className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 space-y-1 shadow-md"
          aria-label="Menú móvil"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              activeTab === item.id ||
              (item.id === 'fuentes' && (activeTab === 'videos' || activeTab === 'documentos'));
            return (
              <button
                type="button"
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-semibold text-left transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} aria-hidden="true" />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-2 border-t border-slate-100 mt-2">
            <button
              type="button"
              onClick={() => handleNavClick('fuentes')}
              className="flex items-center justify-center gap-2 w-full px-3 py-2.5 rounded-xl text-xs font-bold text-red-800 bg-red-50 border border-red-200 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-red-700" aria-hidden="true" />
              <span>Canales oficiales · Línea Azul INAU 0800 5050</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
