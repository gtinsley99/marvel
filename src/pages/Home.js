import Description from "../components/HomeComponents/Description";
import { useEffect } from "react";
import SplashScreen from "../components/HomeComponents/splashScreen";
import { Link } from "react-router-dom";
import "../App.css";
import "../components/HomeComponents/Home.css";
import background from "../images/background-image2.png";
import NavBar from "../components/NavBar/NavBar";
import Slideshow from "../components/SlideShow/Slideshow";

const Home = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.setLoading(false);
    }, 3000);
  }, [props]);

  return (
    <div className="homepage">
      {props.loading ? (
        <SplashScreen />
      ) : (
        <div className="homepage">
          <div className="carousel">
            <Slideshow />
          </div>
          <div className="image-container">
            <img src={background} alt="marvel image"></img>
            <div className="image-overlay">
              <h1 className="title">Welcome to the "Marvel Character Encyclopedia"</h1>
              <Description className="descHome" />
            </div>
            <div className="button-overlay">
              <Link to="/characters">
                <button className="home-button">Explore the characters</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
