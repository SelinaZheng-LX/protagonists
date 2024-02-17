//See mascot in AR moving around
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider.jsx";

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
                            <h2 className="h2">Quests</h2>
                            <h2 className="h2">Profile</h2>
                        </div>
                        <h1 className="h1">Welcome, {user.username}</h1>
                        <button
                            className="button"
                            onClick={() => navigate("/mascot")}
                        >
                            Feed me!
                        </button>
                        <div className="amount-fed">
                            <p className="small-text">Amount fed today</p>
                            <span className="placeholder-progress"></span>
                        </div>
                    </div>
                    <button onClick={() => navigate("/profile")}>
                        mascot stats
                    </button>
                </div>
            </section>
        </>
    );
}
