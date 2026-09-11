"use client";

import React, { useState } from "react";
import { Mail, Play, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export default function SendMessageForm() {
  const { developer } = portfolioData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSentSuccess(false), 5000);
    }, 1200);
  };

  return (
    <div className="rounded-xl border border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#141419] shadow-md dark:shadow-2xl overflow-hidden font-code text-xs sm:text-sm h-full flex flex-col group transition-all duration-300 hover:border-orange-500/40">
      {/* Tab bar */}
      <div className="bg-slate-100 dark:bg-[#1c1c24] flex text-xs border-b border-slate-200 dark:border-zinc-800">
        <div className="bg-white dark:bg-[#141419] px-4 py-2 text-slate-800 dark:text-zinc-300 border-t-2 border-orange-500 flex items-center gap-2">
          <span className="text-sky-600 dark:text-sky-400 font-bold">TS</span>
          <span>sendMessage.ts</span>
        </div>
      </div>

      {/* Form Container */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="rounded-lg border border-slate-200 dark:border-orange-500/20 bg-slate-50 dark:bg-[#0d0d10] overflow-hidden">
            {/* Header info */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-slate-200 dark:border-orange-500/20 bg-slate-100/80 dark:bg-[#121217]">
              <div className="flex items-center gap-2 text-slate-700 dark:text-zinc-300 font-code text-xs">
                <Mail className="w-3.5 h-3.5 text-orange-500 dark:text-orange-400" />
                <span>mail.compose</span>
              </div>
              <span className="text-[10px] text-slate-500 dark:text-zinc-500 font-code">
                secure channel
              </span>
            </div>

            {/* Sub-header info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-4 py-2 border-b border-slate-200 dark:border-orange-500/10 bg-slate-50 dark:bg-[#0e0e12] text-[10px] text-slate-500 dark:text-zinc-500 font-code">
              <div>
                <span className="text-slate-500 dark:text-zinc-400">to:</span>{" "}
                <span className="text-orange-600 dark:text-orange-300 font-medium">{developer.email}</span>
              </div>
              <div className="sm:text-right">
                <span className="text-slate-500 dark:text-zinc-400">response:</span>{" "}
                <span className="text-emerald-600 dark:text-emerald-300 font-medium">within 24h</span>
              </div>
            </div>

            {/* Inputs */}
            <div className="p-4 space-y-3 font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label
                    htmlFor="contact-name"
                    className="text-[10px] font-code uppercase tracking-wide text-zinc-500"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded border border-slate-300 dark:border-zinc-800 bg-white dark:bg-[#16161c] px-3 py-2 text-sm text-slate-900 dark:text-orange-200 placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:border-orange-500/60 transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="contact-email"
                    className="text-[10px] font-code uppercase tracking-wide text-slate-500 dark:text-zinc-500"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded border border-slate-300 dark:border-zinc-800 bg-white dark:bg-[#16161c] px-3 py-2 text-sm text-slate-900 dark:text-orange-200 placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:border-orange-500/60 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="contact-subject"
                  className="text-[10px] font-code uppercase tracking-wide text-slate-500 dark:text-zinc-500"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  placeholder="Project inquiry / Collaboration"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full rounded border border-slate-300 dark:border-zinc-800 bg-white dark:bg-[#16161c] px-3 py-2 text-sm text-slate-900 dark:text-orange-200 placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:border-orange-500/60 transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="contact-message"
                  className="text-[10px] font-code uppercase tracking-wide text-slate-500 dark:text-zinc-500"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tell me about your project, timeline, and goals..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full rounded border border-slate-300 dark:border-zinc-800 bg-white dark:bg-[#16161c] px-3 py-2 text-sm text-slate-900 dark:text-orange-200 placeholder-slate-400 dark:placeholder-zinc-600 focus:outline-none focus:border-orange-500/60 transition-colors resize-none"
                />
              </div>

              <div className="text-[11px] text-slate-500 dark:text-zinc-500 font-code">
                {"// Protected by spam filters and rate limits"}
              </div>
            </div>
          </div>

          {/* Success message */}
          {sentSuccess && (
            <div className="flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-50 dark:bg-emerald-950/30 p-3 text-xs font-code text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Message dispatched successfully! Awaiting response.</span>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSending}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-orange-500/40 bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-200 hover:bg-orange-500 hover:text-white transition-all text-xs font-code uppercase tracking-wider font-bold w-full sm:w-auto shadow-md dark:shadow-[0_0_20px_-8px_rgba(249,115,22,0.8)] cursor-pointer disabled:opacity-50"
            >
              <Play
                className={`w-3.5 h-3.5 fill-current ${
                  isSending ? "animate-spin" : ""
                }`}
              />
              <span>{isSending ? "Sending Message..." : "Send Message"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
