import React from "react";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router-dom";
import Banner from "../components/Home/banner";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
