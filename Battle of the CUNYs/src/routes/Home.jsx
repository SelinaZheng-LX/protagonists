//See mascot in AR moving around
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider.jsx";
import jjayImage from "../assets/jjay.png";
import mail from "../assets/mail.png";
import book from "../assets/book.png";
import daily from "../assets/daily.png";
import pen from "../assets/pen.png";
import paper from "../assets/paper.png";
import person from "../assets/person.png";

import supabase from "../config/supabaseClient.js";
export default function Home() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const getReward = (e) => {
        e.preventDefault();
        user.foodAmount += 1;
        console.log(user.foodAmount);
    };

    useEffect(() => {
        const updatePlayer = async () => {
            const { data, error } = await supabase
                .from("Player")
                .update({ foodAmount: user.foodAmount })
                .eq("email", user.email)
                .single();

            if (error) {
                console.log(error);
            }
            if (data) {
                console.log("he liked it!");
                console.log(user.foodAmount);
            }
        };

        updatePlayer();
    }, [user.foodAmount]);

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
                            <div className="quest" onClick={getReward}>
                                <img src={daily} alt="" className="icon" />
                                <h3 className="quest-names">Daily Sign In</h3>
                            </div>
                            <div className="quest">
                                <img src={mail} alt="" className="icon" />
                                <h3 className="quest-names">
                                    Read your emails
                                </h3>
                            </div>
                            <div className="no-border">
                                <img src={book} alt="" className="icon" />
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
                                <img src={pen} alt="" className="icon" />
                                <h3 className="quest-names">
                                    Apply to an internship
                                </h3>
                            </div>
                            <div className="quest">
                                <img src={paper} alt="" className="icon" />
                                <h3 className="quest-names">
                                    Update your resume
                                </h3>
                            </div>
                            <div className="no-border">
                                <img src={person} alt="" className="small-icon"/>
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
                        <a href="#">
                            <img src={person} alt="" className="small-icon" />
                        </a>
                        <a href="#">
                            <img src={mail} alt="" className="icon" />
                        </a>
                        <div className="center-button">
                            <a onClick={() => navigate("/mascot")}>&#x2713;</a>
                        </div>
                        <a href="#">
                            <img src={pen} alt="" className="icon" />
                        </a>
                        <a href="#">
                            <img src={book} alt="" className="icon" />
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
