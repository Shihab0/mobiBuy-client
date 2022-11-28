import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../../Components/BookingModal";
import OurProducts from "../Products/OurProducts/OurProducts";
import AdsSection from "./AdsSection/AdsSection";
import ProductCard from "./ProductCard/ProductCard";

const DisplayProducts = () => {
  const products = useLoaderData();
  const [bookingProduct, setBookingProduct] = useState(null);

  // const { data: products = [] } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: async () => {
  //     const res = await fetch("https://a12-mobi-buy-server-side.vercel.app/products/1");
  //     const data = await res.json();
  //     return data;
  //   },
  // });
  // console.log(products);

  return (
    <div className="bg-gray-800 my-3 p-6">
      <div>
        <AdsSection></AdsSection>
      </div>
      <div>
        <OurProducts></OurProducts>
      </div>
      <h3 className="text-center text-4xl font-bold text-white mt-10 mb-14 underline underline-offset-8">
        Chose you want to buy
      </h3>
      <div className="mx-3 md:grid grid-cols-3 gap-y-5">
        {products &&
          products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              setBookingProduct={setBookingProduct}
            ></ProductCard>
          ))}
      </div>
      {bookingProduct && (
        <BookingModal bookingProduct={bookingProduct}></BookingModal>
      )}
    </div>
  );
};

export default DisplayProducts;
