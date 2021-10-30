import React from 'react';
import '../../styles/firstSection.css';

export default function FirstSectionComponent() {
    return (
        <div className="firstSection-main">
            <div className="firstSection-main-one">
                <div className="firstSection-main-one-first">
                    <h2>Let's find you <br />the <strong>Best Insurance</strong></h2>
                    <div>
                        <p>50+ insurers with one <br />of the best prices</p>
                        <p>Quick, easy &  <br /> hassle free</p>
                        <i class="fal fa-box-check"></i>
                    </div>
                </div>
                <div className="firstSection-main-one-second">
                    {/* <img src="https://static.pbcdn.in/cdn/images/home-v1/pb-promise-new.png" alt="photo" /> */}
                    <img src="https://zoozoosolutions.com/wp-content/uploads/2020/05/pngwave-7-4.png" alt="image" className="first-section img"/>
                    <div>
                    <h4>A commitment <br /> to our customers</h4>
                    <button className="linksTwo">Know more</button>
                    </div>
                </div>
            </div>
            <div className="firstSection-main-two">
                <div className="firstSection-cardsOne">
                    <div className="firstSection-cards">
                        <h3 className="firstSection-words">
                        Business Insurance
                        </h3>
                        <h5>
                            asjhfkjdhsfjhjk
                        </h5>
                    </div>
                    <div className="firstSection-cards">
                        <h3 className="firstSection-words">
                        Individual Insurance
                        </h3>
                    </div>
                    <div className="firstSection-cards">
                        <h3 className="firstSection-words">
                        Property Insurance
                        </h3>
                    </div>
                </div>
                <div className="firstSection-cardsTwo">
                    <div className="firstSection-cards">
                            <h3 className="firstSection-words">
                            Auto Insurance
                            </h3>
                        </div>
                        <div className="firstSection-cards">
                            <h3 className="firstSection-words">
                            Life Insurance
                            </h3>
                        </div>
                </div>
            </div>
        </div>
    )
}
