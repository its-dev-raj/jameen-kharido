import React from "react";

const Searchbar = () => {
  return (
    <div className="flex w-full justify-center h-[300px] bg-[#575757] ">
      <div className="flex items-center py-10  gap-6  flex-col  ">
        <p className="text-white font-bold text-3xl py-0 ">
          Over 174,000+ hotels and homes across 35+ countries
        </p>
        <div className="flex justify-start ">
          <input
            className="p-4 w-[400px]  rounded-l-md border-r-2 border-gray-500"
            placeholder="Banglore"
            type="text"
          />
          <p className="p-4 border-r-2 font-semibold text-md  border-gray-500 bg-white pr-24 text-black">
            Thu, 26 Dec - Fri, 27 Dec
          </p>
          <p className="p-4 border-r-2 text-lg font-semibold border-gray-500 pr-24 bg-white text-black">
            1 Room, 1 Guest
          </p>
          <p className="p-4 rounded-r-md bg-[#128036] text-[#FFFFFF] text-xl font-bold  px-12">
            Search
          </p>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
