import React, { useState } from "react";
import "./Portfolio.css";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import image1 from "./images/poert1.png";
import image2 from "./images/port2.png";
import image3 from "./images/port3.png";
export default function Portfolio() {
  let [images, setImages] = useState([
    { key: 1, src: image1 },
    { key: 2, src: image2 },
    { key: 3, src: image3 },
    { key: 4, src: image1 },
    { key: 5, src: image2 },
    { key: 6, src: image3 },
  ]);

  let [ImageIndex, setImageIndex] = useState(null);
  let [imageContainer, setimageContainer] = useState("d-none");

  function setSelectedImage(index) {
    setImageIndex(index);
    setimageContainer("d-flex");
  }
  function hideLayer(e) {
    console.log(e.target.id);
    if (e.target.id === "image-layer") {
      setimageContainer("d-none");
      setImageIndex(null);
    }
  }

  return (
    <>
      <div className="py-5">
        <div className="container py-5">
          <h2 className="portfolio-header text-center fs-1 mt-5">PORTFOLIO COMPONENT</h2>
          <div className="d-flex gap-3 align-items-center justify-content-center py-3 ">
            <div className="small-line-black"></div>
            <span>
              <i className="fa-solid fa-star dark-star"></i>
            </span>
            <div className="small-line-black"></div>
          </div>
          <div className="row g-5">
            {images.map((image, index) => {
              return (
                <PortfolioCard
                  key={image.key}
                  image={image}
                  index={index}
                  setSelectedImage={setSelectedImage}
                />
              );
            })}
          </div>
        </div>
      </div>

      {ImageIndex === null ? (
        ""
      ) : (
        <div
          onClick={hideLayer}
          className={` ${imageContainer} justify-content-center align-items-center`}
          id="image-layer"
        >
          <div className="image-container w-50">
            <img src={images[ImageIndex].src} alt="" className="w-100" />
          </div>
        </div>
      )}
    </>
  );
}
