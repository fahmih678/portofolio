"use client";

import React from "react";
import { GitBranch, GitCommit } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ExperienceCard from "./ExperienceCard";
import { portfolioData } from "@/data/portfolio-data";

export default function ExperienceSection() {
  const { experiences } = portfolioData;

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20 lg:py-28 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full z-10">
        {/* Section Heading: $ git log --stat --oneline */}
        <SectionHeading
          icon={GitBranch}
          prefix="$"
          title="git log --stat --oneline"
        />

        {/* Git Timeline Container */}
        <div className="relative pl-6 sm:pl-8 lg:pl-0">
          {/* Vertical central timeline line */}
          <div className="absolute left-6 sm:left-8 lg:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-orange-500/40 via-orange-500/20 to-transparent -translate-x-1/2" />

          {/* Timeline commits list */}
          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.commitHash}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Commit Dot */}
                  <div className="absolute left-6 sm:left-8 lg:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                    <div className="h-4 w-4 rounded-full bg-[#070709] border-2 border-orange-500 relative ring-4 ring-[#141419]">
                      <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-25" />
                    </div>
                  </div>

                  {/* Empty side for desktop spacing */}
                  <div className="hidden lg:block w-1/2" />

                  {/* Experience Card Column */}
                  <div className="w-full lg:w-1/2 pl-8 sm:pl-10 lg:pl-0">
                    <ExperienceCard experience={exp} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Initial Commit Footer */}
          <div className="mt-16 text-center relative z-10">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-[#141419] px-6 py-2.5 text-xs font-code text-zinc-400 hover:text-orange-400 hover:border-orange-500/40 transition-colors cursor-default"
            >
              <GitCommit className="w-4 h-4 text-orange-400" />
              <span>Initial Commit (Hello World)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

