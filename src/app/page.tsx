import BackgroundGrid from "@/components/hero/BackgroundGrid";
import HeroLeft from "@/components/hero/HeroLeft";
import CodeTerminal from "@/components/hero/CodeTerminal";
import SideNav from "@/components/hero/SideNav";
import MobileBottomNav from "@/components/ui/MobileBottomNav";
import CyberAiChat from "@/components/ai/CyberAiChat";
import AboutSection from "@/components/about/AboutSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import BlogsSection from "@/components/blogs/BlogsSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col justify-start overflow-x-hidden bg-[#070709] selection:bg-orange-500/30 selection:text-orange-200 pb-16 md:pb-0">
      {/* 1. Global Cyber Grid & Ambient Glows */}
      <BackgroundGrid />

      {/* 2. Floating Vertical Navigation Track (Desktop) */}
      <SideNav />

      {/* 3. Mobile Bottom Navigation Bar (Mobile / Tablet) */}
      <MobileBottomNav />

      {/* 4. Floating AI Terminal Assistant FAB & Chat Modal */}
      <CyberAiChat />

      {/* 5. Hero Section (#hero) */}
      <section
        id="hero"
        className="relative min-h-screen w-full flex flex-col justify-center items-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-24 z-10"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-14 xl:gap-16 items-center">
            {/* Left Column: Headline, Info & Action Cards */}
            <HeroLeft />

            {/* Right Column: Interactive Code Terminal */}
            <CodeTerminal />
          </div>
        </div>
      </section>

      {/* 6. About Section (#about) */}
      <AboutSection />

      {/* 7. Skills Section (#skills) */}
      <SkillsSection />

      {/* 8. Experience Section (#experience) */}
      <ExperienceSection />

      {/* 9. Projects Section (#projects) */}
      <ProjectsSection />

      {/* 10. Blogs Section (#blogs) */}
      <BlogsSection />

      {/* 11. Contact Section & Footer (#contact) */}
      <ContactSection />
    </main>
  );
}

