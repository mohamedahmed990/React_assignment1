import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer className="py-5 ">
        <div className="container py-5">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="w-md-50 me-md-auto">
                <h2 className="fs-2">LOCATION</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h2 className="fs-2">AROUND THE WEB</h2>
                <div className="d-flex gap-3 justify-content-center align-items-center">
                  <i class="fa-brands fa-facebook fs-1x rounded-circle p-2 border border-1 border-white"></i>
                  <i class="fa-brands fa-twitter fs-1x rounded-circle p-2 border border-1 border-white"></i>
                  <i class="fa-brands fa-linkedin-in fs-1x rounded-circle p-2 border border-1 border-white"></i>
                  <i className="fa-solid fa-globe fs-1x rounded-circle p-2 border border-1 border-white"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h2 className="fs-2">ABOUT FREELANCER</h2>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright text-center p-3 text-white">
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
