import React, { useEffect, useState } from "react";
import iphone from "../images/iphone.webp";
import { CiDeliveryTruck } from "react-icons/ci";
import { GrDeliver } from "react-icons/gr";
import { useCart } from "react-use-cart";
import Navbar from "./Navbar";
import { IoMenuOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Product() {
  let [products, setdata] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [newPrice, setNewPrice] = useState(null);
  const { addItem } = useCart();

  async function featchdata() {
    let data = await fetch("https://fakestoreapi.in/api/products");
    let jsondata = await data.json();
    setdata(jsondata.products);
    setFilterData(jsondata.products);
  }

  // const discount = () => {
  //   console.log("fgfgdfdf");
  //   const price = products.find((pr) => {
  //     let newprice = (pr.price * 30) / 100;
  //     setNewPrice(newprice);
  //   });
  // };

  useEffect(() => {
    featchdata();
  }, []);

  const filterItems = (value) => {
    console.log("ggdggdgdg");
    const filterd = products.filter((item) => item.category == value);
    setFilterData(filterd);
    console.log(filterd);
  };

  return (
    <>
      <p className="text-4xl text-white  p-5 ">Latest Launches </p>
      <div className="bg-black w-full flex flex-wrap justify-center items-center">
        {filterData.slice(0, 12).map((item) => {
          return (
            <div className="lg:w-[29%] w-[80%] lg:h-[470px] md:w-[40%] flex md:flex-col lg:flex-col justify-center items-center border-b-[0.8px] py-5 border-amber-50 m-2  my-3">
              <div className="lg:w-[350px] md:w-[280px] lg:h-[240px] h-[180px] w-[27%] flex-wrap justify-center content-center items-center rounded-3xl bg-[#202020] overflow-hidden">
                <img src={item.image} alt="" className="w-[100%] h-[100%]   " />
              </div>
              <div className="ml-4  md:ml-1 lg:w-[350px] lg:h-[190px] h-auto mt-2 rounded-3xl md:w-[78%] w-[68%]">
                <h2 className=" text-white font-bold lg:text-[18px] text-[12px]  ml-1 h-[37px]  lg:h-[60px] overflow-hidden">
                  {item.title}
                </h2>
                <h2 className=" text-white  lg:text-1xl  ml-1 lg:h-[25px] h-[20px] uppercase overflow-hidden ">
                  {item.model}
                </h2>
                <h2
                  id="price"
                  className=" text-white font-bold text-[19px] lg:text-2xl my-2  lg:ml-1  "
                >
                  $
                  {Math.round(
                    item.price -
                      item.price *
                        (item.discount == null ? 3 / 100 : item.discount / 100)
                  )}
                  {item.discount == null ? (
                    ""
                  ) : (
                    <span className="font-bold lg:text-[15px] text-[9px]  ml-1 text-[#888686] line-through">
                      ${item.price}
                    </span>
                  )}
                  {item.discount == null ? (
                    ""
                  ) : (
                    <span className="font-bold lg:text-[16px] text-[14px] text-[#888686]  lg:ml-6 ml-15 ">
                      (save
                      <span className="lg:text-[12px] text-[9px] ">
                        {Math.round((item.price * item.discount) / 100)}
                      </span>
                      ){" "}
                    </span>
                  )}
                  {item.discount == null ? (
                    ""
                  ) : (
                    <span className=" lg:text-[14px] text-[12px] border p-1 lg:ml-5 rounded ">
                      {item.discount}%off
                    </span>
                  )}
                </h2>
                <p className=" text-white flex  ml-1  ">
                  <GrDeliver className="mr-2 mt-1 text-xl" />
                  Express Delivery by today
                </p>
                <button
                  className=" text-black w-28 h-9 font-bold rounded-2xl  mt-2 bg-[#12daa8]"
                  onClick={() => {
                    addItem(item);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Product;
