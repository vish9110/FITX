import React from "react";
import { IoIosFitness } from "react-icons/io";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <footer className="w-full bg-red-800 text-white mt-16">
      
      {/* Top Section */}
      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-10
        flex
        flex-col
        gap-10
        md:flex-row
        md:justify-between
        md:items-start
      ">

        {/* Logo + Description */}
        <div className="md:w-[35%] space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-red-500">
            <IoIosFitness className="text-3xl" />
            <span className="text-lg font-bold text-white">
              FitLife
            </span>
          </div>

          <p className="text-sm leading-relaxed">
            Train smart, stay strong, and stay motivated with workouts and
            fitness tools built for a healthier lifestyle.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 pt-2">
            <a className="hover:text-red-500 transition-transform hover:scale-110">
              <FaInstagram size={18} />
            </a>
            <a className="hover:text-red-500 transition-transform hover:scale-110">
              <FaYoutube size={18} />
            </a>
            <a className="hover:text-red-500 transition-transform hover:scale-110">
              <FaTwitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:w-[20%] text-center md:text-left">
          <h3 className="text-white font-semibold mb-3 text-sm uppercase">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" className="hover:text-red-500 transition">
                Home
              </NavLink>
            </li>
            <li>
              <HashLink smooth to="/#exercises-section" className="hover:text-red-500 transition">
                Exercises
              </HashLink>
            </li>
            <li>
              <NavLink to="/BmiCalculator" className="hover:text-red-500 transition">
                BMI Calculator
              </NavLink>
            </li>
            <li>
              <NavLink to="/Motivation" className="hover:text-red-500 transition">
                Motivation
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="md:w-[20%] text-center md:text-left">
          <h3 className="text-white font-semibold mb-3 text-sm uppercase">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-red-500 transition cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-red-500 transition cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-red-500 transition cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 text-center text-xs text-black font-bold">
        © {new Date().getFullYear()} FitLife. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
