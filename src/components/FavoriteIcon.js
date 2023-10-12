import { useState } from "react";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import StarRateIcon from "@mui/icons-material/StarRate";
import { AddFavChar, DeleteFavChar } from "./marvelapi";

const FavoriteIcon = (props) => {
  const [iconClicked, setIconClicked] = useState(true); // set up iconClicked State
  const [showToolTip, setShowToolTip] = useState(false); // set up showToolTip State

  // function to change the state "iconClicked" when  the icon is clicked
  const handleIconClick = () => {
    setIconClicked(!iconClicked);
    if (iconClicked){
      AddFavChar(props.cookies.jwt_token, "thor");
    } else {
      DeleteFavChar(props.cookies.jwt_token, "thor");
    }
  };

  const handleMouseEnter = () => {
    setShowToolTip(true);
  };

  const handleMouseLeave = () => {
    setShowToolTip(false);
  };

  // render either filled in icon or not filled in depending on "iconClicked" state
  const icon = iconClicked ? (
    <div
      className="icon-holder"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <StarBorderPurple500Icon
        className="favorite-icon"
        onClick={handleIconClick}
      />
      {showToolTip && <div className="tool-tip">Add to Favorites</div>}
    </div>
  ) : (
    <div
      className="icon-holder"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <StarRateIcon
        className="favorite-icon clicked"
        onClick={handleIconClick}
      />
      {showToolTip && <div className="tool-tip">Remove from Favorites</div>}
    </div>
  );

  return <div>{icon}</div>;
};

export default FavoriteIcon;
