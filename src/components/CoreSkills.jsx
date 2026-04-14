import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  'Architectural 3D Visualization',
  'Exterior & Interior Rendering',
  'Lighting and Material Setup',
  '3D Modeling',
  'Presentation Visualization',
  'Technical Drawing & CAD Drafting',
  'Team Coordination and Project Support',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const pillVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.94 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const CoreSkills = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <>
      <section id="skills" ref={ref} className="cs-section">
        {/* ── Heading ── */}
        <motion.div
          className="cs-heading-block"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="cs-eyebrow">What I Bring</span>
          <h2 className="cs-heading">Core Skills</h2>
          <div className="cs-rule" />
        </motion.div>

        {/* ── Pill grid ── */}
        <motion.div
          className="cs-pills"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skills.map((skill) => (
            <motion.button
              key={skill}
              className="cs-pill"
              variants={pillVariants}
              whileHover={{ scale: 1.06, borderColor: '#C4A574', color: '#C4A574' }}
              whileTap={{ scale: 0.97 }}
            >
              {skill}
            </motion.button>
          ))}
        </motion.div>
      </section>

      <style>{`
        /* ── Section ── */
        .cs-section {
          background: #000;
          padding: 110px 5% 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 100%;
          box-sizing: border-box;
        }

        /* ── Heading block ── */
        .cs-heading-block {
          text-align: center;
          margin-bottom: 60px;
        }

        .cs-eyebrow {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #C4A574;
          margin-bottom: 14px;
          font-family: 'Lato', sans-serif;
        }

        .cs-heading {
          font-family: 'Playfair Display', 'Georgia', serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #C4A574;
          margin: 0;
          line-height: 1.1;
          letter-spacing: -0.01em;
        }

        .cs-rule {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #C4A574, transparent);
          margin: 22px auto 0;
          border-radius: 2px;
        }

        /* ── Pills container ── */
        .cs-pills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
          max-width: 860px;
          width: 100%;
        }

        /* ── Individual pill ── */
        .cs-pill {
          background: #111;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50px;
          padding: 14px 28px;
          font-family: 'Lato', sans-serif;
          font-size: 0.92rem;
          font-weight: 400;
          letter-spacing: 0.3px;
          cursor: pointer;
          white-space: nowrap;
          transition: border-color 0.25s ease, color 0.25s ease, background 0.25s ease;
          min-height: 48px;
          line-height: 1;
        }

        .cs-pill:hover {
          background: rgba(196, 165, 116, 0.06);
        }

        /* ── TABLET (768–1023px) ── */
        @media (max-width: 1023px) and (min-width: 768px) {
          .cs-section {
            padding: 80px 5% 70px;
          }
          .cs-heading {
            font-size: clamp(2rem, 5vw, 2.8rem);
          }
          .cs-pills {
            gap: 12px;
            max-width: 680px;
          }
          .cs-pill {
            padding: 13px 24px;
            font-size: 0.88rem;
          }
        }

        /* ── MOBILE (< 768px) ── */
        @media (max-width: 767px) {
          .cs-section {
            padding: 70px 20px 60px;
          }
          .cs-heading {
            font-size: clamp(1.8rem, 7vw, 2.2rem);
          }
          .cs-pills {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
            max-width: 420px;
          }
          .cs-pill {
            width: 100%;
            text-align: center;
            white-space: normal;
            padding: 15px 20px;
            font-size: 0.9rem;
            min-height: 52px;
          }
        }

        /* ── SMALL MOBILE (< 480px) ── */
        @media (max-width: 479px) {
          .cs-section {
            padding: 60px 16px 50px;
          }
          .cs-heading-block {
            margin-bottom: 44px;
          }
        }
      `}</style>
    </>
  );
};

export default CoreSkills;
