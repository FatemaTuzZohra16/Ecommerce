import React from 'react'
import Container from '../Layout/Container'
import Countdown from 'react-countdown';
import RenderedTime from './RenderedTime';

const Offer = () => {
  return (
    <div className='pb-[161px]'>
        <Container>
            <div className='bg-[url(./assets/offer.png)] py-[59px] bg-center bg-cover bg-no-repeat'>
                <div className='ml-[56px]'>
                    <p className='font-primary font-semibold text-base text-green'>Categories</p>
                    <h3 className='w-[440px] font-secondery font-semibold text-[48px] leading-[60px] text-white tracking-[4%] my-[32px]'>Enhance Your Music Experience</h3>
                    <div>
                          <Countdown date={Date.now() +  518400000} 
                          renderer={RenderedTime}
                          />,
                    </div>
                    <div className='mt-10'>
                        <a className='font-primary font-medium text-base leading-6 bg-green text-white py-[16px] px-[48px] rounded' href="">Buy Now!</a>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Offer