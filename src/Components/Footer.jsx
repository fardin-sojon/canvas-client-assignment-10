import React from "react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
               <img src={logo} alt="Logo" className="w-10 h-10 rounded-lg" />
              <span className="text-2xl font-bold text-white">
                Canvas
              </span>
            </Link>
            <p className="text-sm text-white/80">
              Discover, showcase, and connect with the world's most talented digital artists. 
              Your gateway to a universe of creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Platform</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/explore-artwork" className="hover:text-white transition-colors">Explore</Link></li>
              <li><Link to="/add-artwork" className="hover:text-white transition-colors">Start Creating</Link></li>
              <li><Link to="/my-gallery" className="hover:text-white transition-colors">My Gallery</Link></li>
              <li><Link to="/my-favorites" className="hover:text-white transition-colors">Favorites</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Company</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="btn btn-circle btn-sm btn-ghost hover:bg-white/20 text-white">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="btn btn-circle btn-sm btn-ghost hover:bg-white/20 text-white">
                <FaXTwitter size={18} />
              </a>
              <a href="#" className="btn btn-circle btn-sm btn-ghost hover:bg-white/20 text-white">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="btn btn-circle btn-sm btn-ghost hover:bg-white/20 text-white">
                <FaLinkedinIn size={18} />
              </a>
            </div>
            <p className="text-sm text-white/80">
              Email: <a href="mailto:support@canvasconnect.com" className="hover:text-white">support@canvasconnect.com</a>
            </p>
          </div>
        </div>

        <div className="divider my-8 before:bg-white/20 after:bg-white/20"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} CanvasConnect. All rights reserved.</p>
          <p>Designed with ❤️ for artists.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
