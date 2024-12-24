import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#D1D5D7] text-[#004170] pb-4 pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-14">
        {/* About Section */}
        <div className="text-xl">
          <h3 className="font-bold mb-4">About</h3>
          <h3 className="font-bold mb-4">Contact</h3>
        </div>

        {/* Areas Section */}
        <div className="col-span-2">
          <h3 className="font-bold mb-4 text-xl">Areas</h3>
          <ul className="grid grid-cols-2 text-xl gap-3">
            <li className="mb-2 hover:underline cursor-pointer">
              Palm Jumeirah
            </li>
            <li className="mb-2 hover:underline cursor-pointer">Bay Islands</li>

            <li className="mb-2 hover:underline cursor-pointer">
              Emirates Hills
            </li>
            <li className="mb-2 hover:underline cursor-pointer">
              Downtown Dubai
            </li>
            <li className="mb-2 hover:underline cursor-pointer">
              Dubai Hills Estate
            </li>
            <li className="hover:underline cursor-pointer">
              Dubai Water Canal
            </li>
            <li className="mb-2 hover:underline cursor-pointer">Jumeirah</li>
          </ul>
        </div>

        {/* Properties Section */}
        <div className="col-span-2">
          <h3 className="font-bold mb-4 text-xl">Properties</h3>
          <ul className="grid text-xl gap-3">
            <li className="mb-2 hover:underline cursor-pointer">
              Terms & conditions
            </li>
            <li className="hover:underline cursor-pointer">Privacy policy</li>
          </ul>
        </div>

        {/* Logo Section */}
        <div className="flex flex-col items-start lg:items-end">
          <div className="mb-6 w-[233px] h-[87px]">
            <Image
              src="/du/logo-black.png"
              alt="Knight Frank"
              width={233}
              height={87}
            />
          </div>
        </div>
      </div>
      {/* Social Media Links */}
      <div className="flex space-x-4 mb-4 justify-center w-full pt-36 pb-2">
        <div className="w-auto mx-auto ">
          <div className="flex gap-8 justify-center">
            <a href="#" className="hover:text-blue-500">
              <Image
                src="/du/facebook.png"
                alt="Facebook"
                width={23}
                height={23}
              />
            </a>
            <a href="#" className="hover:text-blue-500">
              <Image src="/du/ig.png" alt="Instagram" width={23} height={23} />
            </a>
            <a href="#" className="hover:text-blue-500">
              <Image
                src="/du/linkedin.png"
                alt="Linkedin"
                width={23}
                height={23}
              />
            </a>
            <a href="#" className="hover:text-blue-500">
              <Image
                src="/du/youtube.png"
                alt="Youtube"
                width={23}
                height={23}
              />
            </a>
          </div>
          <p className="text-xs text-[#004170] mt-6">
            Copyright ©2024 Nestopa co.,ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
