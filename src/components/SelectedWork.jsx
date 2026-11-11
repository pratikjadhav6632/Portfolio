import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gaplifyLogo from '../assets/gaplify.webp';
import foundrrLogo from '../assets/Foundrr.png';
import miraLogo from '../assets/mira.webp';
import quirgoLogo from '../assets/QuirGO.png';
import quantumItLogo from '../assets/QuantumIt.jpeg';

const SelectedWork = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const ecosystemProjects = [
    {
      number: '04',
      types: ['web'],
      category: 'WEB APPLICATION',
      title: 'WonderNest',
      description:
        'A hotel discovery and booking platform designed to help travelers explore stays across different cities, browse listings, and manage hotel information.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'EJS'],
      badge: (
        <div className="w-12 h-12 rounded-2xl bg-[#fdfbf7] border border-[#f5eee3] flex items-center justify-center p-2 shadow-sm flex-shrink-0">
          <span className="font-serif italic text-xl font-bold text-[#a84826] tracking-tight">
            WN
          </span>
        </div>
      ),
    },
    {
      number: '05',
      types: ['mobile'],
      category: 'NETWORKING PLATFORM · ANDROID',
      title: 'Foundrr',
      description:
        'An Android application designed to help users discover, track, and manage opportunities with ease—delivering a clean mobile interface, fast navigation, and collaborative backend workflows.',
      technologies: ['React Native', 'Expo', 'Node.js', 'Express.js', 'MongoDB'],

      badge: (
        <div className="w-12 h-12 rounded-2xl bg-[#2e0780] flex items-center justify-center shadow-sm flex-shrink-0 overflow-hidden">
          <img
            src={foundrrLogo}
            alt="Foundrr"
            className="w-full h-full object-cover object-center scale-125"
          />
        </div>
      ),
    },
    {
      number: '06',
      types: ['web'],
      category: 'BUSINESS WEBSITE',
      title: 'Jotiba Constructions',
      description:
        'A digital presence for a construction business, focused on presenting its services, building credibility, and making it easier for potential customers to discover and connect with the business.',
      technologies: ['Web Development', 'Responsive UI'],
      badge: (
        <div className="w-12 h-12 rounded-2xl bg-[#fdfbf7] border border-[#f5eee3] flex items-center justify-center p-2 shadow-sm flex-shrink-0">
          <span className="font-serif italic text-xl font-bold text-[#b45309] tracking-tight">
            JC
          </span>
        </div>
      ),
    },
    {
      number: '07',
      types: ['platforms'],
      category: 'INTERNAL SOFTWARE',
      title: 'CollegeSphere',
      description:
        'An internal software solution for NMiet, designed to digitize and simplify institutional LC-related workflows, reducing manual processes and bringing administrative activities into one system.',
      technologies: ['Full Stack', 'Workflow Automation', 'Internal Tools'],
      badge: (
        <div className="w-12 h-12 rounded-2xl bg-[#1e293b] border border-[#334155] flex items-center justify-center p-2 shadow-sm flex-shrink-0">
          <span className="font-mono text-sm font-bold text-[#d4ff32] tracking-tight">
            CS
          </span>
        </div>
      ),
    },
    {
      number: '08',
      types: ['web', 'platforms'],
      category: 'WEBSITE & CRM',
      title: 'QuantumITGurus',
      description:
        'A combined web presence and CRM solution, bringing business information and customer relationship management together to streamline lead handling, customer interactions, and business operations.',
      technologies: ['Web Development', 'CRM', 'Lead Management'],
      badge: (
        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center p-1.5 shadow-sm flex-shrink-0 overflow-hidden">
          <img
            src={quantumItLogo}
            alt="QuantumITGurus"
            className="w-full h-full object-contain"
          />
        </div>
      ),
    },
    {
      number: '09',
      types: ['web'],
      category: 'PRODUCT SHOWCASE WEBSITE',
      title: 'Oshni',
      description:
        'A digital showcase for traditional Siddha wellness products, bringing ancient healing heritage into a modern web experience—presenting product collections, formulations, and the brand’s philosophy through a clean, wellness-focused interface.',
      technologies: ['Product Showcase', 'Web Design', 'Responsive UI'],
      badge: (
        <div className="w-12 h-12 rounded-2xl bg-[#f4efe4] border border-[#e3dac6] flex items-center justify-center p-2 shadow-sm flex-shrink-0">
          <span className="font-serif italic text-xl font-bold text-[#3d5a3c] tracking-tight">
            O
          </span>
        </div>
      ),
    },
  ];

  const featuredTypes = {
    gaplify: ['web', 'platforms'],
    mira: ['platforms', 'web'],
    quirgo: ['platforms', 'web'],
  };

  const matchesFilter = (types, filterKey) =>
    filterKey === 'all' || types.includes(filterKey);

  const countForFilter = (filterKey) => {
    const featuredCount = Object.values(featuredTypes).filter((types) =>
      matchesFilter(types, filterKey)
    ).length;
    const ecoCount = ecosystemProjects.filter((p) =>
      matchesFilter(p.types, filterKey)
    ).length;
    return String(featuredCount + ecoCount);
  };

  const filters = [
    { key: 'all', label: 'All', count: countForFilter('all') },
    { key: 'mobile', label: 'Mobile', count: countForFilter('mobile') },
    { key: 'web', label: 'Web', count: countForFilter('web') },
    { key: 'platforms', label: 'Platforms', count: countForFilter('platforms') },
  ];

  const showGaplify = matchesFilter(featuredTypes.gaplify, activeFilter);
  const showMira = matchesFilter(featuredTypes.mira, activeFilter);
  const showQuirgo = matchesFilter(featuredTypes.quirgo, activeFilter);
  const visibleEcosystem = ecosystemProjects.filter((project) =>
    matchesFilter(project.types, activeFilter)
  );

  return (
    <section
      id="work"
      className="py-24 sm:py-32 lg:py-36 bg-[#0d0f0c] text-[#f4f3ea] relative overflow-hidden border-t border-[#1d2119]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(212,255,50,0.03)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-14 sm:pb-16 lg:pb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase mb-6 select-none">
              <span className="text-[#a84826] font-bold">03</span>
              <span className="text-[#71766a] font-semibold">SELECTED WORK</span>
            </div>

            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[88px] font-normal leading-[0.88] tracking-[-0.035em] text-[#f4f3ea] select-none [font-optical-sizing:auto]">
              Products with a job <br />
              <span className="italic text-[#a84826]">to get done.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 lg:pb-2">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.key;
              return (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs font-mono tracking-wide transition-all duration-200 uppercase flex items-center gap-1.5 cursor-pointer select-none ${isActive
                    ? 'bg-[#d4ff32] text-black font-extrabold shadow-md shadow-[#d4ff32]/10'
                    : 'bg-[#141612] text-[#8e9385] hover:text-white border border-[#2b3124] hover:border-[#454e3a]'
                    }`}
                >
                  <span>{filter.label}</span>
                  {filter.count && (
                    <span className="text-[10px] font-mono leading-none opacity-80">
                      {filter.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Layout Grid */}
        <div className="space-y-6 sm:space-y-8">

          {/* Row 1: 2-Column Grid (Gaplify & MIRA) */}
          {(showGaplify || showMira) && (
            <div className={`grid grid-cols-1 gap-6 sm:gap-8 ${showGaplify && showMira ? 'lg:grid-cols-2' : 'lg:grid-cols-1'}`}>

              {/* Project 1: Gaplify */}
              {showGaplify && (
                <div className="rounded-[2rem] border border-[#223446] bg-gradient-to-br from-[#101e2b] via-[#0c151f] to-[#080d14] p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between group hover:border-[#36516b] transition-all duration-300 hover:shadow-2xl hover:shadow-black/70">
                  {/* Concentric circle watermark curves */}
                  <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full border border-white/[0.04] pointer-events-none" />
                  <div className="absolute -right-12 -bottom-12 w-56 h-56 rounded-full border border-white/[0.03] pointer-events-none" />
                  <div className="absolute -right-2 -bottom-2 w-36 h-36 rounded-full border border-white/[0.02] pointer-events-none" />

                  <div>
                    {/* Top Row: Logo & 01 Index */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-md flex-shrink-0 overflow-hidden">
                        <img
                          src={gaplifyLogo}
                          alt="Gaplify"
                          className="w-full h-full object-cover object-center scale-[1.85]"
                        />
                      </div>
                      <span className="font-mono text-xs text-[#526578] font-semibold select-none">
                        01
                      </span>
                    </div>

                    {/* Eyebrow / Category */}
                    <div className="flex items-center gap-2 mb-2 select-none">
                      <span className="text-[#d4ff32] font-mono text-[11px] font-bold tracking-wider uppercase">
                        EDTECH
                      </span>
                      <span className="text-[#4f6070] font-mono text-[11px]">·</span>
                      <span className="text-[#788a9c] font-mono text-[11px] tracking-wider uppercase">
                        LIVE · RESPONSIVE WEBSITE
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight mb-3.5">
                      Gaplify
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-xs sm:text-sm text-[#98a4b0] leading-relaxed mb-8 max-w-lg">
                      A career development and mentorship platform connecting students and freshers with mentors, skill-gap analysis, personalized roadmaps, and curated resources—designed and built end-to-end across product, auth, frontend, and backend.
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {['React.js', 'Node.js', 'Express', 'MongoDB'].map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-[#162330]/90 border border-[#2a3c4d] text-[#9aa8b8] text-[11px] px-3.5 py-1.5 rounded-full font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Row */}
                  <div className="border-t border-[#1c2b3a] pt-5 flex items-center justify-between text-xs font-mono relative z-10">
                    <div className="flex items-center gap-4">
                      <a
                        href="https://www.gaplify.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-white hover:text-[#d4ff32] flex items-center gap-1.5 transition-colors duration-150"
                      >
                        <span>Visit live site</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                    </div>

                    <span className="text-[10px] sm:text-[11px] tracking-wider text-[#566a7e] uppercase select-none">
                      115+ STUDENTS · 10+ MENTORS
                    </span>
                  </div>
                </div>
              )}

              {/* Project 2: MIRA */}
              {showMira && (
                <div className="rounded-[2rem] border border-[#2a3324] bg-gradient-to-br from-[#141a11] via-[#0e120c] to-[#080a07] p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between group hover:border-[#495c3c] transition-all duration-300 hover:shadow-2xl hover:shadow-black/70">
                  {/* Concentric circle watermark curves */}
                  <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full border border-white/[0.04] pointer-events-none" />
                  <div className="absolute -right-12 -bottom-12 w-56 h-56 rounded-full border border-white/[0.03] pointer-events-none" />
                  <div className="absolute -right-2 -bottom-2 w-36 h-36 rounded-full border border-white/[0.02] pointer-events-none" />

                  <div>
                    {/* Top Row: Logo & 02 Index */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center p-1.5 shadow-md flex-shrink-0 overflow-hidden">
                        <img
                          src={miraLogo}
                          alt="MIRA"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="font-mono text-xs text-[#64705d] font-semibold select-none">
                        02
                      </span>
                    </div>

                    {/* Eyebrow / Category */}
                    <div className="flex items-center gap-2 mb-2 select-none">
                      <span className="text-[#d4ff32] font-mono text-[11px] font-bold tracking-wider uppercase">
                        PERSONAL AI PROJECT
                      </span>
                      <span className="text-[#4f5948] font-mono text-[11px]">·</span>
                        <span className="inline-flex items-center gap-1.5 text-[#a4b09c] font-mono text-[11px] tracking-wider uppercase">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff32]" aria-hidden="true" />
                          ONGOING
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight mb-3.5">
                      MIRA
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-xs sm:text-sm text-[#9ea698] leading-relaxed mb-8 max-w-lg">
                      A personal AI companion combining conversational intelligence, chat and voice interactions, and persistent contextual memory—going beyond chatbots to deliver more personalized AI experiences.
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {
                          ['OpenAI API', 'Node.js', 'React', 'Embeddings', 'Vector DB'].map((tech, idx) => (
                            <span
                              key={idx}
                              className="bg-[#182014]/90 border border-[#2d3826] text-[#a4b09c] text-[11px] px-3.5 py-1.5 rounded-full font-mono"
                            >
                              {tech}
                            </span>
                          ))
                        }
                    </div>
                  </div>

                  {/* Footer Row */}
                  <div className="border-t border-[#20291b] pt-5 flex items-center justify-between text-xs font-mono relative z-10 gap-3">
                    <span className="font-medium text-[#d4ff32]">
                      Your conversations. Your memories. Your AI.
                    </span>
                    <span className="text-[10px] sm:text-[11px] tracking-wider text-[#64705d] uppercase select-none">
                      CHAT · VOICE · MEMORY
                    </span>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* Row 2: Full-Width Featured Card (QuirGO) */}
          {showQuirgo && (
            <div className="rounded-[2rem] border border-[#2a2d42] bg-gradient-to-br from-[#161826] via-[#10121c] to-[#0a0b12] p-7 sm:p-9 lg:p-10 relative overflow-hidden flex flex-col justify-between group hover:border-[#464c70] transition-all duration-300 hover:shadow-2xl hover:shadow-black/70">
              {/* Large sweeping concentric rings */}
              <div className="absolute -right-36 -bottom-36 w-[520px] h-[520px] rounded-full border border-white/[0.04] pointer-events-none" />
              <div className="absolute -right-16 -bottom-16 w-[360px] h-[360px] rounded-full border border-white/[0.03] pointer-events-none" />
              <div className="absolute -right-2 -bottom-2 w-[220px] h-[220px] rounded-full border border-white/[0.02] pointer-events-none" />

              <div>
                {/* Top Row: Logo & 03 Index */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center p-2 shadow-md flex-shrink-0 overflow-hidden">
                    <img
                      src={quirgoLogo}
                      alt="QuirGO"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="font-mono text-xs text-[#646985] font-semibold select-none">
                    03
                  </span>
                </div>

                {/* Eyebrow / Category */}
                <div className="flex items-center gap-2 mb-2 select-none">
                  <span className="text-[#d4ff32] font-mono text-[11px] font-bold tracking-wider uppercase">
                    ALL-IN-ONE SAAS PLATFORM
                  </span>
                  <span className="text-[#4e536b] font-mono text-[11px]">·</span>
                  <span className="text-[#7e84a3] font-mono text-[11px] tracking-wider uppercase">
                    LIVE · 38 ORGANIZATIONS
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-4xl sm:text-5xl lg:text-[54px] text-white font-normal tracking-tight mb-4">
                  QuirGO
                </h3>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm lg:text-[15px] text-[#9ea3ba] leading-relaxed max-w-4xl mb-8">
                  An all-in-one SaaS platform covering HRM, CRM, Finance, and Project Management across interconnected multi-role organizational workflows. Engineered performance optimizations with Redis caching and database indexing, cutting a critical response time from around 5 seconds to 790 milliseconds.
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {['HRM & CRM', 'Finance', 'Project Management', 'Redis Caching', 'Database Indexing', 'Multi-Role SaaS'].map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[#1c1f30]/90 border border-[#303552] text-[#a7adc7] text-[11px] px-3.5 py-1.5 rounded-full font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Row */}
              <div className="border-t border-[#222538] pt-5 flex items-center justify-between text-xs font-mono relative z-10 flex-wrap gap-4">
                <div className="flex items-center gap-6 flex-wrap text-[#c8cde0]">
                  <a
                    href="https://quirgo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-white hover:text-[#d4ff32] flex items-center gap-1.5 transition-colors duration-150"
                  >
                    <span>Visit live site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[#9ea3ba]">
                    38 Organizations
                  </span>
                  <span className="text-[#d4ff32] font-semibold">
                    ~5s → 790ms Response Time
                  </span>
                </div>

                <span className="text-[10px] sm:text-[11px] tracking-wider text-[#6e7391] uppercase select-none">
                  ASSOCIATED WITH SSWW
                </span>
              </div>
            </div>
          )}

        </div>

        {/* SUB-SECTION: Product Ecosystems & Web Experiences (04 — 09) */}
        {visibleEcosystem.length > 0 && (
          <div className="mt-20 sm:mt-28">

            {/* Sub-header Bar */}
            <div className="flex items-center justify-between pb-8 border-b border-[#20241b] text-xs font-mono tracking-widest uppercase mb-8 select-none text-[#73796c]">
              <span className="font-semibold text-[#8e9485]">
                PRODUCT ECOSYSTEMS & WEB EXPERIENCES
              </span>
              <span className="font-bold text-[#8e9485]">
                {activeFilter === 'all' ? '04 — 09' : `${visibleEcosystem.length} MATCH${visibleEcosystem.length === 1 ? '' : 'ES'}`}
              </span>
            </div>

            {/* 3-Column Ecosystem Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {visibleEcosystem.map((project) => (
                <div
                  key={project.number}
                  className="rounded-[2rem] border border-[#242820] bg-[#141612]/95 hover:border-[#3e4836] hover:bg-[#181a15] p-7 sm:p-8 flex flex-col justify-between group transition-all duration-200 hover:shadow-2xl hover:shadow-black/70"
                >
                  <div>
                    {/* Top Row: Logo & Index */}
                    <div className="flex items-center justify-between mb-8">
                      {project.badge}
                      <span className="font-mono text-xs text-[#525a4d] font-semibold select-none">
                        {project.number}
                      </span>
                    </div>

                    {/* Eyebrow / Category */}
                    <div className="flex items-center gap-2 mb-2 select-none">
                      <span className="text-[#d4ff32] font-mono text-[10.5px] font-bold tracking-wider uppercase">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-3xl text-white font-normal tracking-tight mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-xs sm:text-sm text-[#9aa090] leading-relaxed mb-8">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-2 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-[#1b1f17] border border-[#293023] text-[#9ba294] text-[11px] px-3 py-1.5 rounded-full font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.links && (
                      <div className="border-t border-[#20241b] pt-4 flex items-center gap-4 text-xs font-mono">
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-white hover:text-[#d4ff32] flex items-center gap-1.5 transition-colors duration-150"
                          >
                            <span>{link.label}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default SelectedWork;
