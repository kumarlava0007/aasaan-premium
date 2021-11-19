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
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus
                                            lorem, et condimentum neque commodo quis.
                                        </p>
                                    </a>
                                </div>
                                <div class="timeline">
                                    <span class="icon fa fa-rocket"></span>
                                    <a href="#" class="timeline-content">
                                        <h3 class="title">Analysing the Information</h3>
                                        <p class="description">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus
                                            lorem, et condimentum neque commodo quis.
                                        </p>
                                    </a>
                                </div>
                                <div class="timeline">
                                    <span class="icon fa fa-briefcase"></span>
                                    <a href="#" class="timeline-content">
                                        <h3 class="title">Providing the Best Policy</h3>
                                        <p class="description">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus
                                            lorem, et condimentum neque commodo quis.
                                        </p>
                                    </a>
                                </div>
                                <div class="timeline">
                                    <span class="icon fa fa-mobile"></span>
                                    <a href="#" class="timeline-content">
                                        <h3 class="title">Acceptance by You</h3>
                                        <p class="description">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus
                                            lorem, et condimentum neque commodo quis.
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
