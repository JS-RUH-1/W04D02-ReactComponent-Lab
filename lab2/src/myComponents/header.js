import React from "react";
import "./style.css";

function Header({ text = "" }) {
  return (
    <div className="myheader">
      <h1>{text}</h1>
    </div>
  );
}

export default Header;
