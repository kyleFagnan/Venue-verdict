import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these NEW venues</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem 
              src="images/RogersPlace.jpg"
              text="Rogers Place Home of the Edmonton Oilers"
              label="NHL"
              path="/rogersplace"
            />
            <CardItem 
              src="images/So-fi.jpg"
              text="So-Fi Stadium Home of the LA Rams"
              label="NFL"
              path="/so-fi"
            />
          </ul>
          <ul className="cards-items">
            <CardItem 
              src="images/RogersPlace.jpg"
              text="Rogers Place Home of the Edmonton Oilers"
              label="NHL"
              path="/rogersplace"
            />
            <CardItem 
              src="images/So-fi.jpg"
              text="So-Fi Stadium Home of the LA Rams"
              label="NFL"
              path="/so-fi"
            />
            <CardItem 
              src="images/So-fi.jpg"
              text="So-Fi Stadium Home of the LA Rams"
              label="NFL"
              path="/so-fi"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards