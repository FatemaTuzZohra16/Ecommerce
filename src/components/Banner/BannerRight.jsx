import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImg from '../../assets/bannerImg.jpg'
const BannerRight = () => {
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='w-[80%] ml-[45px]'>
       <Slider {...settings}>
      <div>
         <img className='w-full' src={bannerImg} alt="" />
      </div>
      <div>
        <img className='w-full' src={bannerImg} alt="" />
      </div>
      <div>
        <img className='w-full' src={bannerImg} alt="" />
      </div>
      
    </Slider>
    </div>
  )
}

export default BannerRight