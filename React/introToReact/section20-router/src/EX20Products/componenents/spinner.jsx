import React from "react";
import "../componenents/spinner.css";

export default function Spinner() {
  return (
    <div className="spinner-container">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
