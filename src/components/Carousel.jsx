import React, { useState, useEffect } from 'react';
import items from './carouselItems';
import CarouselCard from './CarouselCard';
import "./Carousel.css";
const Carousel = () => {
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const Items = [
    items[items.length - 1],
    ...items,
    items[0],
  ];
  const handleNext = () => {
    setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIndex((prev) => prev - 1);
  };
  const handleTransitionEnd = () => {
    if (index === Items.length - 1) {
      // Reached fake first, jump to real first
      setTransition(false);
      setIndex(1);
    } else if (index === 0) {
      // Reached fake last, jump to real last
      setTransition(false);
      setIndex(Items.length - 2);
    }
  };
  useEffect(() => {
    if (!transition) {
      const timeout = setTimeout(() => setTransition(true), 20);
      return () => clearTimeout(timeout);
    }
  }, [transition]);
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // change every 3 seconds

    return () => clearInterval(interval); // clean up when component unmounts
  }, []);
  
  return (
    <div className="carousel">
      <div 
      className='slides'
      onTransitionEnd={handleTransitionEnd}
      style={{
        transform: `translateX(-${index * 60}%)`,
        transition: transition ? "transform 0.7s ease-in-out" : "none",
      }}
      >
        {
          Items.map((item, i) => (      
            <CarouselCard
              key={`${item.id}-${i}`}
              className={`${item.className} ${i === index ? 'active' : ''}`} // add 'active' class if current
              p1={item.p1}
              p2={item.p2}
              btn={item.btn}
              urlMobile={`url(/carousel-small/carousel${item.id}.jpg)`}
              urlDesktop={`url(/carousel-big/carousel-big${item.id}.jpg)`}
            />
          ))
      }
      </div>
      <div className='arrows'>
        <button onClick={handlePrev} className='left-btn'>⬅️</button>
        <button onClick={handleNext} className='right-btn'>➡️</button>
      </div>
      
    </div>
  );
};

export default Carousel;
