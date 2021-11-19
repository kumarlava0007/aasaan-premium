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
                    <button className="second-button">Know more</button>
                    </div>
                </div>
            </div>
            <div className="firstSection-main-two">
                <div className="firstSection-main-two-container">
                    <div className="two-container-cards">
                        <div className="cards-card">
                        <i class="fas fa-umbrella cardsIcons"></i>
                        <p>Term Life <br />Insurance</p>
                        <div className="class-container">
                            
                        </div>
                        </div>
                        <div className="cards-card">
                        <i class="fas fa-heartbeat cardsIcons"></i>
                        <p>Health<br />Insurance</p>
                        <div className="class-container">
                            
                        </div>
                        </div>
                        <div className="cards-card">
                        <i class="fas fa-car cardsIcons"></i>
                        <p>Car<br />Insurance</p>
                        <div className="class-container">
                            
                        </div>
                        </div>
                        <div className="cards-card">
                        <i class="fas fa-motorcycle cardsIcons"></i>
                        <p>2 Wheeler<br />Insurance</p>
                        <div className="class-container">
                            
                        </div>
                        </div>
                        <div className="cards-card">
                        <i class="fas fa-users cardsIcons"></i>
                        <p>Family Health<br />Insurance</p>
                        <div className="class-container">
                            
                        </div>
                        </div>
                        <div className="cards-card">
                        <i class="fas fa-retweet cardsIcons"></i>
                        <p>Guaranteed<br />return Plan</p>
                        <div className="class-container">
                            
                        </div>
                        </div>
                        <div className="cards-card">
                        <i class="fas fa-suitcase-rolling cardsIcons"></i>
                        <p>Travel<br />Insurance</p>
                        <div className="class-container">
                            
                        </div>
                        </div>
                        <div className="cards-card">
                        <i class="fas fa-child cardsIcons"></i>
                        <p>Child Saving<br />Plans</p>
                        <div className="class-container">
                            
                        </div>
                        </div>
                        <div className="cards-card">
                        <i class="fas fa-hourglass-half cardsIcons"></i>
                        <p>Retirement<br />Plans</p>
                        <div className="class-container">
                            
                        </div>
                        </div>
                        <div className="cards-card">
                        <i class="fas fa-th-large cardsIcons"></i>
                        <p>View All<br />Products</p>
                        <div className="class-container">
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
