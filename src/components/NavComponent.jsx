import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';
import logo from '../images/AasaanPremiumLogo.png';

export default function NavComponent() {
    return (
        <div>
            <div className="containerOne">
                <div className="box">
                    <div className="first-box">
                        <Link to="/"><img src={logo} alt="logo" className="nav-logo"/></Link>
                        <div className="navContent">
                            <Link to="/insurance" class="hover-me linksOne"><h4>Insurance</h4></Link>
                            <Link to="/getAQuote" class="hover-me linksOne"><h4>Get a Quote</h4></Link>
                            <Link to="/payabill" class="hover-me linksOne"><h4>Pay a Bill</h4></Link>
                            <Link to="/claims" class="hover-me linksOne"><h4>Claims</h4></Link>
                            <Link to="/findAnAgent" class="hover-me linksOne"><h4>Find an Agent</h4></Link>
                            <Link to="/about" class="hover-me linksOne"><h4>About</h4></Link>
                        </div>
                    </div>
                    <div class="second-box">
                        <Link to="./signIn" className="linksTwo"><strong>Sign Up</strong></Link>
                    </div>
                </div>
                <hr class="line"/>
            </div>
        </div>
    )
}
