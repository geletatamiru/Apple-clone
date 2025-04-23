import React from 'react'
import macbook from "../assets/macbook.jpg";
import Button from '../components/Button';
import AppleLogo from '../components/AppleLogo';
import CardContainer from '../components/CardContainer';
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className='home-page'>
      <div className='section-1'>
        <h1>MacBook Pro</h1>
        <h2>A work of smart.</h2>
        <div className='button-container'>
          <div className='buttons'>
            <Button className="learn-btn">Learn more</Button>
            <Button className="buy-btn">Buy</Button>
          </div>
        </div>
        <div 
          className='figure'
          style={{
            backgroundImage: `url(${macbook})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "3008px 580px",
            backgroundPosition: "center"
          }}
        
        >
          
        </div>
      </div>

      {/* section 2 */}
      <div className='section-2'>
          <div className='top-part'>
            <AppleLogo fill="black" value={2} className="sec-2-apple-logo"/>
            <h2> WATCH</h2>
          </div>
          <p className='series'>SERIES 10</p>
          <p className='thin'>Thinstant classic</p>
          <div className="button-container">
            <div className='buttons'>
              <Button className="learn-btn">Learn more</Button>
              <Button className="buy-btn">Buy</Button>
            </div>
          </div>
      </div>


      {/* section 3 */}
      <div className='section-3'>
          <h2 className='iphone-header'>iPhone</h2>
          <p className='par-meet'>Meet the iPhone 16 family.</p>
          <div className="button-container">
            <div className='buttons'>
              <Button className="learn-btn">Learn more</Button>
              <Button className="buy-btn">Shop iPhone</Button>
            </div>
          </div>
          <p className='par-built'>Built for Apple Intelligence</p>
      </div>

      {/* cards */}
       <CardContainer /> 
    </div>
  )
}
