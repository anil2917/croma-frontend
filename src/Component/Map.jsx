// import React from "react";

// // const Map = () => {
// //   return (
// //     <footer className="bg-gray-900 text-white p-8">
// //       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
// //         {/* Connect With Us */}
// //         <div>
// //           <h3 className="font-bold mb-2">CONNECT WITH US</h3>
// //           <div className="flex mb-4">
// //             <input
// //               type="email"
// //               placeholder="Enter Email ID"
// //               className="px-2 py-1 rounded-l bg-gray-800 border border-gray-700 focus:outline-none"
// //             />
// //             <button className="px-4 py-1 bg-white text-black rounded-r">→</button>
// //           </div>
// //           <div className="flex space-x-4 mb-4">
// //             <span>🎥</span>
// //             <span>📘</span>
// //             <span>📸</span>
// //             <span>💼</span>
// //             <span>🐦</span>
// //           </div>
// //           <p className="text-xs">© Copyright 2025 Croma. All rights reserved</p>
// //         </div>

// //         {/* Useful Links */}
// //         <div>
// //           <h3 className="font-bold mb-2">USEFUL LINKS</h3>
// //           <div className="grid grid-cols-2 text-sm space-y-1">
// //             <div>
// //               <p>About Croma</p>
// //               <p>Help And Support</p>
// //               <p>FAQs</p>
// //               <p>Buying Guide</p>
// //               <p>Return Policy</p>
// //               <p>B2B Orders</p>
// //               <p>Store Locator</p>
// //               <p>E-Waste</p>
// //               <p>Franchise Opportunity</p>
// //             </div>
// //             <div>
// //               <p>Site Map</p>
// //               <p>Careers At Croma</p>
// //               <p>Terms Of Use</p>
// //               <p>Disclaimer</p>
// //               <p>Privacy Policy</p>
// //               <p>Unboxed</p>
// //               <p>Gift Card</p>
// //               <p>Croma E-Star</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Products */}
// //         <div>
// //           <h3 className="font-bold mb-2">PRODUCTS</h3>
// //           <div className="grid grid-cols-2 text-sm space-y-1">
// //             <div>
// //               <p>Televisions & Accessories</p>
// //               <p>Home Appliances</p>
// //               <p>Phones & Wearables</p>
// //               <p>Computers & Tablets</p>
// //               <p>Kitchen Appliances</p>
// //               <p>Audio & Video</p>
// //               <p>Health & Fitness</p>
// //             </div>
// //             <div>
// //               <p>Grooming & Personal Care</p>
// //               <p>Cameras & Accessories</p>
// //               <p>Smart Devices</p>
// //               <p>Gaming</p>
// //               <p>Accessories</p>
// //               <p>Top Brands</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Map;
// import React, { useState } from "react";

// // const 
// // Map = () => {
// //   const [showUsefulLinks, setShowUsefulLinks] = useState(false);
// //   const [showProducts, setShowProducts] = useState(false);

// //   return (
// //     <footer className="bg-gray-900 text-white p-8">
// //       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
// //         {/* Connect With Us */}
// //         <div>
// //           <h3 className="font-bold mb-2">CONNECT WITH US</h3>
// //           <div className="flex mb-4">
// //             <input
// //               type="email"
// //               placeholder="Enter Email ID"
// //               className="px-2 py-1 rounded-l bg-gray-800 border border-gray-700 focus:outline-none"
// //             />
// //             <button className="px-4 py-1 bg-white text-black rounded-r">→</button>
// //           </div>
// //           <div className="flex space-x-4 mb-4">
// //             <span>🎥</span>
// //             <span>📘</span>
// //             <span>📸</span>
// //             <span>💼</span>
// //             <span>🐦</span>
// //           </div>
// //           <p className="text-xs">© Copyright 2025 Croma. All rights reserved</p>
// //         </div>

// //         {/* Useful Links Dropdown */}
// //         <div>
// //           <button
// //             className="font-bold mb-2 w-full text-left"
// //             onClick={() => setShowUsefulLinks(!showUsefulLinks)}
// //           >
// //             USEFUL LINKS {showUsefulLinks ? "▲" : "▼"}
// //           </button>
// //           {showUsefulLinks && (
// //             <div className="grid grid-cols-2 text-sm space-y-1 mt-2">
// //               <div>
// //                 <p>About Croma</p>
// //                 <p>Help And Support</p>
// //                 <p>FAQs</p>
// //                 <p>Buying Guide</p>
// //                 <p>Return Policy</p>
// //                 <p>B2B Orders</p>
// //                 <p>Store Locator</p>
// //                 <p>E-Waste</p>
// //                 <p>Franchise Opportunity</p>
// //               </div>
// //               <div>
// //                 <p>Site Map</p>
// //                 <p>Careers At Croma</p>
// //                 <p>Terms Of Use</p>
// //                 <p>Disclaimer</p>
// //                 <p>Privacy Policy</p>
// //                 <p>Unboxed</p>
// //                 <p>Gift Card</p>
// //                 <p>Croma E-Star</p>
// //               </div>
// //             </div>
// //           )}
// //         </div>

// //         {/* Products Dropdown */}
// //         <div>
// //           <button
// //             className="font-bold mb-2 w-full text-left"
// //             onClick={() => setShowProducts(!showProducts)}
// //           >
// //             PRODUCTS {showProducts ? "▲" : "▼"}
// //           </button>
// //           {showProducts && (
// //             <div className="grid grid-cols-2 text-sm space-y-1 mt-2">
// //               <div>
// //                 <p>Televisions & Accessories</p>
// //                 <p>Home Appliances</p>
// //                 <p>Phones & Wearables</p>
// //                 <p>Computers & Tablets</p>
// //                 <p>Kitchen Appliances</p>
// //                 <p>Audio & Video</p>
// //                 <p>Health & Fitness</p>
// //               </div>
// //               <div>
// //                 <p>Grooming & Personal Care</p>
// //                 <p>Cameras & Accessories</p>
// //                 <p>Smart Devices</p>
// //                 <p>Gaming</p>
// //                 <p>Accessories</p>
// //                 <p>Top Brands</p>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default 
// // Map;import React, { useState } from "react";

// const Map = () => {
//   const [showUsefulLinks, setShowUsefulLinks] = useState(false);
//   const [showProducts, setShowProducts] = useState(false);

//   return (
//     <footer className="bg-gray-900 text-white p-8">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8">
//         {/* Connect With Us (centered) */}
//         <div className="text-center">
//           <h3 className="font-bold mb-2">CONNECT WITH US</h3>
//           <div className="flex justify-center mb-4">
//             <input
//               type="email"
//               placeholder="Enter Email ID"
//               className="px-2 py-1 rounded-l bg-gray-800 border border-gray-700 focus:outline-none"
//             />
//             <button className="px-4 py-1 bg-white text-black rounded-r">→</button>
//           </div>
//           <div className="flex justify-center space-x-4 mb-4">
//             <span>🎥</span>
//             <span>📘</span>
//             <span>📸</span>
//             <span>💼</span>
//             <span>🐦</span>
//           </div>
//           <p className="text-xs">© Copyright 2025 Croma. All rights reserved</p>
//         </div>

//         {/* Useful Links */}
//         <div>
//           <button
//             className="font-bold mb-2 w-full text-left md:hidden"
//             onClick={() => setShowUsefulLinks(!showUsefulLinks)}
//           >
//             USEFUL LINKS {showUsefulLinks ? "▲" : "▼"}
//           </button>
//           <div className={`${showUsefulLinks ? "block" : "hidden"} md:block`}> 
//             <div className="grid grid-cols-2 text-sm space-y-1 mt-2">
//               <div>
//                 <p>About Croma</p>
//                 <p>Help And Support</p>
//                 <p>FAQs</p>
//                 <p>Buying Guide</p>
//                 <p>Return Policy</p>
//                 <p>B2B Orders</p>
//                 <p>Store Locator</p>
//                 <p>E-Waste</p>
//                 <p>Franchise Opportunity</p>
//               </div>
//               <div>
//                 <p>Site Map</p>
//                 <p>Careers At Croma</p>
//                 <p>Terms Of Use</p>
//                 <p>Disclaimer</p>
//                 <p>Privacy Policy</p>
//                 <p>Unboxed</p>
//                 <p>Gift Card</p>
//                 <p>Croma E-Star</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Products */}
//         <div>
//           <button
//             className="font-bold mb-2 w-full text-left md:hidden"
//             onClick={() => setShowProducts(!showProducts)}
//           >
//             PRODUCTS {showProducts ? "▲" : "▼"}
//           </button>
//           <div className={`${showProducts ? "block" : "hidden"} md:block`}>
//             <div className="grid grid-cols-2 text-sm space-y-1 mt-2">
//               <div>
//                 <p>Televisions & Accessories</p>
//                 <p>Home Appliances</p>
//                 <p>Phones & Wearables</p>
//                 <p>Computers & Tablets</p>
//                 <p>Kitchen Appliances</p>
//                 <p>Audio & Video</p>
//                 <p>Health & Fitness</p>
//               </div>
//               <div>
//                 <p>Grooming & Personal Care</p>
//                 <p>Cameras & Accessories</p>
//                 <p>Smart Devices</p>
//                 <p>Gaming</p>
//                 <p>Accessories</p>
//                 <p>Top Brands</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Map;

import { useState } from "react";

const Map = () => {
  const [showUsefulLinks, setShowUsefulLinks] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Connect With Us */}
        <div className="text-center md:text-left">
          <h3 className="font-bold mb-2">CONNECT WITH US</h3>
          <div className="flex justify-center md:justify-start mb-4">
            <input
              type="email"
              placeholder="Enter Email ID"
              className="px-2 py-1 rounded-l bg-gray-800 border border-gray-700 focus:outline-none w-2/3 md:w-auto"
            />
            <button className="px-4 py-1 bg-white text-black rounded-r">→</button>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <span>🎥</span>
            <span>📘</span>
            <span>📸</span>
            <span>💼</span>
            <span>🐦</span>
          </div>
          <p className="text-xs text-center md:text-left">
            © Copyright 2025 Croma. All rights reserved
          </p>
        </div>

        {/* Useful Links */}
        <div>
          {/* Toggle button hidden on md+ */}
          <button
            className="font-bold mb-2 w-full text-left md:hidden"
            onClick={() => setShowUsefulLinks(!showUsefulLinks)}
          >
            USEFUL LINKS {showUsefulLinks ? "▲" : "▼"}
          </button>
          {/* Content always visible on md+ */}
          <div className={`${showUsefulLinks ? "block" : "hidden"} md:block`}>
            <div className="grid grid-cols-2 text-sm space-y-1 mt-2">
              <div>
                <p>About Croma</p>
                <p>Help And Support</p>
                <p>FAQs</p>
                <p>Buying Guide</p>
                <p>Return Policy</p>
                <p>B2B Orders</p>
                <p>Store Locator</p>
                <p>E-Waste</p>
                <p>Franchise Opportunity</p>
              </div>
              <div>
                <p>Site Map</p>
                <p>Careers At Croma</p>
                <p>Terms Of Use</p>
                <p>Disclaimer</p>
                <p>Privacy Policy</p>
                <p>Unboxed</p>
                <p>Gift Card</p>
                <p>Croma E-Star</p>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div>
          {/* Toggle button hidden on md+ */}
          <button
            className="font-bold mb-2 w-full text-left md:hidden"
            onClick={() => setShowProducts(!showProducts)}
          >
            PRODUCTS {showProducts ? "▲" : "▼"}
          </button>
          {/* Content always visible on md+ */}
          <div className={`${showProducts ? "block" : "hidden"} md:block`}>
            <div className="grid grid-cols-2 text-sm space-y-1 mt-2">
              <div>
                <p>Televisions & Accessories</p>
                <p>Home Appliances</p>
                <p>Phones & Wearables</p>
                <p>Computers & Tablets</p>
                <p>Kitchen Appliances</p>
                <p>Audio & Video</p>
                <p>Health & Fitness</p>
              </div>
              <div>
                <p>Grooming & Personal Care</p>
                <p>Cameras & Accessories</p>
                <p>Smart Devices</p>
                <p>Gaming</p>
                <p>Accessories</p>
                <p>Top Brands</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Map;
