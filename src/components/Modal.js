import { useState } from "react";
import Modal from "react-modal";
import CharcterCard from "../components/CharcterCard";
import "./Modal.css";
import FavoriteIcon from "./FavoriteIcon";
import { fetchDescription, CheckIfFavChar } from "./marvelapi";

const ModalTab = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [desc, setDesc] = useState("No character Description available");
  const [errors, setErrors] = useState(null);
  const [iconClicked, setIconClicked] = useState(true); // set up iconClicked State
  const [showToolTip, setShowToolTip] = useState(false); // set up showToolTip State

  function openModal() {
    setIsOpen(true);
    fetchDescription(props.name, setDesc, errors, setErrors);
    if (props.cookies.jwt_token){
    CheckIfFavChar(props.name, props.cookies.jwt_token, setIconClicked);
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="modal-holder">
      <CharcterCard
        onClick={openModal}
        name={props.name}
        imgSrc={props.imgSrc}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
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
            <div className="comics">
              <h3>Comics Appeared In</h3>
              <p>Random Comic</p>
            </div>
            <div className="release">
              <h3>Release of Character</h3>
              <p>Random Year</p>
            </div>
            <div className="fav-and-variants">
              <FavoriteIcon
                cookies={props.cookies}
                iconClicked={iconClicked}
                setIconClicked={setIconClicked}
                showToolTip={showToolTip}
                setShowToolTip={setShowToolTip}
                name={props.name}
              />
              <button className="variants-btn">See Variants</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalTab;
