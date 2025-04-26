import { useState, useEffect } from "react";
import "./CarouselCard.css";
const CarouselCard = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 734);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 734);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const backgroundImage = isMobile ? props.urlMobile : props.urlDesktop;
  return (
    <div 
      className={`carousel-card ${props.className}`}
      style={{backgroundImage: `${backgroundImage}`}}
    >
      <div className="overlay"></div>
      <div className="texts">
        <p className="p1">{props.p1}</p>
        {props.p2 && <p>{props.p2}</p>}
        <button className="carousel-btn">{props.btn}</button>
      </div>
    </div>
  )  
}
export default CarouselCard;