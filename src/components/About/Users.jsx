import React, { useEffect, useState } from 'react'
import Container from '../Layout/Container'
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Users = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/users")
            .then((res) => res.json())
            .then((data) => setUser(data))
    },[])
     var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
     arrows: false,
  };
    return (
        <div className='mb-[196px]'>
            <Container>
                    <Slider {...settings}>
                    {
                        user.slice(0, 6).map((item, index) => (
                            <div key={index} className='w-[370px]  px-[30px]'>
                                <div className='w-full h-[200px] md:h-[400px] flex justify-center bg-white'>
                                    <img src={item.avatar} alt="" 
                                    className='pt-[33px] w-full'
                                    />
                                </div>
                                <p className='w-[370px] font-secondery font-medium text-[30px] leading-[30px] tracking-[4%] pt-[32px] pb-2 break-words'>{item.name}</p>
                                <p className='font-primary text-base leading-[24px]'>{item.role}</p>
                                <div className='flex gap-x-4 mt-4'>
                                    <CiTwitter  size={24}/>
                                    <CiInstagram  size={24}/>
                                    <RiLinkedinLine  size={24}/>
                                </div>
                            </div>
                        ))
                    }
                    </Slider>
            </Container>
        </div>
    )
}

export default Users