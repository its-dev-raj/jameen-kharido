import {
  BatteryCharging,
  CheckCheck,
  Flame,
  ToggleLeft,
  ToggleRight,
  User,
  Wifi,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import room from "/image/room.jpg";
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

  const categoriesData = [
    {
      checked: false,
      title: "OYO Rooms - Super affordable Stays with essential amenities",
    },
    {
      checked: false,
      title: "OYO Rooms - Super affordable Stays with essential amenities",
    },
    {
      checked: false,
      title: "OYO Rooms - Super affordable Stays with essential amenities",
    },
    {
      checked: false,
      title: "OYO Rooms - Super affordable Stays with essential amenities",
    },
    {
      checked: false,
      title: "OYO Rooms - Super affordable Stays with essential amenities",
    },
    {
      checked: false,
      title: "OYO Rooms - Super affordable Stays with essential amenities",
    },
    {
      checked: false,
      title: "OYO Rooms - Super affordable Stays with essential amenities",
    },
    {
      checked: false,
      title: "OYO Rooms - Super affordable Stays with essential amenities",
    },
    {
      checked: false,
      title: "OYO Rooms - Super affordable Stays with essential amenities",
    },
  ];
  const [view, setview] = useState(false);

  useEffect(() => {
    console.log(view);
  }, [view]);

  const imageData = [
    {
      img: "",
    },
  ];
  return (
    <div className="w-full flex">
      <div className="left w-[25%] px-8">
        <div className="flex justify-between">
          <div className="flex flex-col  ">
            <p className="text-3xl font-bold">Filters</p>
            <p className="text-base font-medium text-black"> Price</p>
          </div>
          <div className="text-red-600  ">
            <p className="text-base font-semibold">Clear All </p>
          </div>
        </div>
        <div className="border-b py-4">
          <input className="w-56  webkit" type="range" name="" id="" />
        </div>
        <div className="flex flex-col py-6 border-b">
          <p className="text-base font-bold pb-4">Collections</p>
          <div className="cursor-pointer gap-4 flex flex-col  ">
            {checkboxData.map((item, idx) => {
              return (
                <div className="flex items-center text-[#313131] gap-4 cursor-pointer ">
                  <input
                    className="size-4 hover:bg-lime-500 cursor-pointer"
                    type="checkbox"
                    checked={item.checked}
                  />
                  <p className="">{item.title}</p>
                </div>
              );
            })}
            <div className="flex pt-4">
              <p className="text-red-500 font-bold text-sm">+ View More</p>
            </div>
          </div>
        </div>
        <div className="py-12">
          <p>sjdfnsdkfnksj</p>
        </div>
      </div>
      <div className="right w-[75%] px-8 relative ">
        <div className="flex flex-col">
          <div className="flex flex-col   py-4 border-b ">
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
              <div className="flex justify-between w-1/2   ">
                <div className="flex items-center  pl-20  ">
                  <p>Map View</p>
                  {view ? (
                    <ToggleRight
                      className="rounded-full w-[100px] text-blue-400  overflow-hidden h-[50px] b-red-600"
                      onClick={() => setview(!view)}
                    />
                  ) : (
                    <ToggleLeft
                      className="rounded-full text-blue-400 w-[100px] h-[50px]"
                      onClick={() => setview(!view)}
                    />
                  )}
                </div>
                <div className="items-center flex gap-3 ">
                  <p>Sort By</p>
                  <div className="border border-gray-400 px-2">
                    <select className="p-2" name="text" id="">
                      <option value="">Popularity</option>
                      <option value="">Guest Rating</option>
                      <option value="">price Low to High</option>
                      <option value="">Serviced</option>
                      <option value="">Serviced</option>
                      <option value="">Serviced</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex rounded items-center text-xs px-2 py-1 gap-1  bg-white absolute top-[155px] left-[40px]">
            <User className="size-4" />
            <div className="flex">
              <p className="font-medium">Company-</p>
              <p className="text-black font-bold">Serviced</p>
            </div>
          </div>

          <div className="flex w-full gap-4 cursor-pointer  py-12">
            <div className="w-[600px] ">
              <img className="object-cover " src={room} alt="room" />
            </div>
            <div className="flex flex-col gap-12  w-full relative ">
              <div>
                <p className="text-xl font-bold">
                  Super Hotel O Koramangala Near Sony Signal
                </p>
                <p>Near Eat Street, Kormangala, Bangalore · 1.4 km</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                  <button className="bg-green-700 px-2 rounded text-white font-semibold">
                    4.1 *
                  </button>
                  <p className="text-xs ">(864 Ratings) . Very Good</p>
                </div>
                <div className="flex gap-6 text-sm">
                  <div className="flex gap-1">
                    <CheckCheck className="rounded" />
                    <p>Reception</p>
                  </div>
                  <div className="flex gap-1">
                    <Wifi className=" " />
                    <p>Free Wifi</p>
                  </div>
                  <div className="flex gap-1">
                    <BatteryCharging className="" />
                    <p>Power backup</p>
                  </div>
                  <div>
                    <p>+ 13 more</p>
                  </div>
                </div>
              </div>
              <div className="flex  justify-between">
                <div className="flex flex-col ">
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-bold text-black"> ₹782</p>
                    <p className="text-gray-500"> ₹3497</p>
                    <p className="text-sm text-orange-400 font-medium">
                      72% off
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">
                      + ₹185 taxes & fees · per room per night
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center ">
                  <p className="text-black font-bold border border-black px-5 py-2 ">
                    View Details
                  </p>
                  <p className="text-white font-bold text-base px-5 bg-[#1AB64F] py-2">
                    Book Now
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-1 w-[130px] absolute text-red-500 text-xs font-medium  right-4">
              <Flame className="pt-0 h-4 size-10 " />
              <p>11 people booked this hotel in last 6 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrollbar;
