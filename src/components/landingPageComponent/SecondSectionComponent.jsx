import React from 'react'
import '../../styles/css/bootstrap.css';
// import '../../styles/csss/fontawesome-all.min.css';
import '../../styles/css/hover.css';
// import '../../styles/css/style.css';
import '../../styles/css/timeline.css';

export default function SecondSectionComponent() {
    return (
        <div>
            <div class="agile-works py-5" id="work">
                <div class="container py-lg-5">
                    <div class="title-section pb-4">
                        <h1 className="side-heading headingTwo"><strong>How it works?</strong></h1>
                        <span class="title-line">
                        </span>
                    </div>
                    <div class="row py-md-5 pt-5">
                        <div class="col-md-12">
                            <div class="main-timeline2">
                                <div class="timeline">
                                    <span class="icon fa fa-globe"></span>
                                    <a href="#" class="timeline-content">
                                        <h3 class="title">Provide us your Details</h3>
                                        <p class="description">
                                            Your details are 100% safe and secure with us. 
                                            First step to get insured is to provide details about you and your background.
                                            In just 5 minutes you can fill your details and explore the services we provide.
                                             
                                        </p>
                                    </a>
                                </div>
                                <div class="timeline">
                                    <span class="icon fa fa-rocket"></span>
                                    <a href="#" class="timeline-content">
                                        <h3 class="title">Analysing the Information</h3>
                                        <p class="description">
                                            It is our job to keep you in the right direction that's why 
                                            we analyse your information and helps our customer to find their best interest.
                                        </p>
                                    </a>
                                </div>
                                <div class="timeline">
                                    <span class="icon fa fa-briefcase"></span>
                                    <a href="#" class="timeline-content">
                                        <h3 class="title">Providing the Best Policy</h3>
                                        <p class="description">
                                        Based on the details we recommend you what is the best offer you can avail 
                                        and what discounts you may get in your premium amount.
                                        </p>
                                    </a>
                                </div>
                                <div class="timeline">
                                    <span class="icon fa fa-mobile"></span>
                                    <a href="#" class="timeline-content">
                                        <h3 class="title">Acceptance by You</h3>
                                        <p class="description">
                                            We respect our customer's decision therefore we accept your feedback on every point and it is your decision to accept or reject the policies we provide on premium amounts.
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
