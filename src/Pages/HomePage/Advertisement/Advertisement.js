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
                    Quisque
                  </span>
                  <h2 className="text-xl font-semibold tracking-wide">
                    {advertisedProduct.model}
                  </h2>
                </div>
                <p className="text-gray-100">
                  Mauris et lorem at elit tristique dignissim et ullamcorper
                  elit. In sed feugiat mi. Etiam ut lacinia dui.
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Advertisement;
