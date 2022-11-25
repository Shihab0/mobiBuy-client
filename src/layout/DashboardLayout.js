import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile bg-gray-900 text-gray-50">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content mt-3">
          <h2 className="text-center text-3xl text-gray-50">
            Seller can control data
          </h2>
          <div className="divider border border-gray-700"></div>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 bg-gray-800 text-gray-50">
            <div className="flex  flex-col justify-center max-w-xs px-6 sm:px-12  text-gray-100">
              <img
                src={user?.photoURL}
                alt=""
                className="w-24 h-24 mx-auto rounded-full bg-gray-500 aspect-square"
              />
              <div className="space-y-4 text-center divide-y divide-gray-700">
                <div className="my-2 space-y-1">
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    {user?.displayName}
                  </h2>
                  <button className="btn btn-sm btn-success">
                    Request for verify
                  </button>
                </div>
                <div className="flex justify-center pt-2 space-x-4 align-center"></div>
              </div>
            </div>
            <li>
              <Link to="/dashboard/myProducts">My Products</Link>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
