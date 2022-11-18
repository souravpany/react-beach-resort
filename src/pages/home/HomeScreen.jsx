import './home.css';
import BCG2 from '../../assets/img/jpeg/defaultBcg2.jpg';
import ServiceList from '../../components/service-list/ServiceList';
import { Navbar } from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';
import FeaturedRoomCard from '../../components/layout/featured-room/FeaturedRoomCard';
import { homeRoomItems } from '../../data';


function HomeScreen() {
  return (
    <>
     <Navbar />
     <div className='card-clum'>
        <img className='home-main-logo' src={BCG2} alt="BCG2 Logo" />
            <div className='home-card-trans-container'>
                <h1>Luxurious Rooms</h1>
                <div className='home-bar'/>
                <text className='home-card-room-rate'>Deluxe Rooms Starting At $299</text>
                <button className='home-card-room-button'>OUR ROOMS</button>
            </div>
      </div>
      <div className='service-container'>
        <h1 className='service-text'>Services</h1>
        <div className='searvice-featured-bar'/>
        <ServiceList/>
      </div>
      <div className='feature-room-container'>
        <h1>Featured Rooms</h1>
        <div className='searvice-featured-bar'/>
        <div className='home-card-container'>
              {homeRoomItems.map((item) =>
                <FeaturedRoomCard item={item} key={item.id}/>
              )}
        </div>
      </div>
     <Footer/>
    </>
  )
}

export default HomeScreen