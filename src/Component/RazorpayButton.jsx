import React from "react";
import Addcart from "./Addcart";
import { CartProvider, useCart } from "react-use-cart";
import logo from "../assets/Croma-Logo.png";

const RazorpayButton = () => {

     const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
        useCart();
        
      // if (isEmpty) return <p className=' text-blue '>Your cart is empty</p>;
      const { cartTotal } = useCart();
      console.log(cartTotal)
  const loadRazorpay = () => {
    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag", // Replace with your Razorpay key
      amount: `${Math.round(cartTotal-cartTotal*3/100) * 100}`, // Amount in paise = ₹500
      currency: "INR",
      name: "CROMA",
      description: "Test Transaction",
      image: "logo", // optional
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Some Corporate Address",
      },
      theme: {
        color: "#12daa8",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <button
        onClick={loadRazorpay}
        className="bg-[#12daa8] text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#10bfa1] transition"
      >
        Pay ${Math.round(cartTotal-cartTotal*3/100)} with Razorpay
      </button>
    </div>
  );
};

export default RazorpayButton;
