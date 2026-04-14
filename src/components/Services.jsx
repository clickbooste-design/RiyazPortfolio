import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Icon3D = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M21 16V8C20.9996 7.64927 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="#C4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.27002 6.96002L12 12.01L20.73 6.96002" stroke="#C4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22.08V12" stroke="#C4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconFurniture = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M5 9V20" stroke="#C4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 9V20" stroke="#C4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 14H19" stroke="#C4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 9C19 7.93913 18.5786 6.92172 17.8284 6.17157C17.0783 5.42143 16.0609 5 15 5H9C7.93913 5 6.92172 5.42143 6.17157 6.17157C5.42143 6.92172 5 7.93913 5 9" stroke="#C4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconPlanning = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#C4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2V8H20" stroke="#C4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 13H8" stroke="#C4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 17H8" stroke="#C4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 9H8" stroke="#C4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconOversight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="#C4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" stroke="#C4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const specs = [
  {
    Icon: Icon3D,
    num: '01',
    title: '3D Visualization',
    desc: 'Creating photorealistic exterior and interior architectural renderings.',
  },
  {
    Icon: IconFurniture,
    num: '02',
    title: 'Furniture Design',
    desc: 'Bespoke product and furniture visualization with precise material texturing.',
  },
  {
    Icon: IconPlanning,
    num: '03',
    title: 'Schematic Planning',
    desc: 'Technical AutoCAD drafting and detailed spatial layout planning.',
  },
  {
    Icon: IconOversight,
    num: '04',
    title: 'Construction Oversight',
    desc: 'Translating design concepts into actionable on-site implementations.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <>
      <section id="services" ref={ref} className="sp-section">
        {/* Heading */}
        <motion.div
          className="sp-heading-block"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="sp-eyebrow">Services</span>
          <h2 className="sp-heading">Specialization</h2>
          <div className="sp-rule" />
        </motion.div>

        <motion.div
          className="sp-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {specs.map(({ Icon, num, title, desc }) => (
            <motion.div key={num} className="sp-card" variants={cardVariants}>
              <div className="sp-card-top">
                <div className="sp-icon-wrap"><Icon /></div>
                <span className="sp-num">{num}</span>
              </div>
              <h3 className="sp-card-title">{title}</h3>
              <p className="sp-card-desc">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <style>{`
        .sp-section {
          background: #000;
          padding: 80px 5%;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
        }

        .sp-heading-block {
          text-align: center;
          margin-bottom: 60px;
        }

        .sp-eyebrow {
          display: block;
          font-family: 'Lato', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #C4A574;
          margin-bottom: 14px;
        }

        .sp-heading {
          font-family: 'Arvo', serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #fff;
          margin: 0;
          line-height: 1.1;
        }

        .sp-rule {
          width: 50px;
          height: 2px;
          background: #C4A574;
          margin: 20px auto 0;
        }

        /* 2x2 Grid */
        .sp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          width: 100%;
          max-width: 900px;
        }

        .sp-card {
          background: #0a0a0a;
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 12px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          transition: border-color 0.3s ease, transform 0.3s ease;
        }

        .sp-card:hover {
          border-color: rgba(196,165,116,0.3);
          transform: translateY(-4px);
        }

        .sp-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .sp-icon-wrap {
          width: 50px;
          height: 50px;
          background: rgba(196,165,116,0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sp-num {
          font-family: 'Arvo', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: rgba(255,255,255,0.15);
        }

        .sp-card-title {
          font-family: 'Arvo', serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 12px 0;
        }

        .sp-card-desc {
          font-family: 'Lato', sans-serif;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
          margin: 0;
        }

        /* Mobile */
        @media (max-width: 767px) {
          .sp-section {
            padding: 60px 20px;
          }
          .sp-grid {
            grid-template-columns: 1fr;
          }
          .sp-card {
            padding: 24px;
          }
        }
      `}</style>
    </>
  );
};

export default Services;
