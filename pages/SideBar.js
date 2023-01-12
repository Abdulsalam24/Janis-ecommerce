import { useContext, useEffect, useState } from "react";
import productContext from "../context/productContext";

export default function SideBar() {
  const { sorProduct, issOpen, setissOpen } = useContext(productContext);

  const handleClose = () => {
    setissOpen(!issOpen);
    
  };
  return (
    <div className={`${issOpen ? "sideNav" : "noNav"}`}>
      <div className="area">
        <div>
          <p>Menu</p>
          <ul>
            <li
              onClick={() => {
                sorProduct("allProduct");
                handleClose();
              }}
            >
              <span>VIEW ALL PRODUCTS</span>
            </li>
            <li
              onClick={() => {
                sorProduct("topProduct");
                handleClose();
              }}
            >
              <span>TOP PRODUCTS</span>
            </li>
            <li
              onClick={() => {
                sorProduct("sellingStack");
                handleClose();
              }}
            >
              <span> BEST SELLING STACK</span>
            </li>
            <li>
              <span> MY ACCOUNT</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="exit" onClick={handleClose}></div>
    </div>
  );
}
