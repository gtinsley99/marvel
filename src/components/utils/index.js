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