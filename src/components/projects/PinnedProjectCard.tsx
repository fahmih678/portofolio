"use client";

import React from "react";
import { ArrowUpRight, Star, GitFork, BookMarked } from "lucide-react";
import { PinnedProject } from "@/types/portfolio";

interface PinnedProjectCardProps {
  project: PinnedProject;
}

export default function PinnedProjectCard({ project }: PinnedProjectCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-[#141419] p-5 sm:p-6 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-orange-500/40 hover:-translate-y-1 hover:shadow-2xl group relative overflow-hidden h-full">
      {/* Top Bar with Book icon and Public badge */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <BookMarked className="w-4 h-4 text-zinc-500" />
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-base text-orange-300 group-hover:text-orange-400 group-hover:underline transition-colors truncate font-code"
          >
            {project.title}
          </a>
          <span className="ml-auto text-[10px] border border-zinc-800 rounded-full px-2 py-0.5 text-zinc-500 font-code bg-zinc-900/60">
            Public
          </span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-zinc-400 line-clamp-3 mb-4 leading-relaxed font-sans">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-orange-500/5 border border-orange-500/15 px-2 py-0.5 text-[10px] font-code text-orange-300/90"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Stats & Demo Link */}
      <div className="flex items-center gap-4 text-xs text-zinc-500 pt-4 border-t border-zinc-800/80 font-code">
        {/* Language dot */}
        <div className="flex items-center gap-1.5">
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: project.languageColor }}
          />
          <span className="text-[11px] text-zinc-400">{project.language}</span>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-1 hover:text-orange-400 transition-colors">
          <Star className="w-3.5 h-3.5 text-zinc-500" />
          <span>{project.stars}</span>
        </div>

        {/* Forks */}
        <div className="flex items-center gap-1 hover:text-orange-400 transition-colors">
          <GitFork className="w-3.5 h-3.5 text-zinc-500" />
          <span>{project.forks}</span>
        </div>

        {/* External Demo Link */}
        <div className="ml-auto">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded border border-zinc-700/80 bg-zinc-800/50 px-2.5 py-1 text-[11px] text-zinc-300 hover:border-orange-500/50 hover:text-orange-300 transition-colors"
          >
            <span>Demo</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

