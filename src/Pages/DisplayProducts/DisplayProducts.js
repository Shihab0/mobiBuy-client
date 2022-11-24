import React from "react";
import ProductCard from "./ProductCard/ProductCard";

const DisplayProducts = () => {
  return (
    <div className="bg-gray-800 my-3 p-6">
      <h3 className="text-center text-4xl font-bold text-white my-5 underline underline-offset-8">
        Chose you want to buy
      </h3>
      <div className="mx-3">
        <ProductCard></ProductCard>
      </div>
    </div>
  );
};

export default DisplayProducts;
