import React from 'react';
import { ArrowRight, ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogPosts';

const BlogTeaser = ({ onOpenBlog, onOpenPost }) => {
  const featuredPosts = BLOG_POSTS.filter((post) => post.featured).slice(0, 3);

  const handleBlogLinkClick = (e, slug = null) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    if (slug && onOpenPost) {
      onOpenPost(slug);
    } else if (onOpenBlog) {
      onOpenBlog();
    }
  };

  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="py-24 sm:py-32 bg-[#0d0f0c] text-[#f4f3ea] relative overflow-hidden border-t border-[#1d2119]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-12 sm:pb-16 gap-6 border-b border-[#20241b] mb-12 sm:mb-14">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase mb-5 select-none">
              <BookOpen className="w-3.5 h-3.5 text-[#d4ff32]" />
              <span className="text-[#d4ff32] font-bold">WRITING</span>
              <span className="text-[#686d5e]">·</span>
              <span className="text-[#8e9485] font-semibold">ENGINEERING BLOG</span>
            </div>

            <h2
              id="writing-heading"
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal leading-[0.94] tracking-[-0.03em] text-[#f4f3ea] select-none [font-optical-sizing:auto]"
            >
              Architecture notes, <br />
              <span className="italic text-[#d4ff32]">from real builds.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-4 max-w-md">
            <p className="font-sans text-xs sm:text-sm text-[#8e9485] leading-relaxed lg:text-right">
              Deep-dives from production work—covering System Design fundamentals, Node.js PhonePe payments, and SaaS architecture trade-offs.
            </p>
            <a
              href="/blog"
              onClick={(e) => handleBlogLinkClick(e)}
              className="inline-flex items-center gap-2 bg-[#141712] hover:bg-[#d4ff32] border border-[#2a3123] hover:border-[#d4ff32] text-[#f4f3ea] hover:text-neutral-950 text-xs font-mono font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 w-fit"
            >
              <span>View all {BLOG_POSTS.length} articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 3-Column Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {featuredPosts.map((post) => (
            <a
              key={post.id}
              href={`/blog/${post.id}`}
              onClick={(e) => handleBlogLinkClick(e, post.id)}
              className="rounded-[2rem] border border-[#242820] bg-[#141612]/95 hover:border-[#424c35] hover:bg-[#181b15] p-7 sm:p-8 flex flex-col justify-between group transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70 relative overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${post.coverGradient} opacity-75 group-hover:opacity-100 transition-opacity`}
              />

              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#8e9485] mb-5">
                  <span className="text-[#d4ff32] font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-[26px] text-white font-normal leading-[1.18] tracking-tight mb-3 group-hover:text-[#d4ff32] transition-colors">
                  {post.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#9aa090] leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-5 border-t border-[#20241b] flex items-center justify-between text-xs font-mono">
                <span className="text-[#8e9485] group-hover:text-white transition-colors">
                  Read summary &amp; FAQ
                </span>
                <span className="inline-flex items-center gap-1 text-[#d4ff32] font-bold group-hover:translate-x-0.5 transition-transform">
                  <span>Open</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogTeaser;

