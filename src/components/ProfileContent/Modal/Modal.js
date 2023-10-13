import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UpdateUsername, UpdatePassword, UpdateEmail, DeleteAccount } from "../../utils";

const Modal = (props) => {
    const [newUsername, setNewUsername] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const navigate = useNavigate();
    const handleClick = () => {
        props.setShowModal(false)
        setUsername("");
        setNewPassword("")
        setPassword("")
        setNewUsername("");
        setNewEmail("")
    };

    const handleSubmitUsername = (e) => {
        e.preventDefault()
        if (newUsername !== ""){
        UpdateUsername(props.cookies.jwt_token, newUsername, props.setCookie, props.setUser);
        };
        setNewUsername("");
    }

    const handleSubmitPassword = (e) => {
        e.preventDefault()
        if (newPassword !== ""){
        UpdatePassword(username, password, newPassword);
        };
        setUsername("");
        setNewPassword("")
        setPassword("")
    };

    const handleSubmitEmail = (e) => {
        e.preventDefault();
        UpdateEmail(props.cookies.jwt_token, newEmail)
        setNewEmail("");
    }

    const handleSubmitDelete = (e) => {
        e.preventDefault();
        DeleteAccount(props.cookies.jwt_token, username, password, props.setUser, props.setLoggedIn, navigate);
        setUsername("");
        setPassword("")
    };

    return(
        <div>
            {props.form === "username" &&
            <div>
                <div className="inputField">
                <label>New username</label>
                <input placeholder="Insert new username here..." value={newUsername} onChange={(e) => setNewUsername(e.target.value)}></input>
                </div>
                <button onClick={handleSubmitUsername}>Submit</button>
            </div>
            }
              {props.form === "password" &&
            <div>
                <div className="inputField">
                <label>Username</label>
                <input placeholder="Insert username here..." value={username} onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div className="inputField">
                <label>Password</label>
                <input placeholder="Insert password here..." type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className="inputField">
                <label>New password</label>
                <input placeholder="Insert new password here..." type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}></input>
                </div>
                <button onClick={handleSubmitPassword}>Submit</button>
            </div>
            }
             {props.form === "email" &&
            <form onSubmit={handleSubmitEmail}>
                <div className="inputField">
                <label>New email</label>
                <input placeholder="Insert new email here..." type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)}></input>
                </div>
                <button >Submit</button>
            </form>
            }
               {props.form === "delete" &&
            <div>
                <div className="inputField">
                <label>Username</label>
                <input placeholder="Insert username here..." value={username} onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div className="inputField">
                <label>Password</label>
                <input placeholder="Insert password here..." type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button onClick={handleSubmitDelete}>Delete Account</button>
            </div>
            }
            <button onClick={handleClick}>Close</button>
        </div>
    )
};

export default Modal;