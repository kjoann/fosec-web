// src/pages/LandingPage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Features from '../components/Features';
import Home from '../components/Home';
import Contact from '../components/Contact';
import Services from '../components/Services';
import Footer from '../components/Footer';

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default LandingPage;
