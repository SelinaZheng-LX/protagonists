//See mascot in AR moving around
import React, { useState, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider.jsx";
import jjayImage from "../assets/jjay.png";
import mouse from "../assets/mouse.png";
import supabase from "../config/supabaseClient.js";

export default function Mascot() {
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const { user, mascot } = useAuth();
  const navigate = useNavigate();
  const [reload, setReload] = useState("false");

  const feedMascot = (e) => {
    e.preventDefault();
    if (user.foodAmount > 0) {
      user.foodFed += 1;
      user.foodAmount -= 1;
      mascot.foodEaten += 1;
    }
    forceUpdate();
  }

  useEffect(() => {
    const updatePlayer = async () => {
      const { data, error } = await supabase
        .from('Player')
        .update({ foodAmount: user.foodAmount, foodFed: user.foodFed })
        .eq('email', user.email)
        .single()

      if (error) {
        console.log(error);
      }
      if (data) {
      }
    }

    const updateMascot = async () => {

      const { data, error } = await supabase
        .from('Mascot')
        .update({ foodEaten: mascot.foodEaten})
        .eq('school', user.school)
        .single()

    }
    updateMascot();
    updatePlayer();
  }, [user.foodFed, user.foodAmount])

  return (
    <>
      <section className="mascotScreen">
        <img
          src={jjayImage}
          alt=""
          type="image"
          className="mascot-show"
        />
        <div className="data-container">
          <h1 className="title margin-top">Hunter Hawks</h1>
          <div id="xpProgress">
            <div id="xpBar"></div>
          </div>
          <p className="sub-text">{mascot.foodEaten}/10000</p>
          <p className="sub-text">695 Park Ave, New York, NY 10065</p>
          <div className="line"></div>
          <div className="row-around ">
            <div className="food-con">
              <div className="row-con">
                <img src={mouse} alt="" className="food" />
                <h3 className="num">{user.foodAmount}</h3>
              </div>
              <p className="sub-text">FOOD OWNED</p>
            </div>
            <div className="food-con">
              <div className="row-con">
                <img src={mouse} alt="" className="food" />
                <h3 className="num">{user.foodFed}</h3>
              </div>
              <p className="sub-text">FOOD FED</p>
            </div>
          </div>
          <div className="feed-mascot margin-top">
            <span className="round-food-info" onClick={feedMascot}>Feed the Mascot</span>
          </div>
          <div className="feed-mascot">
            <span className="round-food-info" onClick={() => navigate("/home")}>Earn Hawk Foods</span>
          </div>
          <button
            className="round-button margin-top"
            onClick={() => navigate("/home")}
          >
            <span className="checkmark">&#10003;</span>
          </button>
        </div>
      </section>
    </>
  );
}
