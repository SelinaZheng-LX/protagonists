//See mascot in AR moving around
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider.jsx";
import jjayImage from "../assets/jjay.png";
import mouse from "../assets/mouse.png";
export default function Mascot() {
    const { user } = useAuth();
    const navigate = useNavigate();
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
                    <h1 className="title">Hunter Hawks</h1>
                    <div id="xpProgress">
                        <div id="xpBar"></div>
                    </div>
                    <p className="sub-text">1000/10000</p>
                    <p className="sub-text">695 Park Ave, New York, NY 10065</p>
                    <div className="line"></div>
                    <div className="row-around">
                        <div className="food-con">
                            <div className="row-con">
                                <img src={mouse} alt="" className="food" />
                                <h3 className="num">88</h3>
                            </div>
                            <p className="sub-text">HAWK FOOD</p>
                        </div>
                        <div className="food-con">
                            <div className="row-con">
                                <img src={mouse} alt="" className="food" />
                                <h3 className="num">88</h3>
                            </div>
                            <p className="sub-text">HAWK FOOD</p>
                        </div>
                    </div>
                    <div className="feed-mascot">
                        <span className="food-info"></span>
                        <span className="round-food-info">Feed the Mascot</span>
                    </div>
                </div>
            </section>
        </>
    );
}
