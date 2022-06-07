import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="logo">Logo</span>
      <Link className="navlink" to="/aws">
        AWS
      </Link>
      <Link className="navlink" to="/azure">
        Azure
      </Link>
      <Link className="navlink" to="/google">
        Google Cloud
      </Link>
    </nav>
  );
};

export default Navbar;
