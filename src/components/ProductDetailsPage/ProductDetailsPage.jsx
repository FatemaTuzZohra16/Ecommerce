import React from 'react'
import Container from '../Layout/Container'
import ProductDetailsPageLeft from './ProductDetailsPageLeft'
import ProductDetailsPageRight from './ProductDetailsPageRight'
import ProductDetails from './ProductDetails'

const ProductDetailsPage = () => {
  return (
    <div>
        <Container>
            <div className='flex gap-x-[70px]'>
                <div className='w-[60%]'>
                    <ProductDetailsPageLeft/>
                </div>
                <div className='w-[40%]'>
                    <ProductDetailsPageRight/>
                </div>
            </div>
            <div>
                <ProductDetails />
            </div>
        </Container>
    </div>
  )
}

export default ProductDetailsPage