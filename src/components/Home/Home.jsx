import React from "react";
import { ReactComponent as Image } from "./images/avataaars.svg";

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="d-flex justify-content-center align-items-center flex-column gap-2 text-white py-5"
      >
        <div className="w-15 mt-5">
          <Image className="w-100" />
        </div>
        <h2 className="fs-1 fw-bold">START FRAMEWORK</h2>
        <div className="d-flex gap-3 align-items-center">
            <div className="small-line-white"></div>
            <span>
                <i className="fa-solid fa-star"></i>
            </span>
            <div className="small-line-white"></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  );
}
