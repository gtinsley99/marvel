import React from "react";
import { Link } from "react-router-dom";
import ExploreIcon from "@mui/icons-material/Explore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <Link to="/profile">
        <AccountCircleIcon className="navbar-icon" />
      </Link>
      <Link to="/characters">
        <ExploreIcon className="navbar-icon" />
      </Link>
      <Link to="/">
        <HomeIcon className="navbar-icon" />
      </Link>
      <Link to="/login">
        <button className="button">Log In</button>
      </Link>
    </nav>
  );
};

export default NavBar;
