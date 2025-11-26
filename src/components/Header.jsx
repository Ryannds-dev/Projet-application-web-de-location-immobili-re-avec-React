import { NavLink } from "react-router-dom";
import logo from "../assets/LOGO_KASA_1440.png";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img className="header__logo" src={logo} alt="Kasa logo" />
      </NavLink>

      <nav className="header__nav">
        <NavLink to="/" className="header__link">
          Accueil
        </NavLink>

        <NavLink to="/a-propos" className="header__link">
          À propos
        </NavLink>
      </nav>
    </header>
  );
}
