import React, { FC, useState } from 'react';
import {Link } from 'react-router-dom'
import { getProviderGroups } from '../../services/services';
import { ProviderTypes } from '../../utils/enum'
import './Navbar.scss';

interface Service {
  provider: string
}

interface MyService extends Service  {
  myservice : typeof getProviderGroups[]
}
interface NavbarProps{
  isAuthenticated:boolean
}
const Navbar: FC<NavbarProps > = ({isAuthenticated}) => {
  const [selected, setSelected] = useState<String | null>(null);

  return (
    <nav className="navbar">
      <span className="logo">Logo</span>
      { isAuthenticated ? ([
        <Link
        className={selected === "aws" ? "navlink selected" : "navlink"}
        to="/aws"
        onClick={() => setSelected("aws")}
      >
        AWS
      </Link>,
      <Link
        className={selected === "azure" ? "navlink selected" : "navlink"}
        to="/azure"
        onClick={() => setSelected("azure")}
      >
        Azure
      </Link>,
      <Link
        className={selected === "google" ? "navlink selected" : "navlink"}
        to="/google"
        onClick={() => setSelected("google")}
      >
        Google Cloud
      </Link>
      ]) : null}
      
    </nav>
  );
};

export default Navbar;
