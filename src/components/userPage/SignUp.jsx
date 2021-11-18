import React from 'react'
import Styles from '../../styles/login.module.css';
import { Link } from 'react-router-dom';

export default function SignUp() {
    return (
        <div className={Styles.container}>
            <div className={Styles.sectionOne}>
                <img src="https://online.pnbmetlife.com/meratermplanplus/assets/images/homebanner-leftImg.png" alt="" />
                <h3 style={{textAlign: "center"}}><strong>Sign Up</strong></h3>
            </div>
            <div className={Styles.sectionOne}>
                <div className={Styles.formContainer}>
                    <form className={Styles.formTab}>
                        <input type="text" id="firstName" required placeholder="First Name" className={Styles.formInput}/>
                        <input type="text" id="lastName" required placeholder="Last Name" className={Styles.formInput}/>
                        <input type="email" id="email" required placeholder="Email Address" className={Styles.formInput}/>
                        <input type="password" id="password" required placeholder="Password" className={Styles.formInput} />
                        <input type="password" id="Cpassword" required placeholder="Confirm Password" className={Styles.formInput} />
                        <hr className={Styles.hr}/>
                        <button className={Styles.buttonOne} type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
