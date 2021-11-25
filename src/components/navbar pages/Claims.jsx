import React from 'react';
import Styles from '../../styles/claims.module.css';
import { Link } from 'react-router-dom';
import logo from '../../images/claims_card.svg';
import appstore from '../../images/app_store_en.svg';
import playstore from '../../images/google_play_en.svg';

export default function Claims() {
    return (
        <div className={Styles.claimsContainer}>
            <div className={Styles.containerOne}>
                <div className={Styles.container}>
                    <h3><strong>Claims Center</strong></h3>
                    <br />
                    <div>
                        <button className={Styles.buttonOne}><strong>File a Claim</strong></button>
                        <button className={Styles.buttonTwo}><strong>Track a Claim</strong></button>
                    </div>
                    <br />
                    <div className={Styles.grids}>
                        <div className={Styles.claimsCat}>
                            <i class="fas fa-truck-loading"></i>
                            <Link><p>Roadside Assistance</p></Link>
                        </div>

                        <div className={Styles.claimsCat}>
                            <i class="fas fa-clipboard-list"></i>
                            <Link><p>Claims for other insurers</p></Link>
                        </div>

                        <div className={Styles.claimsCat}>
                            <i class="far fa-question-circle"></i>
                            <Link><p>Claims Help</p></Link>
                        </div>
                    </div>
                </div>
                <div className={Styles.container}>
                    <div className={Styles.containerTwo}>
                        <img src={logo} alt="" className={Styles.logo} />
                        <div style={{marginLeft: "-40px"}}>
                        <h6><strong>File and manage your claims <br /> on the State Farm mobile app.</strong></h6>
                            <img src={appstore} alt="" className={Styles.store} />
                            <img src={playstore} alt="" className={Styles.store} />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <br />
        </div>
    )
}
