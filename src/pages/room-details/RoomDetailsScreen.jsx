import './room-details-screen.css';

import Room1 from '../../assets/img/jpeg/room-1.jpeg'
import Details3 from '../../assets/img/jpeg/details-3.jpeg'
import Details4 from '../../assets/img/jpeg/details-4.jpeg'
import Details2 from '../../assets/img/jpeg/details-2.jpeg'
import { useParams } from 'react-router-dom'
import { Navbar } from '../../components/nav/Navbar';
import Footer from "../../components/footer/Footer"

import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function RoomDetailsScreen() {

    const params = useParams();

    // added to start the scroll from start
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [params]);

  return (
    <div>

        <Navbar/>

        {/* Top section image with transparent overlapping box */}
        <div className='room-details-top-section'>
            <img className='room-details-main-logo' 
            src={Room1} 
            alt="Room1 Logo" />
            <div className='room-details-card-trans-container'>
            <h1>{params.room} Rooms</h1>
            <div className='room-details-line-bar'></div>
            <Link to='/search'>
            <button className='room-details-card-trans-button'>BACK TO ROOMS</button>
            </Link>
            </div>
        </div>

        {/* Middle section */}
        <div className='middle-section-container'>

            <div className='text-row-imag-container'>
                <div className='image-container'>
                    <img className='row-img' src={Details2} alt="beach-resort img" />
                    <img className='row-img' src={Details3} alt="beach-resort img" />
                    <img className='row-img' src={Details4} alt="beach-resort img" />
                </div>
                
                <div className='details-info-container'>
                    
                    <div className='details-container'>

                        <h3>Details : </h3>
                        <text className='details-text'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
                        </text>

                    </div>

                    <div className='info-container'>
                        
                        <h3>Information : </h3>
                        <text className='details-text'>
                            Price : $100
                        </text>

                        <text className='details-text'>
                            Size : 200 SQFT
                        </text>

                        <text className='details-text'>
                            Max Capacity : 1 Person
                        </text>

                        <text className='details-text'>
                            No Pets Allowed
                        </text>

                    </div>

                </div>


                <div className='extras-main-container'>
                    <h3>Extras: </h3>

                    <div className='extras-text-containe'>

                        <div className='extras-text-item'>
                            <text className='extra-text-sub-item'>- Pluse pillows and breathable bed linens</text>
                            <text className='extra-text-sub-item'>- Complimentary refreshments</text>
                            <text className='extra-text-sub-item'>- Comfortable beds</text>
                        </div>
                            
                        <div className='extras-text-item'>
                            <text className='extra-text-sub-item'>- Soft, oversized bath towels</text>
                            <text className='extra-text-sub-item'>- Adequate safty/security</text>
                        </div>
                        
                        <div className='extras-text-item'>
                            <text className='extra-text-sub-item'>- Full-sized, pH-balanced toiletries</text>
                            <text className='extra-text-sub-item'>- Internet</text>
                        </div>
                    
                    </div>

                </div>

            </div>

        </div>


        <Footer/>

    </div>
  )
}


export default RoomDetailsScreen



            
{/* <img className='row-img' src={Details2} alt="beach-resort img" />
<img className='row-img' src={Details3} alt="beach-resort img" />
<img className='row-img' src={Details4} alt="beach-resort img" /> */}