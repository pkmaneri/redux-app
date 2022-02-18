import React from "react";

import {one,two} from "./action/myaction"

import { useSelector,useDispatch } from "react-redux";

const ReduxOne=()=>{
    const myNumber=useSelector(state=>state.myNumber) // to fetch data from store
    const dispatch= useDispatch()
    return(
        <div align="center">
            <h1>Redux Example one</h1>
            <h1>{myNumber}</h1>
            <button onClick={()=>dispatch(one())}>Click to + By 10</button>
            <button onClick={()=> dispatch(two())}>Click to - By 10</button>

        </div>
    )
}
export default ReduxOne;


