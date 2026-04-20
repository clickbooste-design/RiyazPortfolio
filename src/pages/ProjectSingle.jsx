import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ArrowRight, Home, Calendar, Tag, ShieldCheck } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectSingle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="error-page">
        <h2>Project Not Found</h2>
        <Link to="/projects">Back to Archive</Link>
      </div>
    );
  }

  // Find next project for the "Next" button
  const currentIndex = projects.findIndex(p => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="single-project-page">
      {/* --- HERO SECTION --- */}
      <section className="project-hero">
        <motion.div 
          className="hero-image-container"
          initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={project.src} alt={project.title} className="hero-img" />
          <div className="hero-overlay"></div>
        </motion.div>

        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Link to="/projects" className="back-link">
              <ChevronLeft size={18} /> BACK TO ARCHIVE
            </Link>
            <span className="project-category">{project.category}</span>
            <h1 className="project-title">{project.title}</h1>
          </motion.div>
        </div>
      </section>

      {/* --- PROJECT INFO SECTION --- */}
      <section className="project-info">
        <div className="container">
          <div className="info-grid">
            <motion.div 
              className="info-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="info-heading">Project Overview</h2>
              <p className="description">{project.description}</p>
              
              <div className="meta-grid">
                <div className="meta-item">
                  <Tag className="meta-icon" />
                  <div>
                    <span className="meta-label">Category</span>
                    <span className="meta-value">{project.category}</span>
                  </div>
                </div>
                <div className="meta-item">
                  <Calendar className="meta-icon" />
                  <div>
                    <span className="meta-label">Completion</span>
                    <span className="meta-value">2023 - 2024</span>
                  </div>
                </div>
                <div className="meta-item">
                  <ShieldCheck className="meta-icon" />
                  <div>
                    <span className="meta-label">Status</span>
                    <span className="meta-value">Delivered</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="info-sidebar"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="sidebar-card">
                <h3>Technical Excellence</h3>
                <ul>
                  <li>Precision CAD Drafting</li>
                  <li>3D Photorealistic Rendering</li>
                  <li>Material & Texture Selection</li>
                  <li>Ergonomic Space Planning</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- VISION SECTION --- */}
      <section className="vision-section">
        <div className="container">
           <motion.div 
            className="vision-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
           >
             <div className="vision-text">
                <h3>The Design Philosophy</h3>
                <p>
                  Every project is a balance of aesthetics and functionality. For {project.title}, 
                  we focused on creating an environment that breathes—utilizing light, texture, 
                  and spatial flow to enhance the user experience.
                </p>
             </div>
             <img src={project.src} alt="Detail view" className="vision-img" />
           </motion.div>
        </div>
      </section>

      {/* --- NEXT PROJECT CTA --- */}
      <section className="next-project">
        <Link to={`/project/${nextProject.id}`} className="next-link">
          <div className="next-content">
            <span className="next-eyebrow">VIEW NEXT PROJECT</span>
            <h2 className="next-title">{nextProject.title}</h2>
            <div className="next-arrow">
              <ArrowRight size={32} />
            </div>
          </div>
          <div className="next-image-bg">
            <img src={nextProject.src} alt="Next project" />
          </div>
        </Link>
      </section>

      <style jsx>{`
        .single-project-page {
          background: #050505;
          color: #fff;
          min-height: 100vh;
          font-family: 'Lato', sans-serif;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5%;
        }

        /* Hero Styles */
        .project-hero {
          position: relative;
          height: 90vh;
          width: 100%;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }

        .hero-image-container {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.7);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, #050505 0%, transparent 50%, rgba(0,0,0,0.3) 100%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 5% 80px;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #C4A574;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 2px;
          margin-bottom: 30px;
          transition: 0.3s;
        }

        .back-link:hover {
          color: #fff;
          transform: translateX(-5px);
        }

        .project-category {
          display: block;
          color: #C4A574;
          font-size: 0.9rem;
          font-weight: 800;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .project-title {
          font-family: 'Arvo', serif;
          font-size: clamp(3rem, 10vw, 6rem);
          line-height: 1;
          margin: 0;
          color: #fff;
        }

        /* Info Section */
        .project-info {
          padding: 120px 0;
        }

        .info-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 100px;
          align-items: flex-start;
        }

        .info-heading {
          font-family: 'Arvo', serif;
          font-size: 2.5rem;
          margin-bottom: 30px;
          color: #C4A574;
        }

        .description {
          font-size: 1.25rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.7);
          margin-bottom: 60px;
        }

        .meta-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
        }

        .meta-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .meta-icon {
          color: #C4A574;
          flex-shrink: 0;
        }

        .meta-label {
          display: block;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.4);
          margin-bottom: 5px;
        }

        .meta-value {
          font-weight: 700;
          font-size: 1rem;
        }

        /* Sidebar */
        .sidebar-card {
          background: #111;
          padding: 50px;
          border: 1px solid rgba(196,165,116,0.1);
          border-radius: 12px;
        }

        .sidebar-card h3 {
          font-family: 'Arvo', serif;
          font-size: 1.5rem;
          margin-bottom: 25px;
          color: #C4A574;
        }

        .sidebar-card ul {
          list-style: none;
          padding: 0;
        }

        .sidebar-card li {
          margin-bottom: 15px;
          color: rgba(255,255,255,0.8);
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .sidebar-card li::before {
          content: '→';
          color: #C4A574;
        }

        /* Vision Section */
        .vision-section {
          padding-bottom: 120px;
        }

        .vision-card {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          background: #111;
          border-radius: 20px;
          overflow: hidden;
        }

        .vision-text {
          padding: 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .vision-text h3 {
          font-family: 'Arvo', serif;
          font-size: 2rem;
          margin-bottom: 25px;
          color: #C4A574;
        }

        .vision-text p {
          font-size: 1.1rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.6);
        }

        .vision-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Next Project Link */
        .next-project {
          position: relative;
          height: 50vh;
          overflow: hidden;
        }

        .next-link {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          text-decoration: none;
          z-index: 1;
        }

        .next-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 5%;
        }

        .next-eyebrow {
          display: block;
          color: #C4A574;
          font-weight: 800;
          font-size: 0.9rem;
          letter-spacing: 5px;
          margin-bottom: 20px;
        }

        .next-title {
          font-family: 'Arvo', serif;
          font-size: clamp(2.5rem, 6vw, 4rem);
          color: #fff;
          margin-bottom: 30px;
          transition: 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .next-arrow {
          color: #C4A574;
          transition: 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .next-image-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          transition: 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .next-image-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.3);
          transform: scale(1);
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .next-link:hover .next-image-bg img {
          transform: scale(1.1);
          filter: brightness(0.5);
        }

        .next-link:hover .next-title {
          color: #C4A574;
          transform: scale(1.05);
        }

        .next-link:hover .next-arrow {
          transform: translateX(10px);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .info-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .vision-card {
            grid-template-columns: 1fr;
          }
           .vision-text {
            padding: 50px;
          }
          .vision-img {
            height: 400px;
          }
        }

        @media (max-width: 768px) {
          .project-hero {
            height: 70vh;
          }
          .project-title {
            font-size: 3.5rem;
          }
          .info-heading {
            font-size: 2rem;
          }
          .sidebar-card {
            padding: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectSingle;
