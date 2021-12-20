import React, {useEffect, useState} from 'react'
import Styles from '../../styles/login.module.css';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { Domain } from '../../Config';
export default function SignUp() {
    // const [inputs,setInputs]=useState({
    //     firstName:"",
    //     lastName:"",
    //     mailId:"",
    //     password:"",
    // });

    var validPwd =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/;
    var validEmail = /^[a-zA-z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}/;
    // var btn_class=Styles.deactivate;
    const [toggleClass, setToggleClass] = useState(false);
    
    const [fNameError,setFNameError]=useState(false)
    const [lNameError,setLNameError]=useState(false)
    const [emailError,setEmailError]=useState(false)
    const [passwordError,setPasswordError]=useState(false)
    const [newPasswordError,setNewPasswordError]=useState(false)

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

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
        if(newPassword!==password)
          setNewPasswordError("Password didn't match")
        else
          setNewPasswordError(false)
      },[newPassword,setNewPassword])
  
      useEffect(()=>{
        if(fName.length > 0 && fName.length <= 2)
          setFNameError('At least 3 characters required')
        else
          setFNameError(false)
      },[fName,setFName])
  
      useEffect(()=>{
        if(lName.length > 0 && lName.length <= 2)
          setLNameError('At least 3 characters required')
        else
          setLNameError(false)
      },[lName,setLName])
  
      useEffect(()=>{
        if(email.length === 0){
          setEmailError('');
        }
        else if(email.length <= 4)
          setEmailError('Too short to be an email')
        else if(!email.includes('@')){
          setEmailError('Email must contain "@"')
        }
        else if (email.endsWith('@') || email.startsWith('@') || !email.match(validEmail))
          setEmailError('Invalid format')
        else
          setEmailError(false)
      },[email,setEmail])
  
      useEffect(()=>{
        if(emailError===false && fNameError===false && lNameError===false
          && passwordError===false && newPasswordError===false && password === newPassword &&
          email !== "" && password !== "" && newPassword !== "" && fName !== "" && lName !== ""
          ){
              console.log("all false");
            //   btn_class = Styles.btn;
            setToggleClass(true);
          }
      },[emailError,fNameError,lNameError,passwordError,newPasswordError, password, newPassword, email, fName,lName])
  
  
      const fNameHandler =(e)=>{
        setFName(e.target.value)
      }
      const lNameHandler =(e)=>{
        setLName(e.target.value)
      }
      const emailHandler =(e)=>{
        setEmail(e.target.value)
      }
      const passwordHandler =(e)=>{
        setPassword(e.target.value)
      }
      const newPasswordHandler =(e)=>{
        setNewPassword(e.target.value)
      }
  
  
      const handleSubmit = (e) => {
  
        e.preventDefault();
        if(newPasswordError===false && passwordError === false && emailError === false && fNameError === false && lNameError === false &&
            // btn_class===Styles.btn
            setToggleClass(true)
            )
        {
          alert('Account created succesfully')
          setRedirect(true)
        }
        else
          alert('Try again')

        setNewPassword('')
        setLName('')
        setFName('')
        setEmail('')
        setPassword('')
      }
  
    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setInputs(values => ({...values, [name]: value}))
    //   }
    // const handleSubmit = async(e) => {
    //     e.preventDefault();
    //       const REGISTER_URL=Domain+"/register"
    //       await axios
    //       .post(REGISTER_URL,inputs)
    //       .then(response=>{
    //         console.log(response);
    //       })
    //     }
    return (
        <div className={Styles.container}>
            <div className={Styles.sectionOne}>
                <img src="https://online.pnbmetlife.com/meratermplanplus/assets/images/homebanner-leftImg.png" alt="" />
                <h3 style={{textAlign: "center"}}><strong>Sign Up</strong></h3>
            </div>
            <div className={Styles.sectionOne}>
                <div className={Styles.formContainer}>
                    <form className={Styles.formTab} onSubmit={handleSubmit} method='POST'>
                        <input type="text" id="firstName" required placeholder="First Name" className={Styles.formInput} name='firstName' value={fName} onChange={fNameHandler}/>
                        <div style={{ fontSize: 14, color: "red" }}>
                            {fNameError}
                        </div>
                        <input type="text" id="lastName" required placeholder="Last Name" className={Styles.formInput} name='lastName' value={lName} onChange={lNameHandler}/>
                        <div style={{ fontSize: 14, color: "red" }}>
                            {lNameError!==false && lNameError}
                        </div>
                        <input type="email" id="email" required placeholder="Email Address" className={Styles.formInput} name='mailId' value={email} onChange={emailHandler}/>
                        <div style={{ fontSize: 14, color: "red" }}>
                            {emailError !==false && emailError}
                        </div>
                        <input type="password" id="password" required placeholder="Password" className={Styles.formInput} name='password' value={password} onChange={passwordHandler}/>
                        <div style={{ fontSize: 14, color: "red" }}>
                            {passwordError !==false && passwordError}
                        </div>
                        <input type="password" id="Cpassword" required placeholder="Confirm Password" className={Styles.formInput} name='Cpassword' value={newPassword} onChange={newPasswordHandler}/>
                        <div style={{ fontSize: 14, color: "red" }}>
                            {newPasswordError!==false && newPasswordError}
                        </div>
                        <hr className={Styles.hr}/>
                        <button className={toggleClass ? Styles.btn : Styles.deactivate} type="submit">Sign Up</button>
                        <Link className={Styles.account} to="/login">Already have an account?</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
