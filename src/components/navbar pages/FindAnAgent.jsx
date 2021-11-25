import React from 'react'
import style from 'styled-components'
const FindAnAgent = () => {
    return (
        <Master>
            <Main>We Are Here To Solve Your Queries.</Main>
            <Zipcode>
                <input type="text" required placeholder="______" maxLength="6"></input>
                <button>find an agent</button>
            </Zipcode>
            <Extraservices>
                <Head>Our Communication Support</Head>
                <Cardsection>
                    <Mailbox>
                    <Icon><a href="mailto:swamisonamkumarsingh576@gmail.com"><i class="fa fa-envelope-o fa-8x" aria-hidden="true" style={{color:"#5b4cfa"}}></i></a></Icon>
                    <Para>Mail Us</Para>
                    </Mailbox>
                    <Mailbox>
                    <Icon><i class="fa fa-volume-control-phone fa-8x" aria-hidden="true" style={{color:"#5b4cfa"}}></i></Icon>
                    <Para>Call Us<br/><br/>9982732898</Para>
                    </Mailbox>
                    <Mailbox>
                    <Icon><i class="fa fa-comments-o fa-8x" aria-hidden="true" style={{color:"#5b4cfa"}}></i></Icon>
                    <Para>Chat</Para>
                    </Mailbox>
                </Cardsection>
            </Extraservices>
        </Master>
    )
}

export default FindAnAgent
const Master=style.div`

`
const Main=style.h2`
color:#5b4cfa;
margin:7% 0 3% 0;
font-weight:1000;
text-align:center;
text-decoration:underline;
`
const Zipcode=style.div`
display:flex;
justify-content:center;
input{
    margin-right:2%;
    border:1.5px solid #DBDBDB;
    outline:none;
    border-radius:5px;
    width:20%;
    letter-spacing:10px;
    text-align:center;
}
button{
    color:white;
    background-color:#34BF62;
    border:2px solid #34BF62;
    padding:5px 10px;
    border-radius:5px;
    outline:none;
    cursor:pointer;
}
`
const Extraservices=style.div`
margin-top:3%;
`
const Head=style.h2`
text-align:center;
font-weight:1000;
color:#5b4cfa;
text-decoration:underline;
`
const Cardsection=style.div`
margin:3% 0 3% 0;
display:flex;
justify-content:space-evenly;
`
const Mailbox=style.div`
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
padding:4% 7%;
`
const Icon=style.a`
display:flex;
justify-content:center;
`
const Para=style.h3`
text-align:center;
margin-top:20%;
color:
`