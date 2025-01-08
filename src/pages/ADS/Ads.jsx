import React from "react";
import Navbar from "./Navbar";
import Scrollbar from "./Scrollbar";
import GetLocation from "./GetLocation";
import GetUserLocation from "./GetUserLocation";

const Ads = () => {
  return (
   <div>
    <Navbar/>
    <Scrollbar/>
    <GetLocation/>
    <GetUserLocation/>
   </div>
  );
};

export default Ads;
