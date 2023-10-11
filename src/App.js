import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Characters from "./pages/Characters";
import NavBar from "./components/NavBar";
import "./App.css";
import { useCookies } from "react-cookie";

function App() {
  const [loading, setLoading] = useState(true);
  const [cookie, setCookie, removeCookie] = useCookies(["jwt_token"]);
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

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
