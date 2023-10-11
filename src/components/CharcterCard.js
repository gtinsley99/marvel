// all required imports
import { useState } from "react"; // import useState
import Placeholder from "../images/marvel-placeholder.jpg";
import "./CharacterCard.css"; // import the css
// import icons
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import StarRateIcon from "@mui/icons-material/StarRate";

const CharcterCard = (props) => {
  return (
    <div className="character-card" onClick={props.onClick}>
      {/* Character image */}
      <img src={Placeholder} alt="character" />
      {/* Character Name */}
      <h2>{props.name}</h2>
    </div>
  );
};

export default CharcterCard;
