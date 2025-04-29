import React, { useState, useEffect, useRef } from 'react';
import items from './carouselItems';
import CarouselCard from './CarouselCard';
import "./Carousel.css";
const Carousel = () => {
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const [isVisible, setIsVisible] = useState(true); 
  const carouselRef = useRef(null);

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
    
      setTransition(false);
      setIndex(1);
    } else if (index === 0) {
      
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
    if (!isVisible) return; 
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } 
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);
  return (
    <div className="carousel" ref={carouselRef}>
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
              className={`${item.className} ${i === index ? 'active' : ''}`} 
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
