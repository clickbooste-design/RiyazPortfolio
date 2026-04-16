import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation Variants
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <section className="hr-section">
      <div className="hr-container">

        {/* TEXT CONTENT */}
        <div className="hr-content">
          <motion.span
            className="hr-eyebrow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            PORTFOLIO 2026 — DUBAI
          </motion.span>

          <motion.h1 className="hr-heading" {...fadeUp} transition={{ delay: 0.3 }}>
            Muhammed <span className="gold-text">Riyas</span>
          </motion.h1>

          <motion.h2 className="hr-subtitle" {...fadeUp} transition={{ delay: 0.4 }}>
            Interior Design <span className="ampersand">&</span> CAD Draftsman
          </motion.h2>

          <motion.p className="hr-desc" {...fadeUp} transition={{ delay: 0.5 }}>
            Transforming concepts into technical perfection. Specializing in high-end
            architectural drafting and photorealistic 3D visualization.
          </motion.p>

          <motion.div className="hr-btns" {...fadeUp} transition={{ delay: 0.6 }}>
            <a href="#portfolio" className="btn-primary">VIEW WORKS</a>
            <a href="#contact" className="btn-link">HIRE ME →</a>
          </motion.div>
        </div>

        {/* ANIMATED IMAGE */}
        <motion.div
          className="hr-image-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Floating Motion Wrapper */}
          <motion.div
            className="hr-image-glow"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 1, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img src="/Profile/PNG.png" alt="Riyas" className="hr-img" />
            <div className="glow-effect"></div>
          </motion.div>
        </motion.div>

      </div>

      <style jsx>{`
        .hr-section {
          background: #080808;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 80px 5%;
          overflow: hidden;
          position: relative;
        }

        .hr-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: center;
          z-index: 10;
        }

        .hr-eyebrow {
          color: #C4A574;
          letter-spacing: 5px;
          font-size: 0.75rem;
          font-weight: 700;
          margin-bottom: 20px;
          display: block;
        }

        .hr-heading {
          font-family: 'Arvo', serif;
          font-size: clamp(3rem, 8vw, 5rem);
          color: #fff;
          line-height: 1;
          margin: 0 0 15px;
        }

        .gold-text { color: #C4A574; }

        .hr-subtitle {
          font-size: clamp(1.2rem, 3vw, 1.8rem);
          color: #e5e5e5;
          font-weight: 300;
          margin-bottom: 25px;
        }

        .hr-desc {
          color: rgba(255,255,255,0.6);
          max-width: 500px;
          line-height: 1.8;
          margin-bottom: 40px;
        }

        .hr-btns { display: flex; gap: 25px; align-items: center; }

        .btn-primary {
          background: #C4A574;
          color: #000;
          padding: 16px 35px;
          border-radius: 4px;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: 1px;
          transition: 0.3s;
        }

        .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(196,165,116,0.3); }

        .btn-link { color: #fff; text-decoration: none; font-weight: 600; }

        /* IMAGE STYLING */
        .hr-image-container { position: relative; }

        .hr-image-glow {
          position: relative;
          width: 100%;
          border-radius: 20px;
        }

        .hr-img {
          width: 100%;
          height: auto;
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 20px 50px rgba(0,0,0,0.8));
        }

        .glow-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 80%;
          background: radial-gradient(circle, rgba(196,165,116,0.15) 0%, transparent 70%);
          z-index: 1;
        }

        @media (max-width: 968px) {
          .hr-container { grid-template-columns: 1fr; text-align: center; }
          .hr-content { align-items: center; order: 2; }
          .hr-image-container { order: 1; max-width: 400px; margin: 0 auto; }
          .hr-btns { justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default Hero;