import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Clock,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Share2,
  X,
  ArrowLeft,
  CheckCircle2,
  Bookmark,
  ExternalLink,
  HelpCircle,
  ChevronDown,
  Check
} from 'lucide-react';
import {
  SITE_URL,
  MEDIUM_PROFILE_URL,
  BLOG_POSTS,
  GENERAL_BLOG_FAQS,
  CATEGORIES,
  buildBlogSchemaGraph
} from '../data/blogPosts';

export default function Blog({ activeSlug = null, onSelectPost, onBackToHome }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const [copiedId, setCopiedId] = useState(null);
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  const activePost = useMemo(() => {
    if (!activeSlug) return null;
    return BLOG_POSTS.find((p) => p.id === activeSlug) || null;
  }, [activeSlug]);

  // Dynamic Technical SEO, Canonical, Open Graph & Schema.org JSON-LD
  useEffect(() => {
    const defaultTitle = 'Pratik Jadhav | MERN Stack Developer, System Design & Engineering Blog';
    const defaultDesc =
      'Portfolio and engineering blog of Pratik Jadhav — MERN Stack Developer, React Native engineer, and SaaS builder in Pune.';
    const defaultCanonical = `${SITE_URL}/`;

    const pageTitle = activePost
      ? `${activePost.title} | Pratik Jadhav`
      : 'Engineering Blog — System Design, Node.js & SaaS | Pratik Jadhav';
    const pageDesc = activePost
      ? activePost.excerpt
      : 'Technical articles by Pratik Jadhav covering System Design 101, PhonePe Node.js payment integration, Flipkart architecture insights, SaaS engineering mistakes, and startup lessons.';
    const pageUrl = activePost ? `${SITE_URL}/blog/${activePost.id}` : `${SITE_URL}/blog`;

    document.title = pageTitle;
    const setMeta = (selector, attr, value) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', 'content', pageDesc);
    setMeta('meta[property="og:title"]', 'content', pageTitle);
    setMeta('meta[property="og:description"]', 'content', pageDesc);
    setMeta('meta[property="og:url"]', 'content', pageUrl);
    setMeta('meta[property="og:type"]', 'content', activePost ? 'article' : 'website');
    setMeta('meta[name="twitter:title"]', 'content', pageTitle);
    setMeta('meta[name="twitter:description"]', 'content', pageDesc);
    setMeta('link[rel="canonical"]', 'href', pageUrl);

    const schemaGraph = buildBlogSchemaGraph(activePost);

    let script = document.getElementById('blog-structured-data');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'blog-structured-data';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schemaGraph);

    return () => {
      document.title = defaultTitle;
      setMeta('meta[name="description"]', 'content', defaultDesc);
      setMeta('meta[property="og:title"]', 'content', defaultTitle);
      setMeta('meta[property="og:description"]', 'content', defaultDesc);
      setMeta('meta[property="og:url"]', 'content', defaultCanonical);
      setMeta('meta[property="og:type"]', 'content', 'website');
      setMeta('meta[name="twitter:title"]', 'content', defaultTitle);
      setMeta('meta[name="twitter:description"]', 'content', defaultDesc);
      setMeta('link[rel="canonical"]', 'href', defaultCanonical);
      const existing = document.getElementById('blog-structured-data');
      if (existing) existing.remove();
    };
  }, [activePost]);

  // Modal scroll lock, Lenis pause/resume, and Escape dismissal
  useEffect(() => {
    if (!activePost) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.lenis?.stop();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onSelectPost?.(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.lenis?.start();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activePost, onSelectPost]);

  const openPost = (post) => {
    onSelectPost?.(post.id);
  };

  const closePost = () => {
    onSelectPost?.(null);
  };

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tldr.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  const toggleBookmark = (e, id) => {
    e.stopPropagation();
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const copyArticleLink = (url, id) => {
    navigator.clipboard?.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-24 text-[#f4f3ea] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">

        {/* Top Header & Semantic Breadcrumb */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 sm:pb-12 border-b border-[#20241b]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-3">
            <a
              href="/"
              onClick={(e) => {
                if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && e.button === 0) {
                  e.preventDefault();
                  onBackToHome?.();
                }
              }}
              className="group inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#8e9485] hover:text-[#d4ff32] transition-colors py-1 px-3 rounded-full border border-[#262b20] hover:border-[#454e3a] bg-[#141611] cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Back to Portfolio</span>
            </a>
            <span className="text-neutral-600" aria-hidden="true">/</span>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#8e9485]">
              <span className="text-[#d4ff32] font-bold">07</span>
              <span>ENGINEERING BLOG</span>
            </div>
          </nav>

          <div className="flex items-center gap-4 text-xs font-mono text-[#8e9485] flex-wrap">
            <span className="inline-flex items-center gap-1.5 bg-[#171b12] border border-[#2b3124] px-3 py-1 rounded-full text-[#d4ff32]">
              {BLOG_POSTS.length} Articles on Medium
            </span>
            <a
              href={MEDIUM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#d4ff32] transition-colors"
            >
              <span>@pratikjadhav6632</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </header>

        {/* Hero Title Section */}
        <section aria-label="Blog Introduction" className="pt-12 sm:pt-16 pb-12 sm:pb-16 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#d4ff32] mb-4">
            <span>System Design, Backend &amp; Startup Notes</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.02] tracking-[-0.035em] text-[#f4f3ea] mb-6 select-none">
            Practical engineering notes on system design, Node.js &amp; building SaaS.
          </h1>
          <p className="text-base sm:text-lg text-[#9da394] font-sans font-light leading-relaxed max-w-2xl">
            Real-world articles published on Medium by Pratik Jadhav — breaking down distributed architecture, payment gateway integrations, e-commerce engineering, and lessons from building startups.
          </p>
        </section>

        {/* Featured Post Banner */}
        {featuredPost && selectedCategory === 'All' && !searchQuery && (
          <article
            onClick={() => openPost(featuredPost)}
            className="mb-16 sm:mb-20 rounded-3xl border border-[#282f21] bg-gradient-to-br from-[#161a12] via-[#12140e] to-[#0e100c] p-6 sm:p-10 lg:p-12 relative overflow-hidden group cursor-pointer hover:border-[#526043] transition-all duration-300 shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(212,255,50,0.12)_0%,rgba(101,163,13,0.04)_45%,transparent_70%)] rounded-full pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-[#d4ff32] text-neutral-950 text-xs font-mono font-black uppercase px-3 py-1 rounded-full tracking-wider">
                    FEATURED GUIDE
                  </span>
                  <span className="text-xs font-mono uppercase text-[#8e9485] tracking-wider">
                    {featuredPost.category}
                  </span>
                  <span className="text-neutral-600">•</span>
                  <span className="text-xs font-mono text-[#8e9485] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f4f3ea] font-normal leading-[1.12] group-hover:text-[#d4ff32] transition-colors">
                  {featuredPost.title}
                </h2>

                <p className="text-sm sm:text-base text-[#9da394] font-sans leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono bg-[#1c2016] border border-[#2b3323] text-[#c2c8b8] px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end h-full gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#23291c]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#d4ff32] text-neutral-950 flex items-center justify-center font-bold text-sm">
                    {featuredPost.author.avatar}
                  </div>
                  <div className="text-left lg:text-right">
                    <div className="text-sm font-bold text-white">{featuredPost.author.name}</div>
                    <div className="text-xs font-mono text-[#8e9485]">{featuredPost.publishedLabel}</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`/blog/${featuredPost.id}`}
                    onClick={(e) => {
                      if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && e.button === 0) {
                        e.preventDefault();
                        e.stopPropagation();
                        openPost(featuredPost);
                      }
                    }}
                    className="inline-flex items-center gap-2 bg-[#d4ff32] text-neutral-950 text-sm font-black px-6 py-3 rounded-full group-hover:bg-white transition-all shadow-lg cursor-pointer"
                  >
                    <span>Quick Summary</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href={featuredPost.mediumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 border border-[#323a29] bg-[#141711] hover:border-[#d4ff32] text-xs font-mono uppercase text-[#f4f3ea] hover:text-[#d4ff32] px-4 py-3 rounded-full transition-colors"
                  >
                    <span>Medium</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Filter and Search Bar */}
        <div className="mb-10 sm:mb-12 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {CATEGORIES.map((category) => {
                const isSelected = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${isSelected
                      ? 'bg-[#d4ff32] text-neutral-950 font-bold shadow-md shadow-[#d4ff32]/20'
                      : 'bg-[#141611] text-[#8e9485] hover:text-white border border-[#24291e] hover:border-[#3d4533]'
                      }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <div className="relative min-w-[260px] sm:min-w-[320px]">
              <Search className="w-4 h-4 text-[#8e9485] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="search"
                aria-label="Search engineering articles"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search system design, Node.js, SaaS..."
                className="w-full pl-11 pr-9 py-2.5 bg-[#141611] border border-[#262b20] focus:border-[#d4ff32] rounded-full text-xs sm:text-sm text-[#f4f3ea] placeholder-[#63685c] outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length > 0 ? (
          <section aria-label="Published Articles" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => {
              const isBookmarked = bookmarkedIds.includes(post.id);
              return (
                <article
                  key={post.id}
                  onClick={() => openPost(post)}
                  className="rounded-3xl border border-[#20251a] bg-[#141712]/90 hover:bg-[#191d16] hover:border-[#424c35] p-7 flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl relative overflow-hidden"
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${post.coverGradient} opacity-70 group-hover:opacity-100 transition-opacity`}
                  />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-[#8e9485]">
                      <span className="uppercase tracking-wider font-semibold text-[#d4ff32]">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                        <button
                          onClick={(e) => toggleBookmark(e, post.id)}
                          className="p-1.5 rounded-full hover:bg-[#23271d] text-[#8e9485] hover:text-[#d4ff32] transition-colors cursor-pointer"
                          title="Bookmark article"
                          aria-label={`Bookmark ${post.title}`}
                        >
                          <Bookmark
                            className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-[#d4ff32] text-[#d4ff32]' : ''}`}
                          />
                        </button>
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-[26px] text-[#f4f3ea] font-normal leading-[1.2] group-hover:text-[#d4ff32] transition-colors">
                      <a
                        href={`/blog/${post.id}`}
                        onClick={(e) => {
                          if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && e.button === 0) {
                            e.preventDefault();
                            e.stopPropagation();
                            openPost(post);
                          }
                        }}
                        className="focus:outline-none"
                      >
                        {post.title}
                      </a>
                    </h3>

                    <p className="text-sm text-[#9da394] font-sans leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono bg-[#1a1e15] border border-[#272d20] text-[#9ea695] px-2.5 py-0.5 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-6 border-t border-[#20251a] flex items-center justify-between gap-3">
                    <a
                      href={post.mediumUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#a3aa99] hover:text-white transition-colors"
                    >
                      <span>Read on Medium</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <div className="flex items-center gap-1 text-xs font-mono font-bold text-[#d4ff32] group-hover:translate-x-1 transition-transform">
                      <span>Summary</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </article>
              );
            })}
          </section>
        ) : (
          <div className="py-20 text-center rounded-3xl border border-[#20251a] bg-[#141712]/50">
            <BookOpen className="w-12 h-12 text-[#8e9485] mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-serif text-white mb-2">No articles found</h3>
            <p className="text-sm text-[#8e9485] max-w-sm mx-auto mb-6">
              No articles matched "{searchQuery}" under {selectedCategory}. Try searching for another keyword.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-xs font-mono uppercase bg-[#d4ff32] text-neutral-950 px-5 py-2.5 rounded-full font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* AEO / GEO Section: Direct Answer Engineering Q&A (Matches FAQPage Schema 1:1) */}
        <section
          aria-labelledby="blog-faq-heading"
          className="mt-20 sm:mt-24 rounded-3xl border border-[#22281c] bg-[#12150f] p-7 sm:p-10 lg:p-12"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#20251a] mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#d4ff32] mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>QUICK ANSWERS · AEO &amp; GEO</span>
              </div>
              <h2 id="blog-faq-heading" className="font-serif text-3xl sm:text-4xl text-white font-normal">
                Key questions covered across these guides
              </h2>
            </div>
            <p className="text-xs font-mono text-[#8e9485] uppercase tracking-wider">
              Structured technical answers
            </p>
          </div>

          <div className="space-y-3">
            {GENERAL_BLOG_FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-[#22271c] bg-[#161a12]/80 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIdx(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#1a1f16] transition-colors"
                  >
                    <h3 className="font-sans font-semibold text-sm sm:text-base text-[#f4f3ea]">
                      {faq.q}
                    </h3>
                    <ChevronDown
                      className={`w-4 h-4 text-[#d4ff32] flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-[#9da394] leading-relaxed border-t border-[#20251a] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Author Authority & Medium Follow Banner */}
        <aside className="mt-14 sm:mt-16 rounded-3xl border border-[#2a3122] bg-[#151812] p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[radial-gradient(circle,rgba(212,255,50,0.12)_0%,transparent_70%)] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="text-xs font-mono tracking-widest uppercase text-[#d4ff32] font-bold mb-3">
                FOLLOW ON MEDIUM
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal leading-tight mb-3">
                Read the complete articles &amp; upcoming engineering breakdowns.
              </h3>
              <p className="text-sm sm:text-base text-[#9da394] font-sans leading-relaxed">
                Written by <strong className="text-white font-semibold">Pratik Jadhav</strong> — MERN Stack Developer &amp; Full-Stack Product Engineer building Gaplify, Foundrr, and QuirGO.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={MEDIUM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#d4ff32] hover:bg-white text-neutral-950 text-sm font-black px-7 py-3.5 rounded-full transition-all duration-200 inline-flex items-center gap-2 shadow-lg shadow-[#d4ff32]/15 hover:scale-[1.02]"
              >
                <span>Follow on Medium</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/jadhavpratik-/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1b1f16] hover:bg-[#242a1e] border border-[#2e3626] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-colors inline-flex items-center gap-2"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 text-[#d4ff32]" />
              </a>
            </div>
          </div>
        </aside>

      </div>

      {/* Structured Article Summary & AEO Reader Modal */}
      {activePost && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePost.title}
          data-lenis-prevent
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 sm:p-6 overscroll-contain"
          onClick={closePost}
        >
          <article
            data-lenis-prevent
            className="bg-[#131610] border border-[#2e3626] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto overscroll-contain p-6 sm:p-10 shadow-2xl relative text-[#f4f3ea]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePost}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-[#1e2318] hover:bg-[#2c3323] text-neutral-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4 mb-8 pr-10">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#8e9485]">
                <span className="text-[#d4ff32] font-bold uppercase">{activePost.category}</span>
                <span>•</span>
                <span>{activePost.publishedLabel}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {activePost.readTime}
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.14] text-white">
                {activePost.title}
              </h2>

              <div className="flex items-center justify-between pt-4 border-t border-[#23291d] flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#d4ff32] text-neutral-950 flex items-center justify-center font-bold text-sm">
                    {activePost.author.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{activePost.author.name}</div>
                    <div className="text-xs font-mono text-[#8e9485]">{activePost.author.role}</div>
                  </div>
                </div>

                <a
                  href={activePost.mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#d4ff32] hover:bg-white text-neutral-950 text-xs font-mono font-bold uppercase px-4 py-2 rounded-full transition-colors"
                >
                  <span>Read Full Post on Medium</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* TL;DR Direct Answer Box (AEO / GEO) */}
            <div className="mb-7 rounded-2xl border border-[#3a4629] bg-[#181e12] p-5">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#d4ff32] font-bold mb-2">
                TL;DR · KEY ANSWER
              </div>
              <p className="text-sm sm:text-base text-[#edf0e4] leading-relaxed font-sans">
                {activePost.tldr}
              </p>
            </div>

            {/* Structured Sections */}
            <div className="space-y-7 text-[#cfd4c5] leading-relaxed text-sm sm:text-base font-sans">
              {activePost.sections.map((section) => (
                <section key={section.heading} className="space-y-3">
                  <h3 className="font-serif text-2xl text-white font-normal">
                    {section.heading}
                  </h3>
                  {section.paragraphs?.map((para, pIdx) => (
                    <p key={pIdx} className="text-[#bcc2b2] leading-relaxed">
                      {para}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="space-y-2.5 pt-1">
                      {section.list.map((item, lIdx) => (
                        <li key={lIdx} className="flex items-start gap-2.5 text-[#c6ccb9]">
                          <CheckCircle2 className="w-4 h-4 text-[#d4ff32] flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {activePost.codeSnippet && (
                <div className="rounded-2xl border border-[#28301f] bg-[#0c0e0a] p-4 sm:p-5 overflow-x-auto">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#8e9485] mb-2">
                    {activePost.codeSnippet.label}
                  </div>
                  <pre className="text-xs font-mono text-[#d4ff32] whitespace-pre-wrap leading-relaxed">
                    {activePost.codeSnippet.code}
                  </pre>
                </div>
              )}

              {activePost.faqs?.length > 0 && (
                <section className="pt-4 border-t border-[#23291d] space-y-3">
                  <div className="text-xs font-mono uppercase tracking-widest text-[#d4ff32] font-bold">
                    FREQUENTLY ASKED QUESTIONS
                  </div>
                  {activePost.faqs.map((faq) => (
                    <div key={faq.q} className="rounded-xl bg-[#181c14] border border-[#242a1e] p-4">
                      <h4 className="font-semibold text-white text-sm mb-1.5">{faq.q}</h4>
                      <p className="text-xs sm:text-sm text-[#a6ad9b] leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </section>
              )}

              {/* Tags */}
              <div className="pt-6 border-t border-[#23291d] flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-[#8e9485] mr-2">Tags:</span>
                {activePost.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono bg-[#1c2116] border border-[#2b3323] text-[#d4ff32] px-3 py-1 rounded-full"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-10 pt-6 border-t border-[#23291d] flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={closePost}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#8e9485] hover:text-white cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Articles</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => copyArticleLink(`${SITE_URL}/blog/${activePost.id}`, activePost.id)}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase bg-[#1e2318] hover:bg-[#2c3323] text-[#d4ff32] px-4 py-2 rounded-full transition-colors cursor-pointer"
                >
                  {copiedId === activePost.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied Link</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
                <a
                  href={activePost.mediumUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase bg-[#d4ff32] text-neutral-950 font-bold px-4 py-2 rounded-full hover:bg-white transition-colors"
                >
                  <span>Medium</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </article>
        </div>
      )}
    </div>
  );
}
