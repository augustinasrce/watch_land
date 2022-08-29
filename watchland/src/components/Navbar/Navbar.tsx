import { FC, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

interface NavbarProps {
  isAuthenticated: boolean;
}
const Navbar: FC<NavbarProps> = ({ isAuthenticated }) => {
  const [selected, setSelected] = useState<String | undefined>(undefined);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="logo">Logo</div>
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
