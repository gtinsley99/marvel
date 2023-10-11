import React from "react";
import { useState } from "react";
import { Route } from "react-router-dom";
import LoginComponent from "../components/Login";

const Login = (props) => {

  const [token, setToken] = useState('');

  const handleLogin = (newToken) => {
    setToken(newToken)
  };

  return(
    <div>
      <LoginComponent cookie={props.cookie} setCookie={props.setCookie} removeCookie={props.removeCookie} user={props.user} setUser={props.setUser} setLoggedIn={props.setLoggedIn}/>
    </div>
  )
};

export default Login;
