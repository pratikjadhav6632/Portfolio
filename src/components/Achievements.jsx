import React from 'react';

const Achievements = () => {
  const renderPills = (pills, isDark = false) => (
    <div className="flex flex-wrap gap-2 pt-2 relative z-10">
      {pills.map((pill, idx) => (
        <span
          key={idx}
          className={
            isDark
              ? 'bg-[#22261e] border border-[#32382b] text-[#c7cdb9] text-xs px-3.5 py-1.5 rounded-full font-mono'
              : 'bg-white/85 border border-[#d8d2c4] text-[#4a4f43] text-xs px-3.5 py-1.5 rounded-full font-mono shadow-sm'
          }
        >
          {pill}
        </span>
      ))}
    </div>
  );

  return (
    <section
      id="proof"
      className="py-24 sm:py-32 lg:py-36 bg-[#f4f0e6] text-[#141612] relative overflow-hidden selection:bg-[#a84826] selection:text-white"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">

        {/* Section Header */}
        <div className="pb-16 sm:pb-20 lg:pb-24">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase mb-6 sm:mb-8 select-none">
            <span className="text-[#a84826] font-bold">05</span>
            <span className="text-[#71766a] font-semibold">PROOF & PERSPECTIVE</span>
          </div>

          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[88px] font-normal leading-[0.88] tracking-[-0.035em] text-[#141612] select-none [font-optical-sizing:auto]">
            Built through experience, <br />
            <span className="italic text-[#a84826]">proven through impact.</span>
          </h2>
        </div>

        {/* 2x2 Grid of Achievement Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          {/* Card 01: Product Engineering · QuirGO (Matte Charcoal) */}
          <div className="rounded-[2.5rem] bg-[#161914] text-white p-8 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between shadow-xl min-h-[380px] sm:min-h-[420px] group transition-all duration-300 hover:shadow-2xl">
            {/* Top-Right Greenish Wave SVG Watermark */}
            <svg
              viewBox="0 0 160 80"
              className="absolute top-6 right-6 w-36 h-20 text-[#5f6948] stroke-current fill-none pointer-events-none opacity-80"
              strokeWidth="14"
              strokeLinecap="round"
            >
              <path d="M 10 60 Q 45 10, 80 50 T 150 30" />
            </svg>

            <div>
                <div className="text-[10.5px] sm:text-xs font-mono tracking-widest text-[#7f8677] uppercase mb-4 select-none">
                  PRODUCT ENGINEERING · QUIRGO
                </div>

                  <div className="font-serif text-5xl sm:text-6xl lg:text-[68px] text-[#d4ff32] font-normal leading-none my-3 select-none tracking-tight">
                    38 organizations.
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-[34px] text-white font-normal leading-[1.15] tracking-tight mb-4 max-w-md">
                    One SaaS ecosystem.
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#9aa090] leading-relaxed mb-8 max-w-md">
                    Contributed to an integrated SaaS platform spanning HRM, CRM, Finance and Project Management, with role-based workflows and business automation.
                  </p>
              </div>

              {renderPills(['Node.js', 'React', 'MongoDB', 'Redis'], true)}
            </div>

            {/* Card 02: Performance Engineering (Eggshell Cream) */}
            <div className="rounded-[2.5rem] bg-[#eae4d5] border border-[#ded8c9] text-[#141612] p-8 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between shadow-sm min-h-[380px] sm:min-h-[420px] group transition-all duration-300 hover:shadow-md">
              <div>
                <div className="text-[10.5px] sm:text-xs font-mono tracking-widest text-[#71766a] uppercase mb-3 select-none">
                  PERFORMANCE ENGINEERING · 2026
                </div>

                  <div className="font-serif text-5xl sm:text-6xl lg:text-[72px] text-[#141612] font-normal leading-none my-3 select-none tracking-tight">
                    5s → 790ms
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-[#141612] font-normal leading-tight mb-3">
                    Making systems faster.
                  </h3>

                    <p className="font-sans text-xs sm:text-sm text-[#61665a] leading-relaxed mb-8 max-w-md">
                      Improved critical response times through Redis caching and database indexing, reducing latency by approximately 84%.
                    </p>
                </div>

                {renderPills(['Redis', 'Indexing', 'Optimization'])}
              </div>

              {/* Card 03: Recognition · Avishkar Bharat (Eggshell Cream) */}
              <div className="rounded-[2.5rem] bg-[#eae4d5] border border-[#ded8c9] text-[#141612] p-8 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between shadow-sm min-h-[380px] sm:min-h-[420px] group transition-all duration-300 hover:shadow-md">
                <div>
                  <div className="text-[10.5px] sm:text-xs font-mono tracking-widest text-[#71766a] uppercase mb-3 select-none">
                    RECOGNITION · AVISHKAR BHARAT
                  </div>

                    <div className="font-serif text-5xl sm:text-6xl lg:text-[72px] text-[#141612] font-normal leading-none my-3 select-none tracking-tight">
                      Gold Medal
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl text-[#141612] font-normal leading-tight mb-3">
                      Recognition beyond code.
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-[#61665a] leading-relaxed max-w-md">
                      Represented my college at the university level in Avishkar Bharat. Received a Special Achievement Trophy, gold medal and 13 certificates.
                    </p>
                  </div>
                </div>

                {/* Card 04: Entrepreneurship · Gaplify (Eggshell Cream) */}
                <div className="rounded-[2.5rem] bg-[#eae4d5] border border-[#ded8c9] text-[#141612] p-8 sm:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between shadow-sm min-h-[380px] sm:min-h-[420px] group transition-all duration-300 hover:shadow-md">
                  <div>
                    <div className="text-[10.5px] sm:text-xs font-mono tracking-widest text-[#71766a] uppercase mb-3 select-none">
                      ENTREPRENEURSHIP · GAPLIFY
                    </div>

                      <div className="font-serif text-5xl sm:text-6xl lg:text-[72px] text-[#141612] font-normal leading-none my-3 select-none tracking-tight">
                        115+ students
                      </div>

                      <h3 className="font-serif text-3xl sm:text-4xl text-[#141612] font-normal leading-tight mb-3">
                        Started with an idea. Built a community.
                      </h3>

                      <p className="font-sans text-xs sm:text-sm text-[#61665a] leading-relaxed mb-8 max-w-md">
                        Built Gaplify, a student-focused platform connecting learners and mentors. Took an idea from concept to a working product and learned what it takes to build for real users.
                      </p>
                  </div>

                  {renderPills(['MERN Stack', 'Product Building', 'Startup'])}
                </div>

              </div>

            </div>
          </section>
          );
};

          export default Achievements;
