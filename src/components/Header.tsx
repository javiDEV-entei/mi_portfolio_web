// src/components/Header.tsx
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-slate-900 text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo (izquierda) */}
        <div className="flex items-center">
          {/* Cambia el src por la ruta de tu logo */}
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>

        {/* Menú (derecha) */}
        <ul className="flex items-center gap-6 text-sm font-medium">
          <li>
            <a href="#sobre-mi" className="hover:text-sky-400 transition-colors">
              sobre mi
            </a>
          </li>
          <li>
            <a
              href="#proyectos"
              className="hover:text-sky-400 transition-colors"
            >
              proyectos
            </a>
          </li>
          <li>
            <a
              href="#tecnologias"
              className="hover:text-sky-400 transition-colors"
            >
              tecnologías
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="hover:text-sky-400 transition-colors"
            >
              contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
