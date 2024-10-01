import React, { useState } from "react";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-20 bg-blue-900 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        {/* Logo */}
        <div className="text-2xl font-bold text-white transition-transform transform hover:scale-105">
          <span className="text-yellow-400">Motorguard</span>Policies
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-lg cursor-pointer">
          <li>
            <NavLink
              to="/"
              exact
              className="text-white font-semibold hover:text-yellow-400 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-400"
              activeClassName="border-yellow-400 text-yellow-400"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className="text-white hover:text-yellow-400 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-400"
              activeClassName="border-yellow-400 text-yellow-400"
            >
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/insurance"
              className="text-white hover:text-yellow-400 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-400"
              activeClassName="border-yellow-400 text-yellow-400"
            >
              Insurance Plan
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="text-white hover:text-yellow-400 transition-all duration-300 border-b-2 border-transparent hover:border-yellow-400"
              activeClassName="border-yellow-400 text-yellow-400"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Contact Button */}
        <NavLink
            to="/insurance"> 
        <button className="hidden md:flex items-center space-x-2 text-lg text-yellow-400 font-semibold hover:text-white transition-colors duration-300 focus:outline-none px-4 py-2 rounded-full bg-gray-800">
          <FaUser />
          <span>Get a Quote</span>
        </button>
        </NavLink>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-3xl text-white cursor-pointer"
          onClick={() => setNavOpen(!navOpen)}
        >
          &#9776;
        </div>
      </div>

      {/* Mobile Navigation */}
      {navOpen && (
        <ul className="md:hidden bg-blue-900 bg-opacity-95 text-white text-center py-6 space-y-4 absolute top-full left-0 w-full shadow-lg transition-all duration-300">
          <li>
            <NavLink
              to="/"
              exact
              className="block text-white hover:text-yellow-400 transition-all duration-300"
              activeClassName="text-yellow-400"
              onClick={() => setNavOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="block text-white hover:text-yellow-400 transition-all duration-300"
              activeClassName="text-yellow-400"
              onClick={() => setNavOpen(false)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/insurance"
              className="block text-white hover:text-yellow-400 transition-all duration-300"
              activeClassName="text-yellow-400"
              onClick={() => setNavOpen(false)}
            >
              Insurance Plan
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="block text-white hover:text-yellow-400 transition-all duration-300"
              activeClassName="text-yellow-400"
              onClick={() => setNavOpen(false)}
            >
              Contact Us
            </NavLink>
          </li>

          {/* Mobile Contact Button */}
          <li className="flex justify-center mt-4">
            <NavLink
            to="/insurance">    
            <button className="flex items-center space-x-2 text-lg text-yellow-400 font-semibold hover:text-white transition-colors duration-300 focus:outline-none px-4 py-2 rounded-full bg-gray-800">
              <FaUser />
              <span>Get a Quote</span>
            </button>
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
