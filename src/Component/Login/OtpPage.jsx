import React from "react";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";


function OtpPage({
  sentOtp,
  finalOtp,
  setFinalOtp,
  contact,
  sendOtp,
  message,
}) {
  console.log(sentOtp);
  const navigate = useNavigate();
  const [resend, setresend] = useState("wait");
  const [timeLeft, setTimeLeft] = useState(10);
  const inputRefs = useRef([]);

  function getOtp(e, index) {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  }
  const checkOTP = () => {
    const enteredOTP = inputRefs.current.map((input) => input.value).join("");
    if (enteredOTP.length === sentOtp.length) {
      if (enteredOTP === sentOtp) {
        toast.success(" OTP is correct");

        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else {
        toast.error(" OTP is incorrect");
      }
    } else {
      alert("");
    }
  };
  useEffect(() => {
    if (timeLeft === 0) return;
    const timer2 = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer2);
  }, [timeLeft]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setresend("responce");
    }, 10000); // 30 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

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
              <div style={{ display: "flex", gap: "10px" }} className="">
                {[...Array(4)].map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    onChange={(e) => getOtp(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    className="w-[15%] h-13 border-1 border-white rounded-[7px] text-2xl placeholder:text-xl m-3 p-4 outline-none text-white"
                  />
                ))}
              </div>
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
              className="w-full bg-[#12daa8] rounded-xl text-black font-bold text-[13px]"
              onClick={checkOTP}
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
