import React from "react";
import ProductShow from "./components/ProductShow";
import Universe from "./components/Universe";
import Button from "../Homepage/components/Button";

export default function page() {
  return (
    <div className="w-[74vw] m-auto py-10">
      <div className="border-b border-gray-200 h-[40vh] py-12 text-center text-gray-700 space-y-4">
        <h2 className="text-3xl font-semibold">Zerodha Products</h2>
        <h3 className="text-lg">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <h4>Check out our investment offerings →</h4>
      </div>
      <div className="h-full">
        <ProductShow
          image="https://zerodha.com/static/images/products-kite.png"
          title="Kite"
          desc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
          link="Try demo"
          styl="row"
        />
        <ProductShow
          image="https://zerodha.com/static/images/products-console.png"
          title="Console"
          desc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
          link="Learn More"
          styl="row-reverse"
        />
        <ProductShow
          image="https://zerodha.com/static/images/products-coin.png"
          title="Coin"
          desc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
          link="Coin"
          styl="row"
        />
        <ProductShow
          image="https://zerodha.com/static/images/kite-trade/landing.svg"
          title="Kite Connect API"
          desc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
          link="Kite Connect"
          styl="row-reverse"
        />
        <ProductShow
          image="https://zerodha.com/static/images/varsity-products.png"
          title="Varsity mobile"
          desc=" An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
          link="Coin"
          styl="row"
        />
        <p className="text-center text-xl text-gray-700 py-20">
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </p>
      </div>
      <div className="text-center space-y-5 text-gray-700">
        <h3 className="text-xl font-semibold">The Zerodha Universe</h3>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="grid grid-cols-3 items-center justify-center gap-5 w-[84%] h-full m-auto py-5">
          <Universe
            img="https://zerodha.com/static/images/partners/zerodhafundhouse.png"
            desc="Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
          />
          <Universe
            img="https://zerodha.com/static/images/products/sensibull-logo.svg"
            desc="Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more."
          />
          <Universe
            img="https://zerodha.com/static/images/partners/tijori.svg"
            desc="Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more."
          />
          <Universe
            img="https://zerodha.com/static/images/products/streak-logo.png"
            desc="Systematic trading platform
that allows you to create and backtest
strategies without coding."
          />
          <Universe
            img="https://zerodha.com/static/images/products/smallcase-logo.png"
            desc="Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs."
          />
          <Universe
            img="https://zerodha.com/static/images/products/ditto-logo.png"
            desc="Personalized advice on life
and health insurance. No spam
and no mis-selling."
          />
        </div>
      </div>
      <div className="m-auto flex text-center items-center justify-center my-10">
        <a href="/signup">
          <Button text="Signup for free" />
        </a>
      </div>
    </div>
  );
}
