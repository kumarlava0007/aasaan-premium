import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import FirstSectionComponent from "./components/landingPageComponent/FirstSectionComponent";
import icon from "./images/AasaanPremiumLogo.png";
import SecondSectionComponent from "./components/landingPageComponent/SecondSectionComponent";

function App() {
  document.title = "Aasaan Premium";
  document.icon = {icon};
  return (
      <Router>
        <NavComponent />
        <FirstSectionComponent />
        <SecondSectionComponent />
      </Router>
    
  );
}

export default App;
