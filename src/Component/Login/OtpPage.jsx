import React from "react";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function OtpPage({ sentOtp, finalOtp,setFinalOtp ,contact,sendOtp ,timeLeft ,message}) {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [resend, setresend] = useState("wait");
  console.log(finalOtp);
  console.log(sentOtp);
  console.log(contact);
  function getOtp(e) {
    setOtp({
      ...otp,
      [e.target.name]: e.target.value,
    });
  }
  useEffect(() => {
    let concatenatedValues = "";
    for (let key in otp) {
      if (otp.hasOwnProperty(key)) {
        concatenatedValues += otp[key];
      }
    }
    setFinalOtp(concatenatedValues);
  }, [otp]);

  const verifyOtp = () => {
    if (finalOtp === sentOtp) {
      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/home");
      }, 2000); // 3 seconds delay
    } else {
      toast.error("Invalid otp");
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setresend("responce");
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Toaster />
      <div className="w-[500px]    border border-[#353535] bg-black flex  justify-center items-center text-white rounded-l">
        <div className="w-[378px] h-[346px]    ">
          <div className=" w-full flex  justify-center ">
            <p className="text-[20px] font-bold ">VERIFY WITH OTP</p>
          </div>
          <div className="items-center flex justify-center h-10  text-[16px] my-2">
            <small>
              Send to <span className=" ">{contact}</span>
            </small>
          </div>
          <div className="w-full h-15 ">
            <form action="" className="ml-11">
              <input
                type="text"
                required
                // value={otp.otp1}
                onChange={getOtp}
                
                className="w-[15%] h-13 border-1 border-white rounded-[7px] text-2xl placeholder:text-xl m-3 p-4 outline-none"
                maxLength={1}
                name="otp1"
              />
              <input
                type="text"
                required
                // value={finalOtp}
                onChange={getOtp}
                className="w-[15%] h-13 border-1 border-white rounded-[7px] text-2xl placeholder:text-xl m-3 p-4 outline-none"
                maxLength={1}
                name="otp2"
              />
              <input
                type="text"
                required
                // value={finalOtp}
                onChange={getOtp}
                className="w-[15%] h-13 border-1 border-white text-2xl rounded-[7px] placeholder:text-xl m-3 p-4 outline-none"
                maxLength={1}
                name="otp3"
              />
              <input
                type="text"
                required
                // value={finalOtp}
                onChange={getOtp}
                className="w-[15%] h-13 border-1 border-white text-2xl rounded-[7px] placeholder:text-xl m-3 p-4 outline-none "
                maxLength={1}
                name="otp4"
              />
            </form>
          </div>

          <div className="text-[14px] items-center flex justify-center h-10 font-bold my-8 ">
            {resend === "wait" ? (
              <p>
                Resend otp in:
                <span className="text-[12px] ml-2 "> 00 : {timeLeft} sec</span>
              </p>
            ) : (
              <p>
                Didn't Receive Your OTP?
                <span
                  className="text-[12px] underline text-[#12daa8]"
                  onClick={sendOtp}
                >
                  Resend otp
                </span>
              </p>
            )}  
          </div>
          <div className="w-full flex   h-13 mt-3">
            <button
              className="w-full bg-[#353535] rounded-xl text-[#a1a1a1] font-bold text-[13px]"
              onClick={verifyOtp}
            >
              <p>Submit otp</p>
            </button>
          </div>
           {message && (
            <p className="text-center text-sm text-gray-700 mt-3">{message}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default OtpPage;
