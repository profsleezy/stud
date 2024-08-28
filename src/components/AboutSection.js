import React, { useEffect, useRef, useState } from 'react';
import './AboutSection.css'; // Import the corresponding CSS file

const AboutSection = () => {
  const [isInView, setIsInView] = useState(false);
  const aboutTextRef = useRef(null);
  const aboutImageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust this threshold as needed
    );

    if (aboutTextRef.current) {
      observer.observe(aboutTextRef.current);
    }
    if (aboutImageRef.current) {
      observer.observe(aboutImageRef.current);
    }

    return () => {
      if (aboutTextRef.current) {
        observer.unobserve(aboutTextRef.current);
      }
      if (aboutImageRef.current) {
        observer.unobserve(aboutImageRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div 
          className={`about-text ${isInView ? 'in-view' : ''}`}
          ref={aboutTextRef}
        >
          <h1>About:</h1>
          <p>
          Our Solana STUD lived a pretty trashy life, working 9-5,
          living pay check to pay check, until one day, he found his way out of the matrix.
          Join the STUD army to learn how he manged to escape the matrix so you can too. 
          He'll share his journey ups and downs, and his secrets and life style!
          </p>
        </div>
        <div 
          className={`about-image ${isInView ? 'in-view' : ''}`}
          ref={aboutImageRef}
        >
          <img src="section.png" alt="About Us" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
