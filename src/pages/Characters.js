import { useState } from "react"; // import useState
// import components to use
import CharcterCard from "../components/CharcterCard";
import Popular from "../components/Popular";

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
      <div>
        <Popular />
      </div>
      {/* Map the characters from the character list into cards */}
      <div className="card-container">
        {characterList.map((char, index) => {
          return <CharcterCard name={char} key={index} />;
        })}
      </div>
    </>
  );
};

export default Characters;
