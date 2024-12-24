import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-[#001F3F] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-lg text-white font-semibold">
            <Image
              src="/du/text-logo.png"
              alt="Knight Frank"
              width={100}
              height={50}
            />
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-20">
            <a href="#" className="hover:text-gray-300">
              Areas
            </a>
            <a href="#" className="hover:text-gray-300">
              Properties
            </a>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
          </div>
          {/* Contact Button */}
          <div>
            <button className="bg-white text-[#004170]  font-semibold py-2 px-4 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300">
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
