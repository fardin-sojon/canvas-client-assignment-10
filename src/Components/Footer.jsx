import React from "react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { NavLink } from "react-router";
import { motion } from "framer-motion";

const Footer = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="gradient-color text-white py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.15 }}
    >
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Website Info */}
        <motion.div variants={itemVariants}>
          <h1 className="text-2xl font-bold mb-2">Canvas</h1>
          <p className="text-sm">
            Showcase your artworks and explore <br /> creative works from others.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div className="space-y-2 cursor-pointer" variants={itemVariants}>
          <h2 className="font-semibold hover:underline transition">Contact</h2>
          <h2 className="font-semibold hover:underline transition">Terms of Service</h2>
          <h2 className="font-semibold hover:underline transition">Privacy Policy</h2>
          <h2 className="font-semibold hover:underline transition">Support</h2>
        </motion.div>

        {/* Navigation */}
        <motion.div className="flex flex-col gap-2 font-semibold" variants={itemVariants}>
          <NavLink to="/" className="hover:text-yellow-300 transition">Home</NavLink>
          <NavLink to="/explore-artwork" className="hover:text-yellow-300 transition">Explore Artworks</NavLink>
          <NavLink to="/add-artwork" className="hover:text-yellow-300 transition">Add Artwork</NavLink>
          <NavLink to="/my-gallery" className="hover:text-yellow-300 transition">My Gallery</NavLink>
          <NavLink to="/my-favorites" className="hover:text-yellow-300 transition">My Favorites</NavLink>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants}>
          <h2 className="font-semibold mb-2">Follow Us</h2>
          <div className="flex gap-4 mt-2">
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-yellow-300 transition">
              <FaFacebookF size={20} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-yellow-300 transition">
              <FaXTwitter size={20} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-yellow-300 transition">
              <FaInstagram size={20} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-yellow-300 transition">
              <FaLinkedinIn size={20} />
            </motion.a>
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
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div className="text-center mt-8 text-sm" variants={itemVariants}>
        &copy; {new Date().getFullYear()} Canvas. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
