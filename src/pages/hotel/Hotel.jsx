
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from '../../components/maillist/MailList';
import Footer from '../../components/footer/Footer';
import './hotel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot ,  faCircleXmark,  faCircleArrowLeft, faCircleArrowRight} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Hotel = () => {
  const [slideNumber  , setSlideNumber] = useState(0)
  const [open , setOpen]  = useState(false);
  const photos = [
    {
      src:'https://cf.bstatic.com/xdata/images/hotel/max500/323415429.jpg?k=f8a41543239d32e7f1f0812d85ee17efa8303319dc0e72c81f00c251b063a046&o=&hp=1',
    },
    {
      src:'https://cf.bstatic.com/xdata/images/hotel/max500/323415584.jpg?k=85e942844a2dd7169edd53e282a6e929b111e59adf9a183266fb56417e723739&o=&hp=1',
    },
    {
      src:'https://cf.bstatic.com/xdata/images/hotel/max300/323415610.jpg?k=ed7aeea0a34d47616ba424a7ed1e6ffa49aacb78a9988cea2d30df8d8778f7ed&o=&hp=1',
    },
    {
      src:'https://cf.bstatic.com/xdata/images/hotel/max500/323415584.jpg?k=85e942844a2dd7169edd53e282a6e929b111e59adf9a183266fb56417e723739&o=&hp=1',
    },
    {
      src:'https://cf.bstatic.com/xdata/images/hotel/max300/323415610.jpg?k=ed7aeea0a34d47616ba424a7ed1e6ffa49aacb78a9988cea2d30df8d8778f7ed&o=&hp=1',
    },
    {
      src:'https://cf.bstatic.com/xdata/images/hotel/max500/323415429.jpg?k=f8a41543239d32e7f1f0812d85ee17efa8303319dc0e72c81f00c251b063a046&o=&hp=1',
    }
  ];

    const handleOpen = (i)=>{
      setSlideNumber(i);
      setOpen(true)
    }

    const handleMove = (direction) => {
      let newSlideNumber;
  
      if (direction === "l") {
        newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
      } else {
        newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
      }
  
      setSlideNumber(newSlideNumber)
    };



  return (
    <div>
      <Navbar/>
      <Header type="list" />
      <div className="hotelContainer">
        {open &&
        <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)} /> 
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={ () => handleMove("l") } />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className='sliderImg' />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("r")} />


        </div>
        }
        <div className="hotelWrapper">
          <button className='bookNow'>Reserve Or Book Now!</button>
          <h1 className="hotelTitle">
            Grand Hotel
          </h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} / >
            <span>Gulbrug Lahore</span>
          </div>
          <span className="hotelDistence">Excellent Location-500m from center</span>
          <span className="hotelPriceHighLight">Book a stay $114 at this property and get free airport texi</span>
        <div className="hotelImages">
        {photos.map((photo , i )=>(
          <div className="hotelImageWrapper">
            <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className='hotelImage' />
          </div>
        ))}
        </div>
        <div className="hotelDetails">
          <div className="hotelDetailsText">Stay in the heart of Lahore
            <p className="hotelDesc">
              Lorem ipsum dolor sit amet consectetur, 
              adipisicing elit. Ea eum perferendis vitae corporis 
              libero rem eaque doloribus sapiente necessitatibus 
              asperiores?
            </p>
          </div>
          <div className="hotelDetailsPrice"> 
          <h1>Perfect for a 9-night stay!</h1>
          <span>Location in the real heart of lahore this property has an Excellent loction score 9.8 !</span>
          <h2>
            <b>$200</b> (9-night) 
          </h2>
          <button>Reseve Or Book Now!</button>
          </div>
          
        </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel
