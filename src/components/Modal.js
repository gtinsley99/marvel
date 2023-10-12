import { useState } from "react";
import Modal from "react-modal";
import CharcterCard from "../components/CharcterCard";
import PlaceHolder from "../images/marvel-placeholder.jpg";
import "./Modal.css";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";

const ModalTab = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="modal-holder">
      <CharcterCard onClick={openModal} name={props.name} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal">
        <div className="modal-tab">
          <div className="modal-left modal-side">
            <button className="close-button" onClick={closeModal}>&#10229;</button>
            <div className="popup-image-div">
              <img className="popup-image" src={PlaceHolder} alt="marvel" />
            </div>
            <h2>{props.name}</h2>
          </div>
          <div className="modal-right modal-side">
            <div className="description">
              <h3>Description</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent pretium felis nec mauris laoreet euismod tempus et leo.
                Etiam vel diam est. Curabitur nec faucibus orci, a semper urna.
                Suspendisse lacinia velit dui, vehicula viverra dolor ultricies
                nec. Donec quis pellentesque lectus.{" "}
              </p>
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
              <StarBorderPurple500Icon className="modal-favorite" />
              <button className="variants-button" onClick={closeModal}>See Variants</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalTab;
