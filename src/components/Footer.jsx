import logoFooter from "../assets/LOGO_KASA_FOOTER.png";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="Kasa logo" className="footer__logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
