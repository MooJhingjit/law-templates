import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] relative">
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url('/du/hero-banner.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      
      <div className="z-20 absolute inset-0 bg-gradient-to-l from-transparent  to-[#2b333c]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 py-10 md:py-16 relative flex items-center z-30">
        {/* Background image */}

        {/* Content Section */}
        <div className=" mt-12">
          {/* Heading */}
          <h1 className="max-w-[680px] sm:text-7xl  text-5xl font-normal text-[#F7F9FC] mb-4" style={{
            lineHeight: '1.5'
          }}>
            The Ultimate Guide to Investing in Dubai Real Estate
          </h1>
          {/* Subheading */}
          <p className="text-lg sm:text-3xl mb-10 text-[#F7F9FC] max-w-[900px]"
            style={{
              lineHeight: '1.3'
            }}
          >
            Destination Dubai by Knight Frank delivers exclusive insights into
            Dubai's most profitable real estate hotspots.
          </p>
          {/* Call to Action Button */}
          <button className="bg-[#FFB944] text-xl text-[#0D1B2A]   py-2 rounded-full shadow-md px-8 md:px-20 w-full md:w-auto">
            See Latest Market Trends
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
