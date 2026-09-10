"use client";

import React, { useState } from "react";
import { Cpu, Layers, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioData } from "@/data/portfolio-data";

export default function SkillsSection() {
  const { skillsCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...skillsCategories.map((c) => c.name)];

  const displayedSkills =
    activeCategory === "All"
      ? skillsCategories.flatMap((c) => c.skills.map((s) => ({ ...s, category: c.name })))
      : skillsCategories
          .find((c) => c.name === activeCategory)
          ?.skills.map((s) => ({ ...s, category: activeCategory })) || [];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20 lg:py-28 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full z-10">
        {/* Section Heading: # Skills.json */}
        <SectionHeading icon={Cpu} prefix="#" title="Skills.json" />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-lg px-4 py-2 text-xs font-code transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-orange-500/20 text-orange-300 border border-orange-500/60 shadow-[0_0_15px_rgba(249,115,22,0.25)]"
                    : "bg-[#121217] text-zinc-400 border border-zinc-800 hover:text-zinc-200 hover:border-zinc-700"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {displayedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="group relative rounded-xl border border-zinc-800/80 bg-[#121217]/80 p-4 backdrop-blur-sm transition-all duration-300 hover:border-orange-500/50 hover:bg-[#181822] hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(249,115,22,0.15)] flex flex-col justify-between"
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-zinc-600 group-hover:text-orange-400 transition-colors shrink-0" />
                <span className="text-[10px] font-code text-zinc-500 group-hover:text-zinc-400 transition-colors uppercase tracking-wider truncate">
                  {skill.category}
                </span>
              </div>

              <div className="text-sm sm:text-base font-semibold text-zinc-200 group-hover:text-white font-code transition-colors">
                {skill.name}
              </div>

              <div className="mt-3 h-0.5 w-full bg-zinc-800 overflow-hidden rounded-full">
                <div className="h-full bg-gradient-to-r from-orange-500 to-sky-400 w-0 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Explore universe note */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-[#121217] px-4 py-2 text-xs font-code text-zinc-400">
            <Layers className="w-3.5 h-3.5 text-orange-400" />
            <span>Interactive technology universe :: Ready for production</span>
          </div>
        </div>
      </div>
    </section>
  );
}

