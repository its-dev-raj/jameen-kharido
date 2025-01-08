import React from "react";
import logo from "/image/oyo-logo1.png";
import internet from "/image/internet.png";
import login from "/image/login.png";
import {
  Activity,
  BriefcaseBusiness,
  Building2,
  CircleUser,
  Globe,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const NavbarData = [
    {
      title: "Become a Member",
      subheading: "Additional 10% off on stays",
      icon: Activity,
    },
    {
      title: "OYO for Business",
      subheading: "Trusted by 5000 Corporates",
      icon: BriefcaseBusiness,
    },
    {
      title: "List your property",
      subheading: "Start earning in 30 mins",
      icon: Building2,
    },
    {
      title: "0124-6201611",
      icon: Phone,

      subheading: "Call us to Book now",
    },
  ];
  return (
    <div className="flex flex-row w-full  h-[70px] px-16 shadow-lg">
      <div className="flex w-full  justify-between">
        <div className="content-center ">
          <img className=" w-24 " src={logo} alt="oyo-icon" />
        </div>
        <Link to={"/exp"}>Go to Exp</Link>
        <div className="flex  items-center   justify-center">
          {NavbarData.map((item, idx) => (
            <div className="flex px-6 justify-center  cursor-pointer h-[70px]  border-r  ">
              <div className="flex items-center pr-4">
                <item.icon className=" text-[#939393]" />
              </div>
              <div className="flex flex-col justify-center  ">
                <p className="font-semibold text-md">{item.title}</p>
                <p className="text-sm font-normal text-gray-500">
                  {item.subheading}
                </p>
              </div>
            </div>
          ))}
          <div className="flex cursol-pointer items-center gap-1 h-20 px-4 border-r  ">
            <Globe className="stroke-1 " />
            <p className="font-bold">English </p>
          </div>
          <div className="flex items-center px-4 gap-2">
            <CircleUser className="stroke-[1.5] " />
            <p className="font-bold">Login / Signup</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
