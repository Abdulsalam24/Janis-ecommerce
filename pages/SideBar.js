import { useContext, useEffect, useState } from "react";
import productContext from "../context/productContext";
import Link from "next/link";
import Router from "next/router";

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
          <ul style={{ padding: "0" }}>
            <li
              onClick={() => {
                sorProduct("allProduct");
                Router.push("/all-product");
                handleClose();
              }}
            >
              <span>VIEW ALL PRODUCTS</span>
            </li>
            <li
              onClick={() => {
                sorProduct("topProduct");
                Router.push("/all-product");
                handleClose();
              }}
            >
              <span>TOP PRODUCTS</span>
            </li>
            <li
              onClick={() => {
                sorProduct("sellingStack");
                Router.push("/all-product");
                handleClose();
              }}
            >
              <span> BEST SELLING STACK</span>
            </li>
            <li>
              <Link href="/account">
                <span
                  onClick={() => {
                    handleClose();
                  }}
                  style={{ color: "#161d48" }}
                >
                  MY ACCOUNT
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="exit" onClick={handleClose}></div>
    </div>
  );
}
