import React from "react";
import { NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <ul>
                    <li><strong>Get to Know Us</strong></li>
                    <li><NavLink to={'/About'}>About Us</NavLink></li>
                    <li><NavLink to={'/Careers'}>Careers</NavLink></li>
                    <li><NavLink to={'/Press'}>Press Releases</NavLink></li>
                </ul>
                <ul>
                    <li><strong>Help</strong></li>
                    <li><NavLink to={'/FAQ'}>FAQ</NavLink></li>
                    <li><NavLink to={'/CustomerService'}>Customer Service</NavLink></li>
                    <li><NavLink to={'/Support'}>Support</NavLink></li>
                </ul>
                <ul>
                    <li><strong>Policies</strong></li>
                    <li><NavLink to={'/Privacy'}>Privacy Policy</NavLink></li>
                    <li><NavLink to={'/Terms'}>Terms of Service</NavLink></li>
                    <li><NavLink to={'/Refund'}>Refund Policy</NavLink></li>
                </ul>
                <ul>
                    <li><strong>Connect with Us</strong></li>
                    <li><a href="https://www.facebook.com/">Facebook</a></li>
                    <li><a href="https://twitter.com/">Twitter</a></li>
                    <li><a href="https://www.instagram.com/">Instagram</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Educare. All Rights Reserved.</p>
            </div>
        </footer>
    );
};
 
export default Footer;