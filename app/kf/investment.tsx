import React from "react";
import InvestmentSlider from "./investment-slider";

const Investment = () => {
  return (
    <div className=" text-white w-full py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-0 text-center">
        <h2 className="text-3xl sm:text-5xl font-normal text-white mb-6">
          Top Investment Areas in Dubai
        </h2>
        <p className="text-lg sm:text-3xl mb-10 text-[#FFB944] ">
          Access exclusive luxury properties in Dubai&apos;s most sought-after
          locations
        </p>
        <InvestmentSlider />
      </div>
    </div>
  );
};

export default Investment;
