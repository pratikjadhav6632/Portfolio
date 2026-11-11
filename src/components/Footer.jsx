import React from 'react';

const Footer = ({ onOpenBlog }) => {
  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        immediate: false,
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-[#201c18] bg-[#0c0a08] text-[#787268] py-7 relative z-10 select-none">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-[10.5px] sm:text-[11px] font-mono tracking-widest uppercase">
          {/* Left Copyright */}
          <div>© 2026 PRATIK JADHAV</div>

          {/* Center Quick Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-5 text-[#9c968b]">
            <a
              href="/blog"
              onClick={(e) => {
                if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && e.button === 0 && onOpenBlog) {
                  e.preventDefault();
                  onOpenBlog();
                }
              }}
              className="hover:text-[#d4ff32] transition-colors"
            >
              Blog
            </a>
            <a
              href="https://github.com/pratikjadhav6632"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4ff32] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jadhavpratik-/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4ff32] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://medium.com/@pratikjadhav6632"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#d4ff32] transition-colors"
            >
              Medium
            </a>
            <a
              href="mailto:pratikjadhav6632@gmail.com"
              className="hover:text-[#d4ff32] transition-colors"
            >
              Email
            </a>
          </nav>

          {/* Right Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="text-[#8e877a] hover:text-[#d4ff32] transition-colors cursor-pointer flex items-center gap-1 font-bold"
          >
            <span>BACK TO TOP</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
