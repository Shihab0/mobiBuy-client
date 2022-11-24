import React from "react";
import { Link } from "react-router-dom";

const ProductsCategory = ({ category }) => {
  console.log(category);
  const { brand_name, brand_status, img, category_id } = category;
  return (
    <div>
      <Link
        to={`/category/${category_id}`}
        className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-900 text-gray-100 cursor-pointer hover:border-green-500 hover:border-2"
      >
        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
          <img src={img} alt="" className="h-9 w-9 text-gray-800" />
        </div>
        <div className="flex flex-col justify-center align-middle">
          <p className="text-3xl font-semibold leading-none">{brand_name}</p>
          <p className="capitalize">{brand_status}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductsCategory;
