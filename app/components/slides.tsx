'use client'
import { useState, useEffect } from 'react';
const Slideshow = () => {
  const images = [
    '/pic1.jpg',
    '/pic2.jpg',
    '/pic3.jpg',
    '/pic4.jpg',
    '/pic5.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Auto slide feature: change slide every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 2000); // 3000ms = 3 seconds

    // Cleanup interval when component is unmounted
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Slide Image */}
      <img
        src={images[currentIndex]}
        alt="CV Preview"
        className="w-full h-auto rounded-lg shadow-lg transition duration-500 ease-in-out transform"
      />
    </div>
  );
};

export default Slideshow;
