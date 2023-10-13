import { useState } from "react";

// import components to use
import Popular from "../components/Popular/Popular";
import ModalTab from "../components/Modal/Modal";
import { PopChar } from "../components/utils/marvelapi";

const Characters = (props) => {
  const [pop, setPop] = useState(null);
  const [characters, setCharacters] = useState(props.allChar && props.allChar);

  const handleChange = async (event) => {
    const searchTerm = event.target.value;

    const filteredCharacters = props.allChar.filter((character) => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setCharacters(filteredCharacters);
  };

  PopChar(setPop);
  return (
    <>
      <div>
        <Popular pop={pop} cookies={props.cookies} />
      </div>
      <div>
        <form>
          <input placeholder="Search for a Superhero" onChange={handleChange}></input>
        </form>
      </div>
      {/* Map the characters from the character list into cards */}
      <div className="card-container">
        {characters
          ? characters.map((char, index) => {
              return <ModalTab name={char.name} imgSrc={char.image} key={index} cookies={props.cookies} />;
            })
          : "Fetching Character Data"}
      </div>
    </>
  );
};

export default Characters;
