import React from "react";
import Articles from "../Articles/Articles";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function SidebarLayout() {
  return (
    <>
      <Navbar />
      <div className="row g-0 pt-5 mt-5 min-vh-100">
        <div className="col-md-2 ">
          <Articles />
        </div>
        <div className="col-md-10 text-dark container-fluid p-0">
          <div className="row g-0">
            <div className="col-12">
              <Outlet />
            </div>
            <div className="col-12">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
