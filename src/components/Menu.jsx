import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="menu">
      <div className="menu-container">
        {/* Left Section: Logo & Title */}
        <div className="menu-left">
          <img
            src="https://t3.ftcdn.net/jpg/05/07/66/58/360_F_507665856_dFXIKJJ4SwROG0df8GNPBhqsZV44p6jn.jpg"
            alt="Educare Logo"
            className="menu-logo"
          />
          <span className="menu-title">Educare</span>
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        {/* Navigation Links */}
        <ul className={`menu-links ${isOpen ? "open" : ""}`}>
          <li><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link">About Us</NavLink></li>
          <li><NavLink to="/courses" className="nav-link">Courses</NavLink></li>
          <li><NavLink to="/contest" className="nav-link">Contest</NavLink></li>
          <li><NavLink to="/admission" className="nav-link">Admission</NavLink></li>
          <li><NavLink to="/contact" className="nav-link">Contact Us</NavLink></li>
        </ul>

        {/* Search Bar (Only Visible on Larger Screens) */}
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>🔍</button>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
