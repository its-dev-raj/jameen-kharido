import React from "react";
import logo from "/image/white-oyo.jpg";
import { Hotel } from "lucide-react";
import play from "/image/google-play.png";
import app from "/image/app-store.png";

const Footer = () => {
  return (
    <div className="bg-[#6D787D] w-full">
      <div className="flex justify-between px-16 py-6 border-b ">
        <div className="flex justify-center gap-6 items-center">
          <img className="w-20" src={logo} alt="" />
          <p className="text-white text-2xl font-bold">
            World's leading chain of hotels and homes
          </p>
        </div>
        <div className="flex justify-between gap-4 items-center">
          <p className="text-white text-2xl font-bold">
            Join our network and grow your business!
          </p>
          <div className="bg-white flex p-3 px-4 gap-2 rounded-md">
            <Hotel />
            <p className="text-[#6F787C] text-sm font-semibold">
              List your property
            </p>
          </div>
        </div>
      </div>
      <div className="flex px-20   py-6 ">
        <div className="flex w-1/3 flex-col border-r gap-6">
          <p className="text-white font-medium">
            Download OYO app for exciting offers.
          </p>
          <div className="flex w-[50px]">
            <img className="p-0" src={app} alt="" />
            <img src={play} alt="playstore" />
          </div>
        </div>
        <div className="flex gap-14 pl-10 pr-24 text-white font-normal justify-center items-center ">
          <div className="flex flex-col gap-4">
            <p>About Us</p>
            <p>Teams / Careers</p>
            <p>Blogs</p>
            <p>Support</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>Official OYO Blog</p>
            <p>Investor Relations</p>
            <p>OYO Circle</p>
            <p>OYO Frames</p>
          </div>
        </div>
        <div className="flex gap-14 px-10 border-l text-white font-normal justify-center items-center">
          <div className="flex flex-col gap-4">
            <p>Terms and conditions</p>
            <p>Guest Policies</p>
            <p>Privacy Policy</p>
            <p>Trust And Safety</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>Cyber Security</p>
            <p>Cyber Security Awareness</p>
            <p>Responsible Disclosure</p>
            <p>Advertise your Homes</p>
          </div>
        </div>
      </div>

      <div className="md:flex h-full bg-[#6D787D] border-t text-white font-bold">
        <div className="flex flex-col w-fit h-fit gap-2 py-12  px-16 ">
          <h1>What's new</h1>
          <div className="flex flex-col gap-4  font-bold text-sm h-fit w-full">
            {[
              "Surface Pro",
              "Surface Laptop",
              "Microsoft Copilot",
              "Microsoft 365",
              "Explore Microsoft products",
              "Windows 11 apps",
            ].map((item, idx) => {
              return <p className="hover:underline">{item}</p>;
            })}
          </div>
        </div>
        <div className="flex flex-col w-fit h-fit gap-2 py-12 px-16">
          <h1>Microsoft Store</h1>
          <div className="flex flex-col gap-4  font-bold text-sm h-fit w-full">
            {[
              "Account profile",
              "Download Center",
              "Microsoft Store Support",
              "Returns",
              "Order tracking",
            ].map((item, idx) => {
              return <p className="hover:underline">{item}</p>;
            })}
          </div>
        </div>
        <div className="flex flex-col w-fit h-fit gap-2 py-12 px-16">
          <h1>Education</h1>
          <div className="flex flex-col gap-4  font-bold text-sm h-fit w-full">
            {[
              "Microsoft in education",
              "Devices for education",
              "Microsoft Teams for Education",
              "Microsoft 365 Education",
              "Office Education",
              "Educator training and development",
              "Deals for students and parents",
              "Azure for students",
            ].map((item, idx) => {
              return <p className="hover:underline">{item}</p>;
            })}
          </div>
        </div>
        <div className="flex flex-col w-fit h-fit gap-2 py-12 px-16">
          <h1>Business</h1>
          <div className="flex flex-col gap-4  font-bold text-sm h-fit w-full">
            {[
              "Microsoft Cloud",
              "Microsoft Security",
              "Azure",
              "Dynamics 365",
              "Microsoft 365",
              "Microsoft Advertising",
              "Microsoft 365 Copilot",
              "Microsoft Teams",
            ].map((item, idx) => {
              return <p className="hover:underline">{item}</p>;
            })}
          </div>
        </div>
        <div className="flex flex-col w-fit h-fit gap-2 py-12 px-16">
          <h1>Developer & IT</h1>
          <div className="flex flex-col gap-4  font-bold text-sm h-fit w-full">
            {[
              "Developer Center",
              "Documentation",
              "Microsoft Learn",
              "Microsoft Tech Community",
              "Azure Marketplace",
              "AppSource",
              "Microsoft Power Platform",
              "Visual Studio",
            ].map((item, idx) => {
              return <p className="hover:underline">{item}</p>;
            })}
          </div>
        </div>
        <div className="flex flex-col w-fit h-fit gap-2 py-12 px-16 ">
          <h1>Company</h1>
          <div className="flex flex-col gap-4  font-bold  text-sm h-fit w-full">
            {[
              "Careers",
              "About Microsoft",
              "Company news",
              "Privacy at Microsoft",
              "Investors",
              "Security",
              "Sustainability",
            ].map((item, idx) => {
              return <p className="hover:underline">{item}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
