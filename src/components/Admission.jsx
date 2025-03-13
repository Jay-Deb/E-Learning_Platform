import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

const Admission = () => {
    return (
        <>
            <Menu />

            {/* Hero Section with Banner */}
            <div className="hero-banner">
                <h1 className="hero-text">Transform Your Career with Our E-Learning Platform</h1>
                <p className="hero-subtext">
                    Enroll in industry-leading courses and gain hands-on experience to succeed in your career.
                </p>
                <button
                    className="btn btn-primaryAdmission"
                    data-bs-toggle="modal"
                    data-bs-target="#admissionModal"
                >
                    Apply Now
                </button>
            </div>

            {/* Why Choose Us Section */}
            <section className="why-choose">
                <h2 className="section-heading">Why Choose Our E-Learning Platform?</h2>
                <div className="features-container">
                    <div className="feature-box">
                        <h4>Expert Instructors</h4>
                        <p>Learn from industry professionals with real-world experience.</p>
                    </div>
                    <div className="feature-box">
                        <h4>Flexible Learning</h4>
                        <p>Access courses anytime, anywhere, at your own pace.</p>
                    </div>
                    <div className="feature-box">
                        <h4>Industry Certification</h4>
                        <p>Get certified and boost your job opportunities.</p>
                    </div>
                    <div className="feature-box">
                        <h4>Hands-on Projects</h4>
                        <p>Work on live projects to gain practical experience.</p>
                    </div>
                </div>
            </section>

            {/* Bootstrap Modal for Admission Form */}
            <div className="modal fade" id="admissionModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Admission Form</h5>
                            <button type="button"
                                    className="btn-close-custom"
                                    data-bs-dismiss="modal"
                                    aria-label="Close">
                                    <i className="fas fa-times"></i>
                            </button>

                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input type="tel" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Course Interested In</label>
                                    <select className="form-select" required>
                                        <option>Full Stack Development</option>
                                        <option>Data Science & AI</option>
                                        <option>Cyber Security</option>
                                        <option>Cloud Computing</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-success w-100">
                                    Submit Application
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Admission;