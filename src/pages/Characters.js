import { useState } from "react";

// import components to use
import Popular from "../components/Popular/Popular";
import ModalTab from "../components/Modal/Modal";
import { PopChar } from "../components/utils/marvelapi";

const Characters = (props) => {
  const [pop, setPop] = useState(null);
  PopChar(setPop);
  return (
    <>
      <div>
        <Popular pop={pop} cookies={props.cookies} />
      </div>
      {/* Map the characters from the character list into cards */}
      <div className="card-container">
        {props.allChar
          ? props.allChar.map((char, index) => {
              return <ModalTab name={char.name} imgSrc={char.image} key={index} cookies={props.cookies} />;
            })
          : "Fetching Character Data"}
      </div>
    </>
  );
};

export default Characters;
