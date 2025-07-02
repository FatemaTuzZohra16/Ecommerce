import React from 'react'
import Container from '../Layout/Container'
import ProductDetails from './ProductDetails'
import SingleProductDetail from '../SingleProductDetail/SingleProductDetail'

const ProductDetailsPage = () => {
  return (
    <div>
        <Container>
                <SingleProductDetail />
                <ProductDetails />
        </Container>
    </div>
  )
}

export default ProductDetailsPage