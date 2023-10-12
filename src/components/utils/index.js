

export const AuthCheck = async (jwt_token, setUser, setLoggedIn) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API}/loginwithtoken`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt_token}`,
      },
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    setUser(data.user.username);
    setLoggedIn(true);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const UpdateUsername = async (
  jwt_token,
  newUsername,
  setCookie,
  setUser
) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API}/updateusername`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt_token}`,
      },
      body: JSON.stringify({
        newusername: newUsername,
      }),
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    document.cookie =
      "username=; Expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setCookie("username", data.username, {
      maxAge: 604800,
      path: "/",
    });
    setUser(data.username);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const UpdatePassword = async (username, password, newPassword) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API}/updatepassword`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        newpassword: newPassword,
      }),
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const UpdateEmail = async (jwt_token, newEmail) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API}/updateemail`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt_token}`,
      },
      body: JSON.stringify({
        newemail: newEmail,
      }),
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const DeleteAccount = async (
  jwt_token,
  username,
  password,
  setUser,
  setLoggedIn,
  navigate
) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API}/deleteuser`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt_token}`,
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (!res.ok) {
      throw new Error(data.message);
    }
    document.cookie =
      "username=; Expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "jwt_token=; Expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setUser("");
    setLoggedIn(false);
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (
  username,
  password,
  setErrors,
  setCookie,
  setLoggedIn,
  setUser,
  navigate
) => {
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
    if (data.message === "Username or password incorrect") {
      setErrors(data.message);
      console.log(data.message);
      return;
    }
    if (data.message === "User logged in") {
      setCookie("jwt_token", data.user.token, {
        maxAge: 604800,
        path: "/",
      });
      setCookie("username", data.user.username, {
        maxAge: 604800,
        path: "/",
      });
      setLoggedIn(true);
      setUser(data.user.username);
      navigate("/");
    }
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (username, email, password, setErrors, setCookie, setLoggedIn, setUser, navigate) => {
try {
  const response = await fetch(
    `${process.env.REACT_APP_API}/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    }
  );
    const data = await response.json();
    console.log(data)
    if (data.message === "Username taken" || data.message === "Invalid email address" || data.message === "Email address taken"){
      setErrors(data.message);
      return;
    }
    setCookie("jwt_token", data.user.token, {
      maxAge: 604800,
      path: "/",
    });
    setCookie("username", data.user.username, {
      maxAge: 604800,
      path: "/",
    });
    setLoggedIn(true);
    setUser(data.user.username);
    navigate("/");
} catch (error) {
  console.error("Error:", error);
}
};