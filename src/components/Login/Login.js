import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./Login.css";

const LoginComponent = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (data.message === "Username or password incorrect"){
        setErrors(data.message);
        console.log(errors);
        return;
      }
      if (data.message === "User logged in") {
        props.setCookie("jwt_token", data.user.token, {
          maxAge: 604800,
          path: "/",
        });
        props.setCookie("username", data.user.username, {
          maxAge: 604800,
          path: "/",
        });
        console.log(props.cookie);
        props.setLoggedIn(true);
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
     
    }
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <form className="login-form">
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
        <button className="loginBtn" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginComponent;
