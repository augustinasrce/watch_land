import { FC, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

interface NavbarProps {
  isAuthenticated: boolean;
}
const Navbar: FC<NavbarProps> = ({ isAuthenticated }) => {
  const [selected, setSelected] = useState<String | undefined>(undefined);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">WatchLand 1.0</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">     
            <li className="nav-item">
              <Link
                className={selected === "aws" ? "nav-link active" : "nav-link"}
                to="/aws/groups/"
                onClick={() => setSelected("aws")}
              >AWS</Link>
            </li>
            <li className="nav-item">
              <Link
                className={selected === "azure" ? "nav-link active" : "nav-link"}
                to="/azure/groups/"
                onClick={() => setSelected("azure")}
              >Azure</Link>
            </li>
            <li className="nav-item">
              <Link
                className={selected === "google" ? "nav-link active" : "nav-link"}
                to="/google/groups/"
                onClick={() => setSelected("google")}
              >Google Cloud</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;