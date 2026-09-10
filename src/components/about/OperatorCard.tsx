"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio-data";

export default function OperatorCard() {
  const { about, developer } = portfolioData;

  return (
    <div className="relative group w-full">
      {/* Ambient glowing backlight */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-500 to-blue-600 blur opacity-20 group-hover:opacity-40 transition duration-1000" />

      {/* Main card box */}
      <div className="relative rounded-2xl border border-orange-500/30 bg-[#141419] p-6 lg:p-10 overflow-hidden shadow-2xl">
        {/* Holographic Scanline */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent shadow-[0_0_15px_rgba(249,115,22,0.6)] animate-scanline pointer-events-none" />

        {/* Avatar with Dual Concentric Radar Rings */}
        <div className="relative w-44 h-44 sm:w-48 sm:h-48 mx-auto mb-8">
          {/* Outer ring (clockwise) */}
          <div className="absolute inset-0 rounded-full border-2 border-orange-500/40 animate-spin-slow-reverse border-t-transparent border-b-transparent" />

          {/* Inner ring (counter-clockwise) */}
          <div className="absolute inset-2 rounded-full border-2 border-blue-500/40 animate-spin-slow border-l-transparent border-r-transparent" />

          {/* Avatar frame */}
          <div className="absolute inset-4 rounded-full overflow-hidden bg-zinc-900 border border-zinc-700 shadow-inner">
            <Image
              src={developer.avatarUrl}
              alt={about.operatorName}
              width={192}
              height={192}
              unoptimized
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Status online green dot */}
          <div className="absolute bottom-4 right-4 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#141419] shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
        </div>

        {/* Operator Information Monospace Table */}
        <div className="font-code text-xs sm:text-sm space-y-3">
          <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
            <span className="text-zinc-500">OPERATOR</span>
            <span className="text-orange-400 font-bold tracking-widest">
              {about.operatorName}
            </span>
          </div>

          <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
            <span className="text-zinc-500">ROLE</span>
            <span className="text-sky-400 font-semibold">{about.role}</span>
          </div>

          <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
            <span className="text-zinc-500">LOCATION</span>
            <span className="text-zinc-200">{about.location}</span>
          </div>

          <div className="flex justify-between items-center pt-1">
            <span className="text-zinc-500">STATUS</span>
            <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-xs text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {about.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

