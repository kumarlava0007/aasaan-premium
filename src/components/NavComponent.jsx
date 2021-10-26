import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';
import logo from '../images/AasaanPremiumLogo.png';

export default function NavComponent() {
    return (
        <div>
            <div className="containerOne">
                <div className="boxOne">
                    <div className="first-boxOne">
                        <Link to="/"><img src={logo} alt="logo" className="nav-logo"/></Link>
                        <div className="navContent">
                            <Link to="/insurance" class="linksOne"><h6>Insurance</h6></Link>
                            <Link to="/getAQuote" class="linksOne"><h6>Get a Quote</h6></Link>
                            <Link to="/payabill" class="linksOne"><h6>Pay a Bill</h6></Link>
                            <Link to="/claims" class="linksOne"><h6>Claims</h6></Link>
                            <Link to="/findAnAgent" class="linksOne"><h6>Find an Agent</h6></Link>
                            <Link to="/about" class="linksOne"><h6>About</h6></Link>
                        </div>
                    </div>
                    <div class="second-boxOne">
                        <Link to="./signIn" className="linksTwo"><strong>Sign Up</strong></Link>
                    </div>
                </div>
                <hr className="line"/>
            </div>
        </div>
    )
}
