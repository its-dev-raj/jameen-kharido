import React from "react";
import logo from "/image/oyo-logo1.png";

const Ads = () => {
  return (
    <div className="w-full flex ">
      <div className="flex px-16 gap-4 py-20">
        <div className="content-center ">
          <img className=" w-20" src={logo} alt="oyo-icon" />
        </div>
        <div className="">
          <input className="px-12 border-red-600 py-6" type="text" />
        </div>
      </div>
    </div>
  );
};

export default Ads;
