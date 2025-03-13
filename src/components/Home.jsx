import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <Menu />

            {/* Hero Section */}
            <div className="hero-section">
                <h1>Unlock Your Potential with Educare</h1>
                <p>Join thousands of learners and industry experts. Learn, practice and grow.</p>
                <NavLink to="/courses" className="btn-primary">Explore Courses</NavLink>
            </div>

            {/* Featured Courses Section */}
            <div className="featured-courses">
                <h2>Popular Courses</h2>
                <div className="course-list">
                    <div className="course-card">
                        <h3>Full Stack Web Development</h3>
                        <p>Learn React, Node.js, MongoDB & more.</p>
                    </div>
                    <div className="course-card">
                        <h3>Data Science & AI</h3>
                        <p>Master Python, Machine Learning & Deep Learning.</p>
                    </div>
                    <div className="course-card">
                        <h3>Cyber Security & Ethical Hacking</h3>
                        <p>Protect systems and networks like a pro.</p>
                    </div>
                </div>
                <NavLink to="/courses" className="btn-secondary">View All Courses</NavLink>
            </div>

            {/* Why Choose Us Section */}
            <div className="why-choose-us">
                <h2>Why Choose Educare?</h2>
                <ul>
                    <li>✔ Industry-expert instructors</li>
                    <li>✔ Hands-on projects & live coding</li>
                    <li>✔ Internship & placement support</li>
                    <li>✔ Certification on completion</li>
                </ul>
            </div>

            {/* Call to Action */}
            <div className="cta-section">
                <h2>Start Your Learning Journey Today!</h2>
                <NavLink to="/contact" className="btn-primary">Get Started</NavLink>
            </div>

            <Footer />
        </>
    );
};

export default Home;