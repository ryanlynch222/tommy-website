import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <p>Hutlet</p>
      <div className="right">
        <button>HOME</button>
        <button>DISCOGRAPHY</button>
        <button>ABOUT</button>
        <button id="whiteButton">LISTEN NOW</button>
      </div>
    </div>
  );
}

export default Header;
