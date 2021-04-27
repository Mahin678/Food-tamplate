import React from "react";
// import navbar
import Navbar from "./Navbar/Navbar";
// import css
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <div className="header--content ">
        <h4>Natural Health</h4>
        <h2>Organic Food</h2>
        <p>
          The UK’s largest fully certified organic supermarket, Organic food
          delivery across the UK and Europe.
        </p>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default Header;
