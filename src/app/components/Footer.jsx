import logo from '../../essets/qC02fVRBQUSRGS9NYCpHrA.webp';
import { Link } from "react-router-dom";
import '../../styles/Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>

            <div className="info">
                <div className="contact">
                    <ul>
                        <li>Contact us</li>
                        <li>Tel: 095-111-11-11</li>
                        <li>Email: malysh@gmail.com</li>
                        <div className="social-icons">
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram"
                                     className="social-icon"/>
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook.png" alt="Facebook"
                                     className="social-icon"/>
                            </a>
                            <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/ios-filled/50/ffffff/telegram-app.png" alt="Telegram"
                                     className="social-icon"/>
                            </a>
                            <a href="mailto:malysh@gmail.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/ios-filled/50/ffffff/email.png" alt="Email"
                                     className="social-icon"/>
                            </a>
                        </div>

                    </ul>
                </div>
                <div className="links">
                    <ul>
                        <li>
                            <Link to="product/:id">Product</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                        <li>
                            <Link to="/favorites">Favorites</Link>
                        </li>
                        <li>
                            <Link to="/auth">Auth</Link>
                        </li>
                    </ul>
                </div>

            </div>
            <p> "© 2025 Olesya-ok. Все права защищены."</p>
        </div>
    );
}

export default Footer;
