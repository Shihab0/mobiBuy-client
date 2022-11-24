import React from "react";

const AdsSection = () => {
  return (
    <div>
      <div className="p-6 py-12 -m-3 bg-gray-400 text-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              Up to 20% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span className="font-bold text-lg">MOBIBUY</span>
            </div>
            <a
              href="/"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-50 text-gray-900 border-gray-400"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsSection;
