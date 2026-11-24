import React from 'react';
import { Compass, Users, HeartHandshake, GraduationCap, Scale } from 'lucide-react';

export default function BottomNavMobile({ activeTab, setActiveTab }) {
  const items = [
    { id: 'inicio', label: 'Inicio', icon: Compass },
    { id: 'estudiantes', label: 'Estudiantes', icon: Users },
    { id: 'familias', label: 'Familias', icon: HeartHandshake },
    { id: 'docentes', label: 'Docentes', icon: GraduationCap },
    { id: 'fuentes', label: 'Ayuda', icon: Scale }
  ];

  const handleClick = (id) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-2 py-1.5 flex items-center justify-around shadow-lg xl:hidden no-print"
      aria-label="Accesos rápidos móviles"
    >
      {items.map((item) => {
        const Icon = item.icon;
        const isActive =
          activeTab === item.id ||
          (item.id === 'docentes' && (activeTab === 'poite' || activeTab === 'dgeip')) ||
          (item.id === 'fuentes' && (activeTab === 'videos' || activeTab === 'documentos' || activeTab === 'acerca'));
        return (
          <button
            type="button"
            key={item.id}
            onClick={() => handleClick(item.id)}
            aria-current={isActive ? 'page' : undefined}
            className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all relative cursor-pointer ${
              isActive
                ? 'text-indigo-700 font-bold'
                : 'text-slate-600 font-medium hover:text-slate-900'
            }`}
          >
            <Icon className={`w-5 h-5 ${isActive ? 'text-indigo-700' : 'text-slate-500'}`} aria-hidden="true" />
            <span className="text-[10px] mt-0.5 tracking-tight leading-none">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
