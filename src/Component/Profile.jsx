import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {

   const [profiledata, setprofiledata]= useState()
    const [defaultNumber, setDefaultNumber] = useState("");


   const handlechange = (e)=>{
    setprofiledata({...profiledata,[e.target.name]:e.target.value})
    
   }
   console.log(profiledata)


   const handleSubmit = async(e)=>{
      e.preventDefault();
      console.log('www')
      const usepro = await axios.post("https://croma-backend.vercel.app/Profile",profiledata).then((res)=>{
        console.log(res)
      })
   }
useEffect(()=>{
   let contactNumber = JSON.parse(localStorage.getItem("Number"));
    setDefaultNumber(contactNumber);
},[defaultNumber])
  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 flex justify-center items-start">
      <div className="w-full max-w-md sm:max-w-lg bg-black p-4 sm:p-6 rounded-2xl shadow-lg">
        <div className="text-xs sm:text-sm text-white mb-2">
          My Account &gt; My Profile Page
        </div>
        <h1 className="text-xl sm:text-2xl font-bold mb-4">My Profile Page</h1>
<form action="" onSubmit={handleSubmit}> 
        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Title</label>
          <select className="w-full px-3 py-2 bg-black border  rounded-md focus:outline-none text-sm" required>
            <option value=""></option>
            <option value="mr">Mr</option>
            <option value="mrs">Mrs</option>
            <option value="ms">Ms</option>
            <option value="dr">Dr</option>
          </select>
        </div>

        {/* First Name */}
        <div className="mb-4">
          <label className="block text-sm mb-1">First Name</label>
          <input
            type="text"
             placeholder="Enter first Name"
             required
             onChange={handlechange}
             name="firstname"
            className="w-full px-3 py-2 bg-white text-black  rounded-md focus:outline-none text-sm"
          />
        </div>

        {/* Middle Name */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Middle Name</label>
          <input
            type="text"
            required
             onChange={handlechange}
            name="middlename"
            placeholder="Enter Middle Name"
            className="w-full px-3 py-2 bg-white  text-black rounded-md focus:outline-none text-sm"
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Last Name</label>
          <input
            type="text"
           placeholder="Enter Last Name"
           required
            onChange={handlechange}
           name="lastname"
            className="w-full px-3 py-2 bg-white text-black rounded-md focus:outline-none text-sm"
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-sm mb-1" >Gender</label>
          <div className="flex   sm:gap- gap-4 text-sm h-auto  flex-wrap">
            <label className="flex items-center gap-2">
              <input type="radio" name="gender"  onChange={handlechange} value={"female"} className="accent-[#12daa8] " /> Female
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="gender"  onChange={handlechange} value={"male"} className="accent-[#12daa8]" /> Male
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" onChange={handlechange}  value={"Transgender"} className="accent-[#12daa8]" /> Transgender
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="gender"  onChange={handlechange} value={"I'd rather not say"}  className="accent-[#12daa8]" /> I'd rather not say
            </label>
          </div>
        </div>

        {/* Mobile Number */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Mobile number</label>
          <div className="flex">
            <span className="bg-white text-black px-3 py-2 rounded-l-md text-sm">+91</span>
            <input
              type="text"
              name="number"
                // defaultValue="8769970689"
                value={defaultNumber}
                disabled
               onChange={handlechange}
              className="w-full px-3 py-2 bg-white text-black   border-l-black rounded-r-md focus:outline-none text-sm"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Email Id</label>
          <input
            type="email"
            name="email"
             onChange={handlechange}
            // defaultValue="sam77372917@gmail.com"
            className="w-full px-3 py-2 bg-white text-black rounded-md focus:outline-none text-sm"
          />
        </div>

        {/* DOB */}
        <div className="mb-4">
          <label className="block text-sm mb-1">Date of birth</label>
          <input
            type="date"
            name="dob"
            required
             onChange={handlechange}
            className="w-full px-3 py-2 bg-white text-black rounded-md focus:outline-none text-sm"
          />
        </div>
        {/* {doa} */}
          <div className="mb-4">
          <label className="block text-sm mb-1">Date of Anniversary</label>
          <input
            type="date"
            required
             onChange={handlechange}
            name="doa"
            className="w-full px-3 py-2 bg-white text-black rounded-md focus:outline-none text-sm"
          />
        </div>
        <button className="bg-[#12daa8] w-[130px] h-10 rounded-[7px] mx-30 mt-5 " onClick={handleSubmit}>Save Change</button></form>
      </div>
    </div>
  );
};

export default Profile;
