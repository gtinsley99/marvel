// import components to use
import Popular from "../components/Popular";
import ModalTab from "../components/Modal";

const Characters = (props) => {
  return (
    <>
      <div>
        <Popular />
      </div>
      {/* Map the characters from the character list into cards */}
      <div className="card-container">
        {props.allChar
          ? props.allChar.map((char, index) => {
              return (
                <ModalTab name={char.name} imgSrc={char.image} key={index} cookies={props.cookies} />
              );
            })
          : "Fetching Character Data"}
      </div>
    </>
  );
};

export default Characters;
