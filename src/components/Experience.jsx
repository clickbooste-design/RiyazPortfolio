import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    role: 'Senior 3D Visualizer',
    company: 'Real Touch Furniture',
    period: '2024 – Present',
    watermark: '2025'
  },
  {
    role: 'BIM/Site Supervisor',
    company: 'D-Notion Interiors',
    period: '2022 – 2023',
    watermark: '2023'
  },
  {
    role: 'Junior 3D Visualizer',
    company: 'Freelance',
    period: '2021 – 2022',
    watermark: '2022'
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <>
      <section id="experience" ref={ref} className="ex-section">
        {/* Heading */}
        <motion.div
          className="ex-heading-block"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="ex-heading">Experience</h2>
          <div className="ex-rule" />
        </motion.div>

        {/* Grid */}
        <motion.div
          className="ex-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {experiences.map(({ role, company, period, watermark }, i) => (
            <motion.div key={i} className="ex-card" variants={cardVariants}>
              <div className="ex-card-content">
                <h3 className="ex-role">{role}</h3>
                <p className="ex-company">{company}</p>
                <p className="ex-period">{period}</p>
              </div>
              <div className="ex-watermark">{watermark}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <style>{`
        .ex-section {
          background: #000;
          padding: 80px 5%;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
        }
        .ex-heading-block {
          text-align: center;
          margin-bottom: 50px;
        }
        .ex-heading {
          font-family: 'Arvo', serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #C4A574;
          margin: 0;
          line-height: 1.1;
        }
        .ex-rule {
          width: 50px;
          height: 1px;
          background: #C4A574;
          margin: 15px auto 0;
        }

        .ex-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          width: 100%;
          max-width: 1100px;
        }

        .ex-card {
          background: #0a0a0a;
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 12px;
          padding: 30px 24px;
          position: relative;
          overflow: hidden;
          min-height: 140px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: border-color 0.3s ease, transform 0.3s ease;
        }
        .ex-card:hover {
          border-color: rgba(196,165,116,0.3);
          transform: translateY(-5px);
        }

        .ex-card-content {
          position: relative;
          z-index: 2;
        }

        .ex-role {
          font-family: 'Arvo', serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 8px 0;
          line-height: 1.3;
        }
        .ex-company {
          font-family: 'Lato', sans-serif;
          font-size: 0.85rem;
          color: #C4A574;
          font-weight: 600;
          margin: 0 0 4px 0;
        }
        .ex-period {
          font-family: 'Lato', sans-serif;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.4);
          margin: 0;
        }

        .ex-watermark {
          position: absolute;
          right: -10px;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Arvo', serif;
          font-size: 6rem;
          font-weight: 700;
          color: rgba(255,255,255,0.03);
          z-index: 1;
          pointer-events: none;
        }

        /* Mobile */
        @media (max-width: 900px) {
          .ex-grid {
            grid-template-columns: 1fr;
            max-width: 440px;
            gap: 16px;
          }
          .ex-section { padding: 60px 20px; }
          .ex-watermark { font-size: 5rem; right: 0px; }
        }
      `}</style>
    </>
  );
};

export default Experience;
