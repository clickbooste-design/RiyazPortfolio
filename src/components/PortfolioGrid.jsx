import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Portfolio = ({ limit = null }) => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'OFFICE FURNITURE', 'RESIDENTIAL', 'COMMERCIAL', 'KITCHEN DESIGN', 'DETAILED-DRAWING'];

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  // Apply limit if provided
  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">

        {/* --- SECTION HEADING --- */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Expertise in Interior & CAD</span>
          <h2 className="heading">{limit ? 'Featured Projects' : 'Project Archive'}</h2>
          <div className="accent-line"></div>
        </motion.div>

        {/* --- FILTER NAVIGATION --- */}
        <div className="filter-nav">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- RESPONSIVE 3-COLUMN GRID --- */}
        <motion.div
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode='popLayout'>
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                className="portfolio-card"
              >
                <Link to={`/project/${project.id}`} className="image-box">
                  <img src={project.src} alt={project.title} />
                  <div className="hover-overlay">
                    <span className="project-cat">{project.category}</span>
                    <h3 className="project-title">{project.title}</h3>
                    <div className="view-btn">View Details ↗</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- VIEW ALL BUTTON (Only visible if limit is set) --- */}
        {limit && projects.length > limit && (
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link to="/projects" className="explore-more-btn">
              Explore All Projects
            </Link>
          </div>
        )}

      </div>

      <style jsx>{`
        .portfolio-section {
          background: #0a0a0a;
          padding: 120px 5%;
          min-height: 100vh;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Heading Styles */
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .eyebrow {
          color: #C4A574;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
        }

        .heading {
          font-family: 'Arvo', serif;
          font-size: clamp(2.5rem, 6vw, 4rem);
          color: #fff;
          margin: 15px 0;
        }

        .accent-line {
          width: 60px;
          height: 3px;
          background: #C4A574;
          margin: 0 auto;
        }

        /* Filter Styles */
        .filter-nav {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 80px;
        }

        .filter-btn {
          background: transparent;
          border: 1px solid rgba(196,165,116,0.3);
          color: rgba(255,255,255,0.7);
          padding: 10px 22px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
        }

        .filter-btn.active, .filter-btn:hover {
          background: #C4A574;
          color: #000;
          border-color: #C4A574;
        }

        /* Grid System (3 Columns Desktop) */
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .portfolio-card {
          position: relative;
          background: #151515;
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 1/1;
        }

        .image-box {
          width: 100%;
          height: 100%;
          position: relative;
          display: block;
          text-decoration: none;
        }

        .image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .hover-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 70%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 30px;
          opacity: 0.8;
          transition: 0.4s ease;
        }

        /* Hover Effects */
        .portfolio-card:hover img {
          transform: scale(1.1);
        }

        .portfolio-card:hover .hover-overlay {
          background: linear-gradient(to top, rgba(196,165,116,0.95) 0%, rgba(0,0,0,0.4) 100%);
          opacity: 1;
        }

        .project-cat {
          color: #C4A574;
          font-size: 0.7rem;
          font-weight: 800;
          margin-bottom: 8px;
          transition: 0.3s;
        }

        .project-title {
          color: #fff;
          font-family: 'Arvo', serif;
          font-size: 1.4rem;
          margin-bottom: 15px;
          transition: 0.3s;
        }

        .view-btn {
          color: #fff;
          font-size: 0.75rem;
          font-weight: 700;
          opacity: 0;
          transform: translateY(10px);
          transition: 0.4s;
        }

        .portfolio-card:hover .project-cat, 
        .portfolio-card:hover .project-title,
        .portfolio-card:hover .view-btn {
          color: #000;
          opacity: 1;
          transform: translateY(0);
        }

        .explore-more-btn {
          display: inline-block;
          padding: 15px 40px;
          background: transparent;
          border: 1px solid #C4A574;
          color: #C4A574;
          text-transform: uppercase;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 2px;
          text-decoration: none;
          border-radius: 4px;
          transition: all 0.4s ease;
        }

        .explore-more-btn:hover {
          background: #C4A574;
          color: #000;
        }

        /* --- RESPONSIVE MEDIA QUERIES --- */
        
        /* Tablet: 2 Columns */
        @media (max-width: 1024px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        /* Mobile: 1 Column */
        @media (max-width: 650px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
          }
          .portfolio-card {
            aspect-ratio: 4/3;
          }
          .heading {
            font-size: 2.2rem;
          }
          .portfolio-section {
            padding: 80px 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio;