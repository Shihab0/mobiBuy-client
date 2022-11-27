import {
  CheckBadgeIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user, loadedUser } = useContext(AuthContext);

  // const [loadedUser, setLoadedUser] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/dashboard?email=${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setLoadedUser(data))
  //     .catch((err) => console.log(err));
  // }, [user?.email]);

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
          {loadedUser?.role === "admin" ? (
            <h2 className="text-center text-3xl text-gray-50">
              Admin can control data
            </h2>
          ) : (
            <h2 className="text-center text-3xl text-gray-50">
              Seller can control data
            </h2>
          )}
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
                  {loadedUser?.role === "seller" ? (
                    <>
                      {loadedUser?.verified === "true" ? (
                        <button className="btn btn-sm bg-blue-800">
                          <CheckBadgeIcon className=" w-6" />
                          Verified seller
                        </button>
                      ) : (
                        <button className="btn btn-sm bg-red-600 hover:bg-green-600">
                          <ExclamationTriangleIcon className="text-yellow-400 w-6 " />
                          Request for verify
                        </button>
                      )}
                    </>
                  ) : (
                    <button className="btn btn-sm bg-blue-800">
                      <CheckBadgeIcon className=" w-6" /> Admin
                    </button>
                  )}
                </div>
                <div className="flex justify-center pt-2 space-x-4 align-center"></div>
              </div>
            </div>
            <li>
              {loadedUser?.role === "seller" ? (
                <Link to="/dashboard/myProducts">My Products</Link>
              ) : (
                <Link to="/dashboard/users">All Users</Link>
              )}
            </li>
            <li>
              {loadedUser.role === "admin" ? (
                <Link to="/dashboard/reported"> Reported Products </Link>
              ) : (
                <Link>Customer message</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
