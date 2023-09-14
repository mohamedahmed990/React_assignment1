import React from "react";
import { Link } from "react-router-dom";
import "./Articles.css";

export default function Articles() {
  return (
    <>
      <ul className="articles list-unstyled d-flex align-items-stretch  flex-column p-3 fs-4 m-0 h-100">
        <li className="p-2 rounded-2 d-flex">
          <Link className="text-decoration-none text-white w-100" to={"article1"}>article 1</Link>
        </li>
        <li className="p-2 rounded-2 d-flex">
          <Link className="text-decoration-none text-white w-100" to={"article2"}>article 2</Link>
        </li>
        <li className="p-2 rounded-2 d-flex">
          <Link className="text-decoration-none text-white w-100" to={"article3"}>article 3</Link>
        </li>
        
      </ul>
    </>
  );
}
