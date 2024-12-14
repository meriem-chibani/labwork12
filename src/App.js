import './App.css';
import { Routes , Route } from "react-router-dom";
import Principale from './pages/Principale';
import Services from './pages/Services';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import Portfolio from './pages/Portfolio';
import FaQ from './pages/FaQ';
import Contacts from './pages/Contacts';
import MakeRequest from './pages/MakeRequest';
import Calculations from './pages/Calculations';
import NavBar from './nav/NavBar';

function App() {
  return (
    <div>
<NavBar/>
<Routes>
    <Route path="/" element= {<Principale/>}></Route>
    <Route path="/services" element= {<Services/>}></Route>
    <Route path="/products" element= {<Products/>}></Route>
    <Route path="/aboutus" element= {<AboutUs/>}></Route>
    <Route path="/portfolio" element= {<Portfolio/>}></Route>
    <Route path="/FAQ" element= {<FaQ/>}></Route>
    <Route path="/contacts" element= {<Contacts/>}></Route>
    <Route path="/make-request" element= {<MakeRequest/>}></Route>
    <Route path="/calculations" element= {<Calculations/>}></Route>
</Routes>
    </div>
  );
}

export default App;
