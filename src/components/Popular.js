import { useState } from "react";
import CharcterCard from "./CharcterCard";
import "./Popular.css";

const Popular = () => {
  const [popularCharacters] = useState([
    "Captain America",
    "Black Widow",
    "Scarlet Witch",
  ]);
  return (
    <div className="popular">
      <h2> Popular Characters</h2>
      <div className="popular-holder">
        {popularCharacters.map((char, index) => {
          return <CharcterCard name="char" />;
        })}
      </div>
    </div>
  );
};

export default Popular;
