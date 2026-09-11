"use client";

import React from "react";
import { Terminal, Cpu, Code2, Coffee } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function ProfileLog() {
  const { about } = portfolioData;

  const statIcons = {
    cpu: Cpu,
    code: Code2,
    coffee: Coffee,
  };

  return (
    <div className="space-y-8 w-full">
      {/* 1. Terminal user_profile.log */}
      <div className="rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#121217] font-code text-xs sm:text-sm shadow-md dark:shadow-xl overflow-hidden group hover:border-orange-500/40 transition-colors">
        {/* Terminal Title Bar */}
        <div className="bg-slate-100 dark:bg-zinc-900/70 px-4 py-2.5 flex items-center gap-2 border-b border-slate-200 dark:border-zinc-800">
          <Terminal className="w-3.5 h-3.5 text-slate-500 dark:text-zinc-400" />
          <span className="text-slate-600 dark:text-zinc-400 text-xs">user_profile.log</span>
        </div>

        {/* Terminal Content */}
        <div className="p-5 sm:p-6 text-slate-700 dark:text-zinc-300 leading-relaxed space-y-5">
          <div>
            <p className="flex items-center gap-2 text-slate-600 dark:text-zinc-400 mb-1.5">
              <span className="text-sky-500 dark:text-sky-400">➜</span>
              <span className="text-purple-600 dark:text-purple-400 font-semibold">whoami</span>
            </p>
            <p className="pl-4 border-l-2 border-orange-500/40 text-slate-700 dark:text-zinc-300 text-xs sm:text-sm font-sans leading-relaxed">
              {about.whoami}
            </p>
          </div>

          <div>
            <p className="flex items-center gap-2 text-slate-600 dark:text-zinc-400 mb-1.5">
              <span className="text-sky-500 dark:text-sky-400">➜</span>
              <span className="text-purple-600 dark:text-purple-400 font-semibold">cat</span>
              <span className="text-slate-800 dark:text-zinc-300 font-medium">mission.txt</span>
            </p>
            <p className="pl-4 border-l-2 border-orange-500/40 text-slate-600 dark:text-zinc-400 text-xs sm:text-sm font-sans leading-relaxed">
              {about.mission}
            </p>
          </div>
        </div>
      </div>

      {/* 2. 3 Stats Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {about.stats.map((stat) => {
          const Icon = statIcons[stat.iconName] || Cpu;
          return (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-200 dark:border-zinc-800/90 bg-white dark:bg-[#121217] p-4.5 transition-all hover:border-orange-500/40 hover:-translate-y-0.5 group shadow-sm dark:shadow-lg"
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className={`w-4 h-4 ${stat.colorClass} transition-colors`} />
                <span className="text-[11px] text-slate-500 dark:text-zinc-500 font-code tracking-wider">
                  {stat.label}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-code text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                {stat.value}{" "}
                <span className="text-sm font-normal text-slate-500 dark:text-zinc-500">{stat.unit}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

