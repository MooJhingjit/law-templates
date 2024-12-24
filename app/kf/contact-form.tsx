import React from "react";

const ContactForm = () => {
  return (
    <div className=" text-white w-full py-8 md:pt-4 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center xl:px-0">
        <h2 className="text-3xl sm:text-5xl font-normal text-white mb-6">
          Access The Latest Dubai Market Updates
        </h2>
        <p className="text-lg sm:text-3xl mb-12 text-[#FFB944]">
          Get exclusive real estate investment opportunities before they hit the
          market.
        </p>
        <div className="bg-white text-black rounded-lg shadow-md px-4 py-8  mx-auto">
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block  font-medium mb-4 text-left">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="w-full border-gray-400 rounded-sm py-3 px-4 shadow-sm focus:ring-black focus:border-black border text-sm"
                />
              </div>
              <div>
                <label className="block font-medium mb-4 text-left">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="w-full border-gray-400 rounded-sm py-3 px-4 shadow-sm focus:ring-black focus:border-black border text-sm"
                />
              </div>
              <div>
                <label className="block font-medium mb-4 text-left">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="w-full border-gray-400 rounded-sm py-3 px-4 shadow-sm focus:ring-black focus:border-black border text-sm"
                />
              </div>
              <div>
                <label className="block font-medium mb-4 text-left">
                  Phone number <span className="text-gray-600 font-normal">[optional]</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="w-full border-gray-400 rounded-sm py-3 px-4 shadow-sm focus:ring-black focus:border-black border text-sm"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mt-10 gap-8 md:gap-0">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                />
                <label
                  htmlFor="terms"
                  className="ml-2  text-[#009BDC] font-semibold"
                >
                  I agree with{" "}
                  <a href="#" className=" underline">
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a href="#" className=" underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button className="bg-[#009BDC] text-xl  text-[#F7F9FC] py-3 px-6 rounded-full shadow-md">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
