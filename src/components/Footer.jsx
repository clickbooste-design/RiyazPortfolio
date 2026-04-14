import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ 
      backgroundColor: '#050505', 
      padding: '80px 5% 40px', 
      borderTop: '1px solid var(--glass-border)' 
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '60px',
        marginBottom: '80px'
      }}>
        {/* Branding & SEO */}
        <div style={{ maxWidth: '400px' }}>
          <h2 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: '1.8rem', 
            color: 'var(--accent-gold)', 
            marginBottom: '20px' 
          }}>
            MUHAMMED RIYAS
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '25px' }}>
            Top Interior Designer and CAD Draughtsman based in Al Quoz, Dubai. Specializing in luxury residential interiors, functional corporate office design, and high-fidelity 3D visualization. Transforming Dubai's spaces from blueprint to reality.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {[
              { icon: <ExternalLink size={20} />, link: "#" },
              { icon: <ExternalLink size={20} />, link: "#" },
              { icon: <Mail size={20} />, link: "mailto:muhammedriyas188@gmail.com" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                whileHover={{ scale: 1.2, color: 'var(--accent-gold)' }}
                style={{ color: 'var(--text-secondary)', transition: 'color 0.3s ease' }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ color: 'white', marginBottom: '25px', letterSpacing: '2px', fontSize: '0.9rem' }}>NAVIGATION</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {['About', 'Portfolio', 'Experience', 'Contact'].map((item) => (
              <li key={item} style={{ marginBottom: '12px' }}>
                <a href={`/#${item.toLowerCase()}`} style={{ 
                  color: 'var(--text-secondary)', 
                  textDecoration: 'none', 
                  fontSize: '0.9rem',
                  transition: 'color 0.3s ease'
                }} className="footer-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info optimized for GEO */}
        <div>
          <h4 style={{ color: 'white', marginBottom: '25px', letterSpacing: '2px', fontSize: '0.9rem' }}>HEADQUARTERS</h4>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '10px' }}>Al Quoz Industrial Area 4</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '20px' }}>Dubai, United Arab Emirates</p>
          <p style={{ color: 'var(--accent-gold)', fontSize: '1rem', fontWeight: 700 }}>+971 50 167 5478</p>
        </div>
      </div>

      <div style={{ 
        borderTop: '1px solid var(--glass-border)', 
        paddingTop: '40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <p style={{ color: '#444', fontSize: '0.8rem' }}>
          &copy; {new Date().getFullYear()} Muhammed Riyas. All rights reserved. Designed with Precision.
        </p>
        
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-gold)', color: 'var(--bg-color)' }}
          style={{
            background: 'none',
            border: '1px solid var(--accent-gold)',
            color: 'var(--accent-gold)',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>

      <style>{`
        .footer-link:hover { color: var(--accent-gold) !important; }
      `}</style>
    </footer>
  );
};

export default Footer;
