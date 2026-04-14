import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CountUp = ({ end, suffix = '', duration = 1800 }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const stats = [
  { value: 3,   suffix: '+', label: 'EXPERIENCE', sub: 'Years' },
  { value: 25,  suffix: '+', label: 'PROJECTS',   sub: 'Completed' },
];

const Stats = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <>
      <section id="stats" ref={ref} className="st-section">
        <div className="st-grid">
          {stats.map(({ value, suffix, label, sub }, i) => (
            <motion.div
              key={label}
              className="st-card"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ borderColor: 'rgba(196,165,116,0.45)', y: -6 }}
            >
              <div className="st-number">
                <CountUp end={value} suffix={suffix} />
              </div>
              <div className="st-label">{label}</div>
              <div className="st-sub">{sub}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <style>{`
        .st-section {
          background: #000;
          padding: 0 5% 100px;
          box-sizing: border-box;
        }
        .st-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          max-width: 560px;
          margin: 0 auto;
        }
        .st-card {
          background: #111;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 48px 24px 40px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          transition: border-color 0.3s ease, transform 0.3s ease;
        }
        .st-number {
          font-family: 'Arvo', serif;
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 700;
          color: #C4A574;
          line-height: 1;
        }
        .st-label {
          font-family: 'Lato', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #fff;
          margin-top: 4px;
        }
        .st-sub {
          font-family: 'Lato', sans-serif;
          font-size: 0.78rem;
          color: #9ca3af;
        }

        /* Mobile */
        @media (max-width: 767px) {
          .st-section { padding: 0 20px 80px; }
          .st-grid { max-width: 100%; gap: 14px; }
          .st-card { padding: 36px 16px 28px; }
        }

        @media (max-width: 479px) {
          .st-section { padding: 0 16px 70px; }
        }
      `}</style>
    </>
  );
};

export default Stats;
