import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myOrders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data);
        console.log(data);
      });
  }, [user?.email]);

  return (
    <div className="min-h-screen">
      <h2 className="text-white text-3xl mb-4 text-center">My Orders</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Booking date</th>
                <th>Price</th>
                <th>Payment Status</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {myOrders &&
                myOrders.map((myOrder, i) => (
                  <tr key={myOrder._id}>
                    <th>{i + 1}</th>
                    <td>{myOrder.productName}</td>
                    <td>{myOrder.bookingDate}</td>
                    <td>{myOrder.price}</td>
                    <td>
                      {" "}
                      <button className="btn btn-success btn-sm">
                        Payment
                      </button>{" "}
                    </td>
                    <td>
                      {" "}
                      <button className="btn bg-red-500 hover:bg-red-700 btn-sm">
                        Remove item
                      </button>{" "}
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

export default MyOrders;
