import React from "react";
import logo from "/image/oyo-logo1.png";
import internet from "/image/internet.png";
import login from "/image/login.png";
import { Activity, BriefcaseBusiness, Building2, CircleUser, Globe, Phone } from "lucide-react";
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
      icon: Phone ,

      subheading: "Call us to Book now",
    },
  ];
  return (
    <div className="flex flex-row w-full  h-16 px-16 shadow-lg">
      <div className="flex w-full justify-center">
        <div className="content-center ">
          <img className=" w-20" src={logo} alt="oyo-icon" />
        </div>

        <div className="flex  items-center w-full pl-12 justify-center">
          {NavbarData.map((item, idx) => (
            <div className="flex px-4 justify-center gap-1 cursor-pointer   border-r-2">
              <div className="flex items-center">
                <item.icon className="size-6" />
              </div>
              <div className="flex flex-col justify-center px-2  ">
                <p className="font-semibold text-md">{item.title}</p>
                <p className="text-xs font-normal text-gray-500">
                  {item.subheading}
                </p>
              </div>
            </div>
          ))}
          <div className="flex cursol-pointer items-center gap-1  border-r-2  px-4">
            <Globe className="stroke-1 " />
            <p className="font-bold">English</p>
          </div>
          <div className="flex items-center px-4 gap-2">
            <CircleUser className="stroke-[1.5]" />
            <p className="font-bold">Login / Signup</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
