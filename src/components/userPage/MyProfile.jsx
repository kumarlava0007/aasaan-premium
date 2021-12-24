import axios from 'axios';
import React from 'react'
import classes from '../../styles/myprofile.module.css';
import { Domain } from '../../Config';
import { useState } from 'react';

const MyProfile = () => {

    const [data, setdata] = useState({
        mailId : "Loading",
        phone : "Loading",
        fullAddress: "Loading",
        pinCode: "Loading",
        city: "",
        state: "",
        user:{
            firstName: "Loading",
            lastName : ""
        }
    })
    const profileDetails = async() => {
        const REGISTER_URL = Domain + "/myprofile/"+localStorage.getItem('mailId');
        await axios
      .get(REGISTER_URL)
      .then(response=>{
            setdata(response.data);
            console.log(data);
      }).catch((error)=>{
            console.log(error)
      })

    }
    return (
        <div className={classes.profile_page}>
            <h3>My Profile</h3>
            <h6>🗝 Your details are 100% safe & secure with us</h6>
            {/* <p style={{color: "lightgray", fontSize: "40px", padding: "0 20px 0 20px", marginBottom: "-10px"}}>|</p>
            <h3>Reset Password</h3> */}
            <hr />
            <div className={classes.main_box}>
                <div className={classes.profile_box}>
                    <div className={classes.input_left}>
                        <i class="far fa-user-circle"></i>
                        <div>
                            <h6>{data.user.firstName+ " " + data.user.lastName}</h6>
                            <h6>{data.mailId}</h6>
                        </div>

                    </div>
                    <div className={classes.input_right}>
                
                        <div className={classes.input_data_odd}>
                            <h6>Name</h6>
                            <h6>{data.user.firstName +" "+ data.user.lastName}</h6>
                        </div>
                        <div className={classes.input_data_even}>
                            <h6>Role</h6>
                            <h6>Buyer</h6>
                        </div>
                        <div className={classes.input_data_odd}>
                            <h6>Email</h6>
                            <h6>{data.mailId}</h6>
                        </div>
                        <div className={classes.input_data_even}>
                            <h6>Full Address</h6>
                            <h6>{data.fullAddress + ", "+ data.city+", "+ data.state}</h6>
                        </div>
                        <div className={classes.input_data_odd}>
                            <h6>Contact</h6>
                            <h6>+91-{data.phone}</h6>
                        </div>
                        <div className={classes.input_data_even}>
                            <h6>Pin Code</h6>
                            <h6>{data.pinCode}</h6>
                        </div>
                        <div className={classes.edit}>
                            <i class="far fa-edit"> Edit detail</i>
                        </div>
                        <button onClick={profileDetails}>View Your Details</button>
                    </div>
                    
                </div>
                
                <div className={classes.reset_password_box}>
                    
                </div>
            </div>
            
            <br />
        </div>
    )
}

export default MyProfile
