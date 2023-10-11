import { useState } from "react"; // import useState
// import components to use
import Popular from "../components/Popular";
import ModalTab from "../components/Modal";

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
          return <ModalTab name={char} key={index} />;
        })}
      </div>
    </>
  );
};

export default Characters;
