import React from "react";
import { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  icon: LucideIcon;
  prefix?: string;
  title: string;
}

export default function SectionHeading({
  icon: Icon,
  prefix = "#",
  title,
}: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-3.5 mb-12 sm:mb-16">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-orange-500/30 bg-orange-500/10 text-orange-400">
        <Icon className="h-5 w-5" />
      </div>
      <h2 className="font-code text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
        <span className="text-zinc-500 mr-2">{prefix}</span>
        <span>{title}</span>
      </h2>
    </div>
  );
}

