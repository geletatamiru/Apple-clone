import items from "./items";
import Card from "./Card";
import "./CardContainer.css";


const CardContainer = () => {
  return (
    <div className="card-container">
      {
        items.map(item => {
          return <Card 
            key={item.id} 
            className={item.className}
            h2={item.h2}
            p1={item.p1}
            p2={item.p2}
            btn1={item.btn1}
            btn2={item.btn2}
          />
        })
      }
    </div>
  )
}
export default CardContainer;