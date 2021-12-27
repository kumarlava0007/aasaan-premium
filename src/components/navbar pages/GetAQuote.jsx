import React, { useState } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import classes from '../../styles/getAQuote.module.css';
// import {FaEnvelope, FaEnvelopeOpen, FaHome, FaUser} from "react-icons/fa";
import ip from '../../images/ip.png';
import { Domain } from '../../Config';
import axios from "axios";

const GetAQuote = () => {
    const history = useHistory();

    const [disable, setDisable] = useState(false);
    const [disable2, setDisable2] = useState(true);

    const [headFlag, setHeadFlag] = useState(true);
    const [flag, setFlag] = useState(false);
    const [flagOne, setFlagOne] = useState(true);
    const [flagTwo, setFlagTwo] = useState(true);
    const [flagOptional, setFlagOptional] = useState(false);
    const [flagThree, setFlagThree] = useState(false);
    const [flagFour, setFlagFour] = useState(false);
    const [flagFive, setFlagFive] = useState(false);
    const [flagSix, setFlagSix] = useState(false);

    const [flagElectronic, setFlagElectronic] = useState(false);
    const [flagVehicle, setFlagVehicle] = useState(false);

    const [flagYearly, setFlagYearly] = useState(true);
    const [flagMonthly, setFlagMonthly] = useState(false);

    const [zipcode, setZipcode] = useState("");
    const [inputs, setinputs] = useState({});
    let count = 0;

    const handleBuyBtn = async(e) => {
        e.preventDefault();
        let REGISTER_URL = Domain + "/getAQuote";
        setinputs(values => ({...values, mailId: localStorage.getItem('mailId')}))
        console.log(inputs.mailId)
        await axios
            .post(REGISTER_URL, inputs)
            .then(response => {
                console.log(response)
            }).catch((error) => {
                console.log(error)
            })
        REGISTER_URL = Domain + "/addPolicy"
        await axios
        .post(REGISTER_URL, inputs)
        .then(response => {
            console.log(response)
            history.push("/insurance")
        }).catch((error) => {
            console.log(error)
        })
    }

    const handleHead = () => {
        setHeadFlag(false);
        setFlag(true);
    }

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setinputs(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleBI = (event) => {
        if (event.target.value === 'business') {
            setFlagTwo(true);
            setFlagOptional(false);
        }
        else {
            setFlagOptional(true);
            setFlagTwo(false);

        }
        console.log(event.target.value);
    }

    const inputsFun = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setinputs(values => ({ ...values, [name]: value }));
        console.log(inputs);
    }

    const handleService = (event) => {
        if (event.target.value === 'car' || event.target.value === 'laptopComp' || event.target.value === 'mobileTablet' || event.target.value === 'boat') {
            count++;
        }
        if (event.target.value === 'fire' || event.target.value === 'theft') {
            count++;
        }
        if (event.target.value === 'col') {
            count++;
        }
        if(count === 2){
            setDisable(false);
        }
    }

    const handleBtn1 = () => {
        setFlagOne(false);
        setFlagThree(true);
        console.log(inputs, "inpurtscsvdhg");
    }

    const handleBtn2 = () => {
        setFlagFour(true);
        setFlagThree(false);
        console.log(inputs, "inpurtscsvdhg");

    }
    const handleZip = (event) => {
        setZipcode(event.target.value);
        if (zipcode.length === 4) {
            setDisable2(false);
        }
    }

    const handlebtn3 = () => {
        setFlagFour(false);
        setFlagFive(true);
        console.log(inputs, "inpurtscsvdhg");
    }

    const handleProductType = (event) => {

        if (event.target.value === "car" || event.target.value === "bike" || event.target.value === "boat" || event.target.value === "auto") {
            setFlagVehicle(true);
            setFlagElectronic(false);
        }
        else {
            setFlagElectronic(true);
            setFlagVehicle(false);
        }

    }

    const [amount, setamount] = useState(0)
    const [deduct, setdeduct] = useState(0)
    const handlebtn4 = () => {
        setFlagFive(false);
        setFlagSix(true);
        console.log(inputs, "inpurtscsvdhg");
        let value = inputs.purchaseValue;
        console.log(value);
        // <option value="lessThan10" >Less than 10,000</option>
        //                             <option value="10To25" >10,000 - 25,000</option>
        //                             <option value="25To50" >25,000 - 50,000</option>
        //                             <option value="50To80" >50,000 - 80,000 </option>
        //                             <option value="80To1Lakh" >80,000 - 1,00,000</option>
        //                             <option value="above1Lakh" >Greater Than 1,00,000</option>
        let val = "0";
        switch (value){
            case "lessThan10": {
                setamount(2500)
                val = "2500";
                setdeduct(250)
                break;
            }
            case "10To25": {
                setamount(4000)
                val = "4000";
                setdeduct(400)
                break;
            }
            case "25To50": {
                setamount(8000);
                val = "8000";
                setdeduct(800)
                break;
            }
            case "50To80": {
                setamount(12000)
                val = "12000";
                setdeduct(1200)
                break;
            }
            case "80To1Lakh": {
                setamount(15000)
                val = "15000"
                setdeduct(1500)
                break;
            }
            case "above1Lakh": {
                setamount(18800)
                val = "18800";
                setdeduct(1880)
                break;
            }
        }
        const name = "premiumAmount";
        setinputs(values => ({...values, [name]: val}))
        
    }

    const premiumYearly = () => {
        setFlagYearly(true);
        setFlagMonthly(false);
    }
    const premiumMonthly = () => {
        setFlagYearly(false);
        setFlagMonthly(true);
    }

    const handleBackbutton = () => {
        setFlagSix(false);
        setFlagFive(true);
        // setFlagYearly(false);
        // setFlagMonthly(false);

    }

    const handleBackZip = () => {
        setFlagOne(true);
        setFlagTwo(true);
        setFlagThree(false);
    }

    const handleBackPersonal = () => {
        setFlagFour(false);
        setFlagThree(true);
    }

    const handleBackProduct = () => {
        setFlagFour(true);
        setFlagFive(false);
    }


    const handleFun = (event) => {
        setFlagOne(false)
        setFlagTwo(false)
        setFlagThree(true);
        event.preventDefault();
        console.log(inputs, "inpurtscsvdhg");
    }
    return (
        <>
            <section className={classes.contentStart}>
                {headFlag &&
                    <div className={classes.outerDiv}>
                        <h2 className={classes.heading}>Get promising insurance with just few clicks </h2>
                        <br />
                        <div>
                            <h5>Aasaan Premium provides premium on every product you need in</h5>
                            <h5> just 5 minutes</h5>
                            <br />
                        </div>
                        <div className={classes.paraContent}>
                            <div>
                                <ul style={{ color: "gray" }}>
                                    <li>Anytime Anywhere</li>
                                    <li>Save time and energy</li>
                                    <li>24*7 Availability</li>
                                </ul>
                            </div>
                            <div className={classes.getAQuote}
                                // onClick = {(e) => {history.push('/login')}} 
                                onClick={handleHead}
                            >
                                <h5>Get a Quote →</h5>
                            </div>

                        </div>


                    </div>}

                {flag && <div className={classes.secondPage}>

                    <img src={ip} alt="Insurance Premium" />

                    {flagOne &&

                        <div className={classes.types}>

                            <h2
                                className={classes.heading}
                            >Insurance Details</h2> <br />
                            <h6 className={classes.subheading}><strong>Type of Insurance</strong></h6>
                            <select name="typesOfInsurance" id="typesOfInsurance" onChange={handleChange}>
                                <option selected>--Select an option--</option>
                                <option value="general" >General Insurance</option>
                                <option value="vehicle" >Vehicle Insurance</option>
                                <option value="business">Business Insurance</option>
                                <option value="personal" >Personal Insurance</option>
                                <option value="health" >Health Insurance</option>
                                <option value="financial" >Financial Insurace</option>
                                <option value="property" >Property Insurace</option>

                            </select>
                            <br />

                            {
                                flagOptional &&
                                <div className={classes.sorryPage}>
                                    <p>Sorry! We don't provide insurance on the selected option :(</p>
                                    <h5>You can visit <NavLink to="/insurance">Insurance Summary</NavLink> for more details.</h5>

                                </div>
                            }
                            {flagTwo &&
                                <>
                                    <h6 className={classes.subheading}><strong>Protection Options</strong></h6>

                                    <select name="protectionOption" id="protectionOption" onChange={handleChange}
                                    >
                                        <option value selected defaultValue>--Select an option--</option>
                                        <option disabled value="general" >General Liability</option>
                                        {/* <option value="bpo" >Business Owner's Policy</option> */}
                                        <option value="Commercial Property Insurance">Commercial Property Insurance</option>
                                        <option disabled value="compensation" >Workers' Compensation</option>
                                        <option disabled value="prof" >Professional Liability</option>

                                    </select>
                                    <br />

                                    {/* <h6 className={classes.subheading}>Product type </h6>

                                        <select name="serviceProvided" id="serviceProvided"
                                        >
                                            <option disabled selected value>--Select an option--</option>
                                            <option value="car" >Car/Two Wheeler</option>
                                            <option value="laptopComp" >Laptop / Computer</option>
                                            <option value="mobileTablet" >Mobile / Tablet </option>
                                            <option value="boat" >Boat </option>
                                            <option value="home" >Home </option>

                                        </select>
                                        <br /> */}


                                    <h6 className={classes.subheading}><strong>Cause of Risks</strong></h6>
                                    <select name="causeOfRisks" id="causeOfRisks" onChange={handleChange}
                                    >
                                        <option disabled selected value>--Select an option--</option>
                                        <option value="financial" disabled>Financial</option>
                                        <option value="fire" >Fire</option>
                                        <option value="theft" >Theft</option>
                                        <option value="natural" disabled>Human Resourse</option>

                                    </select>
                                    <br />
                                    <button className={classes.btn1} disabled={disable} onClick={handleBtn1}>Next →</button>
                                </>

                            }
                        </div>}

                    {flagThree &&
                        <div className={classes.details}>
                            <h2 className={classes.heading}>Enter Zip</h2>
                            <br />
                            <input type="number" name="pinCode" id="pinCode" min={5} max={5} value={zipcode} onChange={handleChange}
                                onInput={handleZip} placeholder="Zip Code" />

                            <br />
                            <div className={classes.divButton}>
                                <button className={classes.backButton} onClick={handleBackZip}>Back</button>
                                <button className={classes.btn2} disabled={disable2} onClick={handleBtn2}>Next →</button>
                            </div>

                        </div>

                    }

                    {flagFour &&
                        <div className={classes.personalInfo}>
                            <div className={classes.innerDiv}>
                                <h2 className={classes.heading}>Personal Information</h2>

                            </div>
                            <div className={classes.innerDiv}>
                                
                            </div>

                            <div className={classes.innerDiv}>
                                <input autoComplete="off" type="text" name="aadharNo" id="aadharNo" placeholder="AadharNo" required onChange={handleChange} style={{width: "400px"}}/>
                                <br />
                                <input autoComplete="off" type="number" name="phone" id="phone" placeholder="Phone number " required onChange={handleChange} style={{width: "400px"}} />
                            </div>



                            <div className={classes.maritalStatus}>
                                <div className={classes.innerDiv}>

                                    <label htmlFor="marital">Marital Status:</label>

                                    <label htmlFor="marital">Single</label>
                                    <input type="radio" name="marital" id="marital" required onChange={handleChange} />
                                    <label htmlFor="marital">Married</label>
                                    <input type="radio" name="marital" id="marital" required onChange={handleChange} />

                                </div>

                            </div>

                            <div>
                                <div className={classes.innerDiv}>
                                    <input type="textarea" name="fullAddress" id="fullAddress" placeholder="House-No" required onChange={handleChange} style={{width: "400px"}} />
                                </div>

                                <div className={classes.innerDiv}>
                                    <input type="text" name="city" id="city" placeholder="City" onChange={handleChange} style={{width: "190px"}} />
                                    <input type="text" name="state" id="state" placeholder="State/Province" onChange={handleChange} style={{width: "190px"}}/>
                                </div>
                            </div>

                            <div className={classes.checkbox}>
                                <input type="checkbox" id="check" onChange={handleChange} />
                                <label htmlFor="check">I agree that all the information entered is correct</label>
                            </div>

                            <div className={classes.divButton}>
                                <button className={classes.backButton} onClick={handleBackPersonal}>Back</button>

                                <button className={classes.btn3}
                                    onClick={handlebtn3}>Continue</button>
                            </div>



                        </div>

                    }

                    {flagFive &&
                        <div className={classes.assetDetails}>
                            <div className={classes.innerDiv}>
                                <h2 className={classes.heading}>Product Details</h2><br />
                            </div>

                            <div className={classes.innerDiv}>
                                <div>
                                    <label htmlFor="">Product Type: </label>
                                    <select name="productType" id="productType"
                                        onInput={handleProductType} onChange={handleChange}
                                    >
                                        <option disabled selected value>--Select an option--</option>
                                        <option value="car" >Car</option>
                                        <option value="bike" >Bike</option>
                                        <option value="auto" >Auto</option>
                                        <option value="boat" >Boat </option>
                                        <option value="laptop" >Laptop</option>
                                        <option value="computer" >Computer</option>
                                        <option value="mobile" >Mobile</option>
                                        <option value="tablet" >Tablet </option>

                                    </select>
                                </div>

                            </div>

                            {(flagElectronic || flagVehicle) &&
                                <>
                                    <div className={classes.innerDiv}>
                                        <div>
                                            <label htmlFor="">Product Make: </label>
                                            {flagElectronic &&
                                                <select name="productMake" id="productMake" onChange={handleChange}
                                                // onChange={handleProductMake}
                                                >
                                                    <option disabled selected value>--Select an option--</option>
                                                    <option value="Lenovo" >Lenovo</option>
                                                    <option value="Asus" >Asus</option>
                                                    <option value="Apple" >Apple</option>
                                                    <option value="Sony" >Sony </option>
                                                    <option value="Microsoft" >Microsoft</option>
                                                    <option value="Nokia" >Nokia</option>
                                                    <option value="Dell" >Dell</option>
                                                    <option value="Acer" >Acer </option>

                                                </select>}
                                            {flagVehicle &&
                                                <select name="productMake" id="productMake" onChange={handleChange}
                                                // onChange={handleProductMake}
                                                >
                                                    <option disabled selected value>--Select an option--</option>
                                                    <option value="Ford" >Ford</option>
                                                    <option value="Chevrolet" >Chevrolet</option>
                                                    <option value="Honda" >Honda</option>
                                                    <option value="Nissan" >Nissan </option>
                                                    <option value="Toyota" >Toyota</option>
                                                    <option value="Volkswagen" >Volkswagen</option>
                                                    <option value="Mahindra" >Mahindra</option>
                                                    <option value="Hyundai" >Hyundai </option>

                                                </select>}
                                        </div>

                                    </div>

                                    <div className={classes.innerDiv}>
                                        <label htmlFor="productModel">Product Model: </label>
                                        <input type="text" autoComplete="off" placeholder="Eg: Yamaha MT-15" name="productModel" required onChange={handleChange} />
                                    </div>

                                </>
                            }
                            <div className={classes.innerDiv}>
                                <label htmlFor="yearOfPurchase">Year of Purchase: </label>
                                <input type="date" name="yearOfPurchase" id="yearOfPurchase" onChange={handleChange} />
                            </div>
                            <div className={classes.innerDiv}>
                                <label htmlFor="purchaseValue">Purchase Value: </label>
                                <select name="purchaseValue" id="purchaseValue" onChange={handleChange}
                                // onChange={handlePurchaseValue}
                                >
                                    <option disabled selected value>--Select an option--</option>
                                    <option value="lessThan10" >Less than 10,000</option>
                                    <option value="10To25" >10,000 - 25,000</option>
                                    <option value="25To50" >25,000 - 50,000</option>
                                    <option value="50To80" >50,000 - 80,000 </option>
                                    <option value="80To1Lakh" >80,000 - 1,00,000</option>
                                    <option value="above1Lakh" >Greater Than 1,00,000</option>

                                </select>
                            </div>
                            <div className={classes.divButton}>
                                <button className={classes.backButton} onInput={handleBackProduct} onChange={handleChange}>Back</button>

                                <button className={classes.btn4}
                                    onClick={handlebtn4}>Next</button>
                            </div>

                        </div>

                    }

                    {
                        flagSix &&
                        <div className={classes.premium}>
                            <div className={classes.innerDiv}>
                                <h2 className={classes.heading}>Premium Amount </h2>
                            </div>

                            <div className={classes.innerDiv}>
                                <div className={classes.radioDiv}>
                                    <div>
                                        <input type="radio" name="monthlyOrYearly" id="monthlyOrYearly" defaultChecked onClick={premiumYearly} onChange={handleChange} />
                                        <label htmlFor="monthlyOrYearly">Per Year</label>
                                    </div>

                                    <div>
                                        <input type="radio" name="monthlyOrYearly" id="monthlyOrYearly" onClick={premiumMonthly} onChange={handleChange} />
                                        <label htmlFor="monthlyOrYearly">Per Month</label>
                                    </div>
                                </div>



                            </div>

                            {flagYearly && <div className={classes.innerDiv}>
                                <div className={classes.innerHeading}>
                                    <h3>₹ {amount}/year </h3>
                                    {/* <h5>₹ 12,000/year</h5> */}
                                </div>

                                <h4 style={{ textAlign: "center" }}>with Deductible of ₹{deduct}</h4>
                                <div className={classes.divButton}>
                                    <button className={classes.backButton} onClick={handleBackbutton}>Back</button>
                                    <button className={classes.buyBtn} onClick={handleBuyBtn}>Buy Plan</button>
                                </div>

                            </div>}

                            {flagMonthly && <div className={classes.innerDiv}>
                                <div className={classes.secondInnerHeading}>
                                    <h3>₹ 1,000/month </h3>
                                    <p>You can avail 10% discount on buying yearly insurance</p>
                                </div>
                                <h4 style={{ textAlign: "center" }}>with Deductible of ₹ 1500</h4>
                                <br />
                                <div className={classes.divButton}>
                                    <button className={classes.backButton} onClick={handleBackbutton}>Back</button>
                                    <button className={classes.buyBtn} onClick={handleBuyBtn}>Buy Plan</button>
                                </div>

                            </div>}


                        </div>
                    }

                </div>}

            </section>
        </>
    )
}

export default GetAQuote;