import Button from "./Button"
import "./Card.css";
const Card = (props) => {
  return (
    <div className={`card ${props.className}`}>
      <h2>{props.h2}</h2>
      <p>{props.p1}</p>
      {
        props.p2 && <p>{props.p2}</p>
      }
      <Button className="learn-btn">{props.btn1}</Button>
      {
        props.btn2 && <Button className="buy-btn">{props.btn2}</Button>
      }
    </div>
  )
}
export default Card;