// src/PurchaseSection.js

import React, { useEffect, useRef } from 'react';
import './PurchaseSection.css'; // Import the corresponding CSS file

const PurchaseSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation class when the element is in view
          entry.target.classList.add('animate');
        } else {
          // Remove animation class when the element is out of view
          entry.target.classList.remove('animate');
        }
      });
    }, options);

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.purchase-box, .long-rectangle, .header-text, .purchase-logo');
      elements.forEach(element => observer.observe(element));
    }

    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.purchase-box, .long-rectangle, .header-text, .purchase-logo');
        elements.forEach(element => observer.unobserve(element));
      }
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="section-divider">
        <div className="scroll-text">$STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD </div>
      </div>
      <section id="purchase"className="purchase-section">
        <div className="purchase-content">
          <h1 className="header-text">How to buy</h1>
          <img src="logo.png" alt="Logo" className="purchase-logo" />
          
          <div className="purchase-boxes">
            <div className="purchase-box left-box">
              <h2>Step 1</h2>
              <p>CREATE PHANTOM</p>
            </div>
            <div className="purchase-box middle-box">
              <h2>Step 2</h2>
              <p>GET SOME $SOL</p>
            </div>
            <div className="purchase-box right-box">
              <h2>Step 3</h2>
              <p>GET <span className="highlight">$STUD</span> HERE</p>
            </div>
          </div>
          
          <div className="long-rectangle">
            ADD CONTACT ADDRESS
          </div>
        </div>
      </section>
    </div>
  );
}

export default PurchaseSection;
