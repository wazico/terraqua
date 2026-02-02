import React from 'react';
import Logo from './Logo';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo-section">
          <Logo size="small" />
          <div className="header-brand">
            <h1 className="brand-name">TERRAQUA</h1>
            <div className="brand-subtitle">
              <span className="line"></span>
              <span className="subtitle-text">NATURE</span>
              <span className="line"></span>
            </div>
          </div>
        </div>
        <nav className="header-nav">
          <a href="#meubles" className="nav-link">Meubles aquarium</a>
          <a href="#aquariums" className="nav-link">Aquariums & terrariums</a>
          <a href="#tableaux" className="nav-link">Tableaux & art mural</a>
          <a href="#sur-mesure" className="nav-link">Sur-mesure</a>
          <a href="#apropos" className="nav-link">À propos</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
