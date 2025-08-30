import React from "react";

export default function pricing() {
  return (
    <div className="h-[50vh] py-20 flex items-center w-[70%] m-auto gap-4">
      <div className="space-y-4 w-[50%]">
        <h3 className="text-2xl font-semibold">Unbeatable pricing</h3>
        <p>
          We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
        </p>
        <a href="#">See pricing</a>
      </div>
      <div className="flex">
        <div className="flex items-center text-xs text-gray-600">
          <img
          className="h-20"
            src="https://zerodha.com/static/images/pricing-eq.svg"
            alt="pricingEq"
          />
          <p>Free account opening</p>
        </div>
        <div className="flex items-center text-xs text-gray-600">
          <img
          className="h-20"
            src="https://zerodha.com/static/images/pricing-eq.svg"
            alt="pricingEq"
          />
          <p>Free equity delivery and direct mutual funds</p>
        </div>
        <div className="flex items-center text-xs text-gray-600">
          <img
          className="h-20"
            src="https://zerodha.com/static/images/other-trades.svg"
            alt="otherTrade"
          />
          <p>Intraday and F&O</p>
        </div>
      </div>
    </div>
  );
}
