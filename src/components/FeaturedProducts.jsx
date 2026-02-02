import React, { useState } from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const [formData, setFormData] = useState({
    dimensions: '',
    budget: '',
    delai: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    console.log('Formulaire soumis:', formData);
    alert('Votre demande de devis a été envoyée avec succès !');
  };

  return (
    <section className="featured-products">
      <div className="featured-products-container">
        <h2 className="featured-products-title">Produits mis en avant</h2>
        <p className="featured-products-subtitle">
          Découvrez notre sélection de pièces uniques, des créations sur-mesure 
          aux séries limitées, toutes réalisées avec passion et savoir-faire artisanal.
        </p>
        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="dimensions" className="form-label">Dimensions</label>
              <select
                id="dimensions"
                name="dimensions"
                value={formData.dimensions}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Sélectionnez...</option>
                <option value="petit">Petit (jusqu'à 50L)</option>
                <option value="moyen">Moyen (50L - 200L)</option>
                <option value="grand">Grand (200L - 500L)</option>
                <option value="tres-grand">Très grand (500L+)</option>
                <option value="sur-mesure">Sur-mesure</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="budget" className="form-label">Budget</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Sélectionnez...</option>
                <option value="1000-3000">1 000€ - 3 000€</option>
                <option value="3000-5000">3 000€ - 5 000€</option>
                <option value="5000-10000">5 000€ - 10 000€</option>
                <option value="10000+">10 000€ et plus</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="delai" className="form-label">Délai</label>
              <select
                id="delai"
                name="delai"
                value={formData.delai}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Sélectionnez...</option>
                <option value="urgent">Urgent (1-2 semaines)</option>
                <option value="normal">Normal (1-2 mois)</option>
                <option value="flexible">Flexible (3+ mois)</option>
              </select>
            </div>
          </div>
          <button type="submit" className="quote-button">
            Recevoir un devis
          </button>
        </form>
      </div>
    </section>
  );
};

export default FeaturedProducts;
