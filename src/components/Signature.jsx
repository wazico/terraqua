import React from 'react';
import './Signature.css';

const Signature = () => {
  const features = [
    {
      icon: '🌿',
      title: 'Fait main',
      description: 'Chaque pièce est créée avec passion et savoir-faire artisanal'
    },
    {
      icon: '📸',
      title: 'Pièces uniques & séries limitées',
      description: 'Des créations exclusives pour des intérieurs d\'exception'
    },
    {
      icon: '📏',
      title: 'Sur-mesure',
      description: 'Adaptation parfaite à vos espaces et à vos besoins'
    },
    {
      icon: '👑',
      title: 'Série premium',
      description: 'Matériaux nobles et finitions d\'exception'
    },
    {
      icon: '💎',
      title: 'Finition premium',
      description: 'Détails soignés et qualité irréprochable'
    },
    {
      icon: '🌱',
      title: 'Conseil & agencement',
      description: 'Accompagnement personnalisé pour votre projet'
    },
    {
      icon: '💡',
      title: 'Conseil & conception',
      description: 'Expertise et créativité au service de vos idées'
    }
  ];

  return (
    <section className="signature">
      <div className="signature-container">
        <h2 className="signature-title">Notre signature</h2>
        <div className="signature-grid">
          {features.map((feature, index) => (
            <div key={index} className="signature-item">
              <div className="signature-icon">{feature.icon}</div>
              <h3 className="signature-item-title">{feature.title}</h3>
              <p className="signature-item-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Signature;
