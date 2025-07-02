import React from 'react'
import { FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from "react-icons/fa6";

const ProductRating = ({rating}) => {
    const fullRating = Math.floor(rating)
    const halfRating = rating % 1>=0.5
    const emptyRating = 5 - fullRating - (halfRating ? 1: 0)

  return (
    <div className='flex'>
        {
                [...Array(fullRating)].map(()=>(
                <FaStar className='text-[#FFAD33]'/>
            ))
        }
        {
              halfRating &&
                <FaRegStarHalfStroke />
        }
        {
                [...Array(emptyRating)].map(()=>(
                <FaStar className='text-[#BFBFBF]'/>
            ))
        }
    </div>
  )
}

export default ProductRating