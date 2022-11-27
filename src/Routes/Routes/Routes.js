import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import AllUsers from "../../Pages/Dashboard/AdminDashboard/AllUsers";
import MyProducts from "../../Pages/Dashboard/SellerDasboard/MyProducts";
import SellerDashboard from "../../Pages/Dashboard/SellerDasboard/SellerDashboard";
import DisplayProducts from "../../Pages/DisplayProducts/DisplayProducts";
import Home from "../../Pages/HomePage/Home/Home";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import Login from "../../Pages/SignUp and Login/Login";
import SignUp from "../../Pages/SignUp and Login/SignUp";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/displayProducts/:id",
        element: <DisplayProducts></DisplayProducts>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/AddProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/orders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/sellerDashboard",
        element: <SellerDashboard></SellerDashboard>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/seller",
        element: <SellerDashboard></SellerDashboard>,
      },
      {
        path: "/dashboard/users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/myProducts",
        element: <MyProducts></MyProducts>,
      },
    ],
  },
]);
