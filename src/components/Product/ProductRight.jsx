import React, { useEffect, useState } from 'react'
import keyboard from '../../assets/keyboard.png'
import monitor from '../../assets/monitor.png'
import product3 from '../../assets/product3.png'
import { CiHeart, CiLogin } from 'react-icons/ci';
import { IoEyeOutline } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import ProductRating from './ProductRating';
import { Link } from 'react-router'


const ProductRight = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [productData, setProductData] = useState([])
    const productPerPage = 6
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => setProductData(data.products));
    }, [])
    const totalProduct = productData.length
    const totalPage = Math.ceil(totalProduct / productPerPage)
    const indexOfLastProduct = currentPage * productPerPage
    const indexOfFirstProduct = indexOfLastProduct - productPerPage
    const currentProduct = productData.slice(indexOfFirstProduct, indexOfLastProduct)
    console.log(indexOfFirstProduct);

    const data = [...Array(totalPage).keys()].map((index) => index + 1)
    const [filterProductData, setFilterProductData] = useState([])

    const totalSearchProduct = filterProductData.length;
    const totalSearchPage = Math.ceil(totalSearchProduct / productPerPage);
    const searchData = [...Array(totalSearchPage).keys()].map((index) => index + 1);

    const handleSearch = (e) => {
        const arr = []
        if (e.target.value.length == 0) {
            setFilterProductData([])
        } else {
            productData.filter((product) => {
                if (product.title.toLowerCase().includes(e.target.value.toLowerCase())) {
                    arr.push(product)
                    setFilterProductData(arr)
                }
            })
        }
    }
    console.log(filterProductData, "aney");
    // const product = [
    //     {
    //         title: 'AK-900 Wired Keyboard',
    //         price: '$960',
    //         image: keyboard,
    //         // del: $1160,
    //         sold: '(75)'
    //     },
    //     {
    //         title: 'CANON EOS DSLR Camera',
    //         price: '$360',
    //         image: monitor,
    //         rating: 5,
    //         sold: '(95)'
    //     },
    //     {
    //         title: 'ASUS FHD Gaming Laptop',
    //         price: '$700',
    //         image: product3,
    //         rating: 5,
    //         sold: '(325)'
    //     },
    //     {
    //         title: 'Breed Dry Dog Food',
    //         price: '$100',
    //         image: keyboard,
    //         rating: 3,
    //         sold: '(35)'
    //     },
    //     {
    //         title: 'CANON EOS DSLR Camera',
    //         price: '$360',
    //         image: monitor,
    //         rating: 5,
    //         sold: '(95)'
    //     },
    //     {
    //         title: 'ASUS FHD Gaming Laptop',
    //         price: '$700',
    //         image: product3,
    //         rating: 5,
    //         sold: '(325)'
    //     },
    //     {
    //         title: 'Breed Dry Dog Food',
    //         price: '$100',
    //         image: keyboard,
    //         rating: 3,
    //         sold: '(35)'
    //     },
    //     {
    //         title: 'CANON EOS DSLR Camera',
    //         price: '$360',
    //         image: monitor,
    //         rating: 5,
    //         sold: '(95)'
    //     },
    //     {
    //         name: 'ASUS FHD Gaming Laptop',
    //         price: '$700',
    //         image: product3,
    //         rating: 5,
    //         sold: '(325)'
    //     },

    // ]
    return (
        <div className='mt-[210px] mb-[104px]'>
            <div className='flex justify-between flex-wrap relative'>
                <div className='flex items-center gap-x-3 top-[-60px] absolute right-0 z-40 mb-[30px]'>
                    <p className='font-primary text-base leading-6'>Show : </p>
                    <div>
                        <input onChange={handleSearch} type="text" placeholder='Search' className='w-[197px] h-[29px] rounded-[5px] border border-[#D9D9D9] outline-0 pl-5 cursor-pointer' />
                    </div>
                </div>
                {
                    filterProductData.length > 0 ?
                        filterProductData.map((product) => (

                            <Link to={`/Product/ ${product.id}`} className='card mb-[60px]'>
                                <div className='w-[270px] h-[300px] bg-[#F5F5F5] rounded py-[55px] px-[65px] relative group'>
                                    <img src={product.thumbnail} alt="" />
                                    <div className='hidden group-hover:block'>
                                        <a className='absolute font-primary font-medium text-base leading-6 py-2 rounded bg-black text-white bottom-0 left-0 w-full text-center' href="">Add To Cart</a>
                                    </div>
                                    <div className='absolute top-3 right-3'>
                                        <div className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center mb-2'>
                                            <CiHeart />
                                        </div>
                                        <div className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'>
                                            <IoEyeOutline />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className='w-[260px] font-primary font-medium text-[16px] pt-[16px]'>{product.title}</p>
                                    <div className=''>
                                        <p className='font-primary font-medium text-[16px] text-primary py-2'>{product.price} <del className='text-[#7F7F7F] ml-3'>$320</del></p>
                                    </div>
                                    <div className='flex items-center text-[#FFAD33]'>
                                        {/* <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar /> */}
                                        <div>
                                            <ProductRating rating={product.rating} />
                                        </div>
                                        <p className='ml-2 font-primary font-semibold text-[14px] text-[#7F7F7F]'>{product.reviews.length}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                        :
                        currentProduct.map((product) => (

                            <Link to={`/Product/ ${product.id}`} className='card mb-[60px]'>
                                <div className='w-[270px] h-[300px] bg-[#F5F5F5] rounded py-[55px] px-[65px] relative group'>
                                    <img src={product.thumbnail} alt="" />
                                    <div className='hidden group-hover:block'>
                                        <a className='absolute font-primary font-medium text-base leading-6 py-2 rounded bg-black text-white bottom-0 left-0 w-full text-center' href="">Add To Cart</a>
                                    </div>
                                    <div className='absolute top-3 right-3'>
                                        <div className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center mb-2'>
                                            <CiHeart />
                                        </div>
                                        <div className='w-[34px] h-[34px] rounded-full bg-white flex justify-center items-center'>
                                            <IoEyeOutline />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className='w-[260px] font-primary font-medium text-[16px] pt-[16px]'>{product.title}</p>
                                    <div className=''>
                                        <p className='font-primary font-medium text-[16px] text-primary py-2'>{product.price} <del className='text-[#7F7F7F] ml-3'>$320</del></p>
                                    </div>
                                    <div className='flex items-center text-[#FFAD33]'>
                                        {/* <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar /> */}
                                        <div>
                                            <ProductRating rating={product.rating} />
                                        </div>
                                        <p className='ml-2 font-primary font-semibold text-[14px] text-[#7F7F7F]'>{product.reviews.length}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                }
            </div>
            <div className='flex gap-x-[10px]'>
    {
        (filterProductData.length > 3 || (filterProductData.length === 0 && data.length > 3)) && (
            <button className='font-primary font-bold px-4'
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
            >
                Prev
            </button>
        )
    }

    {
        filterProductData.length > 3 
            ? searchData.map((item) => (
                <div
                    key={item}
                    className={`py-2 px-3 rounded cursor-pointer ${currentPage === item ? 'bg-gray-300 text-black' : 'bg-black text-white'}`}
                    onClick={() => setCurrentPage(item)}
                >
                    {item}
                </div>
            ))
            : filterProductData.length > 0
                ? null
                : data.map((item) => (
                    <div
                        key={item}
                        className={`py-2 px-3 rounded cursor-pointer ${currentPage === item ? 'bg-gray-300 text-black' : 'bg-black text-white'}`}
                        onClick={() => setCurrentPage(item)}
                    >
                        {item}
                    </div>
                ))
    }

    {
        (filterProductData.length > 3 || (filterProductData.length === 0 && data.length > 3)) && (
            <button className='font-primary font-bold px-4'
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, data.length))}
                disabled={currentPage === data.length}
            >
                Next
            </button>
        )
    }
</div>

        </div>
    )
}

export default ProductRight