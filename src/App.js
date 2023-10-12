import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Characters from "./pages/Characters";
import NavBar from "./components/NavBar";
import { CharDesc, AllChar, CharComics, CharSeries, Marvelapi } from "./components/marvelapi";
import "./App.css";
import { useCookies } from "react-cookie";
import { AuthCheck } from "./components/utils";

function App() {
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["jwt_token"]);
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [res, setRes] = useState(null);
  const [desc, setDesc] = useState("");
  const [allChar, setAllChar] = useState(null);

  // Route to get description of character - use name (thor for testing only) currently use effect, change to when click
  // CharDesc("thor", setDesc);

  // Route to get all characters from backend db- useeffect on load
  AllChar(setAllChar);
  console.log(`all characters state: ${allChar}`);

  // Route to search for comics by character, change from useeffect use name and input field (thor and avengers for testing only)
  // CharComics("thor", "avengers", setComics);

  // Route to search for series by character, change from useeffect use name and input field (thor and a for testing only)
  // CharSeries("thor", "a", setSeries);

  // Marvelapi();

  // Route to get most popular characters
 


  const loginWithToken = async (cookie) => {
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
        <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route
            path="/"
            element={<Home loading={loading} setLoading={setLoading} />}
          />
          <Route
            path="/login"
            element={
              <Login
                cookie={cookies}
                setCookie={setCookie}
                removeCookie={removeCookie}
                user={user}
                setUser={setUser}
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                setRes={setRes}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                cookies={cookies}
                setCookie={setCookie}
                removeCookie={removeCookie}
              />
            }
          />
          <Route
            path="/characters"
            element={<Characters cookies={cookies} allChar={allChar} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
