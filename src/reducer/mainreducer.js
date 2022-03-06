import {combineReducers} from "redux"

import myNumber from "./myreducer";
import itemList from "./arrayreducer";
import productList from "./arrayreducer2";
import dataList  from "./arrayreducer3";
import product from "./productreducer";
import useReducers from "./profilereducer"
import productUserReducer from "./productuserreducer";
import postReducer from "./postarrayreducer";
import EmployeeReducers from "./employeereducer";
const mainreducer=combineReducers(
    {
        myNumber,itemList,productList,dataList,product,data:useReducers,userdata:productUserReducer,
        dataPost:postReducer,empData:EmployeeReducers
    }
)
export default mainreducer;
