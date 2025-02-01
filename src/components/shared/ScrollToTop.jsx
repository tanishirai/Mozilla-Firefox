import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Track scroll position to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Show button after 300px of scrolling
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-4 w-12 h-12 rounded-lg shadow-lg bg-[#6633B5] flex items-center justify-center transform hover:scale-110 transition-transform duration-200"
        style={{
          color: 'white',
          fontSize: '26px',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Using FontAwesome icon from CDN */}
        <i class="fa-solid fa-arrow-up"></i>
      </button>
    )
  );
};

export default ScrollToTop;