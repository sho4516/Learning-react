import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const HeaderLogo = () => {
  return (
    <div className="logo-container">
      <img className="logo" src={LOGO_URL} alt=""></img>
    </div>
  );
};

const HeaderNavItems = () => {
  return (
    <div className="nav-items">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <HeaderLogo />
      <HeaderNavItems />
    </div>
  );
};

export default Header;
