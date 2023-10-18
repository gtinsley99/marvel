import { useState } from "react";
import Modal from "react-modal";
import CharcterCard from "../CharacterCard/CharcterCard";
import "./Modal.css";
import FavoriteIcon from "./FavoriteIcon";
import { fetchComics, CheckIfFavChar, fetchVariants } from "../utils/marvelapi";
import { fetchPowerStats } from "../utils/SuperheroApiFetch";
import { CharacterIds } from "../utils/characterIds";
import Powerstats from "./Powerstats";

const ModalTab = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [variants, setVariants] = useState(null);
  const [errors, setErrors] = useState(null);
  const [comicsAppearedIn, setComicsAppearedIn] = useState([]);
  const [comicsFiltered, setComicsFiltered] = useState(null);
  const [iconClicked, setIconClicked] = useState(true); // set up iconClicked State
  const [showToolTip, setShowToolTip] = useState(false); // set up showToolTip State
  const [powerStats, setPowerStats] = useState();
  const [powerStatsErrors, setPowerStatsErrors] = useState();
  const [seeVariants, setSeeVariants] = useState(false);

  function openModal() {
    setIsOpen(true);
    props.setShowNav(false);
    props.setHideNav(true);
    fetchComics(props.name, errors, setErrors, setComicsAppearedIn, setComicsFiltered);
    if (props.cookies.jwt_token) {
      CheckIfFavChar(props.name, props.cookies.jwt_token, setIconClicked);
    }
    const characterId = CharacterIds[props.name];
    fetchPowerStats(characterId, setPowerStats, setPowerStatsErrors, powerStatsErrors);
  }

  function closeModal() {
    setIsOpen(false);
    props.setShowNav(true);
    props.setHideNav(false);
  }

  const handleChange = (e) => {
    const searchTerm = e.target.value;

    const filteredComics = comicsAppearedIn.filter((comic) => {
      return comic.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setComicsFiltered(filteredComics);
  };

  const handleVariants = (name) => {
    let newName = "";
    if (name.includes("(")) {
      let arr = name.split("");
      let first = arr.findIndex((letter) => letter === "(");
      let newArr = [];
      for (let i = 0; i < first - 1; i++) {
        newArr.push(arr[i]);
      }
      newName = newArr.join("");
    } else {
      newName = name;
    }
    fetchVariants(newName, setVariants);
    setSeeVariants(true);
    console.log(variants);
  };

  const isProfile = props.render === "profile";

  return (
    <div className={[isProfile ? "modal-holder-profile" : "modal-holder-characters"]}>
      <CharcterCard onClick={openModal} name={props.name} imgSrc={props.imgSrc} />
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal" ariaHideApp={false}>
        {!seeVariants ? (
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
              <div className="stats">
                <Powerstats powerStats={powerStats} />
              </div>
              <div className="comics-section">
                <div className="comicSearch">
                  <h3>Comics Appeared In</h3>
                  <form>
                    <input placeholder="Search for comics" onChange={handleChange} />
                  </form>
                </div>
                <div className="comics">
                  {comicsFiltered ? (
                    comicsFiltered.map((comic, index) => {
                      return (
                        <div className="comics-div" key={index}>
                          <p>{comic.title}</p>
                          <hr style={{ width: "100%" }} />
                        </div>
                      );
                    })
                  ) : (
                    <p>Loading comics...</p>
                  )}
                </div>
              </div>

              <div className="fav-and-variants">
                <FavoriteIcon
                  loggedIn={props.loggedIn}
                  cookies={props.cookies}
                  iconClicked={iconClicked}
                  setIconClicked={setIconClicked}
                  showToolTip={showToolTip}
                  setShowToolTip={setShowToolTip}
                  name={props.name}
                  isProfile={isProfile}
                  closeModal={closeModal}
                />
                <button className="variants-button" onClick={() => handleVariants(props.name)}>
                  See Variants
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="variant-tab">
            <div className="variant-top">
              <h2>{props.name} variants</h2>
            </div>
            <div>
              <div className="variantsMid">
                {variants ? (
                  <div className={variants.length > 3 ? "variantsMapStart" : "variantsMapCentre"}>
                    {variants.map((item, index) => {
                      let imgUrl = item.thumbnail.path + ".jpg";
                      return (
                        <div key={index} className="variantItem">
                          <img className="variantImg" src={imgUrl} alt="variant"></img>
                          <div className="textDiv">
                            <h4>{item.name}</h4>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  "Variants loading"
                )}
              </div>
              <div className="variants-bot">
                <div className="closeVariants">
                  <button className="close-button" onClick={closeModal}>
                    &#10229;
                  </button>
                </div>
                <div className="closeVariants">
                  <button className="variants-button" onClick={() => setSeeVariants(false)}>
                    See Character
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ModalTab;
