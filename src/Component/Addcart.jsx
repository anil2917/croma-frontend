import React, { useState } from "react";
import { CartProvider, useCart } from "react-use-cart";
import { FaGreaterThan } from "react-icons/fa6";
// import { CiPercent } from "react-icons/ci";
import { LuCirclePercent } from "react-icons/lu";
import Navbar from "./Navbar";
import { GiShoppingCart } from "react-icons/gi";
import RazorpayButton from "./RazorpayButton";

function Addcart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();
  const [Checkout, setcheckout] = useState();
  // if (isEmpty) return <p className=' text-blue '>Your cart is empty</p>;
  const { cartTotal } = useCart();
  const Payment = () => {
    setcheckout("pay");
  };

  return (
    <>
      <Navbar />

      {Checkout === "pay" ? (
        <RazorpayButton />
      ) : (
        <div className="lg:w-[50%] w-[100%] text-black rounded lg:ml-30">
          <div className=" lg:w-[100%] sticky top-22 mb-50">
            <div className="flex justify-between items-center m-2 lg:mx-0 md:w-[98%] w-[98%] lg:w-[100%] sticky top-22 ">
              <h1 className="lg:text-3xl ">YOUR CART </h1>
              <h4 className=" lg:text-2xl mr-2">{totalUniqueItems} item</h4>
            </div>

            <div className=" lg:w-[100%]  bg-white  lg:h-18 h-13 flex justify-between px-3 items-center lg:mx-0 m-1 md:w-[98%]  w-[98%] sticky top-32 ">
              <p className=" lg:w-49 flex text-[20px] font-bold">
                <LuCirclePercent className="lg:mr-2  mr-1 mt-2 font-bold lg:text-xl " />
                <span className="text-[16px] mt-1"> Apply Coupon</span>
              </p>
              <p>
                <FaGreaterThan />
              </p>
            </div>
            <hr />

            <div className="item flex justify-center ">
              {isEmpty ? (
                <p className=" text-2 mt-10  font-bold ">
                  <GiShoppingCart className="lg:w-50 w-30  lg:h-50 h-30" />
                  <span className="lg:ml-11">Your cart is empty</span>
                </p>
              ) : (
                <>
                  <div className="detail lg-w-full lg:w-[100%] lg:ml-0  w-[98%] m-1">
                    <ul className="">
                      {items.map((item) => (
                        <li
                          key={item.id}
                          className="  bg-white border  flex justify-between my-3 p-4"
                        >
                          <img
                            src={item.image}
                            alt=""
                            width={"19%"}
                            height={"80px"}
                            className="rounded-l"
                          />
                          <div className="w-[30%] ml-[-20px]">
                            <p className=" h-[20px] text-[14px] lg:text-[16px] overflow-hidden">
                              {item.title}
                            </p>
                            <p className="lg:mt-6 mt-2 text-[11px] lg:text-[16px] ">
                              Standard Delivery by 7 <br />
                              April 2025 | ₹49
                            </p>
                          </div>

                          <div className="btns lg:w-[20%] w-[12%] flex ml-[-40px] ">
                            <button
                              className="border p-2 lg:h-[50px] my-auto lg:mx-2 rounded-2xl"
                              onClick={() =>
                                updateItemQuantity(
                                  item.id,
                                  (item.quantity ?? 0) - 1
                                )
                              }
                            >
                              -
                            </button>
                            <button className="border p-2 lg:h-[50px] my-auto lg:mx-2 mx-1 rounded-2xl">
                              {item.quantity}
                            </button>
                            <button
                              className="border p-2 lg:h-[50px] my-auto lg:mx-2 rounded-2xl"
                              onClick={() =>
                                updateItemQuantity(
                                  item.id,
                                  (item.quantity ?? 0) + 1
                                )
                              }
                            >
                              +
                            </button>
                          </div>

                          <div className="price w-[10%] items-center  lg:text-xl font-bold ml-2 lg:mt-10">
                            <p>
                              $
                              {item.quantity *
                                Math.round(
                                  item.price -
                                    item.price *
                                      (item.discount == null
                                        ? 3 / 100
                                        : item.discount / 100)
                                )}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
          {isEmpty ? (
            ""
          ) : (
            <div className="lg:w-[29%] w-[98%] bg-white flex-col justify-center items-center  md:bottom-0 sticky lg:fixed lg:top-32 lg:right-10 text-black rounded ">
              <div>
                <h2 className="lg:text-2xl text-xl font-bold p-2 lg:p-4">
                  Order Summary ({totalUniqueItems} item)
                </h2>
              </div>
              <div className=" flex justify-between p-2 lg:p-4">
                <p>Original Price</p>
                <p className=" pr-7">${cartTotal}</p>
              </div>
              <div className=" flex justify-between p-2 lg:p-4">
                <p>Total</p>
                <p className=" pr-7">
                  ${Math.round(cartTotal - (cartTotal * 3) / 100)}
                </p>
              </div>
              <div className="text-center">
                <button
                  className=" text-black lg:w-81 w-[80%] h-9  rounded-[10px] ml-2  mt-2 bg-[#12daa8] font-bold mb-6"
                  onClick={Payment}
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Addcart;
