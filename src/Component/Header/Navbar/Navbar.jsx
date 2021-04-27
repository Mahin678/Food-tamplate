import { Menu, MenuItem, Link } from "@material-ui/core";
import React from "react";
// import logo
import logo from "../../../Image/logo.PNG";
// react icons
import {
  IoChevronDownOutline,
  IoCartSharp,
  IoSearchOutline,
  IoSendOutline,
  IoMenuOutline,
} from "react-icons/io5";
// import css
import "./Navbar.scss";
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar--container  d-flex justify-content-between w-100 align-items-center ">
        <div className="navbar--container--buttonGroup">
          <div className="navbar--container--buttonGroup--dropDown ">
            <button
              aria-controls="simple-menu "
              aria-haspopup="true"
              onClick={handleClick}
              className="dropDown-button"
            >
              <span className="mr-2 dropDown-button--icon">
                <IoMenuOutline />
              </span>
              Open Menu
              <span className="mx-2">
                <IoChevronDownOutline />
              </span>
            </button>
            <Menu
              className="desktop-view-hide"
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
            <Menu
              className="mobile-view-hide"
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
              <MenuItem onClick={handleClose}>New Arrivals</MenuItem>
              <MenuItem onClick={handleClose}>Today’s Deals</MenuItem>
              <MenuItem onClick={handleClose}>Flash Sales</MenuItem>
            </Menu>
          </div>
          <div className="d-flex align-items-center desktop-view-hide">
            <Link to="/">New Arrivals</Link>
            <Link to="/"> Today’s Deals</Link>
            <Link to="/"> Flash Sales</Link>
          </div>
        </div>
        <div className="navbar--container--image">
          <img src={logo} alt="header-logo" />
        </div>
        <div className="navbar--container--icon">
          <span className="mx-5">
            <IoSearchOutline />
          </span>
          <span className="">
            <IoCartSharp />
            <div className="add-to-cart">40</div>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
