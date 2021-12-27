import React from 'react'
import style from 'styled-components'
const FindAnAgent = () => {


    return (
        <Master>
            <Main>We Are Here To Solve Your Queries.</Main>
            <br />
            <Zipcode>
                <input type="text" required placeholder="______" maxLength="6"></input>
                <button>Find an agent</button>
                
            </Zipcode>
            <br /><br /><br />
            <hr />
            <Extraservices>
                <Head>Our Communication Support</Head>
                <Cardsection>
                    <Mailbox>
                    <Icon><a href="mailto:swamisonamkumarsingh576@gmail.com"><i class="fa fa-envelope-o fa-4x" aria-hidden="true" style={{color:"#5b4cfa"}}></i></a></Icon>
                    <Para>Mail Us</Para>
                    </Mailbox>
                    <Mailbox>
                    <Icon><i class="fa fa-volume-control-phone fa-4x" aria-hidden="true" style={{color:"#5b4cfa"}}></i></Icon>
                    <Para>9982732898</Para>
                    </Mailbox>
                    <Mailbox>
                    <Icon><i class="fa fa-comments-o fa-4x" aria-hidden="true" style={{color:"#5b4cfa"}}></i></Icon>
                    <Para>Chat</Para>
                    </Mailbox>
                </Cardsection>
            </Extraservices>
        </Master>
    )
}

export default FindAnAgent

const Master=style.div`
height: 100vh;
`
const Main=style.h2`
color:black;
margin:7% 0 3% 0;
font-weight:1000;
text-align:center;

`
const Zipcode=style.div`
display:flex;
justify-content:center;
input{
    margin-right:10px;
    border:2px solid #5b4cfa;
    outline:none;
    border-radius:5px;
    width:20%;
    letter-spacing:10px;
    text-align:center;
}
button{
    width: 200px;
    padding: 10px;
    margin-right: 10px;
    cursor: pointer;
    border-radius: 20px;
    background-color: #33c062;
    color: white;
    border: none;
}
`
const Extraservices=style.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
`
const Head=style.h3`
margin: 50px 0px;
text-align:center;
font-weight:bold;
`
const Cardsection=style.div`
width: 50vw;
display:flex;
justify-content:space-evenly;
`
const Mailbox=style.div`
display:flex;
flex-direction: column;
justify-content:center;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
width: 200px;
height: 200px;
border-radius: 10px;
background-color: whitesmoke;
`
const Icon=style.a`
display:flex;
justify-content:center;
`
const Para=style.h6`
text-align:center;
margin-top:20%;
font-weight: bold;
`