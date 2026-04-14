import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/* ── Split View Component for CAD vs RENDER ── */
const SplitViewCard = ({ cadSrc, renderSrc, title, category }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current || !isDragging) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - left, width));
    setSliderPos((x / width) * 100);
  };

  return (
    <div className="pg-split-wrap">
      <div 
        ref={containerRef}
        className="pg-split-container"
        onMouseMove={(e) => handleMove(e.clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* Under layer: Original CAD */}
        <img src={cadSrc} alt="CAD Draft" className="pg-split-img" draggable="false" />
        
        {/* Top layer: Rendered Image (Clipped) */}
        <div 
          className="pg-split-overlay" 
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img src={renderSrc} alt="Final Render" className="pg-split-img" draggable="false" />
        </div>

        {/* Divider Line */}
        <div className="pg-split-divider" style={{ left: `${sliderPos}%` }}>
          <div className="pg-split-handle">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="pg-split-label pg-label-left">CAD</div>
        <div className="pg-split-label pg-label-right">RENDER</div>
      </div>
      
      <div className="pg-split-info">
        <h3 className="pg-info-title">{title}</h3>
        <span className="pg-info-cat">{category}</span>
      </div>
    </div>
  );
};


/* ── Main Portfolio Component ── */
const categories = ['ALL', 'OFFICE FURNITURE', 'KITCHEN DESIGN', 'RESIDENTIAL', 'COMMERCIAL', 'PRODUCT DESIGN'];

// Since we don't have exact CAD resources verified in public yet, we'll use a placeholder logic that falls back to existing images if needed
// The prompt requires 2 split pairs, and 6 standard images.
const projectsData = [
  // Pair 1
  { id: 1, type: 'split', category: 'COMMERCIAL', title: 'Executive Office Suite', cadSrc: '/Office Furniture/3 q.png', renderSrc: '/Office Furniture/3 (3)q.png' },
  // Pair 2
  { id: 2, type: 'split', category: 'KITCHEN DESIGN', title: 'Modern Kitchen Concept', cadSrc: '/Kitchen/1.jpgq.jpeg', renderSrc: '/Kitchen/www.jpeg' },
  
  // Office Furniture Images
  { id: 3, type: 'single', category: 'OFFICE FURNITURE', title: 'Office Layout 1', src: '/Office Furniture/1 (5).png' },
  { id: 4, type: 'single', category: 'OFFICE FURNITURE', title: 'Office Layout 2', src: '/Office Furniture/1 (6).png' },
  { id: 5, type: 'single', category: 'OFFICE FURNITURE', title: 'Office Desk Setup', src: '/Office Furniture/3 (3).png' },
  { id: 6, type: 'single', category: 'OFFICE FURNITURE', title: 'Modern Setting', src: '/Office Furniture/Confident portrait in modern setting.png' },

  // Kitchen / Interior Images (mapped to RESIDENTIAL / KITCHEN DESIGN to fit the filters)
  { id: 7, type: 'single', category: 'RESIDENTIAL', title: 'Bedroom Scene 1', src: '/Kitchen/BEDROOM2Scene 1.png' },
  { id: 8, type: 'single', category: 'RESIDENTIAL', title: 'Master Bedroom', src: '/Kitchen/Master bed v1.png' },
  { id: 9, type: 'single', category: 'KITCHEN DESIGN', title: 'Kitchen View 1', src: '/Kitchen/2.jpg.jpeg' },
  { id: 10, type: 'single', category: 'RESIDENTIAL', title: 'Interior View 2', src: '/Kitchen/VIEW 2.jpg.jpeg' },
];

