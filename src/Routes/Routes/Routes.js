import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import Blogs from "../../Pages/Blogs/Blogs";
import AllUsers from "../../Pages/Dashboard/AdminDashboard/AllUsers";
import ReportedProducts from "../../Pages/Dashboard/AdminDashboard/ReportedProducts";
import MyProducts from "../../Pages/Dashboard/SellerDasboard/MyProducts";
import SellerDashboard from "../../Pages/Dashboard/SellerDasboard/SellerDashboard";
import DisplayProducts from "../../Pages/DisplayProducts/DisplayProducts";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/HomePage/Home/Home";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import Login from "../../Pages/SignUp and Login/Login";
import SignUp from "../../Pages/SignUp and Login/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

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
        path: "/myOrders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/sellerDashboard",
        element: <SellerDashboard></SellerDashboard>,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
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
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reported",
        element: (
          <AdminRoute>
            <ReportedProducts></ReportedProducts>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/myProducts",
        element: (
          <SellerRoute>
            <MyProducts></MyProducts>
          </SellerRoute>
        ),
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
