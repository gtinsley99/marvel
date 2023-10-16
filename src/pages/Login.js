import React from "react";
import LoginComponent from "../components/Login/Login";
import RegistrationForm from "../components/Login/Register";
import CoverImage from "../images/avengers-cover.png";

const Login = (props) => {

  return (
    <div className="whole-login">
      <div className="img-holder">
        <img src={CoverImage} alt="placeholder" />
      </div>
      <div className="login-register">
        <LoginComponent cookie={props.cookie} setCookie={props.setCookie} removeCookie={props.removeCookie} user={props.user} setUser={props.setUser} setLoggedIn={props.setLoggedIn} />
        <RegistrationForm cookie={props.cookie} setCookie={props.setCookie} removeCookie={props.removeCookie} setUser={props.setUser} setLoggedIn={props.setLoggedIn} />
      </div>
    </div>
  );
};

export default Login;
