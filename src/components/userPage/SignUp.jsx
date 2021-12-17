import React from 'react'
import Styles from '../../styles/login.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Domain } from '../../Config';
export default function SignUp() {
    const [inputs,setInputs]=useState({
        // firstName:"",
        // lastName:"",
        // mailId:"",
        // password:"",
    });
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    const handleSubmit = async(e) => {
        e.preventDefault();
          const REGISTER_URL=Domain+"/register"
          await axios
          .post(REGISTER_URL,inputs)
          .then(response=>{
            console.log(response);
          })
        }
    return (
        <div className={Styles.container}>
            <div className={Styles.sectionOne}>
                <img src="https://online.pnbmetlife.com/meratermplanplus/assets/images/homebanner-leftImg.png" alt="" />
                <h3 style={{textAlign: "center"}}><strong>Sign Up</strong></h3>
            </div>
            <div className={Styles.sectionOne}>
                <div className={Styles.formContainer}>
                    <form className={Styles.formTab} onSubmit={handleSubmit} method='POST'>
                        <input type="text" id="firstName" required placeholder="First Name" className={Styles.formInput} name='firstName' value={inputs.firstName || ""} onChange={handleChange}/>
                        <input type="text" id="lastName" required placeholder="Last Name" className={Styles.formInput} name='lastName' value={inputs.lastName || ""} onChange={handleChange}/>
                        <input type="email" id="email" required placeholder="Email Address" className={Styles.formInput} name='mailId' value={inputs.mailId || ""} onChange={handleChange}/>
                        <input type="password" id="password" required placeholder="Password" className={Styles.formInput} name='password' value={inputs.password || ""} onChange={handleChange}/>
                        <input type="password" id="Cpassword" required placeholder="Confirm Password" className={Styles.formInput} />
                        <hr className={Styles.hr}/>
                        <button className={Styles.buttonOne} type="submit">Sign Up</button>
                        <Link className={Styles.account} to="/login">Already have an account?</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
