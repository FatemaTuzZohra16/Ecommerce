import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import BestSellingProduct from '../BestSellingProduct/BestSellingProduct'
import Offer from '../Offer/Offer'
import OurProducts from '../OurProducts/OurProducts'
import Arrival from '../Arrival/Arrival'
import Service from '../Service/Service'
// import Footer from '../Footer/Footer'
function Home() {
    return (
        <>
            {/* <Header />
            <Navbar /> */}
            <Banner/>
            <Category/>
            <BestSellingProduct/>
            <Offer/>
            <OurProducts/>
            <Arrival/>
            <Service/>
            {/* <Footer/> */}
        </>
    )
}

export default Home