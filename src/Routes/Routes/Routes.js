import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import DisplayProducts from "../../Pages/DisplayProducts/DisplayProducts";
import Home from "../../Pages/HomePage/Home/Home";

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
      },
    ],
  },
]);
