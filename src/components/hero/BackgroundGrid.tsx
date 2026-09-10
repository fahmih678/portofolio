"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      {/* 1. Cyber Grid Pattern Background */}
      <div className="absolute inset-0 cyber-grid opacity-75" />

      {/* 2. Top-Left Warm Ambient Glow (Orange / Amber) */}
      <div className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-orange-600/20 via-amber-600/10 to-transparent blur-[130px] animate-pulse-glow" />

      {/* 3. Right Ambient Glow (Violet / Pink behind the IDE terminal) */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-purple-600/15 via-pink-600/10 to-transparent blur-[150px]" />

      {/* 4. Top-Right Watermark Code */}
      <div className="absolute top-8 right-16 sm:right-24 hidden md:block text-zinc-700/60 font-code text-xs tracking-wider">
        {portfolioData.watermarks.topRight}
      </div>

      {/* 5. Bottom-Left Watermark Code */}
      <div className="absolute bottom-8 left-8 sm:left-14 hidden sm:block text-emerald-500/30 font-code text-xs tracking-wide">
        {portfolioData.watermarks.bottomLeft}
      </div>

      {/* 6. Bottom Center Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-600 animate-bounce pointer-events-auto cursor-pointer">
        <ChevronDown className="w-5 h-5 text-zinc-500 hover:text-orange-400 transition-colors" />
      </div>
    </div>
  );
}

