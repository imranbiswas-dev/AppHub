import React from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const link = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/apps">Apps</NavLink>
      <NavLink to="installation">Installation</NavLink>
    </>
  );
  return (
    <nav className="bg-base-100 shadow-sm ">
      <div className="navbar  h-19.5 max-w-7xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              {link}
            </ul>
          </div>
          {/* Logo & title */}
          <div className="flex items-center gap-2">
            <img className="w-8 h-8 md:w-10 md:h-10" src={logo} alt="" />
            <h2 className="text-xl md:text-2xl font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              AppHub
            </h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-5 font-semibold text-lg">
           {link}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2]"><span className="text-white"><FaGithub /></span><a className="text-white" href="https://github.com/imranbiswas-dev" target="_blank">Contribute</a></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
