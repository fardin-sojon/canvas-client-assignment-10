import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";

const Navber = () => {
  const { user, signOutUser } = use(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);


  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };


  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/explore-artwork">Explore Artworks</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/add-artwork">Add Artwork</NavLink>
          </li>
          <li>
            <NavLink to="/my-gallery">My Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/my-favorites">My Favorites</NavLink>
          </li>
        </>
      )}
    </>
  );

  const signOut = () => {
    signOutUser()
      .then(() => {
        // Sign-out successful.
        toast.success("Sign-out successful.");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="shadow-md bg-gradient-to-r from-[#6a11cb] to-[#2575fc]">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="mr-3 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
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
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content rounded-box mt-3 w-52 p-2 shadow bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white/80 hover:text-white"
            >
              {links}
            </ul>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">Canvas</span>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 text-white/80 hover:text-white">
            {links}
          </ul>
        </div>

        <div className="navbar-end flex gap-2">
          <input
           onChange={(e) => handleTheme(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle"/>
          {!user ? (
            <div>
              <Link
                to="/login"
                className="btn btn-sm border-none bg-white/20 text-white hover:bg-white hover:text-[#2575fc] rounded-3xl transition-all duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-sm border-none bg-white/20 text-white hover:bg-white hover:text-[#6a11cb] rounded-3xl transition-all duration-300"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="dropdown dropdown-end z-50 text-white">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-9 border-2 border-gray-300 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    referrerPolicy="no-referrer"
                    src={
                      user.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu  menu-sm dropdown-content  bg-gradient-to-r from-[#2575fc] to-[#6a11cb]  rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <div className=" pb-3 border-b border-b-gray-200">
                  <li className="text-sm font-bold">{user?.displayName}</li>
                  <li className="text-xs">{user?.email}</li>
                </div>
                <li className="mt-3">
                  <Link to={"/profile"}>Profile</Link>
                </li>
                <li>
                  <a> Settings</a>
                </li>
                <li>
                  <button
                    onClick={signOut}
                    className="btn btn-xs text-left bg-gradient-to-r from-[#2575fc] to-[#6a11cb] hover: text-white"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
