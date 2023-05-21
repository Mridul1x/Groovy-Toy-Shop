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
import MyToys from "../myToys/myToys";
import UpdateToys from "../myToys/UpdateToys";

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
        loader: () => fetch(`http://localhost:5000/toys`),
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
            element: <MyToys />,
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
          fetch(`http://localhost:5000/toys/${params.id}`),
      },
    ],
  },
]);

export default router;
