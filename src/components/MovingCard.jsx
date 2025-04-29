import React, { useRef, useEffect, useState } from 'react';
import items from './movingItems';
import "./MovingCard.css";
const MovingCard = () => {
  const marqueeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (marqueeRef.current) {
      observer.observe(marqueeRef.current);
    }

    return () => {
      if (marqueeRef.current) {
        observer.unobserve(marqueeRef.current);
      }
    };
  }, []);
  return (
    <div className="moving-card" ref={marqueeRef}>
      <div className={`content ${!isVisible ? 'paused' : ''}`}>
        {
          items.map(({id, par,btn}) => (
            <div key={id} className="item" >
              <div className="item-background">
                <button className="moving-btn">{btn}</button>
              </div>
              <p>{par}</p>
            </div>
          ))
        }
        {
          items.map(({id, par,btn}) => (
            <div key={id} className="item" >
              <div className="item-background">
                <button className="moving-btn">{btn}</button>
              </div>
              <p>{par}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default MovingCard;