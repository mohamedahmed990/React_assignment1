import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="p-5 min-vh-100 d-flex align-items-center justify-content-center">
      <div className=" py-5">
        <h2 className="contact-header fs-1 fw-bold text-center mt-5">CONATCT SECTION</h2>
        <div className="d-flex gap-3 align-items-center justify-content-center py-3">
          <div className="small-line-black"></div>
          <span className="">
            <i className="fa-solid fa-star dark-star"></i>
          </span>
          <div className="small-line-black"></div>
        </div>
        <div className="row g-4">
          <div className="col-12 border-bottom">
            <input type="text" className="py-4 px-2 border-0 w-100" placeholder="userName"/>
          </div>
          <div className="col-12 border-bottom">
            <input type="text" className="py-4 px-2 border-0 w-100" placeholder="userAge"/>
          </div>
          <div className="col-12 border-bottom">
            <input type="text" className="py-4 px-2 border-0 w-100" placeholder="userEmail"/>
          </div>
          <div className="col-12 border-bottom">
            <input type="text" className="py-4 px-2 border-0 w-100" placeholder="userPassword"/>
          </div>
          <div className="col-12 ">
            <button className="btn btn-success p-2">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}
