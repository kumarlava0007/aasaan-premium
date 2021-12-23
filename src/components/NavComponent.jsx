import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/nav.css';
import logo from '../images/AasaanPremiumLogo.png';
import hamAsaanLogo from '../images/ham-logo.png';
import LoginContext from '../Context';
import {CgMenu} from 'react-icons/cg'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'


export default function NavComponent() {
    const islogIn=localStorage.getItem("isLoggedIn");
    const isLogged=React.useContext(LoginContext)['isLogged'];
    const setLogged=React.useContext(LoginContext)['setLogged'];
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 3
            }}
        />
    );
    const closeHamMenu = () => setOpen(false);
    const [hamburgeropen, sethamburgerOpen] = React.useState(false);
    const [open, setOpen] = useState(false);
    const hamLinks = <div className="hamLinks">       
                        <ColoredLine color="#5b4cfa" />            
                        <Link to="/insurance" ><p onClick={() => setOpen(!open)}>Insurance</p></Link>
                        <Link to="/getAQuote"><p onClick={() => setOpen(!open)}>Get a Quote</p></Link>
                        <Link to="/payabill" ><p onClick={() => setOpen(!open)}>Pay a Bill</p></Link>
                        <Link to="/claims" ><p onClick={() => setOpen(!open)}>Claims</p></Link>
                        <Link to="/findAnAgent" ><p onClick={() => setOpen(!open)}>Find an Agent</p></Link>
                        <Link to="/about" ><p onClick={() => setOpen(!open)}>About</p></Link>
                    </div>

    const hamOpenIcon = <div className='hamButton'>  
                            <Link to="/"><img src={hamAsaanLogo} alt="logo" className="ham-logo"/></Link>
                            <CgMenu size='40px' color='#5b4cfa' onClick={() => setOpen(!open)}/>
                        </div>
    const hamCloseIcon = <div className='hamButton'>  
                            <BsFillArrowRightCircleFill size='30px' color='#5b4cfa' onClick={() => setOpen(!open)}/>
                            <Link to="/"><img src={hamAsaanLogo} onClick={() => setOpen(!open)} alt="logo" className="ham-logo"/></Link>
                        </div>
    
    return (
        <>
        <div className='showHide'>
            <div className="hamburger" color='white'>    
                { open ? hamCloseIcon : hamOpenIcon}           
                { open && hamLinks}   
                <div className="hamburgerContent">     
                </div>
            </div>

            <div className="containerOne">
                <div className="boxOne">
                        <div className="first-boxOne">
                            {isLogged ? <Link to="#"><img src={logo} alt="logo" className="nav-logo"/></Link> : <Link to="/"><img src={logo} alt="logo" className="nav-logo"/></Link>}
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
            </div>                
        </>
    )
}
