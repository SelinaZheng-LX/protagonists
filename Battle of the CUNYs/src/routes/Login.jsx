import React, { useState } from "react";
import { useAuth } from "../provider/AuthProvider.jsx";
import { useLocation, useNavigate } from "react-router-dom";

export default function Login() {
    const [user, setUser] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || "home";

    function handleLogin() {
        login(user);
    }

    return(
        <>
            <h1>Welcome!</h1>
            <label>Name</label>
            <input type="text" onChange={(e) => {setUser(e.target.value)}} />
            <button type="submit" onClick={handleLogin}>Log In</button>
        </>
    )
}
