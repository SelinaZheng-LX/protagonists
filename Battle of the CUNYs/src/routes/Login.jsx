import React, { useState } from "react";
import { useAuth } from "../provider/AuthProvider.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react";
export default function Login() {
    const [user, setUser] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || "home";

    function handleLogin() {
        login(user);
    }

    return (
        <>
            <section className="login">
                <div className="flex-container">
                    <h1 className="title">Login Account</h1>
                    <label className="sub-text">Login Account</label>
                    <input
                        className="input"
                        placeholder="Enter your email"
                        type="text"
                        onChange={(e) => {
                            setUser(e.target.value);
                        }}
                    />
                    <label className="sub-text">Password</label>
                    <input
                        className="input"
                        placeholder="Enter your password"
                        type="text"
                        // onChange={(e) => {
                        //     setUser(e.target.value);
                        // }}
                    />
                    <button
                        className="button"
                        type="submit"
                        onClick={handleLogin}
                    >
                        Log In
                    </button>
                    <p className="sub-caption url">
                        <Link onClick={() => navigate("/signup")}>
                            Don’t have an account? Sign up
                        </Link>
                    </p>
                </div>
            </section>
        </>
    );
}
