import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import CoreSkills from '../components/CoreSkills';
import PortfolioGrid from '../components/PortfolioGrid';
import Education from '../components/Education';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <CoreSkills />
      <PortfolioGrid />
      <Education />
      <ContactSection />
    </>
  );
};

export default Home;
