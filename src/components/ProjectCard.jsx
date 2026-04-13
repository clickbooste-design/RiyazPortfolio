import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, category, image, technical }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="glass"
      style={{
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '15px',
        border: '1px solid var(--glass-border)',
        transition: 'border-color 0.3s ease'
      }}
      whileHover={{ scale: 1.02, borderColor: 'var(--accent-gold)' }}
    >
      <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
        <motion.img 
          src={image} 
          alt={title} 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      
      <div style={{ padding: '25px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <span style={{ color: 'var(--accent-gold)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
              {category}
            </span>
            <h3 style={{ fontSize: '1.4rem', marginTop: '10px', color: 'white' }}>{title}</h3>
          </div>
          {technical && (
            <div style={{ 
              padding: '4px 12px', 
              border: '1px solid var(--accent-gold)', 
              borderRadius: '20px', 
              fontSize: '0.65rem', 
              color: 'var(--accent-gold)',
              fontWeight: 700
            }}>
              TECHNICAL PLAN
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
