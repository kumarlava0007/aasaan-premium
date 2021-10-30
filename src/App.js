import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import icon from "./images/AasaanPremiumLogo.png";
import HomePage from "./components/landingPageComponent/HomePage";
import LoginPage from "./components/userPage/LoginPage"
import SignUp from "./components/userPage/SignUp";
import ForgotPass from "./components/userPage/ForgotPass";
import Footer from "./components/Footer";
function App() {
  document.title = "Aasaan Premium";
  document.icon = {icon};
  return (
      <Router>
        <NavComponent />
        <Switch>
          <Route exact path="/" component={HomePage}/>
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