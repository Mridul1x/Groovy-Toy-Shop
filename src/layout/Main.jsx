import React from "react";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router-dom";
import Banner from "../components/Home/Banner/Banner";
import Footer from "../shared/Footer";

const Main = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-grow">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <div className="flex-shrink-0">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
