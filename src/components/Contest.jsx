import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

const Contest = () => {
    return (
        <>
            <Menu />

            {/* Contest Page Banner */}
            <div className="contest-banner">
                <h1 className="contest-title">Join Exciting Contests & Hackathons!</h1>
                <p className="contest-subtitle">Sharpen your skills, compete with the best, and win amazing prizes.</p>
            </div>

            {/* Ongoing & Upcoming Contests */}
            <div className="contest-container">
                <h2 className="contest-heading">Ongoing & Upcoming Contests</h2>

                <div className="contest-list">
                    <div className="contest-card">
                        <h3>Code Sprint 2025</h3>
                        <p>A competitive coding contest for problem solvers. Win exciting prizes!</p>
                        <p><strong>📅 Date:</strong> March 15, 2025</p>
                        <button className="contest-btn">Register Now</button>
                    </div>

                    <div className="contest-card">
                        <h3>AI Hackathon</h3>
                        <p>Build AI-driven solutions in a 24-hour hackathon.</p>
                        <p><strong>📅 Date:</strong> April 10, 2025</p>
                        <button className="contest-btn">Register Now</button>
                    </div>
                </div>

                <hr className="contest-divider" />

                {/* Past Contests */}
                <h2 className="contest-heading">Past Contests</h2>

                <div className="contest-list">
                    <div className="past-contest">
                        <h3>Web Dev Challenge</h3>
                        <p>A frontend & backend development contest held in Jan 2025.</p>
                        <p>🏆 <strong>Winner:</strong> John Doe</p>
                    </div>

                    <div className="past-contest">
                        <h3>Cyber Security CTF</h3>
                        <p>A Capture The Flag (CTF) contest held in Dec 2024.</p>
                        <p>🏆 <strong>Winner:</strong> Alice Smith</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Contest;