import React from 'react'
import './featured-room-card.css'

import { Link } from 'react-router-dom'

function FeaturedRoomCard({item}) {

  return (
     <Link to={`/search/${item.title}`} className='link-card'>

      <img className='card-img' src={item.img} alt={item.title} />
      <text className='item-text'>{item.title}</text>

    </Link>
  )
}

export default FeaturedRoomCard


{/* <div class="card">
  <img src="img_avatar.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
  </div>
</div> */}