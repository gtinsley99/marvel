import { useState } from "react";
import Placeholder from "../images/marvel-placeholder.jpg";
import "./CharacterCard.css";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import StarRateIcon from "@mui/icons-material/StarRate";

const CharcterCard = (props) => {
  const [iconClicked, setIconClicked] = useState(true);
  const handleIconClick = () => {
    setIconClicked(!iconClicked);
    if (iconClicked) {
      window.alert(`${props.name} addded to favorites`);
    } else {
      window.alert(`${props.name} removed to favorites`);
    }
  };
  const icon = iconClicked ? (
    <StarBorderPurple500Icon
      className="favorite-icon"
      onClick={handleIconClick}
    />
  ) : (
    <StarRateIcon className="favorite-icon clicked" onClick={handleIconClick} />
  );
  return (
    <div className="character-card">
      <img src={Placeholder} alt="character" />
      <h2>{props.name}</h2>
      {icon}
    </div>
  );
};

export default CharcterCard;
