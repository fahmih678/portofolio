"use client";

import React from "react";
import { Calendar, FileCode } from "lucide-react";
import { GitCommitExperience } from "@/types/portfolio";

interface ExperienceCardProps {
  experience: GitCommitExperience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#141419] overflow-hidden shadow-md dark:shadow-xl transition-all duration-300 hover:border-orange-500/40 hover:-translate-y-1 group">
      {/* Commit Top Bar */}
      <div className="bg-slate-100 dark:bg-[#1c1c24] px-4 py-2.5 border-b border-slate-200 dark:border-zinc-800 flex items-center justify-between text-xs font-code">
        <div className="flex items-center gap-3">
          <span className="text-amber-600 dark:text-amber-400 font-semibold">{experience.commitHash}</span>
          <span className="rounded bg-sky-500/10 border border-sky-500/30 px-2 py-0.5 text-[10px] text-sky-600 dark:text-sky-400 font-medium">
            {experience.branch}
          </span>
        </div>
        <span className="text-slate-600 dark:text-zinc-400 text-[11px] font-semibold">{experience.company}</span>
      </div>

      {/* Commit Body */}
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-code mb-3">
          <Calendar className="w-3.5 h-3.5 text-orange-500 dark:text-orange-400" />
          <span>{experience.period}</span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors mb-2">
          {experience.role}{" "}
          <span className="text-slate-500 dark:text-zinc-500 font-normal text-sm">
            @ {experience.company}
          </span>
        </h3>

        <div className="mt-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-sans leading-relaxed border-l-2 border-orange-500/30 pl-4 py-1">
          {experience.description}
        </div>

        {/* Tech Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {experience.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-orange-500/10 dark:bg-orange-500/5 border border-orange-500/25 dark:border-orange-500/20 px-2 py-0.5 text-[10px] font-code text-orange-600 dark:text-orange-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Git Stat Footer */}
      <div className="bg-slate-50 dark:bg-[#101015] px-4 py-2 border-t border-slate-200 dark:border-zinc-800/80 flex items-center gap-4 text-[11px] font-code text-slate-500 dark:text-zinc-400">
        <div className="flex items-center gap-1.5">
          <FileCode className="w-3 h-3 text-slate-400 dark:text-zinc-500" />
          <span>{experience.stats.filesChanged} files changed</span>
        </div>
        <div className="text-emerald-600 dark:text-emerald-400 font-medium">
          +{experience.stats.insertions} insertions
        </div>
        <div className="text-rose-600 dark:text-rose-400 font-medium">
          -{experience.stats.deletions} deletions
        </div>
      </div>
    </div>
  );
}

