import Description from "../components/Description";
import { useState, useEffect } from "react";
import SplashScreen from "../components/splashScreen";

const Home = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)  
        }, 3000)
    },[]);

    return (
        <div className="homepage">
            {loading ? <SplashScreen /> : (
            <div className='homepage'>
                <h1>Title</h1>
            <Description className="descHome"/>
            <button className="charBtn">Explore the characters</button>
            </div>
            )}
            
        </div>
    )
}

export default Home;