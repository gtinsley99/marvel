import { useState } from "react";
import "./Popular.css";
import ModalTab from "./Modal";

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
          return <ModalTab name={char} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
