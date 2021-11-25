import React from 'react';
import Styles from '../../styles/claims.module.css';

export default function Claims() {
    return (
        <div className={Styles.claimsContainer}>
            <div className={Styles.container}>
                <h2 className="tinyWord">Claims</h2>
                <div className={Styles.grids}>
                    <h6>File a Claim</h6>
                    <h6>Roadside Assistance</h6>
                    <h6>Track a Claim</h6>
                    <h6>Claims Help</h6>
                </div>
            </div>
            <br /><br />
            <hr />
            <br />
            <h1 className="word">Log in to continue your quote</h1>
        </div>
    )
}
