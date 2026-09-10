"use client";

import React from "react";
import { Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function ContactInfoJson() {
  const { developer } = portfolioData;

  return (
    <div className="rounded-xl border border-zinc-800 bg-[#141419] shadow-2xl overflow-hidden font-code text-xs sm:text-sm group transition-all duration-300 hover:border-orange-500/40">
      {/* Window Controls & Tab Bar */}
      <div className="bg-[#1c1c24] px-4 py-2.5 flex items-center justify-between border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
        </div>
        <div className="text-zinc-400 text-xs flex items-center gap-2">
          <Code2 className="w-3.5 h-3.5 text-sky-400" />
          <span>contact_info.json</span>
        </div>
      </div>

      {/* Editor Content with Line Numbers */}
      <div className="p-5 sm:p-6 overflow-x-auto relative leading-relaxed">
        <div className="flex gap-4">
          <div className="w-6 text-right text-zinc-600 select-none border-r border-zinc-800/80 pr-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
              <div key={num}>{num}</div>
            ))}
          </div>

          <div className="space-y-0.5">
            <div>
              <span className="text-amber-400">&#123;</span>
            </div>
            <div className="pl-4">
              <span className="text-orange-400">&quot;status&quot;</span>:{" "}
              <span className="text-emerald-400">&quot;open_to_work&quot;</span>,
            </div>
            <div className="pl-4">
              <span className="text-orange-400">&quot;email&quot;</span>:{" "}
              <a
                href={`mailto:${developer.email}`}
                className="text-orange-300 hover:underline"
              >
                &quot;{developer.email}&quot;
              </a>
              ,
            </div>
            <div className="pl-4">
              <span className="text-orange-400">&quot;socials&quot;</span>:{" "}
              <span className="text-amber-400">&#123;</span>
            </div>
            <div className="pl-8">
              <span className="text-orange-400">&quot;github&quot;</span>:{" "}
              <a
                href={developer.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-orange-300 hover:underline"
              >
                &quot;@{developer.githubUsername}&quot;
              </a>
              ,
            </div>
            <div className="pl-8">
              <span className="text-orange-400">&quot;linkedin&quot;</span>:{" "}
              <a
                href={developer.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="text-orange-300 hover:underline"
              >
                &quot;@fahmih678&quot;
              </a>
              ,
            </div>
            <div className="pl-8">
              <span className="text-orange-400">&quot;twitter&quot;</span>:{" "}
              <a
                href={developer.twitterUrl}
                target="_blank"
                rel="noreferrer"
                className="text-orange-300 hover:underline"
              >
                &quot;@fahmih678&quot;
              </a>
            </div>
            <div className="pl-4">
              <span className="text-amber-400">&#125;</span>,
            </div>
            <div className="pl-4">
              <span className="text-orange-400">&quot;location&quot;</span>:{" "}
              <span className="text-orange-300">&quot;{developer.location}&quot;</span>
            </div>
            <div>
              <span className="text-amber-400">&#125;</span>
            </div>
            <div className="text-zinc-500 italic pt-2">
              {"// Waiting for connection..."}
            </div>
            <div className="text-orange-400 animate-pulse font-bold">_</div>
          </div>
        </div>
      </div>
    </div>
  );
}
