import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cloudDisconnect } from "../../redux/reducers/auth";
import { RootState } from "../../redux/store";
import * as Auth from "../../redux/actions/authActions";
import "./Navbar.scss";

interface NavbarProps {
  isAuthenticated: boolean;
}
const Navbar = ({ isAuthenticated }: NavbarProps) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => {
    return state.auth.current != null;
  });

  const [selected, setSelected] = useState<String | undefined>(undefined);

  const handleLogout = (e: any) => {
    e.preventDefault();
    dispatch(cloudDisconnect(Auth.Logout));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
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
              <li className="nav-item">
                {isAuth ? (
                  <Link className="nav-link" to="/aws" onClick={e => handleLogout(e)}>
                    Logout
                  </Link>
                ) : (
                  <Link className="nav-link" to="/aws">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
