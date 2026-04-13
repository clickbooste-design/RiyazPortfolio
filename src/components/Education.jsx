import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Languages as LangIcon } from 'lucide-react';

const Education = () => {
  const education = [
    {
      title: "Professional Diploma In Interior & Exterior Design",
      issuer: "GCC Finishing School Perinthalmanna",
      period: "2022 - 2023"
    },
    {
      title: "ITI in Draughtsman Civil Engineering",
      issuer: "Lt. Colonel Niranjan Memorial Govt",
      period: "2019 - 2021"
    }
  ];

  const languages = [
    { name: "English", level: "Professional" },
    { name: "Hindi", level: "Native/Fluent" },
    { name: "Malayalam", level: "Native" },
    { name: "Tamil", level: "Fluent" },
    { name: "Arabic", level: "Conversational" }
  ];

  return (
    <section id="education" style={{ padding: '100px 5%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '100px' }}>
        {/* Left: Education Timeline */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
            <div style={{ color: 'var(--accent-gold)' }}><GraduationCap size={32} /></div>
            <h3 style={{ fontSize: '2rem' }}>Academic <span style={{ color: 'var(--accent-gold)' }}>Pathway.</span></h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {education.map((edu, i) => (
              <div key={i} style={{ borderLeft: '2px solid var(--accent-gold)', paddingLeft: '30px', position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: '-9px',
                  top: '0',
                  width: '16px',
                  height: '16px',
                  backgroundColor: 'var(--bg-color)',
                  border: '2px solid var(--accent-gold)',
                  borderRadius: '50%'
                }}></div>
                <div style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '0.8rem', marginBottom: '8px' }}>{edu.period}</div>
                <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '8px' }}>{edu.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{edu.issuer}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Languages Badges */}
        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '40px' }}>
            <div style={{ color: 'var(--accent-gold)' }}><LangIcon size={32} /></div>
            <h3 style={{ fontSize: '2rem' }}>Fluent <span style={{ color: 'var(--accent-gold)' }}>Linguist.</span></h3>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
            {languages.map((lang, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-gold)', color: 'var(--bg-color)' }}
                className="glass"
                style={{ 
                  padding: '15px 30px', 
                  borderRadius: '50px', 
                  cursor: 'default',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ fontWeight: 800, fontSize: '1rem' }}>{lang.name}</div>
                <div style={{ fontSize: '0.7rem', opacity: 0.7 }}>{lang.level}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
