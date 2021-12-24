import React from 'react';
import { useHistory } from 'react-router';
import classes from '../../styles/insurance.module.css';
import {InsuranceData} from './InsuranceData';
import LoginContext from '../../Context';
import { Link } from 'react-router-dom';
import { InsurancePrevious } from './InsurancePrevious';


const Insurance = () => {
    const isLogged=React.useContext(LoginContext)['isLogged'];

    const history = useHistory();
    const handleBuyBtn = () => {
        history.push('getAQuote');
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
    const insurance = InsurancePrevious.map((items)=>{
        return(
           
                <tr>
                    <td>{items.srno}</td>
                    <td>{items.policy}</td>
                    <td>{items.asset}</td>
                    <td>{items.premium}</td>
                    <td>{items.status}</td>
                </tr>
           
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
                    {insurance}
                </table>
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
