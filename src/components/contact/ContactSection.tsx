"use client";

import React from "react";
import { Mail } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactInfoJson from "./ContactInfoJson";
import SendMessageForm from "./SendMessageForm";
import Footer from "./Footer";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-between pt-20 lg:pt-28 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full z-10">
        {/* Section Heading: $ ./contact.exe */}
        <SectionHeading icon={Mail} prefix="$" title="./contact.exe" />

        {/* 2-Column Responsive Layout: Left contact_info.json, Right sendMessage.ts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <ContactInfoJson />
          <SendMessageForm />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
}

