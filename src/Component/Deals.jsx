import React from "react";
import "../App.css";
import frige from "../images/FRIGE.webp";
import AC from "../images/AC.webp";
import ARO from "../images/ARO.webp";
import COOLER from "../images/COOLER.webp";
import TV from "../images/TV.PNG";
import WASHING from "../images/WASHING.webp";
function Deals() {
  return (
    <>
      <div><div className="bg-black w-[100%] h-auto text-white">
        <p className=" lg:text-500  text-400 lg:text-3xl p-3 lg:p-6 pl-5 lg:pl-14  md:pl-10">Summer Special Deals</p>
        <div id="sport" className="bg-black w-[100%] h-auto text-white">
          <div className="sport   ">
            <a href="">
              <img src={frige} alt="" width="130%" />
            </a>
          </div>
          <div className="sport  ">
            <a href="">
              <img src={ARO} alt="" width="130%" />
            </a>
          </div>
          <div className="sport ">
            <a href="">
              <img src={AC} alt="" width="130%" />
            </a>
          </div>
          <div className="sport  ">
            <a href="">
              <img src={COOLER} alt="" width="130%" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black w-[100%] h-auto text-white">
        <p className="lg:text-3xl  pl-5 py-3 f lg:p-6 lg:pl-16 md:pl-10 ">
          Best Deals on TV & Washing Machines
        </p>
        <div id="sport" className="bg-black w-[100%] h-auto text-white flex flex-col  md:flex-col lg:flex-row">
          <div className="sport2 md:w-[100%]  lg:w-[42%] pb-3 md:pb-5 ">
            <a href="">
              <img src={TV} alt="" width="100%" />
            </a>
          </div>
          <div className="sport2 md:w-[100%]  lg:w-[42%] md:pb-5 pb-3">
            <a href="">
              <img src={WASHING} alt="" width="100%" />
            </a>
          </div>
        </div>
      </div></div>
    </>
  );
}

export default Deals;
