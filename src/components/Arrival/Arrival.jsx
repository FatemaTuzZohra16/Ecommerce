import React from 'react'
import Container from '../Layout/Container'
import arrival1 from '../../assets/arrival1.png'
import arrival2 from '../../assets/arrival2.png'
import arrival3 from '../../assets/arrival3.png'
import arrival4 from '../../assets/arrival4.png'

const Arrival = () => {
  return (
    <div className='py-[32px] pb-[192px]'>
        <Container>
            <div>
                 <div className='title-part'>
                        <div className='flex items-center '>
                            <div className='w-5 h-10 rounded bg-primary'></div>
                            <div>
                                <p className='font-primary font-semibold text-[16px] leading-5 pl-[16px] text-primary'>Featured</p>
                            </div>
                        </div>
                        <div>
                            <h3 className='font-secondery font-semibold text-[36px] leading-[48px] mt-5'>New Arrival</h3>
                        </div>
                    </div>
                    <div className='lg:flex mt-[60px] lgx:gap-2 lst:gap-x-[30px'>
                        <div className="left w-[50%] mb-[30px] lg:mb-0">
                            <img src={arrival1} alt="" />
                        </div>
                        <div className="right lgx:w-[48%] lst:w-[50%]">
                            <div className='mb-[32px]'>
                                <img src={arrival2} alt="" />
                            </div>
                            <div className='sm:flex lgx:gap-x-[10px] lst:gap-x-[30px] lgx:w-[48%] lst:w-[50%]'>
                                <img src={arrival3} alt=""  className='mb-[20px]'/>
                                <img src={arrival4} alt="" />
                            </div>
                        </div>
                    </div>
            </div>
        </Container>
    </div>
  )
}

export default Arrival