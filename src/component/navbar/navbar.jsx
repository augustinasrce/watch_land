import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/aws">AWS</Link>
      <Link to="/azure">Azure</Link>
      <Link to="/google">Google Cloud</Link>
    </nav>
  );
};

export default Navbar;
