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
  visible: { transition: { staggerChildren: 0.08 } }
};

const tagVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  }
};

const CoreSkills = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <>
      <section id="skills" ref={ref} className="cs-section">
        <motion.div
          className="cs-heading-block"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="cs-heading">Core Skills</h2>
          <div className="cs-rule" />
        </motion.div>

        <motion.div
          className="cs-cloud-container"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={tagVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(196,165,116,0.12)',
                borderColor: '#C4A574'
              }}
              className="cs-tag"
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
        }

        .cs-heading-block {
          text-align: center;
          margin-bottom: 50px;
        }

        .cs-heading {
          font-family: 'Arvo', serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: #fff;
        }

        .cs-rule {
          width: 50px;
          height: 2px;
          background: #C4A574;
          margin: 12px auto 0;
        }

        /* GRID ALIGNMENT */
        .cs-cloud-container {
          width: 100%;
          max-width: 900px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 16px;
        }

        .cs-tag {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.85);
          padding: 14px 18px;
          border-radius: 6px;
          font-family: 'Lato', sans-serif;
          font-size: 0.95rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        /* MOBILE */
        @media (max-width: 767px) {
          .cs-section { padding: 80px 20px; }
          .cs-cloud-container {
            grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          }
        }
      `}</style>
    </>
  );
};

export default CoreSkills;