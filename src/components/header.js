// src/components/Header.js
import React from 'react';
import './header.css'; // Import the CSS file for styling

const Header = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault(); // Prevent default link behavior
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="header">
      <div className="header-link-group left">
        <a href="#home" onClick={(e) => scrollToSection(e, '#home')}>Home</a>
        <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a>
      </div>
      <img src="/logo.png" alt="Logo" className="logo" />
      <div className="header-link-group right">
        <a href="#purchase" onClick={(e) => scrollToSection(e, '#purchase')}>Purchase</a>
        <a href="#gallery" onClick={(e) => scrollToSection(e, '#gallery')}>Gallery</a>
      </div>
    </header>
  );
};

export default Header;
