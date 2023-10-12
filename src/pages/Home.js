import Description from "../components/HomeComponents/Description";
import { useEffect } from "react";
import SplashScreen from "../components/HomeComponents/splashScreen";
import { Link } from "react-router-dom";

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
          <h1>Title</h1>
          <Description className="descHome" />
          <Link to="/characters">
            <button className="button">Explore the characters</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
