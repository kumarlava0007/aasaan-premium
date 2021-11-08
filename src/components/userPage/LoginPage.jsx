import React from 'react'
import style from "styled-components"
import Avatar from "@material-ui/core/Avatar"
import { Link } from 'react-router-dom'
const LoginPage = () => {
    return (
        <HeadLogin>
            <LoginImage>
                <img src="https://image.freepik.com/free-vector/cartoon-man-sitting-home-with-laptop_74855-6963.jpg" height="100%" width="750px"/>
            </LoginImage>
            <Login>
                <Avtaricon>
                    {/* style={{ color: "#4060BF",background:"whitesmoke",height:"135px",width:"141px"}} */}
                    <i class="fa fa-user fa-5x" aria-hidden="true" style={{borderRadius: "50%", color: "#4060BF",background:"whitesmoke",height:"135px",width:"141px"}}></i>
                </Avtaricon>
                <Information>
                 <FieldName>Username/Email</FieldName>
                 <i class="fa fa-envelope-o fa-lg" aria-hidden="true" style={{color:"#4060BF"}}/><InputField type="email" placeholder="Enter username"/>
                <FieldName>Enter Password</FieldName>
                <i class="fa fa-key fa-lg" aria-hidden="true" style={{color:"red"}}/><InputField type="password" placeholder="Enter password"/><br/>
                <NewPage>
                   <Link to="/signup"><SignUp>SignUp</SignUp></Link>
                   <Link to="/forgotpassword"><Forgot>Forgot Password ?</Forgot></Link>
                </NewPage>
                <Check>LogIn</Check>
                </Information>
          </Login>
        </HeadLogin>
    )
}

export default LoginPage
const LoginImage=style.div`
margin-top:45px;
`
const HeadLogin=style.div`
margin-top:100px;
display:flex;
justify-content:space-around;
`
const Avtaricon=style.div`
display:flex;
justify-content:center;
`
const Login=style.div`
text-align:center;
`
const FieldName=style.h4`
margin-top:20px;
margin-bottom:10px;
`
const InputField=style.input`
width:400px;
height:40px;
font-size:20px;
border-style:none;
background-color:whitesmoke;
outline:none;
border-bottom:1px solid #4060BF;
text-indent:10px;
`
const Information=style.div`
margin-top:-60px;
box-shadow:7px 7px 8px rgba(100, 100, 100, 0.5);
background-color:whitesmoke;
border-radius:10px;
padding:60px 50px 60px 50px;
`
const Check=style.button`
margin-top:20px;
padding:3px 70px 3px 70px;
font-weight:bolder;
background-color:green;
color:white;
cursor:pointer;
border:2px solid green;
border-radius:5px;
font-size:20px;
`
const NewPage=style.div`
margin-top:20px;
display:flex;
justify-content:space-evenly;
`
const SignUp=style.h6`
color:black;
:hover{
    text-decoration:underline;
}
`
const Forgot=style.h6`
color:black;
:hover{
    text-decoration:underline;
}
`