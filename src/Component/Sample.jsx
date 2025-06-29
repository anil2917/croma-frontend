import React from "react";
import logo from '../assets/logo.png'
import dor from '../assets/TOP-RIGHT.svg'
import dol from '../assets/TOP-LEFT -1.svg'
import { FaEnvelope } from "react-icons/fa6";
import Rocket from "../assets/Group 1321314974.svg"
import Think from "../assets/Device.svg"
import Success from "../assets/Group 1321315124F 1.svg"
import Dream from "../assets/Frame 1.svg"
import logofoo from "../assets/logo-footer.png"
import { GrBottomCorner } from "react-icons/gr";
import { RxCornerBottomLeft } from "react-icons/rx";
import dob from "../assets/bottom-bottom-1.png"

import { RxCornerTopRight  } from "react-icons/rx";
import { WiDegrees } from "react-icons/wi";
import { IoMenuOutline } from "react-icons/io5";



const Sample = () => {
  return (





    <div className=" bg-[#db2929] w-full text-gray-900">
      {/* Header */}
      <div className="bg-[#2b0d3a] w-full   overflow-hidden   justify-between bg-no-repeat" style={{
        backgroundImage: `url(${dol}), url(${dor})`, backgroundPosition: "left center,right center"
      }}>
        <div className="   flex  justify-between bg-no-repeat w-full" >
          <header className=" lg:w-[85%] text-black lg:ml-8 mx-2 mt-7  w-full">
            <div className=" bg-white w-full mx-auto px-3 py-2 mt-2 flex items-center justify-between border rounded">
              <div className="flex items-center space-x-2  ">
                <img src={logo} alt="" />

              </div>
              <nav className="  lg:space-x-8  md:space-x-4  text-l   hidden lg:block font-medium text-[#2b0d3a]  mr-[-15rem]">
                <a href="#" className="border-b-2 border-white">Home</a>
                <a href="#">About</a>
                <a href="#">Our Brands</a>
                <a href="#">What We Do</a>
                <a href="#">Team</a>
                <a href="#">Careers</a>
              </nav>
              <nav className=" md:flex  lg:space-x-8  md:space-x-4  text-l font-medium text-[#2b0d3a]  ">
                 <IoMenuOutline className="text-4xl  lg:hidden  md:ml-80 sm:ml-25" />
              </nav>

            </div>
          </header>
          <div className=" hidden sm:block bg-orange-500  w-20 mt-10 h-14 lg:mr-15 mr-4 ml-3 rounded text-white ">
            <span className="  flex items-center justify-center pt-2   "> <FaEnvelope className="w-full h-10 " /></span>
          </div>

        </div>
        <section className="text-center lg:py-20 py-10  text-white">
          <h1 className="lg:text-4xl md:text-3xl text-[39px] font-bold">
            Where     <span className="text-orange-500 relative p-2"> <RxCornerBottomLeft className="lft-btn " />Vision <RxCornerTopRight    className="rgt-btn"  />
            </span>   Becomes Venture
          </h1>
          <p className="mt-4 lg:w-2xl  md:w-[60%] sm:w-[80%]  mx-auto text-sm">
            Sample Project builds and nurtures independent brands that do more than compete; they connect, inspire,
            and redefine the emotional and cultural fabric of everyday life.
          </p>
          <button className="mt-8 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-[#2b0d3a] transition">
            Discover Our Vision
          </button>
        </section>
      </div>


      {/* What We Are Section */}
      <section className="bg-white lg:py-10 py-6 lg:flex ">

        <div className=" lg:w-170 lg:ml-4">
          <div className="text-white bg-orange-500 lg:text-sm text-l font-semibold lg:w- lg:px-2 w-35 px-5 py-2 relative top-3  lg:left-4 md:left-90 left-35 ">What We Are</div>
          <div className="bg-orange-100 px-5 p-3   border-t-2  md:h-50">
            <h2 className="lg:text-xl md:text-[32px] text-[28px] font-bold pt-3  lg:font-semibold md:ml-3 lg:ml-0 px-7 ">
              Not a Product. Not a Platform. <span className="text-orange-500">A Philosophy</span>
            </h2>
            <p className="mt-4 lg:text-sm text-gray-700 text-m mx-auto md:ml-8 md:w-[98%]   ">
              Sample Project is the invisible architecture behind transformative brand cultivating ideas,
              people, and systems that create meaningful impact across diverse industries. From wellness to
              culture, from technology to aesthetics we operate at the intersection of feeling and future.
            </p>
          </div>
        </div>
        <img src={Rocket} alt="Rocket Illustration" className="lg:w-100  w-full lg:h-full lg:ml-19 md:h-60 lg:py-1 py-3 h-50  md:ml-10 " />
      </section>

      {/* Our Brands */}
      <section className="bg-[#f3eaff] py-2  px-6 text-center">
        <div className="text-sm font-bold bg-purple-800 text-white lg:w-25  w-35 py-2  relative top-[-22px] lg:left-150  md:left-85 left-35 rounded ">Our Brands</div>
        <h2 className="lg:text-3xl  text-4xl font-bold lg:ml-0 md:ml-6">Our Universe of Brands</h2>
        <p className="mt-2 lg:w-180 md:w-150 w-100 mx-auto   font-bold text-m text-gray-700">
          We don’t follow trends. We create the conditions for timelessness. Explore the growing constellation of ventures born from our ethos.
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-6 gap-3 lg:pl-10  pl-4 mt-10">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white border w-87  flex-wrap border-purple-800 overflow-hidden rounded-xl shadow">
              <div className="flex items-center w-100 ">
                <div className=" h-15 p-3  lg:w-65"> <img src={logo} alt="" /></div>
              </div>
              <div className="bg-purple-800 text-white "> <p className=" text-s  p-2">
                We don’t follow trends. We create the conditions for timelessness. Explore the growing constellation of ventures born from our ethos.
              </p></div>
            </div>
          ))}
        </div>
        <button className="mt-10 bg-orange-500  text-m text-purple-800 px-6 py-3 my-3 w-75 sm:w-100 font-bold rounded-full">Explore All</button>
      </section>

      {/* Philosophy Section */}
      <section className="bg-white lg:py-14 py-10    lg:flex justify-evenly">
        
        <div className="md-block lg:block hidden"><img src={Think} alt=""  className="lg:w-94  w-full  md:h-60 lg:py-1 py-3   md:ml-10 "/></div>
        <div className="lg:w-150">
          <div className="text-orange-500 text-m font-semibold mb-2 text-white bg-orange-500 lg:text-sm text-[20px] font-semibold   lg:w-32 w-40 lg:px-2 px-2 py-1 relative top-6  lg:left-4 md:left-80 left-35 ">The Philosophy</div>
          <div className="bg-orange-100 p-3  border-t-2 md:h-55  lg:h-55 h-80  ">
            <h2 className="lg:text-xl md:text-[32px]  text-[31px] font-bold py-2   lg:font-semibold lg:ml-0 ml-15  md:ml-12  ">
              What If Business Could <span className="text-orange-500">Feel Like Art?</span>
            </h2>
            <p className="mt-2 lg:text-sm text-gray-700 text-m   md:ml-6 text-center lg:text-start lg:ml-2  ">
              At Sample Project, we believe brands can be portals not just to profit, but to purpose,
              transformation, and collective uplift. We obsess over craft, intuition, resonance, and cultural timing.
            </p>
            <p className="mt-2 text-m italic md:ml-42  lg:ml-2 text-black">
              Every brand We will build begins with a single question:
            </p>
              <p className="mt-2 text-l md:ml-45  lg:ml-2 ml-7 italic text-orange-500">
              Does this make the world feel more alive?
            </p>
          </div>
        </div>
         <div className="lg:hidden "><img src={Think} alt=""  className="lg:w-94  w-full  md:h-60 lg:py-1 py-3   md:ml-10 "/></div>
      </section>

      {/* Vision Section */}
      <section className=" bg-purple-100 py-21 px-6 text-center  h-100 w-full  bg-no-repeat" style={{ backgroundImage: `url(${Success}), url(${Dream})`, backgroundPosition: "left bottom  ,right bottom", backgroundSize: '180% 80%, 180% 80%', }}>
        <div className="text-sm font-bold bg-purple-800 text-white lg:w-25  w-35 py-2  relative lg:top-[-97px] top-[-98px] lg:left-150  md:left-85  left-30 rounded">The Vision</div>
        <h2 className="lg:text-xl text-[27px] font-bold py-2  lg:font-semibold md:ml-12 md:mt-[-80px] lg:mt-[-60px] mt-[-100px] ">
          Our Vision Is Not to Own the Future. It’s to Inspire It
        </h2>
        <p className="mt-4 lg:text-sm text-gray-700 text-m  md:ml-8 md:w-[98%]  font-bold ">
          Only deep belief in ideas that matter and experiences that move people.
          In a world driven by urgency, we build with intention. 
        </p>
        <button className="mt-8 bg-orange-500 text-purple-800 font-bold px-6 py-2 rounded-[7px]">Learn More About Us</button>
      </section>

      {/* Footer */}
      <footer className="bg-[#2b0d3a] text-white py-8 px-6">
        <div className="max-w-7xl mx-auto lg:flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 bg-no-repeat " style={{ backgroundImage: `url(${dob})`, backgroundSize: "70% 500%" , backgroundPosition:"center"  }}>
          <div className="flex items-center space-x-2  md:mb-5">
            <img src={logofoo} alt="" />
          </div>
          <nav className="flex lg:space-x-6  md:space-x-16  space-x-5 flex-wrap text-m text-white font-bold text-black py-2 lg:w-130 md:w-180 w-90 h-auto ml-2 rounded-[8px]
           bg-[#957ba1]">
            <a href="#" className="w-25 lg:w-auto md:w-auto sm:py-2  mx-auto ">Home</a>
            <a href="#" className="w-25 lg:w-auto md:w-auto sm:py-2 mx-auto  " >About</a>
            <a href="#" className="w-25 lg:w-auto md:w-auto sm:py-2  mx-auto " >Our Brands</a>
            <a href="#" className="w-25 lg:w-auto md:w-auto sm:py-2  mx-auto " >What We Do</a>
            <a href="#" className="w-25 lg:w-auto md:w-auto sm:py-2  mx-auto " >Team</a>
            <a href="#" className="w-25 lg:w-auto md:w-auto sm:py-2  mx-auto " >Careers</a>
          </nav>
        </div>
        <div className="mt-4 text-xs text-center  md:flex lg:flex justify-between   ">
          <div className="py-3"> © 2025 Sample Project. All rights reserved </div> <div className="py-3"><a href="#">Term of Use</a> | <a href="#">Privacy Policy</a></div>
        </div>
      </footer>
    </div>
  );
};

export default Sample;
