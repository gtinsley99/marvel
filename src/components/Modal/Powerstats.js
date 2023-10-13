import React from "react";
import "./Modal.css";

const Powerstats = ({ powerStats }) => {
  const intelligenceStyle = {
    "::before": {
      content: `${powerStats && powerStats.intelligence}%`,
    },
    background: `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#ff2400 ${powerStats && powerStats.intelligence}%, pink 0)`,
  };
  return (
    <div>
      <div className="powerstats-wrapper">
        <h3>Powerstats</h3>
        <div className="powerstats">
          <div>
            <h4>Intelligence</h4>
            <div class="progress-bar" style={intelligenceStyle}>
              <progress min="0" max="100" style={{ visibility: "hidden", height: "0", width: "0" }}></progress>
            </div>
            <p>{`${powerStats && powerStats.intelligence}%`}</p>
          </div>
          <div>
            <h4>Strength</h4>
            <div class="progress-bar" style={{ background: `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#ff2400 ${powerStats && powerStats.strength}%, pink 0)` }}>
              <progress min="0" max="100" style={{ visibility: "hidden", height: "0", width: "0" }}></progress>
            </div>
            <p>{`${powerStats && powerStats.strength}%`}</p>
          </div>

          <div>
            <h4>Speed</h4>
            <div class="progress-bar" style={{ background: `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#ff2400 ${powerStats && powerStats.speed}%, pink 0)` }}>
              <progress min="0" max="100" style={{ visibility: "hidden", height: "0", width: "0" }}></progress>
            </div>
            <p>{`${powerStats && powerStats.speed}%`}</p>
          </div>

          <div>
            <h4>Durability</h4>
            <div class="progress-bar" style={{ background: `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#ff2400 ${powerStats && powerStats.durability}%, pink 0)` }}>
              <progress min="0" max="100" style={{ visibility: "hidden", height: "0", width: "0" }}></progress>
            </div>
            <p>{`${powerStats && powerStats.durability}%`}</p>
          </div>
          <div>
            <h4>Power</h4>
            <div class="progress-bar" style={{ background: `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#ff2400 ${powerStats && powerStats.power}%, pink 0),` }}>
              <progress min="0" max="100" style={{ visibility: "hidden", height: "0", width: "0" }}></progress>
            </div>
            <p>{`${powerStats && powerStats.power}%`}</p>
          </div>
          <div>
            <h4>Combat</h4>
            <div class="progress-bar" style={{ background: `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#ff2400 ${powerStats && powerStats.combat}%, pink 0)` }}>
              <progress min="0" max="100" style={{ visibility: "hidden", height: "0", width: "0" }}></progress>
            </div>
            <p>{`${powerStats && powerStats.combat}%`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Powerstats;
