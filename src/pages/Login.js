import React from "react";
import { useState } from "react";
import { Route } from "react-router-dom";
import LoginComponent from "../components/Login";

const Login = () => {

  const [token, setToken] = useState('');

  const handleLogin = (newToken) => {
    setToken(newToken)
  };

  return(
    <div>
      {token ? (
        <div>
          
        </div>
      ) : (
        ""
      )}
      <LoginComponent/>
    </div>
  )
};

export default Login;
