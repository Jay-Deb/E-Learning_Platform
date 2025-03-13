import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

const About = () => {
    return (
        <>
            <Menu />

            {/* About Us Banner */}
            <div className="about-banner">
                <h1 className="about-title">About Us</h1>
                <p className="about-subtitle">Empowering students with real-world learning and career opportunities.</p>
            </div>

            {/* About Us Content */}
            <div className="about-container">
                <div className="about-intro">
                    <h2 className="about-heading">Welcome to Educare</h2>
                    <p className="about-text">
                        At <strong>Educare</strong>, we help BTech students gain industry exposure through 
                        internships, hands-on learning and expert mentorship.  
                        Our mission is to bridge the gap between academics and industry skills.
                    </p>
                </div>

                {/* Features Section */}
                <div className="about-features">
                    <div className="about-feature">
                        <h3>Internship Opportunities</h3>
                        <p>Explore industry-aligned internships tailored to your career goals.</p>
                    </div>
                    <div className="about-feature">
                        <h3>Skill-Based Learning</h3>
                        <p>Gain practical experience through real-world projects and coding challenges.</p>
                    </div>
                    <div className="about-feature">
                        <h3>Expert Mentorship</h3>
                        <p>Learn from industry professionals to accelerate your career growth.</p>
                    </div>
                    <div className="about-feature">
                        <h3>Tech Contests & Hackathons</h3>
                        <p>Participate in coding competitions and hackathons to sharpen your skills.</p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="about-cta">
                    <a href="/admission" className="about-btn">Join Educare</a>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default About;