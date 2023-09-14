import React from "react";

export default function PortfolioCard(props) {
  let { src, key } = props.image;
  let { index, setSelectedImage } = props;
  return (
    <>
      <div className="col-md-4">
        <div
          className="content w-100 position-relative"
          onClick={() => setSelectedImage(index)}
        >
          <img src={src} alt="" className="w-100 rounded-3" />
          <div className="layer d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-plus fa-6x text-white"></i>
          </div>
        </div>
      </div>
    </>
  );
}
