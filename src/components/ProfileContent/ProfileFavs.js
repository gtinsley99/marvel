import React from "react";
import ModalTab from "../Modal/Modal";
import "./ProfileFavs.css";

const ProfileFavs = (props) => {
  return (
    <div>
      <h2>Your Favorites</h2>
      <div className="favorites">
        {props.favs
          ? props.favs.map((char, index) => {
              return <ModalTab name={char.name} imgSrc={char.image} cookies={props.cookies} key={index} render={"profile"} loggedIn={props.loggedIn} />;
            })
          : "You have no favorites"}
      </div>
    </div>
  );
};

export default ProfileFavs;
