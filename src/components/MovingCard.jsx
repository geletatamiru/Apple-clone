import "./MovingCard.css";
const MovingCard = () => {
  const items = [
    {
      id: "1",
      par: "Seth Rogen: The Xane Lowe interview",
      btn: "Listen now",
    },
    {
      id: "2",
      par: "PGA TOUR Pro Golf",
      btn: "Play now",
    },
    {
      id: "3",
      par: "Strength with Gregg",
      btn: "Watch now",
    },
    {
      id: "4",
      par: "A-List Pop",
      btn: "Listen now",
    },
    {
      id: "5",
      par: "Balatro+",
      btn: "Play now",
    },
    {
      id: "6",
      par: "Best Mindful Cooldowns for athlets",
      btn: "Watch now",
    }
  ]
  return (
    <div className="moving-card">
      <div className="content">
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