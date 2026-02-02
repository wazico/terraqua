import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import Signature from './components/Signature';
import FeaturedProducts from './components/FeaturedProducts';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductCategories />
      <Signature />
      <FeaturedProducts />
    </div>
  );
}

export default App;
