import React from "react";
import logoImage from "../assets/canvas-logo.webp";
import { Link, NavLink } from "react-router";

const Navber = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/explore-artwork">Explore Artworks</NavLink>
      </li>
      {/* <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">Home</NavLink></li> */}
    </>
  );

  return (
    <div>
      <div className="shadow-sm bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500">
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="mr-3 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <a className="text-2xl font-bold text-white lg:ml-5">Canvas</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {links}
            </ul>
          </div>
          <div className="navbar-end flex gap-1">
            <div className="flex gap-2">
              <Link to="/login" className="btn btn-sm btn-outline text-white border-white hover:bg-white hover:text-purple-600 rounded-3xl">
                Login
              </Link>
              <Link to="/register" className="btn btn-sm btn-outline text-white border-white hover:bg-white hover:text-pink-500 rounded-3xl">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
