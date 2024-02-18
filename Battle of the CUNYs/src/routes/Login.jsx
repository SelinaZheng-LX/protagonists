import React, { useEffect, useState } from "react";
import { useAuth } from "../provider/AuthProvider.jsx";
import { useLocation, useNavigate, Link } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "home";

  function handleLogin() {
    const user = {
      email: email,
      password: password,
    }
  }

  console.log("logging in");

  useEffect(() => {
    setUser(null);
  }, [])

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
              setEmail(e.target.value);
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
            onClick={handleLogin}
          >
            Log In
          </button>
          <Link to="/Signup" className="sub-caption url">
            Don't have an account? Sign up
          </Link>
        </div>
      </section>
    </>
  );
}
