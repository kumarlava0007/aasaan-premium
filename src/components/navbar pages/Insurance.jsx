import React from 'react';
import { useHistory } from 'react-router';
import classes from '../../styles/insurance.module.css';
import {InsuranceData} from './InsuranceData';
import LoginContext from '../../Context';
import { Link } from 'react-router-dom';
import { InsurancePrevious } from './InsurancePrevious';
import { Domain } from '../../Config';
import axios from 'axios';
import { useState, useEffect } from 'react';


const Insurance = () => {
    const isLogged=React.useContext(LoginContext)['isLogged'];
    const [data, setdata] = useState([])
    const [element, setElement] = useState(<></>);

    const history = useHistory();
    const handleBuyBtn = () => {
        history.push('getAQuote');
    }

    useEffect((e) => {
        const REGISTER_URL=Domain+"/allMyPolicies/"+ localStorage.getItem('mailId');
        axios
      .get(REGISTER_URL)
      .then(response=>{
            console.log(response.data);
            setdata(response.data)
      }).catch((error)=>{
            console.log(error)
      })
      
      const insurance  = data.map((items, index)=>{
        return(
                <tr>
                    <td>{index + 1}</td>
                    <td>{items.policyNo}</td>
                    <td>{items.assetName}</td>
                    <td>{items.premiumAmount}</td>
                    <td>{items.status}</td>
                </tr>
        )
    })
    setElement(insurance);
    }, [localStorage.getItem('isLoggedIn')])

    const handleShow = async(e) => {
        e.preventDefault();
        const REGISTER_URL=Domain+"/allMyPolicies/"+ localStorage.getItem('mailId');
      await axios
      .get(REGISTER_URL)
      .then(response=>{
            console.log(response.data);
            setdata(response.data)
      }).catch((error)=>{
            console.log(error)
      })
      
      const insurance  = data.map((items, index)=>{
        return(
                <tr>
                    <td>{index + 1}</td>
                    <td>{items.policyNo}</td>
                    <td>{items.assetName}</td>
                    <td>{items.premiumAmount}</td>
                    <td>{items.status}</td>
                </tr>
        )
    })
    setElement(insurance);
    }

    const cards = InsuranceData.map((item)=>{
        return(
            <div className={classes.cards}>
                <div className={classes.cards1}>
                    <i class={item.class}></i>
                    <p>{item.p1}</p>
                </div>
                <div className={classes.cards2}>
                    <p>{item.p2}</p>
                    <button className={classes.buyBtn} onClick={handleBuyBtn}>Buy Plan</button>
                </div>
            </div>           
        )
    })
    
    return (
        <div className={classes.container}>
            <h2>Get Insured easily with us</h2>  
            <div className={classes.myinsurance}>   
                <h5>My previous insurances</h5>
                <br />
                {!isLogged ? 
                <>
                <h6>You are logged out :(</h6>
                <h6><Link to="/login">Login</Link> to Know your previous insurances</h6>
                </>
                 : 
                 <>
                 <table>
                    <tr>
                        <th>Sr no.</th>
                        <th>Policy no.</th>
                        <th>Asset Name</th>
                        <th>Premium Amount</th>
                        <th>Status</th>
                    </tr>
                    
                    {element}
                </table>
                <button onClick={handleShow}>Refresh</button>
                </>

                }
            </div>
            <div className={classes.subContainer}>
                {cards}
            </div>
        </div>
    )
}

export default Insurance
