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
import useReducer from "./reducer";
// import CompA from "./component/Hoc/compA";
// import CompB from "./component/Hoc/compB";
// import Home from "./lazyloading/home";
// import { Suspense, lazy } from "react";
import Ref from "./ref";
import UseMemo from "./usememo/usememo";
import Employee from "./employee/employee";
import EmployeeEdit from "./employee/employeeEdit";


// const Home = lazy(() => import("./Home"))
// const About = lazy(() => import("./About"))


function App() {
  return (
    
    // <div>
    //   <h1>Lazy Loading</h1>
    //   <Suspense fallback={<div>please wait...</div>}>
    //     <About />
    //   </Suspense>
    //   <Suspense fallback={<div>please wait...</div>}>
    //     <Home />
    //   </Suspense>
    // </div>

    <BrowserRouter>
      <ul>
        <li><Link to="/">ReduxOne</Link> </li>
        <li ><Link to="/reduxtwo">ReduxTwo</Link> </li>
        <li ><Link to="/reduxthree">ReduxThree</Link> </li>
        <li ><Link to="/reduxfour">ReduxFour</Link> </li>
        <li ><Link to="/reduxfive">ReduxFive</Link> </li>
        <li ><Link to="/reduxsix">ReduxSix</Link> </li>
        <li ><Link to="/reduxseven">ReduxSeven</Link> </li>
        <li ><Link to="/reduxtodo">Todo</Link> </li>
        <li ><Link to="/usereducer">UseReducer</Link> </li>
        <li ><Link to="/ref">UseRef</Link> </li>
        <li ><Link to="/usememo">UseMemo</Link> </li>
        <li ><Link to="/employee">Employee</Link> </li>
      </ul>

      <Route exact path="/" component={ReduxOne} />
      <Route exact path="/reduxtwo" component={ReduxTwo} />
      <Route exact path="/reduxthree" component={ReduxThree} />
      <Route exact path="/reduxfour" component={ReduxFour} />
      <Route exact path="/reduxfive" component={ReduxFive} />
      <Route exact path="/ref" component={Ref} />
      <Route exact path="/:bookid/editexample" component={EditExample} />
      {/* <Route exact path="/reduxsix" component={ReduxSix} /> */}
      <Route exact path="/reduxseven" component={ReduxSeven} />
      <Route exact path="/reduxtodo" component={MasterTodo} />
      <Route exact path="/usereducer" component={useReducer} />
      <Route exact path="/usememo" component={UseMemo} />
      <Route exact path="/employee" component={Employee} />
      <Route exact path="/:employeeid/editemployee" component={EmployeeEdit} />
      <Route exact path="/:productid/editexampleseven" component={EditExampleSeven} />
    </BrowserRouter>

  );
}

export default App;
