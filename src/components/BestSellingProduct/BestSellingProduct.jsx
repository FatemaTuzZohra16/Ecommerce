import React from 'react'
import Container from '../Layout/Container'
import product1 from '../../assets/product1.png'
import product2 from '../../assets/product2.png'
import product3 from '../../assets/product3.png'
import product4 from '../../assets/product4.png'
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaStarHalf } from "react-icons/fa";


const BestSellingProduct = () => {
    return (
        <div className='pb-[122px]'>
            <Container>
                <div className='border-t border-black/30 pt-[27px]'>
                    <div className='flex items-center '>
                        <div className='w-5 h-10 rounded bg-primary'></div>
                        <div>
                            <p className='font-primary font-semibold text-[16px] leading-5 pl-[16px] text-primary'>This Month</p>
                        </div>
                    </div>
                    <div>
                        <div className='md:flex justify-between items-center'>
                            <h3 className='font-secondery font-semibold text-[36px] leading-[48px] mt-5 mb-12 md:mb-0'>Best Selling Products</h3>
                            <div>
                                <a className='font-medium text-base font-primary leading-6 bg-primary text-white py-[16px] px-[48px] rounded' href="">View All</a>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[60px] pl-[20px] md:pl-0 md:flex justify-between'>
                        <div className='card'>
                            <div className='w-[270px] bg-[#F5F5F5] rounded py-[55px] px-[65px] relative'>
                            <img src={product1} alt="" />
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
                            <p className='font-primary font-medium text-[16px] pt-[16px]'>The north coat</p>
                            <p className='font-primary font-medium text-[16px] text-primary py-2'>$260 <del className='text-[#7F7F7F]'>$360</del></p>
                            <div className='flex items-center text-[#FFAD33]'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <p className='ml-2 font-primary font-semibold text-[14px] text-[#7F7F7F]'>(65)</p>
                            </div>
                        </div>
                        </div>
                        <div className='card'>
                            <div className='w-[270px] bg-[#F5F5F5] rounded py-[58px] px-[44px] relative'>
                            <img src={product2} alt="" />
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
                            <p className='font-primary font-medium text-[16px] pt-[16px]'>Gucci duffle bag</p>
                            <p className='font-primary font-medium text-[16px] text-primary py-2'>$960 <del className='text-[#7F7F7F]'>$1160</del></p>
                            <div className='flex items-center text-[#FFAD33]'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalf />
                                <p className='ml-2 font-primary font-semibold text-[14px] text-[#7F7F7F]'>(65)</p>
                            </div>
                        </div>
                        </div>
                        <div className='card'>
                            <div className='w-[270px] bg-[#F5F5F5] rounded pt-[78px] pb-[70px] px-[40px] relative'>
                            <img src={product3} alt="" />
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
                            <p className='font-primary font-medium text-[16px] pt-[16px]'>RGB liquid CPU Cooler</p>
                            <p className='font-primary font-medium text-[16px] text-primary py-2'>$160 <del className='text-[#7F7F7F]'>$170</del></p>
                            <div className='flex items-center text-[#FFAD33]'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalf />
                                <p className='ml-2 font-primary font-semibold text-[14px] text-[#7F7F7F]'>(65)</p>
                            </div>
                        </div>
                        </div>
                        <div className='card'>
                            <div className='w-[270px] bg-[#F5F5F5] rounded py-[52px] px-[65px] relative'>
                            <img src={product4} alt="" />
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
                            <p className='font-primary font-medium text-[16px] pt-[16px]'>Small BookSelf</p>
                            <p className='font-primary font-medium text-[16px] text-primary py-2'>$360</p>
                            <div className='flex items-center text-[#FFAD33]'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <p className='ml-2 font-primary font-semibold text-[14px] text-[#7F7F7F]'>(65)</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default BestSellingProduct