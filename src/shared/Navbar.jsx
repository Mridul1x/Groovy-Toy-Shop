import React from "react";

import mainLogo1 from "../assets/mainLogo1.png";

const Navbar = () => {
  return (
    <div className="navbar bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">All Toys</a>
            </li>
            <li>
              <a>My Toys</a>
            </li>
            <li>
              <a>Add A Toy</a>
            </li>
            <li>
              <a>Blogs</a>
            </li>
          </ul>
        </div>
        <div>
          <img className="lg:w-5/6 lg:mx-auto" src={mainLogo1} alt="" />
        </div>
        <a className="btn btn-ghost normal-case text-xl hidden lg:flex">
          Groovy
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li tabIndex={0}>
            <a>All Toys</a>
          </li>
          <li>
            <a>My Toys</a>
          </li>
          <li>
            <a>Add A Toy</a>
          </li>
          <li>
            <a>Blogs</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline  text-white">Login</a>
      </div>
    </div>
  );
};
// text-[#EC1D24]
export default Navbar;
