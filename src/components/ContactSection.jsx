import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" style={{ padding: '100px 5%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '100px', alignItems: 'flex-start' }}>
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '2px' }}>CONTACT</span>
          <h2 style={{ fontSize: '3.5rem', marginTop: '10px', marginBottom: '40px', fontFamily: 'var(--font-heading)', lineHeight: 1.1 }}>
            I want to <span style={{ color: 'var(--accent-gold)' }}>hear from you.</span>
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ padding: '15px', backgroundColor: 'rgba(197, 160, 89, 0.1)', borderRadius: '12px', color: 'var(--accent-gold)' }}>
                <MapPin size={24} />
              </div>
              <div>
                <h4 style={{ color: 'white', fontSize: '1rem', marginBottom: '5px' }}>Location</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Al Quoz, Dubai, United Arab Emirates</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ padding: '15px', backgroundColor: 'rgba(197, 160, 89, 0.1)', borderRadius: '12px', color: 'var(--accent-gold)' }}>
                <Phone size={24} />
              </div>
              <div>
                <h4 style={{ color: 'white', fontSize: '1rem', marginBottom: '5px' }}>Phone</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>+971 50 167 5478</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ padding: '15px', backgroundColor: 'rgba(197, 160, 89, 0.1)', borderRadius: '12px', color: 'var(--accent-gold)' }}>
                <Mail size={24} />
              </div>
              <div>
                <h4 style={{ color: 'white', fontSize: '1rem', marginBottom: '5px' }}>Email</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>muhammedriyas188@gmail.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="glass"
          style={{ padding: '50px' }}
        >
          <form style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 700, letterSpacing: '1px' }}>YOUR NAME</label>
              <input 
                type="text" 
                placeholder="Muhammed Riyas"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '8px',
                  padding: '15px 20px',
                  color: 'white',
                  outline: 'none',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 700, letterSpacing: '1px' }}>EMAIL ADDRESS</label>
              <input 
                type="email" 
                placeholder="example@mail.com"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '8px',
                  padding: '15px 20px',
                  color: 'white',
                  outline: 'none',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <label style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 700, letterSpacing: '1px' }}>MESSAGE</label>
              <textarea 
                rows="5"
                placeholder="Tell me about your project..."
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '8px',
                  padding: '15px 20px',
                  color: 'white',
                  outline: 'none',
                  fontSize: '1rem',
                  resize: 'none'
                }}
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: 'var(--gold-glow)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                backgroundColor: 'var(--accent-gold)',
                color: 'var(--bg-color)',
                border: 'none',
                padding: '18px',
                borderRadius: '8px',
                fontWeight: 800,
                letterSpacing: '2px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                marginTop: '10px'
              }}
            >
              SEND MESSAGE <Send size={18} />
            </motion.button>
          </form>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          #contact div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
