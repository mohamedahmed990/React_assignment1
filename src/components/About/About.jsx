import React from "react";
import "./About.css";
export default function About() {
  return (
    <div
      id="about"
      className="d-flex justify-content-center align-items-center flex-column gap-3 text-white"
    >
      <div className="container px-5">
        <h2 className="fs-1 fw-bold text-center">ABOUT COMPONENT</h2>
        <div className="d-flex gap-3 align-items-center justify-content-center">
          <div className="small-line-white"></div>
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
          <div className="small-line-white"></div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>

          <div className="col-md-6">
            <p>
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