const PortfolioGrid = () => {
  const [activeCat, setActiveCat] = useState('ALL');
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const filteredProjects = activeCat === 'ALL' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCat);

  const splits = filteredProjects.filter(p => p.type === 'split');
  const singles = filteredProjects.filter(p => p.type === 'single');

  return (
    <>
      <section id="portfolio" ref={ref} className="pg-section">
        <motion.div
          className="pg-heading-block"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="pg-eyebrow">Selected Works</span>
          <h2 className="pg-heading">Technical Excellence.</h2>
          <div className="pg-rule" />
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="pg-filters"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`pg-filter-btn ${activeCat === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid Container */}
        <motion.div layout className="pg-grid-container">
          <AnimatePresence>
            
            {/* ROW 1: Split Views */}
            {splits.length > 0 && (
              <div className="pg-split-row">
                {splits.map((p) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                  >
                    <SplitViewCard 
                      title={p.title} 
                      category={p.category} 
                      cadSrc={p.cadSrc} 
                      renderSrc={p.renderSrc} 
                    />
                  </motion.div>
                ))}
              </div>
            )}

            {/* ROW 2: Single Images (Masonry / Standard Grid) */}
            {singles.length > 0 && (
              <div className="pg-standard-grid">
                {singles.map((p) => (
                  <motion.div
                    key={p.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="pg-single-card"
                  >
                    <img src={p.src} alt={p.title} className="pg-single-img" />
                    <div className="pg-single-overlay">
                      <h3 className="pg-single-title">{p.title}</h3>
                      <span className="pg-single-cat">{p.category}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

          </AnimatePresence>
        </motion.div>
      </section>

      <style>{`
        .pg-section {
          background: #000;
          padding: 100px 5%;
          box-sizing: border-box;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .pg-heading-block {
          text-align: center;
          margin-bottom: 40px;
        }

        .pg-eyebrow {
          display: block;
          font-family: 'Lato', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #C4A574;
          margin-bottom: 14px;
        }

        .pg-heading {
          font-family: 'Arvo', serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #fff;
          margin: 0;
          line-height: 1.1;
        }

        .pg-rule {
          width: 50px;
          height: 2px;
          background: #C4A574;
          margin: 20px auto 0;
        }

        /* Nav Filters */
        .pg-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: 50px;
          max-width: 900px;
        }

        .pg-filter-btn {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.6);
          padding: 8px 18px;
          border-radius: 50px;
          font-family: 'Lato', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pg-filter-btn:hover {
          border-color: rgba(196,165,116,0.5);
          color: #C4A574;
        }

        .pg-filter-btn.active {
          background: #C4A574;
          color: #000;
          border-color: #C4A574;
        }

        /* Container */
        .pg-grid-container {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        /* Row 1: Split Views */
        .pg-split-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .pg-split-wrap {
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          overflow: hidden;
          background: #0a0a0a;
        }
        
        .pg-split-container {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          overflow: hidden;
          cursor: col-resize;
          user-select: none;
          background: #111; /* Fallback for missing images */
        }
        
        .pg-split-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }

        /* This overlay handles the clip-path for sliding effect */
        .pg-split-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none;
        }

        .pg-split-divider {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 2px;
          background: #C4A574;
          transform: translateX(-50%);
          pointer-events: none;
          z-index: 10;
        }

        .pg-split-handle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 36px;
          height: 36px;
          background: #C4A574;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.5);
          gap: 2px;
        }

        .pg-split-label {
          position: absolute;
          bottom: 16px;
          background: rgba(0,0,0,0.6);
          color: #fff;
          padding: 4px 12px;
          border-radius: 4px;
          font-family: 'Lato', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          pointer-events: none;
          backdrop-filter: blur(4px);
        }
        .pg-label-left { left: 16px; }
        .pg-label-right { right: 16px; }

        .pg-split-info {
          padding: 20px;
          background: #0a0a0a;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .pg-info-title {
          font-family: 'Arvo', serif;
          font-size: 1.1rem;
          color: #fff;
          margin: 0 0 6px 0;
        }

        .pg-info-cat {
          font-family: 'Lato', sans-serif;
          font-size: 0.75rem;
          color: #C4A574;
          font-weight: 600;
          letter-spacing: 1px;
        }

        /* Row 2: Standard Images */
        .pg-standard-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .pg-single-card {
          position: relative;
          aspect-ratio: 1/1;
          border-radius: 12px;
          overflow: hidden;
          background: #111;
          border: 1px solid rgba(255,255,255,0.05);
          group;
        }

        .pg-single-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .pg-single-card:hover .pg-single-img {
          transform: scale(1.08);
        }

        .pg-single-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 24px;
        }

        .pg-single-title {
          font-family: 'Arvo', serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 6px 0;
        }

        .pg-single-cat {
          font-family: 'Lato', sans-serif;
          font-size: 0.7rem;
          color: #C4A574;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        /* Mobile */
        @media (max-width: 900px) {
          .pg-split-row { grid-template-columns: 1fr; }
          .pg-standard-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .pg-section { padding: 80px 20px; }
          .pg-standard-grid { grid-template-columns: 1fr; gap: 16px; }
          .pg-split-container { aspect-ratio: 1/1; }
        }
      `}</style>
    </>
  );
};

export default PortfolioGrid;
