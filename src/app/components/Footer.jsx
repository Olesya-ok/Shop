import logo from '../../essets/qC02fVRBQUSRGS9NYCpHrA.webp';
import {Link} from "react-router-dom";
import '../../styles/Footer.css';
import "../../App.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Footer({onAuthClick}) {
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
                            <a href="#" className="facebook"><FontAwesomeIcon icon={faFacebook}/></a>
                            <a href="#" className="instagram"><FontAwesomeIcon icon={faInstagram}/></a>
                            <a href="#" className="telegram"><FontAwesomeIcon icon={faTelegram}/></a>
                            <a href="#" className="email"><FontAwesomeIcon icon={faEnvelope}/></a>
                        </div>

                    </ul>
                </div>
                <div className="links">
                    <ul>
                        <li><Link to="product/:id">Product</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/favorites">Favorites</Link></li>
                        <li onClick={onAuthClick}>Auth</li>
                    </ul>
                </div>

            </div>
            <p> "© 2025 Olesya-ok. Все права защищены."</p>
        </div>
    );
}

export default Footer;
