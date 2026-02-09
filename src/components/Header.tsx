// src/components/Header.tsx
import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-slate-900 text-white dark:bg-slate-50 dark:text-slate-900">
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
        <ul className="flex items-center gap-6 text-lg font-medium">
          <li>
            <a href="#sobre-mi" className="hover:text-sky-400 transition-colors">
              Sobre mi
            </a>
          </li>
          <li>
            <a
              href="#proyectos"
              className="hover:text-sky-400 transition-colors"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#tecnologias"
              className="hover:text-sky-400 transition-colors"
            >
              Tecnologías
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="hover:text-sky-400 transition-colors"
            >
              Contacto
            </a>
          </li>
            <ThemeToggle/>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
