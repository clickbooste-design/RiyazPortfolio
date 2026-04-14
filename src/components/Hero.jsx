import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <section id="hero" className="hr-section">
        <div className="hr-container">
          {/* Text Content */}
          <div className="hr-content">
            <motion.div
              className="hr-eyebrow-wrap"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="hr-eyebrow">PORTFOLIO 2026</span>
              <span className="hr-line"></span>
            </motion.div>

            <motion.h1
              className="hr-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Muhammed Riyas<br/>
              <span style={{ fontSize: '0.45em', color: 'var(--text-secondary)', display: 'block', marginTop: '10px' }}>Junior Interior Designer based in Al Quoz, Dubai</span>
            </motion.h1>

            <motion.h2
              className="hr-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              HELLO 👋 Creative Interior Design & Technical CAD Draughting.
            </motion.h2>

            <motion.div
              className="hr-cta-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <a href="#portfolio" className="hr-btn hr-btn-outline">VIEW PORTFOLIO</a>
              <a href="#contact" className="hr-btn hr-btn-link">HIRE ME →</a>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            className="hr-image-wrap"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/Profile/PNG.png"
              alt="Muhammed Riyas Portrait"
              className="hr-image"
            />
          </motion.div>
        </div>
      </section>

      <style>{`
        .hr-section {
          background: #0d0d0d;
          padding: 120px 5% 60px;
          display: flex;
          justify-content: center;
          box-sizing: border-box;
          min-height: 90vh; /* changed from 100vh to fit nicely */
          overflow: hidden;
        }

        .hr-container {
          max-width: 1200px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hr-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        /* Eyebrow */
        .hr-eyebrow-wrap {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 24px;
          width: 100%;
        }
        .hr-line {
          height: 1px;
          flex: 1;
          background: rgba(196,165,116,0.3);
          max-width: 60px;
        }
        .hr-eyebrow {
          font-family: 'Lato', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 4px;
          color: #C4A574;
          text-transform: uppercase;
        }

        /* Headings */
        .hr-heading {
          font-family: 'Arvo', serif;
          font-size: clamp(3.5rem, 6vw, 5rem);
          font-weight: 700;
          color: #fff;
          margin: 0 0 8px 0;
          line-height: 1.1;
        }
        .hr-subtitle {
          font-family: 'Arvo', serif;
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 400;
          color: #C4A574;
          margin: 0 0 24px 0;
          font-style: italic;
        }
        .hr-desc {
          font-family: 'Lato', sans-serif;
          font-size: 1rem;
          color: rgba(255,255,255,0.7);
          line-height: 1.7;
          margin: 0 0 40px 0;
        }

        /* Buttons */
        .hr-cta-row {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        .hr-btn {
          font-family: 'Lato', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 1px;
          padding: 14px 32px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .hr-btn-outline {
          border: 1px solid #C4A574;
          color: #C4A574;
          border-radius: 4px;
        }
        .hr-btn-outline:hover {
          background: rgba(196,165,116,0.1);
        }
        .hr-btn-link {
          color: #fff;
          padding: 14px 10px;
        }
        .hr-btn-link:hover {
          color: #C4A574;
        }

        /* Image */
        .hr-image-wrap {
          width: 100%;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          /* Match the portrait aspect ratio shown in desktop image */
          aspect-ratio: 3/4; 
          border: 1px solid rgba(255,255,255,0.05);
        }
        .hr-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Mobile Adjustments */
        @media (max-width: 900px) {
          .hr-container {
            grid-template-columns: 1fr;
            gap: 40px;
            /* Reverse order so content is top, image is bottom to match mobile screenshot */
          }
          
          .hr-content {
            align-items: center;
            text-align: center;
          }
          .hr-eyebrow-wrap {
            justify-content: center;
          }
          .hr-line { display: none; } /* clean up eyebrow on mobile */
          
          /* The mobile screenshot actually shows text center-aligned! */
          .hr-image-wrap {
            aspect-ratio: 4/5;
            max-width: 500px;
            margin: 0 auto;
          }
        }
        
        @media (max-width: 480px) {
           .hr-section { padding-top: 100px; }
           .hr-cta-row {
             flex-direction: column;
             width: 100%;
           }
           .hr-btn-outline { width: 100%; text-align: center; }
        }
      `}</style>
    </>
  );
};

export default Hero;
