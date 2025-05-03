import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Mordetail() {
  const [id] = useSearchParams();
  const productId = id.get("id");
  console.log(productId);
  let [products, setdata] = useState([]);
  // console.log(products);
  async function featchdata() {
    let data = await fetch(`https://fakestoreapi.in/api/products/${productId}`);
    let jsondata = await data.json();
    setdata(jsondata.products);
  }
  useEffect(() => {
    featchdata();
  }, []);

  return (
    <>
      <div className="bg-[#eeeee4] w-[100%] h-[100%] flex justify-evenly items-center text-blackrounded">
        <h1 className="text-black">hh</h1>
      </div>
    </>
  );
}

export default Mordetail;
