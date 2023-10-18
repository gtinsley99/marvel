import React from "react";
import Description from "../components/HomeComponents/Description";
import background from "../images/background-image2.png";

const About = () => {
  return (
    <div>
      <Description className="descHome" />
      <div className="image-container">
        <img src={background} alt="marvel image"></img>
      </div>
    </div>
  );
};

export default About;
