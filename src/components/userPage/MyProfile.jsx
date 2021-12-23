import React from 'react'
import classes from '../../styles/myprofile.module.css';

const MyProfile = () => {
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
                            <h6>John Snow</h6>
                            <h6>thenightwatch@gmail.com</h6>
                        </div>

                    </div>
                    <div className={classes.input_right}>
                
                        <div className={classes.input_data_odd}>
                            <h6>Name</h6>
                            <h6>John Snow</h6>
                        </div>
                        <div className={classes.input_data_even}>
                            <h6>Role</h6>
                            <h6>Buyer</h6>
                        </div>
                        <div className={classes.input_data_odd}>
                            <h6>Email</h6>
                            <h6>thenightwatch@gmail.com</h6>
                        </div>
                        <div className={classes.input_data_even}>
                            <h6>Email Verification</h6>
                            <h6>Pending</h6>
                        </div>
                        <div className={classes.input_data_odd}>
                            <h6>Contact</h6>
                            <h6>+91-978 3926 740</h6>
                        </div>
                        <div className={classes.input_data_even}>
                            <h6>Mobile Verification</h6>
                            <h6>Pending</h6>
                        </div>
                        <div className={classes.edit}>
                            <i class="far fa-edit"> Edit detail</i>
                        </div>
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
