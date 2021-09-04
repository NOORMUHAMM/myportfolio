import './App.css';
import {Route, Switch,BrowserRouter } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';
import Home from "./Component/Home"
import About from "./Component/About"
import Contact from "./Component/Contact"
import Skill from "./Component/Skill"
import Work from "./Component/Work"
import NotFound from "./Component/Work"

function App() {
  return (
    <BrowserRouter>
    <>
    
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Skill" component={Skill} />
          <Route exact path="/Work" component={Work} />
          <Route component={NotFound}/>
        </Switch>
     
    </>
    </BrowserRouter>
  );
}

export default App;
