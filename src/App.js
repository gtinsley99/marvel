import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Characters from "./pages/Characters";
import NavBar from "./components/NavBar";
import Marvelapi from "./components/marvelapi";
import { CharDesc, AllChar, CharComics, CharSeries } from "./components/marvelapi";
import "./App.css";
import { useCookies } from "react-cookie";

function App() {
  const [loading, setLoading] = useState(true);
  const [cookie, setCookie, removeCookie] = useCookies(["jwt_token"]);
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [desc, setDesc] = useState("");
  const [allChar, setAllChar] = useState(null);
  const [comics, setComics] = useState(null);
  const [series, setSeries] = useState(null);

  // Route to get description of character - use name (thor for testing only) currently use effect, change to when click
  // CharDesc("thor", setDesc);


  // Route to get all characters from backend db- useeffect on load
  // AllChar(setAllChar);

  // Route to search for comics by character, change from useeffect use name and input field (thor and avengers for testing only)
  // CharComics("thor", "avengers", setComics);

 // Route to search for series by character, change from useeffect use name and input field (thor and a for testing only)
  // CharSeries("thor", "a", setSeries);


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar loggedIn={loggedIn} />
        <Routes>
          <Route
            path="/"
            element={<Home loading={loading} setLoading={setLoading} />}
          />
          <Route
            path="/login"
            element={
              <Login
                cookie={cookie}
                setCookie={setCookie}
                removeCookie={removeCookie}
                user={user}
                setUser={setUser}
                setLoggedIn={setLoggedIn}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                cookie={cookie}
                setCookie={setCookie}
                removeCookie={removeCookie}
              />
            }
          />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
