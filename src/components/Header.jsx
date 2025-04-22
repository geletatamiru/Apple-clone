import React,{useState} from 'react'
import SearchIcon from './SearchIcon'
import AppleLogo from './AppleLogo'
import CartIcon from './CartIcon'
import MenuButton from './MenuButton'
import "./Header.css"

export default function Header() {
  const [menuClicked, setMenuClicked] = useState(false);
  const handleClick = () => {
    setMenuClicked(prev => !prev);
  }
  const handleCartClick = () => {

  }
  return (
    <div className={`header ${menuClicked ? "header-clicked" : ""}`}>
      
      {menuClicked 
        ? <div style={{alignSelf: "end", cursor: "pointer"}} onClick={handleClick}>&#10005;</div>
        : <div className='logo'><AppleLogo fill="white" value={1} className="sec-1-apple-logo" /></div>
        }
      <div className={`nav ${menuClicked ? "nav-clicked" : ""}`}>
        <div>Store</div>
        <div>Mac</div>
        <div>iPad</div>
        <div>iPhone</div>
        <div>Watch</div>
        <div>Vision</div>
        <div>AirPods</div>
        <div>Tv & Home</div>
        <div>Entertainment</div>
        <div>Accessories</div>
        <div>Support</div>
      </div>
      <div className='right-section' style={{display: menuClicked ? "none" : "flex"}}>
        <div>
          <SearchIcon />
        </div>
        <div>
          <CartIcon onClick={handleCartClick}/>
        </div>
        <MenuButton onClick={handleClick} />
      </div>
    </div>
  )
}
