import React, { useContext } from "react";

import mainLogo1 from "../assets/mainLogo1.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogOut = () => {
    logout()
      .then(() => {
        navigate(location.pathname, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
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
        {user ? (
          <>
            {/* <div
              data-tip={user.displayName}
              className="me-1 lg:me-2 tooltip tooltip-bottom "
            >
              <img className="w-6 lg:w-11 rounded-full " src={user.photoURL} />
            </div> */}
            <div
              data-tip={user.displayName}
              className="avatar me-2 tooltip tooltip-bottom tooltip-warning"
            >
              <div className="w-12 rounded-full ring ring-red-800 ">
                <img src={user.photoURL} />
              </div>
            </div>
            <button
              onClick={handleLogOut}
              className="btn btn-outline  text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-outline  text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};
// text-[#EC1D24]
export default Navbar;
