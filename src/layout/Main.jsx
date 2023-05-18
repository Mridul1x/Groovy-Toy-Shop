import React from "react";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router-dom";
import Banner from "../components/Home/Banner/Banner";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
