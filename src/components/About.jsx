import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const MagneticButton = ({ children, style, ...props }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    if (Math.abs(distanceX) < 100 && Math.abs(distanceY) < 100) {
      x.set(distanceX * 0.4);
      y.set(distanceY * 0.4);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        x: springX,
        y: springY,
        display: 'inline-block'
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" style={{ padding: '100px 5%' }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'minmax(300px, 0.8fr) 1.2fr', 
        gap: '80px', 
        alignItems: 'center' 
      }}>
        {/* Left: Image (per Master Prompt Step 2) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{ position: 'relative' }}
        >
          <div style={{
            position: 'absolute',
            inset: '-20px',
            border: '2px solid var(--accent-gold)',
            borderRadius: '20px',
            zIndex: 0,
            opacity: 0.2
          }}></div>
          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            aspectRatio: '0.8',
            boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
            position: 'relative',
            zIndex: 1
          }}>
            <img 
              src="/Profile/unnamed.jpg.jpeg" 
              alt="About Muhammed Riyas" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '2px' }}>PROFILE & EXPERTISE</span>
          <h2 style={{ fontSize: '3.5rem', marginTop: '10px', marginBottom: '30px', fontFamily: 'Playfair Display, serif' }}>
            Transforming Concepts into <span style={{ color: 'var(--accent-gold)' }}>Reality.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '35px' }}>
            A self-motivated junior interior designer with experience in schematic design and design development. Expert in transforming architectural concepts into realistic 3D renderings and technical AutoCAD drafting. My approach balances technical precision with high-end aesthetic vision.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '50px' }}>
            <div>
              <h4 style={{ color: 'var(--accent-gold)', marginBottom: '12px', fontSize: '1.1rem' }}>Creative Vision</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>Bringing photorealistic depth to every interior concept, focusing on lighting and material truth.</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--accent-gold)', marginBottom: '12px', fontSize: '1.1rem' }}>Technical Mastery</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>Specialized in CAD Draughting, creating precise elevations and structural plans for construction.</p>
            </div>
          </div>

          <MagneticButton>
            <a href="/Profile/resume.html" target="_blank" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: 'var(--gold-glow)' }}
                style={{
                  padding: '20px 50px',
                  backgroundColor: 'var(--accent-gold)',
                  border: 'none',
                  color: 'var(--bg-color)',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  letterSpacing: '2px',
                  cursor: 'pointer',
                  borderRadius: '50px'
                }}
              >
                DOWNLOAD CV
              </motion.button>
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          #about div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          #about div[style*="aspectRatio"] {
            max-width: 500px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
