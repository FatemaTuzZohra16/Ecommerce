import React, { useState } from 'react'
import Container from '../Layout/Container'
import monitor from '../../assets/monitor.png'
import gamepad from '../../assets/gamepad.png'
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { current } from '@reduxjs/toolkit';
import { cartQuntity } from '../../slices/cartSlice';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { ImCross } from "react-icons/im";

const Cart = () => {
    const data = useSelector(state => state.cartDetails.cartItems)
    const dispatch = useDispatch()
    const [couponText, setCouponText] = useState("")
    const [discount, setDiscount] = useState(0)

    const handleChange = (e) => {
        setCouponText(e.target.value);
    }
    const handleApplyCoupon= ()=>{
        console.log(couponText); 
        if (couponText === "Aney20") {
        setDiscount(totalPrice * 0.2);
    } else if (couponText === "Aney30") {
        setDiscount(totalPrice * 0.3);
    } else if (couponText === "") {
        toast.success("Please Enter Coupon");
    } else {
        toast.error("Invalid Coupon");
    }
    }
console.log(discount);

    const totalPrice = data.reduce((prev, current) => {
        // console.log(prev, "prev");
        // console.log(current, "current");
        return prev + (current.price * current.cartQun)
    }, 0)
    const handleIncrement = (id) => {
        dispatch(cartQuntity({ id: id, type: "increment" }))
        // console.log(id, "Aney");  
    }
    const handleDecrement = (id) => {
        const item = data.find(item => item.id === id);
            dispatch(cartQuntity({ id: id, type: "decrement" }))
    }
    const total = totalPrice-discount
    const handleDelete = ()=>{
        console.log("osisi");
        
    }
    return (
        <div>
            <Container>
                <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick={false}
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="dark"
                                transition={Bounce}
                            />
                <div className='pb-[140px]'>
                    <div className='flex py-[80px] font-primary'>
                        <p className='text-[14px] leading-[21px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>Home</p>
                        <p className='px-3'>/</p>
                        <p className='text-[14px] leading-[21px]'>Cart</p>
                    </div>
                    <div className='flex justify-between shadow-[0_1px_13px_rgba(0,0,0,0.05)] py-6 px-10 rounded font-primary'>
                        <div className='w-[25%]'>
                            <p className='text-base leading-6'>Product</p>
                        </div>
                        <div className='w-[25%]'>
                            <p className='text-base leading-6'>Price</p>
                        </div>
                        <div className='w-[25%]'>
                            <p className='text-base leading-6'>Quantity</p>
                        </div>
                        <div className='w-[25%]'>
                            <p className='text-base leading-6'>Subtotal</p>
                        </div>
                    </div>
                    {/* <div className='flex justify-between shadow-[0_1px_13px_rgba(0,0,0,0.05)] py-6 px-10 rounded font-primary my-[40px]'>
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
                    </div> */}
                    {
                        data.map((product, index) => (
                            <div className='flex justify-between items-center shadow-[0_1px_13px_rgba(0,0,0,0.05)] py-6 px-5 rounded font-primary my-[40px]'>

                                <div className='w-[25%] flex items-center gap-x-4'>
                                    <img className='w-[54px]' src={product.thumbnail} alt="" />
                                    <p className='text-base leading-6'>{product.title}</p>
                                </div>

                                <div className='w-[25%]'>
                                    <p className='text-base leading-6'>${product.price}</p>
                                </div>
                                <div className='w-[25%]'>
                                    <div className='inline-flex items-center py-[6px] px-3 border border-black/30 rounded'>
                                        <p className='text-base leading-6 pr-4'>{product.cartQun}</p>
                                        <div>
                                            <FaAngleUp onClick={() => handleIncrement(index)} />
                                            <FaAngleDown onClick={() => handleDecrement(index)} />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[25%]'>
                                    <p className='text-base leading-6'>${(product.price * product.cartQun).toFixed(2)}</p>
                                </div>
                                <div className='w-[50px] h-[50px] rounded-full flex justify-center items-center bg-primary text-white'>
                                    <ImCross  onClick={handleDelete}/>
                                </div>
                            </div>
                        ))
                    }

                    <div className='flex justify-between pt-6 pb-[80px]'>
                        <div className='font-primary font-medium text-base leading-6 border border-black/30 rounded py-[16px] px-[48px]'>
                            <Link to="/product">Return To Shop</Link>
                        </div>
                        <div className='font-primary font-medium text-base leading-6 border border-black/30 rounded py-[16px] px-[48px]'>
                            <a href="">Update Cart</a>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <div className='flex gap-x-4'>
                                <div className='font-primary font-medium text-base leading-6 border border-black/30 rounded py-[16px] pl-[24px]'>
                                    <input
                                        onChange={handleChange}
                                        name='coupon'
                                        type='text'
                                        placeholder='Coupon Code'
                                        className='outline-0'
                                    />
                                </div>
                                <button onClick={handleApplyCoupon} className='font-primary font-medium text-base leading-6 rounded py-[16px] px-[48px] bg-primary text-white'>Apply Coupon</button>
                            </div>
                        </div>
                        <div className='w-[470px] border py-[32px] px-[24px] font-primary'>
                            <p className='font-primary font-medium text-[20px] leading-7'>Cart Total</p>
                            <div className='flex justify-between border-b border-black/30 pt-6 pb-4'>
                                <p className='text-base leading-6'>Subtotal:</p>
                                <p className='text-base leading-6'>${totalPrice.toFixed(2)}</p>
                            </div>
                            <div className='flex justify-between border-b border-black/30 pt-6 pb-4'>
                                <p className='text-base leading-6'>Discount:</p>
                                <p className='text-base leading-6'>${discount.toFixed(2)}</p>
                            </div>
                            <div className='flex justify-between border-b border-black/30 py-4'>
                                <p className='text-base leading-6'>Shipping:</p>
                                <p className='text-base leading-6'>Free</p>
                            </div>
                            <div className='flex justify-between py-4'>
                                <p className='text-base leading-6'>Total:</p>
                                <p className='text-base leading-6'>${total.toFixed(2)}</p>
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