import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeleteAccount } from "../../../utils";

const DelModal = (props) => {
  const [button, setButton] = useState("Delete account");
  const [msg, setMsg] = useState(
    "Are you sure you want to delete your account?"
  );
  const navigate = useNavigate();

  const handleClick = async (e) => {
    if (button === "Close") {
      props.setModal(false);
      navigate("/");
    }
    await DeleteAccount(
      props.cookies.jwt_token,
      props.username,
      props.password,
      props.setRes,
      props.setUser,
      props.setLoggedIn,
      setButton,
      setMsg,
      props.setModal
    );
    props.setUsername("");
    props.setPassword("");
  };
  const handleClose = () => {
    props.setModal(false);
    props.setUsername("");
    props.setPassword("");
  };
  return (
    <div>
      <h4>{msg}</h4>
      <button onClick={handleClick}>{button}</button>
      {props.res !== "User deleted" && (
        <button onClick={handleClose}>Cancel</button>
      )}
    </div>
  );
};

export default DelModal;
