import React from "react";
import ReduxOne from "./example1";
import ReduxTwo from "./example2";
import ReduxThree from "./example3";
import { HashRouter, Link, Route } from "react-router-dom"

function App() {
  return (
    <HashRouter>
    <ul>
      <li><Link to="/">ReduxOne</Link> </li>
      <li ><Link to="/reduxtwo">ReduxTwo</Link> </li>
      <li ><Link to="/reduxthree">ReduxThree</Link> </li>
     
    </ul>
    <Route exact path="/" component={ReduxOne}/>
    <Route exact path="/reduxtwo" component={ReduxTwo}/>
    <Route exact path="/reduxthree" component={ReduxThree}/>
  </HashRouter>
     
  );
}

export default App;
