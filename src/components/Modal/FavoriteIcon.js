import { useState } from "react";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import StarRateIcon from "@mui/icons-material/StarRate";
import { AddFavChar, DeleteFavChar } from "../utils/marvelapi";

const FavoriteIcon = (props) => {
  // function to change the state "iconClicked" when  the icon is clicked
  const handleIconClick = () => {
    if (props.loggedIn){
    props.setIconClicked(!props.iconClicked);
    if (props.iconClicked) {
      AddFavChar(props.cookies.jwt_token, props.name);
    } else {
      DeleteFavChar(props.cookies.jwt_token, props.name);
      if (props.isProfile) {
        props.closeModal();
      }
    }}
  };

  const handleMouseEnter = () => {
    props.setShowToolTip(true);
  };

  const handleMouseLeave = () => {
    props.setShowToolTip(false);
  };

  // render either filled in icon or not filled in depending on "iconClicked" state
  const icon = props.iconClicked ? (
    <div className="icon-holder" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <StarBorderPurple500Icon className="favorite-icon" onClick={handleIconClick} />
      {props.showToolTip && <div className="tool-tip">{props.loggedIn ? "Add to Favourites" : "Login to favourite a character"}</div>}
    </div>
  ) : (
    <div className="icon-holder" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <StarRateIcon className="favorite-icon clicked" onClick={handleIconClick} />
      {props.showToolTip && <div className="tool-tip">{props.loggedIn ? "Remove from Favourites" : "Login to favourite a character"}</div>}
    </div>
  );

  return <div>{icon}</div>;
};

export default FavoriteIcon;
