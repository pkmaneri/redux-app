import React from "react";
import ReduxOne from "./example1";
import ReduxTwo from "./example2";
import ReduxThree from "./example3";
import { HashRouter, Link, Route } from "react-router-dom"
import ReduxFour from "./example4";
import ReduxFive from "./example5";
import EditExample from "./editexample";
import ReduxSix from "./example6";

function App() {
  return (
    <HashRouter>
    <ul>
      <li><Link to="/">ReduxOne</Link> </li>
      <li ><Link to="/reduxtwo">ReduxTwo</Link> </li>
      <li ><Link to="/reduxthree">ReduxThree</Link> </li>
      <li ><Link to="/reduxfour">ReduxFour</Link> </li>
      <li ><Link to="/reduxfive">ReduxFive</Link> </li>
      <li ><Link to="/reduxsix">ReduxSix</Link> </li>



     
    </ul>
    <Route exact path="/" component={ReduxOne}/>
    <Route exact path="/reduxtwo" component={ReduxTwo}/>
    <Route exact path="/reduxthree" component={ReduxThree}/>
    <Route exact path="/reduxfour" component={ReduxFour}/>
    <Route exact path="/reduxfive" component={ReduxFive}/>
    <Route exact path="/:bookid/editexample" component={EditExample}/>
    <Route exact path="/reduxsix" component={ReduxSix}/>



  </HashRouter>
     
  );
}

export default App;
