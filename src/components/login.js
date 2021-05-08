import React, { useState } from "react";
import "../Login.css";
import PropTypes from "prop-types";

async function loginUser(credentials) {
    return fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}
export default function Login({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <div className="login-wrapper">
            <h1 className="login">Login</h1>
                <p>login in here using your username and password</p>
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label>
                        <input type="text" placeholder="@UserName" id="username" onChange={e => setUserName(e.target.value)}/>
                    </label>
                    <label>
                        <input type="password" placeholder="Password" id="password" onChange={e => setPassword(e.target.value)}/>
                    </label>
                </div>
                <div className="submit-wrapper">
                    <button type="submit" className="submit">Log In</button>
                </div>
            </form>
        </div>
    );
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}