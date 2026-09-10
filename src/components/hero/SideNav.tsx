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

export default function SideNav() {
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", label: "Home", file: "main.ts", icon: Code2 },
    { id: "about", label: "About", file: "about.md", icon: Terminal },
    { id: "skills", label: "Skills", file: "skills.json", icon: Cpu },
    { id: "experience", label: "Experience", file: "experience.git", icon: GitBranch },
    { id: "projects", label: "Projects", file: "projects/", icon: FolderOpen },
    { id: "blogs", label: "Blogs", file: "blogs/", icon: BookOpen },
    { id: "contact", label: "Contact", file: "contact.exe", icon: Mail },
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
      aria-label="Section Navigation"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-3 select-none"
    >
      {/* Background Vertical Line with Linear Gradient */}
      <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-500/30 to-transparent -z-10" />

      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        const IconComponent = item.icon;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => handleScroll(item.id)}
            className="group relative flex items-center justify-center w-11 h-11 transition-all duration-300 outline-none focus:outline-none cursor-pointer"
            aria-label={item.label}
          >
            {/* Tooltip on Hover */}
            <div className="absolute right-13 px-3 py-1.5 rounded-md bg-[#121216] border border-orange-500/30 text-xs font-code whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none shadow-[0_0_15px_rgba(249,115,22,0.15)] flex items-center gap-2">
              <span className="text-orange-400">&gt;</span>
              <span
                className={`font-medium ${isActive ? "text-orange-400 font-bold" : "text-zinc-400"}`}
              >
                Go to {item.file}
              </span>
            </div>

            {/* Icon Container with Dashed Rotating Ring */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Outer Dashed Ring for Active item */}
              <div
                className={`absolute inset-0 m-auto rounded-full border border-orange-500/60 transition-all duration-500 ease-out ${
                  isActive
                    ? "w-full h-full opacity-100 rotate-180 scale-100 animate-spin-slow"
                    : "w-4 h-4 opacity-0 rotate-0 scale-0"
                }`}
                style={{ borderStyle: "dashed" }}
              />

              {/* Inner Circle Badge */}
              <div
                className={`rounded-full transition-all duration-300 ease-out flex items-center justify-center relative z-10 ${
                  isActive
                    ? "w-8 h-8 bg-[#0d0d12] border border-orange-400 text-orange-400 shadow-[0_0_18px_rgba(249,115,22,0.4)]"
                    : "w-3.5 h-3.5 bg-zinc-800 border border-zinc-700 group-hover:w-4 group-hover:h-4 group-hover:border-orange-400/50 group-hover:bg-orange-500/20"
                }`}
              >
                <IconComponent
                  className={`transition-all duration-300 ${
                    isActive
                      ? "w-4 h-4 opacity-100 scale-100"
                      : "w-0 h-0 opacity-0 scale-0 group-hover:w-2.5 group-hover:h-2.5 group-hover:opacity-80 group-hover:text-orange-400"
                  }`}
                />
              </div>
            </div>
          </button>
        );
      })}
    </nav>
  );
}
