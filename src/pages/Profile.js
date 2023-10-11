import React from "react";
import RegistrationForm from "../components/Register";

const Profile = (props) => {
  return(
    <div>
      <RegistrationForm cookie={props.cookie} setCookie={props.setCookie} removeCookie={props.removeCookie}/>  
    </div>
  )
};

export default Profile;
