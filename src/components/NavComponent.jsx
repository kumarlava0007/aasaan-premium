import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';
import logo from '../images/AasaanPremiumLogo.png';
import LoginContext from '../Context';
export default function NavComponent() {
    const islogIn=localStorage.getItem("isLoggedIn");
    const isLogged=React.useContext(LoginContext)['isLogged'];
    const setLogged=React.useContext(LoginContext)['setLogged'];
    return (
        <>
            <div className="containerOne">
                <div className="boxOne">
                    <div className="first-boxOne">
                        {isLogged ?                                 <Link to="#"><img src={logo} alt="logo" className="nav-logo"/></Link> :                         <Link to="/"><img src={logo} alt="logo" className="nav-logo"/></Link>}
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
                        {isLogged?<Link to="/login"
                         onClick={()=>setLogged(false)} className="linksTwo"><strong>&emsp;&emsp;LogOut&emsp;&emsp;</strong></Link> : <Link to="/login" className="linksTwo"><strong>&nbsp;LogIn / SignUp&nbsp;</strong></Link>}
                    </div>
                </div>
            </div>
        </>
    )
}
