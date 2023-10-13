import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileContent from "../components/ProfileContent/ProfileContent";
import ProfileFavs from "../components/ProfileContent/ProfileFavs";
import { UserFavChar } from "../components/utils/marvelapi";

const Profile = (props) => {
  const [favs, setFavs] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (props.user === "") {
      navigate("/");
      return;
    }
    UserFavChar(props.cookies.jwt_token, setFavs);
  }, []);
  return (
    <div>
      <ProfileContent cookies={props.cookies} setCookie={props.setCookie} user={props.user} setUser={props.setUser} setLoggedIn={props.setLoggedIn} />
      <ProfileFavs favs={favs} cookies={props.cookies} />
    </div>
  );
};

export default Profile;
