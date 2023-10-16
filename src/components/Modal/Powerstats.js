import { React, useState, useEffect } from "react";
import "./Modal.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Powerstats = ({ powerStats }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 100) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);

  return (
    <div className="powerstats">
      <div>
        <h4>Intelligence</h4>
        <div style={{ width: 50 }}>
          <CircularProgressbar value={powerStats && powerStats.intelligence} text={powerStats && powerStats.intelligence} />
        </div>
      </div>
      <div>
        <h4>Strength</h4>
        <div style={{ width: 50 }}>
          <CircularProgressbar value={powerStats && powerStats.strength} text={powerStats && powerStats.strength} />
        </div>
      </div>
      <div>
        <h4>Speed</h4>
        <div style={{ width: 50 }}>
          <CircularProgressbar value={powerStats && powerStats.speed} text={powerStats && powerStats.speed} />
        </div>
      </div>
      <div>
        <h4>Durability</h4>
        <div style={{ width: 50 }}>
          <CircularProgressbar value={powerStats && powerStats.durability} text={powerStats && powerStats.durability} />
        </div>
      </div>
      <div>
        <h4>Power</h4>
        <div style={{ width: 50 }}>
          <CircularProgressbar value={powerStats && powerStats.power} text={powerStats && powerStats.power} />
        </div>
      </div>
      <div>
        <h4>Combat</h4>
        <div style={{ width: 50 }}>
          <CircularProgressbar value={powerStats && powerStats.combat} text={powerStats && powerStats.combat} />
        </div>
      </div>
    </div>
  );
};

export default Powerstats;
