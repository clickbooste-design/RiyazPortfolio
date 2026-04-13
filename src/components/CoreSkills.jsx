import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillBar = ({ skill, percentage }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({ width: `${percentage}%` });
    }
  }, [controls, inView, percentage]);

  return (
    <div ref={ref} style={{ marginBottom: '25px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'white' }}>{skill}</span>
        <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 700 }}>{percentage}%</span>
      </div>
      <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ height: '100%', background: 'var(--accent-gold)', borderRadius: '10px' }}
        />
      </div>
    </div>
  );
};

const StatItem = ({ value, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;
      
      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, 2000 / end);
    }
  }, [inView, value]);

  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--accent-gold)', fontFamily: 'Playfair Display, serif' }}>
        {count}{suffix}
      </div>
      <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '5px' }}>
        {label}
      </div>
    </div>
  );
};

const CoreSkills = () => {
  const technicalArsenal = [
    { skill: "AutoCAD (2D/3D)", percentage: 95 },
    { skill: "SketchUp", percentage: 90 },
    { skill: "Lumion", percentage: 85 },
    { skill: "D5 Render", percentage: 88 },
    { skill: "Enscape", percentage: 82 },
    { skill: "Adobe Photoshop", percentage: 75 },
    { skill: "CooHome", percentage: 80 }
  ];

  return (
    <section id="software" style={{ padding: '100px 5%' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '80px' }}
      >
        <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '2px' }}>TECHNICAL ARSENAL</span>
        <h2 style={{ fontSize: '3.5rem', marginTop: '10px', fontFamily: 'Playfair Display, serif' }}>Software <span style={{ color: 'var(--accent-gold)' }}>Mastery.</span></h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '100px', alignItems: 'flex-start' }}>
        {/* Left: Progress Bars */}
        <div>
          {technicalArsenal.map((item) => (
            <SkillBar key={item.skill} {...item} />
          ))}
        </div>

        {/* Right: Stats and Badges */}
        <div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '40px', 
            marginBottom: '60px',
            backgroundColor: 'rgba(255,255,255,0.02)',
            padding: '40px',
            borderRadius: '20px',
            border: '1px solid var(--glass-border)'
          }}>
            <StatItem value="3" label="Years Experience" suffix="+" />
            <StatItem value="25" label="Projects Done" suffix="+" />
            <StatItem value="7" label="Software Mastered" suffix="+" />
            <StatItem value="100" label="Client Satisfaction" suffix="%" />
          </div>

          <div className="glass" style={{ padding: '30px' }}>
            <h4 style={{ color: 'white', marginBottom: '20px', fontSize: '1.1rem' }}>Soft Skills & Expertise</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {["Space Planning", "3D Visualization", "CAD Draughting", "Materiality", "Schematic Design", "Site Oversight", "Team Collaboration"].map((skill) => (
                <div key={skill} style={{ 
                  padding: '8px 18px', 
                  backgroundColor: 'rgba(197, 160, 89, 0.08)', 
                  border: '1px solid rgba(197, 160, 89, 0.2)',
                  borderRadius: '30px',
                  color: 'var(--accent-gold)',
                  fontSize: '0.75rem',
                  fontWeight: 600
                }}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreSkills;
