import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Characters from "./pages/Characters";
import NavBar from "./components/NavBar";
import Marvelapi from "./components/marvelapi";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  Marvelapi(setData);
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
