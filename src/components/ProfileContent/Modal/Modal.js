import { useState } from "react";
import "./modal.css";
import DelModal from "./DelModal/DelModal";
import { UpdateUsername, UpdatePassword, UpdateEmail } from "../../utils";

const Modal = (props) => {
  const [modal, setModal] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const handleClick = () => {
    props.setShowModal(false);
    setUsername("");
    setNewPassword("");
    setPassword("");
    setNewUsername("");
    setNewEmail("");
    props.setRes(null);
  };

  const handleSubmitUsername = (e) => {
    e.preventDefault();
    if (newUsername !== "") {
      UpdateUsername(
        props.cookies.jwt_token,
        newUsername,
        props.setCookie,
        props.setUser,
        props.setRes
      );
    }
    setNewUsername("");
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    if (newPassword !== "") {
      UpdatePassword(username, password, newPassword, props.setRes);
    }
    setUsername("");
    setNewPassword("");
    setPassword("");
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    UpdateEmail(props.cookies.jwt_token, newEmail, props.setRes);
    setNewEmail("");
  };

  const handleConfirmDelete = (e) => {
    e.preventDefault();
    setModal(true);
  };

  return (
    <div>
      {props.form === "username" && (
        <div>
          <div className="inputField">
            {props.res === "Username updated" ? (
              <h3 className="successMsg">{props.res}</h3>
            ) : (
              <h3 className="errMsg">{props.res}</h3>
            )}
            <label>New username</label>
            <input
              placeholder="Insert new username here..."
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            ></input>
          </div>
          <button onClick={handleSubmitUsername}>Submit</button>
        </div>
      )}
      {props.form === "password" && (
        <div>
          <div className="inputField">
            {props.res === "User password updated" ? (
              <h3 className="successMsg">{props.res}</h3>
            ) : (
              <h3 className="errMsg">{props.res}</h3>
            )}
            <label>Username</label>
            <input
              placeholder="Insert username here..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="inputField">
            <label>Password</label>
            <input
              placeholder="Insert password here..."
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="inputField">
            <label>New password</label>
            <input
              placeholder="Insert new password here..."
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            ></input>
          </div>
          <button onClick={handleSubmitPassword}>Submit</button>
        </div>
      )}
      {props.form === "email" && (
        <form onSubmit={handleSubmitEmail}>
          <div className="inputField">
            {props.res === "User email updated" ? (
              <h3 className="successMsg">{props.res}</h3>
            ) : (
              <h3 className="errMsg">{props.res}</h3>
            )}
            <label>New email</label>
            <input
              placeholder="Insert new email here..."
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            ></input>
          </div>
          <button>Submit</button>
        </form>
      )}
      {props.form === "delete" && (
        <div>
          <div className="inputField">
            {props.res === "Username or password incorrect" && (
              <h3 className="errMsg">{props.res}</h3>
            )}
            <label>Username</label>
            <input
              placeholder="Insert username here..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="inputField">
            <label>Password</label>
            <input
              placeholder="Insert password here..."
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button onClick={handleConfirmDelete}>Delete Account</button>
        </div>
      )}
      <button onClick={handleClick}>Close</button>
      {modal && <DelModal
        setRes={props.setRes}
        res={props.res}
        setLoggedIn={props.setLoggedIn}
        cookies={props.cookies}
        username={username}
        password={password}
        setUser={props.setUser}
        setUsername={setUsername}
        setPassword={setPassword}
        setModal={setModal}
      />}
    </div>
  );
};

export default Modal;
