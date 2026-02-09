import React from "react";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-slate-500 px-3 py-1 text-xs font-medium
                 bg-slate-900 text-slate-100 hover:bg-slate-800
                 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 transition-colors"
    >
      <span>{theme === "dark" ? "Claro" : "Oscuro"}</span>
      <span className="text-lg">{theme === "dark" ? "☀️" : "🌙"}</span>
    </button>
  );
};

export default ThemeToggle;
