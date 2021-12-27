import React, {useState} from 'react'
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
import config from "../../chatbot_config.js";
import MessageParser from "../../MessageParser.js";
import ActionProvider from "../../ActionProvider";

import Styles from '../../styles/findAndAgent.module.css'
import style from 'styled-components'
import axios from 'axios';

export default function FindAnAgentTwo() {

    const [pinCode, setpinCode] = useState("");
    const [add,changeadd]=useState([]);
    const [addComp, setaddComp] = useState(<></>);

    const findOffices = (e) => {
        const REGISTER_URL = `https://api.postalpincode.in/pincode/${pinCode}`;
        e.preventDefault();
        axios
        .get(REGISTER_URL)
        .then((response => {
        console.log(response.data);
        changeadd(response.data[0].PostOffice)
        console.log(add)
        }))
        .catch((error) => {
            console.log(error)
        })
        addComponent(add)
    }

    const addComponent = (add1) =>{
        setaddComp(
            add1.map((e)=>{
                return<>
                <Address>
                <Location>{e.Name}</Location>
                <h3>{e.Pincode}</h3>
                <District>{e.Region +", "+ e.State}</District>
                </Address>
                </>
            }
        )
        )
    }
    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.containerOne}>
                <h3><strong>Find an Agent</strong></h3>
                <br />
                <h5>Enter Pin Code</h5>
                <input type="text" required placeholder="______" maxLength="6" className={Styles.inputs} id="pincode" onChange={(e)=> setpinCode(e.target.value)}></input>
                <button className={Styles.buttons} onClick={findOffices}>Find an agent</button>
                
            </div>
            <br />
            <br />
            <AddressHead> 
                {addComp}
            </AddressHead>
            <br />
            <div className={Styles.mainContainerTwo}>
                <br />
                <div className={Styles.containerTwo}>
                    <h4><strong>Our Communication Support</strong></h4>
                    <br /><br />
                    <div className={Styles.cardSection}>
                        <div className={Styles.cards}>
                            <a href="mailto:help@aasaanpremium.com"><i class="fa fa-envelope-o fa-4x" aria-hidden="true" style={{ color: "#5b4cfa" }}></i></a>
                            <h6>Mail us</h6>
                        </div>
                        <div className={Styles.cards}>
                            <i class="fa fa-volume-control-phone fa-4x" aria-hidden="true" style={{ color: "#5b4cfa" }}></i>
                            <h6>1800-help-0870</h6>
                        </div>
                        <div className={Styles.cards}>
                            <i class="fa fa-comments-o fa-4x" aria-hidden="true" style={{ color: "#5b4cfa" }}></i>
                            <h6>Chat</h6>
                        </div>
                        <div>
                        {/* <Chatbot
                            config={config}
                            messageParser={MessageParser}
                            actionProvider={ActionProvider}
                                 /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const AddressHead=style.div`
display:flex;
justify-content:space-around;
flex-wrap:wrap;
`
const Address=style.div`
background-color:#F6F9FD;
height:150px;
width:340px;
padding:10px 20px;
margin-bottom:20px;
border:2px solid #5b4cfa;
border-radius:5px;
`
const Location=style.p`

`
const District=style.p`

`