import axios from "axios";
import React, { useEffect, useState } from "react";
import Mobile from "./Mobile";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Signup() {
  const [defaultNumber, setDefaultNumber] = useState("");
  const navigate = useNavigate();
  // const [valid, setvalid] = useState();

  const [formData, setFormData] = useState({
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
     number:"",
      firstname:"",
      lastname:"",
      middlename:"",
      gender:"",
      dob:"",
      doa:"",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    let contactNumber = JSON.parse(localStorage.getItem("Number"));
    setDefaultNumber(contactNumber);
    setFormData({
      ...formData,
      mobile: contactNumber,
    });
  }, [defaultNumber]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  console.log("Signup function")
    if (formData.password !== formData.confirmPassword) {
      toast.error("!Different Passwords")
    } else {
      const user = await axios
        .post("http://localhost:8080/creatuser", formData)
        .then((res) => {
          console.log(res.data);
          if(res.data.status){
            toast.error("Email is already Registered")
          }else{
            navigate("/")
          }
        });
    }
  };

  return (
    <>
      <Toaster />

      <div className="min-h-screen flex items-center justify-center bg-black p-4">
        <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="tel"
              name="mobile"
              maxLength={10}
              placeholder="Mobile Number"
              value={defaultNumber}
              disabled
              onChange={handleChange}
              className="w-full h-13 border-1 text-white border-white text-2xl  rounded-l placeholder:text-xl pl-4  "
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full h-13 border-1 text-white border-white text-2xl  rounded-l placeholder:text-xl pl-4  "
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              maxLength={8}
              onChange={handleChange}
              className="w-full h-13 border-1 text-white border-white text-2xl  rounded-l placeholder:text-xl pl-4  "
              required
            />
            <input
              type="password"
              name="confirmPassword"
              maxLength={8}
              placeholder="Confirm Password"
              onChange={handleChange}
              className="w-full h-13 border-1 text-white border-white text-2xl  rounded-l placeholder:text-xl pl-4  "
              required
            />
            <button
              type="submit"
              className="w-full bg-[#12daa8] text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
