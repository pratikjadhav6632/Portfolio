import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, ArrowDown, ArrowUpRight } from 'lucide-react';

const RESUME_URL =
  'https://drive.google.com/file/d/1z41RRcAXd8IOUQFGXIIUZGlMrw-0Ksdb/view?usp=sharing';

const Header = ({ currentPage = 'home', onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBrandModal, setShowBrandModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('story');
  const progressBarRef = useRef(null);

  useEffect(() => {
    const updateProgressAndHeader = () => {
      const lenis = window.lenis;
      let progress = 0;

      if (lenis && typeof lenis.progress === 'number') {
        progress = lenis.progress;
      } else {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        progress = total > 0 ? window.scrollY / total : 0;
      }

      progress = Math.min(1, Math.max(0, progress));
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${progress})`;
      }

      const isNowScrolled = (lenis?.scroll ?? window.scrollY) > 20;
      setScrolled((prev) => (prev === isNowScrolled ? prev : isNowScrolled));
    };

    updateProgressAndHeader();
    window.addEventListener('scroll', updateProgressAndHeader, { passive: true });

    let observer = null;
    if (currentPage === 'blog') {
      setActiveSection('blog');
    } else {
      const sectionNavMap = {
        home: 'story',
        about: 'story',
        work: 'work',
        skills: 'skills',
        proof: 'proof',
        writing: 'proof',
        contact: 'proof',
      };

      const visibleSections = new Set();
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.add(entry.target.id);
            } else {
              visibleSections.delete(entry.target.id);
            }
          });

          const firstMatch = Object.keys(sectionNavMap).find((id) =>
            visibleSections.has(id)
          );
          if (firstMatch) {
            const nextNav = sectionNavMap[firstMatch];
            setActiveSection((prev) => (prev === nextNav ? prev : nextNav));
          }
        },
        { rootMargin: '-25% 0px -55% 0px', threshold: 0 }
      );

      Object.keys(sectionNavMap).forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }

    return () => {
      window.removeEventListener('scroll', updateProgressAndHeader);
      observer?.disconnect();
    };
  }, [currentPage]);

  useEffect(() => {
    if (currentPage === 'blog') {
      setActiveSection('blog');
    }
  }, [currentPage]);

  const navItems = [
    { href: '#about', id: 'story', label: 'STORY' },
    { href: '#work', id: 'work', label: 'WORK' },
    { href: '#skills', id: 'skills', label: 'SKILLS' },
    { href: '#proof', id: 'proof', label: 'PROOF' },
    { href: '#blog', id: 'blog', label: 'BLOG' },
  ];

  const handleNavClick = (item) => {
    setIsOpen(false);
    if (item.id === 'blog') {
      if (onNavigate) {
        onNavigate('blog');
      }
      return;
    }

    if (currentPage !== 'home') {
      if (onNavigate) {
        onNavigate('home', item.href);
      }
      return;
    }

    scrollToSection(item.href);
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, {
          offset: -75,
          duration: 1.4,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          immediate: false,
        });
      } else {
        const y = element.getBoundingClientRect().top + window.pageYOffset - 75;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (!showBrandModal) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setShowBrandModal(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.lenis?.stop?.();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
      window.lenis?.start?.();
    };
  }, [showBrandModal]);

  const handleLogoClick = () => {
    setIsOpen(false);
    setShowBrandModal(true);
  };

  const handleContactClick = () => {
    if (currentPage !== 'home') {
      if (onNavigate) {
        onNavigate('home', '#contact');
      }
    } else {
      scrollToSection('#contact');
    }
  };

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-colors duration-200 ${scrolled
          ? 'bg-[#0d0f0c]/95 border-b border-[#20241b] shadow-2xl shadow-black/60 py-4'
          : 'bg-[#0d0f0c]/85 border-b border-transparent py-6'
        }`}
    >
      {/* Top Green / Electric Lime Scroll Progress Bar */}
      <div className="absolute top-0 left-0 right-0 w-full h-[3px] bg-[#1d2119]/40 pointer-events-none z-50">
        <div
          ref={progressBarRef}
          className="h-full w-full bg-[#d4ff32] shadow-[0_0_12px_#d4ff32] origin-left will-change-transform"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex justify-between items-center">
          {/* Brand Name */}
          <button
            type="button"
            onClick={handleLogoClick}
            aria-label="Open Pratik Jadhav introduction modal"
            aria-haspopup="dialog"
            className="cursor-pointer group flex items-center gap-2.5 text-left"
          >
            <img
              src="/favicon-96x96.png"
              alt="Pratik Jadhav"
              width={32}
              height={32}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex-shrink-0 object-cover group-hover:scale-105 transition-transform duration-200"
            />
            <span className="text-white font-sans font-bold text-sm sm:text-base tracking-tight group-hover:text-[#d4ff32] transition-colors duration-200">
              Pratik Jadhav
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-10">
            {navItems.map((item) => {
              const isActive = (currentPage === 'blog' && item.id === 'blog') || (currentPage === 'home' && activeSection === item.id);
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`relative py-1 text-xs font-semibold tracking-[0.2em] font-sans transition-all duration-200 cursor-pointer ${isActive
                      ? 'text-white font-bold'
                      : 'text-[#9fa398] hover:text-white'
                    }`}
                >
                  <span className="flex items-center gap-1.5">
                    {item.label}
                    {item.id === 'blog' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff32]"></span>
                    )}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-[#d4ff32] rounded-full shadow-[0_0_8px_#d4ff32]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Section: Status + Actions */}
          <div className="hidden sm:flex items-center space-x-3.5 lg:space-x-4">
            {/* Resume Button */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#343b2d] hover:border-[#4d5743] bg-[#141611] hover:bg-[#1a1d15] text-[#f4f3ea] text-[13px] font-sans font-medium px-5 py-2.5 rounded-full inline-flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:text-white whitespace-nowrap"
            >
              <span>Résumé</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#d4ff32]" />
            </a>

            {/* Contact CTA Button */}
            <button
              onClick={handleContactClick}
              className="bg-[#f4f3ea] hover:bg-white text-[#0e100c] text-[13px] font-sans font-bold px-5 py-2.5 rounded-full inline-flex items-center justify-center gap-1.5 transition-all duration-200 shadow-sm hover:scale-[1.02] cursor-pointer whitespace-nowrap"
            >
              <span>Contact me</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2.5">
            <button
              onClick={handleContactClick}
              className="bg-[#f4f3ea] text-[#0e100c] text-xs font-bold px-3.5 py-2 rounded-full inline-flex items-center gap-1"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              className="p-2 rounded-xl border border-[#272b22] bg-[#141612] text-neutral-300 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="sm:hidden mt-3 pt-4 pb-5 px-3 bg-[#141612] border border-[#262a21] rounded-2xl shadow-2xl space-y-3">
            <div className="flex items-center justify-end px-3 pb-2 border-b border-[#23271e]">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#d4ff32] font-mono flex items-center gap-1 font-semibold"
              >
                Résumé ↓
              </a>
            </div>

            <nav className="space-y-1">
              {navItems.map((item) => {
                const isActive = (currentPage === 'blog' && item.id === 'blog') || (currentPage === 'home' && activeSection === item.id);
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className={`block w-full text-left px-3 py-2.5 text-xs font-semibold tracking-[0.2em] rounded-xl transition-all ${isActive
                        ? 'text-[#d4ff32] bg-[#1d2019]'
                        : 'text-[#8e9286] hover:text-white hover:bg-[#1a1c16]'
                      }`}
                  >
                    <span className="flex items-center justify-between">
                      <span>{item.label}</span>
                      {item.id === 'blog' && (
                        <span className="text-[10px] bg-[#22281b] text-[#d4ff32] font-mono px-2 py-0.5 rounded-full">NEW</span>
                      )}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>

    {showBrandModal &&
      typeof document !== 'undefined' &&
      createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="brand-modal-title"
          onClick={() => setShowBrandModal(false)}
        >
          <div
            className="animate-modal-pop relative w-full max-w-md rounded-[2rem] border border-[#2c3324] bg-[#141612] p-7 sm:p-9 text-center shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Subtle ambient #d4ff32 spotlight */}
            <div
              className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(212,255,50,0.14)_0%,transparent_70%)]"
              aria-hidden="true"
            />

            {/* Close button */}
            <button
              type="button"
              onClick={() => setShowBrandModal(false)}
              aria-label="Close introduction modal"
              className="absolute top-5 right-5 w-9 h-9 rounded-full border border-[#2b3124] bg-[#1b1f17] hover:border-[#d4ff32]/60 text-[#9ba294] hover:text-white flex items-center justify-center transition-colors cursor-pointer z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Animated Avatar Showcase */}
            <div className="relative mx-auto w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center mb-6 mt-2">
              {/* Soft expanding halo */}
              <div
                className="animate-halo-pulse absolute inset-2 rounded-full border border-[#d4ff32]/50 pointer-events-none"
                aria-hidden="true"
              />
              {/* Slowly rotating dashed orbit ring + satellite dot */}
              <div
                className="animate-orbit-spin absolute inset-0 rounded-full border border-dashed border-[#d4ff32]/40 pointer-events-none"
                aria-hidden="true"
              >
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#d4ff32] shadow-[0_0_10px_#d4ff32]" />
              </div>

              {/* Floating #d4ff32 Portrait Icon */}
              <div className="animate-avatar-float w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-2 ring-[#d4ff32]/80 shadow-[0_0_32px_rgba(212,255,50,0.22)] bg-[#0d0f0c]">
                <img
                  src="/web-app-manifest-512x512.png"
                  alt="Pratik Jadhav"
                  className="w-full h-full object-cover scale-[1.22]"
                />
              </div>
            </div>

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c2116] border border-[#2d3523] text-[10.5px] font-mono uppercase tracking-widest text-[#d4ff32] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff32]" aria-hidden="true" />
              <span>Software Developer · 1.5+ Years</span>
            </div>

            {/* Headline */}
            <h2
              id="brand-modal-title"
              className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-tight leading-tight mb-3"
            >
              Glad you stopped by — <br />
              I’m <span className="italic text-[#d4ff32]">Pratik Jadhav.</span>
            </h2>

            {/* Warm Professional Message */}
            <p className="font-sans text-xs sm:text-sm text-[#a6ac9d] leading-relaxed mb-7">
              I engineer scalable web apps, SaaS systems, and mobile products with clean architecture and thoughtful execution. Whether you’re hiring for a full-time engineering role or building a new product from zero to launch, I’d love to collaborate and create something remarkable together.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/jadhavpratik-/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowBrandModal(false)}
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#d4ff32] hover:bg-white text-neutral-950 font-sans font-bold text-xs sm:text-sm px-6 py-3 transition-colors cursor-pointer"
              >
                <span>Let’s Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#2c3324] bg-[#1a1e16] hover:border-[#d4ff32]/60 text-[#f4f3ea] hover:text-white font-sans font-medium text-xs sm:text-sm px-5 py-3 transition-colors"
              >
                <span>View Résumé</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#d4ff32]" />
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Header;
