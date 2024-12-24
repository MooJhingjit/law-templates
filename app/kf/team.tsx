import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className=" text-white w-full py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 text-center">
        <h2 className="text-3xl sm:text-5xl  font-normal text-white mb-2">
          Dubai Real Estate Experts
        </h2>
        <p className="text-lg sm:text-3xl mb-9  text-[#FFB944]">
          Speak to one of our area investment specialists today
        </p>
        <div className="grid grid-cols-2  md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="text-center md:text-left w-full">
              <Image
                src={`/du/team.png`}
                alt="Expert"
                width={300}
                height={348}
                className="rounded-md shadow-md mb-4 w-full"
              />
              <h3 className="text-xl ">Lorem ipsum dolor sit</h3>
              <p className="text-xs text-[#63C6EB] mt-1">Position</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
