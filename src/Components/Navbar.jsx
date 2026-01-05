import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import { Menu, X, Sun, Moon, LogOut, User, LayoutDashboard } from "lucide-react";

import logo from "../assets/logo.png";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  console.log(user)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore Artworks", path: "/explore-artwork" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },

  ];

  const handleSignOut = () => {
    signOutUser()
      .then(() => toast.success("Sign-out successful."))
      .catch((error) => console.log(error.message));
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-purple-600 to-blue-600 shadow-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-8 h-8 rounded-lg" />
            <span className="font-bold text-2xl tracking-tight text-white">
              Canvas
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-white border-b-2 border-white font-bold"
                      : "text-white/90 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Section (Theme + Auth) */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-circle btn-sm text-white"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar ring ring-primary ring-offset-base-100 ring-offset-2"
                >
                  <div className="w-10 rounded-full">
                    <img
                      src={user.photoURL || "https://i.pravatar.cc/150?img=3"}
                      alt="User"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow-lg menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border border-base-200"
                >
                  <div className="px-4 py-3 border-b border-base-200 mb-2">
                    <p className="text-sm font-semibold truncate text-base-content">
                      {user.displayName}
                    </p>
                    <p className="text-xs text-base-content/60 truncate">
                      {user.email}
                    </p>
                  </div>
                  <li>
                    <Link to="/profile" className="flex items-center gap-2">
                      <User size={16} /> Profile
                    </Link>
                  </li>
                   <li>
                    <Link to="/dashboard" className="flex items-center gap-2">
                      <LayoutDashboard size={16} /> Dashboard
                    </Link>
                  </li>
                  <li className="mt-2 text-error">
                    <button onClick={handleSignOut} className="flex items-center gap-2">
                      <LogOut size={16} /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link to="/login" className="btn btn-ghost btn-sm">
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary btn-sm text-white">
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
             <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-circle btn-sm text-white"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="btn btn-ghost btn-circle text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-base-100 border-t border-base-200">
          <ul className="menu p-4 gap-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "active bg-primary/10 text-primary" : ""
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            {!user && (
              <div className="divider my-2"></div>
            )}
            {!user && (
              <div className="flex flex-col gap-2">
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn btn-outline btn-sm w-full"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn btn-primary btn-sm w-full text-white"
                >
                  Register
                </Link>
              </div>
            )}
            {user && (
               <>
               <div className="divider my-1"></div>
               <li>
                  <button onClick={() => {handleSignOut(); setIsMenuOpen(false)}} className="text-error">
                    <LogOut size={16} /> Logout
                  </button>
               </li>
               </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
