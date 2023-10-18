import { useState } from "react";
import "./modal.css";
import DelModal from "./DelModal/DelModal";
import { UpdateUsername, UpdatePassword, UpdateEmail } from "../../utils";
import ProfilePicChanger from "../ProfilePicChanger"

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
    <div className="modalBackgrnd">
      {props.form === "username" && (
        <div className="inputForm">
            <div className="inputTop">
              <h3>Update username</h3>
            </div>
            {props.res === "Username updated" ? (
              <h3 className="successMsg">{props.res}</h3>
            ) : (
              <h3 className="errMsg">{props.res}</h3>
            )}
            <div className="inputMid">
            <div className="inputField">
              <label>New username</label>
              <input
                placeholder="Insert new username here..."
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="inputBot">
            <button className="formButton" onClick={handleSubmitUsername}>
              Submit
            </button>
            <button className="formButton" onClick={handleClick}>
              Close
            </button>
          </div>
        </div>
      )}
      {props.form === "password" && (
        <div className="inputForm">
            <div className="inputTop">
              <h3>Update password</h3>
            </div>
            {props.res === "User password updated" ? (
              <h3 className="successMsg">{props.res}</h3>
            ) : (
              <h3 className="errMsg">{props.res}</h3>
            )}
            <div className="inputMid">
            <div className="inputField">
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
            <div className="inputNewUser">
              <label>New password</label>
              <input
                placeholder="Insert new password here..."
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="inputBot">
          <button className="formButton" onClick={handleSubmitPassword}>Submit</button>
          <button className="formButton" onClick={handleClick}>Close</button>
          </div>
        </div>
      )}
      {props.form === "email" && (
        <form onSubmit={handleSubmitEmail} className="inputForm">
            <div className="inputTop">
              <h3>Update email</h3>
            </div>
            {props.res === "User email updated" ? (
              <h3 className="successMsg">{props.res}</h3>
            ) : (
              <h3 className="errMsg">{props.res}</h3>
            )}
            <div className="inputMid">
            <div className="inputField">
              <label>New email</label>
              <input
                placeholder="Insert new email here..."
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="inputBot">
            <button className="formButton">Submit</button>
            <button className="formButton" onClick={handleClick}>
              Close
            </button>
          </div>
        </form>
      )}
      {props.form === "delete" && !modal && (
        <div className="inputForm">
            <div>
              <h3>Delete account</h3>
            </div>
            {props.res === "Username or password incorrect" && (
              <h3 className="errMsg">{props.res}</h3>
            )}
            <div className="inputMid">
            <div className="inputField">
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
          </div>
          <div className="inputBot">
          <button className="formButton" onClick={handleConfirmDelete}>Delete Account</button>
          <button className="formButton" onClick={handleClick}>Close</button>
          </div>
        </div>)}  {props.form === "delete" && modal && (
        <DelModal
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
          setUserPic={props.setUserPic}
        />
      )}
      {props.form === "updatePic" && <div className="inputForm">
        <div>
          <h3>Update profile picture</h3>
        </div>
        <ProfilePicChanger setModal={props.setShowModal} setFile={props.setFile} file={props.file} cookies={props.cookies} setUserPic={props.setUserPic} userPic={props.userPic} />
        <div className="inputBot">
          <button className="formButton" onClick={handleClick}>Close</button>
          </div>
        </div>}
    </div>
  );
};

export default Modal;
