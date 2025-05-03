import React, { useEffect, useState ,useRef } from "react";
import img1 from "../images/SLIDE1.webp";
import img2 from "../images/SLIDE2.webp";
import img3 from "../images/SLIDE3.webp";
import img4 from "../images/SLIDE4.webp";
import img5 from "../images/SLIDE5.webp";
import img6 from "../images/SLIDE6.webp";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function Slider() {
 
  let data = [
    {
      id: 1,
      image: img1,
    },
    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
    {
      id: 4,
      image: img4,
    },
    {
      id: 5,
      image: img5,
    }, {
      id: 6,
      image: img6,
    },
  ];

  let [slider, setSlider] = useState(0);
  //   {"hihihihi {item.id} "}
  //   {`hiii ${item.id}`}

  function leftBtn() {
    if (slider > 0) {
      setSlider(slider - 1);
    }
    if (slider == 0) {
      setSlider(5);
    }
  }

  function rgtBtn() {
    if (slider < 5) {
      setSlider(slider + 1);
    }
    if (slider == 5) {
      setSlider(0);
    }
  }
// <<<<<<<<<<<<button auto click>>>>>>>>>>

  const buttonRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (buttonRef.current) {
        buttonRef.current.click(); // Simulate button click
      }
    }, 3000); // every 4 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const handleClick = () => {
    console.log("Button was clicked!");
  };

  return (
    <>
      <div className="bg-black w-[100%] h-[auto] flex flex-wrap justify-center items-center">
        <div className="slider inline-flex ">
          {data.map((item, i) => {
            return (
              <>
                <div
                  className={`img ${i == slider ? "active" : "d-none"}`}
                  
                >
                  <img src={item.image} alt="" width={"99%"} />
                </div>
              </>
            );
          })} 
          <button  ref={buttonRef} onClick={leftBtn} className="w-16 h-13  absolute text-white items-center flex justify-center text-2xl lg:text-4xl  top-20 md:top-38 lg:top-85 lg:left-[-9px] left-[-12px] rounded  " ><FaAngleLeft /></button>
          <button  ref={buttonRef} onClick={rgtBtn}   className="w-16 h-13  absolute text-white items-center flex justify-center  text-2xl lg:text-4xl md:top-38 top-20 lg:top-85 lg:right-3 right-[-13px] rounded" ><FaAngleRight />
          </button>
        </div>


        
      </div>
    </>
  );
}

export default Slider;
