import React from 'react'
import Styles from '../../styles/login.module.css';
import { Link, useHistory } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Domain } from '../../Config';
export default function SignUp() {
  let history=useHistory()
    const [inputs,setInputs]=useState({});
    var validPwd =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/;
    var validEmail = /^[a-zA-z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}/;
    const [toggleClass, setToggleClass] = useState(false);
    const [fNameError,setFNameError]=useState(false)
    const [lNameError,setLNameError]=useState(false)
    const [emailError,setEmailError]=useState(false)
    const [passwordError,setPasswordError]=useState(false)
    const [newPasswordError,setNewPasswordError]=useState(false)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mailId, setmailId] = useState("");
    const [password, setPassword] = useState("");
    const [Password1, setPassword1] = useState("");
    const [redirect,setRedirect]=useState(false)
      useEffect(()=>{
        if(password.length === 0){
          setPasswordError('');
        }
        else if(password.length <8)
          setPasswordError('At least 8 characters required')
        else if (!password.match(validPwd))
          setPasswordError('Must include a special character , a number and an uppercase')
        else
          setPasswordError(false)
      },[password,setPassword])
      useEffect(()=>{
        if(Password1!==password)
          setNewPasswordError("Password didn't match")
        else
          setNewPasswordError(false)
      },[Password1,setPassword1])
  
      useEffect(()=>{
        if(firstName.length > 0 && firstName.length <= 2)
          setFNameError('At least 3 characters required')
        else
          setFNameError(false)
      },[firstName,setFirstName])
  
      useEffect(()=>{
        if(lastName.length > 0 && lastName.length <= 2)
          setLNameError('At least 3 characters required')
        else
          setLNameError(false)
      },[lastName,setLastName])
  
      useEffect(()=>{
        if(mailId.length === 0){
          setEmailError('');
        }
        else if(mailId.length <= 4)
          setEmailError('Too short to be an email')
        else if(!mailId.includes('@')){
          setEmailError('Email must contain "@"')
        }
        else if (mailId.endsWith('@') || mailId.startsWith('@') || !mailId.match(validEmail))
          setEmailError('Invalid format')
        else
          setEmailError(false)
      },[mailId,setmailId])
  
      useEffect(()=>{
        if(emailError===false && fNameError===false && lNameError===false
          && passwordError===false && newPasswordError===false && password === Password1 &&
          mailId !== "" && password !== "" && Password1 !== "" && firstName !== "" && lastName !== ""
          ){
              console.log("all false");
            //   btn_class = Styles.btn;
            setToggleClass(true);
          }
      },[emailError,fNameError,lNameError,passwordError,newPasswordError, password, Password1, mailId, firstName,lastName])
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    const handleSubmit = async(e) => {
        e.preventDefault();
          const REGISTER_URL=Domain+"/register"
          alert("account created")
          history.push("/login")
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
                        <input type="text" id="firstName" required placeholder="First Name" className={Styles.formInput} name='firstName' value={inputs.firstName || ""} onChange={handleChange} onInput={(e)=>setFirstName(e.target.value)}/>
                        <div style={{ fontSize: 14, color: "red" }}>
                            {fNameError}
                        </div>

                        <input type="text" id="lastName" required placeholder="Last Name" className={Styles.formInput} name='lastName' value={inputs.lastName || ""} onChange={handleChange} onInput={(e)=>setLastName(e.target.value)}/>
                        <div style={{ fontSize: 14, color: "red" }}>
                            {lNameError!==false && lNameError}
                        </div>

                        <input type="email" id="email" required placeholder="Email Address" className={Styles.formInput} name='mailId' value={inputs.mailId || ""} onChange={handleChange} onInput={(e)=>setmailId(e.target.value)}/>
                        <div style={{ fontSize: 14, color: "red" }}>
                            {emailError !==false && emailError}
                        </div>

                        <input type="password" id="password" required placeholder="Password" className={Styles.formInput} name='password' value={inputs.password || ""} onChange={handleChange} onInput={(e)=>setPassword(e.target.value)}/>
                        <div style={{ fontSize: 14, color: "red" }}>
                            {passwordError !==false && passwordError}
                        </div>
                        
                        <input type="password" id="Cpassword" required placeholder="Confirm Password" className={Styles.formInput} onInput={(e)=>setPassword1(e.target.value)}/>
                        <div style={{ fontSize: 14, color: "red" }}>
                            {newPasswordError!==false && newPasswordError}
                        </div>

                        <hr className={Styles.hr}/>
                        <button className={Styles.buttonOne} type="submit">Sign Up</button>
                        <Link className={Styles.account} to="/login">Already have an account?</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}