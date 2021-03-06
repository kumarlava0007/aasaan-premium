import React from 'react'
import classes from '../../styles/about.module.css';
import MediaQuery from 'react-responsive'

const About = () => {
    return (
        <div>
            <div className={classes.main}>

                <div className={classes.first_section}>
                    <div className={classes.first_section_para}>
                        <h4><span style={{ fontSize: "40px", fontWeight: "bolder" }}>O</span>ur vision is to set the standard of excellence among insurance providers by being innovative, being financially strong, providing the right support and service for our customers, exceeding their expectations. We will attract and retain the very best employees and agents to help us achieve this goal.</h4>
                    </div>

                    <div className={classes.first_section_photo}>
                        <img src="https://sdkwc.org/wp-content/uploads/2021/07/VS_Our_Vision.png" />
                    </div>

                </div><br /><br />


                <div className={classes.first_section}>
                    <div className={classes.first_section_photo}>
                        <img src="http://visionsvcb.org/wp-content/uploads/2018/05/our-mission.png" style={{ height: "300px", width: "400px" }} />
                    </div>

                    <div className={classes.first_section_para}>
                        <h4><span style={{ fontSize: "40px", fontWeight: "bolder" }}>I</span>nterglobal Insurance Company, an independent insurance agency located in Medley, FL is committed to the principles of service, integrity and professionalism while providing our valued clients the highest quality of service with the goal of exceeding their expectations. Financial security and protection for our clients’ commitment as well as fairness and empowerment to our agents. Respect and opportunity for our employees, increasing value and reward for our shareholders.</h4>
                    </div>

                </div><br /><br />

                
                <div className={classes.first_section}>
                    <div className={classes.first_section_para}>
                        <ul style={{ fontSize: "23px" }}>
                            <li>We listen. We weigh all sides. We are prudent.</li>
                            <li>We are dependable. Steady. The calm inside the storm.</li>
                            <li>By our agents. Our policyholders. Our team. The industry.</li>
                            <li>To communicate. To respond. To solve.</li>
                            <li>In our products. Our technology. Our thinking.</li>
                            <li>We challenge. We adapt. We bend, never break.</li>
                        </ul>
                    </div>
                    <div className={classes.first_section_photo}>
                        <img src="data:image/png;base64,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" style={{ height: "380px", width: "400px" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;