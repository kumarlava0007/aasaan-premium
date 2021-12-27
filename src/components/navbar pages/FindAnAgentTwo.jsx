import React, {useState,View, Button, Text, Modal} from 'react'
// import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'
// import config from "../../chatbot_config.js";
// import MessageParser from "../../MessageParser.js";
// import ActionProvider from "../../ActionProvider";
import Styles from '../../styles/findAndAgent.module.css'
import style from 'styled-components'
let address=[
    {
        "pincode":144001,
        "nearloc":"Aasan Premium Punjab, Near Bus Stand, Jalandhar City.",
        "dist":"Punjab-144001"
    },
    {
        "pincode":160003,
        "nearloc":"Aasan Premium Chandigarh, Near Elante Mall, Sector-28, Chandigarh",
        "dist":"Chandigarh-160003"
    },
    {
        "pincode":800020,
        "nearloc":"Aasan Premium Frazer Road,Hariniwash Complex",
        "dist":"Bihar-800002"
    },
    {
        "pincode":800020,
        "nearloc":"Aasan Premium Kanakarbagh, Near Kendriye Vidyalay Gate No.-2",
        "dist":"Bihar-800020"
    },
    {
        "pincode":800020,
        "nearloc":"Aasan Premium Kanti Factory Road",
        "dist":"Bihar-800020"
    },
    {
        "pincode":800020,
        "nearloc":"Aasan Premium Hanuman Nagar",
        "dist":"Bihar-800020"
    },
    {
        "pincode":800020,
        "nearloc":"Aasan Premium Hanuman Nagar",
        "dist":"Bihar-800020"
    },
    {
        "pincode":803110,
        "nearloc":"Aasan Premium BiharSharif,Near Ramchandar Pur Bus Stop",
        "dist":"Bihar-803110"
    },
    {
        "pincode":803110,
        "nearloc":"Aasan Premium Harnaut,Station Road",
        "dist":"Bihar-803110"
    },
    {
        "pincode":803110,
        "nearloc":"Aasan Premium Rajgir",
        "dist":"Bihar-803110"
    },
    {
        "pincode":803110,
        "nearloc":"Aasan Premium Silao",
        "dist":"Bihar-803110"
    },
    {
        "pincode":151001,
        "nearloc":"Aasan Premium Bathinda,Court Road",
        "dist":"Punjab-151001"
    },
    {
        "pincode":151001,
        "nearloc":"Aasan Premium Faridkot",
        "dist":"Punjab-151001"
    },
    {
        "pincode":151001,
        "nearloc":"Aasan Premium BhuchoMandi, Bathinda",
        "dist":"Punjab-151001"
    },
    {
        "pincode":151001,
        "nearloc":"Aasan Premium Mittal Mall",
        "dist":"Punjab-151001"
    },
    {
        "pincode":500016,
        "nearloc":"Aasan Premium Ameerpet, Near Reliance Fresh",
        "dist":"Telengana-500016"
    },
    {
        "pincode":500016,
        "nearloc":"Aasan Premium Begumpet",
        "dist":"Telangana-500016"
    },
    {
        "pincode":500038,
        "nearloc":"Aasan Premium Panjagutta",
        "dist":"Telangana-500038"
    },
    {
        "pincode":500016,
        "nearloc":"Aasan Premium Ameerpet, Near Yellama Pochama Devasthanam",
        "dist":"Telangana-500016"
    },
    {
        "pincode":500018,
        "nearloc":"Aasan Premium Neckless Road",
        "dist":"Telangana-500018"
    }
];
export default function FindAnAgentTwo() {
    const [add,changeadd]=useState([]);
    // constructor( ()=> {
    //     super();
    //     this.state={
    //         show:false
    //     }
    // })
    const [open, chatOpen] = useState(false);

    // const minichat = <View style={{flex:1, marginTop:100}}>
    //                     <Text style={{fontSize:80 }}>Screen Text</Text>
    //                     <Button title='show chat' onPress={()=>chatOpen(!open)}/>
    //                     <Modal transparent={true} onPress={() => chatOpen(!open)}>
    //                         <View style={{ backgroundColor:'green', flex:1 }}>
    //                             <View style={{backgroundColor:'orange', margin:50, padding:40}}>
    //                                 <Text style={{ fontSize:50}}>Modal Text</Text>
    //                                 <Button title='Show Chat' onPress={() => chatOpen(!open)}/>
    //                             </View>
    //                         </View>
    //                     </Modal>
    //                 </View>
    function findAgent(){
        setTimeout(()=>{
             // console.log("button clicked")
        let pin=document.getElementById("pincode").value;
        // let nearestlocation=document.getElementById("nearestloc");
        // console.log(pin);
        let add1=address.filter((e)=>{
            if(pin==e.pincode)
            return<>
            {/* <div className='address'>
                <h2>{e.nearloc}</h2>
            </div> */}
            </>
        })
        changeadd(add1)
        },1000)
       
    }
    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.containerOne}>
                <h3><strong>Find an Agent</strong></h3>
                <br />
                <input type="text" required placeholder="______" maxLength="6" className={Styles.inputs} id="pincode"></input>
                <button className={Styles.buttons} onClick={findAgent}>Enter Pincode</button>
            </div>
            <br />
            <br />
            <AddressHead> 
                {add.map((e)=>{
                    return<>
                    <Address>
                    <Location>{e.nearloc}</Location>
                    <District>{e.dist}</District>
                    </Address>
                    </>
            })}
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
                            {/* {minichat} */}
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
height:100px;
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


