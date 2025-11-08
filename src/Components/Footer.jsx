import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Website Info */}
        <div>
          <h1 className="text-2xl font-bold mb-2">Canvas</h1>
          <p className="text-sm">
            Showcase your artworks and explore <br /> creative works from others.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 cursor-pointer">
          <h2 className="font-semibold hover:underline">Contact</h2>
          <h2 className="font-semibold hover:underline">Terms of Service</h2>
          <h2 className="font-semibold hover:underline">Privacy Policy</h2>
          <h2 className="font-semibold hover:underline">Support</h2>
        </div>
        <div>
            <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/explore-artwork">Explore Artworks</NavLink>
      </li>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="font-semibold mb-2">Follow Us</h2>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-yellow-300">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <FaLinkedinIn size={20} />
            </a>
          </div>
          <p className="hover:underline mt-2 cursor-pointer">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=fardinsojon@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              fardinsojon@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm">
        &copy; {new Date().getFullYear()} Canvas. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
