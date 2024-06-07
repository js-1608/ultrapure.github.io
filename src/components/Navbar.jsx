import React from "react";
import logo from "../assets/logo.jpeg";
import { IoIosSearch } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";



const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100">
      <img src={logo} alt="Logo" className="w-38 h-auto md:w-38 md:h-18" />
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center space-x-2">
          <FiPhoneCall className="text-lg md:text-xl text-gray-700" />
          <div className="flex flex-col text-right">
            <h2 className="text-sm md:text-lg font-bold">For Business Enquiry</h2>
            <p className="text-xs md:text-sm">1800 1100 50</p>
          </div>
        </div>
        <div className="flex items-center border p-2 rounded-3xl bg-white">
          <input
            type="text"
            placeholder="EXPLORE"
            className="outline-none w-full px-2"
          />
          <IoIosSearch className="text-gray-600" />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
