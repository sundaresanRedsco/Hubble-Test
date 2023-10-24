import React, { useEffect, useRef } from 'react';
import './VerticalCardScroll.css';

const VerticalCardScroll = () => {
  const cardSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const cardSection = cardSectionRef.current;
      const scrollPosition = window.scrollY;
      const cardSectionHeight = cardSection.clientHeight;
      let yOffset = scrollPosition * 0.3;

      if (scrollPosition <= cardSectionHeight) {
        if (scrollPosition < cardSectionHeight / 3) {
          // First third: First card is fixed, second card scrolls
          cardSection.style.transform = `translateY(${-yOffset}px)`;
        } else if (scrollPosition < (2 * cardSectionHeight) / 3) {
          // Second third: Second card is fixed, third card scrolls
          yOffset = (scrollPosition - cardSectionHeight / 3) * 0.3;
          cardSection.style.transform = `translateY(${-yOffset}px)`;
        } else {
          // Final third: Second card is fixed, and third card continues to scroll
          yOffset = (2 * cardSectionHeight) / 3 * 0.3;
          cardSection.style.transform = `translateY(${-yOffset}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="vertical-scroll-container">
      <div className="card-section" ref={cardSectionRef}>
        <div className="card fixed-card">Card 1</div>
        <div className="card scrolling-card">Card 2</div>
        <div className="card fixed-card">Card 3</div>
      </div>
      <div className="content-section">
        {/* Content after the initial cards */}
      </div>
    </div>
  );
};

export default VerticalCardScroll;
