import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Register } from "../utils";

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
    Register(formData.username, formData.email, formData.password, setErrors, props.setCookie, props.setLoggedIn, props.setUser, navigate);
    setFormData({username: "", email: "", password: ""});
  };

  return (
    <form onSubmit={handleSubmit} className="login-form" style={{backgroundColor: "red", color: "black", marginTop: "25px"}}>
      <h1>Register an account</h1>
      {errors && <h3 className="regErrorMsg">{errors}</h3>}
      <div>
        <label htmlFor="username"></label>
        <input
          placeholder="Username"
          className="regBarsLog"
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
          className="regBarsLog"
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
          className="regBarsLog"
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
