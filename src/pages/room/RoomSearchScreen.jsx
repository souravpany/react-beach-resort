import './room-search-screen.css';
import Footer from "../../components/footer/Footer"
import { Navbar } from "../../components/nav/Navbar"
import Room2 from '../../assets/img/jpeg/room-2.jpeg'
import FeaturedRoomCard from '../../components/layout/featured-room/FeaturedRoomCard';
import { roomItems } from '../../data';

import { Link } from 'react-router-dom';

function RoomSearchScreen() {

  const options = ['all', 'Two', 'Three', 'Four', 'Five'];
    const onOptionChangeHandler = (event) => {
        console.log("User Selected Value - ", event.target.value)
    }

    const guestOptions = ['1', '2', '3', '4', '5'];
    const onguestOptionChangeHandler = (event) => {
        console.log("User Selected Value - ", event.target.value)
    }

  return (
    <>
      <Navbar/>
      {/* Top section image with transparent overlapping box */}
      <div className='search-room-top-section'>
        <img className='search-room-logo-img' src={Room2} alt="Room2 Logo" />
            <div className='seach-room-img-middle-section'>
                <h1>Our Rooms</h1>
                <div/>
                <Link to='/'>
                 <button>RETURN HOME</button>
                 </Link>
            </div>
        </div>

      {/* middle section search room with card images*/}
      <div className='middle-section-container'>
        <h1>Search Rooms</h1>
        <div className='search-line-bar'/>

          <div className="search-sub-middle-section-container">

                {/* search room part*/}
                <div className='middle-section-top-part'>

                  {/* room type section */}
                  <div className='room-type-section'>
                  <text>Rooms Type</text>
                    <select className='title-text' onChange={onOptionChangeHandler}>
                            <option>Please choose one option</option>
                              {options.map((option, index) => {
                                  return <option key={index} >
                                      {option}
                                  </option>
                              })}
                    </select>
                  </div>


                  {/* Guest type section */}
                  <div className='room-type-section'>
                  <text>Guests</text>
                    <select className='title-text' onChange={onguestOptionChangeHandler}>
                          <option>Please choose one option</option>
                            {guestOptions.map((option, index) => {
                                return <option key={index} >
                                    {option}
                                </option>
                            })}
                    </select>
                  </div>

                  {/* Room price */}
                  <div className='room-type-section'>
                    <text>Room Price $600</text>
                    <text className='title-text'>Rate View</text>
                  </div>
                  
                  {/* Room size */}
                  <div className='room-type-section'>
                    <text>Room Size</text>
                      <div className='title-text'>
                      <input className='room-size-input-text-area' value={0}></input>
                      <strong>{'  '}</strong>
                      <input className='room-size-input-text-area' value={1000}></input>
                      </div>
                  </div>

                  {/* Check box */}
                  <div className='room-search-check-box'>

                    <div className='check-box-section'>
                    <input className='check-box' type="checkbox"/> Breakfast
                    </div>           
                    
                    <div className='check-box-section'>
                    <input type="checkbox"/> Pets
                    </div>
                
                  </div>

                </div>

                {/* card images part*/}
                <div className='card-image-container'>
                  {roomItems.map((item) =>
                    <FeaturedRoomCard item={item} key={item.id}/>
                  )}
                </div>

            </div>
            
      </div>

      <Footer/>
    </>
  )
}

export default RoomSearchScreen