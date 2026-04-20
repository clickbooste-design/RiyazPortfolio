import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectSingle from './pages/ProjectSingle';
import ProjectDetails from './pages/ProjectDetails';
import CustomCursor from './components/CustomCursor';

function App() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Scroll to top on route change
    lenis.scrollTo(0, { immediate: true });

    return () => {
      lenis.destroy();
    };
  }, [location]);

  return (
    <div className="portfolio-app">
      {/* Premium Cinematic Noise Overlay */}
      <div className="filmic-noise"></div>
      
      <CustomCursor />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectDetails />} />
          <Route path="/project/:id" element={<ProjectSingle />} />
        </Routes>
      </main>
      <Footer />

      <style>{`
        .filmic-noise {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          width: 100vw; height: 100vh;
          pointer-events: none;
          z-index: 9998;
          opacity: 0.05;
          will-change: opacity;
          background: url('data:image/svg+xml;utf8,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E');
        }
      `}</style>
    </div>
  );
}

export default App;
