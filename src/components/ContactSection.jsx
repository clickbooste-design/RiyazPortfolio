import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <>
      <section id="contact" ref={ref} className="ct-section">
        <motion.div
          className="ct-heading-block"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="ct-eyebrow">Connect</span>
          <h2 className="ct-heading">I want to hear from you.</h2>
          <div className="ct-rule" />
        </motion.div>

        <div className="ct-container">
          {/* Left Column: Info */}
          <motion.div 
            className="ct-info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="ct-info-item">
              <div className="ct-icon-wrap"><MapPin size={20} color="#C4A574" /></div>
              <div>
                <h4 className="ct-info-title">Location</h4>
                <p className="ct-info-desc">Al Quoz, Dubai<br/>United Arab Emirates</p>
              </div>
            </div>

            <div className="ct-info-item">
              <div className="ct-icon-wrap"><Phone size={20} color="#C4A574" /></div>
              <div>
                <h4 className="ct-info-title">Phone</h4>
                <p className="ct-info-desc">+971 50 167 5478</p>
              </div>
            </div>

            <div className="ct-info-item">
              <div className="ct-icon-wrap"><Mail size={20} color="#C4A574" /></div>
              <div>
                <h4 className="ct-info-title">Email</h4>
                <p className="ct-info-desc">muhammedriyas188@gmail.com</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            className="ct-form-wrap"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="ct-form">
              <div className="ct-form-group">
                <label className="ct-label">YOUR NAME</label>
                <input type="text" className="ct-input" placeholder="John Doe" required />
              </div>
              <div className="ct-form-group">
                <label className="ct-label">EMAIL ADDRESS</label>
                <input type="email" className="ct-input" placeholder="john@example.com" required />
              </div>
              <div className="ct-form-group">
                <label className="ct-label">MESSAGE</label>
                <textarea className="ct-input ct-textarea" placeholder="How can I help you?" rows={5} required></textarea>
              </div>
              <button type="submit" className="ct-submit">SEND MESSAGE</button>
            </form>
          </motion.div>
        </div>
      </section>

      <style>{`
        .ct-section {
          background: #0d0d0d;
          padding: 100px 5%;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
        }

        .ct-heading-block {
          text-align: center;
          margin-bottom: 60px;
        }

        .ct-eyebrow {
          display: block;
          font-family: 'Lato', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #C4A574;
          margin-bottom: 14px;
        }

        .ct-heading {
          font-family: 'Arvo', serif;
          font-size: clamp(2.2rem, 5vw, 4rem);
          font-weight: 700;
          color: #fff;
          margin: 0;
          line-height: 1.1;
        }

        .ct-rule {
          width: 50px;
          height: 2px;
          background: #C4A574;
          margin: 20px auto 0;
        }

        .ct-container {
          width: 100%;
          max-width: 1000px;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 60px;
          align-items: start;
        }

        /* Info Column */
        .ct-info {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .ct-info-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 24px;
          border-radius: 8px;
        }

        .ct-icon-wrap {
          width: 44px;
          height: 44px;
          background: rgba(196,165,116,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .ct-info-title {
          font-family: 'Arvo', serif;
          font-size: 1.1rem;
          color: #fff;
          margin: 0 0 6px 0;
        }

        .ct-info-desc {
          font-family: 'Lato', sans-serif;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
          margin: 0;
          line-height: 1.5;
        }

        /* Form Column */
        .ct-form-wrap {
          background: #111;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 40px;
        }

        .ct-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .ct-form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ct-label {
          font-family: 'Lato', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: rgba(255,255,255,0.8);
        }

        .ct-input {
          background: #1a1a1a;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 6px;
          padding: 14px 16px;
          font-family: 'Lato', sans-serif;
          font-size: 0.95rem;
          color: #fff;
          outline: none;
          transition: border-color 0.3s ease;
        }
        .ct-input:focus {
          border-color: #C4A574;
        }

        .ct-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .ct-submit {
          font-family: 'Lato', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #000;
          background: #C4A574;
          border: none;
          border-radius: 6px;
          padding: 16px;
          cursor: pointer;
          margin-top: 10px;
          transition: background 0.3s ease;
        }

        .ct-submit:hover {
          background: #d4b584;
        }

        /* Mobile */
        @media (max-width: 900px) {
          .ct-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .ct-form-wrap {
            padding: 30px 20px;
          }
        }
      `}</style>
    </>
  );
};

export default ContactSection;
