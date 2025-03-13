import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

const ContactUs = () => {
    return (
        <>

        <Menu />
        
        <div className="contact-container">
            <h2>Contact Us</h2>
            <div className="contact-content">
                {/* Google Map */}
                <div className="map-container">
                <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14731.399576084172!2d88.31714914909607!3d22.622079871300798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d526c8cf06b%3A0xff2b1b31bafcd275!2sBhatta%20Nagar%2C%20Liluah%2C%20Howrah%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1739463305189!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: "0", borderRadius: "10px" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Contact Details */}
                <div className="contact-details">
                    <h3>Get in Touch</h3>
                    <p><strong>Name:</strong> Jay Deb</p>
                    <p><strong>Email:</strong> jaydeb72004@gmail.com</p>
                    <p><strong>Phone:</strong> +91 7439457221</p>
                    <p><strong>Address:</strong> Howrah, India</p>
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default ContactUs;