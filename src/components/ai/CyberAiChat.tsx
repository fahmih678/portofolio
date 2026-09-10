"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Bot,
  X,
  Send,
  Sparkles,
  Terminal,
  ChevronDown,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

interface ChatMessage {
  id: string;
  sender: "ai" | "user";
  text: string;
  timestamp: string;
}

const QUICK_PROMPTS = [
  "What is your tech stack?",
  "Tell me about your experience",
  "What projects have you built?",
  "Are you open for hire?",
  "How can I contact you?",
];

export default function CyberAiChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "init-1",
      sender: "ai",
      text: `System ready. Hello! I'm the digital assistant for ${portfolioData.developer.firstName} ${portfolioData.developer.lastName}. Ask me anything about skills, architecture, projects, or background.`,
      timestamp: "NOW",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const generateAnswer = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes("stack") || q.includes("skill") || q.includes("tech")) {
      const topSkills = portfolioData.skillsCategories
        .map((cat) => `${cat.name}: ${cat.skills.slice(0, 5).map((s) => s.name).join(", ")}`)
        .join("\n• ");
      return `Here is a summary of the technical skill set:\n• ${topSkills}\n\nCore specialization: Real-time architectures, distributed systems, and modern web applications.`;
    }

    if (q.includes("project") || q.includes("built") || q.includes("work")) {
      const topProj = portfolioData.pinnedProjects
        .slice(0, 3)
        .map((p) => `• ${p.title} (${p.language}): ${p.description}`)
        .join("\n");
      return `Here are some highlighted projects:\n${topProj}\n\nYou can explore all live links and GitHub repos in the #projects section!`;
    }

    if (q.includes("experience") || q.includes("history") || q.includes("career")) {
      const exps = portfolioData.experiences
        .slice(0, 2)
        .map((e) => `• ${e.role} @ ${e.company} (${e.period})`)
        .join("\n");
      return `${portfolioData.developer.firstName} has 4+ years of professional engineering experience:\n${exps}\n\nSpecialized in full-stack web applications, point-of-sale systems, and high-load microservices.`;
    }

    if (
      q.includes("hire") ||
      q.includes("open") ||
      q.includes("available") ||
      q.includes("freelance") ||
      q.includes("job")
    ) {
      return `Current Status: [${portfolioData.developer.status}].\nYes! Open to high-impact software engineering roles, distributed systems consulting, and freelance engineering collaborations.`;
    }

    if (
      q.includes("contact") ||
      q.includes("email") ||
      q.includes("reach") ||
      q.includes("location")
    ) {
      return `You can connect directly via:\n• Email: ${portfolioData.developer.email}\n• Location: ${portfolioData.developer.location}\n• GitHub: ${portfolioData.developer.githubUrl}\n• LinkedIn: ${portfolioData.developer.linkedinUrl}\n\nOr drop a message using the interactive form in #contact!`;
    }

    return `Understood! ${portfolioData.developer.firstName} is a ${portfolioData.developer.tagline} specializing in TypeScript, Next.js, Node.js, Spring Boot, and cloud architecture. Feel free to ask about specific projects, skills, or employment availability.`;
  };

  const msgCounter = useRef(1);

  const handleSend = React.useCallback(
    (textToSend?: string) => {
      const query = (textToSend || inputVal).trim();
      if (!query) return;

      const userMsg: ChatMessage = {
        id: `user-${++msgCounter.current}`,
        sender: "user",
        text: query,
        timestamp: "JUST NOW",
      };

      setMessages((prev) => [...prev, userMsg]);
      setInputVal("");
      setIsTyping(true);

      setTimeout(() => {
        const answer = generateAnswer(query);
        const aiMsg: ChatMessage = {
          id: `ai-${++msgCounter.current}`,
          sender: "ai",
          text: answer,
          timestamp: "JUST NOW",
        };
        setMessages((prev) => [...prev, aiMsg]);
        setIsTyping(false);
      }, 450);
    },
    [inputVal]
  );

  return (
    <>
      {/* Floating Trigger FAB Button */}
      <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
        {/* Hover Tooltip Bubble */}
        {!isOpen && (
          <div className="hidden sm:block pointer-events-none transition-all duration-300">
            <div className="relative bg-[#111115] border border-orange-500/30 rounded-xl px-3.5 py-2 shadow-xl shadow-black/60 whitespace-nowrap">
              <p className="text-[11px] font-code text-zinc-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                Ask me anything about my experience!
              </p>
              {/* Arrow right */}
              <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-[#111115] border-t border-r border-orange-500/30 rotate-45" />
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={`Chat with ${portfolioData.developer.firstName}'s AI`}
          className="relative group w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] cursor-pointer outline-none active:scale-95"
        >
          {/* Subtle Outer Radar Pulse */}
          <span className="absolute inset-0 rounded-2xl border border-orange-400/50 animate-ping opacity-25" />

          {isOpen ? (
            <X className="w-7 h-7 text-white transition-transform group-hover:rotate-90" />
          ) : (
            <Bot className="w-7 h-7 sm:w-8 sm:h-8 text-white transition-transform group-hover:scale-110" />
          )}
        </button>
      </div>

      {/* Cyber AI Terminal Chat Modal */}
      {isOpen && (
        <div className="fixed inset-x-3 bottom-20 sm:bottom-24 sm:right-6 sm:left-auto sm:w-[430px] h-[540px] max-h-[80vh] z-50 flex flex-col rounded-2xl border border-orange-500/40 bg-[#0c0c10]/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-[#121218]/90">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="flex items-center gap-2 font-code text-xs text-orange-400 ml-2">
                <Terminal className="w-3.5 h-3.5" />
                <span className="font-semibold tracking-wide">
                  assistant.ai --live
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-zinc-200 transition-colors p-1 rounded-md hover:bg-neutral-800 cursor-pointer"
              aria-label="Close assistant"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs font-code">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${
                  m.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1 text-[10px] text-zinc-400">
                  <span>{m.sender === "user" ? "> client" : "$ assistant"}</span>
                  <span>•</span>
                  <span>{m.timestamp}</span>
                </div>
                <div
                  className={`max-w-[85%] rounded-xl px-3.5 py-2.5 leading-relaxed whitespace-pre-wrap ${
                    m.sender === "user"
                      ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-tr-none shadow-md shadow-orange-950/40"
                      : "bg-[#16161e] border border-neutral-800 text-zinc-200 rounded-tl-none"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-orange-400 text-xs font-code">
                <span className="inline-block w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                <span>Processing query...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Carousel */}
          <div className="px-3 py-2 border-t border-neutral-800/80 bg-[#0d0d12]/80 flex gap-2 overflow-x-auto no-scrollbar">
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => handleSend(prompt)}
                className="shrink-0 px-2.5 py-1 rounded-md bg-[#161620] border border-neutral-800 hover:border-orange-500/40 text-[11px] font-code text-zinc-400 hover:text-orange-300 transition-colors cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 border-t border-neutral-800 bg-[#121218]/90 flex items-center gap-2"
          >
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400 font-code text-xs">
                &gt;
              </span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask about skills, projects, contact..."
                className="w-full bg-[#161620] border border-neutral-800 rounded-lg pl-7 pr-3 py-2 text-xs font-code text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-orange-500/60 transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={!inputVal.trim()}
              className="inline-flex items-center justify-center p-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-sm shadow-orange-950/50"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
