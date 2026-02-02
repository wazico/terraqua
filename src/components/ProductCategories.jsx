import React from 'react';
import './ProductCategories.css';

const ProductCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Meubles d'aquarium",
      description: "Des meubles sur-mesure pour mettre en valeur vos aquariums. Design moderne et fonctionnel, fabriqués avec des matériaux de qualité supérieure.",
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=400&fit=crop",
      buttonText: "Voir les œuvres"
    },
    {
      id: 2,
      title: "Aquariums & terrariums",
      titleFull: "Aquariums & terrariums",
      description: "Créations uniques et sur-mesure pour vos projets aquatiques et terrestres. Design innovant et respectueux de l'environnement.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
      buttonText: "Voir les œuvres"
    },
    {
      id: 3,
      title: "Tableaux & panneaux bois",
      description: "Œuvres d'art murales en bois sculpté. Pièces uniques inspirées de la nature, créées avec passion et savoir-faire artisanal.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      buttonText: "Voir les œuvres"
    }
  ];

  return (
    <section className="product-categories">
      <div className="categories-container">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <div className="category-image-wrapper">
              <img 
                src={category.image} 
                alt={category.title}
                className="category-image"
              />
              <div className="category-overlay"></div>
            </div>
            <div className="category-content">
              <h3 className="category-title">{category.title}</h3>
              <p className="category-description">{category.description}</p>
              <button className="category-button">
                {category.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
