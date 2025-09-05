import React from "react";
import Button from "../Homepage/components/Button";
import Quick from "./components/Quick";
import Issues from "./components/Issues";
import Links from "./components/Links";

export default function page() {
  return (
    <div className="w-[74vw] min-h-screen h-full m-auto py-10">
      <div className="py-12 space-y-10">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl text-gray-700 font-semibold">
            Support Portal
          </h1>
          <Button text="My tickets" />
        </div>
        <input
          type="text"
          placeholder="Eg: How do I open my account, How do i activate F&O..."
          className="outline-none w-full py-4 px-7 border border-gray-300 rounded-xs focus:shadow"
        />
      </div>
      <div className="flex gap-7 w-full h-full">
        <div className="space-y-7 w-full">
          <Quick
            text="Account Opening"
            ans="Resident individual, Minor Non Resident Indian (NRI), Company, Partnership, HUF and LLP, Glossary"
          />
          <Quick
            text="Your Zerodha Account"
            ans="Your Profile, Account modification, Client Master Report (CMR) and Depository Participant (DP), Nomination Transfer and conversion of securities "
          />
          <Quick
            text="Kite"
            ans="IPO,Trading FAQs, Margin Trading Facility (MTF) and Margins, Charts and orders, Alerts and Nudges, General"
          />
          <Quick
            text="Funds"
            ans="Add money, Withdraw money, Add bank accounts, eMandates
"
          />
          <Quick
            text="Console"
            ans="Portfolio, Corporate actions, Funds statement, Reports, Profile, Segments
"
          />
          <Quick
            text="Coin"
            ans="Mutual funds,National Pension Scheme (NPS), Fixed Deposit (FD), Features on Coin
    Payments and Orders, General
"
          />
        </div>
        <div className="w-1/2 space-y-5">
          <Issues />
          <Links />
        </div>
      </div>
    </div>
  );
}
