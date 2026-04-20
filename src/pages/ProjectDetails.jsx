import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PortfolioGrid from '../components/PortfolioGrid';

const ProjectArchive = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="archive-page">
      {/* --- CINEMATIC HERO --- */}
      <section className="archive-hero">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hero-container"
        >
          <Link to="/" className="back-to-home">
            <ChevronLeft size={16} /> BACK TO HOME
          </Link>
          <h1 className="archive-title">
            PROJECT <span className="accent">ARCHIVE</span>
          </h1>
          <p className="archive-subtitle">
            A comprehensive catalog of interior design solutions, from ergonomic workstation arrays to photorealistic residential visualizations.
          </p>
        </motion.div>
      </section>

      {/* --- THE GRID --- */}
      {/* We use PortfolioGrid without a limit to show everything */}
      <PortfolioGrid />

      {/* --- CTA SECTION --- */}
      <section className="archive-cta">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="cta-content"
        >
          <h2>Transform your vision into <span className="accent">Reality.</span></h2>
          <a href="mailto:muhammedriyas188@gmail.com" className="cta-button">
            START A PROJECT <ArrowRight size={18} />
          </a>
        </motion.div>
      </section>

      <style jsx>{`
        .archive-page {
          background: #0a0a0a;
          color: white;
          min-height: 100vh;
        }

        .archive-hero {
          min-height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 100px 5% 40px;
          background: radial-gradient(circle at center, rgba(196, 165, 116, 0.05) 0%, transparent 70%);
        }

        .hero-container {
          max-width: 900px;
        }

        .back-to-home {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: #C4A574;
          font-size: 0.85rem;
          margin-bottom: 40px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          transition: 0.3s;
        }

        .back-to-home:hover {
          color: white;
          transform: translateX(-5px);
        }

        .archive-title {
          font-family: 'Arvo', serif;
          font-size: clamp(3rem, 8vw, 6rem);
          line-height: 1;
          margin-bottom: 20px;
        }

        .archive-title .accent {
          color: #C4A574;
        }

        .archive-subtitle {
          color: rgba(255,255,255,0.6);
          font-size: 1.2rem;
          line-height: 1.6;
          max-width: 700px;
          margin: 0 auto;
        }

        /* CTA Section */
        .archive-cta {
          padding: 150px 0;
          text-align: center;
          background: linear-gradient(to top, #050505, transparent);
        }

        .cta-content h2 {
          font-family: 'Arvo', serif;
          font-size: 2.5rem;
          margin-bottom: 40px;
        }

        .cta-content .accent {
          color: #C4A574;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 15px;
          padding: 22px 60px;
          background-color: #C4A574;
          color: #000;
          text-decoration: none;
          font-weight: 800;
          font-size: 0.9rem;
          letter-spacing: 3px;
          border-radius: 50px;
          transition: 0.4s;
        }

        .cta-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(196, 165, 116, 0.3);
        }

        @media (max-width: 768px) {
          .archive-title {
            font-size: 3.5rem;
          }
          .archive-cta {
            padding: 80px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectArchive;

