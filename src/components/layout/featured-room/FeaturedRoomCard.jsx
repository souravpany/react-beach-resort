import React from 'react'
import './featured-room-card.css'

import { Link } from 'react-router-dom'

function FeaturedRoomCard({item}) {

  return (
    <div className='card-main-container'>
      <Link to={`/search/${item.title}`}>
      <div class="card-featured-clum">
        <img className='card-featured-img' src={item.img} alt="beach-resort img" />
          <text className='item-text'>{item.title}
          </text>
       </div>
      </Link>
    </div>
  )
}

export default FeaturedRoomCard