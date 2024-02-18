import React, { useEffect, useState } from "react";
import { useAuth } from "../provider/AuthProvider.jsx";
import { useLocation, useNavigate, Link } from "react-router-dom";
import bcrypt from "bcryptjs";
import supabase from "../config/supabaseClient.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "home";

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('Player')
      .select()
      .eq('email', email)

    if (error) {
      console.log(error);
      setFormError("Invalid login. Please try again.");
    }
    if (data) {
      const player = data[0];
      const match = await bcrypt.compare(password, player.password);
      if (match) {
        setUser({
          name: player.fName[0] + player.fName.slice(1),
          email: player.email,
          foodFed: player.foodFed,
          foodAmount: player.foodAmount,
        })
        navigate("/home");
      }
      else {
        setFormError("Invalid login. Please try again.");
      }
    }
  }

  // useEffect (() => {
  //   if (user) {
  //     navigate("/Profile");
  //   }
  // }, [user])

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
          <p>{formError}</p>
          <Link to="/signup" className="sub-caption url">
            Don't have an account? Sign up
          </Link>
        </div>
      </section>
    </>
  );
}
