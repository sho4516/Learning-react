import { LOGO_URL } from "../utils/constants";

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
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
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
