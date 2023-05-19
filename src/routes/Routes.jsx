import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ToyDetails from "../components/Home/Tabs/ToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/product-category/:id",
        element: <ToyDetails></ToyDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
      },
    ],
  },
]);

export default router;
