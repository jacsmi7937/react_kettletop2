import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Menu from "./Menu";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
             <h1>Kettletop BrewHouse</h1>
             <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/menu">Menu</NavLink></li>
                <li><NavLink to="/aboutus">About Us</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
             </ul>
             <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/menu" component={Menu}/>
                <Route path="/aboutus" component={AboutUs}/>
                <Route path="/contact" component={Contact}/>
             </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;