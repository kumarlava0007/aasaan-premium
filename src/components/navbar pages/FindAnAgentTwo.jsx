import React from 'react'
import Styles from '../../styles/findAndAgent.module.css'
export default function FindAnAgentTwo() {
    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.containerOne}>
                <h3><strong>Find an Agent</strong></h3>
                <br />
                <input type="text" required placeholder="______" maxLength="6" className={Styles.inputs}></input>
                <button className={Styles.buttons}>Find an agent</button>
            </div>
            <br />
            <br />
            <br />
            <div className={Styles.mainContainerTwo}>
                <br />
                <div className={Styles.containerTwo}>
                    <h4><strong>Our Communication Support</strong></h4>
                    <br /><br />
                    <div className={Styles.cardSection}>
                        <div className={Styles.cards}>
                            <a href="mailto:swamisonamkumarsingh576@gmail.com"><i class="fa fa-envelope-o fa-4x" aria-hidden="true" style={{ color: "#5b4cfa" }}></i></a>
                            <h6>Mail us</h6>
                        </div>
                        <div className={Styles.cards}>
                            <i class="fa fa-volume-control-phone fa-4x" aria-hidden="true" style={{ color: "#5b4cfa" }}></i>
                            <h6>9982732898</h6>
                        </div>
                        <div className={Styles.cards}>
                            <i class="fa fa-comments-o fa-4x" aria-hidden="true" style={{ color: "#5b4cfa" }}></i>
                            <h6>Chat</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
