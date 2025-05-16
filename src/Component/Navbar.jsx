import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/Croma-Logo.png";
import { useCart } from "react-use-cart";
import { CgProfile } from "react-icons/cg";
import { FaAddressBook } from "react-icons/fa6";
import { LuPackage } from "react-icons/lu";
import { PiMedalDuotone } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { LuMessageSquareDot } from "react-icons/lu";
import { MdLogin } from "react-icons/md";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const { totalUniqueItems } = useCart();

  let [toggle, settoggle] = useState(false);

  function toggleMEnu() {
    settoggle(!toggle);
  }

  console.log(toggle);
  return (
    <>
      <div
        id="header"
        className=" bg-black w-[100%] h-auto  sticky top-0 left-0 m-auto"
        style={{ zIndex: 9999 }}
      >
        <div className="w-full lg:w-[80%] h-17 flex text-center justify-between lg:justify-between text-white mx-auto">
          <div className="text-center pt-4 flex w-30">
            <a className="text-white text-4xl flex ml-1 " >
             {toggle ?  <IoClose  className="text-4xl  lg:hidden md:hidden mr-2 mt-[]" onClick={toggleMEnu} /> : <IoMenuOutline className="text-4xl  lg:hidden md:hidden mr-2 mt-[]" onClick={toggleMEnu} />}
            </a>
            <a className="text-white text-1xl font-semibold font-serif "href={"/home"}>
              <img src={logo} alt="" className="w-26 h-10 bg-black md:ml-10 lg:ml-[-10px]" />
            </a>
          </div>
          <div className="lg:flex flex lg:w-[50%] lg:ml-50">
            <ul className={toggle ? "links" : "active flex"}>
              <li className="m-5 text-1.4xl ">
                <a href={"/Musice"}>Audio</a>
              </li>
              <li className="m-5 text-1.4xl ">
                <a href={"/Gameing"}>Gaming</a>
              </li>
              <li className="m-5 text-1.4xl ">
                <a href={"/Mobile"}>Mobile</a>
              </li>
              <li className="m-5 text-1.4xl ">
                <a href={"/TV"}>TV</a>
              </li>
              {/* <li className="m-5 text-1.4xl hover:underline decoration-blue-300"><button onClick={()=>filterItems("tv")}><a href={"/TV"}>TV</a></button></li> */}
            </ul>
          </div>
          <div
            className=" flex pt-5 text-center lg:ml-70 w-[30%]  justify-center md:w-[30%] "
            id="user-item"
          >
            <h2 className=" user-hover text-[26px]">
              <div className="relative ">
                <FaUser className="hover:text-[#12daa8] sm:mr- md:mr-8"  />
                <div
                  className="hover-item  h-auto  bg-black absolute top-10 md:w-[250px]  w-[190px] right-[-60px] md:right-[-100px] lg:right-[-190px] lg:w-[300px] lg:top-[47px] "
                  // style={{ right: "-190px", width: "300px", top: "47px" }}
                >
                  <Link to="/">
                    <div className="  w-[100%] h-auto lg:mt-2 flex py-2">
                      <div className=" lg:lg:w-[21%] w-[30%] h-10 flex justify-center items-center ">
                        <CgProfile className="text-[30px]" />
                      </div>
                      <div className="w-[78%]  flex-col  justify-center items-center text-start">
                        <div className="font-bold lg:text-[17px]  text-[14px]">My Profile</div>
                        <div className="text-[12px] ">
                          Edit your basic details
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="  w-[100%] h-auto lg:mt-2 flex py-2">
                    <div className=" lg:w-[21%] w-[30%] h-10 flex justify-center  items-center ">
                      <FaAddressBook className="lg:text-[30px]" />
                    </div>
                    <div className="lg:w-[78%]  flex-col  justify-center items-center text-start">
                      <div className="font-bold lg:text-[17px]  text-[14px]">My Address</div>

                      <div className="text-[12px] ">
                        Manage your saved addresses
                      </div>
                    </div>
                  </div>
                  <div className="  w-[100%] h-auto lg:mt-2 flex py-2">
                    <div className=" lg:w-[21%] w-[30%]  h-10 flex justify-center  items-center ">
                      <LuPackage className="text-[30px]" />
                    </div>
                    <div className="w-[78%]  flex-col  justify-center items-center text-start">
                      <div className="font-bold lg:text-[17px] text-[14px]">My Orders</div>

                      <div className="text-[12px] pt-0">My Orders</div>
                    </div>
                  </div>
                  <div className="  w-[100%] h-auto lg:mt-2 flex py-2">
                    <div className=" lg:w-[21%] w-[30%]  h-10 flex justify-center  items-center">
                      <PiMedalDuotone className="text-[30px]" />
                    </div>
                    <div className="w-[78%]  flex-col  justify-center items-center text-start">
                      <div className="font-bold lg:text-[17px] text-[14px]">
                        My Privilege Offers
                      </div>

                      <div className="text-[12px] pt-0">
                        Exclusive offers for you
                      </div>
                    </div>
                  </div>
                  <div className="  w-[100%] h-auto lg:mt-2 flex py-2">
                    <div className=" lg:w-[21%] w-[30%]  h-10 flex justify-center  items-center ">
                      <FaRegHeart className="text-[30px]" />
                    </div>
                    <div className="w-[78%]  flex-col  justify-center items-center text-start">
                      <div className="font-bold lg:text-[17px] text-[14px]">My Wishlist</div>

                      <div className="text-[12px] pt-0">
                        Have a look at your favourite products
                      </div>
                    </div>
                  </div>
                  <div className="  w-[100%] h-auto lg:mt-2 flex py-2">
                    <div className=" lg:w-[21%] w-[30%]  h-10 flex justify-center  items-center">
                      <MdDevices className="text-[30px]" />
                    </div>
                    <div className="w-[78%]  flex-col  justify-center items-center text-start">
                      <div className="font-bold lg:text-[17px] text-[14px] ">
                        My Devices & Plans
                      </div>

                      <div className="text-[12px] pt-0 ">
                        Manage your devices and plans
                      </div>
                    </div>
                  </div>
                  <div className="  w-[100%] h-auto lg:mt-2 flex py-2">
                    <div className=" lg:w-[21%] w-[30%]  h-10 flex justify-center  items-center">
                      <LuMessageSquareDot className="text-[30px]" />
                    </div>
                    <div className="w-[78%]  flex-col  justify-center items-center text-start">
                      <div className="font-bold lg:text-[17px] text-[14px]  ">
                        My Service Requests
                      </div>
                      <br />

                      <div className="text-[12px] mt-[-34px] border-e-amber-50">
                        Manage complaints, feedback, service requests
                      </div>
                    </div>
                  </div>
                  <Link to={"/"}>
                    {" "}
                    <div className="  w-[100%] h-auto lg:mt-2 flex py-2 mb-3">
                      <div className=" lg:w-[21%] w-[30%]  h-10 flex justify-center  items-center">
                        <MdLogin className="text-[30px]" />
                      </div>
                      <div className="w-[78%]  flex pl-2  items-center">
                        <div className="font-bold lg:text-[22px] text-[20px]  ">Login</div>
                        <br />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </h2>
            <a href={"/Addcart"} className="text-[26px] lg:ml-15 ml-1 ">
              <IoCartOutline />
              <div
                className=" w-4 h-4 text-[10px] text-b text-black bg-[#12daa8] z-10 items-center ml-4 mt-[-30px] "
                style={{ borderRadius: "50%" }}
              >
                {totalUniqueItems}
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
