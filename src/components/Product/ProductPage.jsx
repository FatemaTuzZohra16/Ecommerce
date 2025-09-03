import React from 'react'
import Container from '../Layout/Container'
import ProductLeft from './ProductLeft'
import ProductRight from './ProductRight'

const ProductPage = () => {
    return (
        <div>
            <Container>
                <div className='md:flex gap-x-[97px]'>
                    <div className='w-auto md:w-[20%]'>
                       <ProductLeft/>
                    </div>
                    <div className='w-auto md:w-[80%]'>
                        <ProductRight/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProductPage