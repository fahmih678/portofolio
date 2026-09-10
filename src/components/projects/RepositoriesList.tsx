"use client";

import React from "react";
import { BookMarked } from "lucide-react";
import { GitHubRepoItem } from "@/types/portfolio";

interface RepositoriesListProps {
  repositories: GitHubRepoItem[];
}

export default function RepositoriesList({ repositories }: RepositoriesListProps) {
  return (
    <div className="w-full lg:w-1/3 rounded-xl border border-zinc-800 bg-[#141419] overflow-hidden shadow-xl">
      {/* Repositories Header */}
      <div className="bg-[#1c1c24] px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-zinc-300 font-code">
          <BookMarked className="w-4 h-4 text-orange-400" />
          <span>Repositories</span>
        </div>
        <span className="rounded-full bg-zinc-900 border border-zinc-700 px-2.5 py-0.5 text-xs font-code text-zinc-400">
          {repositories.length}
        </span>
      </div>

      {/* Scrollable Repo List */}
      <div className="divide-y divide-zinc-800/80 max-h-[520px] overflow-y-auto custom-scrollbar">
        {repositories.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 hover:bg-[#1a1a24] transition-colors group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-sm text-orange-300 group-hover:underline font-code truncate max-w-[200px]">
                {repo.name}
              </span>
              <span className="text-[10px] border border-zinc-800 rounded-full px-2 py-0.5 text-zinc-500 font-code group-hover:border-zinc-700">
                Public
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-zinc-500 font-code">
              {repo.language && (
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor || "#f1e05a" }}
                  />
                  <span>{repo.language}</span>
                </div>
              )}
              <span className="text-[10px] text-zinc-600">{repo.updatedAt}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

