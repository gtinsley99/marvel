import { useState } from "react";
import React from "react";
import "./Login.css";
import { Login } from "../utils";
import { useNavigate } from "react-router-dom";

const LoginComponent = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    Login(username, password, setErrors, props.setCookie, props.setLoggedIn, props.setUser, navigate)
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Login to your account</h1>
        {errors && <h3 className="errorMsg">{errors}</h3>}
        <input
          className="barsLog"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          type="text"
        ></input>
        <input
          className="barsLog"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        ></input>
        <button className="loginBtn">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
