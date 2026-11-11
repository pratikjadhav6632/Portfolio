import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowUpRight } from 'lucide-react';

const STATUS_STAGES = [
  { threshold: 35, label: 'Initializing MERN & React Native workspace' },
  { threshold: 72, label: 'Loading 9 shipped systems & SaaS builds' },
  { threshold: 99, label: 'Tuning API speed · ~5s → 790ms' },
  { threshold: 100, label: 'Ready — Welcome' },
];

const PageLoader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  });

  const containerRef = useRef(null);
  const emblemRef = useRef(null);
  const exitStartedRef = useRef(false);
  const finishTimerRef = useRef(null);
  const lenisLockedRef = useRef(false);

  const triggerExit = useCallback(() => {
    if (exitStartedRef.current) return;
    exitStartedRef.current = true;
    setProgress(100);
    setExiting(true);
    window.lenis?.start?.();
    lenisLockedRef.current = false;

    finishTimerRef.current = window.setTimeout(() => {
      setHidden(true);
      onFinish?.();
    }, 520);
  }, [onFinish]);

  useEffect(() => {
    if (hidden) {
      onFinish?.();
      return undefined;
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    let rafId = null;
    let doneTimer = null;
    const duration = 5200;
    const startTime = performance.now();

    const tick = (now) => {
      if (window.lenis && !lenisLockedRef.current && !exitStartedRef.current) {
        window.lenis.stop?.();
        lenisLockedRef.current = true;
      }

      const elapsed = now - startTime;
      const linear = Math.min(1, elapsed / duration);
      // Smooth steady progression over ~5.5 seconds total display
      const eased = 1 - Math.pow(1 - linear, 1.85);
      const nextValue = Math.min(100, Math.round(eased * 100));
      setProgress(nextValue);

      if (linear < 1 && !exitStartedRef.current) {
        rafId = requestAnimationFrame(tick);
      } else if (!exitStartedRef.current) {
        doneTimer = window.setTimeout(() => {
          triggerExit();
        }, 350);
      }
    };

    rafId = requestAnimationFrame(tick);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        triggerExit();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (doneTimer !== null) window.clearTimeout(doneTimer);
      if (finishTimerRef.current !== null) window.clearTimeout(finishTimerRef.current);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
      window.lenis?.start?.();
    };
  }, [hidden, triggerExit, onFinish]);

  // Interactive cursor spotlight & emblem parallax using direct DOM style (zero React re-renders)
  const handlePointerMove = (e) => {
    const el = containerRef.current;
    const emblem = emblemRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width) * 100;
    const yPct = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--mx', `${xPct.toFixed(2)}%`);
    el.style.setProperty('--my', `${yPct.toFixed(2)}%`);

    if (emblem) {
      const dx = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
      const dy = ((e.clientY - rect.top) / rect.height - 0.5) * 18;
      emblem.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`;
    }
  };

  const handlePointerLeave = () => {
    if (emblemRef.current) {
      emblemRef.current.style.transform = 'translate3d(0px, 0px, 0)';
    }
  };

  if (hidden) return null;

  const activeStage =
    STATUS_STAGES.find((stage) => progress <= stage.threshold) ||
    STATUS_STAGES[STATUS_STAGES.length - 1];

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={triggerExit}
      role="status"
      aria-live="polite"
      aria-label="Loading Pratik Jadhav portfolio"
      style={{
        '--mx': '50%',
        '--my': '50%',
        backgroundImage:
          'radial-gradient(480px circle at var(--mx) var(--my), rgba(212, 255, 50, 0.12), transparent 65%)',
      }}
      className={`fixed inset-0 z-[200] bg-[#0d0f0c] text-[#f4f3ea] flex flex-col justify-between p-6 sm:p-10 lg:p-14 select-none cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${exiting ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}
    >
      {/* Top Bar: Identity & Interactive Skip Trigger */}
      <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#8e9485]">
        <div className="flex items-center gap-2.5">

          <span className="text-white font-semibold">PRATIK JADHAV</span>
          <span className="hidden sm:inline text-[#5f6558]"> SOFTWARE DEVELOPER</span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            triggerExit();
          }}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#282e21] bg-[#141612] hover:border-[#d4ff32] hover:text-[#d4ff32] transition-colors cursor-pointer"
        >
          <span>Skip</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Center Interactive Emblem */}
      <div className="flex flex-col items-center justify-center my-auto text-center">
        <div
          ref={emblemRef}
          className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center mb-8 transition-transform duration-200 ease-out will-change-transform"
        >
          {/* Expanding pulse halo */}
          <div
            className="animate-halo-pulse absolute inset-3 rounded-full border border-[#d4ff32]/45 pointer-events-none"
            aria-hidden="true"
          />
          {/* Outer rotating dashed orbit */}
          <div
            className="animate-orbit-spin absolute inset-0 rounded-full border border-dashed border-[#d4ff32]/45 pointer-events-none"
            aria-hidden="true"
          >
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#d4ff32] shadow-[0_0_12px_#d4ff32]" />
          </div>
          {/* Inner subtle arc ring */}
          <div
            className="animate-orbit-spin-reverse absolute inset-4 rounded-full border border-t-[#d4ff32]/70 border-r-transparent border-b-[#d4ff32]/20 border-l-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Floating Portrait Icon */}
          <div className="animate-avatar-float w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-2 ring-[#d4ff32] shadow-[0_0_40px_rgba(212,255,50,0.28)] bg-[#0d0f0c]">
            <img
              src="/web-app-manifest-512x512.png"
              alt="Pratik Jadhav"
              className="w-full h-full object-cover scale-[1.22]"
            />
          </div>
        </div>

        <p className="font-serif italic text-xl sm:text-2xl text-[#f4f3ea] tracking-tight mb-2">
          Building scalable software with intent.
        </p>
        <p className="font-mono text-[11px] sm:text-xs text-[#9aa090] tracking-wider uppercase min-h-[1.25rem]">
          {activeStage.label}
        </p>
      </div>

      {/* Bottom Progress & Counter */}
      <div className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#71766a]">
            Move cursor to interact · Click anywhere to enter
          </span>
          <div className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-white tabular-nums leading-none">
            {String(progress).padStart(2, '0')}
            <span className="text-[#d4ff32] text-2xl sm:text-3xl font-mono ml-1">%</span>
          </div>
        </div>

        <div className="w-full h-[3px] bg-[#1d2119] rounded-full overflow-hidden">
          <div
            className="h-full w-full bg-[#d4ff32] shadow-[0_0_14px_#d4ff32] origin-left transition-transform duration-75 ease-out will-change-transform"
            style={{ transform: `scaleX(${progress / 100})` }}
          />
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
