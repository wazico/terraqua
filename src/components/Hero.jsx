import React from 'react';
import Logo from './Logo';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <Logo size="large" />
        <div className="hero-brand">
          <h1 className="hero-brand-name">TERRAQUA</h1>
          <div className="hero-brand-subtitle">
            <span className="line"></span>
            <span className="subtitle-text">NATURE</span>
            <span className="line"></span>
          </div>
        </div>
        <p className="hero-tagline">
          Mobilier d'aquarium & créations murales - design inspiré du vivant
        </p>
        <div className="hero-buttons">
          <button className="hero-button hero-button-primary">
            Découvrir la collection
          </button>
          <button className="hero-button hero-button-secondary">
            Demander un projet sur-mesure
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
