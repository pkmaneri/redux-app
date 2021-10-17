import React from "react";
import ReduxOne from "./example1";
import ReduxTwo from "./example2";
import ReduxThree from "./example3";
import { BrowserRouter, Link, Route } from "react-router-dom"
import ReduxFour from "./example4";
import ReduxFive from "./example5";
import EditExample from "./editexample";
// import ReduxSix from "./example6";
import ReduxSeven from "./example7";
import EditExampleSeven from "./editexample7";
import MasterTodo from "./component/MasterTodo";
// import Ref from "./ref";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to="/">ReduxOne</Link> </li>
        <li ><Link to="/reduxtwo">ReduxTwo</Link> </li>
        <li ><Link to="/reduxthree">ReduxThree</Link> </li>
        <li ><Link to="/reduxfour">ReduxFour</Link> </li>
        <li ><Link to="/reduxfive">ReduxFive</Link> </li>
        {/* <li ><Link to="/reduxsix">ReduxSix</Link> </li> */}
        <li ><Link to="/reduxseven">ReduxSeven</Link> </li>
        <li ><Link to="/reduxtodo">Todo</Link> </li>

        {/* <li ><Link to="/ref">UseRef</Link> </li> */}


      </ul>
      <Route exact path="/" component={ReduxOne} />
      <Route exact path="/reduxtwo" component={ReduxTwo} />
      <Route exact path="/reduxthree" component={ReduxThree} />
      <Route exact path="/reduxfour" component={ReduxFour} />
      <Route exact path="/reduxfive" component={ReduxFive} />
      {/* <Route exact path="/ref" component={Ref} /> */}
      <Route exact path="/:bookid/editexample" component={EditExample} />
      {/* <Route exact path="/reduxsix" component={ReduxSix} /> */}
      <Route exact path="/reduxseven" component={ReduxSeven} />
      <Route exact path="/reduxtodo" component={MasterTodo} />

      <Route exact path="/:productid/editexampleseven" component={EditExampleSeven} />
    </BrowserRouter>

  );
}

export default App;
