import { useState } from "react";
import React from "react";
import axios from "axios";
import "./Login.css";

const LoginComponent = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event) => {
            event.preventDefault();
           try { 
            const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, { 
               method: "POST",
               headers: {
                    "Content-Type": 'application/json'
               },
               body: JSON.stringify({
                username: username,
                password: password
               }) 
            
            }); 
            // props.setUser(console)
            const data = await response.json()
            console.log(data)
            if (data.message === "User logged in"){
                props.setCookie("jwt_token", data.user.token, { maxAge: 604800, path: "/"})
                console.log(props.cookie)
            } else {
                props.removeCookie("jwt-token")
            }
            setUsername('');
            setPassword('');
            } catch (error) {
                console.log(error)
            }
    };
    
    // const handleLogin = () => {
    //     // Simulate authentication with predefined credentials
    //     if (username === 'user' && password === 'password') {
    //       // Successful login logic
    //       alert('Login successful!');
    //     } else {
    //       // Failed login logic
    //       setError('Login failed. Please check your credentials.');
    //     }
    //   };

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