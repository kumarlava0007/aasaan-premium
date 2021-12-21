import React, {useEffect} from 'react'
import Styles from '../../styles/login.module.css';
import { Link,useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Domain } from '../../Config';
// import axios from 'axios';
import LoginContext from '../../Context';
export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [toggleClass, setToggleClass] = useState(false);

  
    var validEmail = /^[a-zA-z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}/;
    var validPwd =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/;

    useEffect(()=>{
        if(emailError===false && passwordError===false &&
          email !== "" && password !== ""
          ){
              console.log("all false");
            //   btn_class = Styles.btn;
            setToggleClass(true);
          }
      },[emailError,passwordError, password, email])

    const handleSubmit = (e) => {
      e.preventDefault();
    }  
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
    

    // const [inputs,setInputs]=useState({});
    // const setLogged=React.useContext(LoginContext)['setLogged'];
    // let history=useHistory()
    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setInputs(values => ({...values, [name]: value}))
    //   }
    // const handleSubmit = async(e) => {
    //       e.preventDefault();
    //       const REGISTER_URL=Domain+"/login"
    //       await axios
    //       .post(REGISTER_URL,inputs)
    //       .then(response=>{
    //             localStorage.setItem("isLoggedIn",true)
    //             setLogged(true)
    //             alert("seccessfully LoggedIn")
    //             history.push("/insurance")
    //       }).catch((error)=>{
    //             alert("wrong credentials")
    //       })
    //     }
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
                    <form className={Styles.formTab} method='POST' 
                    onSubmit={(e) => handleSubmit(e)}
                    >
                        <input type="email" id="username" required placeholder="Email address or phone number" className={Styles.formInput} name='mailId' 
                        // onChange={handleChange} value={inputs.mailId}
                        onChange={(e)=> setEmail(e.target.value)} value={email}          
                       />
                        <div style={{ fontSize: 14, color: "red" }}>
                            {emailError}
                        </div>
                        <input type="password" id="password" required placeholder="Password" className={Styles.formInput} name='password' 
                        // onChange={handleChange} value={inputs.password}
                        onChange={(e)=> setPassword(e.target.value)} value={password} 
                        />
                        <div style={{ fontSize: 14, color: "red" }}>
                            {passwordError}
                        </div>
                        <button className={toggleClass ? Styles.btn : Styles.deactivate} type="submit">Log In</button>
                        <Link className={Styles.forgPass} to="/forgotpassword">Forgotten Password</Link>
                        <div className="g-signin2"
                        //  className={Styles.signInWithGoogle} 
                         data-onSuccess={onSignIn}/><br />
                        <a href="#/login" 
                        // onClick={signOut}
                        >Sign out</a>
                        <hr className={Styles.hr}/>
                        <Link to="/signUp"><button className={Styles.buttonTwo}>Create New Account</button></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
