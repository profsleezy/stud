import React from 'react';
import './App.css';
import Header from './components/header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PurchaseSection from './components/PurchaseSection.js'; 
import Gallery from './components/Gallery.js';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <PurchaseSection /> 
      <Gallery />
      <main>
        <h2>STUD ALL RIGHTS RESERVED.</h2>
        {/* Add more content here */}
      </main>
    </div>
  );
}

export default App;
