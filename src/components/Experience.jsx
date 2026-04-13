import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: "Real Touch Furniture",
      role: "Furniture Designer",
      period: "2024 – PRESENT",
      description: [
        "Created innovative and ergonomic office furniture designs, including desks, storage solutions, and collaborative workspaces.",
        "Met with clients to understand requirements and provided recommendations aligned with business goals and office aesthetics.",
        "Managed multiple design projects simultaneously, ensuring timely delivery and adherence to client specifications.",
        "Worked closely with architects and produced architectural plans for management and client approval."
      ],
      type: "work"
    },
    {
      company: "D-Notion Interiors",
      role: "Interior & Exterior Designer",
      period: "2022 – 2023",
      description: [
        "Oversaw various stages of the construction process, providing technical review and oversight of the design-build process.",
        "Developed new and innovative approaches to problem-solving and discussed strategies with clients.",
        "Designed floor plans, elevations, and 3D views for both in-house reviews and client presentations.",
        "Provided management with estimates on cost, time, machinery, and other construction specifications."
      ],
      type: "work"
    },
    {
      company: "GCC Finishing School, Perinthalmanna",
      role: "Professional Diploma in Interior & Exterior Design",
      period: "2022 – 2023",
      description: "Advanced study in modern interior design, material selection, and 3D visualization techniques.",
      type: "education"
    },
    {
      company: "Lt. Colonel Niranjan Memorial Govt",
      role: "ITI in Draughtsman Civil Engineering",
      period: "2019 – 2021",
      description: "Foundation in civil engineering drafting, technical drawing, and structural design concepts.",
      type: "education"
    }
  ];

  return (
    <section id="experience">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ marginBottom: '60px' }}
      >
        <h2 style={{ fontSize: '3.5rem', color: 'var(--accent-gold)' }}>Growth & Background</h2>
      </motion.div>

      <div style={{ position: 'relative', paddingLeft: '40px' }}>
        {/* Timeline line */}
        <div style={{ 
          position: 'absolute', 
          left: '0', 
          top: '0', 
          bottom: '0', 
          width: '2px', 
          background: 'linear-gradient(to bottom, var(--accent-gold), transparent)' 
        }}></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{ marginBottom: '60px', position: 'relative' }}
          >
            {/* Dot */}
            <div style={{ 
              position: 'absolute', 
              left: '-46px', 
              top: '10px', 
              width: '12px', 
              height: '12px', 
              borderRadius: '50%', 
              backgroundColor: 'var(--accent-gold)',
              boxShadow: 'var(--gold-glow)'
            }}></div>

            <span style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '2px' }}>{exp.period}</span>
            <h3 style={{ fontSize: '1.8rem', marginTop: '10px', marginBottom: '5px' }}>{exp.role}</h3>
            <h4 style={{ fontSize: '1.2rem', color: 'white', marginBottom: '15px', fontWeight: 500 }}>{exp.company}</h4>
            
            {Array.isArray(exp.description) ? (
              <ul style={{ paddingLeft: '20px', listStyleType: 'disc', color: 'var(--text-secondary)' }}>
                {exp.description.map((item, i) => (
                  <li key={i} style={{ marginBottom: '8px', lineHeight: 1.6 }}>{item}</li>
                ))}
              </ul>
            ) : (
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: 1.6 }}>{exp.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
