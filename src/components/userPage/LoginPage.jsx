import React, {useEffect} from 'react'
import Styles from '../../styles/login.module.css';
import { Link,useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Domain } from '../../Config';
import axios from 'axios';
import LoginContext from '../../Context';
import GoogleLogin from 'react-google-login';


export default function LoginPage() {

    const [mailId, setmailId] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [toggleClass, setToggleClass] = useState(false);
    const [inputs,setInputs]=useState({});
    const setLogged=React.useContext(LoginContext)['setLogged'];
    var validEmail = /^[a-zA-z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}/;
    var validPwd =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/;

    useEffect(()=>{
        if(emailError===false && passwordError===false &&
          mailId !== "" && password !== ""
          ){
              console.log("all false");
            setToggleClass(true);
          }
      },[emailError,passwordError, password, mailId])
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

    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
        setLogged(true);
        history.push("/insurance");

    }
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
                        onChange={handleChange} value={inputs.mailId}
                        onInput={(e)=> setmailId(e.target.value)}        
                       />
                        <div style={{ fontSize: 14, color: "red" }}>
                            {emailError}
                        </div>
                        <input type="password" id="password" required placeholder="Password" className={Styles.formInput} name='password' 
                        onChange={handleChange} value={inputs.password}
                        onInput={(e)=> setPassword(e.target.value)}
                        />
                        <div style={{ fontSize: 14, color: "red" }}>
                            {passwordError}
                        </div>
                        <GoogleLogin 
                        clientId="219562657277-594h382ipbvrsq4ainfq76pgb3qfea97.apps.googleusercontent.com"
                        buttonText="Sign in"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                        />
                        <button className={Styles.buttonOne} type="submit">Log In</button>
                        <Link className={Styles.forgPass} to="/forgotpassword">Forgotten Password</Link>
                        <hr className={Styles.hr}/>
                        <Link to="/signUp"><button className={Styles.buttonTwo}>Create New Account</button></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
