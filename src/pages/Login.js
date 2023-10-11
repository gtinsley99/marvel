import React from "react";
import { useState } from "react";
import LoginComponent from "../components/Login";
import RegistrationForm from "../components/Register";
import PlaceHolder from "../images/marvel-placeholder.jpg";
import CoverImage from "../images/avengers-cover.png";

const Login = (props) => {
  const [token, setToken] = useState("");

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  return (
    <div className="whole-login">
      <div className="img-holder">
        <img src={CoverImage} alt="placeholder" />
      </div>
      <div className="login-register">
        <LoginComponent
          cookie={props.cookie}
          setCookie={props.setCookie}
          removeCookie={props.removeCookie}
          user={props.user}
          setUser={props.setUser}
          setLoggedIn={props.setLoggedIn}
        />
        <RegistrationForm
          cookie={props.cookie}
          setCookie={props.setCookie}
          removeCookie={props.removeCookie}
        />
      </div>
    </div>
  );
};

export default Login;
