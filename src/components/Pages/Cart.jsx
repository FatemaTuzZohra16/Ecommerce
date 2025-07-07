import React from 'react'
import Container from '../Layout/Container'
import monitor from '../../assets/monitor.png'
import gamepad from '../../assets/gamepad.png'
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router';

const Cart = () => {
    return (
        <div>
            <Container>
                <div className='pb-[140px]'>
                    <div className='flex py-[80px] font-primary'>
                        <p className='text-[14px] leading-[21px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>Home</p>
                        <p className='px-3'>/</p>
                        <p className='text-[14px] leading-[21px]'>Cart</p>
                    </div>
                    <div className='flex justify-between shadow-[0_1px_13px_rgba(0,0,0,0.05)] py-6 px-10 rounded font-primary'>
                        <div>
                            <p className='text-base leading-6'>Product</p>
                        </div>
                        <div>
                            <p className='text-base leading-6'>Price</p>
                        </div>
                        <div>
                            <p className='text-base leading-6'>Quantity</p>
                        </div>
                        <div>
                            <p className='text-base leading-6'>Subtotal</p>
                        </div>
                    </div>
                    <div className='flex justify-between shadow-[0_1px_13px_rgba(0,0,0,0.05)] py-6 px-10 rounded font-primary my-[40px]'>
                        <div>
                            <div className='flex items-center'>
                                <img className='w-[54px] h-[54px] pr-[15px]' src={monitor} alt="" />
                                <p className='text-base leading-6'>LCD Monitor</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-base leading-6'>$650</p>
                        </div>
                        <div className='flex items-center py-[6px] px-3 border border-black/30 rounded'>
                            <p className='text-base leading-6 pr-4'>01</p>
                            <div>
                               <FaAngleUp />
                               <FaAngleDown /> 
                            </div>
                        </div>
                        <div>
                            <p className='text-base leading-6'>$650</p>
                        </div>
                    </div>
                    <div className='flex justify-between shadow-[0_1px_13px_rgba(0,0,0,0.05)] py-6 px-10 rounded font-primary'>
                        <div>
                            <div className='flex items-center'>
                                <img className='w-[54px] h-[54px] pr-[15px]' src={gamepad} alt="" />
                                <p className='text-base leading-6'>H1 Gamepad</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-base leading-6'>$550</p>
                        </div>
                        <div className='flex items-center py-[6px] px-3 border border-black/30 rounded'>
                            <p className='text-base leading-6 pr-4'>02</p>
                            <div>
                                <FaAngleUp />
                                <FaAngleDown />
                            </div>
                        </div>
                        <div>
                            <p className='text-base leading-6'>$1100</p>
                        </div>
                    </div>
                    <div className='flex justify-between pt-6 pb-[80px]'>
                        <div className='font-primary font-medium text-base leading-6 border border-black/30 rounded py-[16px] px-[48px]'>
                            <a href="">Return To Shop</a>
                        </div>
                        <div className='font-primary font-medium text-base leading-6 border border-black/30 rounded py-[16px] px-[48px]'>
                            <a href="">Update Cart</a>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <div className='flex gap-x-4'>
                                <div className='font-primary font-medium text-base leading-6 border border-black/30 rounded py-[16px] pl-[24px] pr-[164px]'>
                                    <a href="">Coupon Code</a>
                                </div>
                                <div className='font-primary font-medium text-base leading-6 rounded py-[16px] px-[48px] bg-primary text-white'>
                                    <a href="">Apply Coupon</a>
                                </div>
                            </div>
                        </div>
                        <div className='w-[470px] border py-[32px] px-[24px] font-primary'>
                            <p className='font-primary font-medium text-[20px] leading-7'>Cart Total</p>
                            <div className='flex justify-between border-b border-black/30 pt-6 pb-4'>
                                <p className='text-base leading-6'>Subtotal:</p>
                                <p className='text-base leading-6'>$1750</p>
                            </div>
                            <div className='flex justify-between border-b border-black/30 py-4'>
                                <p className='text-base leading-6'>Shipping:</p>
                                <p className='text-base leading-6'>Free</p>
                            </div>
                            <div className='flex justify-between py-4'>
                                <p className='text-base leading-6'>Total:</p>
                                <p className='text-base leading-6'>$1750</p>
                            </div>
                            <div className='text-center'>
                                <div className='font-primary font-medium text-base leading-6 rounded py-[16px] px-[48px] bg-primary text-white inline-block'>
                                <Link to="/checkOut">Procees to checkout</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Cart