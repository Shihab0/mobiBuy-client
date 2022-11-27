import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const ReportedProducts = () => {
  const { data: reportedProducts = [] } = useQuery({
    queryKey: ["reported"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/dashboard/reported/");
      const data = await res.json();
      return data;
    },
  });
  console.log(reportedProducts);

  return (
    <div>
      <h2 className="text-3xl ml-8 my-5 text-red-600">
        {" "}
        <ExclamationTriangleIcon className="w-8 inline-block" /> (
        {reportedProducts?.length}) Reported Products
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table text-black w-full">
            <thead>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Seller Name</th>
                <th>Price</th>
                <th>Delete Product</th>
              </tr>
            </thead>
            <tbody>
              {reportedProducts &&
                reportedProducts.map((reportedProduct, i) => (
                  <tr key={reportedProduct._id}>
                    <th>{i + 1}</th>
                    <td>{reportedProduct.model}</td>
                    <td>{reportedProduct.seller_name}</td>
                    <td>{reportedProduct.price}</td>
                    <td>
                      <button className="btn btn-circle btn-sm bg-red-600 hover:bg-red-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportedProducts;
