import React from 'react'
import Styles from '../../styles/login.module.css';
import { Link,useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Domain } from '../../Config';
import axios from 'axios';
import LoginContext from '../../Context';
export default function LoginPage() {
    const [inputs,setInputs]=useState({});
    const setLogged=React.useContext(LoginContext)['setLogged'];
    let history=useHistory()
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    const handleSubmit = async(e) => {
          e.preventDefault();
          const REGISTER_URL=Domain+"/login"
          await axios
          .post(REGISTER_URL,inputs)
          .then(response=>{
                localStorage.setItem("isLoggedIn",true)
                setLogged(true)
                alert("seccessfully LoggedIn")
                history.push("/insurance")
          }).catch((error)=>{
                alert("wrong credentials")
          })
        }
        const onSignIn = (googleUser) => {
          var profile = googleUser.getBasicProfile();
          console.log('ID: ' + profile.getId()); 
          console.log('Name: ' + profile.getName());
          console.log('Image URL: ' + profile.getImageUrl());
          console.log('Email: ' + profile.getEmail());
          }
<<<<<<< HEAD
        //   const signOut = () => {
        //     var auth2 = gapi.auth2.getAuthInstance();
        //     auth2.signOut().then(function () {
        //     console.log('User signed out.');
        //     });
        // }
=======
      
          const signOut = () => {
            var auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(function () {
            console.log('User signed out.');
            });
        }
>>>>>>> 99bd16b (sunday work)
    return (
        <div className={Styles.container}>
            <div className={Styles.sectionOne}>
                <img src="https://image.freepik.com/free-vector/cartoon-man-sitting-home-with-laptop_74855-6963.jpg" alt="" />
                <h3 style={{textAlign: "center"}}><strong>Login To Find Premium Plans</strong></h3>
            </div>
            <div className={Styles.sectionOne}>
                <div className={Styles.formContainer}>
                    <form className={Styles.formTab} method='POST' onSubmit={handleSubmit}>
                        <input type="email" id="username" required placeholder="Email address or phone number" className={Styles.formInput} name='mailId' onChange={handleChange} value={inputs.mailId}/>
                        <input type="password" id="password" required placeholder="Password" className={Styles.formInput} name='password' onChange={handleChange} value={inputs.password}/>
                        <button className={Styles.buttonOne} type="submit">Log In</button>
                        <Link className={Styles.forgPass} to="/forgotpassword">Forgotten Password</Link>
                        <div className="g-signin2"
                        //  className={Styles.signInWithGoogle} 
                         data-onSuccess={onSignIn}/><br />
                        <a href="#/login" onClick={signOut}>Sign out</a>
                        <hr className={Styles.hr}/>
                        <Link to="/signUp"><button className={Styles.buttonTwo}>Create New Account</button></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
