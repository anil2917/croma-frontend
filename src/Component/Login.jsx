import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import OtpPage from "./Login/OtpPage";
function Login() {
  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const [sentOtp, setSentOtp] = useState("");
  const [step, setStep] = useState("send"); // 'send' or 'verify'
  const [message, setMessage] = useState();
  const [message2, setMessage2] = useState();
  const [finalOtp, setFinalOtp] = useState("");
  // import React{ useState} from "react";
  const { ssss, setssss } = useState("");

  const [timeLeft, setTimeLeft] = useState(30);
  const navigate = useNavigate();

  console.log(contact);
  console.log("otp",otp);
  console.log("final", finalOtp);
  console.log(message);
  const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

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

  const sendOtp = () => {
    const code = generateOTP();
    setSentOtp(code);
    setStep("verify");
    setMessage(`OTP sent to ${contact}: ${code}`);
    // For demo purposes
    // In a real app, replace this with an API call to send the OTP
    // console.log(code);
  };

  const verifyOtp = () => {
    if (finalOtp === sentOtp) {
      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/");
      }, 2000); // 3 seconds delay
    } else {
      toast.error("Invalid otp");
    }
  };

  const handleChange = (e) => {
    const input = e.target.value;
    var message = document.getElementById("message");

    if (input.length < 10) {
      // e.preventDefault(); // Stop form from submitting
      setMessage2(
        "Incorrect number,Please enter a 10 digit mobile number to receive your OTP"
      );
    } else {
      // The form will submit if the condition is
      setMessage2("");
    }
    setContact(input);
  };

  // bbbbbbbbbbbbbbbbbbbb* resendcountdown bbbbbbbbbb
  useEffect(() => {
    if (timeLeft === 0) return;

    const timer2 = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer2);
  }, [timeLeft]);
  // bbbbbbbbbbbbbbbbbbbbbbbbbb* resend otp bbbbbbbbbb

  return (
    <>
      <Toaster />
      <div className="bg-black w-[100%]  h-[100vh] flex  justify-center items-center">
        {step === "send" ? (
          <div className="lg:w-[525px]  lg:h-[406px] h-[380px] w-[405px] border border-[#353535] bg-black flex  justify-center items-center text-white rounded-l">
            <div className="lg:w-[378px] w-[320px] h-[346px]    ">
              <div className=" w-full flex  border border-[#353535] rounded-l">
                <p className="w-[50%] flex justify-center items-center h-13">
                  <a href="">Login</a>
                </p>
                <p className="w-[50%] flex justify-center items-center h-13">
                  <a href=""></a>Create Account
                </p>
              </div>
              <div className="items-center flex justify-center h-10 my-2">
                <p>Please enter your Phone number</p>
              </div>
              <div className="w-full h-13 ">
                <form action="" id="myForm">
                  <input
                    id="numberInput"
                    type="text"
                    value={contact}
                    pattern={"/^d+$/"}
                    maxLength={10}
                    onChange={handleChange}
                    required
                    placeholder="Enter Your Phone Number"
                    className="w-full h-13 border-1 text-white border-white text-2xl  rounded-l placeholder:text-xl pl-4  "
                  />
                </form>
              </div>
              <p className="text-[#FF0000] ">{message2}</p>
              <div className="items-center flex justify-center h-10 mt-3">
                <form action="">
                  <input
                    type="checkbox"
                    required
                    className=" w-9 h-5 bg-black border border-[#353535] hover:bg-[#12daa8]"
                  />
                </form>
                <p className="text-[14px] pb-2">Keep me signed in</p>
              </div>
              <div className="text-[12px] items-center flex justify-center h-10 ">
                <p>
                  By continuing you agree to our{" "}
                  <span
                    className="c
              text-[#12daa8]"
                  >
                    <a href="">Terms of Use</a>
                  </span>{" "}
                  &{" "}
                  <span
                    className="c
              text-[#12daa8]"
                  >
                    <a href=""></a>Privacy Policy
                  </span>
                </p>
              </div>
              <div className="w-full flex   h-13 mt-3">
                {contact && contact.length >= 10 ? (
                  <button
                    className="w-full bg-[#12daa8] rounded-xl text-black font-bold text-[13px]"
                    onClick={sendOtp}
                    // disabled={!contact}
                    type="submit"
                  >
                    <p>Continue</p>
                  </button>
                ) : (
                  <button
                    className="lg:w-full lg:ml-0 w-[90%] ml-2 bg-[#12daa8] rounded-xl text-black font-bold text-[13px]"
                    onClick={sendOtp}
                    // disabled={!contact}
                    disabled
                    type="submit"
                  >
                    <p>Disabled</p>
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
        <OtpPage sentOtp={sentOtp} finalOtp={finalOtp} setFinalOtp={setFinalOtp} contact={contact}  sendOtp={sendOtp} timeLeft={timeLeft} message={message} />
        )}
      </div>
    </>
  );
}

export default Login;
