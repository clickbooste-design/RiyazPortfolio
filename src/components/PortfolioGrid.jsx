import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, MoveHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  { id: 1, title: "Executive Office Suite", category: "Office Furniture", image: "/Office Furniture/3 (3).png", plan: "/portfolio-4.png", featured: true },
  { id: 2, title: "Modern Kitchen Concept", category: "Kitchen Design", image: "/Kitchen/view 3.jpg.jpeg", plan: "/portfolio-3.png", featured: true },
  { id: 3, title: "Luxury Living Room", category: "Residential", image: "/portfolio-1.png" },
  { id: 4, title: "Corporate Headquarters", category: "Commercial", image: "/portfolio-4.png" },
  { id: 5, title: "Bespoke Storage Unit", category: "Product Design", image: "/portfolio-1.png" },
  { id: 6, title: "Retail Interior Plan", category: "/portfolio-2.png", isPlan: true },
  { id: 7, title: "Master Bedroom Suite", category: "Residential", image: "/portfolio-2.png" },
  { id: 8, title: "Studio Kitchen", category: "Kitchen Design", image: "/Kitchen/www.jpeg" }
];

const SplitViewCard = ({ project, onOpen }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!isHovering) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPos(x);
  };

  return (
    <motion.div
      layout
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        aspectRatio: '16/10',
        cursor: 'ew-resize',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        border: '1px solid var(--glass-border)',
        marginBottom: '20px'
      }}
    >
      {/* Background (CAD Plan) */}
      <img src={project.plan} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="CAD" />
      
      {/* Foreground (3D Render) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: `${sliderPos}%`,
        height: '100%',
        overflow: 'hidden',
        borderRight: '2px solid var(--accent-gold)'
      }}>
        <img src={project.image} style={{ width: 'auto', height: '100%', objectFit: 'cover', maxWidth: 'none', width: 'calc(100% * 100 / ' + sliderPos + ')' }} alt="Render" />
      </div>

      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        right: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        zIndex: 5,
        pointerEvents: 'none'
      }}>
        <div>
          <span style={{ backgroundColor: 'var(--accent-gold)', color: 'var(--bg-color)', padding: '4px 12px', fontSize: '0.7rem', fontWeight: 800, borderRadius: '4px' }}>CAD VS RENDER</span>
          <h3 style={{ color: 'white', fontSize: '1.2rem', marginTop: '10px', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>{project.title}</h3>
        </div>
        <button 
          onClick={(e) => { e.stopPropagation(); onOpen(project.image); }}
          style={{ 
            pointerEvents: 'auto', 
            background: 'rgba(0,0,0,0.5)', 
            border: 'none', 
            color: 'white', 
            padding: '10px', 
            borderRadius: '50%',
            cursor: 'pointer'
          }}
        >
          <Maximize2 size={20} />
        </button>
      </div>

      {/* Slider Icon */}
      <div style={{
        position: 'absolute',
        left: `${sliderPos}%`,
        top: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'var(--accent-gold)',
        color: 'var(--bg-color)',
        padding: '8px',
        borderRadius: '50%',
        zIndex: 10,
        pointerEvents: 'none',
        display: isHovering ? 'flex' : 'none'
      }}>
        <MoveHorizontal size={16} />
      </div>
    </motion.div>
  );
};

const PortfolioGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Office Furniture", "Kitchen Design", "Residential", "Commercial", "Product Design"];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => !p.isPlan && p.category === activeCategory);

  return (
    <section id="portfolio" style={{ padding: '100px 5%' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '2px' }}>PORTFOLIO GRID</span>
        <h2 style={{ fontSize: '3.5rem', marginTop: '10px', fontFamily: 'Playfair Display, serif' }}>
          Technical <span style={{ color: 'var(--accent-gold)' }}>Excellence.</span>
        </h2>
      </motion.div>

      {/* Category Filter */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '10px', 
        marginBottom: '60px',
        flexWrap: 'wrap'
      }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              position: 'relative',
              padding: '12px 25px',
              background: 'none',
              border: 'none',
              color: activeCategory === cat ? 'var(--bg-color)' : 'var(--text-secondary)',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'color 0.3s ease',
              zIndex: 1
            }}
          >
            {activeCategory === cat && (
              <motion.div
                layoutId="activePill"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'var(--accent-gold)',
                  borderRadius: '50px',
                  zIndex: -1
                }}
                transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
              />
            )}
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Masonry Layout with AnimatePresence */}
      <motion.div 
        layout
        style={{
          columnCount: window.innerWidth > 992 ? 2 : 1,
          columnGap: '30px',
        }}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id} 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              style={{ breakInside: 'avoid', marginBottom: '30px' }}
            >
              {project.featured ? (
                <SplitViewCard project={project} onOpen={setSelectedImage} />
              ) : (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  style={{
                    position: 'relative',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
                    border: '1px solid var(--glass-border)',
                    cursor: 'pointer'
                  }}
                  onClick={() => setSelectedImage(project.image || project.plan)}
                >
                  <img src={project.image || project.plan} style={{ width: '100%', height: 'auto', display: 'block' }} alt={project.title} />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '25px',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }} className="hover-info">
                    <span style={{ color: 'var(--accent-gold)', fontSize: '0.7rem', fontWeight: 700 }}>{project.category}</span>
                    <h3 style={{ color: 'white', marginTop: '5px' }}>{project.title}</h3>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Explore Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ textAlign: 'center', marginTop: '60px' }}
      >
        <Link to="/projects" style={{ textDecoration: 'none' }}>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: 'var(--gold-glow)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '20px 50px',
              backgroundColor: 'transparent',
              border: '1px solid var(--accent-gold)',
              color: 'var(--accent-gold)',
              fontSize: '0.9rem',
              fontWeight: 800,
              letterSpacing: '3px',
              cursor: 'pointer',
              borderRadius: '50px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            EXPLORE ALL PROJECTS <Maximize2 size={18} />
          </motion.button>
        </Link>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.95)',
              zIndex: 2000,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '40px'
            }}
            onClick={() => setSelectedImage(null)}
          >
            <button 
              style={{ position: 'absolute', top: '40px', right: '40px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage} 
              style={{ maxHeight: '90vh', maxWidth: '90vw', borderRadius: '10px', boxShadow: '0 0 50px rgba(0,0,0,0.5)' }} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .breakInside:avoid { break-inside: avoid; }
        div:hover > .hover-info { opacity: 1 !important; }
      `}</style>
    </section>
  );
};

export default PortfolioGrid;
