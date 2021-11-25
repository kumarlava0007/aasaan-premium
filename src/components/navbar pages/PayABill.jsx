import React, {useState} from 'react';

export default function PayABill() {
    const [numToPay, setnumToPay] = useState("Phone Number");
    function callNumToChange(e) {
        const num = e.target.value;
        if (num == "phoneNumber") {
            setnumToPay("Phone Number")
        }
        else if (num == "policyNumber") {
            setnumToPay("Policy Number")
        }
        else setnumToPay("Key Code")
    }
    return (
        <div>
            <div className="container">
                <h2 className="tinyWord">Pay your insurance bill</h2>
                <h4>Make a quick, one-time insurance payment.</h4>
                <div className="payABill">
                    <select name="numbToPay" id="numbToPay" onChange={callNumToChange}>
                        <option value="phoneNumber">Phone Number</option>
                        <option value="policyNumber">Policy Number</option>
                        <option value="keyCode">Key Code</option>
                    </select>
                    <input type="text" placeholder={numToPay} />
                    <input type="text" placeholder="Date Of Birth"/>
                    <button className="button-three">Pay Now</button>
                </div>
            </div>
            <br /><br /><br />
            <br />
            <h1 className="word">Log in to continue your quote </h1>
        </div>
    )
}
