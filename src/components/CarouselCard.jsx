import "./CarouselCard.css";
const CarouselCard = (props) => {
  return (
    <div className={`carousel-card ${props.className}`}>
      <div className="overlay"></div>
      <div className="texts">
        <p>{props.p1}</p>
        {props.p2 && <p>{props.p2}</p>}
        <button className="carousel-btn">{props.btn}</button>
      </div>
    </div>
  )  
}
export default CarouselCard;