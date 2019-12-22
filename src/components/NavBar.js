import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="main-links">
        <Link exact to="/">
          Home
        </Link>
        <Link to="/about">About Us</Link>
        <Link to="/newsletter">Newsletter</Link>
        <Link to="/music">Music</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/teamblogs">Team Blogs</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="sign-up">
        <Link to="/signup">SIGN UP</Link>
      </div>
    </div>
  );
};
export default NavBar;
