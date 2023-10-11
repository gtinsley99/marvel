import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Characters from "./pages/Characters";
import NavBar from "./components/NavBar";
import Marvelapi from "./components/marvelapi";
import { CharDesc, AllChar, CharComics } from "./components/marvelapi";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [desc, setDesc] = useState("");
  const [allChar, setAllChar] = useState(null);
  const [comics, setComics] = useState(null);

  // Route to get description of character - use name (thor for testing only) currently use effect, change to when click
  // CharDesc("thor", setDesc);


  // Route to get all characters from backend db- useeffect on load
  // AllChar(setAllChar);

  // Route to search for comics by character, change from useeffect use name and input field (thor and avangers for testing only)
  CharComics("thor", "avengers", setComics);


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<Home loading={loading} setLoading={setLoading} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/characters" element={<Characters />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
