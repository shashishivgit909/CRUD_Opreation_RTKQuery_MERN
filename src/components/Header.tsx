import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-800 text-white mb-4">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <a className="text-xl font-bold" href="#">
          Navbar
        </a>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-semibold" : "text-white"
              }
            >
              Read
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addProduct"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-semibold" : "text-white"
              }
            >
              Create
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
