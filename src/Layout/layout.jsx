import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar"
import { useLocation } from "react-router-dom";
const Layout = () => {

  return (
    <div>
      <main>
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
