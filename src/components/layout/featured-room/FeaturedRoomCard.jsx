import React from 'react'
import './featured-room-card.css'

import { Link } from 'react-router-dom'

function FeaturedRoomCard({item}) {

  return (

    <div className='card-container'>

      <Link to={`/search/${item.title}`} className='link-card'>

      <img className='card-img' src={item.img} alt={item.title} />
      <text className='item-text'>{item.title}</text>

      </Link>

      <div className='card-left-corner-content'>
        <text>$  {item.price}</text> <br/>
        <p>per night</p>
      </div>

    </div>


    
  )
}

export default FeaturedRoomCard
