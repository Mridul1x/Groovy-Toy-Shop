import React from "react";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router-dom";
import Banner from "../components/Home/Banner/Banner";
import Footer from "../shared/Footer";

const Main = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
