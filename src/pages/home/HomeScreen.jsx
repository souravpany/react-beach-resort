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
      <Navbar/>
        <div className='home-main'>
        <img className='logo-image' src={BCG2} alt="banner Logo" />
            
            <div className='home-img-middle-section'>

                <h1>Luxurious Rooms</h1>
                <div/>
                <p>Deluxe Rooms Starting At $299</p>
                <button>OUR ROOMS</button>

            </div>

        </div>

         <div className='home-services-container'>
            <h1>Services</h1>
            <div className='home-services-line-bar'/>
            <ServiceList/>
          </div>

            <div className='home-feature-room-container'>
                <h1>Featured Rooms</h1>
                <div className='home-services-line-bar'/>
                <div className='home-featured-img-card-container'>
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