import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [selected, setSelected] = useState<string | undefined>(undefined);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            WatchLand 1.0
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  className={selected === "aws" ? "nav-link active" : "nav-link"}
                  to="/aws/"
                  onClick={() => setSelected("aws")}
                >
                  AWS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={selected === "azure" ? "nav-link active" : "nav-link"}
                  to="/azure/"
                  onClick={() => setSelected("azure")}
                >
                  Azure
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={selected === "google" ? "nav-link active" : "nav-link"}
                  to="/google/"
                  onClick={() => setSelected("google")}
                >
                  Google Cloud
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
