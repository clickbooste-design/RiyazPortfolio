import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const GraduationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 4L2 9L12 14L22 9L12 4Z" stroke="#C4A574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 11V16C6 16 9 19 12 19C15 19 18 16 18 16V11" stroke="#C4A574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CompassIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 22L12 14M12 14L9 14L12 2L15 14L12 14Z" stroke="#C4A574" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#C4A574" strokeWidth="1.5"/>
    <path d="M2 12H22" stroke="#C4A574" strokeWidth="1.5"/>
    <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z" stroke="#C4A574" strokeWidth="1.5"/>
  </svg>
)

const educations = [
  {
    Icon: GraduationIcon,
    degree: 'Professional Diploma in Interior & Exterior Design',
    institution: 'GCC Finishing School, Perinthalmanna',
    year: 'Aug 2022 – Jun 2023',
  },
  {
    Icon: CompassIcon,
    degree: 'ITI in Draughtsman Civil Engineering',
    institution: 'Lt. Colonel Niranjan Memorial Govt',
    year: 'Sep 2019 – May 2021',
  },
];

const languages = [
  { lang: 'English', level: 'Fluent / Professional' },
  { lang: 'Arabic', level: 'Conversational' },
  { lang: 'Hindi', level: 'Working Knowledge' },
  { lang: 'Malayalam', level: 'Native / Bilingual' }
];

const timelineVariants = {
  hidden: { height: 0 },
  visible: { height: '100%', transition: { duration: 1.5, ease: "easeInOut" } }
};

const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      <section id="education" ref={ref} className="ed-section">
        
        {/* Education Timeline */}
        <div className="ed-container">
          <motion.div
            className="ed-heading-block"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="ed-eyebrow">Education</span>
            <h2 className="ed-heading">Academic Pathway</h2>
            <div className="ed-rule" />
          </motion.div>

          <div className="ed-timeline-wrap">
            <motion.div 
              className="ed-timeline-line"
              variants={timelineVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            />
            
            <div className="ed-items">
              {educations.map(({ Icon, degree, institution, year }, i) => (
                <div key={i} className="ed-item">
                  <motion.div 
                    className="ed-timeline-dot"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.4 + (i * 0.3), duration: 0.5 }}
                  >
                    <div className="ed-dot-center" />
                  </motion.div>
                  
                  <motion.div
                    className="ed-card"
                    initial={{ opacity: 0, x: 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + (i * 0.3), ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="ed-card-header">
                      <div className="ed-icon-wrap"><Icon /></div>
                      <div className="ed-year-pill">{year}</div>
                    </div>
                    <h3 className="ed-degree">{degree}</h3>
                    <p className="ed-institution">{institution}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages section - Stacked Text list */}
        <div className="lang-container">
          <motion.div
            className="ed-heading-block"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="ed-eyebrow">Communication</span>
            <h2 className="ed-heading">Fluent Linguist</h2>
            <div className="ed-rule" />
          </motion.div>

          <motion.div 
            className="lang-stack"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {languages.map((item, idx) => (
              <div key={idx} className="lang-item">
                <div className="lang-icon"><GlobeIcon /></div>
                <div className="lang-text">
                  <span className="lang-name">{item.lang}</span>
                  <span className="lang-level">{item.level}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </section>

      <style>{`
        .ed-section {
          background: #000;
          padding: 100px 5%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 100px;
          box-sizing: border-box;
        }

        .ed-container, .lang-container {
          width: 100%;
          max-width: 700px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .ed-heading-block {
          text-align: center;
          margin-bottom: 50px;
        }

        .ed-eyebrow {
          display: block;
          font-family: 'Lato', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #C4A574;
          margin-bottom: 14px;
        }

        .ed-heading {
          font-family: 'Arvo', serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #fff;
          margin: 0;
          line-height: 1.1;
        }

        .ed-rule {
          width: 50px;
          height: 2px;
          background: #C4A574;
          margin: 20px auto 0;
        }

        /* Timeline Layout */
        .ed-timeline-wrap {
          position: relative;
          width: 100%;
          padding-left: 20px;
        }
        
        .ed-timeline-line {
          position: absolute;
          left: 25px;
          top: 10px;
          bottom: 10px;
          width: 2px;
          background: rgba(196,165,116,0.2);
          z-index: 1;
        }

        .ed-items {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .ed-item {
          display: flex;
          align-items: stretch;
          position: relative;
          padding-left: 40px;
        }

        .ed-timeline-dot {
          position: absolute;
          left: -4px;
          top: 24px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid #C4A574;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }
        .ed-dot-center {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #C4A574;
        }

        .ed-card {
          background: #0a0a0a;
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 12px;
          padding: 24px 30px;
          flex: 1;
          transition: border-color 0.3s ease;
        }

        .ed-card:hover {
          border-color: rgba(196,165,116,0.2);
        }

        .ed-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .ed-icon-wrap {
          width: 44px;
          height: 44px;
          background: rgba(196,165,116,0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ed-year-pill {
          font-family: 'Lato', sans-serif;
          font-size: 0.8rem;
          color: #C4A574;
          font-weight: 700;
          background: rgba(196,165,116,0.1);
          padding: 6px 14px;
          border-radius: 50px;
        }

        .ed-degree {
          font-family: 'Arvo', serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 10px 0;
          line-height: 1.35;
        }

        .ed-institution {
          font-family: 'Lato', sans-serif;
          font-size: 0.95rem;
          color: rgba(255,255,255,0.6);
          margin: 0;
        }

        /* Language Stack */
        .lang-stack {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .lang-item {
          display: flex;
          align-items: center;
          gap: 20px;
          background: #0a0a0a;
          border: 1px solid rgba(255,255,255,0.05);
          padding: 20px 30px;
          border-radius: 8px;
        }

        .lang-icon {
          flex-shrink: 0;
          background: rgba(196,165,116,0.05);
          padding: 12px;
          border-radius: 50%;
          display: flex;
        }

        .lang-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .lang-name {
          font-family: 'Arvo', serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #fff;
        }

        .lang-level {
          font-family: 'Lato', sans-serif;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.5);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        /* Mobile */
        @media (max-width: 767px) {
          .ed-section { padding: 80px 20px; gap: 60px; }
          .ed-timeline-wrap { padding-left: 10px; }
          .ed-timeline-line { left: 15px; }
          .ed-timeline-dot { left: -9px; }
          .ed-item { padding-left: 20px; }
          .ed-card { padding: 20px; }
          
          .ed-card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          
          .lang-item {
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Education;
