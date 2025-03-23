import React, { useState } from "react";
import { Menu, X, Search, User, ShoppingCart, Globe, Heart } from "lucide-react";
import logo from "/images/logo.png";
import { useNavigate } from "react-router-dom";

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

      <div className="bg-white shadow-md p-2 flex justify-between items-center">
        {/* Logo */}
        <img
          src={logo}
          className="lg:h-20 lg:w-50 md:h-15 md:w-25 h-15 w-30 object-cover"
        />

        {/* Navigation Links - Hidden on Small Screens */}
        <div className="hidden lg:flex items-center space-x-2">
          <a
            href="#"
            className="hover:text-blue-500 p-2 hover:border hover:scale-110 hover:border-outline-1 hover:border-blue-500 transition ease-in-ease-out text-md"
          >
            Acrylic Accessories
          </a>
          <a
            href="#"
            className="hover:text-blue-500 p-2 hover:border hover:scale-110 hover:border-outline-1 hover:border-blue-500 transition ease-in-ease-out text-md"
          >
            Shop
          </a>
          <a
            href="#"
            className="hover:text-blue-500 p-2 hover:border hover:scale-110 hover:border-outline-1 hover:border-blue-500 transition ease-in-ease-out text-md"
          >
            Today's deals
          </a>
          <a
            href="#"
            className="hover:text-blue-500 p-2 hover:border hover:scale-110 hover:border-outline-1 hover:border-blue-500 transition ease-in-ease-out text-md"
          >
            New Arrivals
          </a>
          <a
            href="#"
            className="hover:text-blue-500 p-2 hover:border hover:scale-110 hover:border-outline-1 hover:border-blue-500 transition ease-in-ease-out text-md"
          >
            Photography & videography
          </a>
        </div>

        {/* Toggle Button for Mobile and Medium Screens */}
        <button
          className="lg:hidden md:text-xl text-sm gap-2 flex text-gray-600 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 p-2 mx-2 rounded-md lg:w-[25%] md:w-[70%] w-[50%]">
          <Search className="text-gray-500" size={20} />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-transparent outline-none px-2 w-full"
          />
        </div>

        {/* Icons */}
        <div className="hidden lg:flex items-center space-x-2">
          <a className="flex items-center">
            <User size={20} />
            <button className="text-md" onClick={() => navigate("/signup")}>
              Sign Up or Sign In
            </button>
          </a>
          <Heart size={20} className="hidden lg:flex" />
          <ShoppingCart size={20} className="hidden lg:flex" />
          <Globe size={20} className="hidden lg:flex" />
        </div>
      </div>

      {/* Mobile and Medium Screens Sidebar with Blur Effect */}
      {isMenuOpen && (
        <div
          className="lg:hidden md:flex flex fixed inset-0 bg-opacity-50 backdrop-blur-sm z-50"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="bg-white w-full md:w-2/3 h-full absolute left-0 top-0 p-4 space-y-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside sidebar
          >
            <a
              href="#"
              className="block py-2 hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
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
    </>
  );
};

export default HeaderNav;


