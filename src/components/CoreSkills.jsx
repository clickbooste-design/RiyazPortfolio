import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  'Interior Design', 'CAD Draughting', '3D Visualization', 'Exterior Rendering', 
  'Furniture Design', 'Schematic Planning', 'Material Selection', 'Lighting Setup',
  'Post Production', 'Spatial Layout', 'Construction Oversight', 'Project Management'
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { type: 'spring', damping: 20, stiffness: 200 } 
  }
};

const CoreSkills = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <>
      <section id="skills" ref={ref} className="cs-section">
        {/* Heading */}
        <motion.div
          className="cs-heading-block"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="cs-heading">Core Skills</h2>
          <div className="cs-rule" />
        </motion.div>

        {/* Tag Cloud Container */}
        <motion.div
          className="cs-cloud-container"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              variants={tagVariants}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: 'rgba(196,165,116,0.15)',
                borderColor: '#C4A574' 
              }}
              className={`cs-tag ${i % 3 === 0 ? 'cs-tag-large' : i % 5 === 0 ? 'cs-tag-small' : ''}`}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </section>

      <style>{`
        .cs-section {
          background: #0d0d0d;
          padding: 100px 5% 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
        }
        
        .cs-heading-block {
          text-align: center;
          margin-bottom: 56px;
        }

        .cs-heading {
          font-family: 'Arvo', serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #fff;
          margin: 0;
          line-height: 1.1;
        }

        .cs-rule {
          width: 50px;
          height: 2px;
          background: #C4A574;
          margin: 15px auto 0;
        }

        /* Tag Cloud - Flex Wrap centered */
        .cs-cloud-container {
          width: 100%;
          max-width: 800px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-content: center;
          gap: 14px;
        }

        .cs-tag {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.8);
          padding: 12px 24px;
          border-radius: 4px;
          font-family: 'Lato', sans-serif;
          font-size: 0.95rem;
          font-weight: 400;
          cursor: default;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        /* Variegated sizes to sell the "cloud" look */
        .cs-tag-large {
          font-size: 1.1rem;
          padding: 14px 28px;
          font-weight: 600;
        }
        
        .cs-tag-small {
          font-size: 0.85rem;
          padding: 10px 20px;
          color: rgba(255,255,255,0.6);
        }

        /* Mobile */
        @media (max-width: 767px) {
          .cs-section { 
            padding: 80px 20px; 
          }
          .cs-tag {
            font-size: 0.85rem;
            padding: 10px 18px;
          }
          .cs-tag-large { font-size: 0.95rem; padding: 12px 20px;}
          .cs-tag-small { font-size: 0.75rem; padding: 8px 14px;}
        }
      `}</style>
    </>
  );
};

export default CoreSkills;
