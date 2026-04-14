import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <>
      <footer className="ft-section">
        <div className="ft-container">
          
          {/* Bio Column */}
          <div className="ft-col ft-col-bio">
            <h3 className="ft-name">Muhammed Riyas</h3>
            <p className="ft-desc">
              Junior Interior Designer & CAD Draughtsman based in Dubai. Passionate about translating conceptual architecture into photorealistic visualizations and technically precise structural plans.
            </p>
          </div>

          {/* Links Column */}
          <div className="ft-col">
            <h4 className="ft-heading">NAVIGATION</h4>
            <ul className="ft-links">
              <li><a href="#about">About Me</a></li>
              <li><a href="#portfolio">Portfolio Grid</a></li>
              <li><a href="#experience">Experience Workflow</a></li>
              <li><a href="#software">Software Arsenal</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* HQ Column */}
          <div className="ft-col">
            <h4 className="ft-heading">HEADQUARTERS</h4>
            <ul className="ft-hq">
              <li>Al Quoz Industrial Area 4</li>
              <li>Dubai, United Arab Emirates</li>
              <li style={{ marginTop: '12px' }}>+971 50 167 5478</li>
              <li>muhammedriyas188@gmail.com</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="ft-bottom">
          <p>© {new Date().getFullYear()} Muhammed Riyas. Designed with Precision.</p>
        </div>
      </footer>

      <style>{`
        .ft-section {
          background: #050505;
          border-top: 1px solid rgba(196,165,116,0.15);
          padding: 80px 5% 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .ft-container {
          width: 100%;
          max-width: 1200px;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        .ft-col-bio {
          padding-right: 40px;
        }

        .ft-name {
          font-family: 'Arvo', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: #C4A574;
          margin: 0 0 16px 0;
          letter-spacing: 1px;
        }

        .ft-desc {
          font-family: 'Lato', sans-serif;
          font-size: 0.95rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.7;
          margin: 0;
          max-width: 400px;
        }

        .ft-heading {
          font-family: 'Lato', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: #fff;
          margin: 0 0 24px 0;
        }

        .ft-links, .ft-hq {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ft-links a {
          text-decoration: none;
          font-family: 'Lato', sans-serif;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
          transition: color 0.3s ease;
        }

        .ft-links a:hover {
          color: #C4A574;
        }

        .ft-hq li {
          font-family: 'Lato', sans-serif;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.5);
        }

        .ft-bottom {
          width: 100%;
          text-align: center;
          padding: 24px 0;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .ft-bottom p {
          font-family: 'Lato', sans-serif;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
          margin: 0;
          letter-spacing: 1px;
        }

        /* Mobile */
        @media (max-width: 900px) {
          .ft-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .ft-col-bio {
            padding-right: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
