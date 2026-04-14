import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

const detailedProjects = {
  "Residential interiors": [
    { title: "Bespoke Living Room", category: "Residential", image: "/portfolio-1.png" },
    { title: "Master Bedroom Suite", category: "Residential", image: "/portfolio-2.png" },
    { title: "Minimalist Kitchen", category: "Residential", image: "/portfolio-3.png" },
    { title: "Dining Area Concept", category: "Residential", image: "/portfolio-4.png" }
  ],
  "Commercial interiors": [
    { title: "Corporate Headquarters", category: "Commercial", image: "/portfolio-4.png" },
    { title: "Luxury Fashion Showroom", category: "Commercial", image: "/portfolio-1.png" },
    { title: "Modern Café Interior", category: "Commercial", image: "/hero-render.png" }
  ],
  "Kitchen Designs": [
    { title: "Modular Kitchen System", category: "Kitchen Design", image: "/Kitchen/view 3.jpg.jpeg" },
    { title: "Contemporary Open Kitchen", category: "Kitchen Design", image: "/Kitchen/VIEW 2.jpg.jpeg" },
    { title: "Classic White Kitchen", category: "Kitchen Design", image: "/Kitchen/view 5.jpg.jpeg" },
    { title: "Professional Studio Kitchen", category: "Kitchen Design", image: "/Kitchen/www.jpeg" }
  ],
  "Furniture Design": [
    { title: "Ergonomic Office Chair", category: "Furniture Design", image: "/portfolio-4.png" },
    { title: "Custom Lounge Seating", category: "Furniture Design", image: "/portfolio-1.png" }
  ],
  "Office Furniture (Product Design)": [
    { title: "Executive Workspace", category: "Office Furniture", image: "/Office Furniture/3 (3).png" },
    { title: "Workstation Cluster", category: "Office Furniture", image: "/portfolio-3.png", technical: true },
    { title: "Reception Desk Unit", category: "Office Furniture", image: "/portfolio-4.png", technical: true }
  ],
  "Product Design": [
    { title: "Bespoke Storage Unit", category: "Product Design", image: "/portfolio-1.png" }
  ],
  "3D Visualization": [
    { title: "Photorealistic Render", category: "3D Visualization", image: "/hero-render.png" },
    { title: "Lighting & Material Study", category: "3D Visualization", image: "/portfolio-2.png" }
  ]
};

const ProjectDetails = () => {
  return (
    <div style={{ backgroundColor: '#0D0D0D', color: 'white', paddingTop: '100px', minHeight: '100vh' }}>
      {/* Page Hero */}
      <section style={{ 
        minHeight: '50vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        textAlign: 'center',
        background: 'radial-gradient(circle at center, rgba(197, 160, 89, 0.05) 0%, transparent 70%)',
        position: 'relative',
        padding: '0 5%'
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Link to="/" style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '12px', 
            textDecoration: 'none', 
            color: 'var(--accent-gold)',
            fontSize: '0.85rem',
            marginBottom: '40px',
            fontWeight: 800,
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            <ChevronLeft size={16} /> BACK TO HOME
          </Link>
          <h1 style={{ 
            fontSize: 'clamp(3rem, 8vw, 6rem)', 
            color: 'white', 
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-2px',
            marginBottom: '20px'
          }}>
            PROJECT <span style={{ color: 'var(--accent-gold)' }}>ARCHIVE</span>
          </h1>
          <p style={{ 
            color: 'var(--text-secondary)', 
            marginTop: '10px', 
            fontSize: '1.2rem',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            A comprehensive catalog of interior design solutions, from ergonomic workstation arrays to photorealistic residential visualizations.
          </p>
        </motion.div>
      </section>

      {/* Categories Sections */}
      <div style={{ padding: '0 5% 100px' }}>
        {Object.entries(detailedProjects).map(([category, projects], catIndex) => (
          <section key={category} style={{ padding: '100px 0', borderTop: '1px solid var(--glass-border)' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ 
                marginBottom: '60px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '15px' }}>
                <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--accent-gold)' }}></div>
                <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '4px' }}>
                  {String(catIndex + 1).padStart(2, '0')}
                </span>
              </div>
              <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)' }}>{category}</h2>
            </motion.div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
              gap: '40px' 
            }}>
              {projects.map((proj, idx) => (
                <ProjectCard key={idx} {...proj} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA section at the bottom */}
      <section style={{ 
        textAlign: 'center', 
        padding: '150px 0', 
        background: 'linear-gradient(to top, #050505, transparent)' 
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', fontFamily: 'var(--font-heading)' }}>
            Transform your vision into <span style={{ color: 'var(--accent-gold)' }}>Reality.</span>
          </h2>
          <a href="mailto:muhammedriyas188@gmail.com" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: 'var(--gold-glow)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '22px 60px',
                backgroundColor: 'var(--accent-gold)',
                border: 'none',
                color: 'var(--bg-color)',
                fontSize: '0.9rem',
                fontWeight: 800,
                letterSpacing: '3px',
                cursor: 'pointer',
                borderRadius: '50px'
              }}
            >
              START A PROJECT <ArrowRight size={18} style={{ marginLeft: '12px', verticalAlign: 'middle' }} />
            </motion.button>
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectDetails;
