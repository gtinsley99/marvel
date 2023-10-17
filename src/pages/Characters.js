import { useState, useEffect } from "react";
import "../App.css";

import ReactPaginate from "react-paginate";

// import components to use
import Popular from "../components/Popular/Popular";
import ModalTab from "../components/Modal/Modal";
import { PopChar } from "../components/utils/marvelapi";
import background from "../images/marvel.png";

const Characters = (props) => {
  const [pop, setPop] = useState(null);
  const [characters, setCharacters] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  const charactersPerPage = 9;

  const handlePageClick = (e) => {
    setCurrentPage(e.selected);
    window.scrollTo({
      top: 575,
      behavior: "smooth"
    });
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const pageCount = Math.ceil(characters ? characters.length / charactersPerPage : 11);
  const displayedCharacters = characters && characters.slice(currentPage * charactersPerPage, (currentPage + 1) * charactersPerPage);

  useEffect(() => {
    // Fetch and set characters from props.allChar initially
    if (props.allChar) {
      setCharacters(props.allChar);
    }
    // Fetch popular characters
  }, [props.allChar]);
  PopChar(setPop);

  const handleChange = async (event) => {
    const searchTerm = event.target.value;

    setCurrentPage(0);

    const filteredCharacters = props.allChar.filter((character) => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setCharacters(filteredCharacters);
  };

  return (
    <div className="charPage">
      <img className="background" src={background} alt="background"></img>
      <div className="popChar">
        <Popular pop={pop} cookies={props.cookies} loggedIn={props.loggedIn} setHideNav={props.setHideNav} setShowNav={props.setShowNav} />
      </div>
      <div className="searchDiv">
        <div className="searchCard">
          <label>Search for marvel character:</label>
          <input placeholder="Search for a Superhero" onChange={handleChange}></input>
        </div>
      </div>
      {/* Map the characters from the character list into cards */}
      <div className="card-container">
        {displayedCharacters
          ? displayedCharacters.map((char, index) => {
              return <ModalTab name={char.name} imgSrc={char.image} key={index} cookies={props.cookies} loggedIn={props.loggedIn} setHideNav={props.setHideNav} setShowNav={props.setShowNav} />;
            })
          : "Fetching Character Data"}
      </div>
      <div className="navigate-buttons">
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageCount={pageCount}
          pageRangeDisplayed={11}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          activeClassName="active"
          forcePage={currentPage}
        />{" "}
        <button onClick={scrollToTop}>Back To Top</button>
      </div>
    </div>
  );
};

export default Characters;
