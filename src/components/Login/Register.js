import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegistrationForm(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API}/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            email: formData.email,
            password: formData.password,
          }),
        }
      );
        const data = await response.json();
        console.log(data)
        if (data.message === "Username taken" || data.message === "Invalid email address" || data.message === "Email address taken"){
          setErrors(data.message);
          return;
        }
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
    } catch (error) {
      console.error("Error:", error);
    }
    setFormData({username: "", email: "", password: ""});
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h1>Register an account</h1>
      {errors && <h3 className="errorMsg">{errors}</h3>}
      <div>
        <label htmlFor="username"></label>
        <input
          placeholder="Username"
          className="barsLog"
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          placeholder="Email"
          className="barsLog"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          placeholder="Password"
          className="barsLog"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button className="loginBtn" type="submit">
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
