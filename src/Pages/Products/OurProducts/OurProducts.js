import React, { useEffect, useState } from "react";
import ProductsCategory from "../ProductsCatagory/ProductsCategory";

const OurProducts = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);

  return (
    <div className="my-16">
      <h2 className="md:text-5xl text-4xl font-bold text-center underline underline-offset-8 text-white">
        {" "}
        Our Products
      </h2>
      <p className="text-white font-semibold text-center mt-4">
        Click on your favorite brand
      </p>
      <div className="mt-9">
        <section className="py-10 px-6 my-6 bg-gray-800 text-gray-100">
          <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
            {categories &&
              categories.map((category) => (
                <ProductsCategory
                  key={category._id}
                  category={category}
                ></ProductsCategory>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurProducts;
