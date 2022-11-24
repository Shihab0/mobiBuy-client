import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import DisplayProducts from "../../Pages/DisplayProducts/DisplayProducts";
import Home from "../../Pages/HomePage/Home/Home";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import SignUp from "../../Pages/SignUp and Login/SignUp";

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
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
