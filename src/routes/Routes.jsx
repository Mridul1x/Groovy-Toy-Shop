import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ToyDetails from "../components/Home/Tabs/ToyDetails";
import AllToysPage from "../allToys/AllToysPage";
import PrivateRoute from "./PrivateRoute";
import AddAToy from "../addAToy/AddAToy";

import UpdateToys from "../myToys/UpdateToys";
import ErrorPage from "../error/ErrorPage";
import MyToys from "../myToys/MyToys";
import Blog from "../components/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
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
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/allToys",
        element: <AllToysPage></AllToysPage>,
      },
      {
        path: "/addtoys",
        element: (
          <PrivateRoute>
            <AddAToy></AddAToy>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(`https://assignment-11-toy-server-indol.vercel.app/toys`),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <Outlet />
          </PrivateRoute>
        ),
        children: [
          {
            path: "/mytoys",
            element: <MyToys></MyToys>,
          },
          {
            path: ":id/update",
            element: <UpdateToys />,
          },
        ],
      },
      {
        path: "/product-category/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-11-toy-server-indol.vercel.app/toys/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
