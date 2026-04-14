import React from 'react';
import { motion } from 'framer-motion';
import { PencilRuler, Lamp, HardHat, Layers } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, boxShadow: 'var(--gold-glow)' }}
      className="glass"
      style={{
        padding: '45px',
        textAlign: 'center',
        border: '1px solid var(--glass-border)',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{ 
        display: 'inline-flex', 
        padding: '20px', 
        backgroundColor: 'rgba(197, 160, 89, 0.05)', 
        borderRadius: '50%',
        color: 'var(--accent-gold)',
        marginBottom: '25px'
      }}>
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h3 style={{ fontSize: '1.4rem', color: 'white', marginBottom: '15px', fontFamily: 'var(--font-heading)' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    { title: "3D Visualization", description: "Photorealistic rendering that brings architectural concepts to life with atmospheric depth.", icon: Lamp }, 
    { title: "Furniture Design", description: "Bespoke, ergonomic corporate and residential furniture solutions tailored to human scale.", icon: PencilRuler },
    { title: "Schematic Planning", description: "Comprehensive spatial layouts and schematic designs that optimize flow and function.", icon: Layers },
    { title: "Construction Oversight", description: "On-site coordination and technical reviews ensuring design intent is perfectly executed.", icon: HardHat }
  ];

  return (
    <section id="services" style={{ padding: '100px 5%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
        {services.map((svc, i) => (
          <ServiceCard key={svc.title} {...svc} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Services;
