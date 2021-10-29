import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';
import logo from '../images/AasaanPremiumLogo.png';
import LoginPage from './userPage/LoginPage';
export default function NavComponent() {
    return (
        <>
            <div className="containerOne">
                <div className="boxOne">
                    <div className="first-boxOne">
                        <Link to="/"><img src={logo} alt="logo" className="nav-logo"/></Link>
                        <div className="navContent">
                            <Link to="/insurance" className="linksOne"><h6>Insurance</h6></Link>
                            <Link to="/getAQuote" className="linksOne"><h6>Get a Quote</h6></Link>
                            <Link to="/payabill" className="linksOne"><h6>Pay a Bill</h6></Link>
                            <Link to="/claims" className="linksOne"><h6>Claims</h6></Link>
                            <Link to="/findAnAgent" className="linksOne"><h6>Find an Agent</h6></Link>
                            <Link to="/about" className="linksOne"><h6>About</h6></Link>
                        </div>
                    </div>
                    <div class="second-boxOne">
                        <Link to="./signIn" className="linksTwo"><strong>LogIn/SignUp</strong></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
