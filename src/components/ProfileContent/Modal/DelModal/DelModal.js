import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeleteAccount } from "../../../utils";
import "../modal.css";

const DelModal = (props) => {
  const [button, setButton] = useState("Delete account");
  const [msg, setMsg] = useState(
    "Are you sure you want to delete your account?"
  );
  const navigate = useNavigate();

  const handleClick = async (e) => {
    if (button === "Close") {
      props.setModal(false);
      props.setUser("");
      props.setUserPic("");
      navigate("/");
    } else{
    await DeleteAccount(
      props.cookies.jwt_token,
      props.username,
      props.password,
      props.setRes,
      props.setLoggedIn,
      setButton,
      setMsg,
      props.setModal
    );}
    props.setUsername("");
    props.setPassword("");
  };
  const handleClose = () => {
    props.setModal(false);
    props.setUsername("");
    props.setPassword("");
  };
  return (
    <div className="inputForm">
      <h4>{msg}</h4>
      <div className="inputBot">
      <button className="formButton" id="delButton" onClick={handleClick}>{button}</button>
      {props.res !== "User deleted" && (
        <button className="formButton" onClick={handleClose}>Cancel</button>
      )}
      </div>
    </div>
  );
};

export default DelModal;
