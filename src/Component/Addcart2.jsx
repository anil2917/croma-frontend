import React, { useEffect, useState } from "react";
// import Layout from "../Layout/Layout";
import axios from "axios";
import { CartProvider, useCart } from "react-use-cart";
import toast, { Toaster } from "react-hot-toast";

function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } = useCart();


  return (
    <div>
      <Toaster />
      <div className="bg-gray-100 pt-5 pb-10 ">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items ()</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
          <div className="rounded-lg md:w-2/3 ">
            {items.map((item) => {
              return (
                <>
                  <div className="justify-between mb-6 rounded-lg border  drop-shadow-xl bg-white p-6  sm:flex  sm:justify-start">
                    <div className="cart-img">
                      <img
                       src={item.image}
                        alt=""
                        className="w-full rounded-lg sm:w-40"
                      />
                    </div>
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between m-0">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">
                        {item.title}
                        </h2>
                        
                        <p>Price : {item.price}</p>
                      </div>
                    </div>
                    <div className="acrt-btns w-50">
                      <div className="flex justify-between">
                        <button
                          style={{
                            border: "1px solid",
                            padding: "0px 30px",
                            height: "33px",
                            marginTtop: "11px",
                            backgroundColor: "darkslategrey",
                            color: "white",
                          }}
                          className="count bg-white rounded-md"
                                                  >
                          -
                        </button>
                        <h3 style={{ padding: "0px 10px", fontSize: "20px" }}>
                          {/* {item.quantity} */}
                        </h3>
                        <button
                          style={{
                            border: "1px solid",
                            padding: "0px 30px",
                            height: "33px",
                            marginTtop: "11px",
                            backgroundColor: "darkslategrey",
                            color: "white",
                          }}
                          className="count bg-white rounded-md"
                          
                        >
                          +
                        </button>
                        <button
                          className="mx-2"
                         
                        >
                          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div
          className="check"
          style={{
            width: "50%",
            margin: " auto",
            // border: "1px solid",
          }}
        >
          <button
            style={{
              width: "100%",
              padding: "10px 20px",
              backgroundColor: "#9b6868",
            }}
            className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
