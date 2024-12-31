import { ToggleLeft, ToggleRight } from "lucide-react";
import React, { useEffect, useState } from "react";

const Scrollbar = () => {
  const checkboxData = [
    {
      checked: false,
      title: "Family oyos",
    },

    {
      checked: false,
      title: "For Group Travellers",
    },

    {
      checked: false,
      title: "Local IDs accepted",
    },

    {
      checked: false,
      title: "OYOs Welcomes couples",
    },

    {
      checked: false,
      title: "Internation Guests",
    },

    {
      checked: false,
      title: "Business travellers",
    },

    {
      checked: false,
      title: "OYO Recommended",
    },
  ];
  const [view, setview] = useState(false);

  useEffect(() => {
    console.log(view);
  }, [view]);
  return (
    <div className="w-full flex">
      <div className="left w-[25%] px-8">
        <div className="flex justify-between">
          <div className="flex flex-col  ">
            <p className="text-3xl font-bold">Filters</p>
            <p className="text-base font-medium text-black"> Price</p>
          </div>
          <div className="text-red-600 ">
            <p className="text-base font-semibold">Clear All </p>
          </div>
        </div>
        <div className="border-b">
          <input className="w-56  webkit" type="range" name="" id="" />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-semibold">Collections</p>
          <div className="cursor-pointer">
            {checkboxData.map((item, idx) => {
              return (
                <div className="flex items-center gap-4 cursor-pointer ">
                  <input type="checkbox" checked={item.checked} />
                  <p>{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="right w-[75%]">
        <div className="flex flex-col px-12 py-4   ">
          <div>
            <p className="text-xs text-blue-400">
              india bangalore Hotels koramangala Hotels
            </p>
          </div>
          <div className="flex justify-between   ">
            <div className="flex justify-center  items-center">
              <p className="text-xl font-bold">
                Hotels in Koramangala, Bangalore (124 OYOs)
              </p>
            </div>
            <div className="flex justify-between w-1/2 px-12 ">
              <div className="flex items-center   ">
                <p>Map View</p>
                {view ? (
                  <ToggleRight
                    className="rounded-full w-[100px] text-blue-400 bg-slate-600 overflow-hidden h-[50px] b-red-600"
                    onClick={() => setview(false)}
                  />
                ) : (
                  <ToggleLeft
                    className="rounded-full text-blue-400  w-[100px] h-[50px]"
                    onClick={() => setview(true)}
                  />
                )}
              </div>
              <div className="items-center flex  ">
                <p>Sort By</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrollbar;
