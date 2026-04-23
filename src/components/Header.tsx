import React from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation("header");

  return (
    <header className="w-full bg-slate-900 text-white dark:bg-slate-50 dark:text-slate-900">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Menú */}
        <ul className="flex items-center gap-6 text-lg font-medium">
          <li>
            <a href="#sobre-mi" className="transition-colors hover:text-sky-400">
              {t("nav.about")}
            </a>
          </li>
          <li>
            <a href="#proyectos" className="transition-colors hover:text-sky-400">
              {t("nav.projects")}
            </a>
          </li>
          <li>
            <a href="#tecnologias" className="transition-colors hover:text-sky-400">
              {t("nav.technologies")}
            </a>
          </li>
          <li>
            <a href="#contacto" className="transition-colors hover:text-sky-400">
              {t("nav.contact")}
            </a>
          </li>
        </ul>

        {/* Controles derecha */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
