"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  // Avoid hydration mismatch before client mount
  if (!mounted) {
    return (
      <div className="fixed top-5 right-5 sm:top-6 sm:right-8 z-50 h-10 w-28 rounded-full bg-neutral-900/50 border border-neutral-800 animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="fixed top-5 right-5 sm:top-6 sm:right-8 z-50 group flex items-center gap-2 px-3.5 py-1.5 rounded-full border transition-all duration-300 shadow-lg cursor-pointer select-none backdrop-blur-md bg-white/90 dark:bg-[#101016]/90 border-slate-300 dark:border-neutral-800 hover:border-orange-500/50 dark:hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.25)]"
    >
      {/* Animated Icon Box */}
      <div className="relative flex items-center justify-center w-6 h-6 rounded-full transition-transform duration-500 group-hover:rotate-45">
        {isDark ? (
          <Moon className="w-4 h-4 text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
        )}
      </div>

      {/* Cyber Status Label */}
      <div className="flex items-center gap-1.5 font-code text-xs font-semibold tracking-wider">
        <span className="text-zinc-500 dark:text-zinc-400 text-[10px]">MODE:</span>
        <span className="text-orange-600 dark:text-orange-400 font-bold uppercase">
          {isDark ? "DARK" : "LIGHT"}
        </span>
      </div>

      {/* Pulsing indicator dot */}
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          isDark ? "bg-orange-500 animate-pulse" : "bg-amber-500"
        }`}
      />
    </button>
  );
}

