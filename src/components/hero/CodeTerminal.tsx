"use client";

import React, { useState } from "react";
import { Play, Layers, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function CodeTerminal() {
  const { terminal } = portfolioData;
  const [isRunning, setIsRunning] = useState(false);
  const [runMessage, setRunMessage] = useState<string | null>(null);

  const handleRunProfile = () => {
    setIsRunning(true);
    setRunMessage("Executing profile...");
    setTimeout(() => {
      setIsRunning(false);
      setRunMessage("System initialized: Ready for collaboration!");
      setTimeout(() => setRunMessage(null), 4000);
    }, 1200);
  };

  const handleViewProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      setRunMessage("Projects section coming soon in next chapter!");
      setTimeout(() => setRunMessage(null), 3000);
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:mx-0 z-10">
      {/* Ambient background glow specifically for terminal */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-500/10 via-purple-500/10 to-sky-500/10 dark:from-orange-500/20 dark:via-purple-500/15 dark:to-sky-500/20 blur-xl opacity-70" />

      {/* Terminal Window */}
      <div className="relative rounded-2xl border border-slate-200 dark:border-zinc-800/90 bg-white/95 dark:bg-[#0d0d12]/95 backdrop-blur-xl shadow-xl dark:shadow-2xl overflow-hidden transition-colors duration-300">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-zinc-800/80 bg-slate-100/90 dark:bg-zinc-900/40 px-4 py-3 select-none">
          {/* macOS 3 Traffic Lights */}
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ef4444] inline-block hover:opacity-80 transition-opacity cursor-pointer" />
            <span className="h-3 w-3 rounded-full bg-[#f59e0b] inline-block hover:opacity-80 transition-opacity cursor-pointer" />
            <span className="h-3 w-3 rounded-full bg-[#10b981] inline-block hover:opacity-80 transition-opacity cursor-pointer" />
          </div>

          {/* Centered Tab Title */}
          <div className="flex items-center gap-1.5 text-xs font-code text-slate-600 dark:text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-orange-500 inline-block" />
            <span>{terminal.filename}</span>
          </div>

          {/* Spacer for symmetry */}
          <div className="w-12 text-right text-[10px] font-code text-slate-400 dark:text-zinc-600">
            TSX
          </div>
        </div>

        {/* Code Content with Line Numbers */}
        <div className="p-4 sm:p-6 font-code text-xs sm:text-sm leading-relaxed overflow-x-auto">
          {/* Line 1 */}
          <div className="flex gap-4">
            <span className="w-6 text-right text-slate-400 dark:text-zinc-600 select-none">1</span>
            <span className="text-slate-400 dark:text-zinc-500 italic">{terminal.comment}</span>
          </div>

          {/* Line 2 */}
          <div className="flex gap-4">
            <span className="w-6 text-right text-slate-400 dark:text-zinc-600 select-none">2</span>
            <span>
              <span className="text-purple-600 dark:text-purple-400 font-semibold">import</span>{" "}
              <span className="text-slate-700 dark:text-zinc-300">{"{ "}</span>
              <span className="text-blue-600 dark:text-sky-300 font-medium">Developer</span>
              <span className="text-slate-700 dark:text-zinc-300">{" }"}</span>{" "}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">from</span>{" "}
              <span className="text-emerald-600 dark:text-emerald-400">&apos;{terminal.importPath}&apos;</span>
              <span className="text-slate-700 dark:text-zinc-300">;</span>
            </span>
          </div>

          {/* Line 3 */}
          <div className="flex gap-4">
            <span className="w-6 text-right text-slate-400 dark:text-zinc-600 select-none">3</span>
            <span className="text-transparent">.</span>
          </div>

          {/* Line 4 */}
          <div className="flex gap-4">
            <span className="w-6 text-right text-slate-400 dark:text-zinc-600 select-none">4</span>
            <span>
              <span className="text-purple-600 dark:text-purple-400 font-semibold">const</span>{" "}
              <span className="text-amber-600 dark:text-amber-300 font-semibold">{terminal.componentName}</span>{" "}
              <span className="text-slate-500 dark:text-zinc-400">=</span>{" "}
              <span className="text-slate-700 dark:text-zinc-300">()</span>{" "}
              <span className="text-purple-600 dark:text-purple-400 font-semibold">=&gt;</span>{" "}
              <span className="text-slate-700 dark:text-zinc-300">{"{"}</span>
            </span>
          </div>

          {/* Line 5 */}
          <div className="flex gap-4">
            <span className="w-6 text-right text-slate-400 dark:text-zinc-600 select-none">5</span>
            <span className="pl-4">
              <span className="text-purple-600 dark:text-purple-400 font-semibold">return</span>{" "}
              <span className="text-slate-700 dark:text-zinc-300">(</span>
            </span>
          </div>

          {/* Line 6 */}
          <div className="flex gap-4">
            <span className="w-6 text-right text-slate-400 dark:text-zinc-600 select-none">6</span>
            <span className="pl-8">
              <span className="text-slate-500 dark:text-zinc-400">&lt;</span>
              <span className="text-blue-600 dark:text-sky-300 font-medium">Developer</span>
            </span>
          </div>

          {/* Line 7 */}
          <div className="flex gap-4">
            <span className="w-6 text-right text-slate-400 dark:text-zinc-600 select-none">7</span>
            <span className="pl-12">
              <span className="text-orange-600 dark:text-orange-400 font-medium">name</span>
              <span className="text-slate-500 dark:text-zinc-400">=</span>
              <span className="text-emerald-600 dark:text-emerald-400">&quot;{terminal.props.name}&quot;</span>
            </span>
          </div>

          {/* Line 8 */}
          <div className="flex gap-4">
            <span className="w-6 text-right text-slate-400 dark:text-zinc-600 select-none">8</span>
            <span className="pl-12">
              <span className="text-orange-600 dark:text-orange-400 font-medium">role</span>
              <span className="text-slate-500 dark:text-zinc-400">=</span>
              <span className="text-emerald-600 dark:text-emerald-400">&quot;{terminal.props.role}&quot;</span>
            </span>
          </div>

          {/* Line 9 */}
          <div className="flex gap-4">
            <span className="w-6 text-right text-slate-400 dark:text-zinc-600 select-none">9</span>
            <span className="pl-12">
              <span className="text-orange-600 dark:text-orange-400 font-medium">passion</span>
              <span className="text-slate-500 dark:text-zinc-400">=</span>
              <span className="text-emerald-600 dark:text-emerald-400">&quot;{terminal.props.passion}&quot;</span>
            </span>
          </div>

          {/* Line 10 */}
          <div className="flex gap-4">
            <span className="w-6 text-right text-slate-400 dark:text-zinc-600 select-none">10</span>
            <span className="pl-8 text-slate-500 dark:text-zinc-400">/&gt;</span>
          </div>

          {/* Line 11 */}
          <div className="flex gap-4">
            <span className="w-6 text-right text-slate-400 dark:text-zinc-600 select-none">11</span>
            <span className="pl-4 text-slate-700 dark:text-zinc-300">);</span>
          </div>

          {/* Line 12 */}
          <div className="flex gap-4">
            <span className="w-6 text-right text-slate-400 dark:text-zinc-600 select-none">12</span>
            <span className="text-slate-700 dark:text-zinc-300">{"};"}</span>
          </div>
        </div>

        {/* Status toast if action is clicked */}
        {runMessage && (
          <div className="mx-4 mb-2 flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-2 text-xs font-code text-emerald-700 dark:text-emerald-300 animate-fade-in">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>{runMessage}</span>
          </div>
        )}

        {/* Action Buttons Bar at bottom of Terminal */}
        <div className="flex items-center gap-3 border-t border-slate-200 dark:border-zinc-800/80 bg-slate-50 dark:bg-zinc-900/30 p-4">
          <button
            type="button"
            onClick={handleRunProfile}
            disabled={isRunning}
            className="flex items-center gap-2 rounded-lg border border-orange-500/40 dark:border-orange-500/50 bg-orange-500/10 px-4 py-2 text-xs font-medium text-orange-600 dark:text-orange-400 transition-all hover:bg-orange-500/20 hover:border-orange-400 active:scale-95 disabled:opacity-50 cursor-pointer shadow-xs"
          >
            <Play className={`h-3.5 w-3.5 fill-current ${isRunning ? "animate-spin" : ""}`} />
            <span>{isRunning ? "Running..." : "Run Profile"}</span>
          </button>

          <button
            type="button"
            onClick={handleViewProjects}
            className="flex items-center gap-2 rounded-lg border border-slate-300 dark:border-zinc-700/80 bg-white dark:bg-zinc-800/40 px-4 py-2 text-xs font-medium text-slate-700 dark:text-zinc-300 transition-all hover:bg-slate-100 dark:hover:bg-zinc-800 hover:border-slate-400 dark:hover:border-zinc-600 active:scale-95 cursor-pointer shadow-xs"
          >
            <Layers className="h-3.5 w-3.5 text-slate-500 dark:text-zinc-400" />
            <span>View Projects</span>
          </button>
        </div>
      </div>
    </div>
  );
}


