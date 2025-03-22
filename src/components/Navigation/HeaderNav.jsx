import React, { useState } from "react";
import { Menu, X, Search, User, ShoppingCart, Globe, Heart } from "lucide-react";
import logo from "/images/logo.png";
import { useNavigate } from "react-router-dom";
const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate=useNavigate();
  return (
    <>
    <nav className="bg-black hidden md:flex text-white px-4 py-2 flex justify-between items-center">
      {/* Left Section */}
      <div className="flex items-center space-x-4 ">
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
      <img src={logo} className="h-20 w-50 object-cover"/>
      
      {/* Navigation Links - Hidden on Small Screens */}
      <div className="hidden md:flex space-x-8">
        <a href="#" className="hover:text-gray-600">Furniture</a>
        <a href="#" className="hover:text-gray-600">Household</a>
        <a href="#" className="hover:text-gray-600">Baby & Kids</a>
        <a href="#" className="hover:text-gray-600">New Arrivals</a>
      </div>
      
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 p-2 rounded-md w-1/3">
        <Search className="text-gray-500" size={20} />
        <input
          type="text"
          placeholder="What are you looking for?"
          className="bg-transparent outline-none px-2 w-full"
        />
      </div>
      
      {/* Icons */}
      <div className="flex items-center space-x-4">
        <a href="#" className="flex items-center space-x-1">
          <User size={20} />
          <button onClick={()=>navigate('/signup')}>Sign Up or Sign In</button>
        </a>
        <Heart size={20} />
        <ShoppingCart size={20} />
        <Globe size={20} />
      </div>
      
      {/* Mobile Menu Button */}
      <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
    
    {/* Mobile Dropdown Menu */}
    {isMenuOpen && (
      <div className="md:hidden bg-white shadow-md p-4 absolute w-full left-0 top-16">
        <a href="#" className="block py-2 hover:text-gray-600">Furniture</a>
        <a href="#" className="block py-2 hover:text-gray-600">Household</a>
        <a href="#" className="block py-2 hover:text-gray-600">Baby & Kids</a>
        <a href="#" className="block py-2 hover:text-gray-600">New Arrivals</a>
      </div>
    )}
    </>
  );
};

export default HeaderNav;
