import { Link } from "react-router-dom";
import ExploreIcon from "@mui/icons-material/Explore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <div className="nav-wrapper">
      <nav>
        <Link to={props.loggedIn ? "/profile" : "/login"}>
          <AccountCircleIcon className="navbar-icon" />
        </Link>
        <Link to="/characters">
          <ExploreIcon className="navbar-icon" />
        </Link>
        <Link to="/">
          <HomeIcon className="navbar-icon" />
        </Link>
        <Link to="/login">
          <button className="button">
            {props.loggedIn ? "Log Out" : "Log In"}
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
