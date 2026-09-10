import React from "react";
import { BookOpen } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "./BlogCard";
import { portfolioData } from "@/data/portfolio-data";

export default function BlogsSection() {
  const { blogs } = portfolioData;

  if (!blogs || blogs.length === 0) return null;

  return (
    <section
      id="blogs"
      className="relative min-h-screen w-full flex flex-col justify-center py-20 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 z-10"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Heading */}
        <SectionHeading
          prefix="$"
          icon={BookOpen}
          title="ls -la ~/blogs"
        />

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.title} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
