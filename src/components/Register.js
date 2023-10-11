import React, { useState } from "react";

function RegistrationForm(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/register`,
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

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(data.successMessage);
        setError(null);
        props.setCookie("jwt_token", data.user.token, {
          maxAge: 604800,
          path: "/",
        });
        console.log(props.cookie);
        props.setLoggedIn(true);
      } else {
        const errorData = await response.json();
        setSuccessMessage(null);
        setError(errorData.errorMessage);
        props.removeCookie("jwt-token");
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage(null);
      setError("An error occurred. Please try again.");
    }
    setFormData({username: "", email: "", password: ""});
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h1>Register an account</h1>
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
      {successMessage && <p className="success-message">{successMessage}</p>}
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

export default RegistrationForm;
