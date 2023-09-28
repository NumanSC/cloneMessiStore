import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
function MainLayout() {
  return (
    <div>
      <Navbar />
      <div >
        <Outlet />
      </div>
      <Footer className="footerLayout" />
    </div>
  );
}

export default MainLayout;
