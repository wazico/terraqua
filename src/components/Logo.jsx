import React from 'react';
import './Logo.css';

const Logo = ({ size = 'large' }) => {
  return (
    <div className={`logo-container logo-${size}`}>
      {/* On essaie d'abord d'utiliser l'image du logo si elle existe */}
      <img 
        src="/logo.png" 
        alt="TERRAQUA NATURE Logo" 
        className="logo-image"
        onError={(e) => {
          // Si l'image n'existe pas, on cache l'img et on affiche le SVG
          e.target.style.display = 'none';
          const svgFallback = e.target.nextElementSibling;
          if (svgFallback) {
            svgFallback.style.display = 'block';
          }
        }}
      />
      {/* SVG de fallback si l'image n'existe pas */}
      <svg
        style={{ display: 'none' }}
        viewBox="0 0 200 200"
        className="logo-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Pattern d'étoiles dorées */}
          <pattern id="stars" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
            <circle cx="7.5" cy="7.5" r="0.8" fill="#D4AF37" opacity="0.7" />
          </pattern>
          
          {/* Dégradé aquatique */}
          <linearGradient id="aquaticGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor:"#1a4a4a", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#2a8a8a", stopOpacity:1}} />
          </linearGradient>
          
          {/* Dégradé doré pour la bordure */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:"#F4D03F", stopOpacity:1}} />
            <stop offset="50%" style={{stopColor:"#D4AF37", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#B8941F", stopOpacity:1}} />
          </linearGradient>
          
          {/* Ombre pour la bordure */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Cercle extérieur doré épais et brillant */}
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="6"
          filter="url(#glow)"
        />
        
        {/* Ligne ondulée horizontale dorée (eau/horizon) */}
        <path
          d="M 25 100 Q 45 92, 65 100 T 105 100 T 145 100 T 175 100"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="2.5"
        />
        
        {/* Section supérieure - Terrestre */}
        {/* Fond teal/vert foncé avec étoiles */}
        <rect x="25" y="25" width="150" height="75" fill="#1a3a3a" />
        <rect x="25" y="25" width="150" height="75" fill="url(#stars)" />
        
        {/* Grande feuille Monstera gauche avec fenestrations */}
        <g className="monstera-left">
          <path
            d="M 55 35 Q 45 45, 50 60 Q 55 75, 65 70 Q 75 65, 80 55 Q 85 45, 80 38 Q 75 30, 65 30 Q 55 30, 55 35"
            fill="#D4AF37"
            stroke="#B8941F"
            strokeWidth="0.8"
          />
          {/* Fenestrations (trous) */}
          <ellipse cx="62" cy="50" rx="4" ry="6" fill="#1a3a3a" />
          <ellipse cx="70" cy="58" rx="3" ry="4" fill="#1a3a3a" />
          <ellipse cx="58" cy="62" rx="2.5" ry="3.5" fill="#1a3a3a" />
          {/* Veines */}
          <path d="M 55 35 Q 60 45, 65 55" stroke="#B8941F" strokeWidth="0.5" fill="none" />
          <path d="M 65 30 Q 70 40, 75 50" stroke="#B8941F" strokeWidth="0.5" fill="none" />
        </g>
        
        {/* Grande feuille Monstera droite avec fenestrations */}
        <g className="monstera-right">
          <path
            d="M 145 35 Q 135 45, 140 60 Q 145 75, 155 70 Q 165 65, 170 55 Q 175 45, 170 38 Q 165 30, 155 30 Q 145 30, 145 35"
            fill="#D4AF37"
            stroke="#B8941F"
            strokeWidth="0.8"
          />
          {/* Fenestrations */}
          <ellipse cx="152" cy="50" rx="4" ry="6" fill="#1a3a3a" />
          <ellipse cx="160" cy="58" rx="3" ry="4" fill="#1a3a3a" />
          <ellipse cx="148" cy="62" rx="2.5" ry="3.5" fill="#1a3a3a" />
          {/* Veines */}
          <path d="M 145 35 Q 150 45, 155 55" stroke="#B8941F" strokeWidth="0.5" fill="none" />
          <path d="M 155 30 Q 160 40, 165 50" stroke="#B8941F" strokeWidth="0.5" fill="none" />
        </g>
        
        {/* Petites feuilles et plantes tropicales */}
        <g className="small-leaves">
          <ellipse cx="42" cy="55" rx="7" ry="10" fill="#D4AF37" opacity="0.9" />
          <ellipse cx="158" cy="55" rx="7" ry="10" fill="#D4AF37" opacity="0.9" />
          <path d="M 85 50 Q 90 45, 95 50" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
          <path d="M 105 50 Q 110 45, 115 50" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
          <ellipse cx="75" cy="60" rx="5" ry="8" fill="#D4AF37" opacity="0.8" />
          <ellipse cx="125" cy="60" rx="5" ry="8" fill="#D4AF37" opacity="0.8" />
        </g>
        
        {/* Section inférieure - Aquatique */}
        {/* Fond avec dégradé teal foncé vers turquoise clair */}
        <rect x="25" y="100" width="150" height="75" fill="url(#aquaticGradient)" />
        <rect x="25" y="100" width="150" height="75" fill="url(#stars)" />
        
        {/* Poisson gauche (angelfish/discus) face droite */}
        <g className="fish-left">
          <ellipse cx="65" cy="125" rx="14" ry="10" fill="#D4AF37" />
          {/* Nageoires dorsale et ventrale */}
          <path d="M 65 115 Q 70 110, 75 115" stroke="#D4AF37" strokeWidth="2" fill="none" />
          <path d="M 65 135 Q 70 140, 75 135" stroke="#D4AF37" strokeWidth="2" fill="none" />
          {/* Nageoire caudale */}
          <path d="M 79 125 L 85 120 L 85 130 Z" fill="#1a4a4a" stroke="#D4AF37" strokeWidth="0.5" />
          {/* Nageoire pectorale */}
          <path d="M 58 125 Q 55 120, 52 125" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
          {/* Œil */}
          <circle cx="60" cy="123" r="2" fill="#1a4a4a" />
          <circle cx="60" cy="123" r="1" fill="#D4AF37" />
          {/* Détails teal sur les nageoires */}
          <path d="M 65 115 Q 70 110, 75 115" stroke="#1a4a4a" strokeWidth="1" fill="none" />
          <path d="M 65 135 Q 70 140, 75 135" stroke="#1a4a4a" strokeWidth="1" fill="none" />
        </g>
        
        {/* Poisson droit (angelfish/discus) face gauche */}
        <g className="fish-right">
          <ellipse cx="135" cy="125" rx="14" ry="10" fill="#D4AF37" />
          {/* Nageoires dorsale et ventrale */}
          <path d="M 135 115 Q 130 110, 125 115" stroke="#D4AF37" strokeWidth="2" fill="none" />
          <path d="M 135 135 Q 130 140, 125 135" stroke="#D4AF37" strokeWidth="2" fill="none" />
          {/* Nageoire caudale */}
          <path d="M 121 125 L 115 120 L 115 130 Z" fill="#1a4a4a" stroke="#D4AF37" strokeWidth="0.5" />
          {/* Nageoire pectorale */}
          <path d="M 142 125 Q 145 120, 148 125" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
          {/* Œil */}
          <circle cx="140" cy="123" r="2" fill="#1a4a4a" />
          <circle cx="140" cy="123" r="1" fill="#D4AF37" />
          {/* Détails teal sur les nageoires */}
          <path d="M 135 115 Q 130 110, 125 115" stroke="#1a4a4a" strokeWidth="1" fill="none" />
          <path d="M 135 135 Q 130 140, 125 135" stroke="#1a4a4a" strokeWidth="1" fill="none" />
        </g>
        
        {/* Plantes aquatiques stylisées */}
        <g className="aquatic-plants">
          {/* Plante gauche */}
          <path d="M 35 170 Q 38 155, 42 165 Q 45 150, 48 170" stroke="#D4AF37" strokeWidth="2" fill="none" />
          <path d="M 38 170 Q 40 160, 43 170" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
          <path d="M 45 170 Q 47 162, 50 170" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
          
          {/* Plante droite */}
          <path d="M 165 170 Q 162 155, 158 165 Q 155 150, 152 170" stroke="#D4AF37" strokeWidth="2" fill="none" />
          <path d="M 162 170 Q 160 160, 157 170" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
          <path d="M 155 170 Q 153 162, 150 170" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
          
          {/* Plante centrale */}
          <path d="M 95 170 Q 98 160, 100 170 Q 102 160, 105 170" stroke="#D4AF37" strokeWidth="1.5" fill="none" />
        </g>
        
        {/* Rochers/graviers dorés arrondis */}
        <g className="rocks">
          <circle cx="50" cy="175" r="4" fill="#D4AF37" opacity="0.8" />
          <circle cx="55" cy="178" r="3" fill="#D4AF37" opacity="0.7" />
          <circle cx="150" cy="175" r="4" fill="#D4AF37" opacity="0.8" />
          <circle cx="145" cy="178" r="3" fill="#D4AF37" opacity="0.7" />
          <circle cx="70" cy="177" r="2.5" fill="#D4AF37" opacity="0.6" />
          <circle cx="130" cy="177" r="2.5" fill="#D4AF37" opacity="0.6" />
          <circle cx="100" cy="178" r="2" fill="#D4AF37" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
