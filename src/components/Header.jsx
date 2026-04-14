import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = ['About', 'Portfolio', 'Experience', 'Software', 'Contact'];

const Header = () => {
  const [active, setActive] = useState('About');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Detect scroll for glassmorphism intensity
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '0 5%',
          height: '72px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: scrolled
            ? 'rgba(13,13,13,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(197,160,89,0.08)' : 'none',
          transition: 'background 0.4s ease, border-color 0.4s ease',
        }}
      >
        {/* ── Logo ── */}
        <Link to="/" style={{ textDecoration: 'none', zIndex: 1100 }}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1rem, 3vw, 1.25rem)',
              fontWeight: 700,
              color: 'var(--accent-gold)',
              letterSpacing: '2px',
              userSelect: 'none',
            }}
          >
            MUHAMMED <span style={{ color: 'white' }}>RIYAS</span>
          </motion.div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="header-desktop-nav glass" style={{
          display: 'flex',
          gap: '4px',
          padding: '6px 16px',
          borderRadius: '50px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
          border: '1px solid rgba(197,160,89,0.12)',
        }}>
          {NAV_ITEMS.map((item) => (
            <motion.a
              key={item}
              href={`/#${item.toLowerCase()}`}
              onClick={() => setActive(item)}
              style={{
                textDecoration: 'none',
                color: active === item ? 'var(--accent-gold)' : 'var(--text-secondary)',
                fontSize: '0.8rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                padding: '9px 16px',
                borderRadius: '30px',
                position: 'relative',
                transition: 'color 0.3s ease',
                whiteSpace: 'nowrap',
              }}
            >
              {active === item && (
                <motion.div
                  layoutId="nav-bg"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(197,160,89,0.1)',
                    borderRadius: '30px',
                    zIndex: -1,
                  }}
                  transition={{ type: 'spring', bounce: 0.25, duration: 0.6 }}
                />
              )}
              {item}
            </motion.a>
          ))}
          <motion.a
            href="/Profile/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ backgroundColor: 'rgba(197,160,89,0.12)' }}
            style={{
              textDecoration: 'none',
              color: 'var(--accent-gold)',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              padding: '9px 18px',
              border: '1px solid rgba(197,160,89,0.35)',
              borderRadius: '30px',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
            }}
          >
            RESUME
          </motion.a>
        </nav>

        {/* ── Hamburger Button (mobile/tablet) ── */}
        <button
          className="header-hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: '1px solid rgba(197,160,89,0.3)',
            borderRadius: '10px',
            width: '44px',
            height: '44px',
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
            cursor: 'pointer',
            padding: '8px',
            zIndex: 1100,
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{
                rotate: menuOpen && i === 0 ? 45 : menuOpen && i === 2 ? -45 : 0,
                y: menuOpen && i === 0 ? 10 : menuOpen && i === 2 ? -10 : 0,
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                backgroundColor: 'var(--accent-gold)',
                borderRadius: '2px',
                transformOrigin: 'center',
              }}
            />
          ))}
        </button>
      </motion.header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.7)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                zIndex: 1050,
              }}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: 'min(85vw, 320px)',
                backgroundColor: 'rgba(13,13,13,0.98)',
                borderLeft: '1px solid rgba(197,160,89,0.15)',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                zIndex: 1100,
                display: 'flex',
                flexDirection: 'column',
                padding: '90px 40px 50px',
                gap: '8px',
              }}
            >
              {/* Decorative accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)',
              }} />

              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  onClick={() => { setActive(item); setMenuOpen(false); }}
                  style={{
                    textDecoration: 'none',
                    color: active === item ? 'var(--accent-gold)' : 'var(--text-primary)',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    fontFamily: 'var(--font-heading)',
                    padding: '16px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'color 0.2s',
                  }}
                >
                  {item}
                  {active === item && (
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)', display: 'inline-block' }} />
                  )}
                </motion.a>
              ))}

              <motion.a
                href="/Profile/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                style={{
                  marginTop: '30px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  color: 'var(--bg-color)',
                  backgroundColor: 'var(--accent-gold)',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  letterSpacing: '2px',
                  padding: '18px 30px',
                  borderRadius: '50px',
                }}
              >
                VIEW RESUME
              </motion.a>

              {/* Social links placeholder */}
              <div style={{ marginTop: 'auto', display: 'flex', gap: '20px', justifyContent: 'center' }}>
                {['Dubai, UAE', 'Available for Work'].map((tag) => (
                  <span key={tag} style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', letterSpacing: '1px' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 900px) {
          .header-desktop-nav { display: none !important; }
          .header-hamburger { display: flex !important; }
        }
        @media (min-width: 901px) {
          .header-hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Header;
