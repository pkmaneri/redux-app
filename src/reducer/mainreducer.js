import {combineReducers} from "redux"

import myNumber from "./myreducer";
import itemList from "./arrayreducer";
import productList from "./arrayreducer2";
import dataList  from "./arrayreducer3";

const mainreducer=combineReducers(
    {
        myNumber,itemList,productList,dataList
    }
)
export default mainreducer;
