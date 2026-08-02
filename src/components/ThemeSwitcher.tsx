"use client";

import { useTheme } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-md active:scale-95 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:bg-slate-800 dark:hover:text-indigo-400"
    >
      <span className="text-lg">{theme === "light" ? "☀️" : "🌙"}</span>

      <span>{theme === "light" ? "Светлая тема" : "Тёмная тема"}</span>
    </button>
  );
};

export default ThemeSwitcher;
