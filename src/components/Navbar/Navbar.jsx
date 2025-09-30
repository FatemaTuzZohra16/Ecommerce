import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import Container from '../Layout/Container';
import { Link } from "react-router"
import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(prevShow => !prevShow)
  };
 const cartItems = useSelector((state) => state.cartDetails.cartItems || []);
const totalItems = cartItems.reduce((total, item) => total + (item.cartQun || 0), 0);

console.log("Cart Items:", cartItems);
console.log("Total Items:", totalItems);

  return (
    <Container>
      <nav className='pt-[43px] pb-[14px] border-b border-[#D9D9D9]'>
        <div className='lg:flex items-center justify-between'>
          <div className='flex justify-between items-center'>
            <img src={logo} alt="" />
            <div className='block lg:hidden'>
              <FaBars onClick={handleClick} size={24} />
            </div>
          </div>
          <div>
            <ul className='hidden lg:flex gap-x-[48px] font-primary text-base leading-6'>
              <li className='relative group'>
                <Link className='relative after:absolute after:content-[""] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-[#808080] group-hover:after:w-[48px]' to="/">Home</Link>
              </li>
              <li className='relative group'>
                <Link className='relative after:absolute after:content-[""] after:bottom-0 after:w-0 after:h-[1px] after:bg-[#808080] group-hover:after:w-[48px] after:left-1/2 after:-translate-x-1/2' to="/Product">Product</Link>
              </li>
              <li className='relative group'>
                <Link className='relative after:absolute after:content-[""] after:bottom-0 after:w-0 after:h-[1px] after:bg-[#808080] group-hover:after:w-[48px] after:left-1/2 after:-translate-x-1/2' to="/contact">Contact</Link>
              </li>
              <li className='relative group'>
                <Link className='relative after:absolute after:content-[""] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-[#808080] group-hover:after:w-[48px]' to="/about">About</Link>
              </li>
              <li className='relative group'>
                <Link className='relative after:absolute after:content-[""] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-[#808080] group-hover:after:w-[48px]' to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
          <div className='hidden lg:flex gap-6 items-center'>
            <div className='relative'>
              <input type="text" placeholder='What are you looking for?' className='w-[243px] py-[7px] bg-[#F5F5F5] rounded-[4px] pl-5 pr-[30px] font-primary text-[12px]'
              />
              <CiSearch size={24} className='font-bold absolute top-[4px] right-3' />
            </div>
            <div className='flex gap-4 font-bold'>
              <CiHeart size={24} />

              <div className="relative">
  <Link to="/cart">
    <IoCartOutline size={24} />
    {totalItems > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        {totalItems}
      </span>
    )}
  </Link>
</div>


              <GoPerson size={24} />
            </div>
          </div>
        </div>
        {
          show &&
          <div className='bg-primary text-center py-10 rounded mt-5'>
            <div>
              <ul className='flex flex-col gap-y-5 font-primary text-base leading-6'>
                <li className='relative group'>
                  <Link className='relative after:absolute after:content-[""] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-[#808080] group-hover:after:w-[48px] text-white' to="/">Home</Link>
                </li>
                <li className='relative group'>
                  <Link className='relative after:absolute after:content-[""] after:bottom-0 after:w-0 after:h-[1px] after:bg-[#808080] group-hover:after:w-[48px] after:left-1/2 after:-translate-x-1/2 text-white' to="/Product">Product</Link>
                </li>
                <li className='relative group'>
                  <Link className='relative after:absolute after:content-[""] after:bottom-0 after:w-0 after:h-[1px] after:bg-[#808080] group-hover:after:w-[48px] after:left-1/2 after:-translate-x-1/2 text-white' to="">Contact</Link>
                </li>
                <li className='relative group'>
                  <Link className='relative after:absolute after:content-[""] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-[#808080] group-hover:after:w-[48px] text-white' to="">About</Link>
                </li>
                <li className='relative group'>
                  <Link className='relative after:absolute after:content-[""] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-[#808080] group-hover:after:w-[48px] text-white' to="/signup">Sign Up</Link>
                </li>
              </ul>
            </div>
            <div className='flex flex-col gap-6 items-center'>
              <div className='relative mt-4'>
                <input type="text" placeholder='What are you looking for?' className='w-[243px] py-[7px] bg-[#F5F5F5] rounded-[4px] pl-5 pr-[30px] font-primary text-[12px]'
                />
                <CiSearch size={24} className='font-bold absolute top-[4px] right-3' />
              </div>
              <div className='flex gap-4 font-bold text-white'>
                <CiHeart size={24} />
                <Link to="/cart">
                  <IoCartOutline size={24} />
                </Link>
                <GoPerson size={24} />
              </div>
            </div>
          </div>
        }
      </nav>
    </Container>
  )
}

export default Navbar