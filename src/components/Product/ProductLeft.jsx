import React from 'react'
import Container from '../Layout/Container'

const ProductLeft = () => {
   const categoriesData = [
        {
            name:"Woman’s Fashion"
        },
        {
            name:"Men’s Fashion"
        },
        {
            name:"Electronics"
        },
        {
            name:"Home & Lifestyle"
        },
        {
            name:"Medicine"
        },
        {
            name:"Sports & Outdoor"
        },
        {
            name:"Baby’s & Toys"
        },
        {
            name:"Groceries & Pets"
        },
        {
            name:"Health & Beauty"
        }
    ]
  return (
    <div>
        <div>
            <p className='pt-[80px] font-primary text-[14px] leading-[21px] text-[#888888]'>home  /  shop</p>
          <h3 className='font-primary font-bold text-[20px] text-[#262626] pt-[50px] pb-[15px]'>Shop by Category</h3>
        {categoriesData.map((category)=>(
            <p className='font-primary text-[16px] leading-6 mb-[16px]'>
                {category.name}
            </p>
        )
    )}
      <h3 className='font-primary font-bold text-[20px] text-[#262626] pt-[40px] pb-[15px]'>Shop by Color</h3>
      <div>
        <div className='flex items-center gap-x-[10px] pb-[18px]'>
            <div className='w-[11px] h-[11px] rounded-full bg-black'></div>
            <p className='font-primary text-base leading-[30px] text-[#767676]'>Color 1</p>
        </div>
        <div className='flex items-center gap-x-[10px] pb-[18px]'>
            <div className='w-[11px] h-[11px] rounded-full bg-[#FF0000]'></div>
            <p className='font-primary text-base leading-[30px] text-[#767676]'>Color 1</p>
        </div>
        <div className='flex items-center gap-x-[10px] pb-[18px]'>
            <div className='w-[11px] h-[11px] rounded-full bg-[#00FF38]'></div>
            <p className='font-primary text-base leading-[30px] text-[#767676]'>Color 1</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductLeft