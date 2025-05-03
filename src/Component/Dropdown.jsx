import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaAddressBook } from "react-icons/fa6";
import { LuPackage } from "react-icons/lu";
import { Link } from "react-router-dom";
import { PiMedalDuotone } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { LuMessageSquareDot } from "react-icons/lu";
import { MdLogin } from "react-icons/md";
function Dropdown() {
  return (
    <>
      <div className="bg-black w-[100%] h-[100vh] flex flex-wrap justify-center items-center text-white">
        <div className=" border border-white w-[30%] h-auto p-3 bg-black">
          <div className="  w-[100%] h-14 mt-2 flex">
              <div className=" w-[21%] border  h-14 flex justify-center  items-center">
                <CgProfile className="text-[30px]" />
              </div>
              <div className="w-[78%]  flex-col pl-2 justify-center items-center">
                <span className="font-bold text-[17px]">My Pro</span>

                <span className="text-[12px] pt-0">
                  Edit your basic details
                </span>
              </div>
          </div>
          <div className="  w-[100%] h-14 mt-2 flex">
            <div className=" w-[21%] border  h-14 flex justify-center  items-center">
             <a href=""> <FaAddressBook className="text-[30px]" /></a>
            </div>
            <div className="w-[78%]  flex-col pl-2 justify-center items-center">
              <span className="font-bold text-[17px]">My Address</span>

              <span className="text-[12px] pt-0">
                Manage your saved addresses
              </span>
            </div>
          </div>
          <div className="  w-[100%] h-14 mt-2 flex">
            <div className=" w-[21%] border  h-14 flex justify-center  items-center">
              <LuPackage className="text-[30px]" />
            </div>
            <div className="w-[78%]  flex-col pl-2 justify-center items-center">
              <span className="font-bold text-[17px]">My Orders</span>

              <span className="text-[12px] pt-0">My Orders</span>
            </div>
          </div>
          <div className="  w-[100%] h-14 mt-2 flex">
            <div className=" w-[21%] border  h-14 flex justify-center  items-center">
              <PiMedalDuotone className="text-[30px]" />
            </div>
            <div className="w-[78%]  flex-col pl-2 justify-center items-center">
              <span className="font-bold text-[17px]">My Privilege Offers</span>

              <span className="text-[12px] pt-0">Exclusive offers for you</span>
            </div>
          </div>
          <div className="  w-[100%] h-14 mt-2 flex">
            <div className=" w-[21%] border  h-14 flex justify-center  items-center">
              <FaRegHeart className="text-[30px]" />
            </div>
            <div className="w-[78%]  flex-col pl-2 justify-center items-center">
              <span className="font-bold text-[17px]">My Wishlist</span>

              <span className="text-[12px] pt-0">
                Have a look at your favourite products
              </span>
            </div>
          </div>
          <div className="  w-[100%] h-14 mt-2 flex">
            <div className=" w-[21%] border  h-14 flex justify-center  items-center">
              <MdDevices className="text-[30px]" />
            </div>
            <div className="w-[78%]  flex-col pl-2 justify-center items-center">
              <span className="font-bold text-[17px]">My Devices & Plans</span>

              <span className="text-[12px] pt-0">
                Manage your devices and plans
              </span>
            </div>
          </div>
          <div className="  w-[100%] h-14 mt-2 flex">
            <div className=" w-[21%] border  h-14 flex justify-center  items-center">
              <LuMessageSquareDot className="text-[30px]" />
            </div>
            <div className="w-[78%]  flex-col pl-2 justify-center items-center border border-white">
              <span className="font-bold text-[17px]">My Service Requests</span>

              <span className="text-[12px] pt-0 border border-e-amber-50">
                Manage complaints, feedback, service requests
              </span>
            </div>
          </div>
          <div className="  w-[100%] h-14 mt-2 flex">
            <a to={"/login"}>
              <div className=" w-[21%] border  h-14 flex justify-center  items-center">
                <MdLogin className="text-[30px]" />
              </div>
              <div className="w-[78%]  flex pl-2  items-center">
                <span className="font-bold text-[22px] ">Login</span>
                <br />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
