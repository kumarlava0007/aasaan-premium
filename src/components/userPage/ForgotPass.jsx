import React from 'react'
import style from "styled-components"
import HandymanIcon from '@mui/icons-material/Handyman';
const ForgotPass = () => {
    return (
        <div>
            <HeadForgot>
                <Image>
                <img src="https://image.freepik.com/free-vector/cartoon-man-sitting-home-with-laptop_74855-6963.jpg" height="100%" width="750px"/>
                </Image>
                <SubHead>
                <Icon>
                    {/* <HandymanIcon style={{ color: "#4060BF",background:"whitesmoke",height:"135px",width:"141px",borderRadius:"70px 70px 60px 40px",padding:"20px"}}/> */}
                    <i class="fas fa-tools"></i>
                </Icon>
                <InformationField>
                    <FieldName>Enter Email</FieldName>
                    <i class="fa fa-envelope-o fa-lg" aria-hidden="true" style={{color:"#4060BF"}}/><InputField type="email" placeholder="Enter Email"/>
                    <FieldName>Set Password</FieldName>
                    <i class="fa fa-key fa-lg" aria-hidden="true" style={{color:"red"}}/><InputField type="password" placeholder="Set Password"/><br/>
                    <ForgotButton>
                    <Button>Reset</Button>
                    </ForgotButton>
                </InformationField>
                </SubHead>
            </HeadForgot>
        </div>
    )
}

export default ForgotPass
const HeadForgot=style.div`
margin-top:100px;
display:flex;
justify-content:space-around;
`
const Image=style.div`

`
const SubHead=style.div`

`
const Icon=style.div`
display:flex;
justify-content:center;
`
const InformationField=style.div`
margin-top:-60px;
box-shadow:7px 7px 8px rgba(100, 100, 100, 0.5);
background-color:whitesmoke;
border-radius:10px;
padding:60px 50px 30px 50px;
`
const FieldName=style.h4`
margin-top:20px;
margin-bottom:10px;
text-align:center;
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
const ForgotButton=style.div`
display:flex;
justify-content:center;
`
const Button=style.div`
margin-top:20px;
padding:3px 70px 3px 70px;
font-weight:bolder;
background-color:#BE4871;
color:white;
cursor:pointer;
border:2px solid #BE4871;
border-radius:5px;
font-size:20px;
`