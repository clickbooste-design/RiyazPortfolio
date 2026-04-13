import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Building2, Box, Home, Camera, Sparkles, Eye, Layers } from 'lucide-react';

const software = [
  { name: "AutoCAD", icon: <PenTool size={32} /> },
  { name: "Sketchup", icon: <Home size={32} /> },
  { name: "Enscape", icon: <Eye size={32} /> },
  { name: "Lumion", icon: <Camera size={32} /> },
  { name: "D5 Render", icon: <Sparkles size={32} /> },
  { name: "CooHome", icon: <Box size={32} /> },
  { name: "Photoshop", icon: <Layers size={32} /> },
  { name: "Ms Office", icon: <Building2 size={32} /> }
];

const SoftwareArsenal = () => {
  return (
    <section id="software">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h2 style={{ fontSize: '3rem', color: 'var(--accent-gold)' }}>Software Arsenal</h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '10px' }}>Mastering the industry's most powerful architectural tools.</p>
      </motion.div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
        gap: '20px' 
      }}>
        {software.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -10,
              backgroundColor: 'rgba(197, 160, 89, 0.05)',
              borderColor: 'var(--accent-gold)'
            }}
            className="glass"
            style={{
              padding: '30px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '15px',
              cursor: 'default',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{ color: 'var(--accent-gold)' }}>
              {tool.icon}
            </div>
            <div style={{ 
              fontSize: '0.9rem', 
              fontWeight: 600, 
              color: 'var(--text-primary)',
              letterSpacing: '0.5px'
            }}>
              {tool.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SoftwareArsenal;
