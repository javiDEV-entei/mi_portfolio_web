import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => i18n.changeLanguage("es")}
        className={`rounded-md p-1 transition ${
          i18n.resolvedLanguage === "es"
            ? "ring-2 ring-sky-400"
            : "opacity-70 hover:opacity-100"
        }`}
        aria-label="Cambiar a español"
      >
        <img 
        src='public/header/banderas/icono-spain-flag.png'
         alt="Español" 
         className="h-6 w-8 object-cover rounded-sm" />
      </button>

      <button
        type="button"
        onClick={() => i18n.changeLanguage("en")}
        className={`rounded-md p-1 transition ${
          i18n.resolvedLanguage === "en"
            ? "ring-2 ring-sky-400"
            : "opacity-70 hover:opacity-100"
        }`}
        aria-label="Switch to English"
      >
        <img src='public/header/banderas/icono-usa-flag.png'
         alt="English"
        className="h-6 w-8 object-cover rounded-sm" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;