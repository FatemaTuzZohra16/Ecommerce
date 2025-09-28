import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import gameController from '../../assets/gameController.png'
import gameController1 from '../../assets/gameController1.png'
import gameController2 from '../../assets/gameController2.png'
import gameController3 from '../../assets/gameController3.png'
import gameController4 from '../../assets/gameController4.png'
import { FaStar } from 'react-icons/fa';
import { CiStar } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { LuRefreshCcw } from "react-icons/lu";
import { useDispatch } from 'react-redux'
import { cartTotal } from '../../slices/cartSlice'
import { Bounce, ToastContainer, toast } from 'react-toastify';

const SingleProductDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const [productData, setProductData] = useState([])
    const [showStock, setShowStock] = useState(false)
    const [selectedImg, setSelectedImg] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => setProductData(data.products));
    }, [])
    const singleProduct = productData.find((product) => product.id == id)

    useEffect(() => {
        if (singleProduct?.thumbnail) {
            setSelectedImg(singleProduct?.thumbnail)
        }
    }, [singleProduct])

    const handleAddToCart = (product) => {
        dispatch(cartTotal(product))
        toast.success("Add To Cart")
    }
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
            <div className='py-[80px]'>
                <div className='flex gap-x-[6px] font-primary text-[14px] leading-[21px] text-[#BFBFBF]'>
                    <p>Account /</p>
                    <p>Gaming /</p>
                    <p className='text-black'>Havic HV G-92 Gamepad</p>
                </div>
            </div>
            <div className='lg:flex pb-[140px]'>
                <div className="left w-[20%]">
                    {/* <div className='mb-4 bg-[#F5F5F5]  rounded'>
                            <img onClick={()=> setSelectedImg(gameController1)} src={gameController1} alt="" />
                        </div>
                        <div className='mb-4 bg-[#F5F5F5]  rounded'>
                            <img onClick={()=> setSelectedImg(gameController2)} src={gameController2} alt="" />
                        </div>
                        <div className='mb-4 bg-[#F5F5F5]  rounded'>
                            <img onClick={()=> setSelectedImg(gameController3)} src={gameController3} alt="" />
                        </div>
                        <div className='bg-[#F5F5F5] rounded'>
                            <img onClick={()=> setSelectedImg(gameController4)} src={gameController4} alt="" />
                        </div> */}
                    {
                        singleProduct?.images.map((img) => (
                            <div className='mb-4 bg-[#F5F5F5]  rounded'>
                                <img onClick={() => setSelectedImg(img)} src={img} alt="" />
                            </div>
                        ))
                    }
                </div>
                <div className="right w-[60%] bg-[#F5F5F5]  mr-[70px] ml-[30px] overflow-hidden">
                    <img className='h-[600px] object-contain' src={selectedImg} alt="" />
                </div>
                <div className='w-[40%]'>
                    <p className='font-secondery font-semibold text-[24px] leading-6'>
                        {singleProduct?.title}
                    </p>
                    <div className='flex items-center py-4'>
                        <div className='flex items-center text-[#FFAD33]'>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar className='text-[#BFBFBF]' />
                        </div>
                        <p className='font-primary text-[14px] leading-[21px] pl-2 text-[#BFBFBF]'>({singleProduct?.reviews.length} Reviews)</p>
                        <span className='px-4 text-[#BFBFBF]'>|</span>
                        <p onClick={() => setShowStock(true)} className='font-primary text-[14px] leading-[21px] text-green cursor-pointer'>
                            {showStock ? `Stock: ${singleProduct?.stock}` : "In Stock"}
                        </p>
                    </div>
                    <p className='font-secondery text-[24px] leading-6'>${singleProduct?.price}</p>
                    <p className='font-primary text-[14px] leading-[21px] py-6 border-b border-black/50'>{singleProduct?.description}</p>
                    <div className='flex items-center'>
                        <p className='font-secondery text-[20px] leading-5 py-6 mr-6'>Colours:</p>
                        <div className='flex gap-x-2'>
                            <div className='w-5 h-5 rounded-full bg-primary hover:bg-[#A0BCE0] hover:border-2 hover:border-white hover:outline-2 hover:outline-black'></div>
                            <div className='w-5 h-5 rounded-full bg-primary hover:bg-[#A0BCE0] hover:border-2 hover:border-white hover:outline-2 hover:outline-black'></div>
                        </div>
                    </div>
                    <div className='pb-[40px]'>
                        <div className='font-primary font-medium text-base leading-6 rounded py-[16px] px-[48px] bg-primary text-white inline-block'>
                            <button onClick={() => handleAddToCart(singleProduct)} href="">Add To Cart</button>
                        </div>
                    </div>

                    <div className='w-[399px] h-[180px] border border-black/50 rounded py-6'>
                        <div className='flex items-center gap-x-4 pl-4'>
                            <div className="left text-black">
                                <TbTruckDelivery className='w-10 h-10' />
                            </div>
                            <div className="right">
                                <h4 className='font-primary font-medium text-base leading-6 pb-2'>Free Delivery</h4>
                                <p className='font-primary font-medium text-[12px] leading-[18px] pb-4'>
                                    Enter your postal code for Delivery Availability
                                </p>
                            </div>
                        </div>
                        <div className='border border-black/50 pl-[-16px]'></div>
                        <div className='flex items-center gap-x-4 pl-4'>
                            <div className="left text-black">
                                <LuRefreshCcw className='w-10 h-10' />
                            </div>
                            <div className="right pt-4">
                                <h4 className='font-primary font-medium text-base leading-6 pb-2'>Free Delivery</h4>
                                <p className='font-primary font-medium text-[12px] leading-[18px]'>
                                    Enter your postal code for Delivery Availability
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProductDetail