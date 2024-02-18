import React, { useState, useEffect } from "react";
import { useAuth } from "../provider/AuthProvider.jsx";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import bcrypt from "bcryptjs";
import supabase from "../config/supabaseClient.js";

export default function Signup() {
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formError, setFormError] = useState("");
    const [status, setStatus] = useState("");
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    async function handleSignup(e) {
        e.preventDefault();
        if (password && email.includes("cuny.edu")) {
            if (email == confirmEmail) {
                const emailHalf = email.slice(email.indexOf("@") + 1);
                const hash = await bcrypt.hash(password, 5);
                const player = {
                    email: email,
                    password: hash,
                    fName: email.slice(0, email.indexOf(".")),
                    lName: email.slice(
                        email.indexOf(".") + 1,
                        email.indexOf("@")
                    ),
                    school: emailHalf.slice(0, emailHalf.indexOf(".")),
                };
                const { data, error } = await supabase
                    .from("Player")
                    .insert(player);
                if (error) {
                    console.log(error);
                    setFormError(
                        "Please use a CUNY email and fill out the password field"
                    );
                }
                console.log(status);
                if (data) {
                    setFormError(null);
                    setStatus("successful");
                }
                console.log(status);
            }
        } else {
            setFormError(
                "Please use a CUNY email and fill out the password field"
            );
            console.log(formError);
            return;
        }
    }

    useEffect(() => {
        if (status) {
            console.log("redirecting");
            navigate("/", { replace: true });
        }
    }, [status]);

    return (
        <>
            <section className="login">
                <div className="flex-container">
                    <h1 className="title">Sign Up</h1>
                    <label className="sub-text">Email Address</label>
                    <input
                        className="input"
                        placeholder="Enter your email address"
                        type="text"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <label className="sub-text">Re-enter Email Address</label>
                    <input
                        className="input"
                        placeholder="Enter your email address"
                        type="text"
                        onChange={(e) => {
                            setConfirmEmail(e.target.value);
                        }}
                    />
                    <label className="sub-text">Password</label>
                    <input
                        className="input"
                        placeholder="Enter your password"
                        type="text"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <button
                        className="button"
                        type="submit"
                        onClick={handleSignup}
                    >
                        Sign Up
                    </button>
                    <p>{formError}</p>
                    <Link to="/" className="sub-caption url">
                        Have an account? Login!
                    </Link>
                </div>
            </section>
        </>
    );
}
