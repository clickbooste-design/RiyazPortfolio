import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/* ── SVG Icon components — white, minimal, 48×48 viewBox ── */
const IconSketchUp = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="14" width="22" height="22" rx="2" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M8 14 L24 6 L38 14 L22 22 Z" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round"/>
    <path d="M30 14 L30 30" stroke="white" strokeWidth="2"/>
    <path d="M38 14 L38 30 L30 38 L8 38" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round"/>
  </svg>
);

const IconLumion = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 6 L38 38 L10 38 Z" stroke="white" strokeWidth="2" fill="none" strokeLinejoin="round"/>
    <path d="M16 30 Q24 18 32 30" stroke="white" strokeWidth="1.5" fill="none"/>
    <circle cx="24" cy="13" r="2" fill="white"/>
  </svg>
);

const IconD5Render = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="36" height="24" rx="3" stroke="white" strokeWidth="2" fill="none"/>
    <path d="M16 38 L32 38" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 34 L24 38" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="22" r="6" stroke="white" strokeWidth="1.5" fill="none"/>
    <path d="M21 22 L23 24 L27 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconAutoCAD = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="16" stroke="white" strokeWidth="2" fill="none"/>
    <circle cx="24" cy="24" r="3" fill="white"/>
    <path d="M24 8 L24 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M38 24 L34 24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 40 L24 34" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 24 L14 24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 24 L34 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const software = [
  { name: 'SketchUp',  Icon: IconSketchUp,  desc: '3D Modeling'     },
  { name: 'Lumion',    Icon: IconLumion,    desc: 'Real-time Render' },
  { name: 'D5 Render', Icon: IconD5Render,  desc: 'Visualization'   },
  { name: 'AutoCAD',   Icon: IconAutoCAD,   desc: 'CAD Drafting'    },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.92 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const SoftwareArsenal = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <>
      <section id="software" ref={ref} className="sa-section">
        {/* ── Heading ── */}
        <motion.div
          className="sa-heading-block"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="sa-eyebrow">Tools of the Trade</span>
          <h2 className="sa-heading">Software Arsenal</h2>
          <div className="sa-rule" />
        </motion.div>

        {/* ── Cards grid ── */}
        <motion.div
          className="sa-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {software.map(({ name, Icon, desc }) => (
            <motion.div
              key={name}
              className="sa-card"
              variants={cardVariants}
              whileHover={{
                y: -10,
                borderColor: 'rgba(196, 165, 116, 0.55)',
                boxShadow: '0 20px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(196,165,116,0.2)',
              }}
              transition={{ duration: 0.25 }}
            >
              <div className="sa-icon-wrap">
                <Icon />
              </div>
              <p className="sa-name">{name}</p>
              <p className="sa-desc">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <style>{`
        /* ── Section ── */
        .sa-section {
          background: #000;
          padding: 0 5% 120px;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 100%;
          box-sizing: border-box;
        }

        /* ── Heading block ── */
        .sa-heading-block {
          text-align: center;
          margin-bottom: 64px;
        }

        .sa-eyebrow {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #C4A574;
          margin-bottom: 14px;
          font-family: 'Lato', sans-serif;
        }

        .sa-heading {
          font-family: 'Playfair Display', 'Georgia', serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #C4A574;
          margin: 0;
          line-height: 1.1;
          letter-spacing: -0.01em;
        }

        .sa-rule {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #C4A574, transparent);
          margin: 22px auto 0;
          border-radius: 2px;
        }

        /* ── Grid ── */
        .sa-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          width: 100%;
          max-width: 860px;
        }

        /* ── Card ── */
        .sa-card {
          background: #111;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 40px 20px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          cursor: default;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .sa-icon-wrap {
          width: 72px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .sa-name {
          font-family: 'Lato', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
          letter-spacing: 0.3px;
          text-align: center;
        }

        .sa-desc {
          font-family: 'Lato', sans-serif;
          font-size: 0.75rem;
          color: #9ca3af;
          margin: 0;
          letter-spacing: 0.5px;
          text-align: center;
        }

        /* ── TABLET (768–1023px) ── */
        @media (max-width: 1023px) and (min-width: 768px) {
          .sa-section {
            padding-bottom: 90px;
          }
          .sa-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 560px;
            gap: 20px;
          }
          .sa-card {
            padding: 36px 18px 28px;
          }
          .sa-heading {
            font-size: clamp(2rem, 5vw, 2.8rem);
          }
        }

        /* ── MOBILE (< 768px) ── */
        @media (max-width: 767px) {
          .sa-section {
            padding: 0 20px 80px;
          }
          .sa-heading {
            font-size: clamp(1.8rem, 7vw, 2.2rem);
          }
          .sa-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 400px;
            gap: 14px;
          }
          .sa-card {
            padding: 28px 14px 22px;
            border-radius: 14px;
            gap: 10px;
          }
          .sa-icon-wrap {
            width: 58px;
            height: 58px;
          }
          .sa-name {
            font-size: 0.87rem;
          }
        }

        /* ── SMALL MOBILE (< 400px) ── */
        @media (max-width: 399px) {
          .sa-grid {
            grid-template-columns: 1fr;
            max-width: 280px;
            gap: 12px;
          }
          .sa-card {
            flex-direction: row;
            justify-content: flex-start;
            padding: 20px 24px;
            gap: 18px;
            border-radius: 12px;
          }
          .sa-icon-wrap {
            flex-shrink: 0;
            width: 52px;
            height: 52px;
          }
          .sa-name, .sa-desc {
            text-align: left;
          }
        }
      `}</style>
    </>
  );
};

export default SoftwareArsenal;
