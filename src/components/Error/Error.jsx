import React from 'react'
import Container from '../Layout/Container'
import { Link } from 'react-router'

const Error = () => {
  return (
    <div>
        <Container>
            <div className='flex font-primary pt-[96px] pb-[80px] gap-x-3'>
                    <p className='text-[14px] leading-[21px] text-black/70'>Home</p>
                    <p>/</p>
                    <p className='text-[14px] leading-[21px]'>404 Error</p>
                </div>
                <div className='text-center mb-[140px]'>
                    <h1 className='font-secondery font-medium text-[110px] leading-[115px] tracking-[4%]'>404 Not Found</h1>
                    <p className='font-primary text-base leading-[24px] mt-[40px] mb-[80px]'>Your visited page not found. You may go home page.</p>
                    <Link to="/"  className="font-primary font-medium text-base leading-[24px] bg-primary text-white rounded py-[16px] px-[48px]">Back to home page</Link>
                </div>
        </Container>
    </div>
  )
}

export default Error