import React from 'react'
import style from "styled-components"
import PersonAddAlt1 from '@mui/icons-material/PersonAddAlt1';
const SignUp = () => {
    return (
        <div>
            <HeadSignup>
                <Image>
                    <img src="https://online.pnbmetlife.com/meratermplanplus/assets/images/homebanner-leftImg.png"/>
                </Image>
                <Head>
                <AvtarIcon>
                    <PersonAddAlt1 style={{ color: "#4060BF",background:"whitesmoke",height:"135px",width:"141px",borderRadius:"70px 70px 60px 40px",padding:"20px"}}/>
                </AvtarIcon>
                <InformationField>
                    <FieldName>Full Name</FieldName>
                    <i class="fa fa-user-circle-o fa-lg" aria-hidden="true" style={{color:"#4060BF"}}/><InputField type="text" placeholder="Full Name"></InputField>
                    <FieldName>Email</FieldName>
                    <i class="fa fa-envelope-o fa-lg" aria-hidden="true" style={{color:"#4060BF"}}/><InputField type="email" placeholder="Enter Email"></InputField>
                    <FieldName>Mobile</FieldName>
                    <i class="fa fa-mobile fa-2x" aria-hidden="true" style={{color:"#4060BF"}}/><InputField type="text" placeholder="Mobile Number"></InputField>
                    <FieldName>Create Password</FieldName>
                    <i class="fa fa-key fa-lg" aria-hidden="true" style={{color:"red"}}/><InputField type="password" placeholder="Create Password"></InputField><br/>
                    <SignUpButton>
                    <Button>SignUp</Button>
                    </SignUpButton>
                </InformationField>
             </Head>
            </HeadSignup>
        </div>
    )
}

export default SignUp
const HeadSignup=style.div`
margin-top:100px;
display:flex;
justify-content:space-around;
`
const Image=style.div`
margin-top:150px;
`
const Head=style.div`

`
const AvtarIcon=style.div`
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
const SignUpButton=style.div`
display:flex;
justify-content:center;
`
const Button=style.button`
margin-top:20px;
padding:3px 70px 3px 70px;
font-weight:bolder;
background-color:#d96e2f;
color:white;
cursor:pointer;
border:2px solid #d96e2f;
border-radius:5px;
font-size:20px;
`