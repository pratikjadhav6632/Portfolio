import React, { useState, useEffect, useCallback } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SelectedWork from './components/SelectedWork';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import BlogTeaser from './components/BlogTeaser';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';

const HOME_SECTION_HASHES = ['#home', '#about', '#work', '#skills', '#proof', '#writing', '#contact'];

function parseRouteFromLocation() {
  if (typeof window === 'undefined') {
    return { page: 'home', slug: null };
  }

  const { pathname, hash } = window.location;

  // Upgrade legacy #/blog or #/blog/<slug> links to clean History API URLs
  if (hash.startsWith('#/blog')) {
    const slug = hash.replace(/^#\/blog\/?/, '').split('?')[0] || null;
    const cleanUrl = slug ? `/blog/${slug}` : '/blog';
    window.history.replaceState(null, '', cleanUrl);
    return { page: 'blog', slug };
  }

  const postMatch = pathname.match(/^\/blog\/([^/?#]+)\/?$/);
  if (postMatch) {
    return { page: 'blog', slug: decodeURIComponent(postMatch[1]) };
  }

  if (/^\/blog\/?$/.test(pathname)) {
    return { page: 'blog', slug: null };
  }

  return { page: 'home', slug: null };
}

function App() {
  const [route, setRoute] = useState(parseRouteFromLocation);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    let lenis = null;
    let rafId = null;

    if (!prefersReducedMotion) {
      lenis = new Lenis({
        lerp: 0.14,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.3,
        infinite: false,
      });

      window.lenis = lenis;

      const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    }

    const handleRouteSync = () => {
      setRoute(parseRouteFromLocation());
    };

    const handleHashChange = () => {
      if (window.location.hash.startsWith('#/blog')) {
        handleRouteSync();
      } else if (HOME_SECTION_HASHES.includes(window.location.hash)) {
        setRoute({ page: 'home', slug: null });
      }
    };

    window.addEventListener('popstate', handleRouteSync);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('popstate', handleRouteSync);
      window.removeEventListener('hashchange', handleHashChange);
      if (lenis) {
        lenis.destroy();
      }
      window.lenis = null;
    };
  }, []);

  const handleNavigate = useCallback((page, targetSection = null, postSlug = null) => {
    if (page === 'blog') {
      const targetUrl = postSlug ? `/blog/${postSlug}` : '/blog';
      if (window.location.pathname !== targetUrl) {
        window.history.pushState(null, '', targetUrl);
      }
      setRoute({ page: 'blog', slug: postSlug });
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
      return;
    }

    const targetUrl = targetSection ? `/${targetSection}` : '/';
    if (window.location.pathname !== '/' || window.location.hash !== (targetSection || '')) {
      window.history.pushState(null, '', targetUrl);
    }
    setRoute({ page: 'home', slug: null });

    if (targetSection) {
      setTimeout(() => {
        const element = document.querySelector(targetSection);
        if (element) {
          if (window.lenis) {
            window.lenis.scrollTo(element, { offset: -75, duration: 1.4 });
          } else {
            const y = element.getBoundingClientRect().top + window.pageYOffset - 75;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }
      }, 60);
    } else if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, []);

  const handleSelectPost = useCallback((slug) => {
    const targetUrl = slug ? `/blog/${slug}` : '/blog';
    if (window.location.pathname !== targetUrl) {
      window.history.pushState(null, '', targetUrl);
    }
    setRoute({ page: 'blog', slug: slug || null });
  }, []);

  return (
    <div className="App relative min-h-screen bg-[#0d0f0c] text-[#f4f3ea] selection:bg-[#d4ff32] selection:text-black">
      {/* Fixed Nav Header (Constant on all pages) */}
      <Header currentPage={route.page} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      {route.page === 'home' ? (
        <main>
          <Hero />
          <About />
          <SelectedWork />
          <Skills />
          <Achievements />
          <BlogTeaser
            onOpenBlog={() => handleNavigate('blog')}
            onOpenPost={(slug) => handleNavigate('blog', null, slug)}
          />
          <Contact />
        </main>
      ) : (
        <main>
          <Blog
            activeSlug={route.slug}
            onSelectPost={handleSelectPost}
            onBackToHome={() => handleNavigate('home')}
          />
        </main>
      )}

      {/* Global Footer (Constant on all pages) */}
      <Footer onOpenBlog={() => handleNavigate('blog')} />
    </div>
  );
}

export default App;
