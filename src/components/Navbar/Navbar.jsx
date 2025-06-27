import React from 'react'
import logo from '../../assets/logo.png'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import Container from '../Layout/Container';
import {Link} from "react-router"

const Navbar = () => {
  return (
    <Container>
        <nav className='pt-[43px] pb-[14px] border-b border-[#D9D9D9]'>
      <div className='flex items-center justify-between'>
      <div>
            <img src={logo} alt="" />
        </div>
        <div>
            <ul className='flex gap-x-[48px] font-primary text-base leading-6'>
                <li className='relative group'>
                  <Link className='relative after:absolute after:content-[""] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-[#808080] group-hover:after:w-[48px]' to="/">Home</Link>
                </li>
                <li className='relative group'>
                  <Link className='relative after:absolute after:content-[""] after:bottom-0 after:w-0 after:h-[1px] after:bg-[#808080] group-hover:after:w-[48px] after:left-1/2 after:-translate-x-1/2' to="/Product">Product</Link>
                </li>
                <li className='relative group'>
                  <Link className='relative after:absolute after:content-[""] after:bottom-0 after:w-0 after:h-[1px] after:bg-[#808080] group-hover:after:w-[48px] after:left-1/2 after:-translate-x-1/2' to="">Contact</Link>
                </li>
                <li className='relative group'>
                  <Link className='relative after:absolute after:content-[""] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-[#808080] group-hover:after:w-[48px]' to="">About</Link>
                </li>
                <li className='relative group'>
                  <Link className='relative after:absolute after:content-[""] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1px] after:bg-[#808080] group-hover:after:w-[48px]' to="">Sign Up</Link>
                </li>
            </ul>
        </div>
        <div className='flex gap-6 items-center'>
          <div className='relative'>
            <input type="text"  placeholder='What are you looking for?' className='w-[243px] py-[7px] bg-[#F5F5F5] rounded-[4px] pl-5 pr-[30px] font-primary text-[12px]'
            />
            <CiSearch  size={24} className='font-bold absolute top-[4px] right-3'/>
          </div>
          <div className='flex gap-4 font-bold'>
            <CiHeart size={24}/>
            <IoCartOutline size={24}/>
            <GoPerson size={24}/>
            </div>
        </div>
      </div>
    </nav>
    </Container>
  )
}

export default Navbar