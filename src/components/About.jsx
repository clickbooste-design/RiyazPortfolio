import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <>
      <section id="about" ref={ref} className="ab-section">
        <motion.div
          className="ab-content"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="ab-heading">Transforming Concepts into Reality.</h2>

          <p className="ab-desc">
            A self-motivated junior interior designer with experience in schematic design and design development. Expert in transforming architectural concepts into realistic 3D renderings and technical AutoCAD drafting. My approach balances technical precision with high-end aesthetic vision.
          </p>

          <div className="ab-mastery-wrap">
            <span className="ab-mastery-title">Technical Mastery</span>
            <a href="/Profile/resume.html" target="_blank" rel="noopener noreferrer" className="ab-cv-btn">
              DOWNLOAD CV
            </a>
          </div>
        </motion.div>
      </section>

      {/* Marquee Section */}
      <div className="ab-marquee-container">
        <div className="ab-marquee-content">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="ab-marquee-text">
              Interior Design ✦ CAD Draughting ✦ 3D Visualization ✦&nbsp;
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .ab-section {
          background: #0d0d0d;
          padding: 80px 5% 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
        }

        .ab-content {
          max-width: 900px;
          width: 100%;
          text-align: center;
          padding: 20px 0;
        }

        .ab-heading {
          font-family: 'Arvo', serif;
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #C4A574;
          margin: 0 0 24px 0;
          line-height: 1.1;
        }

        .ab-desc {
          font-family: 'Lato', sans-serif;
          font-size: 1.05rem;
          color: rgba(255,255,255,0.7);
          line-height: 1.8;
          margin: 0 auto;
          max-width: 800px;
        }

        .ab-mastery-wrap {
          margin-top: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .ab-mastery-title {
          font-family: 'Arvo', serif;
          font-size: 1.2rem;
          color: #fff;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .ab-cv-btn {
          font-family: 'Lato', sans-serif;
          font-size: 0.8rem;
          font-weight: 800;
          color: #111;
          background: #C4A574;
          padding: 12px 24px;
          border-radius: 4px;
          text-decoration: none;
          letter-spacing: 1.5px;
          transition: background 0.3s ease;
        }

        .ab-cv-btn:hover {
          background: #e6c898;
        }

        /* Marquee */
        .ab-marquee-container {
          background: #111;
          padding: 24px 0;
          overflow: hidden;
          width: 100%;
          border-top: 1px solid rgba(196,165,116,0.2);
          border-bottom: 1px solid rgba(196,165,116,0.2);
        }

        .ab-marquee-content {
          display: flex;
          width: max-content;
          animation: slide 30s linear infinite;
        }

        .ab-marquee-text {
          font-family: 'Arvo', serif;
          font-size: 1.5rem;
          color: rgba(255,255,255,0.9);
          white-space: nowrap;
          font-weight: 500;
        }

        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }

        /* Mobile */
        @media (max-width: 767px) {
          .ab-section {
            padding: 60px 20px;
          }
          .ab-desc {
            font-size: 0.95rem;
            line-height: 1.7;
          }
        }
      `}</style>
    </>
  );
};

export default About;
