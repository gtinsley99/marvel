import "./Powerstats.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Powerstats = ({ powerStats }) => {
  const STROKEWIDTH = 18;
  return (
    <div className="powerstats">
      <div className="one-stat">
        <h4>Intelligence</h4>
        <div style={{ width: 70 }}>
          <CircularProgressbar
            className="intelligence"
            styles={buildStyles({
              strokeLinecap: "butt",
              textSize: "30px",
              pathColor: `#FF2400`,
              textColor: "#ff240075",
              trailColor: "#ff220050",
              backgroundColor: "#3e98c7",
            })}
            value={powerStats && powerStats.intelligence}
            text={powerStats && powerStats.intelligence}
            strokeWidth={STROKEWIDTH}
          />
        </div>
      </div>
      <div className="one-stat">
        <h4>Strength</h4>
        <div style={{ width: 70 }}>
          <CircularProgressbar
            styles={buildStyles({
              strokeLinecap: "butt",
              textSize: "30px",
              pathColor: `#0074D9`,
              textColor: "#0074d975",
              trailColor: "#0074d950",
              backgroundColor: "#3e98c7",
            })}
            value={powerStats && powerStats.strength}
            text={powerStats && powerStats.strength}
            strokeWidth={STROKEWIDTH}
          />
        </div>
      </div>
      <div className="one-stat">
        <h4>Speed</h4>
        <div style={{ width: 70 }}>
          <CircularProgressbar
            styles={buildStyles({
              strokeLinecap: "butt",
              textSize: "30px",
              pathColor: `#00A000`,
              textColor: "#00a00075",
              trailColor: "#00a00050",
              backgroundColor: "#3e98c7",
            })}
            value={powerStats && powerStats.speed}
            text={powerStats && powerStats.speed}
            strokeWidth={STROKEWIDTH}
          />
        </div>
      </div>
      <div className="one-stat">
        <h4>Durability</h4>
        <div style={{ width: 70 }}>
          <CircularProgressbar
            styles={buildStyles({
              strokeLinecap: "butt",
              textSize: "30px",
              pathColor: `#6B52A5`,
              textColor: "#6B52A575",
              trailColor: "#6B52A550",
              backgroundColor: "#3e98c7",
            })}
            value={powerStats && powerStats.durability}
            text={powerStats && powerStats.durability}
            strokeWidth={STROKEWIDTH}
          />
        </div>
      </div>
      <div className="one-stat">
        <h4>Power</h4>
        <div style={{ width: 70 }}>
          <CircularProgressbar
            styles={buildStyles({
              strokeLinecap: "butt",
              textSize: "30px",
              pathColor: `#8C121E`,
              textColor: "#8C121E75",
              trailColor: "#8C121E50",
              backgroundColor: "#3e98c7",
            })}
            value={powerStats && powerStats.power}
            text={powerStats && powerStats.power}
            strokeWidth={STROKEWIDTH}
          />
        </div>
      </div>
      <div className="one-stat">
        <h4>Combat</h4>
        <div style={{ width: 70 }}>
          <CircularProgressbar
            styles={buildStyles({
              strokeLinecap: "butt",
              textSize: "30px",
              pathColor: `#00A1E4`,
              textColor: "#00A1E475",
              trailColor: "#00A1E450",
              backgroundColor: "#3e98c7",
            })}
            value={powerStats && powerStats.combat}
            text={powerStats && powerStats.combat}
            strokeWidth={STROKEWIDTH}
          />
        </div>
      </div>
    </div>
  );
};

export default Powerstats;
