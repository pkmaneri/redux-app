import {combineReducers} from "redux"

import myNumber from "./myreducer";
import itemList from "./arrayreducer";
import productList from "./arrayreducer2";

const mainreducer=combineReducers(
    {
        myNumber,itemList,productList
    }
)
export default mainreducer;
