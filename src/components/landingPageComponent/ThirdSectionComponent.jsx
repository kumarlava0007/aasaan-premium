import React from 'react'
import twoWom from '../../images/twoWom.png';
import { Link } from 'react-router-dom';
import '../../styles/thirdSection.css';
export default function ThirdSectionComponent() {
    return (
        <div>
            <div className="main-two">

                <div className="container-two">
                    <h1 className="headingTwo"><strong>Why pick Aasaan Insurance for your insurance needs?</strong></h1>

                    <div className="content">
                        <img src={twoWom} alt="twoWom" className="thirdSectionImg" />
                        <div className="content-desc">
                            <h2><strong>When stuff happens, we’re there for you around the clock.</strong></h2>
                            <br />
                            <h4>And with 19,000 agents across the country, feel free to  talk to an agent near your neighborhood.
                                <br />
                                We offer a wide range of products to help protect what you worked so hard to build.
                            </h4>
                            <br />
                            <Link className="a-one" to="/insurance">View insurance</Link>
                        </div>
                    </div>
                    <br /><br />
                </div>
            </div>

            <div className="main-three">
                <h1 className="headingTwo"><strong>Core differentiators that define our business</strong></h1>
                <div className="imgs">
                    <div className="core">
                        <img src="https://sme.icicilombard.com/assetsSME/images/strong-brand-equitry.png" alt="1" />
                        <h3>Strong <br /> Brand Equity</h3>
                    </div>
                    <div className="core">
                        <img src="https://sme.icicilombard.com/assetsSME/images/extensive-distribution-network.png" alt="2" />
                        <h3>Extensive <br />
                            Service Network
                        </h3>
                    </div>
                    <div className="core">
                        <img src="https://sme.icicilombard.com/assetsSME/images/comprehensive-product-portfolio.png" alt="3" />
                        <h3>Comprehensive <br />
                            Product Portfolio</h3>
                    </div>
                    <div className="core">
                        <img src="https://sme.icicilombard.com/assetsSME/images/technology-differentiation.png" alt="4" />
                        <h3>Technology <br />
                            Differentiation</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
