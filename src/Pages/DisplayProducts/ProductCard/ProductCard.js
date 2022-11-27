import React from "react";
import { CheckBadgeIcon, FlagIcon } from "@heroicons/react/24/solid";

const ProductCard = ({ product, setBookingProduct }) => {
  console.log(product);
  const {
    product_img,
    verified,
    seller_name,
    used_period,
    original_price,
    seller_img,
    condition,
    location,
    price,
    model,
    posted_date,
  } = product;

  return (
    <div>
      <div className="rounded-md shadow-md sm:w-96 bg-gray-900 text-gray-100">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center space-x-2">
            {seller_img ? (
              <img
                src={seller_img}
                alt=""
                className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-gray-500 border-gray-700"
              />
            ) : (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgkIF9X_E1VtcGW9VWChUHVqACvLmYMdOJpg&usqp=CAU"
                alt=""
                className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-gray-500 border-gray-700"
              />
            )}
            <div className="-space-y-1">
              <h2 className="text-sm font-semibold leading-none">
                {seller_name}
              </h2>
              <span className="inline-block text-xs leading-none text-gray-400">
                <span className="font-semibold"> Posted on:</span> {posted_date}
              </span>
            </div>
          </div>
          <div title="Verified seller">
            {verified ? (
              <>
                <p className="text-blue-400">
                  <CheckBadgeIcon className=" w-6 inline" />
                  Verified
                </p>
              </>
            ) : (
              <>
                <p>Not verified</p>
              </>
            )}
          </div>
        </div>
        <img
          src={product_img}
          alt=""
          className="object-cover object-center w-full h-80 bg-gray-500"
        />
        <div className="p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                type="button"
                title="Wish list"
                className="flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                </svg>
              </button>
              <button
                type="button"
                title="Add a comment"
                className="flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M496,496H480a273.39,273.39,0,0,1-179.025-66.782l-16.827-14.584C274.814,415.542,265.376,416,256,416c-63.527,0-123.385-20.431-168.548-57.529C41.375,320.623,16,270.025,16,216S41.375,111.377,87.452,73.529C132.615,36.431,192.473,16,256,16S379.385,36.431,424.548,73.529C470.625,111.377,496,161.975,496,216a171.161,171.161,0,0,1-21.077,82.151,201.505,201.505,0,0,1-47.065,57.537,285.22,285.22,0,0,0,63.455,97L496,457.373ZM294.456,381.222l27.477,23.814a241.379,241.379,0,0,0,135,57.86,317.5,317.5,0,0,1-62.617-105.583v0l-4.395-12.463,9.209-7.068C440.963,305.678,464,262.429,464,216c0-92.636-93.309-168-208-168S48,123.364,48,216s93.309,168,208,168a259.114,259.114,0,0,0,31.4-1.913Z"></path>
                </svg>
              </button>
              <button
                type="button"
                title="Share post"
                className="flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"></path>
                </svg>
              </button>
            </div>
            <button
              type="button"
              title="Report to admin"
              className="flex items-center justify-center"
            >
              <FlagIcon className="w-5 h-5 fill-current text-red-600" />
            </button>
          </div>
          <div>
            <p className="text-xl">
              <strong>
                {model} ({condition}){" "}
              </strong>
            </p>
            <p>
              <span className="font-semibold">Location: </span>
              {location}
            </p>
            <p>
              <span className="font-semibold">Used period: </span>
              {used_period}
            </p>
            <p>
              <span className="font-semibold">Original price: </span>
              {original_price} TK
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-sm">
              <span className="text-base font-bold">Price: </span>
              <span className="text-xl text-yellow-400">{price} TK</span>
            </p>
            <label
              htmlFor="booking-modal"
              onClick={() => setBookingProduct(product)}
              className="w-full py-0.5 btn btn-primary border-none rounded text-sm pl-0 text-gray-100"
            >
              Book Now{" "}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
