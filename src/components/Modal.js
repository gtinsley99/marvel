import { useState } from "react";
import Modal from "react-modal";
import CharcterCard from "../components/CharcterCard";
import "./Modal.css";
import FavoriteIcon from "./FavoriteIcon";
import { fetchDescription } from "./marvelapi";

const ModalTab = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [desc, setDesc] = useState("No character Description available");
  const [errors, setErrors] = useState(null);
  const [comicsAppearedIn, setComicsAppearedIn] = useState([]);
  const [comicSearchTerm, setComicSearchTerm] = useState("");
  const [comicsFiltered, setComicsFiltered] = useState([]);

  function openModal() {
    setIsOpen(true);
    fetchDescription(props.name, setDesc, errors, setErrors, setComicsAppearedIn, setComicsFiltered);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleChange = (e) => {
    setComicSearchTerm(e.target.value);

    const filteredComics = comicsAppearedIn.filter((comic) => {
      return comic.name.includes(comicSearchTerm);
    });

    setComicsFiltered(filteredComics);
  };

  return (
    <div className="modal-holder">
      <CharcterCard onClick={openModal} name={props.name} imgSrc={props.imgSrc} />
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal">
        <div className="modal-tab">
          <div className="modal-left modal-side">
            <button onClick={closeModal}>close</button>
            <div className="popup-image-div">
              <img className="popup-image" src={props.imgSrc} alt="marvel" />
            </div>
            <h2>{props.name}</h2>
          </div>
          <div className="modal-right modal-side">
            <div className="description">
              <h3>Description</h3>
              <p>{desc}</p>
            </div>
            <div className="comics-section">
              <h3>Comics Appeared In</h3>
              <form>
                <input placeHolder="search for comics" onChange={handleChange} />
              </form>
              <div className="comics">
                {comicsFiltered &&
                  comicsFiltered.map((comic, index) => {
                    return <p>{comic.name}</p>;
                  })}
              </div>
            </div>
            <div className="release">
              <h3>Release of Character</h3>
              <p>Random Year</p>
            </div>
            <div className="fav-and-variants">
              <FavoriteIcon />
              <button className="variants-btn">See Variants</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalTab;
