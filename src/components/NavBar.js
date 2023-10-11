import { Link } from "react-router-dom";
import ExploreIcon from "@mui/icons-material/Explore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import "./NavBar.css";

const NavBar = (props) => {
  const handleClick = () => {
    if (props.loggedIn){
      props.setLoggedIn(false);
      document.cookie =
      "jwt_token=; Expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie =
      "username=; Expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    } 
  }

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
        <Link to={props.loggedIn ? "/" : "/login"}>
          <button className="button" onClick={handleClick}>
            {props.loggedIn ? "Log Out" : "Log In"}
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
