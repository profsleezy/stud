// src/components/Gallery.js
import React, { useState, useEffect } from 'react';
import './Gallery.css'; // Import the CSS file for styling

const images = [
  { src: 'image1.png', caption: 'Caption for Image 1' },
  { src: 'image2.png', caption: 'Caption for Image 2' },
  { src: 'image3.png', caption: 'Caption for Image 3' },
  { src: 'image4.png', caption: 'Caption for Image 4' },
  { src: 'image5.png', caption: 'Caption for Image 5' },
  // Add more image paths and captions as needed
];

const endImage = 'end-image.png'; // Path to the end image

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
      const interval = setInterval(handleNext, 5000); // Change image every 5 seconds
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
      <div id="gallery" className="gallery">
        <div className="section-divider">
          <div className="scroll-text">$STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD $STUD</div>
        </div>
        <h1>Gallery</h1>
        <div className="gallery-container">
          <button className="arrow left-arrow" onClick={handlePrevious}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19l-7-7 7-7" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="image-wrapper">
            <img src={images[currentIndex].src} alt="Gallery" className="gallery-image"/>
            <p className="image-caption">{images[currentIndex].caption}</p>
          </div>
          <button className="arrow right-arrow" onClick={handleNext}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5l7 7-7 7" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <img src="bottom-image.png" alt="End of Page" className="end-image" />
      </div>
    );
};

export default Gallery;
