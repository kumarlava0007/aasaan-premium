import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import HomePage from "./components/landingPageComponent/HomePage";
import LoginPage from "./components/userPage/LoginPage"
import SignUp from "./components/userPage/SignUp";
import ForgotPass from "./components/userPage/ForgotPass";
import Footer from "./components/Footer";
import About from "./components/navbar pages/About";
import PayABill from "./components/navbar pages/PayABill";
import Insurance from "./components/navbar pages/Insurance";
import GetAQuote from "./components/navbar pages/GetAQuote";
import Claims from "./components/navbar pages/Claims";
import FindAnAgent from "./components/navbar pages/FindAnAgentTwo";

function App() {
  return (
      <Router>
        <NavComponent />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/insurance" component={Insurance}/>
          <Route path="/getAQuote" component={GetAQuote}/>
          <Route path="/payabill" component={PayABill}/>
          <Route path="/claims" component={Claims}/>
          <Route path="/findAnAgent" component={FindAnAgent}/>
          <Route path="/about" component={About}/>
          <Route path="/login" component={LoginPage}/>
          <Switch>
            <Route path="/signup" component={SignUp}/>
            <Route path="/forgotpassword" component={ForgotPass}/>
          
          </Switch>
        </Switch>
        <Footer />
      </Router>
    
  );
}

export default App;