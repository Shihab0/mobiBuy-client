import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

const Advertisement = () => {
  const [advertisedProducts, setAdvertisedProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/advertised?advertised=${true}`)
      .then((res) => res.json())
      .then((data) => setAdvertisedProducts(data));
  }, []);

  console.log(advertisedProducts);
  if (advertisedProducts && advertisedProducts.length === 0) {
    return;
  }

  return (
    <div className=" mb-6 -mt-5">
      <h2 className="text-gray-50 text-center text-5xl font-bold mb-6">
        Advertised products
      </h2>
      <div className="grid grid-cols-4 px-6">
        {advertisedProducts &&
          advertisedProducts.map((advertisedProduct) => (
            <div key={advertisedProduct._id}>
              <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-900 text-gray-50">
                <img
                  src={advertisedProduct.product_img}
                  alt=""
                  className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
                />
                <div className="mt-6 mb-2">
                  <span className="block text-xs font-medium tracking-widest uppercase text-violet-400">
                    <p className="text-xs">
                      {advertisedProduct.seller_name}
                      <CheckBadgeIcon
                        title="verified"
                        className=" w-4 inline"
                      />
                    </p>
                  </span>
                  <p className="text-xl">
                    <strong>
                      {advertisedProduct.model} ({advertisedProduct.condition}){" "}
                    </strong>
                  </p>
                  <p>
                    <span className="font-semibold">Location: </span>
                    {advertisedProduct.location}
                  </p>
                  <p>
                    <span className="font-semibold">Used period: </span>
                    {advertisedProduct.used_period}
                  </p>
                  <p>
                    <span className="font-semibold">Original price: </span>
                    {advertisedProduct.original_price} TK
                  </p>
                  <p className="text-sm">
                    <span className="text-base font-bold">Price: </span>
                    <span className="text-xl text-yellow-400">
                      {advertisedProduct.price} TK
                    </span>
                  </p>
                </div>
                <p>
                  <button className="w-full py-0.5  btn btn-primary border-none rounded text-sm pl-0 text-gray-100">
                    Book Now{" "}
                  </button>
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Advertisement;
