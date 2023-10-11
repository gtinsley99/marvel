import React from "react";
import RegistrationForm from "../components/Register";
import ProfileContent from "../components/ProfileContent";

const Profile = (props) => {
  return(
    <div>
      <RegistrationForm cookie={props.cookie} setCookie={props.setCookie} removeCookie={props.removeCookie} /> 
      <ProfileContent />
    </div>
  )
};

export default Profile;
