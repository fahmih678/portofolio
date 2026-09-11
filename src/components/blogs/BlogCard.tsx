"use client";

import React from "react";
import { Pin, Calendar, Clock, ChevronRight } from "lucide-react";
import { BlogPost } from "@/types/portfolio";

interface BlogCardProps {
  blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <a
      href={blog.url}
      className="group block overflow-hidden rounded-xl border border-slate-200 dark:border-neutral-800 bg-white dark:bg-[#101014] transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 shadow-sm hover:shadow-md dark:hover:shadow-[0_8px_30px_rgba(249,115,22,0.12)] cursor-pointer"
      aria-label={`Open blog post: ${blog.title}`}
    >
      {/* Cover Image Container */}
      <div className="relative h-48 w-full overflow-hidden border-b border-slate-200 dark:border-neutral-800/80 bg-slate-100 dark:bg-neutral-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Subtle Dark/Light Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-[#101014] via-white/20 dark:via-[#101014]/30 to-transparent pointer-events-none" />

        {/* Pinned Pill Badge */}
        {blog.pinned && (
          <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-orange-500/40 bg-white/90 dark:bg-[#121216]/90 px-2.5 py-1 text-[10px] font-code uppercase tracking-wider text-orange-600 dark:text-orange-300 backdrop-blur-sm shadow-md">
            <Pin className="h-3 w-3 text-orange-500 dark:text-orange-400" />
            <span>Pinned</span>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="space-y-3.5 p-5">
        {/* Metadata Row */}
        <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500 dark:text-zinc-400 font-code">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-orange-500 dark:text-orange-400" />
            {blog.date}
          </span>
          <span className="text-slate-300 dark:text-zinc-600">•</span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-orange-500 dark:text-orange-300" />
            {blog.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="line-clamp-2 text-base sm:text-lg font-semibold text-slate-900 dark:text-zinc-100 transition-colors group-hover:text-orange-600 dark:group-hover:text-orange-300">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="line-clamp-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
          {blog.excerpt}
        </p>

        {/* Read Article Link */}
        <div className="inline-flex items-center gap-1.5 pt-1 text-xs font-semibold text-orange-600 dark:text-orange-400 transition-colors group-hover:text-orange-700 dark:group-hover:text-orange-300 font-code">
          <span>Read article</span>
          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
}
