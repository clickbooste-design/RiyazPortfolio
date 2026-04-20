import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import CoreSkills from '../components/CoreSkills';
import SoftwareArsenal from '../components/SoftwareArsenal';
import PortfolioGrid from '../components/PortfolioGrid';
import Experience from '../components/Experience';
import Education from '../components/Education';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <PortfolioGrid limit={6} />
      <Experience />
      <Education />
      <CoreSkills />
      <SoftwareArsenal />
      <ContactSection />
    </>
  );
};

export default Home;
