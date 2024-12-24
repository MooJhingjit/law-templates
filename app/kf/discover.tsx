import React from "react";

const Discover = () => {
  return (
    <div className=" w-full ">
      <div className="max-w-7xl flex  relative justify-end  mx-auto bg-[#004170]/80 ">
        <div
          className="absolute inset-0 z-10 "
          style={{
            backgroundImage: `url('/du/book.png')`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className=" z-20 absolute inset-0  md:bg-gradient-to-l  bg-gradient-to-t  from-[#004170] from-40% to-transparent "></div>

        {/* Text Content Section */}
        <div className=" relative z-30 md:w-1/2 text-center md:text-right py-8 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-0">
          <h2 className="text-3xl sm:text-4xl font-normal text-white mb-5" style={{
            lineHeight: '1.5'
          }}>
            Discover Dubai’s Best Luxury Investment Opportunities
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-center md:text-right text-[#FFB944]  md:max-w-[700px] md:ml-auto ">
           {
              ` With over a century of trust from real estate investors, Knight
            Frank’s expert analysts deliver exclusive insights into 
            Dubai’s next big investment opportunities.
            `
           }
          </p>

          <button className="bg-[#009BDC] text-xl  text-[#F7F9FC] py-2.5 px-14 rounded-full shadow-md">
            Get Instant Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discover;
