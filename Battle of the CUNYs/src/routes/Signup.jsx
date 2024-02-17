import React, { useState } from "react";
import { useAuth } from "../provider/AuthProvider.jsx";
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function Signup() {
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
                    <h1 className="title">Sign Up</h1>
                    <label className="sub-text">Email Address</label>
                    <input
                        className="input"
                        placeholder="Enter your email"
                        type="text"
                        onChange={(e) => {
                            setUser(e.target.value);
                        }}
                    />
                    <label className="sub-text">Re-enter Email Address</label>
                    <input
                        className="input"
                        placeholder="Re-enter your email"
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
                    <label className="sub-text">Re-enter Password</label>
                    <input
                        className="input"
                        placeholder="Re-enter your password"
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
                        <Link to="/home">Already have an account? Log in.</Link>
                    </p>
                </div>
            </section>
        </>
    );
}
