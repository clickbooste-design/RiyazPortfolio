import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

/* ✅ CLEAN + COMPLETE SOFTWARE LIST */
const software = [
  { key: 'AutoCAD', name: 'AutoCAD', desc: 'Industry standard for technical 2D drafting and detailed drawings.' },
  { key: 'SketchUp', name: 'SketchUp', desc: 'Fast and flexible 3D modeling for architecture and interiors.' },
  { key: 'Enscape', name: 'Enscape', desc: 'Real-time rendering and walkthrough plugin for instant visualization.' },
  { key: 'Lumion', name: 'Lumion', desc: 'High-speed rendering software for cinematic architectural visuals.' },
  // { key: '3dsMax', name: '3ds Max', desc: 'Advanced 3D modeling and visualization tool for complex scenes.' },
  { key: 'Vray', name: 'V-Ray', desc: 'Photorealistic rendering engine for lighting, materials, and realism.' },
  { key: 'D5Render', name: 'D5 Render', desc: 'Modern real-time ray tracing renderer for high-quality output.' },
  { key: 'Photoshop', name: 'Photoshop', desc: 'Post-production tool for editing, enhancing, and final presentation.' },
  { key: 'Koohome', name: 'Koohome', desc: 'High-speed rendering software for cinematic architectural visuals.' },
  { key: 'MSOffice', name: 'MS Office', desc: 'Used for documentation, reports, and presentations.' }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
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
          transition={{ duration: 0.6 }}
        >
          <span className="sa-eyebrow">Tools</span>
          <h2 className="sa-heading">Software Arsenal</h2>
          <div className="sa-rule" />
        </motion.div>

        {/* List */}
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
              whileHover={{
                x: 8,
                backgroundColor: 'rgba(255,255,255,0.03)'
              }}
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
        }

        .sa-heading-block {
          text-align: center;
          margin-bottom: 50px;
        }

        .sa-eyebrow {
          font-size: 0.75rem;
          letter-spacing: 3px;
          color: #C4A574;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .sa-heading {
          font-size: clamp(2rem, 5vw, 3rem);
          color: #fff;
          margin: 0;
        }

        .sa-rule {
          width: 50px;
          height: 2px;
          background: #C4A574;
          margin: 15px auto 0;
        }

        .sa-stack {
          width: 100%;
          max-width: 800px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .sa-row-item {
          display: flex;
          align-items: center;
          gap: 20px;
          border: 1px solid rgba(255,255,255,0.08);
          padding: 20px 24px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .sa-icon-wrap {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(196,165,116,0.1);
          border-radius: 50%;
        }

        .sa-name {
          color: #fff;
          font-size: 1.1rem;
          margin: 0 0 5px;
        }

        .sa-desc {
          color: rgba(255,255,255,0.6);
          font-size: 0.9rem;
          margin: 0;
        }

        @media (max-width: 767px) {
          .sa-row-item {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default SoftwareArsenal;