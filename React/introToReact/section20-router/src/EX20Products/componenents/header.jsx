import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container-nav">
      <div className="logo">Logo</div>
      <div className="nav-links">
        <Link to={"/"}>Homepage</Link>
        <Link to={"/products"}>Products</Link>
      </div>
    </div>
  );
}
