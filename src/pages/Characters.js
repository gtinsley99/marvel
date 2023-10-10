import { useState } from "react";
import CharcterCard from "../components/CharcterCard";

const Characters = () => {
  const [characterList] = useState([
    "iron-man",
    "captain america",
    "spider-man",
    "hulk",
    "hawkeye",
    "black-widow",
    "doctor strange",
    "deadpool",
    "scarlet witch",
  ]);
  return (
    <>
      <div></div>
      <div className="card-container">
        {characterList.map((char, index) => {
          return <CharcterCard name={char} />;
        })}
      </div>
    </>
  );
};

export default Characters;
