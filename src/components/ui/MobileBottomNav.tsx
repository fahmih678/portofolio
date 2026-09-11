"use client";

import React, { useState, useEffect } from "react";
import {
  Code2,
  Terminal,
  Cpu,
  GitBranch,
  FolderOpen,
  BookOpen,
  Mail,
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  tooltip: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function MobileBottomNav() {
  const [activeSection, setActiveSection] = useState("hero");

  const navItems: NavItem[] = [
    { id: "hero", label: "Home", tooltip: "Go to main.ts", icon: Code2 },
    { id: "about", label: "About", tooltip: "Go to about.md", icon: Terminal },
    { id: "skills", label: "Skills", tooltip: "Go to skills.json", icon: Cpu },
    {
      id: "experience",
      label: "Experience",
      tooltip: "Go to experience.git",
      icon: GitBranch,
    },
    {
      id: "projects",
      label: "Projects",
      tooltip: "Go to projects/",
      icon: FolderOpen,
    },
    { id: "blogs", label: "Blogs", tooltip: "Go to blogs/", icon: BookOpen },
    {
      id: "contact",
      label: "Contact",
      tooltip: "Go to contact.exe",
      icon: Mail,
    },
  ];

  useEffect(() => {
    const handleScrollSpy = () => {
      const sectionIds = [
        "hero",
        "about",
        "skills",
        "experience",
        "projects",
        "blogs",
        "contact",
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const handleScroll = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Mobile Navigation Bar"
      className="fixed bottom-0 left-0 right-0 border-t border-slate-200 dark:border-neutral-800 bg-white/95 dark:bg-[#09090d]/95 backdrop-blur-md z-50 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="grid grid-cols-7 items-center px-2 py-2">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const IconComponent = item.icon;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleScroll(item.id)}
              className={`mx-auto inline-flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200 cursor-pointer ${
                isActive
                  ? "text-orange-600 dark:text-orange-400 bg-orange-500/15 border border-orange-500/30 shadow-[0_0_12px_rgba(249,115,22,0.2)]"
                  : "text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800/50"
              }`}
              aria-label={item.tooltip}
              title={item.tooltip}
            >
              <IconComponent className="w-5 h-5" />
            </button>
          );
        })}
      </div>
    </nav>
  );
}

