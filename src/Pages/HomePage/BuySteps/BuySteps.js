import React from "react";

const BuySteps = () => {
  return (
    <div>
      <section className="p-6 bg-gray-800 text-gray-100">
        <div className="container mx-auto">
          <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase text-violet-400">
            How to buy
          </span>
          <h2 className="text-5xl font-bold text-center text-gray-50">
            Buy a phone in 3 Steps
          </h2>
          <div className="grid gap-6 my-16 lg:grid-cols-3">
            <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-400 text-gray-900">
                1
              </div>
              <p className="text-2xl font-semibold">
                Select your device & see the current condition, and our advanced
                AI tech will tailor make the perfect price for you.
              </p>
            </div>
            <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-400 text-gray-900">
                2
              </div>
              <p className="text-2xl font-semibold">
                Book a free pickup from your home or work at a time slot as per
                your convenience
              </p>
            </div>
            <div className="flex flex-col p-8 space-y-4 rounded-md bg-gray-900">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-violet-400 text-gray-900">
                3
              </div>
              <p className="text-2xl font-semibold">
                Did we mention you get paid as soon as our executive picks up
                your device? It’s instant & secure payment all the way!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuySteps;
