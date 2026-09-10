"use client";

import React from "react";
import { FolderOpen, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import RepositoriesList from "./RepositoriesList";
import PinnedProjectCard from "./PinnedProjectCard";
import { portfolioData } from "@/data/portfolio-data";

export default function ProjectsSection() {
  const { pinnedProjects, repositories, developer } = portfolioData;

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 lg:py-28 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full z-10">
        {/* Section Heading: $ ls -la ~/projects */}
        <SectionHeading
          icon={FolderOpen}
          prefix="$"
          title="ls -la ~/projects"
        />

        {/* 2-Column Responsive Layout: Left Repositories (1/3), Right Pinned Projects (2/3) */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column: Repositories List */}
          <RepositoriesList repositories={repositories} />

          {/* Right Column: Pinned Projects Grid */}
          <div className="w-full lg:w-2/3">
            <div className="flex items-center gap-2 mb-4 font-code">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest pl-1">
                Pinned Projects
              </span>
              <div className="h-px bg-zinc-800 flex-1" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pinnedProjects.map((project) => (
                <PinnedProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </div>

        {/* View All Repositories Link Button */}
        <div className="mt-12 text-center">
          <a
            href={developer.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-[#141419] px-5 py-2.5 text-xs font-code font-semibold text-zinc-400 hover:text-orange-300 hover:border-orange-500/40 transition-colors shadow-lg"
          >
            <span>View all repositories on GitHub</span>
            <ChevronRight className="w-4 h-4 text-orange-400" />
          </a>
        </div>
      </div>
    </section>
  );
}

