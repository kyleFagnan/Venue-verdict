import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
  return (
   <>
    <li className="cards-item">
      <Link to={props.path} className='cards-item-link'>
        <figure className='card-item-pic-wrap' data-category={props.label}>
          <img src={props.src} alt="sports" className="cards-item-img" />  
        </figure>
        <div className="cards-item-info">
          <h5 className="cards-item-text">{props.text}</h5>  
        </div>
      </Link>
    </li>
   </>
  )
}

export default CardItem