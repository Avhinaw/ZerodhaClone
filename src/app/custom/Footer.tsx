import React from "react";
import { FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

export default function Footer() {
  return (
    <div className="h-[50vh] py-5 w-screen border-t border-gray-200 bg-gray-100">
      <div className="w-[80%] m-auto grid grid-cols-5 gap-4">
        <div className="space-y-4">
          <img
            className="w-40"
            src="https://zerodha.com/static/images/logo.svg"
            alt="zerodha"
          />
          <div className="text-xs text-gray-600">
            <p>© 2010 - 2025, Zerodha Broking Ltd.</p>
            <p>All rights reserved.</p>
          </div>
          <div className="flex gap-5 text-2xl text-gray-600">
            <FaXTwitter />
            <FaFacebookSquare />
            <IoLogoInstagram />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Account</h4>
          <div className="space-y-3 text-gray-600">
            <h5>Open demat account</h5>
            <h5>Minor demat account</h5>
            <h5>NRI demat account</h5>
            <h5>Commodity</h5>
            <h5>Dematerialisation</h5>
            <h5>Fund transfer</h5>
            <h5>MTF</h5>
            <h5>Referral program</h5>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Support</h4>
          <div className="space-y-3 text-gray-600">
            <h5>Contact us</h5>
            <h5>Support portal</h5>
            <h5>How to file a complaint?</h5>
            <h5>Status of your complaints</h5>
            <h5>Bulletin</h5>
            <h5>Circular</h5>
            <h5>Z-Connect blog</h5>
            <h5>Downloads</h5>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Company</h4>
          <div className="space-y-3 text-gray-600">
            <h5>About</h5>
            <h5>Philosophy</h5>
            <h5>Press & media</h5>
            <h5>Careers</h5>
            <h5>Zerodha Cares (CSR)</h5>
            <h5>Zerodha.tech</h5>
            <h5>Open source</h5>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Quick links</h4>
          <div className="space-y-3 text-gray-600">
            <h5>Upcoming IPOs</h5>
            <h5>Brokerage charges</h5>
            <h5>Market holidays</h5>
            <h5>Economic calendar</h5>
            <h5>Calculators</h5>
            <h5>Markets</h5>
            <h5>Sectors</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
