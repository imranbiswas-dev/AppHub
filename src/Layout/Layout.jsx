import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-base-200 pb-10 md:pb-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
