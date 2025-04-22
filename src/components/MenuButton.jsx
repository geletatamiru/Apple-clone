import React from "react";
import hamburger from "../assets/hamburger-menu.png"
import "./MenuButton.css"
const MenuButton = ({onClick}) => {
  return (
    <button className="hamburger-btn" onClick={onClick}>
      <img className="hamburger-img" src={hamburger} alt="hamburger menu" />
    </button>
  )
};

export default MenuButton;
