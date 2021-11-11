import React from 'react';
import '../../styles/firstSection.css';

export default function FirstSectionComponent() {
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
                    <button className="linksTwo">Know more</button>
                    </div>
                </div>
            </div>
            <div className="firstSection-main-two">
                <div className="firstSection-main-two-container">
                    <div className="two-container-cards">
                        <div className="cards-card"></div>
                        <div className="cards-card"></div>
                        <div className="cards-card"></div>
                        <div className="cards-card"></div>
                        <div className="cards-card"></div>
                        <div className="cards-card"></div>
                        <div className="cards-card"></div>
                        <div className="cards-card"></div>
                        <div className="cards-card"></div>
                        <div className="cards-card"></div>
                        <div className="cards-card"></div>
                        <div className="cards-card"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
