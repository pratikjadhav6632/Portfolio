import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import profileImg from '../assets/Profile.webp';

const Hero = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -1.0; // ultra subtle micro-tilt
    const rotateY = ((x - centerX) / centerX) * 1.0;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
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
  };

  const stats = [
    {
      value: '1.5+ Years',
      label: 'OF EXPERIENCE',
    },
    {
      value: '84%',
      label: 'LATENCY REDUCTION',
    },
    {
      value: 'Web + Mobile',
      label: 'END-TO-END DELIVERY',
    },
    {
      value: 'Gold Medal',
      label: 'AVISHKAR BHARAT',
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen bg-[#0d0f0c] text-[#f4f3ea] pt-28 sm:pt-36 lg:pt-40 pb-0 relative overflow-hidden flex flex-col justify-between"
    >
      {/* Background ambient lighting (pure radial gradient for zero GPU blur cost) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] lg:w-[1200px] h-[650px] bg-[radial-gradient(ellipse_at_center,rgba(212,255,50,0.06)_0%,rgba(31,36,22,0.02)_45%,transparent_72%)] rounded-full pointer-events-none" />

      {/* Main Hero Container */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 w-full relative z-10 my-auto pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-start">

          {/* Left Column: Typography, Copy, CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Tagline / Eyebrow */}
            <div className="flex items-center gap-2 sm:gap-2.5 text-[11px] sm:text-xs lg:text-[13px] font-mono tracking-widest uppercase mb-7 sm:mb-9 text-[#8e9485] flex-wrap select-none items-center">
              <span className="text-[#d4ff32] font-bold">01</span>
              <span className="bg-[#d4ff32]/10 border border-[#d4ff32]/30 text-[#d4ff32] font-extrabold px-2.5 py-1 rounded-full tracking-wider shadow-[0_0_15px_rgba(212,255,50,0.15)]">
                MERN STACK DEVELOPER
              </span>
              <span>·</span>
              <span className="font-semibold text-[#9da394]">REACT NATIVE</span>
              <span>·</span>
              <span className="font-semibold text-[#9da394]">FULL-STACK</span>
              <span>·</span>
              <span className="font-semibold text-[#9da394]">PUNE</span>
            </div>

            {/* Large Editorial Serif Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[96px] xl:text-[110px] 2xl:text-[120px] font-normal leading-[0.92] sm:leading-[0.88] tracking-[-0.035em] text-[#f4f3ea] mb-7 sm:mb-9 select-none [font-optical-sizing:auto]">
              I build the <br />
              <span className="italic font-normal text-[#d4ff32]">whole </span>
              <span className="italic font-normal text-[#d4ff32]">product,</span> <br />
              not just the <br />
              screen.
            </h1>

            {/* Bio Paragraph */}
            <p className="font-sans text-[#a8ad9e] text-base sm:text-xl lg:text-[21px] leading-[1.6] sm:leading-[1.65] max-w-2xl mb-8 sm:mb-11">
              I’m Pratik—a <strong className="text-white font-bold underline decoration-[#d4ff32] decoration-2 underline-offset-4">MERN Stack Developer</strong> & React Native engineer with real-world experience taking modern web applications, scalable backends (MongoDB, Express, React, Node.js) and mobile apps from concept to production.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5 mb-10 sm:mb-12">
              {/* Primary CTA (Lime) */}
              <button
                onClick={() => scrollToSection('#work')}
                className="bg-[#d4ff32] hover:bg-[#c2ed23] text-neutral-950 font-sans font-black px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg flex items-center justify-center gap-3 transition-all duration-200 shadow-xl shadow-[#d4ff32]/20 hover:scale-[1.03] cursor-pointer group"
              >
                <span>View shipped work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              {/* Secondary CTA (Dark Capsule) */}
              <a
                href="https://drive.google.com/file/d/1z41RRcAXd8IOUQFGXIIUZGlMrw-0Ksdb/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#141611] hover:bg-[#1a1d15] border border-[#2b3124] hover:border-[#454e3a] text-neutral-200 font-sans font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg flex items-center justify-center gap-3 transition-all duration-200 cursor-pointer group"
              >
                <span>Download résumé</span>
                <ArrowDown className="w-4 h-4 text-neutral-400 group-hover:text-white transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Device Profile Card Mockup with Overlapping Badges & Greenish Backlight */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative lg:-mt-6 xl:-mt-10 px-2 sm:px-0 [perspective:1000px]">

            {/* Greenish Ambient Backlight Glow behind the card (radial-gradient for 60fps scroll) */}
            <div className="absolute -top-20 -left-20 w-[380px] sm:w-[580px] h-[380px] sm:h-[580px] bg-[radial-gradient(circle,rgba(212,255,50,0.18)_0%,rgba(101,163,13,0.10)_38%,transparent_70%)] rounded-full pointer-events-none -z-10" />
            <div className="absolute top-1/3 -right-16 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[radial-gradient(circle,rgba(163,230,53,0.10)_0%,transparent_70%)] rounded-full pointer-events-none -z-10" />

            {/* Profile Device Card Container with Interactive 3D Tilt */}
            <div
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: isHovered
                  ? `perspective(1500px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-2px) scale3d(1.005, 1.005, 1.005)`
                  : 'perspective(1500px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)',
                transition: isHovered ? 'transform 0.15s ease-out' : 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                transformStyle: 'preserve-3d',
              }}
              className="relative w-full max-w-[380px] sm:max-w-[460px] xl:max-w-[480px] rounded-[2.25rem] sm:rounded-[2.75rem] border border-[#3b4532] bg-[#141712] p-4 sm:p-5 shadow-[0_0_70px_rgba(212,255,50,0.12),0_30px_60px_rgba(0,0,0,0.9)] hover:border-[#526044] cursor-pointer"
            >

              {/* Header Bar */}
              <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-widest text-[#7a806f] uppercase px-3 pt-1 pb-3.5 border-b border-[#242b1e]">
                <span className="text-[#d4ff32] font-bold">MERN STACK CORE</span>
                <span>PUNE / INDIA</span>
              </div>

              {/* Photo Area - Taller Aspect Ratio with top framing */}
              <div className="my-4 rounded-[1.5rem] sm:rounded-[1.75rem] overflow-hidden aspect-[4/5.6] sm:aspect-[4/5.4] bg-[#181b14] border border-[#242b1e] group relative">
                <img
                  src={profileImg || '/profile.jpg'}
                  alt="Pratik Jadhav"
                  width={960}
                  height={1440}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle vignette inside photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10 pointer-events-none" />
              </div>

              {/* Floating Badge 1: Top-Left (Lime) */}
              <div className="absolute top-[16%] -left-3 sm:-left-12 z-30 pointer-events-auto">
                <div className="bg-[#d4ff32] text-neutral-950 text-[11px] sm:text-[13px] font-black px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full shadow-[0_16px_35px_rgba(0,0,0,0.85)] -rotate-[14deg] hover:rotate-0 hover:scale-105 transition-all duration-200 cursor-default select-none tracking-tight">
                  MERN STACK DEV
                </div>
              </div>

              {/* Floating Badge 2: Middle-Right (Soft Sky Blue) */}
              <div className="absolute top-[52%] -right-3 sm:-right-11 z-30 pointer-events-auto">
                <div className="bg-[#93c5fd] text-neutral-950 text-[11px] sm:text-[13px] font-black px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full shadow-[0_16px_35px_rgba(0,0,0,0.85)] rotate-[6deg] hover:rotate-0 hover:scale-105 transition-all duration-200 cursor-default select-none tracking-tight">
                  REACT NATIVE
                </div>
              </div>

              {/* Floating Badge 3: Bottom-Left (Salmon / Coral Red) */}
              <div className="absolute bottom-[14%] -left-2 sm:-left-10 z-30 pointer-events-auto">
                <div className="bg-[#ff6854] text-white text-[11px] sm:text-[13px] font-black px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full shadow-[0_16px_35px_rgba(0,0,0,0.85)] -rotate-[6deg] hover:rotate-0 hover:scale-105 transition-all duration-200 cursor-default select-none tracking-tight flex items-center gap-1.5">
                  <span>SHIPS PRODUCTS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom Card Info Bar */}
              <div className="pt-2 pb-1 px-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-wide">
                  Pratik Jadhav
                </h3>
                <p className="text-[10px] sm:text-[11px] tracking-widest font-mono text-[#d4ff32] font-semibold uppercase mt-0.5">
                  MERN STACK DEVELOPER
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats / Numbers 4-Column Bar at Bottom of Hero */}
      <div className="w-full border-t border-[#20241b] relative z-10 bg-[#0d0f0c]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
          {/* Top index counter */}
          <div className="flex justify-end pt-3 pb-1">
            <span className="text-[11px] font-mono tracking-widest text-[#686d5e]">
              01 / 06
            </span>
          </div>

          {/* 4 Block Grid: 2 rows x 2 cols on mobile, 4 cols on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-[#20241b] py-6 lg:py-8">
            {stats.map((stat, idx) => {
              const borderClasses = [
                'border-r border-b lg:border-b-0 pb-5 lg:pb-0',
                'border-b lg:border-b-0 lg:border-r pb-5 lg:pb-0',
                'border-r pt-5 lg:pt-0',
                'pt-5 lg:pt-0',
              ][idx];

              return (
                <div
                  key={stat.label}
                  className={`flex flex-col justify-center px-3 sm:px-6 lg:px-8 xl:px-10 border-[#20241b] ${borderClasses}`}
                >
                  <div className="font-serif text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-normal text-[#f4f3ea] leading-none mb-2 tracking-tight whitespace-nowrap">
                    {stat.value}
                  </div>
                  <div className="text-[9.5px] sm:text-[11px] font-mono tracking-wider sm:tracking-widest text-[#7f8475] uppercase whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
