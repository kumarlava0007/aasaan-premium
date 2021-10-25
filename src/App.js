import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import NavComponent from "./components/NavComponent";
import FirstSectionComponent from "./components/landingPageComponent/FirstSectionComponent";
import icon from "./images/AasaanPremiumLogo.png";

function App() {
  document.title = "Aasaan Premium";
  document.icon = {icon};
  return (
      <Router>
        <NavComponent />
        <FirstSectionComponent />
      </Router>
    
  );
}

export default App;
