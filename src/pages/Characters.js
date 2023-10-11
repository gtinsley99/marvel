import { useState } from "react"; // import useState
// import components to use
import Popular from "../components/Popular";
import ModalTab from "../components/Modal";
import { CharDesc } from "../components/marvelapi";

const Characters = (props) => {
  return (
    <>
      <div>
        <Popular />
      </div>
      {/* Map the characters from the character list into cards */}
      <div className="card-container">
        {props.allChar.map((char, index) => {
          return <ModalTab name={char.name} imgSrc={char.image} key={index} />;
        })}
      </div>
    </>
  );
};

export default Characters;
