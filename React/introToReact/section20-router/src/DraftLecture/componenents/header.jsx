import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div className="container-nav">
      {console.log(props)}
      <div className="logo">Logo</div>
      <div className="nav-links">
        <Link to={props.homeLink}>Homepage</Link>
        <Link to={props.productLink}>Products</Link>
      </div>
    </div>
  );
}
