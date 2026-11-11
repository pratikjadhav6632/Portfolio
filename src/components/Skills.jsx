import React from 'react';

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 sm:py-32 lg:py-36 bg-[#d4ff32] text-[#11130e] relative overflow-hidden selection:bg-[#11130e] selection:text-[#d4ff32]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-16 sm:pb-20 lg:pb-24 gap-8">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase mb-6 sm:mb-8 select-none">
              <span className="text-[#36420c] font-bold">04</span>
              <span className="text-[#45530f] font-semibold">WORKING STACK</span>
              <span>·</span>
              <span className="bg-[#11130e] text-[#d4ff32] font-black px-2.5 py-0.5 rounded-full text-[10.5px]">
                MERN STACK CORE
              </span>
            </div>

            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[88px] font-normal leading-[0.88] tracking-[-0.035em] text-[#11130e] select-none [font-optical-sizing:auto]">
              Broad enough to own
              it. <br />
              <span className="italic text-[#882412]">Focused enough to </span> <br />
              <span className="italic text-[#882412]">ship it.</span>
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm lg:text-[15px] text-[#36420c] leading-relaxed max-w-sm lg:pb-3">
            Specializing in the full MERN Stack (MongoDB, Express, React, Node.js) and React Native—connecting high-performing interfaces with reliable, scalable backends.
          </p>
        </div>

        {/* 2x2 Grid of Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          {/* Card 01: Mobile (Dark Charcoal) */}
          <div className="rounded-[2.5rem] bg-[#141712] text-white p-8 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between shadow-xl min-h-[400px] sm:min-h-[440px] group transition-all duration-300 hover:shadow-2xl">
            {/* Top-Right Sonar / Radar Watermark Graphic with Lime Dot */}
            <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full border border-[#d4ff32]/[0.08] pointer-events-none" />
            <div className="absolute -top-6 -right-6 w-52 h-52 rounded-full border border-[#d4ff32]/[0.12] pointer-events-none" />
            <div className="absolute top-4 right-4 w-32 h-32 rounded-full border border-[#d4ff32]/[0.18] flex items-center justify-center pointer-events-none">
              <div className="w-3 h-3 rounded-full bg-[#d4ff32] shadow-[0_0_12px_#d4ff32]" />
            </div>

            <div>
              <div className="text-xs font-mono tracking-widest text-[#7f8677] uppercase mb-4 select-none">
                01 / MOBILE
              </div>

              <h3 className="font-serif text-4xl sm:text-5xl text-white font-normal leading-[1.05] tracking-tight mb-4">
                Cross-platform apps
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#9aa090] leading-relaxed mb-8 max-w-md">
                React Native and cross-platform mobile experiences designed around real customer and partner workflows.
              </p>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-2 pt-4 relative z-10">
              {[
                'React Native',
                'Expo',
                'TypeScript',
                'JavaScript',
                'Redux Toolkit',
                'Zustand',
                'Deep links',
                'Push notifications',
                'Store releases'
              ].map((pill, idx) => (
                <span
                  key={idx}
                  className="bg-[#22271e]/90 border border-[#31382b] text-[#cbd0c2] text-xs px-3.5 py-1.5 rounded-full font-mono shadow-sm"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Card 02: Web (Soft Oatmeal Cream) */}
          <div className="rounded-[2.5rem] bg-[#f3efe6] text-[#141612] p-8 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between shadow-xl min-h-[400px] sm:min-h-[440px] group transition-all duration-300 hover:shadow-2xl">
            <div>
              <div className="text-xs font-mono tracking-widest text-[#71766a] uppercase mb-4 select-none">
                02 / WEB & REACT INTERFACES
              </div>

              <h3 className="font-serif text-4xl sm:text-5xl text-[#141612] font-normal leading-[1.05] tracking-tight mb-4">
                Fast, expressive interfaces
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#61665a] leading-relaxed mb-8 max-w-md">
                Modern React single-page apps, Next.js web applications, and maintainable component systems built for conversion.
              </p>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-2 pt-4">
              {[
                'React.js',
                'Next.js',
                'TypeScript',
                'Tailwind CSS',
                'Redux / Zustand',
                'JavaScript (ES6+)',
                'SEO & Perf',
                'Responsive Design'
              ].map((pill, idx) => (
                <span
                  key={idx}
                  className="bg-white/85 border border-[#ded8cb] text-[#4d5246] text-xs px-3.5 py-1.5 rounded-full font-mono shadow-sm"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Card 03: Systems (Vibrant Coral Red) */}
          <div className="rounded-[2.5rem] bg-[#ff6b57] text-[#180905] p-8 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between shadow-xl min-h-[400px] sm:min-h-[440px] group transition-all duration-300 hover:shadow-2xl">
            <div>
              <div className="text-xs font-mono tracking-widest text-[#731c11] uppercase font-bold mb-4 select-none">
                03 / BACKEND & MERN SYSTEMS
              </div>

              <h3 className="font-serif text-4xl sm:text-5xl text-[#180905] font-normal leading-[1.05] tracking-tight mb-4">
                MERN stack & backend systems
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#4a1710] leading-relaxed mb-8 max-w-md font-medium">
                Complete MERN development: Node.js & Express.js server architectures, MongoDB document modelling with Mongoose, JWT authentication, and REST APIs that scale.
              </p>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-2 pt-4">
              {[
                'Node.js',
                'Express.js',
                'MongoDB',
                'Mongoose ODM',
                'React.js',
                'REST APIs',
                'JWT Auth',
                'PostgreSQL',
                'Supabase',
                'RBAC'
              ].map((pill, idx) => (
                <span
                  key={idx}
                  className="bg-white/25 border border-white/40 text-[#1f0a06] text-xs font-semibold px-3.5 py-1.5 rounded-full font-mono shadow-sm"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Card 04: Delivery (Sky Blue with 4-Step Process) */}
          <div className="rounded-[2.5rem] bg-[#8ebcfc] text-[#0b1f3b] p-8 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between shadow-xl min-h-[400px] sm:min-h-[440px] group transition-all duration-300 hover:shadow-2xl">
            <div>
              <div className="text-xs font-mono tracking-widest text-[#153a6b] uppercase font-bold mb-4 select-none">
                04 / DELIVERY
              </div>

              <h3 className="font-serif text-4xl sm:text-5xl text-[#0b1f3b] font-normal leading-[1.05] tracking-tight mb-6">
                From question to handover
              </h3>
            </div>

            {/* 4 Delivery Steps */}
            <div className="space-y-0 border-t border-[#70abf7]/80 pt-1 mt-auto">
              {[
                { step: '01', title: 'Discover & scope' },
                { step: '02', title: 'Design the journey' },
                { step: '03', title: 'Build & integrate' },
                { step: '04', title: 'Test, launch & document' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-6 py-3.5 border-b border-[#70abf7]/70 text-xs sm:text-sm font-sans font-bold text-[#0b1f3b]"
                >
                  <span className="font-mono text-xs text-[#1e4882] font-semibold">
                    {item.step}
                  </span>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;