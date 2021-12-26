import { margin } from '@mui/system';
import React from 'react';
import Styles from '../styles/footer.module.css';
export default function Footer() {
    return (
        <div className={Styles.footerMain}>
            <div className={Styles.footerContainer}>
                <div className={Styles.footerFirstSection}>
                    <p className={Styles.heading}>More Products</p>
                    <div className={Styles.footerPath}>
                        <div className={Styles.insuranceList}>
                            <div className={Styles.lists}>
                                <i class="fas fa-shield-alt fa-2x"></i>
                                <span>  General Insurance</span>
                            </div>
                        </div>
                        <div className={Styles.insuranceList}>
                            <div className={Styles.lists}>
                                <i class="fas fa-umbrella fa-2x"></i>
                                <span>  Life Insurance</span>
                            </div>
                        </div>
                        <div className={Styles.insuranceList}>
                            <div className={Styles.lists}>
                                <i class="far fa-money-bill-alt fa-2x"></i>
                                <span>  Investment</span>
                            </div>
                        </div>
                        <div className={Styles.insuranceList}>
                            <div className={Styles.lists}>
                                <i class="fas fa-user-md fa-2x"></i>
                                <span>  Health Insurance</span>
                            </div>
                        </div>
                        <div className={Styles.insuranceList}>
                            <div className={Styles.lists}>
                                <i class="fas fa-network-wired fa-2x"></i>
                                <span>  Other Insurance</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Styles.footerSecondSection}>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Careers</li>
                        <li>Legal & Admin policies</li>
                        <li>Articles</li>
                        <li>Contact Us</li>
                        <li><i class="fab fa-facebook-f"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-linkedin-in"></i></li>
                        <li><i class="fab fa-youtube"></i></li>
                    </ul>
                </div>
                <h4 className={Styles.headingsOne}>Payment Methods</h4>
                <div className={Styles.paymentContainer}>
                    <div className={Styles.paymentOptions}>
                        <i class="fab fa-cc-visa fa-2x"></i>
                        <i class="fab fa-cc-amex fa-2x"></i>
                        <i class="fas fa-credit-card fa-2x"></i>
                        <i class="fab fa-google-pay fa-2x"></i>
                        <i class="fab fa-cc-paypal fa-2x"></i>
                    </div>
                    <div>
                        <h5>Secured With</h5>
                        <i class="fab fa-500px fa-2x"></i>
                    </div>
                </div>
                <div className={Styles.thirdSection}>
                    <p>**Discount is offered by the Insurance company as approved by IRDAI for the product under File & Use guidelines</p>
                    <p>#On the basis of your profile</p>

                    <p>Aasaan Premium Insurance Brokers Private Limited | CIN: ################### | Registered Office - Plot No.###, Sector - ##, ########, ####### - #######</p>
                    <h6>Contact Us | Legal and Admin Policies</h6>

                    <p>© Copyright 2008-2021 aasaanpremium.com. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}