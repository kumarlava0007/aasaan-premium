import React from 'react';
import '../../styles/firstSection.css';

export default function FirstSectionComponent() {
    return (
        <div className="firstSection-main">
            <div className="firstSection-main-one">
                <div className="firstSection-main-one-first">
                    <h1>Let's find you <br />the Best Insurance</h1>
                    <div>
                        <h5>50+ insurers with one <br />of the best prices</h5>
                        <h5>Quick, easy &  <br /> hassle free</h5>
                    </div>
                    <i class="fab fa-500px"></i>
                </div>
                <div className="firstSection-main-one-second">
                    {/* <img src="https://static.pbcdn.in/cdn/images/home-v1/pb-promise-new.png" alt="photo" /> */}
                    <img src="https://zoozoosolutions.com/wp-content/uploads/2020/05/pngwave-7-4.png" alt="image"/>
                    <h2>A commitment <br /> to our customers</h2>
                </div>
            </div>
            <div className="firstSection-main-two">
                <div className="cardsOne">
                    <div className="cards">
                        <h2 className="words">
                        Business Insurance
                        </h2>
                    </div>
                    <div className="cards">
                        <h2 className="words">
                        Individual Insurance
                        </h2>
                    </div>
                    <div className="cards">
                        <h2 className="words">
                        Property Insurance
                        </h2>
                    </div>
                </div>
                <div className="cardsTwo">
                    <div className="cards">
                            <h2 className="words">
                            Auto Insurance
                            </h2>
                        </div>
                        <div className="cards">
                            <h2 className="words">
                            Life Insurance
                            </h2>
                        </div>
                </div>
            </div>
        </div>
    )
}
