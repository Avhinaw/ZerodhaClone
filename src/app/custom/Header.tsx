import React from "react";
import { IoMdMenu } from "react-icons/io";
export default function Header() {
  return (
    <div className="border-b-2 border-gray-100">
      <div className="flex justify-between w-[70%] m-auto h-16 items-center">
        <div>
          <a href="/">
            <img
              className="w-36"
              src="https://zerodha.com/static/images/logo.svg"
              alt="zerodha"
            />
          </a>
        </div>
        <div className="flex gap-10 text-gray-600 items-center">
          <a href="/signup">Signup</a>
          <a href="/about">About</a>
          <a href="/product">Products</a>
          <a href="/price">Pricing</a>
          <a href="/support">Support</a>
          <a href="#" className="text-xl text-black">
            <IoMdMenu />
          </a>
        </div>
      </div>
    </div>
  );
}
