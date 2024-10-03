"use client";
import React, { useState } from "react";
import { NavbarMenu } from "@/mockData/data";
import ResponsiveMenu from "./ResponsiveMenu";
import { AiFillDingtalkCircle } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import { CiPhone } from "react-icons/ci";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <nav className=" shadow-xl">
        <div className="container mx-auto flex items-center justify-between py-3">
          <div className="text-2xl flex items-center gap-2 font-bold">
            <AiFillDingtalkCircle />
            <p className="uppercase">Şah</p>
            <p className="text-orange-500">Telecom</p>
          </div>
          <div className="hidden lg:flex">
            <ul className="flex items-center gap-4 text-gray-600">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block py-1 px-3 text-lg font-playfair tracking-wide font-semibold hover:text-orange-500 transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Icon Section */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-orange-500 rounded-full hover:text-white p-2 duration-200">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-orange-500 rounded-full hover:text-white p-2 duration-200">
              <PiShoppingCartThin />
            </button>
            <div className="hidden md:flex items-center justify-center gap-2 cursor-pointer text-2xl hover:bg-orange-500 text-orange-500 font-semibold rounded-md border-2 border-orange-500 px-4 py-1 hover:text-white duration-200">
              <CiPhone />
              <button>Əlaqə</button>
            </div>
          </div>
          {/* Hamburger Section */}
          <div onClick={() => setOpen(!open)} className="lg:hidden">
            <MdMenu className="text-4xl cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* Responsive Menu */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;

