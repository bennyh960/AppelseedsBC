import React from "react";
import "./spinner.css";

export default function Spinner() {
  return (
    <div className="spinner-container">
      <div className="lds-dual-ring"></div>
    </div>
  );
}