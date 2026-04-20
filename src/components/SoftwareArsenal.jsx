import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// Importing icons from lucide-react (standard for Next.js) 
// You can replace these with your own SVG components
import {
  Box,
  Trees,
  Monitor,
  Compass,
  Layers,
  Building2,
  Lightbulb,
  PenTool,
  Home,
  Layout
} from 'lucide-react';

const software = [
  { key: 'SketchUp', name: 'SketchUp', icon: <Box size={32} /> },
  { key: 'Enscape', name: 'Enscape', icon: <Box size={32} /> },
  { key: 'Lumion', name: 'Lumion', icon: <Trees size={32} /> },
  { key: 'D5Render', name: 'D5 Render', icon: <Monitor size={32} /> },
  { key: 'AutoCAD', name: 'AutoCAD', icon: <Compass size={32} /> },
  { key: '3dsMax', name: '3ds Max', icon: <Layers size={32} /> },
  { key: 'Revit', name: 'Revit', icon: <Building2 size={32} /> },
  { key: 'Vray', name: 'V-Ray', icon: <Lightbulb size={32} /> },
  { key: 'Photoshop', name: 'Photoshop', icon: <PenTool size={32} /> },
  { key: 'Koohome', name: 'Koohome', icon: <Home size={32} /> },
  { key: 'MSOffice', name: 'MS Office', icon: <Layout size={32} /> }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  },
};

const SoftwareArsenal = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      <section id="software" ref={ref} className="sa-section">
        {/* Heading Block */}
        <motion.div
          className="sa-heading-block"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="sa-eyebrow">Expertise</span>
          <h2 className="sa-heading">Software Arsenal</h2>
          <div className="sa-rule" />
        </motion.div>

        {/* Grid Layout */}
        <motion.div
          className="sa-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {software.map(({ key, name, icon }) => (
            <motion.div
              key={key}
              className="sa-card"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderColor: 'rgba(255,255,255,0.15)'
              }}
            >
              <div className="sa-icon-box">
                {icon}
              </div>
              <h3 className="sa-name">{name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <style>{`
        .sa-section {
          background: #0d0f11; /* Dark background matching image */
          padding: 100px 5%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .sa-heading-block {
          text-align: center;
          margin-bottom: 60px;
        }

        .sa-eyebrow {
          font-size: 0.7rem;
          letter-spacing: 4px;
          color: #C4A574;
          text-transform: uppercase;
          display: block;
          margin-bottom: 12px;
        }

        .sa-heading {
          font-size: clamp(2rem, 5vw, 2.5rem);
          color: #fff;
          font-weight: 300;
          margin: 0;
        }

        .sa-rule {
          width: 40px;
          height: 1px;
          background: #C4A574;
          margin: 20px auto 0;
        }

        /* The Grid System */
        .sa-grid {
          width: 100%;
          max-width: 1100px;
          display: grid;
          grid-template-columns: repeat(4, 1fr); /* 4 columns on desktop */
          gap: 20px;
        }

        /* The Square Card Styling */
        .sa-card {
          aspect-ratio: 1 / 1; /* Makes it a perfect square */
          background: #16181d; /* Slightly lighter dark for the card */
          border: 1px solid rgba(255,255,255,0.03);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          transition: all 0.3s ease;
          cursor: default;
        }

        .sa-icon-box {
          color: #fff;
          margin-bottom: 18px;
          opacity: 0.9;
        }

        .sa-name {
          color: #94a3b8; /* Muted gray text */
          font-size: 0.95rem;
          font-weight: 400;
          margin: 0;
          letter-spacing: 0.5px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .sa-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .sa-grid {
            grid-template-columns: repeat(2, 1fr); /* 2 columns on mobile */
            gap: 12px;
          }
          .sa-section {
            padding: 60px 20px;
          }
        }
      `}</style>
    </>
  );
};

export default SoftwareArsenal;