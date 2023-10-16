export const AuthCheck = async (jwt_token, setUser, setUserPic, setLoggedIn) => {
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
    if (data.user.profilePic !== null){
    setUserPic(data.user.profilePic);
    };
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
  setUser,
  setRes
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
    const data = await res.json();
    setRes(data.message);
    if (data.message === "Username updated") {
      document.cookie =
        "username=; Expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      setCookie("username", data.username, {
        maxAge: 604800,
        path: "/",
      });
      setUser(data.username);
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const UpdatePassword = async (username, password, newPassword, setRes) => {
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
    const data = await res.json();
    setRes(data.message);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const UpdateEmail = async (jwt_token, newEmail, setRes) => {
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
    const data = await res.json();
    setRes(data.message);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const DeleteAccount = async (
  jwt_token,
  username,
  password,
  setRes,
  setLoggedIn,
  setButton,
  setMsg,
  setModal,
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
    console.log(data.message);
    setRes(data.message);
    if (data.message === "User deleted") {
      document.cookie =
      "username=; Expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "jwt_token=; Expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setLoggedIn(false);
    setButton("Close");
    setMsg(data.message);
    } else {
      setModal(false);
      setMsg("Are you sure you want to delete your account?");
    }
   
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
  setUserPic,
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
      if (data.user.profilePic !== null){
        setUserPic(data.user.profilePic);
        };
      navigate("/");
    }
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (
  username,
  email,
  password,
  setErrors,
  setCookie,
  setLoggedIn,
  setUser,
  navigate
) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (
      data.message === "Username taken" ||
      data.message === "Invalid email address" ||
      data.message === "Email address taken"
    ) {
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

export const UpdateProfPic = async (jwt_token, picUrl, setUserPic) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API}/updatepic`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt_token}`
      },
      body: JSON.stringify({
        newprofilepic: picUrl,
      }),
    });
    const data = await response.json();
    console.log(data);
    setUserPic(data.profilePic);
  } catch (error) {
    console.error("Error:", error);
  };
};