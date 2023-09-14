import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg p-3 fixed-top">
        <div className="container ">
          <Link className="navbar-brand text-white fs-1 fw-medium" to="/home">
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav d-flex justify-content-end gap-3 ms-auto w-25">
              <li className="nav-item ">
                <NavLink
                  className={`nav-link text-white rounded-3 fw-bold`}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link text-white rounded-3 fw-bold`}
                  to="/portfolio"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link  text-white rounded-3 fw-bold`}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link text-white rounded-3 fw-bold`}
                  to="/articles"
                >
                  Articles
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
