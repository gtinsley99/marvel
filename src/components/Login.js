import { useState } from "react";
import React from "react";
import axios from "axios";

const LoginComponent = ({ onLogin }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, { username:username, password:password });
            const token = response.data.token;
            onLogin(token);
        } catch (error) {
            console.log('Username or password is incorrect', error.response.data);
        }
    };

    return (
        <div>
            <form>
                <h1>Login to your account</h1>
                <input placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} type="text"></input>
                <input placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} type="password"></input>
                <button onClick={handleLogin}>Login</button>
            </form>
            
        </div>
    )
}

export default LoginComponent;