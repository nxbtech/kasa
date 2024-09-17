import '../styles/footer.scss';
import FooterLogo from '../img/footer-logo.png';

function Footer() {
    return (
        <div className="footer">
            <img className="footer__logo" src={FooterLogo} alt="Logo-footer" /> {/* Affichage correct du logo */}
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer;