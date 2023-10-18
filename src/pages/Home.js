import Description from "../components/HomeComponents/Description";
import { useEffect } from "react";
import SplashScreen from "../components/HomeComponents/splashScreen";
import { Link } from "react-router-dom";
import "../App.css";
import "../components/HomeComponents/Home.css";
import background from "../images/marvel-background.png";
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
          <h1 className="title">Welcome to the "Marvel Character Encyclopedia"</h1>
          <div className="button-overlay">
            <Link to="/characters">
              <button className="home-button">Explore the characters</button>
            </Link>
            <Link to="/about">
              <button className="home-button">About us</button>
            </Link>
          </div>
          <div className="img-wrapper">
            <div className="image-container">
              <img src={background} alt="marvel image"></img>
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
