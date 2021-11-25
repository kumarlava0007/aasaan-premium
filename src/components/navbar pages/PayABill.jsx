import React, { useState } from 'react';
import Styles from '../../styles/payabill.module.css';
import { Link } from 'react-router-dom';


export default function PayABill() {
    const [numToPay, setnumToPay] = useState("Phone Number");
    function callNumToChange(e) {
        const num = e.target.value;
        if (num === "phoneNumber") {
            setnumToPay("Phone Number")
        }
        else if (num === "policyNumber") {
            setnumToPay("Policy Number")
        }
        else setnumToPay("Key Code")
    }
    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.container}>
                <h3><strong>Pay your insurance bill</strong></h3>
                <br />
                <h5>Make a quick, one-time insurance payment.</h5>
                <br />
                <div className={Styles.payABill}>
                    <select name="numbToPay" id="numbToPay" onChange={callNumToChange}>
                        <option value="phoneNumber">Phone Number</option>
                        <option value="policyNumber">Policy Number</option>
                        <option value="keyCode">Key Code</option>
                    </select>
                    <input type="text" placeholder={numToPay} />
                    <input type="text" placeholder="Date Of Birth" />
                    <button className={Styles.buttonThree}>Pay Now</button>
                </div>
            </div>
            <br /><br /><br />
            <div className={Styles.containerThree}>
                <h4 className={Styles.word}><strong>Log in to review billing history, update payment methods, and more.</strong></h4><br />
                <Link to="/login"><button className={Styles.buttonThree}><strong>Log In</strong></button></Link>
            </div>
        </div>
    )
}
