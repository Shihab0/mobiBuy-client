import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assest/Image/logo.png";
import { AuthContext } from "../../Contexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [loadedUser, setLoadedUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/dashboard?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setLoadedUser(data))
      .catch((err) => console.log(err));
  }, [user?.email]);

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("successfully logout");
      navigate("/");
    });
  };

  const menuItems = (
    <>
      <li>
        {" "}
        <Link to="/"> Home </Link>
      </li>
      <li>
        <Link to="/orders">My Order</Link>
      </li>
      <li>
        {" "}
        <Link to="/AddProduct">Add product</Link>
      </li>
      <li>
        {" "}
        {loadedUser.role === "seller" ? (
          <Link to="/dashboard/seller">Dashboard</Link>
        ) : (
          <Link to="/dashboard/users">Dashboard</Link>
        )}
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      {user?.uid ? (
        <li>
          <Link onClick={handleLogOut}>Logout</Link>
        </li>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-slate-700 flex justify-between text-white py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-600 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">
          {" "}
          <img className=" rounded-3xl w-14 h-14" src={logo} alt="/"></img>{" "}
          <span className="text-2xl font-bold ml-3"> mobiBuy</span>{" "}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={1}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
