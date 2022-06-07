import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [selected, setSelected] = useState();

  return (
    <nav className="navbar">
      <span className="logo">Logo</span>
      <Link
        className={selected === "aws" ? "navlink selected" : "navlink"}
        to="/aws"
        onClick={() => setSelected("aws")}
      >
        AWS
      </Link>
      <Link
        className={selected === "azure" ? "navlink selected" : "navlink"}
        to="/azure"
        onClick={() => setSelected("azure")}
      >
        Azure
      </Link>
      <Link
        className={selected === "google" ? "navlink selected" : "navlink"}
        to="/google"
        onClick={() => setSelected("google")}
      >
        Google Cloud
      </Link>
    </nav>
  );
};

export default Navbar;
