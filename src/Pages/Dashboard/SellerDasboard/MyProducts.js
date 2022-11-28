import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import Loading from "../../../Components/Loading";
import { AuthContext } from "../../../Contexts/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const {
    data: myProducts = [],
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["myProducts"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/dashboard/myProducts?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handelBoost = (id) => {
    fetch(`http://localhost:5000/boost/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("This product set to Advertisement section");
          refetch();
        }
      });
  };

  const deleteMyProduct = (id) => {
    const confirmation = window.confirm("Are you sure to delete this product?");
    if (!confirmation) {
      return;
    }

    fetch(`http://localhost:5000/myProduct/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("User successfully deleted");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="">
      <h2 className="text-2xl  text-gray-50 p-3">My Products</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full text-gray-900">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Original Price</th>
                <th>Selling Price</th>
                <th>Selling Status</th>
                <th>Boost</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {isFetching ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                  <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                  <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
                </div>
              ) : null}
              {myProducts &&
                myProducts.map((myProduct, i) => (
                  <tr key={myProduct._id} className="hover">
                    <th>{i + 1}</th>
                    <td>{myProduct.model}</td>
                    <td>{myProduct.original_price}</td>
                    <td>{myProduct.price}</td>
                    {myProduct.status ? (
                      <td>{myProduct?.status}</td>
                    ) : (
                      <td className="text-green-500">Available</td>
                    )}
                    <td>
                      {myProduct.advertised ? (
                        <button className="btn btn-sm bg-blue-700 hover:bg-blue-700 disabled cursor-not-allowed">
                          Boosted
                        </button>
                      ) : (
                        <button
                          onClick={() => handelBoost(myProduct._id)}
                          className="btn btn-sm bg-green-700 hover:bg-green-900"
                        >
                          Boost
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => deleteMyProduct(myProduct._id)}
                        className="btn btn-sm hover:bg-red-700"
                      >
                        Delete
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

export default MyProducts;
