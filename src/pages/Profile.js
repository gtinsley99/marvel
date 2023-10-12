import React from "react";
import { useState, useEffect } from "react";
import ProfileContent from "../components/ProfileContent/ProfileContent";
import { UserFavChar } from "../components/utils/marvelapi";

const Profile = (props) => {
  const [favs, setFavs] = useState(null);
  useEffect(() => {
    UserFavChar(props.cookies.jwt_token, setFavs);
  }, []);
  return (
    <div>
      <ProfileContent />
    </div>
  );
};

export default Profile;
