import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const software = [
  { key: 'SketchUp',  name: 'SketchUp',   desc: 'Primary 3D Modeling platform for rapid prototyping and detailed architectural structuring.' },
  { key: 'Lumion',    name: 'Lumion',     desc: 'Real-time rendering engine used to produce atmospheric and lively architectural scenes.' },
  { key: 'D5Render',  name: 'D5 Render',  desc: 'Ray-tracing software for high-fidelity photorealistic output and material accuracy.' },
  { key: 'AutoCAD',   name: 'AutoCAD',    desc: 'Industry standard for technical 2D drafting, floor plans, and schematic elevations.' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const SoftwareArsenal = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <>
      <section id="software" ref={ref} className="sa-section">
        {/* Heading */}
        <motion.div
          className="sa-heading-block"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="sa-eyebrow">Tools</span>
          <h2 className="sa-heading">Software Arsenal</h2>
          <div className="sa-rule" />
        </motion.div>

        {/* Stacked Vertical Layout */}
        <motion.div
          className="sa-stack"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {software.map(({ key, name, desc }) => (
            <motion.div
              key={key}
              className="sa-row-item"
              variants={itemVariants}
              whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.03)' }}
            >
              <div className="sa-icon-wrap">
                <CodeIcon />
              </div>
              <div className="sa-text-wrap">
                <h3 className="sa-name">{name}</h3>
                <p className="sa-desc">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <style>{`
        .sa-section {
          background: #000;
          padding: 80px 5%;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
        }

        .sa-heading-block {
          text-align: center;
          margin-bottom: 60px;
        }

        .sa-eyebrow {
          display: block;
          font-family: 'Lato', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #C4A574;
          margin-bottom: 14px;
        }

        .sa-heading {
          font-family: 'Arvo', serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #fff;
          margin: 0;
          line-height: 1.1;
        }

        .sa-rule {
          width: 50px;
          height: 2px;
          background: #C4A574;
          margin: 20px auto 0;
        }

        /* Stacked Row Items */
        .sa-stack {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
          max-width: 800px;
        }

        .sa-row-item {
          display: flex;
          align-items: center;
          gap: 24px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 24px 30px;
          transition: all 0.3s ease;
        }

        .sa-icon-wrap {
          width: 60px;
          height: 60px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(196,165,116,0.08);
          border-radius: 50%;
        }

        .sa-text-wrap {
          flex: 1;
        }

        .sa-name {
          font-family: 'Arvo', serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 8px 0;
        }

        .sa-desc {
          font-family: 'Lato', sans-serif;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.5;
          margin: 0;
        }

        /* Mobile */
        @media (max-width: 767px) {
          .sa-section { padding: 60px 20px; }
          .sa-row-item {
            flex-direction: column;
            text-align: center;
            gap: 16px;
            padding: 24px 20px;
          }
        }
      `}</style>
    </>
  );
};

export default SoftwareArsenal;
