import React from 'react'
import monitor from '../../assets/monitor.png'
import keyboard from '../../assets/keyboard.png'
import product3 from '../../assets/product3.png'
import gamepad from '../../assets/gamepad.png'
import { CiHeart } from 'react-icons/ci';
import { IoEyeOutline } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';


const ProductDetails = () => {
    const productDetails = [
        {
            image: gamepad,
            title: 'HAVIT HV-G92 Gamepad',
            price: '$120',
            del: '$160',
            review: '(88)'
        },
        {
            image: keyboard,
            title: 'AK-900 Wired Keyboard',
            price: '$960',
            del: '$1160',
            review: '(75)'
        },
        {
            image: monitor,
            title: 'IPS LCD Gaming Monitor',
            price: '$370',
            del: '$400',
            review: '(99)'
        },
        {
            image: product3,
            title: 'RGB liquid CPU Cooler',
            price: '$160',
            del: '$170',
            review: '(65)'
        }
    ]
    return (
        <div>
            <div className='flex items-center pb-[70px]'>
                <div className='w-5 h-10 rounded bg-primary'></div>
                <div>
                    <p className='font-primary font-semibold text-[16px] leading-5 pl-[16px] text-primary'>Related Item</p>
                </div>
            </div>
            <div className='sm:flex justify-between flex-wrap'>
                {
                productDetails.map((productDetails)=>(
                    <div className='card mb-[140px]'>
                            <div className='w-[270px] h-[300px] bg-[#F5F5F5] rounded py-[55px] px-[65px] relative group'>
                                <img src={productDetails.image} alt="" />
                                <div className='hidden group-hover:block'>
                                    <a className='absolute font-primary font-medium text-base leading-6 py-2 rounded bg-black text-white bottom-0 left-0 w-full text-center' href="">Add To Cart</a>
                                </div>
                                <div className='absolute top-3 right-3'>
                                    <div className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center mb-2'>
                                        <CiHeart />
                                    </div>
                                    <div className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'>
                                        <IoEyeOutline />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='w-[260px] font-primary font-medium text-[16px] pt-[16px]'>{productDetails.title}</p>
                                <div className=''>
                                    <p className='font-primary font-medium text-[16px] text-primary py-2'>{productDetails.price} <del className='text-[#7F7F7F] ml-3'>{productDetails.del}</del></p>
                                </div>
                                <div className='flex items-center text-[#FFAD33]'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    {/* <div>
                                        <ProductRating  rating={productDetails.rating}/>
                                    </div> */}
                                    <p className='ml-2 font-primary font-semibold text-[14px] text-[#7F7F7F]'>{productDetails.review}</p>
                                </div>
                            </div>
                        </div>
                ))
            }
            </div>
        </div>
    )
}

export default ProductDetails