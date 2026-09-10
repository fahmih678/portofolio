"use client";

import React from "react";
import { Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function Footer() {
  const { developer } = portfolioData;

  return (
    <footer className="mt-20 pt-10 pb-8 text-center border-t border-zinc-900 z-10 relative">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Code2 className="w-5 h-5 text-orange-400" />
        <span className="font-code text-base sm:text-lg font-bold text-zinc-100">
          {developer.firstName} {developer.lastName}{" "}
          <span className="text-zinc-500 font-normal">|</span> Software Engineer
        </span>
      </div>

      <p className="font-code text-xs sm:text-sm text-zinc-400">
        Built with <span className="text-orange-400">&lt;3</span> using Next.js,
        TypeScript &amp; Tailwind CSS
      </p>

      <p className="font-code text-[11px] text-zinc-600 mt-2">
        &copy; {new Date().getFullYear()} {developer.firstName} {developer.lastName}. All
        rights reserved.
      </p>
    </footer>
  );
}

