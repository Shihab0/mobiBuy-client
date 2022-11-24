import React from "react";
import bannerImg from "../../../Assest/Image/bannerImg.png";

const Banner = () => {
  return (
    <div>
      <section className="bg-gray-800 text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Buy or sell used
              <span className="text-violet-400"> Phone. </span> Save your money.
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Free pickup || Cash on delivery || Save time
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="/"
                className="px-8 py-3 text-lg font-semibold rounded border bg-violet-400 text-gray-900 hover:border-yellow-500 hover:font-bold"
              >
                Buy a phone
              </a>
              <a
                rel="noopener noreferrer"
                href="/"
                className="px-8 py-3 text-lg font-semibold border rounded border-gray-100 hover:border-yellow-500 hover:font-bold"
              >
                Register as a seller
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src={bannerImg} alt="" className="lg:h-96" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
