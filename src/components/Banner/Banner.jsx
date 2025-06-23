import React from 'react'
import BannerLeft from './BannerLeft'
import Container from '../Layout/Container'
import BannerRight from './BannerRight'

const Banner = () => {
  return (
    <section>
        <Container>
            <div className='mt-[40px] flex '>
                <BannerLeft/>
                <BannerRight/>
            </div>
        </Container>
    </section>
  )
}

export default Banner