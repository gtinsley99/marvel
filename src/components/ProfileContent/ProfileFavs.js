import React from "react";
import ModalTab from "../Modal/Modal";
import "./ProfileFavs.css";
import EmptyFavs from "./EmptyFavs";

const ProfileFavs = (props) => {
  return (
    <div>
      {props.favs && props.favs.length !== 0 && <h2>Your Favorites</h2>}
      <div className="favorites">
        {props.favs && props.favs.length != 0 ? (
          props.favs.map((char, index) => {
            return (
              <ModalTab
                name={char.name}
                imgSrc={char.image}
                cookies={props.cookies}
                key={index}
                render={"profile"}
                loggedIn={props.loggedIn}
                setHideNav={props.setHideNav}
                setShowNav={props.setShowNav}
              />
            );
          })
        ) : (
          <EmptyFavs />
        )}
      </div>
    </div>
  );
};

export default ProfileFavs;
