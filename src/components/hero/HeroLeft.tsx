"use client";

import React from "react";
import { ArrowUpRight, Terminal as TerminalIcon } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

function GithubIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function HeroLeft() {
  const { kernel, developer, loadedModules } = portfolioData;

  const cyberClipPath =
    "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)";

  return (
    <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-8 z-10">
      {/* 1. System Kernel Status Badge */}
      <div className="space-y-4 flex flex-col items-center lg:items-start">
        <div className="inline-flex items-center gap-2 self-center lg:self-start rounded border border-orange-500/30 bg-orange-500/5 px-3 py-1 text-xs font-code text-orange-400 shadow-sm backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500 shadow-[0_0_6px_rgba(230,83,32,0.6)]" />
          </span>
          <span>
            {kernel.name} :: v2.5.0 {kernel.status}
          </span>
        </div>

        {/* 2. Main Title */}
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
          <span className="text-slate-900 dark:text-zinc-100">{developer.prefix} </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600 dark:from-orange-400 dark:to-blue-500 relative inline-block">
            {developer.firstName} {developer.lastName}
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500/50 rounded-full blur-sm" />
          </span>
        </h1>

        {/* 3. Subtitle / Architect Tagline */}
        <p className="text-lg sm:text-xl text-slate-600 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed pt-1">
          <span className="text-orange-600 dark:text-orange-400 font-code font-medium">
            {developer.roleTag}
          </span>{" "}
          <span className="text-slate-900 dark:text-zinc-200 font-normal">{developer.tagline}</span>{" "}
          {developer.description}
        </p>
      </div>

      {/* 4. Action Cards (Cyber Chamfered Cut-Corners) */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch w-full max-w-xl mx-auto lg:mx-0">
        {/* Initialize OS Card */}
        <a
          href={developer.osDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group cursor-pointer flex-1 min-w-[240px]"
        >
          {/* Glowing Cyber Gradient Border */}
          <div
            className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-blue-600 opacity-30 group-hover:opacity-70 transition duration-500"
            style={{ clipPath: cyberClipPath }}
          />
          {/* Card Body */}
          <div
            className="relative bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-orange-500/30 p-4 flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-[#202020] transition-colors shadow-lg dark:shadow-2xl h-full"
            style={{ clipPath: cyberClipPath }}
          >
            <div className="relative w-10 h-10 shrink-0 flex items-center justify-center bg-orange-500/10 rounded-sm border border-orange-500/20 group-hover:border-orange-500/50 group-hover:scale-105 transition-all">
              <TerminalIcon className="w-5 h-5 text-orange-500 dark:text-orange-400" />
            </div>
            <div className="flex-1 text-left min-w-0">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors truncate">
                  Initialize OS
                </h3>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 dark:text-gray-500 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors ml-2 shrink-0" />
              </div>
              <div className="w-full bg-slate-200 dark:bg-gray-800 h-1 rounded-full overflow-hidden mb-1">
                <div className="h-full bg-orange-500 w-[60%] group-hover:w-[85%] transition-all duration-700 ease-out relative">
                  <div className="absolute inset-0 bg-white/30 animate-pulse" />
                </div>
              </div>
              <div className="flex justify-between font-code text-[9px] text-slate-500 dark:text-gray-400">
                <span className="truncate mr-2">&gt; sudo boot_gui</span>
                <span className="text-orange-600 dark:text-orange-400 group-hover:animate-pulse whitespace-nowrap">
                  Loading...
                </span>
              </div>
            </div>
          </div>
        </a>

        {/* GitHub Card */}
        <a
          href={developer.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group cursor-pointer sm:w-auto shrink-0"
        >
          {/* Glowing Cyber Gradient Border */}
          <div
            className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-orange-400 opacity-20 group-hover:opacity-50 transition duration-500"
            style={{ clipPath: cyberClipPath }}
          />
          {/* Card Body */}
          <div
            className="relative bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-orange-500/30 group-hover:border-orange-500/50 p-4 flex items-center justify-center gap-3 hover:bg-slate-50 dark:hover:bg-[#202020] transition-colors shadow-md dark:shadow-xl h-full min-w-[140px]"
            style={{ clipPath: cyberClipPath }}
          >
            <GithubIcon className="w-5 h-5 text-slate-800 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors" />
            <div className="text-left">
              <div className="text-[10px] text-slate-500 dark:text-gray-400 font-code leading-none mb-1">
                Check out
              </div>
              <div className="font-bold text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors leading-none">
                GitHub
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* 5. Loaded Modules Section */}
      <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-2 opacity-90">
        <span className="text-xs font-code text-slate-500 dark:text-gray-500 mr-2 py-1">
          LOADED_MODULES:
        </span>
        {loadedModules.map((module) => (
          <span
            key={module}
            className="px-2 py-1 bg-orange-500/10 dark:bg-orange-500/5 border border-orange-500/25 dark:border-orange-500/20 text-orange-600 dark:text-orange-400/80 text-[10px] font-code rounded tracking-wider hover:bg-orange-500/15 dark:hover:bg-orange-500/10 hover:border-orange-500/40 transition-colors cursor-default"
          >
            {module}
          </span>
        ))}
      </div>
    </div>
  );
}
