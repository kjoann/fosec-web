// src/components/Navbar.jsx
import React, { useState } from 'react';
import logo from '../assets/fosec_logo.svg';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 border-[#6FFF63] border-x-0 border-t-0 border">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[#0F4901] text-2xl font-bold flex items-center">
          <span className='mx-3'><img src={logo} alt="fosec" className='w-7'/></span>
          Fosec
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-[#4E4E4E] hover:text-green-800">Home</a>
          <a href="#services" className="text-[#4E4E4E] hover:text-green-800">Services</a>
          <a href="#features" className="text-[#4E4E4E] hover:text-green-800">Features</a>
          <a href="#contact" className="text-[#4E4E4E] hover:text-green-800">Contact Us</a>
        </div>
        {/* Sign Up and Sign In Buttons */}
        <div className="md:flex items-center space-x-4">
          <Button text="Sign Up"/>
          <button className="hidden md:block font-medium text-black border border-[#E0E0E0] px-5 py-2 rounded-md hover:bg-black hover:text-white">Sign In</button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#0F4901] focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <a href="#home" className="block text-black hover:text-gray-400">Home</a>
          <a href="#services" className="block text-black hover:text-gray-400">Services</a>
          <a href="#features" className="block text-black hover:text-gray-400">Features</a>
          <a href="#contact" className="block text-black hover:text-gray-400">Contact</a>
          {/* Sign Up and Sign In Buttons (Mobile View) */}
          <div className="flex flex-col space-y-2">
            <button className="text-black border bg-[#0F4901] border-black px-3 py-1 rounded-lg">Sign Up</button>
            <button className="text-black border border-black px-3 py-1 rounded-lg">
                  Sign In
                </button>
            {/* <div>
              <button className="text-black border border-black px-3 py-1 rounded-lg">
                  Sign In
                </button>
              <Link to="../pages/login">
                <button className="text-black border border-black px-3 py-1 rounded-lg">
                  Sign In
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
