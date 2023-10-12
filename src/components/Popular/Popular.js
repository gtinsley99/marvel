import { useState } from "react";
import "./Popular.css";
import ModalTab from "../Modal/Modal";

const Popular = (props) => {
  return (
    <div className="popular">
      <h2> Popular Characters</h2>
      <div className="popular-holder">
        {props.pop
          ? props.pop.map((char, index) => {
              return <ModalTab name={char.name} imgSrc={char.image} key={index} cookies={props.cookies} />;
            })
          : "Fetching popular characters"}
      </div>
    </div>
  );
};

export default Popular;
