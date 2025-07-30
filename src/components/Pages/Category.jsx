import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import Container from '../Layout/Container';
import ProductRating from '../Product/ProductRating';

const Category = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${name}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [name]);

  return (
    <div className='py-10'>
      <Container>
        <div>
          <div className='flex justify-between items-center'>
            <h2 className='text-2xl font-bold mb-[60px] capitalize'>{name} Products</h2>
            <Link to={"/product"} className='font-primary font-medium text-base leading-[24px] rounded bg-primary text-white py-3 px-8'>Go Back</Link>
          </div>
          <div className='flex flex-wrap gap-7'>
            {products.map(product => (
              <div>
                <div key={product.id} className='w-[270px] h-[290px] bg-[#F5F5F5] flex items-center rounded relative group'>
                  <img src={product.thumbnail} alt={product.title} />
                  <div className='hidden group-hover:block'>
                    <a className='absolute font-primary font-medium text-base leading-6 py-2 rounded bg-black text-white bottom-0 left-0 w-full text-center' href="">Add To Cart</a>
                  </div>
                </div>
                <p className='w-[260px] font-primary font-medium text-base leading-[24px] pt-6 pb-2'>{product.title}</p>
                <p className='font-primary font-medium text-base leading-[24px] text-primary'>${product.price}</p>
                <div className='flex items-center gap-2 pt-2'>
                  <ProductRating rating={product.rating} />
                  <p className='font-primary text-base text-gray-600'>({product.reviews.length})</p>
                </div>
              </div>

            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Category;
