import React from "react";

const Banner = () => {
  return (
    <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] lg:h-102.5 md:h-96 h-55 w-full text-white text-center flex flex-col items-center justify-center md:gap-10 gap-3">
      <h3 className="text-lg md:text-2xl lg:text-4xl font-semibold ">
        Trusted by Millions, Built for You
      </h3>
      <div className="flex justify-between items-center max-w-7xl mx-3 md:mx-auto md:gap-15 gap-3">
        <div className="space-y-1 md:space-y-2 lg:space-y-3">
          <p className="text-sm text-gray-300 md:text-lg lg:text-xl">Total Downloads</p>
          <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold">29.6M</h4>
          <p className="md:text-lg lg:text-xl text-sm text-gray-300">21% more than last month</p>
        </div>
        <div className="space-y-1 md:space-y-2 lg:space-y-3">
          <p className="text-sm text-gray-300 md:text-lg lg:text-xl">Total Downloads</p>
          <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold">29.6M</h4>
          <p className="text-sm text-gray-300 md:text-lg lg:text-xl">21% more than last month</p>
        </div>
        <div className="space-y-1 md:space-y-2 lg:space-y-3">
          <p className="text-sm text-gray-300 md:text-lg lg:text-xl">Total Downloads</p>
          <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold">29.6M</h4>
          <p className="text-sm text-gray-300 md:text-lg lg:text-xl">21% more than last month</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
