import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [profiledata, setprofiledata] = useState();
  const [defaultNumber, setDefaultNumber] = useState("");

  const handlechange = (e) => {
    setprofiledata({ ...profiledata, [e.target.name]: e.target.value });
  };
  console.log(profiledata);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("www");
    const usepro = await axios
      .post("https://croma-backend.vercel.app/Profile", {profiledata})
      .then((res) => {
        console.log(res.data);
      });
  };
  useEffect(() => {
    let contactNumber = JSON.parse(localStorage.getItem("Number"));
    setDefaultNumber(contactNumber);
  }, [defaultNumber]);
  return (
    <div
      style={{ width: "1" }}
      className="w-full  bg-black p-4 sm:p-6 rounded-2xl bg-black text-white shadow-lg border-white-800 border w-[100%]"
    >
      <div className="text-xs sm:text-sm text-white mb-2">
        My Account &gt; My Profile Page
      </div>
      <h1 className="text-xl sm:text-2xl font-bold mb-4">My Profile Page</h1>
      <div className="w-[80%] flex justify-center m-auto">
        <form action="" onSubmit={handleSubmit} className="flex flex-wrap">
          <div className="mb-4 lg:w-[40%] w-[48%]">
            <label className="block text-sm mb-1">Title</label>
            <select
              className="w-full px-3 py-2 bg-black border  rounded-md focus:outline-none text-sm"
              required
            >
              <option value=""></option>
              <option value="mr">Mr</option>
              <option value="mrs">Mrs</option>
              <option value="ms">Ms</option>
              <option value="dr">Dr</option>
            </select>
          </div>

          <div className="mb-4 lg:w-[40%] ">
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

          <div className="mb-4 lg:w-[40%] ">
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

          <div className="mb-4 lg:w-[40%] ">
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

          <div className="mb-4 ">
            <label className="block text-sm mb-1">Gender</label>
            <div className="flex   sm:gap- gap-4 text-sm h-auto  flex-wrap">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  onChange={handlechange}
                  value={"female"}
                  className="accent-[#12daa8] "
                />{" "}
                Female
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  onChange={handlechange}
                  value={"male"}
                  className="accent-[#12daa8]"
                />{" "}
                Male
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  onChange={handlechange}
                  value={"Transgender"}
                  className="accent-[#12daa8]"
                />{" "}
                Transgender
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  onChange={handlechange}
                  value={"I'd rather not say"}
                  className="accent-[#12daa8]"
                />{" "}
                I'd rather not say
              </label>
            </div>
          </div>

          <div className="mb-4 lg:w-[40%] ">
            <label className="block text-sm mb-1">Mobile number</label>
            <div className="flex">
              <span className="bg-white text-black px-3 py-2 rounded-l-md text-sm">
                +91
              </span>
              <input
                type="text"
                name="number"
                value={defaultNumber}
                disabled
                onChange={handlechange}
                className="w-full  px-3 py-2 bg-white text-black   border-l-black rounded-r-md focus:outline-none text-sm"
              />
            </div>
          </div>

          <div className="mb-4 lg:w-[40%] ">
            <label className="block text-sm mb-1">Email Id</label>
            <input
              type="email"
              name="email"
              onChange={handlechange}
              className="w-full px-3 py-2 bg-white text-black rounded-md focus:outline-none text-sm"
            />
          </div>

          <div className="mb-4 lg:w-[40%] ">
            <label className="block text-sm mb-1">Date of birth</label>
            <input
              type="date"
              name="dob"
              required
              onChange={handlechange}
              className="w-full px-3 py-2 bg-white text-black rounded-md focus:outline-none text-sm"
            />
          </div>
          <div className="mb-4 lg:w-[40%] ">
            <label className="block text-sm mb-1">Date of Anniversary</label>
            <input
              type="date"
              required
              onChange={handlechange}
              name="doa"
              className="w-full px-3 py-2 bg-white text-black rounded-md focus:outline-none text-sm"
            />
          </div>
          <button
            className="bg-[#12daa8] w-[130px] h-10 rounded-[7px] mx-30 mt-5 "
            onClick={handleSubmit}
          >
            Save Change
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
