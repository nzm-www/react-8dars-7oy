import React from "react";
import img from "../assets/logo.png";
function Header() {
  return (
    <div className="bg-[#0a146e]">
      <div className="container pr-40 pl-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center  gap-3">
            <img className="w-20 " src={img} alt="" />
            <p className="text-white font-semibold hover:bg-[#c0c2c9] hover:p-1 hover:rounded-md">
              Personal
            </p>
            |
            <p className="text-white font-semibold hover:bg-[#c0c2c9] hover:p-1 hover:rounded-md">
              Business
            </p>
          </div>
          <nav className="flex items-center gap-10 cursor-pointer  text-white font-semibold ">
            <p className=" hover:bg-slate-400 p-1 rounded-md ">Send Money</p>
            <p className=" hover:bg-slate-400 p-1 rounded-md ">Converter</p>
            <p className=" hover:bg-slate-400 p-1 rounded-md ">Currency API</p>
            <p className=" hover:bg-slate-400 p-1 rounded-md ">Tools</p>
            <p className=" hover:bg-slate-400 p-1 rounded-md ">Pesources</p>
          </nav>
          <div className="flex items-center gap-10 cursor-pointer  text-white font-semibold ">
            <p className=" hover:bg-slate-400 p-1 rounded-md ">Sign in</p>
            <button className="bg-blue-600 pt-2 pb-2 pl-5 pr-5   rounded-md">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
