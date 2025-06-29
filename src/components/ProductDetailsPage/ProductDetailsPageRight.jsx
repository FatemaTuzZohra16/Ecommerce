import React from 'react'
import { FaStar } from 'react-icons/fa';
import { CiStar } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { LuRefreshCcw } from "react-icons/lu";

const ProductDetailsPageRight = () => {
    return (
        <div className='pt-[181px] pb-[140px]'>
            <p className='font-secondery font-semibold text-[24px] leading-6'>Havic HV G-92 Gamepad</p>
            <div className='flex items-center py-4'>
                <div className='flex items-center text-[#FFAD33]'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className='text-[#BFBFBF]' />
                </div>
                <p className='font-primary text-[14px] leading-[21px] pl-2 text-[#BFBFBF]'>(150 Reviews)</p>
                <span className='px-4 text-[#BFBFBF]'>|</span>
                <p className='font-primary text-[14px] leading-[21px] text-green'>In Stock</p>
            </div>
            <p className='font-secondery text-[24px] leading-6'>$192.00</p>
            <p className='font-primary text-[14px] leading-[21px] py-6 border-b border-black/50'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
            <div className='flex items-center'>
                <p className='font-secondery text-[20px] leading-5 py-6 mr-6'>Colours:</p>
                <div className='flex gap-x-2'>
                    <div className='w-5 h-5 rounded-full bg-primary hover:bg-[#A0BCE0] hover:border-2 hover:border-white hover:outline-2 hover:outline-black'></div>
                    <div className='w-5 h-5 rounded-full bg-primary hover:bg-[#A0BCE0] hover:border-2 hover:border-white hover:outline-2 hover:outline-black'></div>
                </div>
            </div>

            <div className='w-[399px] h-[180px] border border-black/50 rounded py-6'>
                <div className='flex items-center gap-x-4 pl-4'>
                    <div className="left text-black">
                        <TbTruckDelivery className='w-10 h-10'/>
                    </div>
                    <div className="right">
                        <h4 className='font-primary font-medium text-base leading-6 pb-2'>Free Delivery</h4>
                        <p className='font-primary font-medium text-[12px] leading-[18px] pb-4'>
                            Enter your postal code for Delivery Availability
                        </p>
                    </div>
                </div>
                <div className='border border-black/50 pl-[-16px]'></div>
                 <div className='flex items-center gap-x-4 pl-4'>
                    <div className="left text-black">
                        <LuRefreshCcw className='w-10 h-10'/>
                    </div>
                    <div className="right pt-4">
                        <h4 className='font-primary font-medium text-base leading-6 pb-2'>Free Delivery</h4>
                        <p className='font-primary font-medium text-[12px] leading-[18px]'>
                            Enter your postal code for Delivery Availability
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsPageRight