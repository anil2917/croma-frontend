import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div
        className="bg-black w-[100%] flex flex-wrap text-white mt-3 mb-2"
        id="footer"
      >
        <div className="w-full md:w-[30%] px-4 mx-auto sm:w-[50%]">
          <form id="emailForm" className="mb-4">
            <p className="font-bold text-xl pl-2 mb-2">Connect with us</p>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter Email Address"
              className="border border-white text-black h-11 md:full lg:w-full px-2 rounded bg-white placeholder:font-bold w-[70%]"
            />
            <div id="errorMsg" className="text-red-500 text-sm mt-1"></div>
          </form>

          {/* Social Icons */}
          <div className="flex space-x-4 text-2xl pl-2">
            <FaYoutube />
            <FaFacebookSquare />
            <FaLinkedin />
            <FaInstagram />
            <FaTwitter />
          </div>

          {/* Footer Note */}
          <div className="mt-6 font-bold text-sm pl-2">
            <p>© Copyright 2025 Croma. All rights reserved</p>
          </div>
        </div>

        {/* Useful Links */}
        <div className="w-full mt-3 md:w-[30%] flex sm:justify-center md:justify-between px-4">
          <ul className="text-sm font-bold space-y-1">
            <p className="mb-2 text-[18px]">USEFUL LINKS</p>
            <li>
              <a href="#about-croma">About Croma</a>
            </li>
            <li>
              <a href="#help-support">Help And Support</a>
            </li>
            <li>
              <a href="#faqs">FAQs</a>
            </li>
            <li>
              <a href="#buying-guide">Buying Guide</a>
            </li>
            <li>
              <a href="#return-policy">Return Policy</a>
            </li>
            <li>
              <a href="#b2b-orders">B2B Orders</a>
            </li>
            <li>
              <a href="#store-locator">Store Locator</a>
            </li>
            <li>
              <a href="#e-waste">E-Waste</a>
            </li>
            <li>
              <a href="#franchise-opportunity">Franchise Opportunity</a>
            </li>
          </ul>
          <ul className="text-sm font-bold space-y-1">
            <li>
              <a href="#site-map">Site Map</a>
            </li>
            <li>
              <a href="#careers">Careers At Croma</a>
            </li>
            <li>
              <a href="#terms-of-use">Terms of Use</a>
            </li>
            <li>
              <a href="#disclaimer">Disclaimer</a>
            </li>
            <li>
              <a href="#privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="#unboxed">Unboxed</a>
            </li>
            <li>
              <a href="#gift-card">Gift Card</a>
            </li>
            <li>
              <a href="#croma-e-star">Croma E-Star</a>
            </li>
          </ul>
        </div>

        {/* Products Links */}
        <div className="w-full mt-3 md:w-[30%] flex sm:justify-center md:justify-between px-4">
          <ul className="text-sm font-bold space-y-1">
            <p className="mb-2 text-[18px]">PRODUCTS</p>
            <li>
              <a href="#televisions-accessories">Televisions & Accessories</a>
            </li>
            <li>
              <a href="#home-appliances">Home Appliances</a>
            </li>
            <li>
              <a href="#phones-wearables">Phones & Wearables</a>
            </li>
            <li>
              <a href="#computers-tablets">Computers & Tablets</a>
            </li>
            <li>
              <a href="#kitchen-appliances">Kitchen Appliances</a>
            </li>
            <li>
              <a href="#audio-video">Audio & Video</a>
            </li>
            <li>
              <a href="#health-fitness">Health & Fitness</a>
            </li>
          </ul>
          <ul className="text-sm font-bold space-y-1">
            <li>
              <a href="#grooming-personal-care">Grooming & Personal Care</a>
            </li>
            <li>
              <a href="#cameras-accessories">Cameras & Accessories</a>
            </li>
            <li>
              <a href="#smart-devices">Smart Devices</a>
            </li>
            <li>
              <a href="#gaming">Gaming</a>
            </li>
            <li>
              <a href="#accessories">Accessories</a>
            </li>
            <li>
              <a href="#top-brands">Top Brands</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
