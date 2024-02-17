//See mascot in AR moving around
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider.jsx";
import jjayImage from "../assets/jjay.png";
export default function Home() {
    const { user } = useAuth();
    const navigate = useNavigate();
    return (
        <>
            <section className="homeScreen">
                {/* <img src="../assets/Icon.png" alt="Protagonist's Logo" /> */}
                <div className="col-container">
                    <div className="upper-sec">
                        <div className="row-container">
                            <div className="col-con">
                                <h2 className="h2">Quests</h2>
                                <div className="line-2"></div>
                            </div>
                            <div className="col-con">
                                <h2 className="h2">Profile</h2>
                                <div className="line-1"></div>
                            </div>
                        </div>

                        <div className="col-start">
                            <h1 className="h1">Welcome, {user.username}</h1>
                            <button
                                className="button"
                                onClick={() => navigate("/mascot")}
                            >
                                Feed me!
                            </button>
                        </div>

                        <div className="amount-fed">
                            <div className="absolute">
                                <p className="small-text">Amount fed today</p>

                                <img
                                    src={jjayImage}
                                    alt=""
                                    type="image"
                                    className="image"
                                />
                            </div>

                            <div id="myProgress">
                                <div id="myBar"></div>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => navigate("/profile")}>
                        mascot stats
                    </button>
                </div>
                <div className="navbar">
                    <div className="row-container">
                        <div className="test">test</div>
                        <div className="test">test</div>
                    </div>
                </div>
            </section>
        </>
    );
}
