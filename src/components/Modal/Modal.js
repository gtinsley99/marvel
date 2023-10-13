import { useState } from "react";
import Modal from "react-modal";
import CharcterCard from "../CharacterCard/CharcterCard";
import "./Modal.css";
import FavoriteIcon from "./FavoriteIcon";
import { fetchDescription, fetchComics, CheckIfFavChar } from "../utils/marvelapi";
import { fetchPowerStats } from "../utils/SuperheroApiFetch";

const ModalTab = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [desc, setDesc] = useState("No character Description available");
  const [errors, setErrors] = useState(null);
  const [comicErrors, setComicErrors] = useState(null);
  const [comicsAppearedIn, setComicsAppearedIn] = useState([]);
  const [comicsFiltered, setComicsFiltered] = useState([]);
  const [iconClicked, setIconClicked] = useState(true); // set up iconClicked State
  const [showToolTip, setShowToolTip] = useState(false); // set up showToolTip State
  const [powerStats, setPowerStats] = useState();
  const [powerStatsErrors, setPowerStatsErrors] = useState();

  function openModal() {
    setIsOpen(true);
    fetchDescription(props.name, setDesc, errors, setErrors);
    fetchComics(props.name, errors, setErrors, setComicsAppearedIn, setComicsFiltered);
    if (props.cookies.jwt_token) {
      CheckIfFavChar(props.name, props.cookies.jwt_token, setIconClicked);
    }
    fetchPowerStats(props.name, setPowerStats, setPowerStatsErrors);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleChange = (e) => {
    const searchTerm = e.target.value;

    const filteredComics = comicsAppearedIn.filter((comic) => {
      return comic.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setComicsFiltered(filteredComics);
  };

  const isProfile = props.render === "profile";

  return (
    <div className={[isProfile ? "modal-holder-profile" : "modal-holder-characters"]}>
      <CharcterCard onClick={openModal} name={props.name} imgSrc={props.imgSrc} />
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal" ariaHideApp={false}>
        <div className="modal-tab">
          <div className="modal-left modal-side">
            <button className="close-button" onClick={closeModal}>
              &#10229;
            </button>
            <div className="popup-image-div">
              <img className="popup-image" src={props.imgSrc} alt="marvel" />
            </div>
            <h2>{props.name}</h2>
          </div>
          <div className="modal-right modal-side">
            <div className="description">
              <h3>Description</h3>
              <p>{powerStats}</p>
            </div>
            <div className="comics-section">
              <h3>Comics Appeared In</h3>
              <form>
                <input placeholder="search for comics" onChange={handleChange} />
              </form>
              <div className="comics">
                {comicsFiltered &&
                  comicsFiltered.map((comic, index) => {
                    return <p>{comic.title}</p>;
                  })}
              </div>
            </div>
            <div className="release">
              <h3>Release of Character</h3>
              <p>Random Year</p>
            </div>
            <div className="fav-and-variants">
              <FavoriteIcon cookies={props.cookies} iconClicked={iconClicked} setIconClicked={setIconClicked} showToolTip={showToolTip} setShowToolTip={setShowToolTip} name={props.name} />
              <button className="variants-button" onClick={closeModal}>
                See Variants
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalTab;
