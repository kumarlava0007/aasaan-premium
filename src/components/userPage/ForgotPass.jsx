import React , {useEffect, useState}from 'react'
import Styles from '../../styles/login.module.css';
import Style from '../../styles/forgotPass.module.css';
import { Link } from 'react-router-dom';

const ForgotPass = () => {

    var validPwd =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/;

    const [passwordError,setPasswordError]=useState(false)
    const [newPasswordError,setNewPasswordError]=useState(false)
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

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
                        <input type="password" id="password" required placeholder="Password" className={Styles.formInput} onChange={(e)=>setPassword(e.target.value)} value={password}/>
                        <div style={{ fontSize: 14, color: "red" }}>
                            {passwordError !==false && passwordError}
                        </div>
                        <input type="password" id="Cpassword" required placeholder="Confirm Password" className={Styles.formInput} onChange={(e)=>setNewPassword(e.target.value)} value={newPassword}/>
                        <div style={{ fontSize: 14, color: "red" }}>
                            {newPasswordError!==false && newPasswordError}
                        </div>
                        <hr className={Styles.hr}/>
                        <Link to="/LogIn"><button className={Styles.buttonTwo}>Reset</button></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ForgotPass;