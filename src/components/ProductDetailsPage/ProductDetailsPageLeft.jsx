import React from 'react'
import gameController from '../../assets/gameController.png'
import gameController1 from '../../assets/gameController1.png'
import gameController2 from '../../assets/gameController2.png'
import gameController3 from '../../assets/gameController3.png'
import gameController4 from '../../assets/gameController4.png'
const ProductDetailsPageLeft = () => {
    return (
        <div className='pt-[80px] pb-[140px]'>
            <div className='flex gap-x-[6px] font-primary text-[14px] leading-[21px] text-[#BFBFBF]'>
                <p>Account /</p>
                <p>Gaming /</p>
                <p className='text-black'>Havic HV G-92 Gamepad</p>
            </div>
            <div className='flex gap-x-[30px] pt-[80px]'>
                <div className="left">
                    <div className='mb-4 rounded'>
                        <img src={gameController1} alt="" />
                    </div>
                    <div className='mb-4 rounded'>
                        <img src={gameController2} alt="" />
                    </div>
                    <div className='mb-4 rounded'>
                        <img src={gameController3} alt="" />
                    </div>
                    <div className='rounded'>
                        <img src={gameController4} alt="" />
                    </div>
                </div>
                <div className="right">
                    <img src={gameController} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsPageLeft