/* global gapi */
import React from 'react'
import Styles from '../../styles/login.module.css';
import { Link } from 'react-router-dom';

export default function LoginPage() {

        const onSignIn = (googleUser) => {
          var profile = googleUser.getBasicProfile();
          console.log('ID: ' + profile.getId()); 
          console.log('Name: ' + profile.getName());
          console.log('Image URL: ' + profile.getImageUrl());
          console.log('Email: ' + profile.getEmail());
          }
      
      
        //   const signOut = () => {
        //     var auth2 = gapi.auth2.getAuthInstance();
        //     auth2.signOut().then(function () {
        //     console.log('User signed out.');
        //     });
        // }
    return (
        <div className={Styles.container}>
            <div className={Styles.sectionOne}>
                <img src="https://image.freepik.com/free-vector/cartoon-man-sitting-home-with-laptop_74855-6963.jpg" alt="" />
                <h3 style={{textAlign: "center"}}><strong>Login To Find Premium Plans</strong></h3>
            </div>
            <div className={Styles.sectionOne}>
                <div className={Styles.formContainer}>
                    <form className={Styles.formTab}>
                        <input type="email" id="username" required placeholder="Email address or phone number" className={Styles.formInput}/>
                        <input type="password" id="password" required placeholder="Password" className={Styles.formInput} />
                        <button className={Styles.buttonOne} type="submit">Log In</button>
                        <Link className={Styles.forgPass} to="/forgotpassword">Forgotten Password</Link>
                        <div className="g-signin2"
                        //  className={Styles.signInWithGoogle} 
                         data-onsuccess={onSignIn}/><br />
                        {/* <a href="#/login" onClick={signOut}>Sign out</a> */}
                        <hr className={Styles.hr}/>
                        <Link to="/signUp"><button className={Styles.buttonTwo}>Create New Account</button></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
