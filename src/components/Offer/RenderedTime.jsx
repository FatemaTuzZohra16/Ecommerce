import React from 'react'

const RenderedTime = ({ hours, days, minutes, seconds }) => {
  return (
    <div className='flex gap-x-6'>
        <div className='w-[62px] h-[62px] rounded-full bg-white flex flex-col justify-center items-center py-[14px] px-[15px]'>
            <p className='font-primary font-semibold text-base leading-5'>{hours}</p>
            <p className='font-primary text-[11px] leading-[18px]'>hours</p>
        </div>
        <div className='w-[62px] h-[62px] rounded-full bg-white flex flex-col justify-center items-center py-[14px] px-[15px]'>
            <p className='font-primary font-semibold text-base leading-5'>{days}</p>
            <p className='font-primary text-[11px] leading-[18px]'>days</p>
        </div>
        <div className='w-[62px] h-[62px] rounded-full bg-white flex flex-col justify-center items-center py-[14px] px-[15px]'>
            <p className='font-primary font-semibold text-base leading-5'>{minutes}</p>
            <p className='font-primary text-[11px] leading-[18px]'>minutes</p>
        </div>
        <div className='w-[62px] h-[62px] rounded-full bg-white flex flex-col justify-center items-center py-[14px] px-[15px]'>
            <p className='font-primary font-semibold text-base leading-5'>{seconds}</p>
            <p className='font-primary text-[11px] leading-[18px]'>seconds</p>
        </div>
    </div>
  )
}

export default RenderedTime