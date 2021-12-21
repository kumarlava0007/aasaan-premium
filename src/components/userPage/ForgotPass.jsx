import React from 'react'
import Styles from '../../styles/login.module.css';
import Style from '../../styles/forgotPass.module.css';
import { Link } from 'react-router-dom';

export default function forgotpassword() {
    return (
        <div className={Styles.container}>
            <div className={Styles.sectionOne}>
                <div className={Style.icon}>
                <i class="fas fa-tools"></i>
                </div>
                <h3 style={{textAlign: "center"}}><strong>Reset Your Password</strong></h3>
            </div>
            <div className={Styles.sectionOne}>
                <div className={Styles.formContainer}>
                    <form className={Styles.formTab}>
                        <input type="email" id="username" required placeholder="Email address or phone number" className={Styles.formInput}/>
                        <input type="text" id="verify" required placeholder="Code" className={Styles.formInput} />
                        <input type="password" id="password" required placeholder="Password" className={Styles.formInput} />
                        <input type="password" id="Cpassword" required placeholder="Confirm Password" className={Styles.formInput} />
                        <hr className={Styles.hr}/>
                        <Link to="/LogIn"><button className={Styles.buttonTwo}>Reset</button></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
