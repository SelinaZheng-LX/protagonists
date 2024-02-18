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
                            <h1 className="h1">Welcome, {user.name}</h1>
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
                    <div className="middleSec">
                        <div className="row-between">
                            <h2 className="sub-title">Daily Quests</h2>
                            <p className="time">24 hours</p>
                        </div>
                        <div className="quest-chart">
                            <div className="quest">
                                <h3 className="quest-names">Daily Sign In</h3>
                            </div>
                            <div className="quest">
                                <h3 className="quest-names">
                                    Read your emails
                                </h3>
                            </div>
                            <div className="no-border">
                                <h3 className="quest-names">
                                    Study for 30 minutes
                                </h3>
                            </div>
                        </div>
                        <div className="row-between">
                            <h2 className="sub-title">Monthly Quests</h2>
                            <p className="time">24 hours</p>
                        </div>
                        <div className="quest-chart">
                            <div className="quest">
                                <h3 className="quest-names">
                                    Apply to an internship
                                </h3>
                            </div>
                            <div className="quest">
                                <h3 className="quest-names">
                                    Update your resume
                                </h3>
                            </div>
                            <div className="no-border">
                                <h3 className="quest-names">
                                    Go to a networking event
                                </h3>
                            </div>
                        </div>
                        <span className="nav-account"></span>
                    </div>
                    {/* <button onClick={() => navigate("/profile")}>
                        mascot stats
                    </button> */}
                    <div className="bottom-nav" id="bottomNav">
                        <a href="#" className="nav-icon">
                            &#x1F3E0;
                        </a>
                        <a href="#" className="nav-icon">
                            &#x1F4D8;
                        </a>
                        <div className="center-button">&#x2713;</div>
                        <a href="#" className="nav-icon">
                            &#x1F4B8;
                        </a>
                        <a href="#" className="nav-icon">
                            &#x1F310;
                        </a>
                    </div>
                    {/* <div className="bottom-nav" id="bottomNav">
                        <a
                            onClick={() => navigate("/profile")}
                            className="active"
                        >
                            Home
                        </a>
                        <a onClick={() => navigate("/profile")}>About</a>
                        <a onClick={() => navigate("/profile")}>Contact</a>
                    </div> */}
                </div>
            </section>
        </>
    );
}
