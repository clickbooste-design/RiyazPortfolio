import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import AntiGravityBackground from './AntiGravityBackground';

/* ─── Magnetic Button (desktop hover effect) ──────────────── */
const MagneticButton = ({ children, style, ...props }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 15, stiffness: 150 });
  const springY = useSpring(y, { damping: 15, stiffness: 150 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const dx = e.clientX - (left + width / 2);
    const dy = e.clientY - (top + height / 2);
    if (Math.abs(dx) < 120 && Math.abs(dy) < 120) {
      x.set(dx * 0.4);
      y.set(dy * 0.4);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ ...style, x: springX, y: springY }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/* ─── Floating Badge ──────────────────────────────────────── */
const FloatingBadge = ({ label, delay, style }) => (
  <motion.div
    animate={{ y: [0, -18, 0] }}
    transition={{ duration: 5 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    className="glass hero-badge"
    style={{
      position: 'absolute',
      padding: '10px 20px',
      fontSize: '0.8rem',
      fontWeight: 800,
      color: 'var(--accent-gold)',
      letterSpacing: '1px',
      zIndex: 3,
      borderRadius: '12px',
      whiteSpace: 'nowrap',
      ...style,
    }}
  >
    {label}
  </motion.div>
);

/* ─── Hero ────────────────────────────────────────────────── */
const Hero = () => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return;
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: (e.clientX / innerWidth - 0.5) * 30,
      y: (e.clientY / innerHeight - 0.5) * 30,
    });
  };

  const badges = [
    { label: 'UI/UX',  style: { top: '10%',  right: '-8%'  }, delay: 0   },
    { label: 'CAD',    style: { bottom: '12%', right: '-6%' }, delay: 1.2 },
    { label: '3D VIS', style: { top: '42%',  left: '-14%'  }, delay: 0.6 },
    { label: 'SEO',    style: { bottom: '25%',left: '-10%' }, delay: 1.8 },
  ];

  return (
    <>
      <section
        id="hero"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="hero-section"
      >
        <AntiGravityBackground />

        <div className="hero-grid">

          {/* ── LEFT: Text content ── */}
          <div className="hero-content">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 12, stiffness: 200 }}
              className="hero-badge-pill"
            >
              HELLO 👋
            </motion.div>

            <div style={{ overflow: 'hidden', marginBottom: '20px' }}>
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="hero-heading"
              >
                Creative Interior Design &{' '}
                <span style={{ color: 'var(--accent-gold)' }}>Technical CAD Draughting.</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="hero-subheadline"
            >
              Muhammed Riyas — Junior Interior Designer based in Al&nbsp;Quoz, Dubai
            </motion.p>

            <div className="hero-cta-row">
              <MagneticButton>
                <Link to="/projects" style={{ textDecoration: 'none' }}>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: 'var(--gold-glow)' }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-primary"
                  >
                    VIEW PORTFOLIO
                  </motion.button>
                </Link>
              </MagneticButton>

              <MagneticButton>
                <motion.button
                  whileHover={{ backgroundColor: 'rgba(197,160,89,0.06)', borderColor: 'rgba(197,160,89,0.5)' }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-outline"
                  onClick={() => { window.location.hash = '#contact'; }}
                >
                  HIRE ME
                </motion.button>
              </MagneticButton>
            </div>
          </div>

          {/* ── RIGHT: Hero Image ── */}
          <div className="hero-image-col">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                position: 'relative',
                x: mousePos.x,
                y: mousePos.y,
              }}
              className="hero-image-wrapper"
            >
              <div className="hero-image-frame">
                <img
                  src="/Profile/Heder image.jpeg"
                  alt="Muhammed Riyas – Interior Designer"
                  className="hero-img"
                />
                {/* Inner vignette */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  boxShadow: 'inset 0 0 80px rgba(0,0,0,0.35)',
                  borderRadius: 'inherit',
                  pointerEvents: 'none',
                }} />
                {/* Gold rim */}
                <div style={{
                  position: 'absolute',
                  inset: '-2px',
                  borderRadius: '34px',
                  border: '1px solid rgba(197,160,89,0.2)',
                  pointerEvents: 'none',
                }} />
              </div>

              {/* Floating tech badges — hidden on mobile */}
              {badges.map((b) => (
                <FloatingBadge key={b.label} {...b} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── Marquee bar ── */}
        <div className="hero-marquee-bar marquee-container no-print">
          <div className="marquee-content">
            {[...Array(3)].map((_, i) => (
              <div key={i} style={{ display: 'flex', gap: '40px', paddingRight: '40px' }}>
                {['Interior Design ✦', 'CAD Draughting ✦', 'SEO Optimization ✦', '3D Visualization ✦', 'App Design ✦'].map((t) => (
                  <span key={t} className="marquee-item">{t}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* ── Base Section ── */
        .hero-section {
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 5%;
          padding-top: 90px;
          padding-bottom: 90px;
          position: relative;
          overflow: hidden;
        }

        /* ── Grid ── */
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: 60px;
          width: 100%;
          z-index: 2;
          position: relative;
        }

        /* ── Content column ── */
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .hero-badge-pill {
          display: inline-flex;
          padding: 8px 22px;
          background-color: rgba(197,160,89,0.1);
          border-radius: 50px;
          border: 1px solid var(--accent-gold);
          margin-bottom: 28px;
          color: var(--accent-gold);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .hero-heading {
          font-size: clamp(2.4rem, 5.5vw, 5rem);
          line-height: 1.05;
          margin: 0;
          margin-bottom: 4px;
          color: var(--text-primary);
          letter-spacing: -1px;
          font-family: var(--font-heading);
        }

        .hero-subheadline {
          font-size: clamp(0.95rem, 2vw, 1.2rem);
          color: var(--text-secondary);
          font-family: var(--font-body);
          line-height: 1.7;
          margin-bottom: 44px;
          max-width: 560px;
        }

        .hero-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          align-items: center;
        }

        .btn-primary {
          padding: 17px 42px;
          background-color: var(--accent-gold);
          border: none;
          color: var(--bg-color);
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
          border-radius: 6px;
          font-family: var(--font-body);
          transition: transform 0.2s;
        }

        .btn-outline {
          padding: 17px 42px;
          background-color: transparent;
          border: 1px solid rgba(255,255,255,0.22);
          color: white;
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 2px;
          cursor: pointer;
          border-radius: 6px;
          font-family: var(--font-body);
          transition: all 0.3s ease;
        }

        /* ── Image column ── */
        .hero-image-col {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .hero-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 460px;
        }

        .hero-image-frame {
          width: 100%;
          aspect-ratio: 0.82;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.65), 0 0 0 1px var(--glass-border);
          position: relative;
          z-index: 2;
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        /* ── Marquee bar ── */
        .hero-marquee-bar {
          position: relative;
          margin-top: 60px;
          border-top: 1px solid var(--glass-border);
          border-bottom: 1px solid var(--glass-border);
          padding: 18px 0;
          background-color: rgba(255,255,255,0.015);
          backdrop-filter: blur(5px);
          z-index: 2;
        }

        .marquee-item {
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 2px;
          color: var(--text-secondary);
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* ── Floating badges (hide on small screens) ── */
        .hero-badge {
          display: flex;
        }

        /* ════════════════════════════════════
           TABLET  (≤ 1024px)
        ════════════════════════════════════ */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .hero-heading {
            font-size: clamp(2rem, 5vw, 3.5rem);
          }
          .hero-image-wrapper {
            max-width: 380px;
          }
        }

        /* ════════════════════════════════════
           TABLET PORTRAIT  (≤ 768px)
        ════════════════════════════════════ */
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 100px;
            padding-bottom: 60px;
            justify-content: flex-start;
          }

          .hero-grid {
            grid-template-columns: 1fr;
            gap: 44px;
            /* image first on mobile for visual impact */
          }

          /* Swap order: image top, text below */
          .hero-image-col { order: -1; }
          .hero-content   { order:  1; }

          .hero-content {
            align-items: center;
            text-align: center;
          }

          .hero-subheadline {
            text-align: center;
          }

          .hero-image-wrapper {
            max-width: min(320px, 80vw);
          }

          .hero-image-frame {
            aspect-ratio: 0.9;
            border-radius: 24px;
          }

          /* Hide floating badges on mobile */
          .hero-badge { display: none; }

          .hero-marquee-bar {
            margin-top: 40px;
          }

          .marquee-item {
            font-size: 0.78rem;
          }
        }

        /* ════════════════════════════════════
           MOBILE  (≤ 480px)
        ════════════════════════════════════ */
        @media (max-width: 480px) {
          .hero-section {
            padding: 90px 20px 50px;
          }

          .hero-badge-pill {
            font-size: 0.78rem;
            padding: 7px 18px;
            margin-bottom: 20px;
          }

          .hero-heading {
            font-size: 2rem;
            letter-spacing: -0.5px;
          }

          .hero-subheadline {
            font-size: 0.92rem;
            margin-bottom: 32px;
          }

          .btn-primary, .btn-outline {
            padding: 15px 32px;
            font-size: 0.82rem;
            width: 100%;
            text-align: center;
          }

          .hero-cta-row {
            flex-direction: column;
            width: 100%;
          }

          .hero-image-wrapper {
            max-width: min(280px, 75vw);
          }
        }

        /* ════════════════════════════════════
           LARGE DESKTOP  (≥ 1400px)
        ════════════════════════════════════ */
        @media (min-width: 1400px) {
          .hero-grid {
            max-width: 1380px;
            margin: 0 auto;
          }
          .hero-image-wrapper {
            max-width: 520px;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
