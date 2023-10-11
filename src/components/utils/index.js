export const AuthCheck = async (jwt_token, setUser) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}t/users/loginwithtoken`, {
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
    } catch (error) {
      console.log(error);
    }
};