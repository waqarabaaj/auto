import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">ABOUT US</h3>
          <p className="text-gray-300 mb-4">
            At motorguardpolicies.com, we're dedicated to providing exceptional health
            insurance solutions. With a focus on affordability, accessibility,
            and quality care, we prioritize your well-being and peace of mind.
          </p>
          <p className="text-gray-300 font-semibold">
            Own and Operated By
            <a
              href="https://www.intelvisionmediallc.com"
              className="font-bold px-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Intel Vision Media LLC
            </a>
          </p>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">USEFUL LINKS</h3>
          <ul className="text-gray-300 space-y-2">
            <li>
              <NavLink to="/about" className="hover:text-white">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/insurance" className="hover:text-white">Insurance Plan</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-white">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/terms" className="hover:text-white">Terms & Conditions</NavLink>
            </li>
            <li>
              <NavLink to="/privacy" className="hover:text-white">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/partners" className="hover:text-white">Partners</NavLink>
              </li>

          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">CONTACT INFO</h3>
          <p className="text-gray-300 mb-2">
            30 N Gould St, Ste R, Sheridan, 82801, Wyoming, USA
          </p>
          <p className="text-gray-300 mb-2">contact@motorguardpolicies.com</p>
          <p className="text-gray-300">+1 786 4909951</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-gray-400">Copyright © motorguardpolicies.com</p>
      </div>
    </footer>
  );
};

export default Footer;
