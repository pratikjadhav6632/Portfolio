import React from 'react';
import quirgoLogo from '../assets/QuirGO.png';
import sswwLogo from '../assets/ssww.webp';
import foundrrLogo from '../assets/Foundrr.png';
import quantumItLogo from '../assets/QuantumIt.jpeg';
import tkInfotechLogo from '../assets/Tkinfotech.png';
import gaplifyLogo from '../assets/gaplify.webp';

const About = () => {
  const partners = [
    {
      name: 'QuirGo',
      role: 'SAAS PRODUCT · ASSOCIATED WITH SSWW',
      url: 'https://quirgo.com',
      icon: (
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white flex items-center justify-center p-2.5 shadow-md flex-shrink-0 overflow-hidden">
          <img src={quirgoLogo} alt="QuirGo" className="w-full h-full object-contain" />
        </div>
      )
    },
    {
      name: 'SSWW',
      role: 'CURRENT EMPLOYER',
      url: null,
      icon: (
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white flex items-center justify-center p-2.5 shadow-md flex-shrink-0 overflow-hidden">
          <img src={sswwLogo} alt="SSWW" className="w-full h-full object-contain" />
        </div>
      )
    },
    {
      name: 'Foundrr',
      role: 'EX-COMPANY · WEB + ANDROID',
      url: null,
      icon: (
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white flex items-center justify-center p-2.5 shadow-md flex-shrink-0 overflow-hidden">
          <img src={foundrrLogo} alt="Foundrr" className="w-full h-full object-contain" />
        </div>
      )
    },
    {
      name: 'QuantumItGurus',
      role: 'FREELANCE · CLIENT SOLUTIONS',
      url: null,
      icon: (
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white flex items-center justify-center p-2 shadow-md flex-shrink-0 overflow-hidden">
          <img src={quantumItLogo} alt="QuantumItGurus" className="w-full h-full object-contain" />
        </div>
      )
    },
    {
      name: 'TkInfotech',
      role: 'ASSOCIATED WITH SSWW',
      url: null,
      icon: (
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white flex items-center justify-center p-2.5 shadow-md flex-shrink-0 overflow-hidden">
          <img src={tkInfotechLogo} alt="TkInfotech" className="w-full h-full object-contain" />
        </div>
      )
    },
    {
      name: 'Gaplify',
      role: 'EDTECH PRODUCT · BUILT BY OWN',
      url: 'https://www.gaplify.in',
      icon: (
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white flex items-center justify-center shadow-md flex-shrink-0 overflow-hidden">
          <img src={gaplifyLogo} alt="Gaplify" className="w-full h-full object-cover object-center scale-[1.85]" />
        </div>
      )
    }
  ];

  const milestones = [
    {
      number: '01',
      title: 'The first leap: Gaplify',
      description:
        'Started my first startup to connect students with opportunities and mentors. Working across product planning, design, frontend, backend, auth, and integrations taught me that real products aren’t just features — they bring real value.',
      highlight: '115+ students. 10+ mentors. One idea that made me think like a builder.'
    },
    {
      number: '02',
      title: 'Building with a team: Foundrr',
      description:
        'Joined Foundrr as a Software Developer Intern, gaining hands-on exposure to collaborative development workflows, real requirements, and the shift from building solo to shipping software alongside a team.'
    },
    {
      number: '03',
      title: 'Beyond features: Building SaaS products',
      description:
        'Worked on Quirgo, an all-in-one SaaS platform spanning HRM, CRM, Finance, and Project Management. Navigating multi-role workflows and optimizing bottlenecks with Redis caching and database indexing cut a critical response time from ~5s to 790ms.',
      highlight: '38 organizations. Engineering beyond the interface.'
    },

    {
      number: '04',
      title: 'Still building. Still learning.',
      description:
        'Today, I’m still learning, experimenting, and looking for harder problems worth solving — combining engineering, product thinking, and business perspective to turn ideas into reality.',
      active: true
    }
  ];

  return (
    <section
      id="about"
      className="bg-[#0d0f0c] text-[#f4f3ea] relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">

        {/* TOP BLOCK: Trusted Work - Brands, Products & Delivery Partners */}
        <div className="py-24 sm:py-32 lg:py-36 border-b border-[#20241b]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 xl:gap-24 items-stretch">

            {/* Left Column: Heading & Subtitle */}
            <div className="lg:col-span-5 flex flex-col justify-between text-left">
              <div>
                <div className="text-xs font-mono tracking-widest uppercase font-bold text-[#d4ff32] mb-6 sm:mb-8 select-none">
                  TRUSTED WORK
                </div>

                <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl xl:text-[80px] font-normal leading-[0.90] tracking-[-0.035em] text-[#f4f3ea] mb-8 select-none [font-optical-sizing:auto]">
                  Brands, <br />
                  products & <br />
                  <span className="italic text-[#d4ff32]">delivery </span> <br />
                  <span className="italic text-[#d4ff32]">partners.</span>
                </h2>
              </div>

              <p className="font-sans text-sm sm:text-[15px] text-[#8e9485] leading-relaxed max-w-sm mt-auto pt-8">
                Work shown spans current employment, freelance collaborations, and independent product builds across mobile and web platforms.
              </p>
            </div>

            {/* Right Column: 2x3 Grid with Continuous Dividers & Full-Tile Lime Hover */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-b border-[#242b1e] h-full sm:grid-rows-3">
                {partners.map((partner, idx) => {
                  const tileClasses = `group flex items-center gap-5 sm:gap-6 p-7 sm:p-8 lg:p-9 xl:p-10 border-[#242b1e] transition-colors duration-150 hover:bg-[#d4ff32] h-full ${partner.url ? 'cursor-pointer' : 'cursor-default'} ${idx % 2 === 0 ? 'sm:border-r' : ''
                    } ${idx < 4 ? 'border-b sm:border-b' : (idx === 4 ? 'border-b sm:border-b-0' : '')}`;

                  const tileContent = (
                    <>
                      {partner.icon}
                      <div className="flex flex-col justify-center">
                        <h3 className="font-sans font-bold text-white text-base sm:text-lg tracking-tight group-hover:text-black transition-colors duration-150">
                          {partner.name}
                        </h3>
                        <p className="font-mono text-[10px] sm:text-[11px] tracking-wider text-[#8e9485] uppercase mt-1 group-hover:text-black group-hover:font-semibold transition-colors duration-150">
                          {partner.role}
                        </p>
                      </div>
                    </>
                  );

                  return partner.url ? (
                    <a
                      key={partner.name}
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={tileClasses}
                    >
                      {tileContent}
                    </a>
                  ) : (
                    <div key={partner.name} className={tileClasses}>
                      {tileContent}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM BLOCK: Light Warm Cream Editorial Story & Timeline */}
      <div className="bg-[#f4f0e6] text-[#141612] py-24 sm:py-32 lg:py-36 relative z-10 selection:bg-[#a84826] selection:text-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">

          {/* Header Bar */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-16 sm:pb-20 lg:pb-24 gap-8">
            <div>
              <div className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase mb-6 sm:mb-8 select-none">
                <span className="text-[#a84826] font-bold">02</span>
                <span className="text-[#71766a] font-semibold">THE JOURNEY SO FAR</span>
              </div>

              <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[88px] font-normal leading-[0.88] tracking-[-0.035em] text-[#141612] select-none [font-optical-sizing:auto]">
                Built by <span className="italic text-[#a84826]">curiosity.</span> <br />
                Shaped by building real things.
              </h2>
            </div>


          </div>

          {/* Main Story & Timeline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-6">

            {/* Left Column: Bio Story & Quote */}
            <div className="lg:col-span-5 flex flex-col justify-between self-stretch pr-0 lg:pr-6">
              <div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#141612] font-normal leading-[1.12] mb-7 sm:mb-8">
                  I didn’t start with a perfect roadmap. I started with an idea.
                </h3>

                <p className="font-sans text-sm sm:text-[15px] leading-relaxed text-[#555a4d] mb-6">
                  Just the curiosity to understand how technology works and the ambition to turn ideas into something people could actually use.
                </p>

                <p className="font-sans text-sm sm:text-[15px] leading-relaxed text-[#555a4d] mb-10">
                  Today, I see myself as more than someone who writes code. I’ve experienced product development, startup challenges, collaboration, performance optimization, and the business side of building software — from understanding users to sales conversations and how companies operate.
                </p>

                <p className="font-sans text-sm sm:text-base text-[#73786c] leading-relaxed max-w-sm lg:pb-2">
                  From building my first startup to solving real-world engineering problems and experimenting with new technologies, every experience taught me something beyond code.
                </p>
              </div>

              {/* Quote Block */}
              <div className="border-t border-[#d8d3c5] pt-6 mt-auto">
                <div className="flex items-start gap-2.5">
                  <span className="font-serif text-3xl sm:text-4xl text-[#a84826] leading-none select-none font-bold">
                    “
                  </span>
                  <p className="font-serif italic text-lg sm:text-xl text-[#1c1e19] leading-snug">
                    Because the goal was never just to become a developer. It was always to become someone who can turn an idea into reality.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Timeline Milestones Rail */}
            <div className="lg:col-span-7 relative pl-0 sm:pl-4">
              <div className="relative border-l border-[#d5cfbe] ml-3 sm:ml-4 pl-8 sm:pl-10 space-y-12 sm:space-y-14">
                {milestones.map((item) => (
                  <div key={item.number} className="relative group">
                    <div className="absolute -left-[45px] sm:-left-[53px] top-1 flex items-center gap-2">
                      <span
                        className={`w-2.5 h-4 rounded-full block ${item.active
                          ? 'bg-[#a84826] shadow-sm shadow-[#a84826]/30'
                          : 'border border-[#8a8f82] bg-[#f4f0e6]'
                          }`}
                      />
                      <span
                        className={`font-mono text-xs ${item.active ? 'text-[#a84826] font-bold' : 'text-[#71766a] font-semibold'
                          }`}
                      >
                        {item.number}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-serif text-2xl sm:text-[26px] text-[#141612] font-normal leading-tight mb-2">
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-[#61665a] leading-relaxed max-w-lg">
                        {item.description}
                      </p>
                      {item.highlight && (
                        <p className="font-serif italic text-xs sm:text-sm text-[#a84826] mt-2 max-w-lg">
                          {item.highlight}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
