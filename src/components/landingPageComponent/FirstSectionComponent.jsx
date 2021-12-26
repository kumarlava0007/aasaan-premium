
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/firstSection.css';
import { Data } from './Data';

export default function FirstSectionComponent() {

    const itemData = Data.map((item)=>{
        return(
            <div className="cards-card">
                <i class={item.class}></i>
                <p style={{paddingTop: "10px"}}>{item.p1}</p>
                <p style={{marginTop: "-10px"}}>{item.p2}</p>
            </div>           
        )
    })
  
    return (
        <div className="firstSection-main">
            <div className="firstSection-main-one">
                <div className="firstSection-main-one-first">
                    <p className="first-heading">Let's find you <br />the <strong>Best Insurance</strong></p>
                    <div>
                        <div className="firstSection-combIconTxt">
                        <i class="fas fa-infinity one"></i>
                        <p className="blue-txt">50+ insurers with one <br />of the best prices</p>
                        </div>
                        <div className="firstSection-combIconTxt">
                        <i class="fas fa-bolt two"></i>
                        <p className="orange-txt">Quick, easy &  <br /> hassle free</p>
                        </div>
                    </div>
                </div>
                <div className="firstSection-main-one-second">
                    <i class="far fa-handshake fa-7x first-section-img"></i>
                    <div>
                    <h4>A commitment <br /> to our customers</h4>
                    <Link to="/insurance"><button className="second-button">Know more</button></Link>
                    </div>
                </div>
            </div>
         
            <div className="firstSection-main-two">
                <div className="two-container-cards">
                        {itemData}
                </div>
            </div>
            
        </div>
    )
}
