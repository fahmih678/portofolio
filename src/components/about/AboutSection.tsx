"use client";

import React from "react";
import { Terminal } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import OperatorCard from "./OperatorCard";
import ProfileLog from "./ProfileLog";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 lg:py-28 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full z-10">
        {/* Section Heading: # About.system */}
        <SectionHeading icon={Terminal} prefix="#" title="About.system" />

        {/* 2 Column Layout: Left Operator Card, Right Log & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <OperatorCard />
          <ProfileLog />
        </div>
      </div>
    </section>
  );
}

