import React, { useEffect, useState } from 'react'
import Container from '../Layout/Container'
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaStarHalf } from "react-icons/fa";
import ourProduct1 from '../../assets/ourProduct1.png'
import ourProduct2 from '../../assets/ourProduct2.png'
import ourProduct3 from '../../assets/ourProduct3.png'
import ourProduct4 from '../../assets/ourProduct4.png'

const OurProducts = () => {
    const [visible, setvisible] = useState(4)
    const product = [
        {
            name: 'Breed Dry Dog Food',
            price: '$100',
            image: ourProduct1,
            rating: 3,
            sold: '(35)'
        },
        {
            name: 'CANON EOS DSLR Camera',
            price: '$360',
            image: ourProduct2,
            rating: 5,
            sold: '(95)'
        },
        {
            name: 'ASUS FHD Gaming Laptop',
            price: '$700',
            image: ourProduct3,
            rating: 5,
            sold: '(325)'
        },
        {
            name: 'Curology Product Set ',
            price: '$500',
            image: ourProduct4,
            rating: 5,
            sold: '(145)'
        },
        {
            name: 'Breed Dry Dog Food',
            price: '$100',
            image: ourProduct1,
            rating: 3,
            sold: '(35)'
        },
        {
            name: 'CANON EOS DSLR Camera',
            price: '$360',
            image: ourProduct2,
            rating: 5,
            sold: '(95)'
        },
        {
            name: 'ASUS FHD Gaming Laptop',
            price: '$700',
            image: ourProduct3,
            rating: 5,
            sold: '(325)'
        },
        {
            name: 'Curology Product Set ',
            price: '$500',
            image: ourProduct4,
            rating: 5,
            sold: '(145)'
        },
        {
            name: 'Breed Dry Dog Food',
            price: '$100',
            image: ourProduct1,
            rating: 3,
            sold: '(35)'
        },
        {
            name: 'CANON EOS DSLR Camera',
            price: '$360',
            image: ourProduct2,
            rating: 5,
            sold: '(95)'
        },
        {
            name: 'ASUS FHD Gaming Laptop',
            price: '$700',
            image: ourProduct3,
            rating: 5,
            sold: '(325)'
        },
        {
            name: 'Curology Product Set ',
            price: '$500',
            image: ourProduct4,
            rating: 5,
            sold: '(145)'
        },
    ]
    const handleLoadData = ()=>{
        setvisible((prev) => prev+4)
    }
    return (
        <div>
            <Container>
                <div>
                    <div className='title-part'>
                        <div className='flex items-center '>
                            <div className='w-5 h-10 rounded bg-primary'></div>
                            <div>
                                <p className='font-primary font-semibold text-[16px] leading-5 pl-[16px] text-primary'>Our Products</p>
                            </div>
                        </div>
                        <div>
                            <h3 className='font-secondery font-semibold text-[36px] leading-[48px] mt-5'>Explore Our Products</h3>
                        </div>
                    </div>
                    <div className='flex justify-between flex-wrap'>
                        {
                            product.slice(0, visible).map((product) => (
                                <div className='card my-[60px]'>
                                    <div className='w-[270px] h-[322px] bg-[#F5F5F5] rounded py-[55px] px-[65px]  relative group'>
                                        <img src={product.image} alt="" />
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
                                        <p className='font-primary font-medium text-[16px] pt-[16px]'>{product.name}</p>
                                        <div className='flex'>
                                            <p className='font-primary font-medium text-[16px] text-primary py-2'>{product.price}</p>
                                            <div className='flex items-center text-[#FFAD33] mx-2'>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <p className='ml-2 font-primary font-semibold text-[14px] text-[#7F7F7F]'>{product.sold}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {visible < product.length && (
                    <div className='text-center'>
                        <button onClick={handleLoadData} className='font-primary font-medium text-base leading-6 py-[16px] px-[48px] rounded bg-primary text-white' href="">View All Products</button>
                    </div>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default OurProducts