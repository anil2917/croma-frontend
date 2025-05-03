import React from 'react'

function Verify() {
  return (
    <>
       <div className="bg-black w-[100%] h-[100vh] flex  justify-center items-center">
        <div  className='w-[500px] h-[406px]   border border-[#353535] bg-black flex  justify-center items-center text-white rounded-l'>
            <div className='w-[378px] h-[346px]    '>
              <div className=' w-full flex  justify-center '>
                <p className='text-[20px] font-bold '>VERIFY WITH OTP</p>
                
              </div >
              <div className='items-center flex justify-center h-10  text-[16px] my-2'><small>Send to 8769970689</small></div>
              <div className='w-full h-15 '><form action=""  className='ml-11'>
                <input type="text"  required className='w-[15%] h-13 border-1 border-white rounded-[7px] placeholder:text-xl m-3 ' />
                <input type="text"  required className='w-[15%] h-13 border-1 border-white rounded-[7px] placeholder:text-xl m-3 ' />
                 <input type="text"  required className='w-[15%] h-13 border-1 border-white rounded-[7px] placeholder:text-xl m-3 ' /> 
                <input type="text"  required className='w-[15%] h-13 border-1 border-white rounded-[7px] placeholder:text-xl m-3 ' /></form></div>
              
              <div className='text-[14px] items-center flex justify-center h-10 font-bold my-8 '><p>Didn't Receive Your OTP? <span className='text-[12px] underline text-[#12daa8]'>Resend otp</span></p></div>
              <div className='w-full flex   h-13 mt-3'><button className='w-full bg-[#353535] rounded-xl text-[#a1a1a1] font-bold text-[13px]'><p>Submit otp</p></button></div>
            </div>
        </div>
       </div>
    </>
  )
}

export default Verify
