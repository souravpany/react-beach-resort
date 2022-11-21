import './home.css';
import BCG2 from '../../assets/img/jpeg/defaultBcg2.jpg';
import ServiceList from '../../components/service-list/ServiceList';
import { Navbar } from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';
import FeaturedRoomCard from '../../components/layout/featured-room/FeaturedRoomCard';
import { homeRoomItems } from '../../data';

import {Link} from 'react-router-dom';


function HomeScreen() {
  return (
    <>

      <Navbar/>

        <header>
            <div className='header-content'>
                  <h1>Luxurious Rooms</h1>
                  <div className='line-bar'/>
                  <p>Deluxe Rooms Starting At $299</p>
                  <Link to='/' className='home-button'>OUR ROOMS</Link>
            </div>
        </header>

        <section className='services'>
            <div className='home-services-title'>
              <h1>Services</h1>
              <div className='home-services-line-bar'/>
            </div>

            <div className='home-services-service-list'>
               <ServiceList/>
            </div>
            
        </section>

          <section className='featured'>

               <div className='home-services-title'>
                  <h1>Featured Rooms</h1>
                  <div className='home-services-line-bar'/>
              </div>
                
              <div className='home-featured-img-card-container'>
                      {homeRoomItems.map((item) =>
                        <FeaturedRoomCard item={item} key={item.id}/>
                      )}
                </div>
          </section>

        <Footer/>
    </>
  )
}

export default HomeScreen