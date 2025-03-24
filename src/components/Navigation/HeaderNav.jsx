import React, { useState } from "react";
import { FaSearch, FaUber } from "react-icons/fa";
import logo from "/images/logo.png";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="bg-black hidden md:flex text-white px-4 py-2 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <span className="lg:text-sm md:text-xs">Free Shipping</span>
          <span className="lg:text-sm md:text-xs">Click & Collect</span>
          <span className="lg:text-sm md:text-xs">Warranty</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <span className="lg:text-sm md:text-xs">B2B & Design Services</span>
          <span className="lg:text-sm md:text-xs">Deliver to area</span>
          <span className="lg:text-sm md:text-xs">Store Locator</span>
          <span className="lg:text-sm md:text-xs">Help</span>
          <span className="lg:text-sm md:text-xs">Sell With Us</span>
        </div>
      </nav>

      <div className="py-3">
        <div className="px-2 flex items-center justify-center">
          {/* img */}
          <div className="lg:w-[35vh] md:w-[35vh] w-[18vh] h-20">
            <img src={logo} className="w-full h-full object-contain"/>
          </div>

          {/* left-side navigation link */}
          <div className="w-[54%] md:hidden hidden lg:flex items-center justify-start space-x-7">
            {['Acrylic','Shops','Photography & videography'].map((items,index)=>(
              <>
              <a className="text-xl hover:scale-115 hover:border hover:border-outline-1 hover:border-blue-500 hover:text-blue-500 p-2 transition ease-in-ease-out">
                {items}
              </a>
              </>
            ))}
          </div>

          <div className="relative h-10 lg:w-[40%] md:w-[50%] lg:mx-1 md:mx-10 mx-3">
            <input 
            className="h-10 w-[100%] bg-white rounded-md py-5 pl-10 pr-2 outline-none border border-gray-300 border-outline-2 shadow-lg"
            placeholder="What do you want?"
            />
            <FaSearch 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
              size={20}
            />
          </div>

          {/* toggle */}
          <button
           className="lg:hidden md:text-xl text-sm gap-2 flex text-gray-600 rounded-lg"
           onClick={() => setIsMenuOpen(!isMenuOpen)}
         >
           {isMenuOpen ? <IoMdClose size={30} /> : <MdOutlineMenu size={30} />}
         </button>

          <div className="lg:h-10 lg:w-[40%] lg:flex  md:hidden hidden items-center justify-center space-x-5">
           <a className="flex items-center justify-center p-2">
             <FaUser size={20} />
             <button className="ml-2 text-xl">
               Sign Up or Sign In
             </button>
           </a>
           <CiHeart size={25} className="flex" />
           <FaShoppingCart size={25} className="flex" />
           <CiGlobe size={25} className="flex" />
          </div>

          <div>
            {isMenuOpen && (
            <div
              className="lg:hidden md:flex flex fixed inset-0 bg-opacity-50 backdrop-blur-sm z-50"
              onClick={() => setIsMenuOpen(false)} // Close the menu when clicking outside
            >
            <div
                className="bg-white w-full md:w-2/3 h-full absolute right-0 top-0 p-4 space-y-4"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside sidebar
            >
            <a
            href="#"
            className="block py-2 hover:text-gray-600"
            onClick={() => setIsMenuOpen(false)} // Close menu when a link is clicked
            >
              Acrylic Accessories
            </a>
            <a
            href="#"
            className="block py-2 hover:text-gray-600"
            onClick={() => setIsMenuOpen(false)}
            >
            Shop
            </a>
            <a
            href="#"
            className="block py-2 hover:text-gray-600"
            onClick={() => setIsMenuOpen(false)}
            >
            Today's deal
            </a>
            <a
            href="#"
            className="block py-2 hover:text-gray-600"
            onClick={() => setIsMenuOpen(false)}
            >
            New Arrivals
            </a>
            <a
              href="#"
              className="block py-2 hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
            Photography and videography
            </a>
            <a
              href="#"
              className="block py-2 hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Signup/Signin
            </a>
          </div>
        </div>
    )}

          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderNav;




