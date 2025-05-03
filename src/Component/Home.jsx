import React from 'react'
import Navbar from './Navbar'
import Product from './Product'

import '../App.css' 
import Deals from './Deals'
import Slider from './Slider'
import Footer from './Footer'
import Addcart from './Addcart'
import Map from './Map'

function Home() {

  return (
    <>
    <div className="bg-black w-[100%] h-[auto] flex flex-wrap justify-center items-center">
        <Navbar/>
         <Slider/>
        <Deals/>
        <Product/>
        <Footer/> 
        {/* <Addcart/> */}
        <Map/>
    </div>
      
    </>
  )
}

export default Home

