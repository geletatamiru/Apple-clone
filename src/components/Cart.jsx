import { useState } from "react";
import "./Cart.css";
const Cart = () => {
  const [closed, setClosed] = useState(false);
  const handleClick = () => {
    setClosed(prev => !prev);
  }
  return (
    <div className="cart">
      <div style={{alignSelf: "end", cursor: "pointer"}} onClick={handleClick}>&#10005;</div>      
      <h2>Your Bag is empty.</h2>
      <p>Sign in to see if you have any saved items</p>
      <p>My Profile</p>
      <p>Orders</p>
      <p>Your Saves</p>
      <p>Account</p>
      <p>Sign in</p>
    </div>
  )
}
export default Cart;