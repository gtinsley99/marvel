import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Characters from "./pages/Characters";
import NavBar from "./components/NavBar/NavBar";
import { CharDesc, AllChar, CharComics, CharSeries, Marvelapi } from "./components/utils/marvelapi";
import "./App.css";
import { useCookies } from "react-cookie";
import { AuthCheck } from "./components/utils";

function App() {
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["jwt_token"]);
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [res, setRes] = useState(null);
  const [showNav, setShowNav] = useState(true);
  const [allChar, setAllChar] = useState(null);


  // Route to get all characters from backend db- useeffect on load
  AllChar(setAllChar);

  // Marvelapi();

    // Show navbar on scrollup, hide on scrolldown
    let prevScrollPos = window.scrollY;
    window.onscroll = () => {
      let currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos || currentScrollPos < 100) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      prevScrollPos = currentScrollPos;
    };

  const loginWithToken = async () => {
    await AuthCheck(cookies.jwt_token, setUser, setLoggedIn);
  };

  useEffect(() => {
    if (cookies.jwt_token !== false) {
      loginWithToken(cookies.jwt_token);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {showNav && <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser} />}
        <div className="navMargin"></div>
        <Routes>
          <Route path="/" element={<Home loading={loading} setLoading={setLoading} />} />
          <Route
            path="/login"
            element={<Login cookie={cookies} setCookie={setCookie} removeCookie={removeCookie} user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} setRes={setRes} />}
          />
          <Route
            path="/profile"
            element={<Profile cookies={cookies} setCookie={setCookie} removeCookie={removeCookie} user={user} setUser={setUser} setLoggedIn={setLoggedIn} loggedIn={loggedIn} />}
          />
          <Route path="/characters" element={<Characters cookies={cookies} allChar={allChar} loggedIn={loggedIn} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
