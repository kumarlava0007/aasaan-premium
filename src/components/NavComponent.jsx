import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';
import logo from '../images/AasaanPremiumLogo.png';
export default function NavComponent() {
    return (
        <>
            <div className="containerOne">
                <div className="boxOne">
                    <div className="first-boxOne">
                        <Link to="/"><img src={logo} alt="logo" className="nav-logo"/></Link>
                        <div className="navContent">
                            <Link to="/insurance" className="linksOne"><p>Insurance</p></Link>
                            <Link to="/getAQuote" className="linksOne"><p>Get a Quote</p></Link>
                            <Link to="/payabill" className="linksOne"><p>Pay a Bill</p></Link>
                            <Link to="/claims" className="linksOne"><p>Claims</p></Link>
                            <Link to="/findAnAgent" className="linksOne"><p>Find an Agent</p></Link>
                            <Link to="/about" className="linksOne"><p>About</p></Link>
                        </div>
                    </div>
                    <div class="second-boxOne">
                        <Link to="/login" className="linksTwo"><strong>LogIn / SignUp</strong></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
