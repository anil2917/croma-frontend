import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import { CartProvider } from 'react-use-cart'
import { BrowserRouter, Routes,Route  } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Product from './Component/Product'
import Addcart from './Component/Addcart'
import Addcart2 from './Component/Addcart2'
import Musice from './Component/Musice'
import TV from './Component/TV'
import Gameing from './Component/Gameing'
import Mobile from './Component/Mobile'
import Home from './Component/Home'
import Deals from './Component/Deals'
import Slider from './Component/Slider'
import Dropdown from './Component/Dropdown'
import Map from './Component/Map'
import Footer from './Component/Footer'
import Login from './Component/Login'
import Mordetail from './Component/Signup'
import Verify from './Component/Verify'
import Payment from './Component/Payment'
import RazorpayButton from "./Component/RazorpayButton";
import OtpPage from './Component/Login/OtpPage'
import Signup from './Component/Signup'
import Profile from './Component/Profile'
import Sample from './Component/Sample'



function App() {
  

  return (
    <>
    
    <BrowserRouter>
    <CartProvider>
    <Routes>
      <Route path="/Navbar" element={<Navbar/>}/>
      <Route path="/Product" element={<Product/>}/>
      <Route path="/Addcart" element={<Addcart/>}/>
      <Route path="/Addcart2" element={<Addcart2/>}/>
      <Route path="/TV" element={<TV/>}/>
      <Route path="/Mobile" element={<Mobile/>}/>
      <Route path="/Gameing" element={<Gameing/>}/>
      <Route path="/Musice" element={<Musice/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/Deals" element={<Deals/>}/>
      <Route path="/Slider" element={<Slider/>}/>
      <Route path="/Dropdown" element={<Dropdown/>}/>
      <Route path="/Map" element={<Map/>}/> 
      <Route path="/Footer" element={<Footer/>}/>   
      <Route path="/log" element={<Login/>}/>   
      <Route path="/Profile" element={<Profile/>}/>   
      <Route path="/More" element={<Signup/>}/>  
      <Route path="/Verify" element={<Verify/>}/>  
      <Route path="/otppage" element={<OtpPage/>}/>  
      <Route path="/upi" element={<Payment />} />
      <Route path="/" element={<Sample />} />
      <Route path="/upi2" element={<RazorpayButton />
} />
    </Routes>
    </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App
