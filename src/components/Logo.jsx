import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ variant = 'monogram', className = '', style = {} }) => {
  // Concept 1: The "Floating Monogram" (MR Initials)
  // Accent color: Cosmic Purple (#6200EA) to Cyan (#00E5FF)
  if (variant === 'monogram') {
    return (
      <div className={`logo-container ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', ...style }}>
        <svg width="34" height="34" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main M structure - geometric and sharp */}
          <path
            d="M20 80 V25 L50 55 L80 25 V80"
            stroke="url(#CosmicCyanGlow)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Floating Accent (Underline) */}
          <motion.path
            d="M30 90 L70 90"
            stroke="#00E5FF"
            strokeWidth="4"
            strokeLinecap="round"
            animate={{ opacity: [0.4, 1, 0.4], scaleX: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: 'drop-shadow(0px 0px 8px rgba(0, 229, 255, 0.8))' }}
          />
          <defs>
            <linearGradient id="CosmicCyanGlow" x1="20" y1="80" x2="80" y2="25" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6200EA" />
              <stop offset="1" stopColor="#00E5FF" />
            </linearGradient>
          </defs>
        </svg>
        <span style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, letterSpacing: '2px', fontSize: '1.1rem', color: '#fff', textTransform: 'uppercase' }}>
          Muhammed <span style={{ color: '#00E5FF' }}>Riyas</span>
        </span>
      </div>
    );
  }

  // Concept 2: The "Structural Cube" (Architectural/Technical)
  // Monochrome Slate (#263238), Electric Lime (#AEEA00)
  if (variant === 'cube') {
    return (
      <div className={`logo-container ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', ...style }}>
        <svg width="34" height="34" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 85 L25 70 L25 40 L50 55 L75 40 L75 70 Z" fill="#263238" stroke="#37474F" strokeWidth="2.5" />
          <path d="M50 85 L50 55" stroke="#37474F" strokeWidth="2.5" />
          <path d="M25 40 L50 55 L75 40" stroke="#37474F" strokeWidth="2.5" />

          <motion.path
            d="M50 35 L25 20 L50 5 L75 20 Z"
            fill="#263238"
            stroke="#AEEA00"
            strokeWidth="2.5"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: 'drop-shadow(0px 6px 12px rgba(174, 234, 0, 0.3))' }}
          />
        </svg>
        <span style={{ fontFamily: "'Michroma', sans-serif", fontWeight: 400, letterSpacing: '2px', fontSize: '0.95rem', color: '#fff', textTransform: 'uppercase' }}>
          Muhammed <span style={{ color: '#AEEA00' }}>Riyas</span>
        </span>
      </div>
    );
  }

  // Concept 3: The "Ascension Vector" (Modern Portfolio Style)
  // Metallic Silver (#B0BEC5), Deep Sky Blue (#00B0FF)
  if (variant === 'vector') {
    return (
      <div className={`logo-container ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', ...style }}>
        <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="#1a1a1a" stroke="#B0BEC5" strokeWidth="2" />
          <motion.path
            d="M 25 65 Q 50 65 75 35 M 25 50 Q 50 50 75 25"
            stroke="#00B0FF"
            strokeWidth="6"
            strokeLinecap="round"
            animate={{ pathLength: [0.8, 1, 0.8], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
        <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, letterSpacing: '3px', fontSize: '1.1rem', color: '#B0BEC5', textTransform: 'uppercase' }}>
          Muhammed <span style={{ color: '#00B0FF', fontWeight: 600 }}>Riyas</span>
        </span>
      </div>
    );
  }

  return null;
};

export default Logo;